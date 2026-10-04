/**
 * REAL-WORLD APPLICATION MOCKUP GENERATOR
 * Generates vector mockups for:
 * 1. Restaurant Entrance Signage
 * 2. Staff Uniform (Blazer crest, apron embroidery, lapel pin)
 * 3. Vehicle (Support fleet logistics van & executive transport)
 * 4. Business Card (Front & Back luxury cotton letterpress + bronze foil)
 * 5. Website Header (Corporate ecosystem navigation bar)
 * 6. Proposal Document (Executive dossier cover & corporate letterhead)
 * 7. Social Media Avatar (Square & circular profile containers)
 */

const fs = require('fs');
const path = require('path');

const rootDir = process.cwd();
const mockupsDir = path.join(rootDir, 'mockups');

// Brand tokens
const BRAND = {
  charcoal: '#121316',
  charcoalLight: '#1A1D24',
  charcoalCard: '#1E232B',
  warmIvory: '#F9F8F5',
  warmIvoryDark: '#EFECE6',
  bronze: '#C5A880',
  bronzeLight: '#D8C2A0',
  bronzeDark: '#A88A62',
  deepGreen: '#1B3B2B',
  white: '#FFFFFF',
  borderDark: '#2E3542',
  borderLight: '#E2DED5'
};

// Import symbols from core generator
const {
  getSymbolC1,
  getSymbolC2,
  getSymbolC3
} = require('./generate_core_vectors_helpers.js');

// Map helper
function getSymbol(conceptId, theme = 'color', size = 200) {
  if (conceptId === 'concept-01-ecosystem' || conceptId === 'c1') return getSymbolC1(theme, size);
  if (conceptId === 'concept-02-architecture' || conceptId === 'c2') return getSymbolC2(theme, size);
  return getSymbolC3(theme, size);
}

// -------------------------------------------------------------
// 1. RESTAURANT ENTRANCE SIGNAGE (1000x560)
// -------------------------------------------------------------
function buildSignageMockup(conceptId) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 560" width="1000" height="560">
  <title>Real-World Test: Restaurant & Hospitality Entrance Signage</title>
  
  <!-- Architectural Fluted Dark Granite Wall / Exterior Facade -->
  <rect width="1000" height="560" fill="#0E1014"/>
  
  <!-- Architectural Vertical Stone Joints -->
  <g stroke="#161A22" stroke-width="2">
    <line x1="120" y1="0" x2="120" y2="560"/>
    <line x1="280" y1="0" x2="280" y2="560"/>
    <line x1="440" y1="0" x2="440" y2="560"/>
    <line x1="600" y1="0" x2="600" y2="560"/>
    <line x1="760" y1="0" x2="760" y2="560"/>
    <line x1="920" y1="0" x2="920" y2="560"/>
  </g>
  
  <!-- Architectural Downlight Ambient Glow (Warm 2700K wash) -->
  <radialGradient id="signGlow" cx="50%" cy="30%" r="50%">
    <stop offset="0%" stop-color="#C5A880" stop-opacity="0.18"/>
    <stop offset="60%" stop-color="#C5A880" stop-opacity="0.04"/>
    <stop offset="100%" stop-color="#0E1014" stop-opacity="0"/>
  </radialGradient>
  <rect x="100" y="40" width="800" height="480" fill="url(#signGlow)"/>

  <!-- Architectural Entrance Portal Canopy -->
  <rect x="160" y="60" width="680" height="12" fill="#242A35" rx="3"/>
  <rect x="180" y="72" width="640" height="6" fill="#1A1E26"/>
  
  <!-- Architectural Signboard: Brushed Deep Charcoal Plaque with Bronze Trim -->
  <rect x="200" y="120" width="600" height="280" fill="#13161C" rx="10" stroke="${BRAND.borderDark}" stroke-width="2"/>
  <rect x="210" y="130" width="580" height="260" fill="none" stroke="${BRAND.bronze}" stroke-width="1" stroke-opacity="0.35" rx="6"/>
  
  <!-- Precision Mounting Standoff Screws (4 corners) -->
  <circle cx="225" cy="145" r="4.5" fill="#3D4554"/>
  <circle cx="775" cy="145" r="4.5" fill="#3D4554"/>
  <circle cx="225" cy="375" r="4.5" fill="#3D4554"/>
  <circle cx="775" cy="375" r="4.5" fill="#3D4554"/>
  
  <!-- Dimensional Brushed Metallic Bronze Symbol (Cast Bronze with drop shadow) -->
  <g transform="translate(250, 175)">
    <!-- Cast drop-shadow layer -->
    <g transform="translate(3, 4)" opacity="0.6">
      ${getSymbol(conceptId, 'black', 150)}
    </g>
    <!-- Master Bronze Signage Symbol -->
    ${getSymbol(conceptId, 'bronze', 150)}
  </g>
  
  <!-- Signage Typography in Solid Brushed Champagne Gold -->
  <g transform="translate(435, 215)">
    <text x="0" y="38" font-family="'Plus Jakarta Sans', 'Montserrat', sans-serif" font-size="34" font-weight="800" letter-spacing="5" fill="${BRAND.bronze}">AFRISMME HUB</text>
    <text x="0" y="70" font-family="'Plus Jakarta Sans', sans-serif" font-size="12.5" font-weight="600" letter-spacing="4" fill="${BRAND.warmIvory}">HOSPITALITY SUPPORT ECOSYSTEM</text>
    <line x1="0" y1="88" x2="280" y2="88" stroke="${BRAND.bronze}" stroke-width="1" stroke-opacity="0.4"/>
    <text x="0" y="108" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" font-weight="500" letter-spacing="3" fill="#8E99A8">EXECUTIVE PORTAL &amp; SUITES</text>
  </g>
  
  <!-- Concrete Pavement Base -->
  <rect x="0" y="520" width="1000" height="40" fill="#161920"/>
  <line x1="0" y1="520" x2="1000" y2="520" stroke="#252A36" stroke-width="2"/>
