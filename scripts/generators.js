const fs = require('fs');
const path = require('path');

// Colors per brief
const PALETTE = {
  charcoal: '#121316',
  charcoalLight: '#1E2228',
  warmIvory: '#F9F8F5',
  warmIvoryDark: '#EFECE6',
  bronze: '#C5A880',
  bronzeLight: '#D4BC96',
  bronzeDark: '#A88B60',
  deepGreen: '#1B3B2B',
  white: '#FFFFFF',
  black: '#000000',
  graySubtle: '#6B7280',
  grayBorder: '#E5E7EB'
};

// ==========================================
// GEOMETRY GENERATORS
// ==========================================

function getConcept1Symbol(variant = 'color', size = 200) {
  // Concept 1: Hospitality Ecosystem (Quad-Nexus)
  let q1Color, q2Color, hubColor;
  if (variant === 'black') {
    q1Color = PALETTE.charcoal;
    q2Color = PALETTE.charcoal;
    hubColor = PALETTE.charcoal;
  } else if (variant === 'white') {
    q1Color = PALETTE.white;
    q2Color = PALETTE.white;
    hubColor = PALETTE.white;
  } else if (variant === 'bronze') {
    q1Color = PALETTE.bronze;
    q2Color = PALETTE.bronze;
    hubColor = PALETTE.bronze;
  } else {
    // Full color
    q1Color = PALETTE.bronze;
    q2Color = PALETTE.charcoal;
    hubColor = PALETTE.bronze;
  }

  return `
    <!-- Concept 01: Hospitality Ecosystem (Quad-Nexus) -->
    <g class="symbol-c1" transform="scale(${size / 200})">
      <!-- Quadrant 0: Top-Right (Ecosystem Pillar 1: Strategic Advisory) -->
      <path d="M 106 20 A 78 78 0 0 1 180 94 L 148 94 A 46 46 0 0 0 106 52 Z" fill="${q1Color}"/>
      <!-- Quadrant 1: Bottom-Right (Ecosystem Pillar 2: Facilities Management) -->
      <path d="M 180 106 A 78 78 0 0 1 106 180 L 106 148 A 46 46 0 0 0 148 106 Z" fill="${q2Color}"/>
      <!-- Quadrant 2: Bottom-Left (Ecosystem Pillar 3: Procurement & Supply Chain) -->
      <path d="M 94 180 A 78 78 0 0 1 20 106 L 52 106 A 46 46 0 0 0 94 148 Z" fill="${q1Color}"/>
      <!-- Quadrant 3: Top-Left (Ecosystem Pillar 4: Technology & Guest Systems) -->
      <path d="M 20 94 A 78 78 0 0 1 94 20 L 94 52 A 46 46 0 0 0 52 94 Z" fill="${q2Color}"/>
      <!-- Central Hub Star: Convergence Node -->
      <polygon points="100,82 118,100 100,118 82,100" fill="${hubColor}"/>
    </g>
  `;
}

function getConcept2Symbol(variant = 'color', size = 200) {
  // Concept 2: African Hospitality Architecture (Monumental Canopy Portal)
  let pillarColor, canopyColor, archColor, beaconColor;
  if (variant === 'black') {
    pillarColor = PALETTE.charcoal;
    canopyColor = PALETTE.charcoal;
    archColor = PALETTE.charcoal;
    beaconColor = PALETTE.charcoal;
  } else if (variant === 'white') {
    pillarColor = PALETTE.white;
    canopyColor = PALETTE.white;
    archColor = PALETTE.white;
    beaconColor = PALETTE.white;
  } else if (variant === 'bronze') {
    pillarColor = PALETTE.bronze;
    canopyColor = PALETTE.bronze;
    archColor = PALETTE.bronze;
    beaconColor = PALETTE.bronze;
  } else {
    // Full color corporate
    pillarColor = PALETTE.charcoal;
    canopyColor = PALETTE.bronze;
    archColor = PALETTE.deepGreen;
    beaconColor = PALETTE.bronze;
  }

  return `
    <!-- Concept 02: African Hospitality Architecture -->
    <g class="symbol-c2" transform="scale(${size / 200})">
      <!-- Ground Foundation Plinth -->
      <rect x="26" y="172" width="148" height="6" rx="2" fill="${pillarColor}"/>
      
      <!-- Left Monumental Pillar -->
      <rect x="36" y="52" width="22" height="120" rx="2" fill="${pillarColor}"/>
      <!-- Right Monumental Pillar -->
      <rect x="142" y="52" width="22" height="120" rx="2" fill="${pillarColor}"/>
      
      <!-- Stepped Arch Portal (Shelter Entrance) -->
      <path d="M 66 172 L 66 102 A 34 34 0 0 1 134 102 L 134 172 L 118 172 L 118 110 A 18 18 0 0 0 82 110 L 82 172 Z" fill="${archColor}"/>
      
      <!-- Cantilever Floating Canopy / Architectural Lintel -->
      <polygon points="20,52 30,38 170,38 180,52" fill="${canopyColor}"/>
      
      <!-- Apex Golden Beacon / Visionary Crest -->
      <polygon points="100,20 114,34 86,34" fill="${beaconColor}"/>
    </g>
  `;
}

function getConcept3Symbol(variant = 'color', size = 200) {
  // Concept 3: AH / Hub Corporate Monogram (Interlocked Apex & Pillars)
  let apexColor, pillarColor, barColor, hubColor;
  if (variant === 'black') {
    apexColor = PALETTE.charcoal;
    pillarColor = PALETTE.charcoal;
    barColor = PALETTE.charcoal;
    hubColor = PALETTE.charcoal;
  } else if (variant === 'white') {
    apexColor = PALETTE.white;
    pillarColor = PALETTE.white;
    barColor = PALETTE.white;
    hubColor = PALETTE.white;
  } else if (variant === 'bronze') {
    apexColor = PALETTE.bronze;
    pillarColor = PALETTE.bronze;
    barColor = PALETTE.bronze;
    hubColor = PALETTE.bronze;
  } else {
    // Full color corporate
    apexColor = PALETTE.bronze;
    pillarColor = PALETTE.charcoal;
    barColor = PALETTE.charcoal;
    hubColor = PALETTE.bronze;
  }

  return `
    <!-- Concept 03: AH / Hub Corporate Monogram -->
    <g class="symbol-c3" transform="scale(${size / 200})">
      <!-- 'A' Apex & Diagonal Rafters -->
      <polygon points="30,76 93,24 107,24 170,76 150,76 100,36 50,76" fill="${apexColor}"/>
      
      <!-- 'H' Left Vertical Column -->
      <rect x="30" y="76" width="20" height="98" rx="2" fill="${pillarColor}"/>
      <!-- 'H' Right Vertical Column -->
      <rect x="150" y="76" width="20" height="98" rx="2" fill="${pillarColor}"/>
      
      <!-- 'H' Crossbar (Left Segment) -->
      <rect x="50" y="96" width="32" height="18" fill="${barColor}"/>
      <!-- 'H' Crossbar (Right Segment) -->
      <rect x="118" y="96" width="32" height="18" fill="${barColor}"/>
      
      <!-- Central Hub Diamond Core -->
      <polygon points="100,86 119,105 100,124 81,105" fill="${hubColor}"/>
      <!-- Inner Diamond Precision Aperture -->
      <polygon points="100,94 111,105 100,116 89,105" fill="${variant === 'white' ? PALETTE.charcoal : (variant === 'black' ? PALETTE.white : PALETTE.warmIvory)}"/>
    </g>
  `;
}

console.log('Geometry generators defined successfully.');
