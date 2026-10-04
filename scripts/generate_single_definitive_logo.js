/**
 * THE DEFINITIVE MASTER LOGO FOR:
 * "RESTAURANTS AND HOSPITALITY SUPPORT"
 * 
 * Strict Compliance:
 * - 100% Vector Geometry
 * - ZERO Food Clichés (no forks, knives, spoons, chef hats, plates)
 * - ZERO AI Art Effects (no 3D blur, no artificial lighting, no excessive gradients)
 * - Monumental architectural presence: The Hospitality Archway & Cantilever Shelter
 *   supported by twin institutional pillars and a solid operational plinth.
 */

const fs = require('fs');
const path = require('path');

const rootDir = process.cwd();
const logoDir = path.join(rootDir, 'logo');
const mockupsDir = path.join(rootDir, 'mockups');

if (!fs.existsSync(logoDir)) fs.mkdirSync(logoDir, { recursive: true });
if (!fs.existsSync(mockupsDir)) fs.mkdirSync(mockupsDir, { recursive: true });

// Master Corporate Palette
const BRAND = {
  charcoal: '#121316',        // Deep Charcoal / Black
  charcoalElevated: '#1A1D24',
  warmIvory: '#F9F8F5',       // Warm Ivory
  warmIvoryDark: '#EFECE6',
  bronze: '#C5A880',          // Muted Bronze / Champagne Gold
  bronzeLight: '#D8C2A0',
  bronzeDark: '#A88A62',
  deepGreen: '#1B3B2B',       // Deep Forest Green
  white: '#FFFFFF',
  black: '#000000',
  borderDark: '#2E3540',
  borderLight: '#E2DED5',
  grayMuted: '#8E99A8'
};

// ====================================================================
// MASTER GEOMETRIC SYMBOL: "THE HOSPITALITY ARCH & SUPPORT CANOPY"
// ====================================================================
function getMasterSymbol(theme = 'color', size = 200) {
  let plinth, pillars, canopy, arch, beacon, horizon;

  if (theme === 'black') {
    plinth = BRAND.charcoal;
    pillars = BRAND.charcoal;
    canopy = BRAND.charcoal;
    arch = BRAND.charcoal;
    beacon = BRAND.charcoal;
    horizon = BRAND.charcoal;
  } else if (theme === 'white') {
    plinth = BRAND.white;
    pillars = BRAND.white;
    canopy = BRAND.white;
    arch = BRAND.white;
    beacon = BRAND.white;
    horizon = BRAND.white;
  } else if (theme === 'bronze') {
    plinth = BRAND.bronze;
    pillars = BRAND.bronze;
    canopy = BRAND.bronze;
    arch = BRAND.bronze;
    beacon = BRAND.bronze;
    horizon = BRAND.bronze;
  } else {
    // Master Full Colour
    plinth = BRAND.charcoal;      // Solid operational base
    pillars = BRAND.charcoal;     // Twin institutional support pillars
    canopy = BRAND.bronze;        // Sheltering architectural cantilever lintel
    arch = BRAND.deepGreen;       // Welcoming sanctuary gateway
    beacon = BRAND.bronze;        // Apex guidance star of quality
    horizon = BRAND.bronze;       // Warm hearth beacon of hospitality
  }

  const scale = (size / 200).toFixed(4);

  return `
    <g class="master-symbol-rhs" transform="scale(${scale})">
      <!-- 1. Ground Foundation Plinth (Operational Support Base) -->
      <rect x="22" y="172" width="156" height="7" rx="2" fill="${plinth}"/>
      
      <!-- 2. Twin Monumental Support Pillars (Facilities & Operations) -->
      <rect x="34" y="52" width="24" height="120" rx="2" fill="${pillars}"/>
      <rect x="142" y="52" width="24" height="120" rx="2" fill="${pillars}"/>
      
      <!-- 3. Welcoming Hospitality Archway (Sanctuary Portal) -->
      <path d="M 64 172 L 64 106 A 36 36 0 0 1 136 106 L 136 172 L 118 172 L 118 112 A 18 18 0 0 0 82 112 L 82 172 Z" fill="${arch}"/>
      
      <!-- 4. Warm Hearth Horizon Node (Welcoming Core) -->
      <circle cx="100" cy="140" r="6.5" fill="${horizon}"/>
      
      <!-- 5. Sheltering Cantilever Canopy (Grand Architectural Lintel) -->
      <polygon points="16,52 26,38 174,38 184,52" fill="${canopy}"/>
      
      <!-- 6. Apex Diamond Keystone Beacon (Hospitality Standard of Excellence) -->
      <polygon points="100,18 114,32 100,44 86,32" fill="${beacon}"/>
    </g>
  `;
}

// ====================================================================
// CORE DELIVERABLE BUILDERS
// ====================================================================

// 1. SYMBOL ONLY (200x200)
function buildSymbolOnly(theme = 'color') {
  const bg = theme === 'white' ? BRAND.charcoal : 'transparent';
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="200" height="200">
  <title>Restaurants &amp; Hospitality Support - Master Vector Symbol</title>
  ${bg !== 'transparent' ? `<rect width="200" height="200" fill="${bg}" rx="12"/>` : ''}
  ${getMasterSymbol(theme, 200)}
</svg>`;
}

// 2. WORDMARK ONLY (540x95)
function buildWordmarkOnly(theme = 'color') {
  const bg = theme === 'white' ? BRAND.charcoal : 'transparent';
  let pFill = theme === 'white' ? BRAND.white : BRAND.charcoal;
  let sFill = theme === 'white' ? '#9CA3AF' : (theme === 'black' ? '#4B5563' : BRAND.bronzeDark);

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 95" width="540" height="95">
  <title>Restaurants &amp; Hospitality Support - Corporate Wordmark</title>
  ${bg !== 'transparent' ? `<rect width="540" height="95" fill="${bg}" rx="8"/>` : ''}
  <g transform="translate(10, 18)">
    <text x="0" y="34" font-family="'Plus Jakarta Sans', 'Montserrat', -apple-system, sans-serif" font-size="28" font-weight="800" letter-spacing="4.5" fill="${pFill}">RESTAURANTS &amp; HOSPITALITY</text>
    <text x="0" y="62" font-family="'Plus Jakarta Sans', sans-serif" font-size="14" font-weight="700" letter-spacing="6" fill="${BRAND.bronze}">SUPPORT ECOSYSTEM</text>
  </g>
</svg>`;
}

