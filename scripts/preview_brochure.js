const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');

async function capture() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    args: ['--no-sandbox']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 1697, deviceScaleFactor: 1.5 });
  
  const htmlPath = path.join(__dirname, '../public/PDFs/brochure_print.html');
  await page.goto('file:///' + htmlPath.replace(/\\/g, '/'), { waitUntil: 'load' });
  
  const dir = path.join(__dirname, '../public/brochure_previews');
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  const pages = await page.$$('.page');
  console.log(`Found ${pages.length} pages`);

  for (let i = 0; i < pages.length; i++) {
    const outImg = path.join(dir, `brochure_page_${i + 1}.png`);
    await pages[i].screenshot({ path: outImg });
    console.log(`Captured page ${i + 1} to ${outImg}`);
  }

  await browser.close();
}

capture().catch(console.error);
