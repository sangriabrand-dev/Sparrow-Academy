# Sparrow Creative Academy

React 18 + Vite + react-router-dom site for Sparrow Creative Academy (Bengaluru). Production hosting is Hostinger (Apache + PHP).

## Local development

```bash
npm install
npm run dev
```

The Vite app runs on `http://localhost:5173`. `vite.config.js` proxies `/api/*` to `http://localhost:8000`.

### Contact form (PHP API)

In a **second** terminal, start PHP’s built-in server against the `public` folder:

```bash
npm run php:api
# or: php -S localhost:8000 -t public
```

Copy `config.example.php` to `config.php` at the **project root** (same folder as `package.json`) and fill in SMTP credentials. `config.php` is gitignored.

If PHP is not installed, the contact page shows a clear local-dev message and a WhatsApp fallback instead of a vague network error.

## Production build

```bash
npm run build
```

Upload the contents of `dist/` into Hostinger `public_html`. Place `config.php` **one level above** `public_html` (never inside the web root). See the deployment checklist in the project notes after this work.

## SMTP

Use the Hostinger mailbox `enquiry@sparrowacademy.online`:

- Host: `smtp.hostinger.com`
- Port: `465` (ssl) or `587` (tls)
- User / From: `enquiry@sparrowacademy.online`
- Recipient: `enquiry@sparrowacademy.online` (or admissions inbox)
