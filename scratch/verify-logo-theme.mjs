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

  // Test 1: Desktop 1280px Light Mode
  await page.setViewport({ width: 1280, height: 800 });
  await page.goto(BASE_URL, { waitUntil: 'networkidle0' });

  let lightLogoRect = await page.evaluate(() => {
    const el = document.querySelector('.sparrow-logo-light');
    if (!el) return null;
    const r = el.getBoundingClientRect();
    const style = window.getComputedStyle(el);
    return { width: r.width, height: r.height, display: style.display, visible: r.width > 0 && r.height > 0 };
  });

  console.log('Desktop 1280px Light Mode Logo:', lightLogoRect);
  await page.screenshot({ path: path.join(__dirname, 'desktop-light.png'), fullPage: false });

  // Test 2: Toggle to Dark Mode
  await page.click('.theme-toggle');
  await new Promise(r => setTimeout(r, 400));

  let darkLogoRect = await page.evaluate(() => {
    const elDark = document.querySelector('.sparrow-logo-dark');
    const elLight = document.querySelector('.sparrow-logo-light');
    const themeAttr = document.documentElement.getAttribute('data-theme');
    const rDark = elDark ? elDark.getBoundingClientRect() : null;
    const rLight = elLight ? elLight.getBoundingClientRect() : null;
    const sDark = elDark ? window.getComputedStyle(elDark).display : null;
    const sLight = elLight ? window.getComputedStyle(elLight).display : null;
    return {
      themeAttr,
      darkLogo: { width: rDark?.width, height: rDark?.height, display: sDark },
      lightLogo: { width: rLight?.width, height: rLight?.height, display: sLight }
    };
  });
  console.log('Desktop 1280px Dark Mode Logo & Theme:', darkLogoRect);
  await page.screenshot({ path: path.join(__dirname, 'desktop-dark.png'), fullPage: false });

  // Test 3: Mobile 360px Light Mode
  await page.setViewport({ width: 360, height: 740 });
  await page.click('.theme-toggle'); // switch back to light
  await new Promise(r => setTimeout(r, 400));

  let mobileLight = await page.evaluate(() => {
    const el = document.querySelector('.sparrow-logo-light');
    const r = el.getBoundingClientRect();
    const bodyW = document.documentElement.scrollWidth;
    const viewW = window.innerWidth;
    return {
      logoWidth: r.width,
      logoHeight: r.height,
      scrollWidth: bodyW,
      innerWidth: viewW,
      overflow: bodyW > viewW
    };
  });
  console.log('Mobile 360px Light Mode:', mobileLight);
  await page.screenshot({ path: path.join(__dirname, 'mobile-360-light.png'), fullPage: false });

  // Test 4: Mobile 360px Dark Mode
  await page.click('.theme-toggle'); // switch to dark
  await new Promise(r => setTimeout(r, 400));

  let mobileDark = await page.evaluate(() => {
    const el = document.querySelector('.sparrow-logo-dark');
    const r = el.getBoundingClientRect();
    const bodyW = document.documentElement.scrollWidth;
    const viewW = window.innerWidth;
    return {
      logoWidth: r.width,
      logoHeight: r.height,
      scrollWidth: bodyW,
      innerWidth: viewW,
      overflow: bodyW > viewW
    };
  });
  console.log('Mobile 360px Dark Mode:', mobileDark);
  await page.screenshot({ path: path.join(__dirname, 'mobile-360-dark.png'), fullPage: false });

  // Test 5: Check Contact page at 360px in Dark Mode
  await page.goto(`${BASE_URL}/contact`, { waitUntil: 'networkidle0' });
  let contactDark = await page.evaluate(() => {
    const bodyW = document.documentElement.scrollWidth;
    const viewW = window.innerWidth;
    return {
      scrollWidth: bodyW,
      innerWidth: viewW,
      overflow: bodyW > viewW
    };
  });
  console.log('Contact 360px Dark Mode Overflow Check:', contactDark);
  await page.screenshot({ path: path.join(__dirname, 'contact-360-dark.png'), fullPage: false });

  // Test 6: Check Projects page at 360px in Dark Mode
  await page.goto(`${BASE_URL}/projects`, { waitUntil: 'networkidle0' });
  let projectsDark = await page.evaluate(() => {
    const bodyW = document.documentElement.scrollWidth;
    const viewW = window.innerWidth;
    return {
      scrollWidth: bodyW,
      innerWidth: viewW,
      overflow: bodyW > viewW
    };
  });
  console.log('Projects 360px Dark Mode Overflow Check:', projectsDark);
  await page.screenshot({ path: path.join(__dirname, 'projects-360-dark.png'), fullPage: false });

  // Test 7: Check Login page at 360px in Dark Mode
  await page.goto(`${BASE_URL}/login`, { waitUntil: 'networkidle0' });
  let loginDark = await page.evaluate(() => {
    const bodyW = document.documentElement.scrollWidth;
    const viewW = window.innerWidth;
    return {
      scrollWidth: bodyW,
      innerWidth: viewW,
      overflow: bodyW > viewW
    };
  });
  console.log('Login 360px Dark Mode Overflow Check:', loginDark);
  await page.screenshot({ path: path.join(__dirname, 'login-360-dark.png'), fullPage: false });

  await browser.close();
  console.log('All verification checks completed successfully!');
}

main().catch(err => {
  console.error('Error during verification:', err);
  process.exit(1);
});
