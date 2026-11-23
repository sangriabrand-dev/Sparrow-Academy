import { createRequire } from 'module';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const require = createRequire(path.join(__dirname, '../package.json'));
const puppeteer = require('puppeteer-core');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const BASE_URL = 'http://localhost:5173';

async function main() {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.goto(`${BASE_URL}/contact`, { waitUntil: 'networkidle0' });

  let interceptedPayload = null;
  await page.setRequestInterception(true);
  page.on('request', req => {
    if (req.url().includes('api.web3forms.com')) {
      if (req.method() === 'OPTIONS') {
        req.respond({
          status: 200,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Accept'
          }
        });
        return;
      }
      const postData = req.postData();
      if (postData) {
        interceptedPayload = JSON.parse(postData);
      }
      req.respond({
        status: 200,
        headers: {
          'Access-Control-Allow-Origin': '*'
        },
        contentType: 'application/json',
        body: JSON.stringify({ success: true, message: 'Submission successful' })
      });
    } else {
      req.continue();
    }
  });

  await page.type('input[name="fullName"]', 'Aditi Rao');
  await page.type('input[name="email"]', 'aditi@example.com');
  await page.type('input[name="phone"]', '+91 98765 43210');
  await page.select('select[name="course"]', 'AI-Powered Motion Design');
  // Message left empty intentionally!

  await page.click('button[type="submit"]');
  await new Promise(r => setTimeout(r, 800));

  const successText = await page.evaluate(() => {
    const el = document.querySelector('.consultation-success-banner');
    return el ? el.textContent.trim() : null;
  });

  console.log('Intercepted Web3Forms payload:', interceptedPayload);
  console.log('Success banner present:', successText ? 'YES' : 'NO');

  await browser.close();
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
