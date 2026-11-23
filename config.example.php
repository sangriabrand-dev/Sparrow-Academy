<?php
/**
 * SPARROW CREATIVE ACADEMY — SMTP / contact configuration
 *
 * Copy this file to config.php ONE LEVEL ABOVE public_html (Hostinger)
 * or at the project root (local). Never commit config.php.
 *
 * Hostinger mailbox example:
 *   smtp_host: smtp.hostinger.com
 *   smtp_port: 465  (ssl)  or  587 (tls)
 *   smtp_user / smtp_from: enquiry@sparrowacademy.online
 */

return [
    'smtp_host'      => 'smtp.hostinger.com',
    'smtp_port'      => 465,
    'smtp_secure'    => 'ssl', // ssl (465) or tls (587)
    'smtp_user'      => 'enquiry@sparrowacademy.online',
    'smtp_pass'      => 'REPLACE_WITH_MAILBOX_PASSWORD',
    'smtp_from'      => 'enquiry@sparrowacademy.online',
    'smtp_from_name' => 'Sparrow Creative Academy',
    'recipient'      => 'enquiry@sparrowacademy.online',
];
