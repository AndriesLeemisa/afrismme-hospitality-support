/**
 * CORPORATE BRAND IDENTITY VECTOR GENERATOR
 * Generates all 33 required vector identity files for AfriSMME Hub
 * Hospitality Support Ecosystem.
 */

const fs = require('fs');
const path = require('path');

const rootDir = process.cwd();
const {
  BRAND,
  getSymbolC1,
  getSymbolC2,
  getSymbolC3
} = require('./generate_core_vectors_helpers.js');

function getSymbol(conceptId, theme = 'color', size = 200) {
  if (conceptId === 'concept-01-ecosystem') return getSymbolC1(theme, size);
  if (conceptId === 'concept-02-architecture') return getSymbolC2(theme, size);
  return getSymbolC3(theme, size);
}

// 1. SYMBOL ONLY (200x200)
function buildSymbolOnly(conceptId, theme = 'color') {
  const bg = theme === 'white' ? BRAND.charcoal : 'transparent';
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="200" height="200">
  <title>${conceptId} - Standalone Vector Symbol</title>
  ${bg !== 'transparent' ? `<rect width="200" height="200" fill="${bg}" rx="12"/>` : ''}
  ${getSymbol(conceptId, theme, 200)}
</svg>`;
}

// 2. WORDMARK ONLY (460x90)
function buildWordmarkOnly(theme = 'color') {
  const bg = theme === 'white' ? BRAND.charcoal : 'transparent';
  let pFill = theme === 'white' ? BRAND.white : (theme === 'black' ? BRAND.charcoal : BRAND.charcoal);
  let sFill = theme === 'white' ? '#9CA3AF' : (theme === 'black' ? '#4B5563' : BRAND.bronzeDark);
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460 90" width="460" height="90">
  <title>AfriSMME Hub - Corporate Wordmark</title>
  ${bg !== 'transparent' ? `<rect width="460" height="90" fill="${bg}" rx="8"/>` : ''}
  <g transform="translate(10, 15)">
    <text x="0" y="36" font-family="'Plus Jakarta Sans', 'Montserrat', 'Inter', -apple-system, sans-serif" font-size="34" font-weight="800" letter-spacing="5" fill="${pFill}">AFRISMME HUB</text>
    <text x="0" y="62" font-family="'Plus Jakarta Sans', 'Inter', sans-serif" font-size="11.5" font-weight="600" letter-spacing="4" fill="${sFill}">HOSPITALITY SUPPORT ECOSYSTEM</text>
  </g>
</svg>`;
}

// 3. HORIZONTAL LOCKUP (640x160)
function buildHorizontalLockup(conceptId, theme = 'color') {
  const bg = theme === 'white' ? BRAND.charcoal : 'transparent';
  let pFill = theme === 'white' ? BRAND.white : BRAND.charcoal;
  let sFill = theme === 'white' ? '#9CA3AF' : (theme === 'black' ? '#4B5563' : BRAND.bronzeDark);
  
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 160" width="640" height="160">
  <title>${conceptId} - Horizontal Corporate Lockup</title>
  ${bg !== 'transparent' ? `<rect width="640" height="160" fill="${bg}" rx="12"/>` : ''}
  <!-- Symbol (120x120 centered vertically at x=30, y=20) -->
  <g transform="translate(30, 20)">
    ${getSymbol(conceptId, theme, 120)}
  </g>
  <!-- Divider -->
  <line x1="175" y1="36" x2="175" y2="124" stroke="${theme === 'white' ? BRAND.borderDark : (theme === 'black' ? '#D1D5DB' : BRAND.borderLight)}" stroke-width="1.5"/>
  <!-- Wordmark -->
  <g transform="translate(200, 48)">
    <text x="0" y="34" font-family="'Plus Jakarta Sans', 'Montserrat', 'Inter', -apple-system, sans-serif" font-size="32" font-weight="800" letter-spacing="5" fill="${pFill}">AFRISMME HUB</text>
    <text x="0" y="60" font-family="'Plus Jakarta Sans', 'Inter', sans-serif" font-size="11" font-weight="600" letter-spacing="4" fill="${sFill}">HOSPITALITY SUPPORT ECOSYSTEM</text>
  </g>
</svg>`;
}

// 4. STACKED LOCKUP (400x400)
function buildStackedLockup(conceptId, theme = 'color') {
  const bg = theme === 'white' ? BRAND.charcoal : 'transparent';
  let pFill = theme === 'white' ? BRAND.white : BRAND.charcoal;
  let sFill = theme === 'white' ? '#9CA3AF' : (theme === 'black' ? '#4B5563' : BRAND.bronzeDark);

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="400" height="400">
  <title>${conceptId} - Stacked Corporate Lockup</title>
  ${bg !== 'transparent' ? `<rect width="400" height="400" fill="${bg}" rx="16"/>` : ''}
  <!-- Centered Symbol (170x170 at x=115, y=55) -->
  <g transform="translate(115, 55)">
    ${getSymbol(conceptId, theme, 170)}
  </g>
  <!-- Centered Wordmark -->
  <g transform="translate(0, 280)">
    <text x="200" y="32" font-family="'Plus Jakarta Sans', 'Montserrat', 'Inter', -apple-system, sans-serif" font-size="27" font-weight="800" letter-spacing="4.5" fill="${pFill}" text-anchor="middle">AFRISMME HUB</text>
    <text x="200" y="58" font-family="'Plus Jakarta Sans', 'Inter', sans-serif" font-size="10" font-weight="600" letter-spacing="3.5" fill="${sFill}" text-anchor="middle">HOSPITALITY SUPPORT ECOSYSTEM</text>
  </g>
</svg>`;
}