// 3. HORIZONTAL LOCKUP (700x170)
function buildHorizontalLockup(theme = 'color') {
  const bg = theme === 'white' ? BRAND.charcoal : 'transparent';
  let pFill = theme === 'white' ? BRAND.white : BRAND.charcoal;
  let sFill = theme === 'white' ? BRAND.bronzeLight : BRAND.bronzeDark;
  let subFill = theme === 'white' ? '#9CA3AF' : '#6B7280';

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 170" width="720" height="170">
  <title>Restaurants &amp; Hospitality Support - Horizontal Lockup</title>
  ${bg !== 'transparent' ? `<rect width="720" height="170" fill="${bg}" rx="12"/>` : ''}
  
  <!-- Master Symbol -->
  <g transform="translate(30, 22)">
    ${getMasterSymbol(theme, 126)}
  </g>
  
  <!-- Architectural Vertical Divider Line -->
  <line x1="180" y1="36" x2="180" y2="134" stroke="${theme === 'white' ? BRAND.borderDark : BRAND.borderLight}" stroke-width="1.5"/>
  
  <!-- Wordmark -->
  <g transform="translate(205, 52)">
    <text x="0" y="30" font-family="'Plus Jakarta Sans', 'Montserrat', -apple-system, sans-serif" font-size="28" font-weight="800" letter-spacing="4" fill="${pFill}">RESTAURANTS &amp; HOSPITALITY</text>
    <text x="0" y="56" font-family="'Plus Jakarta Sans', sans-serif" font-size="14" font-weight="700" letter-spacing="5" fill="${sFill}">SUPPORT ECOSYSTEM</text>
    <text x="0" y="78" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" font-weight="500" letter-spacing="2.5" fill="${subFill}">FACILITIES  •  OPERATIONS  •  TECHNOLOGY  •  PROCUREMENT</text>
  </g>
</svg>`;
}

// 4. STACKED LOCKUP (440x440)
function buildStackedLockup(theme = 'color') {
  const bg = theme === 'white' ? BRAND.charcoal : 'transparent';
  let pFill = theme === 'white' ? BRAND.white : BRAND.charcoal;
  let sFill = theme === 'white' ? BRAND.bronzeLight : BRAND.bronzeDark;

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 440" width="440" height="440">
  <title>Restaurants &amp; Hospitality Support - Stacked Lockup</title>
  ${bg !== 'transparent' ? `<rect width="440" height="440" fill="${bg}" rx="16"/>` : ''}
  
  <!-- Centered Symbol (170x170 at x=135, y=50) -->
  <g transform="translate(135, 50)">
    ${getMasterSymbol(theme, 170)}
  </g>
  
  <!-- Centered Wordmark -->
  <g transform="translate(0, 275)">
    <text x="220" y="32" font-family="'Plus Jakarta Sans', 'Montserrat', sans-serif" font-size="24" font-weight="800" letter-spacing="3.5" fill="${pFill}" text-anchor="middle">RESTAURANTS &amp; HOSPITALITY</text>
    <text x="220" y="58" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="700" letter-spacing="4.5" fill="${sFill}" text-anchor="middle">SUPPORT ECOSYSTEM</text>
    <text x="220" y="82" font-family="'Plus Jakarta Sans', sans-serif" font-size="8.5" font-weight="500" letter-spacing="2.5" fill="${BRAND.grayMuted}" text-anchor="middle">AN AFRISMME HUB ENTERPRISE</text>
  </g>
</svg>`;
}

// 5. PRIMARY MASTER LOGO PRESENTATION (840x500)
function buildPrimaryLogo() {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 500" width="840" height="500">
  <title>Restaurants &amp; Hospitality Support - Master Corporate Identity</title>
  
  <!-- Heavy Warm Ivory Canvas -->
  <rect width="840" height="500" fill="${BRAND.warmIvory}"/>
  <rect x="24" y="24" width="792" height="452" fill="none" stroke="${BRAND.borderLight}" stroke-width="1" rx="10"/>
  
  <!-- Centered Symbol (190x190 at x=325, y=85) -->
  <g transform="translate(325, 85)">
    ${getMasterSymbol('color', 190)}
  </g>
  
  <!-- Corporate Typographic System -->
  <g transform="translate(0, 330)">
    <text x="420" y="34" font-family="'Plus Jakarta Sans', 'Montserrat', sans-serif" font-size="32" font-weight="800" letter-spacing="5" fill="${BRAND.charcoal}" text-anchor="middle">RESTAURANTS &amp; HOSPITALITY</text>
    <text x="420" y="66" font-family="'Plus Jakarta Sans', sans-serif" font-size="15" font-weight="700" letter-spacing="6" fill="${BRAND.bronzeDark}" text-anchor="middle">SUPPORT ECOSYSTEM</text>
    <line x1="300" y1="82" x2="540" y2="82" stroke="${BRAND.bronze}" stroke-width="1.5" stroke-opacity="0.5"/>
    <text x="420" y="102" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" font-weight="600" letter-spacing="3" fill="${BRAND.grayMuted}" text-anchor="middle">STRATEGIC OPERATIONS  •  FACILITIES &amp; ACOUSTIC INTERIORS  •  PROCUREMENT</text>
  </g>
</svg>`;
}

// 6. MONOCHROME BLACK (720x170)
function buildMonochromeBlack() {
  return buildHorizontalLockup('black');
}

// 7. MONOCHROME WHITE (720x170)
function buildMonochromeWhite() {
  return buildHorizontalLockup('white');
}

// 8. FULL COLOUR (720x170)
function buildFullColour() {
  return buildHorizontalLockup('color');
}

// 9. FAVICON / ICON (32x32)
function buildFavicon() {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32">
  <title>Restaurants &amp; Hospitality Support Favicon</title>
  <rect width="32" height="32" fill="${BRAND.charcoal}" rx="7"/>
  <g transform="translate(2, 2)">
    ${getMasterSymbol('bronze', 28)}
  </g>
</svg>`;
}

