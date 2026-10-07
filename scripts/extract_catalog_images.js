const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '../public/extracted_catalog_images');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const buf = fs.readFileSync(path.join(__dirname, '../public/PDFs/AfriSMME Hub Catalog.pdf'));

let count = 0;
let pos = 0;

while (pos < buf.length - 4) {
  // Look for SOI \xFF\xD8\xFF
  if (buf[pos] === 0xff && buf[pos + 1] === 0xd8 && buf[pos + 2] === 0xff) {
    let start = pos;
    // Look for EOI \xFF\xD9
    let end = -1;
    for (let j = start + 3; j < buf.length - 1; j++) {
      if (buf[j] === 0xff && buf[j + 1] === 0xd9) {
        end = j + 2;
        break;
      }
    }
    if (end !== -1) {
      let imgData = buf.subarray(start, end);
      // Filter out tiny thumbnail icons (say < 5KB)
      if (imgData.length > 5000) {
        count++;
        const filename = `catalog_img_${String(count).padStart(2, '0')}.jpg`;
        fs.writeFileSync(path.join(outDir, filename), imgData);
        console.log(`Extracted ${filename} (${imgData.length} bytes)`);
      }
      pos = end;
      continue;
    }
  }
  pos++;
}

console.log(`Total images extracted: ${count}`);
