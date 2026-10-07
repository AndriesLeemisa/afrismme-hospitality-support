const fs = require('fs');
const { PDFParse } = require('pdf-parse');

async function run() {
  const buf = fs.readFileSync('public/PDFs/AfriSMME Hub Catalog.pdf');
  const parser = new PDFParse(new Uint8Array(buf));
  await parser.load();
  const res = await parser.getText();
  console.log('Total pages:', res.pages.length);
  res.pages.forEach((p, idx) => {
    console.log('--- PAGE ' + (idx + 1) + ' ---');
    console.log(p.text);
  });
}
run().catch(console.error);