</svg>`;
}

// -------------------------------------------------------------
// 2. STAFF UNIFORM (1000x560 - Blazer Crest, Apron & Pin)
// -------------------------------------------------------------
function buildUniformMockup(conceptId) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 560" width="1000" height="560">
  <title>Real-World Test: Executive Staff Uniform Suite</title>
  
  <rect width="1000" height="560" fill="#0C0E12"/>
  
  <!-- Title Header -->
  <text x="50" y="45" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" font-weight="700" letter-spacing="2" fill="${BRAND.warmIvory}">STAFF APPAREL &amp; UNIFORM EMBROIDERY SPECIFICATION</text>
  <text x="50" y="68" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="400" fill="${BRAND.graySubtle}">Bullion Gold Thread Blazer Crest  •  Heavy Canvas Apron Badge  •  Brushed Brass Executive Lapel Pin</text>

  <!-- PANEL 1: EXECUTIVE BLAZER CHEST EMBROIDERY -->
  <g transform="translate(50, 100)">
    <!-- Charcoal Wool Suiting Texture Base -->
    <rect width="270" height="400" fill="#181B22" rx="10" stroke="#282E3B" stroke-width="1.5"/>
    <text x="25" y="32" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="700" letter-spacing="1.5" fill="${BRAND.bronze}">EXECUTIVE BLAZER</text>
    <text x="25" y="48" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" fill="${BRAND.graySubtle}">Bullion Thread Pocket Crest</text>
    
    <!-- Breast Pocket Outline -->
    <path d="M 55 120 L 215 120 L 215 260 Q 215 310 135 320 Q 55 310 55 260 Z" fill="#14161C" stroke="#2B3240" stroke-width="2"/>
    <path d="M 62 126 L 208 126 L 208 255 Q 208 300 135 310 Q 62 300 62 255 Z" fill="none" stroke="#222834" stroke-dasharray="3 3" stroke-width="1.5"/>
    
    <!-- Embroidered Gold/Bronze Crest -->
    <g transform="translate(85, 150)">
      ${getSymbol(conceptId, 'bronze', 100)}
    </g>
    <text x="135" y="275" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" font-weight="700" letter-spacing="2" fill="${BRAND.bronze}" text-anchor="middle">AFRISMME HUB</text>
  </g>

  <!-- PANEL 2: SERVICE / OPERATIONS APRON BADGE -->
  <g transform="translate(365, 100)">
    <!-- Heavy Duty Deep Forest Green & Charcoal Canvas -->
    <rect width="270" height="400" fill="#15201A" rx="10" stroke="#253A2E" stroke-width="1.5"/>
    <text x="25" y="32" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="700" letter-spacing="1.5" fill="${BRAND.bronze}">OPERATIONS APRON</text>
    <text x="25" y="48" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" fill="${BRAND.graySubtle}">14oz Waxed Canvas Leather Patch</text>
    
    <!-- Genuine Leather Embossed Patch -->
    <rect x="45" y="130" width="180" height="180" rx="8" fill="#1F1A15" stroke="#3D3227" stroke-width="2"/>
    <rect x="52" y="137" width="166" height="166" rx="6" fill="none" stroke="#5E4E3D" stroke-dasharray="4 3" stroke-width="1.5"/>
    
    <!-- Debossed Monogram / Mark -->
    <g transform="translate(85, 160)">
      ${getSymbol(conceptId, 'bronze', 100)}
    </g>
    <text x="135" y="282" font-family="'Plus Jakarta Sans', sans-serif" font-size="8" font-weight="700" letter-spacing="2" fill="${BRAND.bronzeLight}" text-anchor="middle">HOSPITALITY SUPPORT</text>
  </g>

  <!-- PANEL 3: BRUSHED BRASS EXECUTIVE LAPEL PIN -->
  <g transform="translate(680, 100)">
    <rect width="270" height="400" fill="#16181F" rx="10" stroke="#262A36" stroke-width="1.5"/>
    <text x="25" y="32" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="700" letter-spacing="1.5" fill="${BRAND.bronze}">EXECUTIVE LAPEL PIN</text>
    <text x="25" y="48" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" fill="${BRAND.graySubtle}">Cast Brushed Brass (22mm)</text>
    
    <!-- Velvet Jewelry Presentation Box -->
    <rect x="45" y="110" width="180" height="220" rx="12" fill="#0A0B0E" stroke="#20242E" stroke-width="2"/>
    
    <!-- Cast Brass Pin Badge -->
    <circle cx="135" cy="205" r="54" fill="#201C16" stroke="${BRAND.bronze}" stroke-width="2"/>
    <circle cx="135" cy="205" r="48" fill="#151310" stroke="${BRAND.bronzeDark}" stroke-width="1"/>
    
    <g transform="translate(100, 170)">
      ${getSymbol(conceptId, 'bronze', 70)}
    </g>
    
    <text x="135" y="285" font-family="'Plus Jakarta Sans', sans-serif" font-size="7.5" font-weight="600" letter-spacing="1.5" fill="${BRAND.bronze}" text-anchor="middle">LEADERSHIP SEAL</text>
  </g>
</svg>`;
}