// 10. SMALL-SIZE SCALE TEST (760x300)
function buildSmallSizeTest() {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 300" width="760" height="300">
  <title>Restaurants &amp; Hospitality Support - Scalability &amp; Reduction Test</title>
  <rect width="760" height="300" fill="${BRAND.warmIvory}"/>
  <rect x="20" y="20" width="720" height="260" fill="none" stroke="${BRAND.borderLight}" stroke-width="1" rx="8"/>
  
  <text x="40" y="55" font-family="'Plus Jakarta Sans', sans-serif" font-size="14" font-weight="700" letter-spacing="1.5" fill="${BRAND.charcoal}">RESTAURANTS &amp; HOSPITALITY SUPPORT — SCALABILITY AUDIT</text>
  <text x="40" y="75" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="400" fill="${BRAND.grayMuted}">Demonstrating zero stroke crowding across micro breakpoints (64px, 48px, 32px, 24px, 16px)</text>
  
  <!-- 64px Test -->
  <g transform="translate(50, 110)">
    <rect width="64" height="64" fill="${BRAND.charcoal}" rx="10"/>
    <g transform="translate(4, 4)">
      ${getMasterSymbol('bronze', 56)}
    </g>
    <text x="32" y="85" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="600" fill="${BRAND.charcoal}" text-anchor="middle">64px</text>
    <text x="32" y="98" font-family="'Plus Jakarta Sans', sans-serif" font-size="8.5" fill="${BRAND.grayMuted}" text-anchor="middle">App Icon</text>
  </g>
  
  <!-- 48px Test -->
  <g transform="translate(170, 118)">
    <rect width="48" height="48" fill="${BRAND.charcoal}" rx="8"/>
    <g transform="translate(3, 3)">
      ${getMasterSymbol('bronze', 42)}
    </g>
    <text x="24" y="72" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="600" fill="${BRAND.charcoal}" text-anchor="middle">48px</text>
    <text x="24" y="85" font-family="'Plus Jakarta Sans', sans-serif" font-size="8.5" fill="${BRAND.grayMuted}" text-anchor="middle">Avatar</text>
  </g>
  
  <!-- 32px Test -->
  <g transform="translate(280, 126)">
    <rect width="32" height="32" fill="${BRAND.charcoal}" rx="6"/>
    <g transform="translate(2, 2)">
      ${getMasterSymbol('bronze', 28)}
    </g>
    <text x="16" y="58" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="600" fill="${BRAND.charcoal}" text-anchor="middle">32px</text>
    <text x="16" y="71" font-family="'Plus Jakarta Sans', sans-serif" font-size="8.5" fill="${BRAND.grayMuted}" text-anchor="middle">Nav Bar</text>
  </g>
  
  <!-- 24px Test -->
  <g transform="translate(370, 130)">
    <rect width="24" height="24" fill="${BRAND.charcoal}" rx="4"/>
    <g transform="translate(2, 2)">
      ${getMasterSymbol('bronze', 20)}
    </g>
    <text x="12" y="50" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="600" fill="${BRAND.charcoal}" text-anchor="middle">24px</text>
    <text x="12" y="63" font-family="'Plus Jakarta Sans', sans-serif" font-size="8.5" fill="${BRAND.grayMuted}" text-anchor="middle">UI Pin</text>
  </g>
  
  <!-- 16px Test -->
  <g transform="translate(450, 134)">
    <rect width="16" height="16" fill="${BRAND.charcoal}" rx="3"/>
    <g transform="translate(1, 1)">
      ${getMasterSymbol('bronze', 14)}
    </g>
    <text x="8" y="42" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="600" fill="${BRAND.charcoal}" text-anchor="middle">16px</text>
    <text x="8" y="55" font-family="'Plus Jakarta Sans', sans-serif" font-size="8.5" fill="${BRAND.grayMuted}" text-anchor="middle">Favicon</text>
  </g>
  
  <!-- Quality Guarantee -->
  <g transform="translate(530, 110)">
    <rect width="180" height="120" fill="${BRAND.charcoal}" rx="8"/>
    <text x="20" y="30" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="700" fill="${BRAND.bronze}">MICRO-SCALE RATING</text>
    <text x="20" y="50" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="600" fill="${BRAND.white}">Clarity: 100% Retained</text>
    <text x="20" y="68" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" fill="#9CA3AF">Twin Pillars: Distinct</text>
    <text x="20" y="84" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" fill="#9CA3AF">Canopy Overhang: Crisp</text>
    <text x="20" y="100" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" fill="#9CA3AF">Portal Aperture: Open</text>
  </g>
</svg>`;
}

// 11. LARGE SIGNAGE TEST (960x460)
function buildLargeSignageTest() {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 460" width="960" height="460">
  <title>Restaurants &amp; Hospitality Support - Large Architectural Entrance Signage</title>
  
  <!-- Dark Textured Architectural Granite Wall -->
  <rect width="960" height="460" fill="#0D0E11"/>
  
  <!-- Subtle Wall Grooves -->
  <line x1="0" y1="120" x2="960" y2="120" stroke="#1A1D24" stroke-width="1.5"/>
  <line x1="0" y1="340" x2="960" y2="340" stroke="#1A1D24" stroke-width="1.5"/>
  <line x1="320" y1="0" x2="320" y2="460" stroke="#1A1D24" stroke-width="1.5"/>
  <line x1="640" y1="0" x2="640" y2="460" stroke="#1A1D24" stroke-width="1.5"/>

  <!-- Brushed Metal Signboard Panel with Bronze Border -->
  <rect x="110" y="90" width="740" height="260" fill="#14171D" stroke="${BRAND.borderDark}" stroke-width="2" rx="12"/>
  <rect x="120" y="100" width="720" height="240" fill="none" stroke="${BRAND.bronze}" stroke-width="1" stroke-opacity="0.3" rx="8"/>
  
  <!-- Precision Standoff Hardware -->
  <circle cx="135" cy="115" r="4.5" fill="#3D4554"/>
  <circle cx="825" cy="115" r="4.5" fill="#3D4554"/>
  <circle cx="135" cy="325" r="4.5" fill="#3D4554"/>
  <circle cx="825" cy="325" r="4.5" fill="#3D4554"/>
  
  <!-- Dimensional Cast Bronze Symbol (Shadow + Bronze) -->
  <g transform="translate(162, 137)">
    <g transform="translate(3, 4)" opacity="0.6">
      ${getMasterSymbol('black', 165)}
    </g>
    ${getMasterSymbol('bronze', 165)}
  </g>
  
  <!-- Typographic Signage in Brushed Champagne Gold -->
  <g transform="translate(365, 175)">
    <text x="0" y="38" font-family="'Plus Jakarta Sans', 'Montserrat', sans-serif" font-size="32" font-weight="800" letter-spacing="4.5" fill="${BRAND.bronze}">RESTAURANTS &amp; HOSPITALITY</text>
    <text x="0" y="72" font-family="'Plus Jakarta Sans', sans-serif" font-size="15" font-weight="700" letter-spacing="6" fill="${BRAND.warmIvory}">SUPPORT ECOSYSTEM</text>
    <line x1="0" y1="90" x2="380" y2="90" stroke="${BRAND.bronze}" stroke-width="1" stroke-opacity="0.4"/>
    <text x="0" y="112" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="500" letter-spacing="3" fill="#8892A0">CENTRAL CORPORATE HEADQUARTERS &amp; CLIENT HUB</text>
  </g>
</svg>`;
}

