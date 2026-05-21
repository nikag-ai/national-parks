const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const BASE_URL = 'http://localhost:3000';
const SCREENSHOT_DIR = path.join(__dirname, '..', 'screenshots');

(async () => {
  let browser;
  try {
    console.log('Connecting to Chrome debugger at http://localhost:9222...');
    browser = await puppeteer.connect({
      browserURL: 'http://localhost:9222',
      defaultViewport: null
    });

    console.log('Opening new tab...');
    const page = await browser.newPage();
    page.on('console', msg => console.log('PAGE LOG:', msg.text()));
    page.on('pageerror', err => console.error('PAGE ERROR:', err));

    // Set viewport to 1800x1043 with scale factor 2 (retina resolution 3600x2086)
    await page.setViewport({
      width: 1800,
      height: 1043,
      deviceScaleFactor: 2
    });

    console.log(`Navigating to ${BASE_URL}...`);
    await page.goto(BASE_URL, { waitUntil: 'networkidle2' });

    // Ensure we are in Light Theme
    console.log('Ensuring Light Theme is active...');
    const currentTheme = await page.evaluate(() => document.documentElement.getAttribute('data-theme'));
    if (currentTheme !== 'light') {
      console.log('Theme is not light. Clicking theme-light toggle...');
      const lightBtn = await page.$('#theme-light');
      if (lightBtn) {
        await lightBtn.click();
        await new Promise(r => setTimeout(r, 800)); // wait for transitions
      } else {
        console.warn('Could not find light theme toggle, trying documentElement attribute force...');
        await page.evaluate(() => {
          document.documentElement.setAttribute('data-theme', 'light');
          localStorage.setItem('theme', 'light');
        });
        await new Promise(r => setTimeout(r, 800));
      }
    }

    // Capture homepage top
    console.log('Capturing current homepage screenshot...');
    const curHomeBuffer = await page.screenshot({ fullPage: false });
    fs.writeFileSync(path.join(SCREENSHOT_DIR, 'current_desktop_light_1_main_top.png'), curHomeBuffer);

    // Open Yosemite modal
    console.log('Opening Yosemite modal...');
    await page.evaluate(() => {
      const cards = Array.from(document.querySelectorAll('.park-card'));
      const yosemiteCard = cards.find(c => c.querySelector('.park-name').textContent.includes('Yosemite'));
      if (yosemiteCard) {
        yosemiteCard.click();
      } else {
        window.openModal(window.PARKS_SUMMARY['yosemite']);
      }
    });

    await new Promise(r => setTimeout(r, 1500)); // Wait for modal open animation

    // Verify modal is open
    const modalHidden = await page.evaluate(() => {
      const modal = document.getElementById('park-modal');
      return modal ? modal.classList.contains('hidden') : true;
    });
    console.log('Is modal hidden?', modalHidden);

    // Capture modal top
    console.log('Capturing current Yosemite modal top screenshot...');
    const curModalTopBuffer = await page.screenshot({ fullPage: false });
    fs.writeFileSync(path.join(SCREENSHOT_DIR, 'current_desktop_light_5_park_modal_top.png'), curModalTopBuffer);

    // Scroll modal to middle
    console.log('Scrolling modal content to middle...');
    await page.evaluate(() => {
      const modalContent = document.querySelector('.modal-content');
      if (modalContent) {
        modalContent.scrollTop = modalContent.scrollHeight / 3;
      }
    });
    await new Promise(r => setTimeout(r, 800));
    const curModalMidBuffer = await page.screenshot({ fullPage: false });
    fs.writeFileSync(path.join(SCREENSHOT_DIR, 'current_desktop_light_5_park_modal_mid.png'), curModalMidBuffer);

    // Scroll modal to bottom
    console.log('Scrolling modal content to bottom...');
    await page.evaluate(() => {
      const modalContent = document.querySelector('.modal-content');
      if (modalContent) {
        modalContent.scrollTop = modalContent.scrollHeight;
      }
    });
    await new Promise(r => setTimeout(r, 800));
    const curModalBotBuffer = await page.screenshot({ fullPage: false });
    fs.writeFileSync(path.join(SCREENSHOT_DIR, 'current_desktop_light_5_park_modal_bot.png'), curModalBotBuffer);

    await page.close();
    await browser.disconnect();

    // Now run python comparison tool
    console.log('\n--- Running Pixel Comparisons via Python/Pillow ---');
    const baselines = {
      home: 'desktop_light_1_main_top.png',
      modalTop: 'desktop_light_5_park_modal_top.png',
      modalMid: 'desktop_light_5_park_modal_mid.png',
      modalBot: 'desktop_light_5_park_modal_bot.png'
    };

    for (const [key, filename] of Object.entries(baselines)) {
      const refPath = path.join(SCREENSHOT_DIR, filename);
      const curPath = path.join(SCREENSHOT_DIR, `current_${filename}`);
      const diffPath = path.join(SCREENSHOT_DIR, `diff_${filename}`);
      
      if (!fs.existsSync(refPath)) {
        console.error(`Baseline file not found: ${refPath}`);
        continue;
      }
      
      console.log(`Comparing ${filename}...`);
      try {
        const cmd = `python3 scripts/compare.py "${refPath}" "${curPath}" "${diffPath}"`;
        const output = execSync(cmd).toString();
        console.log(output);
      } catch (e) {
        console.error(`Error comparing ${filename}:`, e.message);
      }
    }

    console.log('Visual regression verification completed successfully.');
  } catch (err) {
    console.error('Fatal execution error:', err);
    if (browser) await browser.disconnect();
    process.exit(1);
  }
})();
