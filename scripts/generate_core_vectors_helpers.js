/**
 * CORE GEOMETRIC DEFINITIONS & BRAND TOKENS
 * AfriSMME Hub - Hospitality Support Ecosystem
 */

const BRAND = {
  charcoal: '#121316',        // Primary: Deep Charcoal / Black
  charcoalElevated: '#1A1D24',
  charcoalCard: '#1E232B',
  warmIvory: '#F9F8F5',       // Secondary: Warm Ivory
  warmIvoryMuted: '#EFECE6',
  warmIvoryDark: '#E4DFD5',
  bronze: '#C5A880',          // Accent: Muted Bronze / Champagne Gold
  bronzeLight: '#D8C2A0',
  bronzeDark: '#A88A62',
  deepGreen: '#1B3B2B',       // Optional Accent: Deep Forest Green
  deepGreenLight: '#26523D',
  white: '#FFFFFF',
  black: '#000000',
  graySubtle: '#8C93A0',
  borderDark: '#2E3540',
  borderLight: '#E2DED5'
};

// ====================================================================
// CONCEPT 01: HOSPITALITY ECOSYSTEM ("The Quad-Nexus")
// ====================================================================
function getSymbolC1(theme = 'color', size = 200) {
  let c1, c2, star;
  if (theme === 'black') {
    c1 = BRAND.charcoal;
    c2 = BRAND.charcoal;
    star = BRAND.charcoal;
  } else if (theme === 'white') {
    c1 = BRAND.white;
    c2 = BRAND.white;
    star = BRAND.white;
  } else if (theme === 'bronze') {
    c1 = BRAND.bronze;
    c2 = BRAND.bronze;
    star = BRAND.bronze;
  } else {
    // Master Full Colour
    c1 = BRAND.bronze;        // Strategic Pillars 1 & 3: Champagne Gold
    c2 = BRAND.charcoal;      // Operational Pillars 2 & 4: Deep Charcoal
    star = BRAND.bronze;      // Central Hospitality North Star: Champagne Gold
  }

  const scale = (size / 200).toFixed(4);

  return `
    <g class="symbol-concept-01" transform="scale(${scale})">
      <!-- Quadrant 01: Top-Right (Operations & Advisory) -->
      <path d="M 106 20 A 78 78 0 0 1 180 94 L 148 94 A 46 46 0 0 0 106 52 Z" fill="${c1}"/>
      
      <!-- Quadrant 02: Bottom-Right (Facilities Management & FF&E) -->
      <path d="M 180 106 A 78 78 0 0 1 106 180 L 106 148 A 46 46 0 0 0 148 106 Z" fill="${c2}"/>
      
      <!-- Quadrant 03: Bottom-Left (Supply Chain & Sourcing) -->
      <path d="M 94 180 A 78 78 0 0 1 20 106 L 52 106 A 46 46 0 0 0 94 148 Z" fill="${c1}"/>
      
      <!-- Quadrant 04: Top-Left (Technology & Guest Systems) -->
      <path d="M 20 94 A 78 78 0 0 1 94 20 L 94 52 A 46 46 0 0 0 52 94 Z" fill="${c2}"/>
      
      <!-- Central Hub Star: 4-Point Curved Diamond Compass Rose -->
      <path d="M 100 80 Q 100 100 120 100 Q 100 100 100 120 Q 100 100 80 100 Q 100 100 100 80 Z" fill="${star}"/>
    </g>
  `;
}