// -------------------------------------------------------------
// 3. FLEET SUPPORT VEHICLE (1000x560)
// -------------------------------------------------------------
function buildVehicleMockup(conceptId) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 560" width="1000" height="560">
  <title>Real-World Test: Hospitality Support Fleet Vehicle Livery</title>
  
  <!-- Architectural Garage / Clean Logistics Bay Background -->
  <rect width="1000" height="560" fill="#0F1116"/>
  
  <!-- Title Header -->
  <text x="50" y="45" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" font-weight="700" letter-spacing="2" fill="${BRAND.warmIvory}">HOSPITALITY SUPPORT FLEET VEHICLE LIVERY</text>
  <text x="50" y="68" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="400" fill="${BRAND.graySubtle}">High-Roof Commercial Support Van  •  Matte Charcoal Finish with Metallic Bronze Vector Graphics</text>

  <!-- Road / Floor Plane -->
  <rect x="0" y="480" width="1000" height="80" fill="#0A0C0E"/>
  <line x1="0" y1="480" x2="1000" y2="480" stroke="#1D222A" stroke-width="2"/>

  <!-- VEHICLE PROFILE (High-Roof Modern Support Van) -->
  <g id="van-body" transform="translate(100, 130)">
    <!-- Shadow under chassis -->
    <ellipse cx="400" cy="350" rx="380" ry="14" fill="#000000" opacity="0.75"/>
    
    <!-- Van Body Shell in Matte Deep Charcoal -->
    <path d="M 60 320 L 730 320 Q 745 320 745 305 L 745 130 Q 745 90 700 90 L 260 90 Q 220 90 180 150 L 90 230 Q 60 260 60 320 Z" fill="#171A21" stroke="#2B3240" stroke-width="2"/>
    
    <!-- Windshield & Front Cab Windows -->
    <path d="M 185 150 L 255 105 L 255 220 L 115 220 Z" fill="#0B0D12" stroke="#28303E" stroke-width="1.5"/>
    <rect x="270" y="105" width="110" height="115" rx="3" fill="#0B0D12" stroke="#28303E" stroke-width="1.5"/>
    
    <!-- Front Bumper & Headlight Unit -->
    <path d="M 60 290 L 80 290 L 80 260 L 60 265 Z" fill="#E5E7EB" opacity="0.9"/>
    <path d="M 60 295 L 60 330 L 100 330 L 100 315 Z" fill="#101216"/>
    
    <!-- Side Door Seam Lines -->
    <line x1="395" y1="90" x2="395" y2="320" stroke="#101318" stroke-width="2"/>
    <line x1="580" y1="90" x2="580" y2="320" stroke="#101318" stroke-width="2"/>
    
    <!-- Wheels & Tires -->
    <!-- Front Wheel -->
    <g transform="translate(170, 320)">
      <circle cx="0" cy="0" r="48" fill="#0D0E12" stroke="#222732" stroke-width="4"/>
      <circle cx="0" cy="0" r="32" fill="#1C212A"/>
      <circle cx="0" cy="0" r="14" fill="#3D4554"/>
      <!-- Alloy Spokes -->
      <line x1="-28" y1="0" x2="28" y2="0" stroke="#3D4554" stroke-width="3"/>
      <line x1="0" y1="-28" x2="0" y2="28" stroke="#3D4554" stroke-width="3"/>
    </g>
    <!-- Rear Wheel -->
    <g transform="translate(620, 320)">
      <circle cx="0" cy="0" r="48" fill="#0D0E12" stroke="#222732" stroke-width="4"/>
      <circle cx="0" cy="0" r="32" fill="#1C212A"/>
      <circle cx="0" cy="0" r="14" fill="#3D4554"/>
      <!-- Alloy Spokes -->
      <line x1="-28" y1="0" x2="28" y2="0" stroke="#3D4554" stroke-width="3"/>
      <line x1="0" y1="-28" x2="0" y2="28" stroke="#3D4554" stroke-width="3"/>
    </g>

    <!-- VEHICLE LIVERY GRAPHICS (VECTOR EMBEDDED) -->
    <!-- Accent Bronze Architectural Pinstripe spanning van side -->
    <line x1="120" y1="230" x2="745" y2="230" stroke="${BRAND.bronze}" stroke-width="2.5"/>
    <line x1="260" y1="235" x2="745" y2="235" stroke="${BRAND.bronzeDark}" stroke-width="1"/>

    <!-- Primary Side Door Emblem (Scalable clean vector) -->
    <g transform="translate(415, 115)">
      ${getSymbol(conceptId, 'bronze', 95)}
    </g>
    
    <!-- Livery Typography -->
    <g transform="translate(525, 135)">
      <text x="0" y="24" font-family="'Plus Jakarta Sans', 'Montserrat', sans-serif" font-size="22" font-weight="800" letter-spacing="3.5" fill="${BRAND.warmIvory}">AFRISMME HUB</text>
      <text x="0" y="44" font-family="'Plus Jakarta Sans', sans-serif" font-size="8.5" font-weight="600" letter-spacing="2.5" fill="${BRAND.bronze}">HOSPITALITY SUPPORT ECOSYSTEM</text>
      <text x="0" y="62" font-family="'Plus Jakarta Sans', sans-serif" font-size="7.5" font-weight="500" letter-spacing="1.5" fill="#8E99A8">24/7 RAPID RESPONSE &amp; FACILITIES INTEGRATION</text>
    </g>

    <!-- Front Door Crest & Unit ID -->
    <g transform="translate(290, 160)">
      ${getSymbol(conceptId, 'white', 34)}
      <text x="42" y="16" font-family="'Plus Jakarta Sans', sans-serif" font-size="7.5" font-weight="700" fill="${BRAND.warmIvory}">UNIT 08</text>
      <text x="42" y="26" font-family="'Plus Jakarta Sans', sans-serif" font-size="6.5" fill="#8892A0">SUPPORT</text>
    </g>
  </g>
