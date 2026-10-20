const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer-core');

async function testScreenshots() {
  if (!fs.existsSync('scratch/previews')) fs.mkdirSync('scratch/previews', { recursive: true });
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    headless: true
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 1700, deviceScaleFactor: 1 });
  const fileUrl = 'file:///' + path.resolve('public/PDFs/corporate_profile_print.html').replace(/\\/g, '/');
  await page.goto(fileUrl, { waitUntil: 'load', timeout: 60000 });
  await page.evaluate(() => document.fonts.ready);

  const pages = await page.$$('.page');
  console.log('Total pages found:', pages.length);

  const pagesToShot = [7, 18];
  for (const pNum of pagesToShot) {
    if (pNum <= pages.length) {
      await pages[pNum - 1].screenshot({ path: `scratch/previews/diagram_page_${pNum}.png` });
      console.log(`Captured diagram page ${pNum}`);
    }
  }
  await browser.close();
  console.log('Screenshots complete!');
}

testScreenshots().catch(console.error);