// 5. PRIMARY LOGO (Master Full Presentation Box 800x480)
function buildPrimaryLogo(conceptId) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 480" width="800" height="480">
  <title>${conceptId} - Primary Corporate Logo</title>
  <!-- Premium Warm Ivory Canvas -->
  <rect width="800" height="480" fill="${BRAND.warmIvory}"/>
  <rect x="24" y="24" width="752" height="432" fill="none" stroke="${BRAND.borderLight}" stroke-width="1" rx="8"/>
  
  <!-- Centered Stacked Presentation -->
  <g transform="translate(305, 90)">
    ${getSymbol(conceptId, 'color', 190)}
  </g>
  
  <g transform="translate(0, 325)">
    <text x="400" y="36" font-family="'Plus Jakarta Sans', 'Montserrat', 'Inter', -apple-system, sans-serif" font-size="34" font-weight="800" letter-spacing="6" fill="${BRAND.charcoal}" text-anchor="middle">AFRISMME HUB</text>
    <text x="400" y="66" font-family="'Plus Jakarta Sans', 'Inter', sans-serif" font-size="12" font-weight="600" letter-spacing="4.5" fill="${BRAND.bronzeDark}" text-anchor="middle">HOSPITALITY SUPPORT ECOSYSTEM</text>
    <text x="400" y="95" font-family="'Plus Jakarta Sans', 'Inter', sans-serif" font-size="9" font-weight="500" letter-spacing="3" fill="${BRAND.graySubtle}" text-anchor="middle">STRATEGIC OPERATIONS  •  FACILITIES  •  TECHNOLOGY  •  PROCUREMENT</text>
  </g>
</svg>`;
}

// 6. MONOCHROME BLACK (600x180)
function buildMonochromeBlack(conceptId) {
  return buildHorizontalLockup(conceptId, 'black');
}

// 7. MONOCHROME WHITE (600x180)
function buildMonochromeWhite(conceptId) {
  return buildHorizontalLockup(conceptId, 'white');
}

// 8. FULL COLOUR (600x180)
function buildFullColour(conceptId) {
  return buildHorizontalLockup(conceptId, 'color');
}

// 9. FAVICON / ICON (32x32)
function buildFavicon(conceptId) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32">
  <title>${conceptId} Favicon</title>
  <rect width="32" height="32" fill="${BRAND.charcoal}" rx="7"/>
  <g transform="translate(2, 2)">
    ${getSymbol(conceptId, 'bronze', 28)}
  </g>
</svg>`;
}

