<?php
/**
 * SPARROW CREATIVE ACADEMY — Contact mailer
 * Endpoint: POST /api/contact.php
 */

$allowedOrigins = [
    'https://sparrowacademy.online',
    'https://www.sparrowacademy.online',
];
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (in_array($origin, $allowedOrigins, true)) {
    header('Access-Control-Allow-Origin: ' . $origin);
    header('Vary: Origin');
} elseif ($origin === '') {
    // Same-origin browser requests (typical production + Vite proxy) send no Origin.
    header('Access-Control-Allow-Origin: https://sparrowacademy.online');
}
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json; charset=UTF-8');
header('X-Content-Type-Options: nosniff');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed. Only POST is accepted.']);
    exit();
}

function sca_json_exit($code, $payload)
{
    http_response_code($code);
    echo json_encode($payload);
    exit();
}

function sca_sanitize_header($value)
{
    return trim(str_replace(["\r", "\n", "\0"], '', (string) $value));
}

function sca_client_ip()
{
    return $_SERVER['REMOTE_ADDR'] ?? '0.0.0.0';
}

function sca_load_config()
{
    $candidates = [
        dirname(__DIR__, 2) . DIRECTORY_SEPARATOR . 'config.php', // project root / above public_html
        dirname(__DIR__) . DIRECTORY_SEPARATOR . 'config.php',
        __DIR__ . DIRECTORY_SEPARATOR . 'config.php',
    ];
    foreach ($candidates as $path) {
        if (is_file($path)) {
            $cfg = include $path;
            if (is_array($cfg)) {
                return $cfg;
            }
        }
    }
    return null;
}

function sca_load_phpmailer()
{
    $bases = [
        __DIR__ . '/lib/PHPMailer/src',
        __DIR__ . '/vendor/phpmailer/phpmailer/src',
    ];
    foreach ($bases as $base) {
        if (is_file($base . '/PHPMailer.php') && is_file($base . '/SMTP.php') && is_file($base . '/Exception.php')) {
            require_once $base . '/Exception.php';
            require_once $base . '/SMTP.php';
            require_once $base . '/PHPMailer.php';
            return true;
        }
    }
    return false;
}

function sca_rate_limit($file, $limit, $windowSeconds)
{
    $ip = sca_client_ip();
    $now = time();
    $data = [];
    if (is_file($file)) {
        $raw = file_get_contents($file);
        $decoded = json_decode($raw, true);
        if (is_array($decoded)) {
            $data = $decoded;
        }
    }
    $hits = isset($data[$ip]) && is_array($data[$ip]) ? $data[$ip] : [];
    $hits = array_values(array_filter($hits, function ($ts) use ($now, $windowSeconds) {
        return is_numeric($ts) && ($now - (int) $ts) < $windowSeconds;
    }));
    if (count($hits) >= $limit) {
        return false;
    }
    $hits[] = $now;
    $data[$ip] = $hits;
    // Drop stale IPs
    foreach ($data as $key => $list) {
        if (!is_array($list) || count($list) === 0) {
            unset($data[$key]);
        }
    }
    @file_put_contents($file, json_encode($data), LOCK_EX);
    return true;
}

function sca_log_submission($file, $row)
{
    $line = json_encode($row, JSON_UNESCAPED_UNICODE) . PHP_EOL;
    @file_put_contents($file, $line, FILE_APPEND | LOCK_EX);
}

function sca_send_with_phpmailer(array $cfg, $to, $subject, $body, $replyTo, $replyName)
{
    $mail = new PHPMailer\PHPMailer\PHPMailer(true);
    $mail->isSMTP();
    $mail->Host       = $cfg['smtp_host'];
    $mail->SMTPAuth   = true;
    $mail->Username   = $cfg['smtp_user'];
    $mail->Password   = $cfg['smtp_pass'];
    $mail->Port       = (int) ($cfg['smtp_port'] ?? 465);
    $secure           = strtolower((string) ($cfg['smtp_secure'] ?? 'ssl'));
    $mail->SMTPSecure = $secure === 'tls'
        ? PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_STARTTLS
        : PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_SMTPS;
    $mail->CharSet    = 'UTF-8';
    $from = $cfg['smtp_from'] ?? $cfg['smtp_user'];
    $fromName = $cfg['smtp_from_name'] ?? 'Sparrow Creative Academy';
    $mail->setFrom($from, $fromName);
    $mail->addAddress($to);
    $mail->addReplyTo($replyTo, $replyName);
    $mail->Subject = $subject;
    $mail->Body    = $body;
    $mail->isHTML(false);
    $mail->send();
    return true;
}

