const http = require('http');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const server = http.createServer((req, res) => {
  const filePath = path.join(__dirname, '../public/PDFs/brochure_print.html');
  const content = fs.readFileSync(filePath);
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(content);
});

server.listen(3456, () => {
  console.log('Local print server listening on port 3456...');
  const outPdf = path.join(__dirname, '../public/PDFs/AfriSMME_Hospitality_Before_After_Brochure.pdf');
  
  // Use edge binary path
  const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const browserPath = fs.existsSync(edgePath) ? edgePath : chromePath;

  const cmd = `"${browserPath}" --headless --disable-gpu --no-sandbox --no-pdf-header-footer --print-to-pdf="${outPdf}" http://127.0.0.1:3456`;
  console.log('Running:', cmd);

  try {
    execSync(cmd, { stdio: 'inherit' });
    console.log('Print command completed.');
  } catch (err) {
    console.error('Execution error:', err.message);
  }

  server.close();

  if (fs.existsSync(outPdf)) {
    console.log(`SUCCESS! Generated: ${outPdf} (${fs.statSync(outPdf).size} bytes)`);
  } else {
    console.error('Failed to generate PDF file.');
  }
});