</svg>`;
}

// -------------------------------------------------------------
// 4. BUSINESS CARD (1000x560 - Luxury Front & Back)
// -------------------------------------------------------------
function buildBusinessCardMockup(conceptId) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 560" width="1000" height="560">
  <title>Real-World Test: Executive Luxury Business Stationery</title>
  
  <rect width="1000" height="560" fill="#0C0E12"/>
  
  <text x="50" y="45" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" font-weight="700" letter-spacing="2" fill="${BRAND.warmIvory}">EXECUTIVE BUSINESS STATIONERY (600GSM COTTON STOCK)</text>
  <text x="50" y="68" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="400" fill="${BRAND.graySubtle}">Muted Bronze Foil Stamping  •  Blind Debossed Charcoal Core  •  Warm Ivory Matte Heavy Card</text>

  <!-- CARD 1: FRONT (Minimalist Foil Crest & Wordmark) -->
  <g transform="translate(60, 110)">
    <!-- Card Drop Shadow -->
    <rect x="8" y="12" width="410" height="250" rx="8" fill="#000000" opacity="0.6"/>
    <!-- Deep Charcoal Card Base -->
    <rect width="410" height="250" rx="8" fill="${BRAND.charcoal}" stroke="#2A2F3A" stroke-width="1.5"/>
    <rect x="12" y="12" width="386" height="226" rx="5" fill="none" stroke="${BRAND.borderDark}" stroke-width="0.75"/>
    
    <!-- Centered Bronze Foil Symbol & Wordmark -->
    <g transform="translate(155, 45)">
      ${getSymbol(conceptId, 'bronze', 100)}
    </g>
    
    <text x="205" y="180" font-family="'Plus Jakarta Sans', 'Montserrat', sans-serif" font-size="18" font-weight="800" letter-spacing="4" fill="${BRAND.bronze}" text-anchor="middle">AFRISMME HUB</text>
    <text x="205" y="202" font-family="'Plus Jakarta Sans', sans-serif" font-size="7.5" font-weight="600" letter-spacing="3" fill="${BRAND.warmIvory}" text-anchor="middle">HOSPITALITY SUPPORT ECOSYSTEM</text>
    
    <text x="205" y="235" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" font-weight="600" fill="${BRAND.graySubtle}" text-anchor="middle">CARD FRONT (METALLIC BRONZE FOIL)</text>
  </g>

  <!-- CARD 2: BACK (Warm Ivory with Executive Typography) -->
  <g transform="translate(530, 110)">
    <!-- Card Drop Shadow -->
    <rect x="8" y="12" width="410" height="250" rx="8" fill="#000000" opacity="0.6"/>
    <!-- Warm Ivory Card Base -->
    <rect width="410" height="250" rx="8" fill="${BRAND.warmIvory}" stroke="${BRAND.borderLight}" stroke-width="1.5"/>
    
    <!-- Top-Right Micro Symbol in Bronze -->
    <g transform="translate(340, 24)">
      ${getSymbol(conceptId, 'bronze', 42)}
    </g>
    
    <!-- Executive Contact Details -->
    <g transform="translate(36, 45)">
      <text x="0" y="20" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" font-weight="800" letter-spacing="1" fill="${BRAND.charcoal}">DR. LINDIWE NDLOVU</text>
      <text x="0" y="38" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" font-weight="600" letter-spacing="2" fill="${BRAND.bronzeDark}">MANAGING DIRECTOR  •  ECOSYSTEM PARTNERSHIPS</text>
      
      <line x1="0" y1="58" x2="270" y2="58" stroke="${BRAND.borderLight}" stroke-width="1"/>
      
      <text x="0" y="82" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" font-weight="500" fill="${BRAND.charcoal}">T:  +27 (0) 11 894 2000</text>
      <text x="0" y="100" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" font-weight="500" fill="${BRAND.charcoal}">M:  +27 (0) 82 555 0192</text>
      <text x="0" y="118" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" font-weight="500" fill="${BRAND.charcoal}">E:  executive@afrismmehub.com</text>
      <text x="0" y="136" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" font-weight="500" fill="${BRAND.charcoal}">W:  www.afrismmehub.com</text>
      <text x="0" y="156" font-family="'Plus Jakarta Sans', sans-serif" font-size="8" font-weight="600" letter-spacing="1" fill="${BRAND.graySubtle}">SANDTON GATE TOWER  •  JOHANNESBURG</text>
    </g>
    
    <!-- Micro QR / Security Seal Block -->
    <rect x="340" y="180" width="36" height="36" fill="#121316" rx="3"/>
    <rect x="345" y="185" width="26" height="26" fill="${BRAND.warmIvory}" rx="2"/>
    <rect x="349" y="189" width="18" height="18" fill="#121316"/>

    <text x="205" y="235" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" font-weight="600" fill="${BRAND.graySubtle}" text-anchor="middle">CARD BACK (LETTERPRESS PRINT)</text>
  </g>
</svg>`;
}

