<?php
/**
 * Minimal authenticated SMTP client (Hostinger-compatible).
 * Used when official PHPMailer sources are not present under /api/lib/PHPMailer/src/.
 */

function sca_smtp_read_line($fp)
{
    $data = '';
    while (!feof($fp)) {
        $line = fgets($fp, 515);
        if ($line === false) {
            break;
        }
        $data .= $line;
        if (isset($line[3]) && $line[3] === ' ') {
            break;
        }
    }
    return $data;
}

function sca_smtp_cmd($fp, $cmd, $expect)
{
    if ($cmd !== null) {
        fwrite($fp, $cmd . "\r\n");
    }
    $resp = sca_smtp_read_line($fp);
    $code = (int) substr($resp, 0, 3);
    if ($code !== (int) $expect) {
        throw new RuntimeException("SMTP unexpected response ({$expect} vs {$code}): " . trim($resp));
    }
    return $resp;
}

/**
 * @return bool
 */
function sca_smtp_send(array $cfg, $to, $subject, $body, $replyTo, $replyName)
{
    $host   = $cfg['smtp_host'] ?? '';
    $port   = (int) ($cfg['smtp_port'] ?? 465);
    $secure = strtolower((string) ($cfg['smtp_secure'] ?? 'ssl'));
    $user   = $cfg['smtp_user'] ?? '';
    $pass   = $cfg['smtp_pass'] ?? '';
    $from   = $cfg['smtp_from'] ?? $user;
    $fromName = $cfg['smtp_from_name'] ?? 'Sparrow Creative Academy';

    if ($host === '' || $user === '' || $pass === '' || $from === '') {
        return false;
    }

    $timeout = 20;
    $remote = ($secure === 'ssl' || $port === 465)
        ? "ssl://{$host}:{$port}"
        : "tcp://{$host}:{$port}";

    $context = stream_context_create([
        'ssl' => [
            'verify_peer'      => true,
            'verify_peer_name' => true,
            'allow_self_signed'=> false,
        ],
    ]);

    $fp = @stream_socket_client($remote, $errno, $errstr, $timeout, STREAM_CLIENT_CONNECT, $context);
    if (!$fp) {
        throw new RuntimeException("SMTP connect failed: {$errstr} ({$errno})");
    }
    stream_set_timeout($fp, $timeout);

    try {
        sca_smtp_cmd($fp, null, 220);
        $ehloHost = $_SERVER['SERVER_NAME'] ?? 'localhost';
        sca_smtp_cmd($fp, 'EHLO ' . $ehloHost, 250);

        if ($secure === 'tls' && $port !== 465) {
            sca_smtp_cmd($fp, 'STARTTLS', 220);
            if (!stream_socket_enable_crypto($fp, true, STREAM_CRYPTO_METHOD_TLS_CLIENT)) {
                throw new RuntimeException('STARTTLS negotiation failed.');
            }
            sca_smtp_cmd($fp, 'EHLO ' . $ehloHost, 250);
        }

        sca_smtp_cmd($fp, 'AUTH LOGIN', 334);
        sca_smtp_cmd($fp, base64_encode($user), 334);
        sca_smtp_cmd($fp, base64_encode($pass), 235);

        sca_smtp_cmd($fp, 'MAIL FROM:<' . $from . '>', 250);
        sca_smtp_cmd($fp, 'RCPT TO:<' . $to . '>', 250);
        sca_smtp_cmd($fp, 'DATA', 354);

        $encodedSubject = '=?UTF-8?B?' . base64_encode($subject) . '?=';
        $headers  = 'From: ' . sprintf('"%s" <%s>', addcslashes($fromName, '"'), $from) . "\r\n";
        $headers .= 'Reply-To: ' . sprintf('"%s" <%s>', addcslashes($replyName, '"'), $replyTo) . "\r\n";
        $headers .= "MIME-Version: 1.0\r\n";
        $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
        $headers .= "Content-Transfer-Encoding: 8bit\r\n";
        $headers .= 'X-Mailer: Sparrow Creative Academy Contact API' . "\r\n";

        $payload  = $headers;
        $payload .= 'Subject: ' . $encodedSubject . "\r\n";
        $payload .= "\r\n";
        $payload .= str_replace(["\r\n.", "\n."], ["\r\n..", "\n.."], $body);
        $payload .= "\r\n.";

        sca_smtp_cmd($fp, $payload, 250);
        fwrite($fp, "QUIT\r\n");
        return true;
    } finally {
        fclose($fp);
    }
}