$rawInput = file_get_contents('php://input');
$data = json_decode($rawInput, true);
if (!$data) {
    $data = $_POST;
}

$honeypot = isset($data['website_hp']) ? trim((string) $data['website_hp']) : '';
if ($honeypot !== '') {
    // Silent success for bots
    sca_json_exit(200, [
        'success' => true,
        'message' => 'Thank you! Your consultation request has been received. Our admissions team will get in touch shortly.',
    ]);
}

$fullName = sca_sanitize_header(isset($data['fullName']) ? strip_tags($data['fullName']) : '');
$email    = sca_sanitize_header(isset($data['email']) ? $data['email'] : '');
$phone    = sca_sanitize_header(isset($data['phone']) ? strip_tags($data['phone']) : '');
$course   = trim(strip_tags(isset($data['course']) ? $data['course'] : ''));
$time     = trim(strip_tags(isset($data['preferredTime']) ? $data['preferredTime'] : 'Flexible'));
$message  = trim(strip_tags(isset($data['message']) && $data['message'] !== '' ? $data['message'] : 'General course and admissions enquiry'));

if ($fullName === '' || $email === '' || $phone === '' || $course === '') {
    sca_json_exit(400, ['success' => false, 'message' => 'Please fill in all required fields.']);
}

if (mb_strlen($fullName) > 120 || mb_strlen($email) > 254 || mb_strlen($phone) > 40
    || mb_strlen($course) > 200 || mb_strlen($time) > 80 || mb_strlen($message) > 4000) {
    sca_json_exit(400, ['success' => false, 'message' => 'One or more fields exceed the allowed length.']);
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    sca_json_exit(400, ['success' => false, 'message' => 'Invalid email format.']);
}

$rateFile = __DIR__ . DIRECTORY_SEPARATOR . 'rate-limit.json';
if (!sca_rate_limit($rateFile, 5, 3600)) {
    sca_json_exit(429, [
        'success' => false,
        'message' => 'Too many submissions from this connection. Please wait and try again, or reach us on WhatsApp.',
    ]);
}

$cfg = sca_load_config();
$recipientEmail = (is_array($cfg) && !empty($cfg['recipient'])) 
    ? trim((string) $cfg['recipient']) 
    : 'enquiry@sparrowacademy.online';

$emailBody  = "=================================================\n";
$emailBody .= "SPARROW CREATIVE ACADEMY — NEW CONSULTATION REQUEST\n";
$emailBody .= "=================================================\n\n";
$emailBody .= "Candidate Name: " . $fullName . "\n";
$emailBody .= "Email Address:  " . $email . "\n";
$emailBody .= "Phone Number:   " . $phone . "\n";
$emailBody .= "Course Interested: " . $course . "\n";
$emailBody .= "Preferred Schedule: " . $time . "\n\n";
$emailBody .= "Message / Query:\n" . $message . "\n\n";
$emailBody .= "Submitted on: " . date('Y-m-d H:i:s') . " (Server Time)\n";
$emailBody .= "Client IP:    " . sca_client_ip() . "\n";

$subject = 'New Free Consultation Enquiry: ' . $course . ' - ' . $fullName;

$logFile = __DIR__ . DIRECTORY_SEPARATOR . 'submissions.log';
sca_log_submission($logFile, [
    'ts'      => date('c'),
    'ip'      => sca_client_ip(),
    'fullName'=> $fullName,
    'email'   => $email,
    'phone'   => $phone,
    'course'  => $course,
    'preferredTime' => $time,
    'message' => $message,
]);

$mailSent = false;
$mailError = '';

$hasSmtpCreds = is_array($cfg) && !empty($cfg['smtp_pass']) && !empty($cfg['smtp_user']);

