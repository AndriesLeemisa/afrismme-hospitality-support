const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');

async function capture() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    args: ['--no-sandbox']
  });
  const page = await browser.newPage();
  // Landscape A4 ratio (1.414:1)
  await page.setViewport({ width: 1414, height: 1000, deviceScaleFactor: 1.25 });
  
  const htmlPath = path.join(__dirname, '../public/PDFs/booklet_print.html');
  await page.goto('file:///' + htmlPath.replace(/\\/g, '/'), { waitUntil: 'load' });
  
  const dir = path.join(__dirname, '../public/booklet_previews');
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  const slides = await page.$$('.slide');
  console.log(`Found ${slides.length} booklet slides`);

  for (let i = 0; i < slides.length; i++) {
    const outImg = path.join(dir, `booklet_slide_${i + 1}.png`);
    await slides[i].screenshot({ path: outImg });
    console.log(`Captured slide ${i + 1} to ${outImg}`);
  }

  await browser.close();
}

capture().catch(console.error);