// -------------------------------------------------------------
// 5. WEBSITE HEADER (1000x560 - SaaS / Ecosystem Navigation)
// -------------------------------------------------------------
function buildWebsiteHeaderMockup(conceptId) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 560" width="1000" height="560">
  <title>Real-World Test: Digital Ecosystem Website Header &amp; Portal</title>
  
  <rect width="1000" height="560" fill="#0A0C10"/>
  
  <!-- Browser Frame Wrapper -->
  <g transform="translate(40, 30)">
    <!-- Browser Top Bar -->
    <rect width="920" height="40" fill="#141820" rx="8" ry="8"/>
    <!-- Window controls -->
    <circle cx="25" cy="20" r="5" fill="#EF4444"/>
    <circle cx="42" cy="20" r="5" fill="#F59E0B"/>
    <circle cx="59" cy="20" r="5" fill="#10B981"/>
    <!-- URL Bar -->
    <rect x="180" y="8" width="560" height="24" rx="4" fill="#0B0D12"/>
    <text x="200" y="24" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" fill="#8E99A8">https://hub.afrismme.com/hospitality-ecosystem</text>
    
    <!-- Website Main Viewport -->
    <rect x="0" y="40" width="920" height="460" fill="#0E1116"/>
    
    <!-- CORPORATE STICKY NAVBAR -->
    <rect x="0" y="40" width="920" height="74" fill="#12151C" stroke="#1F2530" stroke-width="1"/>
    
    <!-- Logo Lockup in Nav Bar (x=30, y=52) -->
    <g transform="translate(30, 50)">
      ${getSymbol(conceptId, 'bronze', 50)}
    </g>
    <g transform="translate(90, 68)">
      <text x="0" y="15" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" font-weight="800" letter-spacing="2.5" fill="${BRAND.warmIvory}">AFRISMME HUB</text>
      <text x="0" y="28" font-family="'Plus Jakarta Sans', sans-serif" font-size="7.5" font-weight="600" letter-spacing="2" fill="${BRAND.bronze}">HOSPITALITY ECOSYSTEM</text>
    </g>
    
    <!-- Navigation Links -->
    <g transform="translate(380, 82)">
      <text x="0" y="0" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="600" fill="${BRAND.warmIvory}">Ecosystem Overview</text>
      <text x="140" y="0" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="500" fill="#8E99A8">Facilities &amp; FF&amp;E</text>
      <text x="260" y="0" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="500" fill="#8E99A8">Procurement Hub</text>
      <text x="390" y="0" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="500" fill="#8E99A8">Technology</text>
    </g>
    
    <!-- Executive CTA Button -->
    <rect x="800" y="58" width="95" height="36" rx="5" fill="${BRAND.bronze}"/>
    <text x="847" y="80" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="700" fill="${BRAND.charcoal}" text-anchor="middle">CLIENT PORTAL</text>
    
    <!-- HERO SECTION BELOW HEADER -->
    <g transform="translate(60, 160)">
      <text x="0" y="30" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="700" letter-spacing="3" fill="${BRAND.bronze}">INTEGRATED ENTERPRISE INFRASTRUCTURE</text>
      <text x="0" y="70" font-family="'Plus Jakarta Sans', 'Montserrat', sans-serif" font-size="34" font-weight="800" fill="${BRAND.warmIvory}">Architecting the Future of</text>
      <text x="0" y="112" font-family="'Plus Jakarta Sans', 'Montserrat', sans-serif" font-size="34" font-weight="800" fill="${BRAND.bronze}">African Hospitality Operations</text>
      
      <text x="0" y="148" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" fill="#9CA3AF">Strategic facilities management, acoustic interior architecture, AI operational workflows,</text>
      <text x="0" y="168" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" fill="#9CA3AF">and enterprise supply chains for leading hotels, resorts, and premium hospitality groups.</text>
      
      <!-- Action Buttons -->
      <rect x="0" y="200" width="160" height="42" rx="6" fill="${BRAND.bronze}"/>
      <text x="80" y="226" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="700" fill="${BRAND.charcoal}" text-anchor="middle">EXPLORE SOLUTIONS</text>
      
      <rect x="175" y="200" width="160" height="42" rx="6" fill="none" stroke="${BRAND.borderDark}" stroke-width="1.5"/>
      <text x="255" y="226" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="600" fill="${BRAND.warmIvory}" text-anchor="middle">PORTAL DEMO</text>
    </g>
    
    <!-- Subtle Watermark Symbol in Hero Graphic Area -->
    <g transform="translate(680, 150)" opacity="0.12">
      ${getSymbol(conceptId, 'bronze', 200)}
    </g>
  </g>