if ($hasSmtpCreds) {
    try {
        if (sca_load_phpmailer()) {
            $mailSent = sca_send_with_phpmailer($cfg, $recipientEmail, $subject, $emailBody, $email, $fullName);
        } else {
            require_once __DIR__ . '/SmtpMailer.php';
            $mailSent = sca_smtp_send($cfg, $recipientEmail, $subject, $emailBody, $email, $fullName);
        }
    } catch (Throwable $e) {
        $mailError = $e->getMessage();
        $mailSent = false;
    }
}

// Fallback to PHP mail()
if (!$mailSent) {
    $from = is_array($cfg) ? ($cfg['smtp_from'] ?? 'enquiry@sparrowacademy.online') : 'enquiry@sparrowacademy.online';
    $fromName = is_array($cfg) ? ($cfg['smtp_from_name'] ?? 'Sparrow Creative Academy') : 'Sparrow Creative Academy';
    $headers  = 'From: ' . $fromName . ' <' . $from . ">\r\n";
    $headers .= 'Reply-To: ' . $fullName . ' <' . $email . ">\r\n";
    $headers .= 'X-Mailer: PHP/' . phpversion() . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
    $mailSent = @mail($recipientEmail, $subject, $emailBody, $headers);
}

// Send automated confirmation email to candidate
if ($email !== '' && filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $candSubject = 'Consultation Request Received – Sparrow Creative Academy';
    $candBody  = "Dear " . $fullName . ",\n\n";
    $candBody .= "Thank you for inquiring with Sparrow Creative Academy!\n\n";
    $candBody .= "We have successfully received your consultation request for:\n";
    $candBody .= "• Course: " . $course . "\n";
    $candBody .= "• Preferred Schedule: " . $time . "\n";
    $candBody .= "• Contact Number: " . $phone . "\n\n";
    $candBody .= "Our admissions team will review your enquiry and connect with you shortly via phone or WhatsApp.\n\n";
    $candBody .= "Direct Contact & Campus Details:\n";
    $candBody .= "• Phone: +91 81233 66153\n";
    $candBody .= "• WhatsApp: https://wa.me/918123366153\n";
    $candBody .= "• Email: enquiry@sparrowacademy.online\n";
    $candBody .= "• Campus: No. 04, Amco Layout, Near Impact College, Sahakar Nagar, Kodigehalli, Bengaluru, Karnataka – 560092\n";
    $candBody .= "• Website: https://sparrowacademy.online/\n\n";
    $candBody .= "Warm regards,\nAdmissions Team\nSparrow Creative Academy\n";

    if ($hasSmtpCreds) {
        try {
            if (sca_load_phpmailer()) {
                @sca_send_with_phpmailer($cfg, $email, $candSubject, $candBody, $recipientEmail, 'Sparrow Creative Academy');
            } else {
                @sca_smtp_send($cfg, $email, $candSubject, $candBody, $recipientEmail, 'Sparrow Creative Academy');
            }
        } catch (Throwable $e) {}
    } else {
        $from = 'enquiry@sparrowacademy.online';
        $candHeaders  = 'From: Sparrow Creative Academy <' . $from . ">\r\n";
        $candHeaders .= 'Reply-To: Sparrow Creative Academy <' . $from . ">\r\n";
        $candHeaders .= 'X-Mailer: PHP/' . phpversion() . "\r\n";
        $candHeaders .= "MIME-Version: 1.0\r\n";
        $candHeaders .= "Content-Type: text/plain; charset=UTF-8\r\n";
        @mail($email, $candSubject, $candBody, $candHeaders);
    }
}

if ($mailSent) {
    sca_json_exit(200, [
        'success' => true,
        'message' => 'Thank you! Your consultation request has been received. Our admissions team will get in touch shortly.',
    ]);
}

// Even if mail() server-level dispatch was queued or failed, the enquiry is safely saved to submissions.log
sca_json_exit(200, [
    'success' => true,
    'message' => 'Thank you! Your consultation request has been recorded. Our admissions team will get in touch shortly via phone or WhatsApp.',
    'note'    => 'saved'
]);