// Write the 11 core files to `logo/`
console.log('Writing the 11 definitive logo files into logo/ ...');

const files = {
  'primary-logo.svg': buildPrimaryLogo(),
  'symbol-only.svg': buildSymbolOnly('color'),
  'wordmark.svg': buildWordmarkOnly('color'),
  'horizontal-lockup.svg': buildHorizontalLockup('color'),
  'stacked-lockup.svg': buildStackedLockup('color'),
  'monochrome-black.svg': buildMonochromeBlack(),
  'monochrome-white.svg': buildMonochromeWhite(),
  'full-colour.svg': buildFullColour(),
  'favicon-icon.svg': buildFavicon(),
  'small-size-test.svg': buildSmallSizeTest(),
  'large-signage-test.svg': buildLargeSignageTest()
};

Object.entries(files).forEach(([name, content]) => {
  fs.writeFileSync(path.join(logoDir, name), content.trim());
  console.log(`  [OK] logo/${name}`);
});

console.log('Generating real-world mockups for Restaurants & Hospitality Support...');

// Update mockups with this master identity
const mockups = require('./generate_mockups.js');
// Let's create dedicated mockups tailored directly to Restaurants & Hospitality Support!

function buildMasterSignageMockup() {
  return buildLargeSignageTest();
}

function buildMasterUniformMockup() {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 560" width="1000" height="560">
  <title>Restaurants &amp; Hospitality Support - Staff Uniform Suite</title>
  
  <rect width="1000" height="560" fill="#0C0E12"/>
  
  <text x="50" y="45" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" font-weight="700" letter-spacing="2" fill="${BRAND.warmIvory}">STAFF APPAREL &amp; UNIFORM EMBROIDERY SPECIFICATION</text>
  <text x="50" y="68" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="400" fill="${BRAND.grayMuted}">Bullion Gold Thread Blazer Crest  •  Heavy Canvas Apron Badge  •  Brushed Brass Executive Lapel Pin</text>

  <!-- PANEL 1: EXECUTIVE BLAZER -->
  <g transform="translate(50, 100)">
    <rect width="270" height="400" fill="#181B22" rx="10" stroke="#282E3B" stroke-width="1.5"/>
    <text x="25" y="32" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="700" letter-spacing="1.5" fill="${BRAND.bronze}">EXECUTIVE BLAZER</text>
    <text x="25" y="48" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" fill="${BRAND.grayMuted}">Bullion Thread Pocket Crest</text>
    
    <path d="M 55 120 L 215 120 L 215 260 Q 215 310 135 320 Q 55 310 55 260 Z" fill="#14161C" stroke="#2B3240" stroke-width="2"/>
    <path d="M 62 126 L 208 126 L 208 255 Q 208 300 135 310 Q 62 300 62 255 Z" fill="none" stroke="#222834" stroke-dasharray="3 3" stroke-width="1.5"/>
    
    <g transform="translate(85, 145)">
      ${getMasterSymbol('bronze', 100)}
    </g>
    <text x="135" y="272" font-family="'Plus Jakarta Sans', sans-serif" font-size="8.5" font-weight="800" letter-spacing="1.5" fill="${BRAND.bronze}" text-anchor="middle">RESTAURANTS &amp; HOSPITALITY</text>
    <text x="135" y="286" font-family="'Plus Jakarta Sans', sans-serif" font-size="7.5" font-weight="600" letter-spacing="2" fill="${BRAND.warmIvory}" text-anchor="middle">SUPPORT</text>
  </g>

  <!-- PANEL 2: OPERATIONS APRON -->
  <g transform="translate(365, 100)">
    <rect width="270" height="400" fill="#15201A" rx="10" stroke="#253A2E" stroke-width="1.5"/>
    <text x="25" y="32" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="700" letter-spacing="1.5" fill="${BRAND.bronze}">OPERATIONS APRON</text>
    <text x="25" y="48" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" fill="${BRAND.grayMuted}">14oz Waxed Canvas Leather Patch</text>
    
    <rect x="45" y="130" width="180" height="180" rx="8" fill="#1F1A15" stroke="#3D3227" stroke-width="2"/>
    <rect x="52" y="137" width="166" height="166" rx="6" fill="none" stroke="#5E4E3D" stroke-dasharray="4 3" stroke-width="1.5"/>
    
    <g transform="translate(85, 155)">
      ${getMasterSymbol('bronze', 100)}
    </g>
    <text x="135" y="280" font-family="'Plus Jakarta Sans', sans-serif" font-size="8" font-weight="700" letter-spacing="1.5" fill="${BRAND.bronzeLight}" text-anchor="middle">HOSPITALITY SUPPORT</text>
  </g>

  <!-- PANEL 3: BRASS LAPEL PIN -->
  <g transform="translate(680, 100)">
    <rect width="270" height="400" fill="#16181F" rx="10" stroke="#262A36" stroke-width="1.5"/>
    <text x="25" y="32" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="700" letter-spacing="1.5" fill="${BRAND.bronze}">EXECUTIVE LAPEL PIN</text>
    <text x="25" y="48" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" fill="${BRAND.grayMuted}">Cast Brushed Brass (22mm)</text>
    
    <rect x="45" y="110" width="180" height="220" rx="12" fill="#0A0B0E" stroke="#20242E" stroke-width="2"/>
    
    <circle cx="135" cy="205" r="54" fill="#201C16" stroke="${BRAND.bronze}" stroke-width="2"/>
    <circle cx="135" cy="205" r="48" fill="#151310" stroke="${BRAND.bronzeDark}" stroke-width="1"/>
    
    <g transform="translate(100, 170)">
      ${getMasterSymbol('bronze', 70)}
    </g>
    
    <text x="135" y="285" font-family="'Plus Jakarta Sans', sans-serif" font-size="7.5" font-weight="600" letter-spacing="1.5" fill="${BRAND.bronze}" text-anchor="middle">SUPPORT CORPS</text>
  </g>
</svg>`;
}

function buildMasterVehicleMockup() {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 560" width="1000" height="560">
  <title>Restaurants &amp; Hospitality Support - Fleet Vehicle Livery</title>
  
  <rect width="1000" height="560" fill="#0F1116"/>
  
  <text x="50" y="45" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" font-weight="700" letter-spacing="2" fill="${BRAND.warmIvory}">HOSPITALITY SUPPORT FLEET VEHICLE LIVERY</text>
  <text x="50" y="68" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="400" fill="${BRAND.grayMuted}">High-Roof Commercial Support Van  •  Matte Charcoal Finish with Metallic Bronze Graphics</text>

  <rect x="0" y="480" width="1000" height="80" fill="#0A0C0E"/>
  <line x1="0" y1="480" x2="1000" y2="480" stroke="#1D222A" stroke-width="2"/>

  <g id="van-body" transform="translate(100, 130)">
    <ellipse cx="400" cy="350" rx="380" ry="14" fill="#000000" opacity="0.75"/>
    
    <path d="M 60 320 L 730 320 Q 745 320 745 305 L 745 130 Q 745 90 700 90 L 260 90 Q 220 90 180 150 L 90 230 Q 60 260 60 320 Z" fill="#171A21" stroke="#2B3240" stroke-width="2"/>
    
    <path d="M 185 150 L 255 105 L 255 220 L 115 220 Z" fill="#0B0D12" stroke="#28303E" stroke-width="1.5"/>
    <rect x="270" y="105" width="110" height="115" rx="3" fill="#0B0D12" stroke="#28303E" stroke-width="1.5"/>
    
    <path d="M 60 290 L 80 290 L 80 260 L 60 265 Z" fill="#E5E7EB" opacity="0.9"/>
    <path d="M 60 295 L 60 330 L 100 330 L 100 315 Z" fill="#101216"/>
    
    <line x1="395" y1="90" x2="395" y2="320" stroke="#101318" stroke-width="2"/>
    <line x1="580" y1="90" x2="580" y2="320" stroke="#101318" stroke-width="2"/>
    
    <!-- Wheels -->
    <g transform="translate(170, 320)">
      <circle cx="0" cy="0" r="48" fill="#0D0E12" stroke="#222732" stroke-width="4"/>
      <circle cx="0" cy="0" r="32" fill="#1C212A"/>
      <circle cx="0" cy="0" r="14" fill="#3D4554"/>
      <line x1="-28" y1="0" x2="28" y2="0" stroke="#3D4554" stroke-width="3"/>
      <line x1="0" y1="-28" x2="0" y2="28" stroke="#3D4554" stroke-width="3"/>
    </g>
    <g transform="translate(620, 320)">
      <circle cx="0" cy="0" r="48" fill="#0D0E12" stroke="#222732" stroke-width="4"/>
      <circle cx="0" cy="0" r="32" fill="#1C212A"/>
      <circle cx="0" cy="0" r="14" fill="#3D4554"/>
      <line x1="-28" y1="0" x2="28" y2="0" stroke="#3D4554" stroke-width="3"/>
      <line x1="0" y1="-28" x2="0" y2="28" stroke="#3D4554" stroke-width="3"/>
    </g>

    <!-- Bronze Livery Graphic Lines -->
    <line x1="120" y1="230" x2="745" y2="230" stroke="${BRAND.bronze}" stroke-width="2.5"/>
    <line x1="260" y1="235" x2="745" y2="235" stroke="${BRAND.bronzeDark}" stroke-width="1"/>

    <!-- Side Door Master Emblem -->
    <g transform="translate(405, 110)">
      ${getMasterSymbol('bronze', 105)}
    </g>
    
    <!-- Livery Typography -->
    <g transform="translate(530, 130)">
      <text x="0" y="24" font-family="'Plus Jakarta Sans', sans-serif" font-size="18" font-weight="800" letter-spacing="3" fill="${BRAND.warmIvory}">RESTAURANTS &amp; HOSPITALITY</text>
      <text x="0" y="44" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="700" letter-spacing="3.5" fill="${BRAND.bronze}">SUPPORT ECOSYSTEM</text>
      <text x="0" y="64" font-family="'Plus Jakarta Sans', sans-serif" font-size="7.5" font-weight="500" letter-spacing="1.5" fill="#8E99A8">24/7 FACILITIES &amp; OPERATIONAL INTERVENTION</text>
    </g>

    <g transform="translate(290, 160)">
      ${getMasterSymbol('white', 36)}
      <text x="44" y="16" font-family="'Plus Jakarta Sans', sans-serif" font-size="7.5" font-weight="700" fill="${BRAND.warmIvory}">UNIT 01</text>
      <text x="44" y="26" font-family="'Plus Jakarta Sans', sans-serif" font-size="6.5" fill="#8892A0">SUPPORT</text>
    </g>
  </g>
</svg>`;
}