</svg>`;
}

// -------------------------------------------------------------
// 6. PROPOSAL DOCUMENT (1000x560 - Dossier Cover & Header)
// -------------------------------------------------------------
function buildProposalDocumentMockup(conceptId) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 560" width="1000" height="560">
  <title>Real-World Test: Executive Proposal Document &amp; Dossier</title>
  
  <rect width="1000" height="560" fill="#0C0E12"/>
  
  <text x="50" y="45" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" font-weight="700" letter-spacing="2" fill="${BRAND.warmIvory}">EXECUTIVE PROPOSAL DOSSIER &amp; CONTRACT COVER</text>
  <text x="50" y="68" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="400" fill="${BRAND.graySubtle}">A4 Executive Master Proposal  •  Deep Charcoal &amp; Bronze Hardcover Presentation</text>

  <!-- PROPOSAL COVER (A4 Presentation Folder) -->
  <g transform="translate(80, 100)">
    <!-- Folder Base -->
    <rect width="360" height="420" rx="8" fill="#13161C" stroke="#252A36" stroke-width="2"/>
    <!-- Left Spine Accent -->
    <rect x="0" y="0" width="18" height="420" rx="8" fill="${BRAND.bronzeDark}"/>
    <rect x="18" y="0" width="4" height="420" fill="#0D0E12"/>
    
    <!-- Top Confidentiality Header -->
    <text x="45" y="45" font-family="'Plus Jakarta Sans', sans-serif" font-size="8.5" font-weight="700" letter-spacing="2.5" fill="${BRAND.bronze}">CONFIDENTIAL  •  EXECUTIVE BRIEF</text>
    <line x1="45" y1="55" x2="330" y2="55" stroke="#252B38" stroke-width="1"/>
    
    <!-- Primary Center Emblem in Foil Bronze -->
    <g transform="translate(130, 95)">
      ${getSymbol(conceptId, 'bronze', 120)}
    </g>
    
    <!-- Wordmark & Document Title -->
    <g transform="translate(45, 255)">
      <text x="0" y="0" font-family="'Plus Jakarta Sans', 'Montserrat', sans-serif" font-size="20" font-weight="800" letter-spacing="3" fill="${BRAND.warmIvory}">AFRISMME HUB</text>
      <text x="0" y="16" font-family="'Plus Jakarta Sans', sans-serif" font-size="8" font-weight="600" letter-spacing="2" fill="${BRAND.bronze}">HOSPITALITY SUPPORT ECOSYSTEM</text>
      
      <line x1="0" y1="35" x2="285" y2="35" stroke="${BRAND.bronze}" stroke-width="1.5"/>
      
      <text x="0" y="60" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="700" fill="${BRAND.warmIvory}">STRATEGIC FACILITIES INTEGRATION</text>
      <text x="0" y="76" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="600" fill="#9CA3AF">&amp; GUEST ECOSYSTEM MASTER PLAN</text>
      
      <text x="0" y="110" font-family="'Plus Jakarta Sans', sans-serif" font-size="8" font-weight="500" fill="#6B7280">PREPARED FOR: RADISSON BLU &amp; MARRIOTT RESORT GROUP</text>
      <text x="0" y="125" font-family="'Plus Jakarta Sans', sans-serif" font-size="8" font-weight="500" fill="#6B7280">DATE: OCTOBER 2026  •  DOC REF: AH-HSP-2026-V4</text>
    </g>
  </g>

  <!-- LETTERHEAD INTERNAL PAGE SAMPLE -->
  <g transform="translate(490, 100)">
    <rect width="360" height="420" rx="6" fill="${BRAND.warmIvory}" stroke="${BRAND.borderLight}" stroke-width="1.5"/>
    
    <!-- Letterhead Header -->
    <g transform="translate(30, 25)">
      <!-- Micro symbol -->
      <g transform="translate(0, 0)">
        ${getSymbol(conceptId, 'color', 40)}
      </g>
      <g transform="translate(48, 14)">
        <text x="0" y="0" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="800" letter-spacing="2" fill="${BRAND.charcoal}">AFRISMME HUB</text>
        <text x="0" y="11" font-family="'Plus Jakarta Sans', sans-serif" font-size="6" font-weight="600" letter-spacing="1.5" fill="${BRAND.bronzeDark}">HOSPITALITY SUPPORT ECOSYSTEM</text>
      </g>
      
      <line x1="0" y1="36" x2="300" y2="36" stroke="${BRAND.borderLight}" stroke-width="1"/>
    </g>
    
    <!-- Document Body Placeholders -->
    <g transform="translate(30, 90)">
      <text x="0" y="0" font-family="'Plus Jakarta Sans', sans-serif" font-size="7" font-weight="600" fill="${BRAND.graySubtle}">OCTOBER 04, 2026</text>
      <text x="0" y="15" font-family="'Plus Jakarta Sans', sans-serif" font-size="8" font-weight="700" fill="${BRAND.charcoal}">EXECUTIVE SUMMARY: STRATEGIC SUPPORT ALLIANCE</text>
      
      <!-- Simulated clean paragraphs -->
      <rect x="0" y="30" width="300" height="5" rx="2" fill="#D1D5DB"/>
      <rect x="0" y="40" width="280" height="5" rx="2" fill="#E5E7EB"/>
      <rect x="0" y="50" width="290" height="5" rx="2" fill="#E5E7EB"/>
      <rect x="0" y="60" width="220" height="5" rx="2" fill="#E5E7EB"/>
      
      <rect x="0" y="80" width="300" height="5" rx="2" fill="#D1D5DB"/>
      <rect x="0" y="90" width="260" height="5" rx="2" fill="#E5E7EB"/>
      <rect x="0" y="100" width="275" height="5" rx="2" fill="#E5E7EB"/>
      
      <rect x="0" y="120" width="300" height="5" rx="2" fill="#D1D5DB"/>
      <rect x="0" y="130" width="250" height="5" rx="2" fill="#E5E7EB"/>
      
      <!-- Signature Block -->
      <line x1="0" y1="180" x2="140" y2="180" stroke="${BRAND.charcoal}" stroke-width="1"/>
      <text x="0" y="195" font-family="'Plus Jakarta Sans', sans-serif" font-size="7.5" font-weight="700" fill="${BRAND.charcoal}">LINDIWE NDLOVU</text>
      <text x="0" y="206" font-family="'Plus Jakarta Sans', sans-serif" font-size="6.5" fill="${BRAND.graySubtle}">GROUP MANAGING DIRECTOR</text>
    </g>
  </g>
</svg>`;
}