// ====================================================================
// CONCEPT 02: AFRICAN HOSPITALITY ARCHITECTURE ("The Monumental Canopy Portal")
// ====================================================================
function getSymbolC2(theme = 'color', size = 200) {
  let pillars, canopy, arch, beacon, base;
  if (theme === 'black') {
    pillars = BRAND.charcoal;
    canopy = BRAND.charcoal;
    arch = BRAND.charcoal;
    beacon = BRAND.charcoal;
    base = BRAND.charcoal;
  } else if (theme === 'white') {
    pillars = BRAND.white;
    canopy = BRAND.white;
    arch = BRAND.white;
    beacon = BRAND.white;
    base = BRAND.white;
  } else if (theme === 'bronze') {
    pillars = BRAND.bronze;
    canopy = BRAND.bronze;
    arch = BRAND.bronze;
    beacon = BRAND.bronze;
    base = BRAND.bronze;
  } else {
    // Master Full Colour
    pillars = BRAND.charcoal;
    canopy = BRAND.bronze;
    arch = BRAND.deepGreen;
    beacon = BRAND.bronze;
    base = BRAND.charcoal;
  }

  const scale = (size / 200).toFixed(4);

  return `
    <g class="symbol-concept-02" transform="scale(${scale})">
      <!-- Ground Foundation Plinth -->
      <rect x="24" y="172" width="152" height="6" rx="1.5" fill="${base}"/>
      
      <!-- Left Monumental Pillar -->
      <rect x="34" y="52" width="24" height="120" rx="1.5" fill="${pillars}"/>
      <!-- Right Monumental Pillar -->
      <rect x="142" y="52" width="24" height="120" rx="1.5" fill="${pillars}"/>
      
      <!-- Stepped Arch Portal (Sanctuary of Welcome) -->
      <path d="M 66 172 L 66 104 A 34 34 0 0 1 134 104 L 134 172 L 118 172 L 118 110 A 18 18 0 0 0 82 110 L 82 172 Z" fill="${arch}"/>
      
      <!-- Welcoming Portal Horizon Beacon -->
      <circle cx="100" cy="138" r="6" fill="${beacon}"/>
      
      <!-- Cantilever Floating Canopy (The Grand Overhang) -->
      <polygon points="18,52 28,38 172,38 182,52" fill="${canopy}"/>
      
      <!-- Apex Golden Visionary Pediment -->
      <polygon points="100,20 115,34 85,34" fill="${beacon}"/>
    </g>
  `;
}

// ====================================================================
// CONCEPT 03: AH / HUB CORPORATE MONOGRAM ("The Interlocked Apex & Pillars")
// ====================================================================
function getSymbolC3(theme = 'color', size = 200) {
  let apex, pillars, bar, hub, coreBg;
  if (theme === 'black') {
    apex = BRAND.charcoal;
    pillars = BRAND.charcoal;
    bar = BRAND.charcoal;
    hub = BRAND.charcoal;
    coreBg = BRAND.warmIvory;
  } else if (theme === 'white') {
    apex = BRAND.white;
    pillars = BRAND.white;
    bar = BRAND.white;
    hub = BRAND.white;
    coreBg = BRAND.charcoal;
  } else if (theme === 'bronze') {
    apex = BRAND.bronze;
    pillars = BRAND.bronze;
    bar = BRAND.bronze;
    hub = BRAND.bronze;
    coreBg = BRAND.warmIvory;
  } else {
    // Master Full Colour
    apex = BRAND.bronze;
    pillars = BRAND.charcoal;
    bar = BRAND.charcoal;
    hub = BRAND.bronze;
    coreBg = BRAND.warmIvory;
  }

  const scale = (size / 200).toFixed(4);

  return `
    <g class="symbol-concept-03" transform="scale(${scale})">
      <!-- 'A' Monolithic Apex & Diagonal Rafters -->
      <polygon points="30,76 90,24 110,24 170,76 148,76 100,42 52,76" fill="${apex}"/>
      
      <!-- 'H' Left Monolithic Column -->
      <rect x="30" y="76" width="22" height="98" rx="1.5" fill="${pillars}"/>
      <!-- 'H' Right Monolithic Column -->
      <rect x="148" y="76" width="22" height="98" rx="1.5" fill="${pillars}"/>
      
      <!-- 'H' Crossbar (Left Wing) -->
      <rect x="52" y="96" width="30" height="18" fill="${bar}"/>
      <!-- 'H' Crossbar (Right Wing) -->
      <rect x="118" y="96" width="30" height="18" fill="${bar}"/>
      
      <!-- Central Hub Diamond Core -->
      <polygon points="100,84 120,105 100,126 80,105" fill="${hub}"/>
      <!-- Inner Diamond Precision Aperture (Negative Space) -->
      <polygon points="100,94 110,105 100,116 90,105" fill="${coreBg}"/>
    </g>
  `;
}

module.exports = {
  BRAND,
  getSymbolC1,
  getSymbolC2,
  getSymbolC3
};