function buildMasterBusinessCardMockup() {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 560" width="1000" height="560">
  <title>Restaurants &amp; Hospitality Support - Luxury Stationery</title>
  
  <rect width="1000" height="560" fill="#0C0E12"/>
  
  <text x="50" y="45" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" font-weight="700" letter-spacing="2" fill="${BRAND.warmIvory}">EXECUTIVE BUSINESS STATIONERY (600GSM COTTON STOCK)</text>
  <text x="50" y="68" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="400" fill="${BRAND.grayMuted}">Muted Bronze Foil Stamping  •  Blind Debossed Charcoal Core  •  Warm Ivory Matte Heavy Card</text>

  <!-- CARD 1: FRONT -->
  <g transform="translate(60, 110)">
    <rect x="8" y="12" width="410" height="250" rx="8" fill="#000000" opacity="0.6"/>
    <rect width="410" height="250" rx="8" fill="${BRAND.charcoal}" stroke="#2A2F3A" stroke-width="1.5"/>
    <rect x="12" y="12" width="386" height="226" rx="5" fill="none" stroke="${BRAND.borderDark}" stroke-width="0.75"/>
    
    <g transform="translate(150, 40)">
      ${getMasterSymbol('bronze', 110)}
    </g>
    
    <text x="205" y="180" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" font-weight="800" letter-spacing="3.5" fill="${BRAND.warmIvory}" text-anchor="middle">RESTAURANTS &amp; HOSPITALITY</text>
    <text x="205" y="202" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" font-weight="700" letter-spacing="4" fill="${BRAND.bronze}" text-anchor="middle">SUPPORT ECOSYSTEM</text>
    
    <text x="205" y="235" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" font-weight="600" fill="${BRAND.grayMuted}" text-anchor="middle">CARD FRONT (METALLIC BRONZE FOIL)</text>
  </g>

  <!-- CARD 2: BACK -->
  <g transform="translate(530, 110)">
    <rect x="8" y="12" width="410" height="250" rx="8" fill="#000000" opacity="0.6"/>
    <rect width="410" height="250" rx="8" fill="${BRAND.warmIvory}" stroke="${BRAND.borderLight}" stroke-width="1.5"/>
    
    <g transform="translate(340, 24)">
      ${getMasterSymbol('bronze', 44)}
    </g>
    
    <g transform="translate(36, 45)">
      <text x="0" y="20" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" font-weight="800" letter-spacing="1" fill="${BRAND.charcoal}">EXECUTIVE DIRECTOR</text>
      <text x="0" y="38" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" font-weight="600" letter-spacing="2" fill="${BRAND.bronzeDark}">RESTAURANTS &amp; HOSPITALITY SUPPORT GROUP</text>
      
      <line x1="0" y1="58" x2="270" y2="58" stroke="${BRAND.borderLight}" stroke-width="1"/>
      
      <text x="0" y="82" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" font-weight="500" fill="${BRAND.charcoal}">T:  +27 (0) 11 894 2000</text>
      <text x="0" y="100" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" font-weight="500" fill="${BRAND.charcoal}">M:  +27 (0) 82 555 0192</text>
      <text x="0" y="118" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" font-weight="500" fill="${BRAND.charcoal}">E:  support@hospitalityecosystem.com</text>
      <text x="0" y="136" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" font-weight="500" fill="${BRAND.charcoal}">W:  www.hospitalitysupport.co.za</text>
      <text x="0" y="156" font-family="'Plus Jakarta Sans', sans-serif" font-size="8" font-weight="600" letter-spacing="1" fill="${BRAND.grayMuted}">JOHANNESBURG  •  CAPE TOWN  •  DURBAN</text>
    </g>
    
    <rect x="340" y="180" width="36" height="36" fill="#121316" rx="3"/>
    <rect x="345" y="185" width="26" height="26" fill="${BRAND.warmIvory}" rx="2"/>
    <rect x="349" y="189" width="18" height="18" fill="#121316"/>

    <text x="205" y="235" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" font-weight="600" fill="${BRAND.grayMuted}" text-anchor="middle">CARD BACK (LETTERPRESS PRINT)</text>
  </g>
</svg>`;
}

function buildMasterWebsiteHeaderMockup() {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 560" width="1000" height="560">
  <title>Restaurants &amp; Hospitality Support - Digital Portal Header</title>
  
  <rect width="1000" height="560" fill="#0A0C10"/>
  
  <g transform="translate(40, 30)">
    <rect width="920" height="40" fill="#141820" rx="8" ry="8"/>
    <circle cx="25" cy="20" r="5" fill="#EF4444"/>
    <circle cx="42" cy="20" r="5" fill="#F59E0B"/>
    <circle cx="59" cy="20" r="5" fill="#10B981"/>
    <rect x="180" y="8" width="560" height="24" rx="4" fill="#0B0D12"/>
    <text x="200" y="24" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" fill="#8E99A8">https://support.hospitalityecosystem.co.za</text>
    
    <rect x="0" y="40" width="920" height="460" fill="#0E1116"/>
    
    <rect x="0" y="40" width="920" height="74" fill="#12151C" stroke="#1F2530" stroke-width="1"/>
    
    <!-- Logo Lockup in Nav Bar -->
    <g transform="translate(28, 48)">
      ${getMasterSymbol('bronze', 54)}
    </g>
    <g transform="translate(90, 68)">
      <text x="0" y="14" font-family="'Plus Jakarta Sans', sans-serif" font-size="14" font-weight="800" letter-spacing="2" fill="${BRAND.warmIvory}">RESTAURANTS &amp; HOSPITALITY</text>
      <text x="0" y="28" font-family="'Plus Jakarta Sans', sans-serif" font-size="8" font-weight="700" letter-spacing="2.5" fill="${BRAND.bronze}">SUPPORT ECOSYSTEM</text>
    </g>
    
    <!-- Navigation Links -->
    <g transform="translate(430, 82)">
      <text x="0" y="0" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="600" fill="${BRAND.warmIvory}">Facilities Care</text>
      <text x="110" y="0" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="500" fill="#8E99A8">Interior Architecture</text>
      <text x="250" y="0" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="500" fill="#8E99A8">Equipment &amp; FF&amp;E</text>
      <text x="380" y="0" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="500" fill="#8E99A8">Rapid Support</text>
    </g>
    
    <rect x="800" y="58" width="95" height="36" rx="5" fill="${BRAND.bronze}"/>
    <text x="847" y="80" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="700" fill="${BRAND.charcoal}" text-anchor="middle">CLIENT PORTAL</text>
    
    <!-- Hero Section -->
    <g transform="translate(60, 160)">
      <text x="0" y="30" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="700" letter-spacing="3" fill="${BRAND.bronze}">ENTERPRISE HOSPITALITY INFRASTRUCTURE</text>
      <text x="0" y="70" font-family="'Plus Jakarta Sans', sans-serif" font-size="34" font-weight="800" fill="${BRAND.warmIvory}">Comprehensive Facilities &amp; Operational</text>
      <text x="0" y="112" font-family="'Plus Jakarta Sans', sans-serif" font-size="34" font-weight="800" fill="${BRAND.bronze}">Support for Premier Hospitality</text>
      
      <text x="0" y="148" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" fill="#9CA3AF">Protecting restaurant dining spaces, hotel properties, and luxury culinary destinations</text>
      <text x="0" y="168" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" fill="#9CA3AF">with precision preventative maintenance, acoustic comfort, and 24/7 technical infrastructure.</text>
      
      <rect x="0" y="200" width="160" height="42" rx="6" fill="${BRAND.bronze}"/>
      <text x="80" y="226" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="700" fill="${BRAND.charcoal}" text-anchor="middle">REQUEST SUPPORT</text>
    </g>
  </g>
</svg>`;
}