// -------------------------------------------------------------
// 7. SOCIAL MEDIA AVATAR (1000x560 - Square & Circular Suite)
// -------------------------------------------------------------
function buildSocialAvatarMockup(conceptId) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 560" width="1000" height="560">
  <title>Real-World Test: Social Media Avatar &amp; Digital Icon Suite</title>
  
  <rect width="1000" height="560" fill="#0C0E12"/>
  
  <text x="50" y="45" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" font-weight="700" letter-spacing="2" fill="${BRAND.warmIvory}">DIGITAL AVATAR &amp; SOCIAL PROFILE SPECIFICATIONS</text>
  <text x="50" y="68" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="400" fill="${BRAND.graySubtle}">Optimized with 20% Safe Padding for LinkedIn, X, Instagram, WhatsApp Business, and iOS/Android</text>

  <!-- AVATAR 1: Circular Avatar (e.g. LinkedIn / Instagram 400x400) -->
  <g transform="translate(80, 110)">
    <rect width="250" height="380" fill="#14171E" rx="10" stroke="#252B36" stroke-width="1.5"/>
    <text x="25" y="32" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="700" letter-spacing="1.5" fill="${BRAND.bronze}">CIRCULAR PROFILE</text>
    <text x="25" y="48" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" fill="${BRAND.graySubtle}">LinkedIn / Instagram / WhatsApp</text>
    
    <!-- Circular container -->
    <circle cx="125" cy="180" r="85" fill="${BRAND.charcoal}" stroke="${BRAND.borderDark}" stroke-width="2"/>
    <circle cx="125" cy="180" r="85" fill="none" stroke="${BRAND.bronze}" stroke-width="1.5" stroke-dasharray="3 3"/>
    
    <!-- Scaled Symbol with exact 25% safe padding -->
    <g transform="translate(65, 120)">
      ${getSymbol(conceptId, 'bronze', 120)}
    </g>
    
    <text x="125" y="300" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="700" fill="${BRAND.warmIvory}" text-anchor="middle">@AfriSMMEHub</text>
    <text x="125" y="316" font-family="'Plus Jakarta Sans', sans-serif" font-size="8.5" fill="#8892A0" text-anchor="middle">Corporate Verified Badge</text>
    
    <!-- Verified Badge Icon -->
    <circle cx="125" cy="340" r="9" fill="${BRAND.bronze}"/>
    <path d="M 121 340 L 124 343 L 129 337" stroke="${BRAND.charcoal}" stroke-width="2" fill="none"/>
  </g>

  <!-- AVATAR 2: Rounded Squircle Avatar (e.g. Apple App Store / Android Adaptive) -->
  <g transform="translate(375, 110)">
    <rect width="250" height="380" fill="#14171E" rx="10" stroke="#252B36" stroke-width="1.5"/>
    <text x="25" y="32" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="700" letter-spacing="1.5" fill="${BRAND.bronze}">SQUIRCLE APP ICON</text>
    <text x="25" y="48" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" fill="${BRAND.graySubtle}">iOS / Android Ecosystem App</text>
    
    <!-- Squircle container -->
    <rect x="40" y="95" width="170" height="170" rx="38" fill="${BRAND.charcoal}" stroke="${BRAND.borderDark}" stroke-width="2"/>
    
    <g transform="translate(65, 120)">
      ${getSymbol(conceptId, 'color', 120)}
    </g>
    
    <text x="125" y="300" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="700" fill="${BRAND.warmIvory}" text-anchor="middle">AfriSMME Hub</text>
    <text x="125" y="316" font-family="'Plus Jakarta Sans', sans-serif" font-size="8.5" fill="#8892A0" text-anchor="middle">Enterprise Portal 2.0</text>
  </g>

  <!-- AVATAR 3: Monochrome Inverted Avatar (Light Background Context) -->
  <g transform="translate(670, 110)">
    <rect width="250" height="380" fill="#14171E" rx="10" stroke="#252B36" stroke-width="1.5"/>
    <text x="25" y="32" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="700" letter-spacing="1.5" fill="${BRAND.bronze}">INVERTED LIGHT PROFILE</text>
    <text x="25" y="48" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" fill="${BRAND.graySubtle}">High-Contrast Warm Ivory Variant</text>
    
    <circle cx="125" cy="180" r="85" fill="${BRAND.warmIvory}" stroke="${BRAND.borderLight}" stroke-width="2"/>
    
    <g transform="translate(65, 120)">
      ${getSymbol(conceptId, 'black', 120)}
    </g>
    
    <text x="125" y="300" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="700" fill="${BRAND.warmIvory}" text-anchor="middle">Black Monochrome</text>
    <text x="125" y="316" font-family="'Plus Jakarta Sans', sans-serif" font-size="8.5" fill="#8892A0" text-anchor="middle">100% Solid Ink Density</text>
  </g>
</svg>`;
}

// Export builders
module.exports = {
  buildSignageMockup,
  buildUniformMockup,
  buildVehicleMockup,
  buildBusinessCardMockup,
  buildWebsiteHeaderMockup,
  buildProposalDocumentMockup,
  buildSocialAvatarMockup
};