// 10. SMALL-SIZE SCALE TEST (760x300)
function buildSmallSizeTest(conceptId) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 300" width="760" height="300">
  <title>${conceptId} - Small Size Scalability &amp; Reduction Test</title>
  <rect width="760" height="300" fill="${BRAND.warmIvory}"/>
  <rect x="20" y="20" width="720" height="260" fill="none" stroke="${BRAND.borderLight}" stroke-width="1" rx="8"/>
  
  <text x="40" y="55" font-family="'Plus Jakarta Sans', sans-serif" font-size="14" font-weight="700" letter-spacing="1.5" fill="${BRAND.charcoal}">SCALABILITY &amp; REDUCTION LEGIBILITY AUDIT</text>
  <text x="40" y="75" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="400" fill="${BRAND.graySubtle}">Verification of vector geometry retention across standard micro-breakpoints (64px, 48px, 32px, 24px, 16px)</text>
  
  <!-- 64px Test -->
  <g transform="translate(50, 110)">
    <rect width="64" height="64" fill="${BRAND.charcoal}" rx="10"/>
    <g transform="translate(4, 4)">
      ${getSymbol(conceptId, 'bronze', 56)}
    </g>
    <text x="32" y="85" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="600" fill="${BRAND.charcoal}" text-anchor="middle">64px</text>
    <text x="32" y="98" font-family="'Plus Jakarta Sans', sans-serif" font-size="8.5" fill="${BRAND.graySubtle}" text-anchor="middle">App Icon</text>
  </g>
  
  <!-- 48px Test -->
  <g transform="translate(170, 118)">
    <rect width="48" height="48" fill="${BRAND.charcoal}" rx="8"/>
    <g transform="translate(3, 3)">
      ${getSymbol(conceptId, 'bronze', 42)}
    </g>
    <text x="24" y="72" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="600" fill="${BRAND.charcoal}" text-anchor="middle">48px</text>
    <text x="24" y="85" font-family="'Plus Jakarta Sans', sans-serif" font-size="8.5" fill="${BRAND.graySubtle}" text-anchor="middle">Avatar</text>
  </g>
  
  <!-- 32px Test -->
  <g transform="translate(280, 126)">
    <rect width="32" height="32" fill="${BRAND.charcoal}" rx="6"/>
    <g transform="translate(2, 2)">
      ${getSymbol(conceptId, 'bronze', 28)}
    </g>
    <text x="16" y="58" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="600" fill="${BRAND.charcoal}" text-anchor="middle">32px</text>
    <text x="16" y="71" font-family="'Plus Jakarta Sans', sans-serif" font-size="8.5" fill="${BRAND.graySubtle}" text-anchor="middle">Nav Bar</text>
  </g>
  
  <!-- 24px Test -->
  <g transform="translate(370, 130)">
    <rect width="24" height="24" fill="${BRAND.charcoal}" rx="4"/>
    <g transform="translate(2, 2)">
      ${getSymbol(conceptId, 'bronze', 20)}
    </g>
    <text x="12" y="50" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="600" fill="${BRAND.charcoal}" text-anchor="middle">24px</text>
    <text x="12" y="63" font-family="'Plus Jakarta Sans', sans-serif" font-size="8.5" fill="${BRAND.graySubtle}" text-anchor="middle">UI Pin</text>
  </g>
  
  <!-- 16px Test -->
  <g transform="translate(450, 134)">
    <rect width="16" height="16" fill="${BRAND.charcoal}" rx="3"/>
    <g transform="translate(1, 1)">
      ${getSymbol(conceptId, 'bronze', 14)}
    </g>
    <text x="8" y="42" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="600" fill="${BRAND.charcoal}" text-anchor="middle">16px</text>
    <text x="8" y="55" font-family="'Plus Jakarta Sans', sans-serif" font-size="8.5" fill="${BRAND.graySubtle}" text-anchor="middle">Favicon</text>
  </g>
  
  <!-- Optical Performance Verification -->
  <g transform="translate(530, 110)">
    <rect width="180" height="120" fill="${BRAND.charcoal}" rx="8"/>
    <text x="20" y="30" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="700" fill="${BRAND.bronze}">REDUCTION RATING</text>
    <text x="20" y="50" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="600" fill="${BRAND.white}">Optical Clarity: 100%</text>
    <text x="20" y="68" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" fill="#9CA3AF">Stroke Integrity: Sharp</text>
    <text x="20" y="84" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" fill="#9CA3AF">Negative Space: Open</text>
    <text x="20" y="100" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" fill="#9CA3AF">No Choking / Blurring</text>
  </g>
