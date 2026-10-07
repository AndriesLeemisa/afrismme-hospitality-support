/**
 * MASTER ARCHITECTURAL IDENTITY SYSTEM
 * AfriSMME Hub — Restaurants & Hospitality Support Services
 * 
 * Engineered with pure mathematical vector geometry:
 * - Golden Ratio proportions (phi = 1.618)
 * - Classical Roman Palladian Archway & Cantilever Entablature
 * - Twin Fluted Colonnade Monoliths (Facilities Engineering & Artisanal Restoration)
 * - Multi-faceted Brilliant Diamond Keystone (The Standard of Execution)
 * - 4-Point Radiant Hearth & Compass Rose (24/7 Service Guarantee & Warm Hospitality)
 * - Stepped Classical Stylobate Plinth
 */

const fs = require('fs');
const path = require('path');

const rootDir = process.cwd();
const logoDir = path.join(rootDir, 'logo');
const vectorsDir = path.join(rootDir, 'public', 'vectors');

[logoDir, vectorsDir].forEach(dir => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});

// Brand Color Palette (Hex & RGB)
const PALETTE = {
  // Primary Obsidian & Charcoal
  obsidian: '#090A0D',
  charcoal: '#12141A',
  charcoalElevated: '#1B1E28',
  charcoalBorder: '#282D3C',

  // Secondary Warm Ivory & Alabaster
  warmIvory: '#FAF8F5',
  warmIvoryPure: '#FDFCF9',
  warmIvoryDark: '#ECE7DE',
  parchmentBorder: '#DFD8CC',

  // Accent Champagne Gold & Architectural Bronze
  goldLight: '#E8D7BE',
  goldMain: '#C5A880',
  goldMedium: '#B69566',
  goldDark: '#8F7145',
  goldShadow: '#5A4424',

  // Deep Emerald / Architectural Evergreen
  emeraldDeep: '#0F261B',
  emeraldMid: '#1A3B2B',

  // Technical Accents
  white: '#FFFFFF',
  black: '#000000',
  mutedText: '#8A92A0',
  dimText: '#5A6270'
};

