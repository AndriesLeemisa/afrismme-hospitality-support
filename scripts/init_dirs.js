const fs = require('fs');
const path = require('path');

// Ensure directories exist
const rootDir = process.cwd();
const concepts = [
  'concept-01-ecosystem',
  'concept-02-architecture',
  'concept-03-monogram'
];

concepts.forEach(c => {
  const dir = path.join(rootDir, 'concepts', c);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});

const mockupsDir = path.join(rootDir, 'mockups');
if (!fs.existsSync(mockupsDir)) fs.mkdirSync(mockupsDir, { recursive: true });

const brandGuideDir = path.join(rootDir, 'brand-guide');
if (!fs.existsSync(brandGuideDir)) fs.mkdirSync(brandGuideDir, { recursive: true });

console.log('Directories initialized successfully.');