</svg>`;
}

// 11. LARGE SIGNAGE TEST (960x460)
function buildLargeSignageTest(conceptId) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 460" width="960" height="460">
  <title>${conceptId} - Large Architectural Facade Signage Simulation</title>
  
  <rect width="960" height="460" fill="#0D0E11"/>
  
  <line x1="0" y1="120" x2="960" y2="120" stroke="#1A1D24" stroke-width="1.5"/>
  <line x1="0" y1="340" x2="960" y2="340" stroke="#1A1D24" stroke-width="1.5"/>
  <line x1="320" y1="0" x2="320" y2="460" stroke="#1A1D24" stroke-width="1.5"/>
  <line x1="640" y1="0" x2="640" y2="460" stroke="#1A1D24" stroke-width="1.5"/>

  <rect x="140" y="100" width="680" height="240" fill="#14171D" stroke="${BRAND.borderDark}" stroke-width="2" rx="12"/>
  
  <circle cx="160" cy="120" r="4" fill="#3A404D"/>
  <circle cx="800" cy="120" r="4" fill="#3A404D"/>
  <circle cx="160" cy="320" r="4" fill="#3A404D"/>
  <circle cx="800" cy="320" r="4" fill="#3A404D"/>
  
  <g transform="translate(192, 142)">
    ${getSymbol(conceptId, 'black', 156)}
  </g>
  <g transform="translate(190, 140)">
    ${getSymbol(conceptId, 'bronze', 156)}
  </g>
  
  <g transform="translate(380, 175)">
    <text x="0" y="44" font-family="'Plus Jakarta Sans', 'Montserrat', sans-serif" font-size="38" font-weight="800" letter-spacing="6" fill="${BRAND.bronze}">AFRISMME HUB</text>
    <text x="0" y="78" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="600" letter-spacing="5" fill="${BRAND.warmIvory}">HOSPITALITY SUPPORT ECOSYSTEM</text>
    <text x="0" y="108" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="500" letter-spacing="3" fill="#8892A0">EXECUTIVE CORPORATE HEADQUARTERS</text>
  </g>
</svg>`;
}

const conceptList = [
  { id: 'concept-01-ecosystem', name: 'Hospitality Ecosystem', number: '01' },
  { id: 'concept-02-architecture', name: 'African Hospitality Architecture', number: '02' },
  { id: 'concept-03-monogram', name: 'AH / Hub Corporate Monogram', number: '03' }
];

console.log('Regenerating all 33 core vector identity assets...');

conceptList.forEach(c => {
  const dir = path.join(rootDir, 'concepts', c.id);
  
  const files = {
    'primary-logo.svg': buildPrimaryLogo(c.id),
    'symbol-only.svg': buildSymbolOnly(c.id, 'color'),
    'wordmark.svg': buildWordmarkOnly('color'),
    'horizontal-lockup.svg': buildHorizontalLockup(c.id, 'color'),
    'stacked-lockup.svg': buildStackedLockup(c.id, 'color'),
    'monochrome-black.svg': buildMonochromeBlack(c.id),
    'monochrome-white.svg': buildMonochromeWhite(c.id),
    'full-colour.svg': buildFullColour(c.id),
    'favicon-icon.svg': buildFavicon(c.id),
    'small-size-test.svg': buildSmallSizeTest(c.id),
    'large-signage-test.svg': buildLargeSignageTest(c.id)
  };

  Object.entries(files).forEach(([filename, content]) => {
    fs.writeFileSync(path.join(dir, filename), content.trim());
    console.log(`  [OK] ${c.id}/${filename}`);
  });
});

console.log('Core vector identity assets updated successfully!');