// ============================================================================
// 1. MASTER GEOMETRIC SYMBOL GENERATOR (240 x 240 Grid)
// ============================================================================
function generateMasterSymbol(theme = 'color', size = 240) {
  const s = (size / 240).toFixed(4);

  // Theme Color Mapping
  let cPlinth, cPillars, cFlutes, cCapital, cArchOuter, cArchInner, cCanopy, cCanopyTop, cKeystoneLight, cKeystoneMid, cKeystoneDark, cStarLight, cStarDark, cHearthRing, cHearthDot;

  if (theme === 'black') {
    cPlinth = cPillars = cCapital = cArchOuter = cCanopy = cCanopyTop = PALETTE.black;
    cFlutes = PALETTE.warmIvoryPure;
    cArchInner = PALETTE.warmIvoryPure;
    cKeystoneLight = PALETTE.black;
    cKeystoneMid = PALETTE.black;
    cKeystoneDark = PALETTE.black;
    cStarLight = PALETTE.black;
    cStarDark = PALETTE.black;
    cHearthRing = PALETTE.warmIvoryPure;
    cHearthDot = PALETTE.black;
  } else if (theme === 'white') {
    cPlinth = cPillars = cCapital = cArchOuter = cCanopy = cCanopyTop = PALETTE.white;
    cFlutes = PALETTE.charcoal;
    cArchInner = PALETTE.charcoal;
    cKeystoneLight = PALETTE.white;
    cKeystoneMid = PALETTE.white;
    cKeystoneDark = PALETTE.white;
    cStarLight = PALETTE.white;
    cStarDark = PALETTE.white;
    cHearthRing = PALETTE.charcoal;
    cHearthDot = PALETTE.white;
  } else if (theme === 'bronze') {
    cPlinth = cPillars = cCapital = cCanopy = PALETTE.goldMain;
    cFlutes = PALETTE.goldDark;
    cArchOuter = PALETTE.goldMain;
    cArchInner = 'transparent';
    cCanopyTop = PALETTE.goldLight;
    cKeystoneLight = PALETTE.goldLight;
    cKeystoneMid = PALETTE.goldMain;
    cKeystoneDark = PALETTE.goldDark;
    cStarLight = PALETTE.goldLight;
    cStarDark = PALETTE.goldDark;
    cHearthRing = PALETTE.goldMain;
    cHearthDot = PALETTE.goldLight;
  } else {
    // Full Luxury Sovereign Architectural Color
    cPlinth = PALETTE.charcoal;
    cPillars = PALETTE.charcoal;
    cFlutes = PALETTE.charcoalElevated;
    cCapital = PALETTE.goldMain;
    cArchOuter = PALETTE.emeraldMid;
    cArchInner = '#132B20';
    cCanopy = PALETTE.goldMain;
    cCanopyTop = PALETTE.goldLight;
    cKeystoneLight = PALETTE.goldLight;
    cKeystoneMid = PALETTE.goldMain;
    cKeystoneDark = PALETTE.goldDark;
    cStarLight = PALETTE.goldLight;
    cStarDark = PALETTE.goldMedium;
    cHearthRing = PALETTE.goldMain;
    cHearthDot = PALETTE.goldLight;
  }

  return `
    <g class="symbol-master" transform="scale(${s})">
      <!-- Defs for subtle linear gradients in color mode -->
      ${theme === 'color' ? `
      <defs>
        <linearGradient id="goldBeamGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#B89566"/>
          <stop offset="25%" stop-color="#E5D3B8"/>
          <stop offset="50%" stop-color="#C5A880"/>
          <stop offset="75%" stop-color="#EADBCE"/>
          <stop offset="100%" stop-color="#A58352"/>
        </linearGradient>
        <linearGradient id="pillarLeftGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#14171E"/>
          <stop offset="50%" stop-color="#1D222D"/>
          <stop offset="100%" stop-color="#101217"/>
        </linearGradient>
        <linearGradient id="archGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#234E39"/>
          <stop offset="100%" stop-color="#132B20"/>
        </linearGradient>
      </defs>` : ''}

      <!-- 1. BASE: Two-Tier Stepped Architectural Stylobate Plinth -->
      <!-- Lower Foundation Plinth (Width: 196px, Centered x=22..218, y=214..222) -->
      <rect x="22" y="214" width="196" height="8" rx="1.5" fill="${cPlinth}"/>
      <!-- Upper Stylobate Plinth (Width: 172px, Centered x=34..206, y=207..212) -->
      <rect x="34" y="207" width="172" height="5" rx="1" fill="${theme === 'color' ? 'url(#goldBeamGrad)' : cCanopy}"/>

      <!-- 2. TWIN MONUMENTAL FLUTED COLUMNS (Facilities & Craftsmanship) -->
      <!-- Left Column (x=40..72, width: 32px, y=66..205, height: 139px) -->
      <!-- Column Base -->
      <path d="M 37 205 L 75 205 L 73 199 L 39 199 Z" fill="${theme === 'color' ? PALETTE.goldMain : cCapital}"/>
      <!-- Column Shaft -->
      <rect x="40" y="74" width="32" height="125" rx="1" fill="${theme === 'color' ? 'url(#pillarLeftGrad)' : cPillars}"/>
      <!-- Column Flutes (3 recessed vertical architectural reveals) -->
      <rect x="44.5" y="78" width="4" height="117" rx="1" fill="${cFlutes}"/>
      <rect x="54" y="78" width="4" height="117" rx="1" fill="${cFlutes}"/>
      <rect x="63.5" y="78" width="4" height="117" rx="1" fill="${cFlutes}"/>
      <!-- Column Capital (Tuscan/Doric Beveled Abacus) -->
      <path d="M 38 74 L 74 74 L 76 68 L 36 68 Z" fill="${theme === 'color' ? PALETTE.goldMain : cCapital}"/>

      <!-- Right Column (x=168..200, width: 32px, y=66..205, height: 139px) -->
      <!-- Column Base -->
      <path d="M 165 205 L 203 205 L 201 199 L 167 199 Z" fill="${theme === 'color' ? PALETTE.goldMain : cCapital}"/>
      <!-- Column Shaft -->
      <rect x="168" y="74" width="32" height="125" rx="1" fill="${theme === 'color' ? 'url(#pillarLeftGrad)' : cPillars}"/>
      <!-- Column Flutes (3 recessed vertical architectural reveals) -->
      <rect x="172.5" y="78" width="4" height="117" rx="1" fill="${cFlutes}"/>
      <rect x="182" y="78" width="4" height="117" rx="1" fill="${cFlutes}"/>
      <rect x="191.5" y="78" width="4" height="117" rx="1" fill="${cFlutes}"/>
      <!-- Column Capital -->
      <path d="M 166 74 L 202 74 L 204 68 L 164 68 Z" fill="${theme === 'color' ? PALETTE.goldMain : cCapital}"/>

      <!-- 3. THE HOSPITALITY ARCHWAY (Sanctuary Portal) -->
      <!-- Center is at x=120. Gap between columns is from x=72 to x=168 (96px wide). -->
      <!-- Outer Archway Wall -->
      <path d="M 76 205 L 76 122 A 44 44 0 0 1 164 122 L 164 205 L 146 205 L 146 126 A 26 26 0 0 0 94 126 L 94 205 Z" fill="${theme === 'color' ? 'url(#archGrad)' : cArchOuter}"/>
      <!-- Inner Arch Depth Shadowline / Framing Bead -->
      <path d="M 92 205 L 92 126 A 28 28 0 0 1 148 126 L 148 205" fill="none" stroke="${theme === 'color' ? PALETTE.goldMain : cCanopy}" stroke-width="1.8" stroke-linecap="round"/>

      <!-- 4. RADIANT HEARTH & COMPASS ROSE (Hospitality Beacon & 24/7 Operations) -->
      <!-- Center at (120, 160) -->
      <!-- Compass Rose: Faceted 4-Point Star -->
      <!-- North Point -->
      <polygon points="120,132 120,160 114,160" fill="${cStarDark}"/>
      <polygon points="120,132 126,160 120,160" fill="${cStarLight}"/>
      <!-- South Point -->
      <polygon points="120,188 126,160 120,160" fill="${cStarDark}"/>
      <polygon points="120,188 120,160 114,160" fill="${cStarLight}"/>
      <!-- East Point -->
      <polygon points="148,160 120,154 120,160" fill="${cStarDark}"/>
      <polygon points="148,160 120,160 120,166" fill="${cStarLight}"/>
      <!-- West Point -->
      <polygon points="92,160 120,166 120,160" fill="${cStarDark}"/>
      <polygon points="92,160 120,160 120,154" fill="${cStarLight}"/>
      <!-- Central Hearth Jewel: Concentric Ring & Golden Core -->
      <circle cx="120" cy="160" r="7" fill="${theme === 'color' ? PALETTE.charcoal : cPlinth}" stroke="${theme === 'color' ? PALETTE.goldLight : cHearthRing}" stroke-width="1.6"/>
      <circle cx="120" cy="160" r="3.2" fill="${theme === 'color' ? PALETTE.goldLight : cHearthDot}"/>

      <!-- 5. ARCHITECTURAL CANTILEVER ENTABLATURE & CANOPY (Protective Shelter) -->
      <!-- Lower Architrave Beam (spanning x=28..212, y=60..66) -->
      <rect x="28" y="60" width="184" height="6" rx="1" fill="${theme === 'color' ? PALETTE.charcoalElevated : cPillars}"/>
      <!-- Cantilever Lintel Canopy with 45° Beveled Wingtips (x=16..224, y=48..60) -->
      <polygon points="16,60 28,48 212,48 224,60" fill="${theme === 'color' ? 'url(#goldBeamGrad)' : cCanopy}"/>
      <!-- Architectural Cornice Molding Line -->
      <line x1="26" y1="48" x2="214" y2="48" stroke="${theme === 'color' ? PALETTE.goldLight : cCanopyTop}" stroke-width="2"/>

      <!-- 6. THE APEX BRILLIANT DIAMOND KEYSTONE (The Sovereign Standard of Excellence) -->
      <!-- Center at (120, 26). Height: 34px (y=9..43), Width: 32px (x=104..136) -->
      <!-- Top-Left Facet -->
      <polygon points="120,9 104,26 120,26" fill="${cKeystoneLight}"/>
      <!-- Top-Right Facet -->
      <polygon points="120,9 136,26 120,26" fill="${cKeystoneMid}"/>
      <!-- Bottom-Left Facet -->
      <polygon points="104,26 120,43 120,26" fill="${cKeystoneMid}"/>
      <!-- Bottom-Right Facet -->
      <polygon points="136,26 120,43 120,26" fill="${cKeystoneDark}"/>
      <!-- Inner Diamond Highlight Reflection -->
      <polygon points="120,16 112,26 120,36 128,26" fill="${theme === 'color' ? 'rgba(255,255,255,0.45)' : 'none'}"/>

      <!-- Subtle Flanking Keystone Beacons (Twin Acroteria Gems at x=34 and x=206) -->
      <polygon points="34,44 38,48 34,52 30,48" fill="${theme === 'color' ? PALETTE.goldMain : cCanopy}"/>
      <polygon points="206,44 210,48 206,52 202,48" fill="${theme === 'color' ? PALETTE.goldMain : cCanopy}"/>
    </g>
  `;
}

// Export functions for building various lockups
module.exports = {
  PALETTE,
  generateMasterSymbol
};

console.log('Master vector symbol generator module compiled successfully.');