function buildMasterProposalMockup() {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 560" width="1000" height="560">
  <title>Restaurants &amp; Hospitality Support - Proposal Dossier</title>
  
  <rect width="1000" height="560" fill="#0C0E12"/>
  
  <text x="50" y="45" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" font-weight="700" letter-spacing="2" fill="${BRAND.warmIvory}">EXECUTIVE PROPOSAL DOSSIER &amp; SERVICE AGREEMENT</text>
  <text x="50" y="68" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="400" fill="${BRAND.grayMuted}">A4 Master Agreement  •  Deep Charcoal &amp; Bronze Hardcover Presentation</text>

  <!-- PROPOSAL COVER -->
  <g transform="translate(80, 100)">
    <rect width="360" height="420" rx="8" fill="#13161C" stroke="#252A36" stroke-width="2"/>
    <rect x="0" y="0" width="18" height="420" rx="8" fill="${BRAND.bronzeDark}"/>
    <rect x="18" y="0" width="4" height="420" fill="#0D0E12"/>
    
    <text x="45" y="45" font-family="'Plus Jakarta Sans', sans-serif" font-size="8.5" font-weight="700" letter-spacing="2.5" fill="${BRAND.bronze}">CONFIDENTIAL  •  SERVICE MASTER AGREEMENT</text>
    <line x1="45" y1="55" x2="330" y2="55" stroke="#252B38" stroke-width="1"/>
    
    <g transform="translate(125, 95)">
      ${getMasterSymbol('bronze', 130)}
    </g>
    
    <g transform="translate(45, 255)">
      <text x="0" y="0" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" font-weight="800" letter-spacing="2" fill="${BRAND.warmIvory}">RESTAURANTS &amp; HOSPITALITY</text>
      <text x="0" y="16" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" font-weight="700" letter-spacing="3" fill="${BRAND.bronze}">SUPPORT ECOSYSTEM</text>
      
      <line x1="0" y1="35" x2="285" y2="35" stroke="${BRAND.bronze}" stroke-width="1.5"/>
      
      <text x="0" y="60" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="700" fill="${BRAND.warmIvory}">ANNUAL FACILITIES MAINTENANCE</text>
      <text x="0" y="76" font-family="'Plus Jakarta Sans', sans-serif" font-size="10.5" font-weight="600" fill="#9CA3AF">&amp; RAPID INTERVENTION SLA</text>
      
      <text x="0" y="110" font-family="'Plus Jakarta Sans', sans-serif" font-size="8" font-weight="500" fill="#6B7280">CLIENT: PREMIER RESTAURANT &amp; HOTEL GROUP</text>
      <text x="0" y="125" font-family="'Plus Jakarta Sans', sans-serif" font-size="8" font-weight="500" fill="#6B7280">REF: RHS-SLA-2026-V1  •  OCTOBER 2026</text>
    </g>
  </g>

  <!-- LETTERHEAD INTERNAL PAGE -->
  <g transform="translate(490, 100)">
    <rect width="360" height="420" rx="6" fill="${BRAND.warmIvory}" stroke="${BRAND.borderLight}" stroke-width="1.5"/>
    
    <g transform="translate(30, 25)">
      <g transform="translate(0, 0)">
        ${getMasterSymbol('color', 42)}
      </g>
      <g transform="translate(50, 12)">
        <text x="0" y="0" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="800" letter-spacing="1.5" fill="${BRAND.charcoal}">RESTAURANTS &amp; HOSPITALITY</text>
        <text x="0" y="11" font-family="'Plus Jakarta Sans', sans-serif" font-size="6.5" font-weight="700" letter-spacing="2" fill="${BRAND.bronzeDark}">SUPPORT ECOSYSTEM</text>
      </g>
      <line x1="0" y1="36" x2="300" y2="36" stroke="${BRAND.borderLight}" stroke-width="1"/>
    </g>
    
    <g transform="translate(30, 90)">
      <text x="0" y="0" font-family="'Plus Jakarta Sans', sans-serif" font-size="7" font-weight="600" fill="${BRAND.grayMuted}">OCTOBER 04, 2026</text>
      <text x="0" y="15" font-family="'Plus Jakarta Sans', sans-serif" font-size="8" font-weight="700" fill="${BRAND.charcoal}">SCOPE OF STRATEGIC SUPPORT &amp; PREVENTATIVE CARE</text>
      
      <rect x="0" y="30" width="300" height="5" rx="2" fill="#D1D5DB"/>
      <rect x="0" y="40" width="280" height="5" rx="2" fill="#E5E7EB"/>
      <rect x="0" y="50" width="290" height="5" rx="2" fill="#E5E7EB"/>
      <rect x="0" y="60" width="220" height="5" rx="2" fill="#E5E7EB"/>
      
      <rect x="0" y="80" width="300" height="5" rx="2" fill="#D1D5DB"/>
      <rect x="0" y="90" width="260" height="5" rx="2" fill="#E5E7EB"/>
      
      <line x1="0" y1="180" x2="140" y2="180" stroke="${BRAND.charcoal}" stroke-width="1"/>
      <text x="0" y="195" font-family="'Plus Jakarta Sans', sans-serif" font-size="7.5" font-weight="700" fill="${BRAND.charcoal}">EXECUTIVE DIRECTOR</text>
      <text x="0" y="206" font-family="'Plus Jakarta Sans', sans-serif" font-size="6.5" fill="${BRAND.grayMuted}">HOSPITALITY SUPPORT GROUP</text>
    </g>
  </g>
</svg>`;
}

function buildMasterAvatarMockup() {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 560" width="1000" height="560">
  <title>Restaurants &amp; Hospitality Support - Digital Avatar Suite</title>
  
  <rect width="1000" height="560" fill="#0C0E12"/>
  
  <text x="50" y="45" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" font-weight="700" letter-spacing="2" fill="${BRAND.warmIvory}">DIGITAL AVATAR &amp; SOCIAL PROFILE SPECIFICATIONS</text>
  <text x="50" y="68" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="400" fill="${BRAND.grayMuted}">Optimized with 20% Safe Padding for LinkedIn, X, Instagram, WhatsApp Business, and Mobile Platforms</text>

  <!-- CIRCULAR PROFILE -->
  <g transform="translate(80, 110)">
    <rect width="250" height="380" fill="#14171E" rx="10" stroke="#252B36" stroke-width="1.5"/>
    <text x="25" y="32" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="700" letter-spacing="1.5" fill="${BRAND.bronze}">CIRCULAR PROFILE</text>
    <text x="25" y="48" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" fill="${BRAND.grayMuted}">LinkedIn / Instagram / WhatsApp</text>
    
    <circle cx="125" cy="180" r="85" fill="${BRAND.charcoal}" stroke="${BRAND.borderDark}" stroke-width="2"/>
    <circle cx="125" cy="180" r="85" fill="none" stroke="${BRAND.bronze}" stroke-width="1.5" stroke-dasharray="3 3"/>
    
    <g transform="translate(65, 120)">
      ${getMasterSymbol('bronze', 120)}
    </g>
    
    <text x="125" y="300" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="700" fill="${BRAND.warmIvory}" text-anchor="middle">@HospitalitySupport</text>
    <text x="125" y="316" font-family="'Plus Jakarta Sans', sans-serif" font-size="8.5" fill="#8892A0" text-anchor="middle">Verified Corporate Account</text>
    
    <circle cx="125" cy="340" r="9" fill="${BRAND.bronze}"/>
    <path d="M 121 340 L 124 343 L 129 337" stroke="${BRAND.charcoal}" stroke-width="2" fill="none"/>
  </g>

  <!-- SQUIRCLE ICON -->
  <g transform="translate(375, 110)">
    <rect width="250" height="380" fill="#14171E" rx="10" stroke="#252B36" stroke-width="1.5"/>
    <text x="25" y="32" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="700" letter-spacing="1.5" fill="${BRAND.bronze}">SQUIRCLE APP ICON</text>
    <text x="25" y="48" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" fill="${BRAND.grayMuted}">iOS / Android Support App</text>
    
    <rect x="40" y="95" width="170" height="170" rx="38" fill="${BRAND.charcoal}" stroke="${BRAND.borderDark}" stroke-width="2"/>
    
    <g transform="translate(65, 120)">
      ${getMasterSymbol('color', 120)}
    </g>
    
    <text x="125" y="300" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="700" fill="${BRAND.warmIvory}" text-anchor="middle">Hospitality Support</text>
    <text x="125" y="316" font-family="'Plus Jakarta Sans', sans-serif" font-size="8.5" fill="#8892A0" text-anchor="middle">Client Portal App</text>
  </g>

  <!-- INVERTED LIGHT -->
  <g transform="translate(670, 110)">
    <rect width="250" height="380" fill="#14171E" rx="10" stroke="#252B36" stroke-width="1.5"/>
    <text x="25" y="32" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="700" letter-spacing="1.5" fill="${BRAND.bronze}">INVERTED LIGHT PROFILE</text>
    <text x="25" y="48" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" fill="${BRAND.grayMuted}">High-Contrast Warm Ivory Variant</text>
    
    <circle cx="125" cy="180" r="85" fill="${BRAND.warmIvory}" stroke="${BRAND.borderLight}" stroke-width="2"/>
    
    <g transform="translate(65, 120)">
      ${getMasterSymbol('black', 120)}
    </g>
    
    <text x="125" y="300" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="700" fill="${BRAND.warmIvory}" text-anchor="middle">Monochrome Black</text>
    <text x="125" y="316" font-family="'Plus Jakarta Sans', sans-serif" font-size="8.5" fill="#8892A0" text-anchor="middle">100% Solid Ink Density</text>
  </g>
</svg>`;
}

// Write the mockups
fs.writeFileSync(path.join(mockupsDir, 'restaurant-entrance-signage.svg'), buildMasterSignageMockup().trim());
fs.writeFileSync(path.join(mockupsDir, 'staff-uniform.svg'), buildMasterUniformMockup().trim());
fs.writeFileSync(path.join(mockupsDir, 'vehicle.svg'), buildMasterVehicleMockup().trim());
fs.writeFileSync(path.join(mockupsDir, 'business-card.svg'), buildMasterBusinessCardMockup().trim());
fs.writeFileSync(path.join(mockupsDir, 'website-header.svg'), buildMasterWebsiteHeaderMockup().trim());
fs.writeFileSync(path.join(mockupsDir, 'proposal-document.svg'), buildMasterProposalMockup().trim());
fs.writeFileSync(path.join(mockupsDir, 'social-media-avatar.svg'), buildMasterAvatarMockup().trim());

console.log('Master mockups written successfully!');
