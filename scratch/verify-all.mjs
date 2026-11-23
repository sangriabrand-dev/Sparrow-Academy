import { createRequire } from 'module';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const require = createRequire(path.join(__dirname, '../package.json'));
const puppeteer = require('puppeteer-core');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const BASE_URL = 'http://localhost:5173';

const PAGES = [
  { name: 'Contact', path: '/contact' },
  { name: 'Courses', path: '/courses' },
  { name: 'Projects', path: '/projects' },
  { name: 'Instructors', path: '/instructors' },
  { name: 'Blog', path: '/blog' },
  { name: 'Testimonials', path: '/testimonials' }
];

async function main() {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  const consoleErrors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text());
    }
  });

  console.log('=== Step 1: Check Header Backgrounds & Overflow on All 6 Pages (1280px & 360px) ===');

  for (const p of PAGES) {
    // 1280px Desktop
    await page.setViewport({ width: 1280, height: 800 });
    await page.goto(`${BASE_URL}${p.path}`, { waitUntil: 'networkidle0' });

    const headerCheck1280 = await page.evaluate(() => {
      const img = document.querySelector('.page-header-bg-img');
      const title = document.querySelector('.page-header-title');
      const bodyW = document.documentElement.scrollWidth;
      const viewW = window.innerWidth;
      const titleColor = title ? window.getComputedStyle(title).color : null;
      return {
        hasBgImg: Boolean(img),
        imgSrc: img ? img.currentSrc || img.src : null,
        imgVisible: img ? img.getBoundingClientRect().height > 0 : false,
        titleColor,
        overflow: bodyW > viewW
      };
    });
    console.log(`[1280px] ${p.name}:`, headerCheck1280);

    // 360px Mobile
    await page.setViewport({ width: 360, height: 740 });
    await page.waitForTimeout ? await page.waitForTimeout(100) : await new Promise(r => setTimeout(r, 100));

    const headerCheck360 = await page.evaluate(() => {
      const img = document.querySelector('.page-header-bg-img');
      const bodyW = document.documentElement.scrollWidth;
      const viewW = window.innerWidth;
      return {
        hasBgImg: Boolean(img),
        imgVisible: img ? img.getBoundingClientRect().height > 0 : false,
        overflow: bodyW > viewW,
        scrollWidth: bodyW
      };
    });
    console.log(`[360px] ${p.name}:`, headerCheck360);
  }

  console.log('\n=== Step 2: Contact Page Deep Dive ===');
  await page.setViewport({ width: 1280, height: 900 });
  await page.goto(`${BASE_URL}/contact`, { waitUntil: 'networkidle0' });

  // Check Location row and Map
  const contactStructure = await page.evaluate(() => {
    // Check address link
    const addressLink = document.querySelector('.direct-contact-row a.contact-detail-val[href*="google.com/maps"]');
    const addressLabel = document.querySelector('.direct-contact-row .contact-detail-label');
    
    // Check map embed link wrapper
    const mapWrapper = document.querySelector('.map-embed-link-wrapper');
    const mapIframe = document.querySelector('.campus-map-embed');
    const mapBadge = document.querySelector('.map-embed-overlay-badge');
    const iframePointerEvents = mapIframe ? window.getComputedStyle(mapIframe).pointerEvents : null;
    
    // Check WhatsApp card position relative to mapWrapper
    const listChildren = Array.from(document.querySelector('.direct-contact-list').children);
    const mapIndex = listChildren.indexOf(mapWrapper);
    const waCard = document.querySelector('.whatsapp-direct-card');
    const waIndex = listChildren.indexOf(waCard);
    
    // Check if separate Academy Studio card exists
    const allTitles = Array.from(document.querySelectorAll('.contact-info-title')).map(el => el.textContent.trim());
    
    // Check placeholders on Full Name, Email, Phone
    const nameInput = document.querySelector('input[name="fullName"]');
    const emailInput = document.querySelector('input[name="email"]');
    const phoneInput = document.querySelector('input[name="phone"]');
    const msgInput = document.querySelector('textarea[name="message"]');
    const msgLabel = document.querySelector('label[for="message"]');

    return {
      addressLinkExists: Boolean(addressLink),
      addressHref: addressLink ? addressLink.href : null,
      addressTarget: addressLink ? addressLink.target : null,
      addressRel: addressLink ? addressLink.rel : null,
      mapWrapperExists: Boolean(mapWrapper),
      mapWrapperHref: mapWrapper ? mapWrapper.href : null,
      mapWrapperTarget: mapWrapper ? mapWrapper.target : null,
      mapIframeExists: Boolean(mapIframe),
      iframePointerEvents,
      mapBadgeText: mapBadge ? mapBadge.textContent.trim() : null,
      isWaAfterMap: waIndex > mapIndex,
      cardsPresent: allTitles,
      placeholders: {
        fullName: nameInput ? nameInput.placeholder : null,
        email: emailInput ? emailInput.placeholder : null,
        phone: phoneInput ? phoneInput.placeholder : null,
        message: msgInput ? msgInput.placeholder : null,
      },
      messageLabel: msgLabel ? msgLabel.textContent.trim() : null
    };
  });
  console.log('Contact structure check:', contactStructure);

  console.log('\n=== Step 3: Test Contact Form Submission with Message Left Empty ===');
  // Fill form without message
  await page.type('input[name="fullName"]', 'Priya Patel');
  await page.type('input[name="email"]', 'priya@example.com');
  await page.type('input[name="phone"]', '+91 98765 43210');
  await page.select('select[name="course"]', 'AI Design & Digital Media');

  // Intercept the Web3Forms network request
  let requestBody = null;
  await page.setRequestInterception(true);
  page.on('request', req => {
    if (req.url().includes('api.web3forms.com')) {
      requestBody = JSON.parse(req.postData());
      req.respond({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ success: true, message: 'Submission received' })
      });
    } else {
      req.continue();
    }
  });

  // Click submit
  await page.click('button[type="submit"]');
  await new Promise(r => setTimeout(r, 600));

  const successShown = await page.evaluate(() => {
    const banner = document.querySelector('.consultation-success-banner');
    return banner ? banner.textContent.trim() : null;
  });

  console.log('Web3Forms intercept payload message field:', requestBody ? requestBody.message : 'No request intercepted!');
  console.log('Success screen displayed:', successShown ? 'YES' : 'NO');

  console.log('\n=== Step 4: Dark Mode Text Readability Check across all 6 pages ===');
  await page.click('.theme-toggle'); // toggle dark mode
  await new Promise(r => setTimeout(r, 300));

  for (const p of PAGES) {
    await page.goto(`${BASE_URL}${p.path}`, { waitUntil: 'networkidle0' });
    const darkReadability = await page.evaluate(() => {
      const title = document.querySelector('.page-header-title');
      const desc = document.querySelector('.page-header-desc');
      return {
        titleColor: title ? window.getComputedStyle(title).color : null,
        descColor: desc ? window.getComputedStyle(desc).color : null
      };
    });
    console.log(`[Dark Mode] ${p.name} text colors:`, darkReadability);
  }

  console.log('\nConsole errors caught during whole test run:', consoleErrors);

  await browser.close();
  console.log('\nVerification script completed!');
}

main().catch(err => {
  console.error('Test failed:', err);
  process.exit(1);
});
