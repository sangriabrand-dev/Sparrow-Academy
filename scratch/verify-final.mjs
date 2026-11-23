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
  const consoleErrors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text());
    }
  });

  console.log('--- 1. Testing Sticky Navbar & Desktop Actions Order ---');
  await page.setViewport({ width: 1280, height: 800 });
  await page.goto(`${BASE_URL}/`, { waitUntil: 'networkidle0' });

  const navbarState = await page.evaluate(() => {
    const navbar = document.querySelector('.sparrow-navbar');
    const actions = document.querySelector('.sparrow-nav-actions');
    const actionChildren = Array.from(actions ? actions.children : []).map(el => el.className || el.tagName);
    
    // Initial rect
    const initialTop = navbar ? navbar.getBoundingClientRect().top : -1;
    const initialHeight = navbar ? navbar.offsetHeight : -1;

    // Scroll down 300px
    window.scrollTo(0, 300);
    const scrolledTop = navbar ? navbar.getBoundingClientRect().top : -1;
    const isScrolledClass = navbar ? navbar.classList.contains('scrolled') : false;
    const scrolledHeight = navbar ? navbar.offsetHeight : -1;

    return {
      initialTop,
      initialHeight,
      scrolledTop,
      scrolledHeight,
      isScrolledClass,
      actionChildren
    };
  });
  console.log('Navbar sticky check:', navbarState);

  console.log('\n--- 2. Testing Contact Us Page & Contact Details ---');
  await page.goto(`${BASE_URL}/contact`, { waitUntil: 'networkidle0' });
  const contactInfo = await page.evaluate(() => {
    const emailEl = document.querySelector('.direct-contact-row a[href^="mailto:"]');
    const phoneEl = document.querySelector('.direct-contact-row a[href^="tel:"]');
    const mapsEl = document.querySelector('.direct-contact-row a[href*="google.com/maps"]');
    return {
      email: emailEl ? emailEl.textContent.trim() : null,
      emailHref: emailEl ? emailEl.getAttribute('href') : null,
      phone: phoneEl ? phoneEl.textContent.trim() : null,
      phoneHref: phoneEl ? phoneEl.getAttribute('href') : null,
      hasMapsLink: Boolean(mapsEl),
      mapsHref: mapsEl ? mapsEl.getAttribute('href') : null
    };
  });
  console.log('Contact Info on /contact:', contactInfo);

  console.log('\n--- 3. Testing Book Free Consultation Form Submission ---');
  // Fill form
  await page.type('input[name="fullName"]', 'Aditi Sharma');
  await page.type('input[name="email"]', 'aditi.sharma@example.com');
  await page.type('input[name="phone"]', '+91 98765 43210');
  await page.select('select[name="course"]', 'Digital Marketing & SEO');
  await page.type('textarea[name="message"]', 'Interested in SEO & PPC training.');

  // Intercept request to verify endpoint
  let formEndpointCalled = null;
  let formPostData = null;
  page.on('request', req => {
    if (req.url().includes('/api/contact')) {
      formEndpointCalled = req.url();
      try {
        formPostData = JSON.parse(req.postData());
      } catch (e) {}
    }
  });

  await page.click('button[type="submit"]');
  await new Promise(r => setTimeout(r, 1200));

  const formSubmissionResult = await page.evaluate(() => {
    const successBanner = document.querySelector('.consultation-success-banner');
    return {
      hasSuccessBanner: Boolean(successBanner),
      text: successBanner ? successBanner.innerText : null
    };
  });
  console.log('Form endpoint intercepted:', formEndpointCalled);
  console.log('Form payload data:', formPostData);
  console.log('Form submission UI result:', formSubmissionResult);

  console.log('\n--- 4. Testing Courses Page (11 Courses & Categories) ---');
  await page.goto(`${BASE_URL}/courses`, { waitUntil: 'networkidle0' });
  const coursesCheck = await page.evaluate(() => {
    const cards = Array.from(document.querySelectorAll('.course-card'));
    const titles = cards.map(c => c.querySelector('.course-title')?.textContent.trim());
    const categoryHeadings = Array.from(document.querySelectorAll('.course-category-heading')).map(h => h.textContent.trim());
    const images = cards.map(c => {
      const img = c.querySelector('.course-card-thumb');
      return {
        title: c.querySelector('.course-title')?.textContent.trim(),
        src: img ? img.getAttribute('src') : null,
        naturalWidth: img ? img.naturalWidth : 0
      };
    });
    return {
      totalCards: cards.length,
      titles,
      categoryHeadings,
      images
    };
  });
  console.log('Total Courses found:', coursesCheck.totalCards);
  console.log('Course Titles:', coursesCheck.titles);
  console.log('Category Headings:', coursesCheck.categoryHeadings);
  console.log('Course Images:', coursesCheck.images);

  console.log('\n--- 5. Testing Home Page ---');
  await page.goto(`${BASE_URL}/`, { waitUntil: 'networkidle0' });
  const homeCheck = await page.evaluate(() => {
    const heroTitle = document.querySelector('.hero-title')?.textContent.trim();
    const floatingCards = Array.from(document.querySelectorAll('.hero-floating-card')).map(c => c.textContent.trim());
    const exploreBtn = document.querySelector('.home-courses-footer a')?.textContent.trim();
    const hasBlogSection = Boolean(document.querySelector('.blog-section, #blog'));
    const hasTestimonialsSection = Boolean(document.querySelector('.testimonials-section, #testimonials'));
    const hasFAQSection = Boolean(document.querySelector('.faq-section, #faq'));
    const hasLearnerExperience = Boolean(document.querySelector('.learner-experience-section, #learner-experience'));
    const hasCuratedPrograms = Boolean(document.querySelector('.curated-programs-section, #curated-programs'));

    return {
      heroTitle,
      floatingCards,
      exploreBtn,
      hasBlogSection,
      hasTestimonialsSection,
      hasFAQSection,
      hasLearnerExperience,
      hasCuratedPrograms
    };
  });
  console.log('Home Page Check:', homeCheck);

  console.log('\n--- 6. Testing Projects Page ---');
  await page.goto(`${BASE_URL}/projects`, { waitUntil: 'networkidle0' });
  const projectsCheck = await page.evaluate(() => {
    const mainHeading = document.querySelector('.section-main-heading')?.textContent.trim();
    const completedSection = document.querySelector('#completed-projects');
    const liveSection = document.querySelector('#live-projects');
    const completedCards = completedSection ? completedSection.querySelectorAll('.modern-project-card').length : 0;
    const liveCards = liveSection ? liveSection.querySelectorAll('.modern-project-card').length : 0;
    return {
      mainHeading,
      hasCompletedSection: Boolean(completedSection),
      completedCardsCount: completedCards,
      hasLiveSection: Boolean(liveSection),
      liveCardsCount: liveCards
    };
  });
  console.log('Projects Page Check:', projectsCheck);

  console.log('\n--- 7. Testing Placements Page ---');
  await page.goto(`${BASE_URL}/placements`, { waitUntil: 'networkidle0' });
  const placementsCheck = await page.evaluate(() => {
    const studentCards = Array.from(document.querySelectorAll('.career-student-card'));
    const studentNames = studentCards.map(c => c.querySelector('.career-student-name')?.textContent.trim());
    const hasSwathi = studentNames.some(n => n && n.includes('SWATHI'));
    const hasPuneeth = studentNames.some(n => n && n.includes('PUNEETH'));
    return {
      totalStudents: studentCards.length,
      studentNames,
      hasSwathi,
      hasPuneeth
    };
  });
  console.log('Placements Check:', placementsCheck);

  console.log('\n--- 8. Testing Certifications Page ---');
  await page.goto(`${BASE_URL}/certifications`, { waitUntil: 'networkidle0' });
  const certsCheck = await page.evaluate(() => {
    const parentTitle = document.querySelector('.parent-company-title')?.textContent.trim();
    const certCards = Array.from(document.querySelectorAll('.cert-doc-card')).map(c => c.querySelector('.cert-card-title')?.textContent.trim());
    return {
      parentTitle,
      certCards
    };
  });
  console.log('Certifications Check:', certsCheck);

  console.log('\n--- 9. Responsive Overflow Checks across 1280px, 768px, 360px ---');
  const testRoutes = ['/', '/courses', '/contact', '/projects', '/placements', '/certifications'];
  const viewports = [
    { name: 'Desktop', width: 1280, height: 800 },
    { name: 'Tablet', width: 768, height: 1024 },
    { name: 'Mobile', width: 360, height: 740 }
  ];

  for (const vp of viewports) {
    await page.setViewport(vp);
    for (const route of testRoutes) {
      await page.goto(`${BASE_URL}${route}`, { waitUntil: 'networkidle0' });
      const overflow = await page.evaluate(() => {
        const bodyW = document.documentElement.scrollWidth;
        const viewW = window.innerWidth;
        return bodyW > viewW;
      });
      console.log(`[${vp.name} ${vp.width}px] ${route}: overflow = ${overflow ? 'FAIL (OVERFLOW)' : 'PASS (NO OVERFLOW)'}`);
    }
  }

  console.log('\n--- Console Errors Encountered ---');
  console.log(consoleErrors.length === 0 ? 'None (0 console errors)' : consoleErrors);

  await browser.close();
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
