const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '../public/images/diagrams');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// DIAGRAM 1: THE INTEGRATED HOSPITALITY SUPPORT MODEL (3x2 Spacious Grid)
const diagram1 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 680" width="100%" height="100%">
  <defs>
    <linearGradient id="goldGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#E2CA9E"/>
      <stop offset="100%" stop-color="#C5A880"/>
    </linearGradient>
    <linearGradient id="darkGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#214634"/>
      <stop offset="100%" stop-color="#132A1F"/>
    </linearGradient>
    <filter id="shadow1" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="6" stdDeviation="8" flood-color="#091710" flood-opacity="0.4"/>
    </filter>
  </defs>

  <rect width="1000" height="680" rx="10" fill="#132A1F"/>
  <rect x="2" y="2" width="996" height="676" rx="8" fill="none" stroke="#28523E" stroke-width="1.5"/>

  <!-- Diagram Header -->
  <text x="50" y="44" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" font-weight="700" letter-spacing="3" fill="#C5A880">ARCHITECTURE 01 • STRATEGIC ECOSYSTEM</text>
  <text x="50" y="78" font-family="'Cormorant Garamond', Georgia, serif" font-size="30" font-weight="600" fill="#FAF8F5">The Integrated Hospitality Support Model</text>

  <!-- Central Hub Governance Box -->
  <g filter="url(#shadow1)">
    <rect x="260" y="105" width="480" height="92" rx="8" fill="url(#darkGrad1)" stroke="#C5A880" stroke-width="2"/>
    <text x="500" y="142" font-family="'Plus Jakarta Sans', sans-serif" font-size="24" font-weight="800" letter-spacing="4" fill="#FAF8F5" text-anchor="middle">AFRISMME HUB</text>
    <text x="500" y="167" font-family="'Plus Jakarta Sans', sans-serif" font-size="17" font-weight="600" letter-spacing="2" fill="#C5A880" text-anchor="middle">HOSPITALITY SUPPORT ECOSYSTEM</text>
    <text x="500" y="187" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="500" letter-spacing="1" fill="#C2D6CB" text-anchor="middle">SINGLE GOVERNANCE • INTEGRATED MULTI-TRADE DELIVERY</text>
  </g>

  <!-- Distribution Lines -->
  <line x1="500" y1="197" x2="500" y2="225" stroke="#C5A880" stroke-width="2"/>
  <circle cx="500" cy="225" r="4" fill="#C5A880"/>
  <line x1="200" y1="225" x2="800" y2="225" stroke="#C5A880" stroke-width="2"/>
  <line x1="200" y1="225" x2="200" y2="245" stroke="#C5A880" stroke-width="1.5"/>
  <line x1="500" y1="225" x2="500" y2="245" stroke="#C5A880" stroke-width="1.5"/>
  <line x1="800" y1="225" x2="800" y2="245" stroke="#C5A880" stroke-width="1.5"/>

  <!-- ROW 1 (Pillars 01, 02, 03) -->
  <!-- 01 ATTRACT -->
  <g filter="url(#shadow1)">
    <rect x="40" y="245" width="290" height="185" rx="7" fill="#1B3B2B" stroke="#28523E" stroke-width="1.3"/>
    <rect x="40" y="245" width="290" height="5" rx="2" fill="#C5A880"/>
    <text x="60" y="278" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" font-weight="700" letter-spacing="2" fill="#C5A880">01 ATTRACT</text>
    <text x="60" y="304" font-family="'Plus Jakarta Sans', sans-serif" font-size="22" font-weight="700" fill="#FAF8F5">Exterior &amp; Shade</text>
    <line x1="60" y1="316" x2="310" y2="316" stroke="#28523E" stroke-width="1"/>
    <text x="60" y="340" font-family="'Plus Jakarta Sans', sans-serif" font-size="17" fill="#DCE8E1">• Commercial Cantilevers</text>
    <text x="60" y="366" font-family="'Plus Jakarta Sans', sans-serif" font-size="17" fill="#DCE8E1">• Architectural Facades</text>
    <text x="60" y="392" font-family="'Plus Jakarta Sans', sans-serif" font-size="17" fill="#DCE8E1">• Weather Protection</text>
    <text x="60" y="418" font-family="'Plus Jakarta Sans', sans-serif" font-size="15" font-weight="700" fill="#C5A880">DIVISION: AfriShades Network</text>
  </g>

  <!-- 02 ENHANCE -->
  <g filter="url(#shadow1)">
    <rect x="355" y="245" width="290" height="185" rx="7" fill="#1B3B2B" stroke="#28523E" stroke-width="1.3"/>
    <rect x="355" y="245" width="290" height="5" rx="2" fill="#C5A880"/>
    <text x="375" y="278" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" font-weight="700" letter-spacing="2" fill="#C5A880">02 ENHANCE</text>
    <text x="375" y="304" font-family="'Plus Jakarta Sans', sans-serif" font-size="22" font-weight="700" fill="#FAF8F5">Acoustic &amp; Comfort</text>
    <line x1="375" y1="316" x2="625" y2="316" stroke="#28523E" stroke-width="1"/>
    <text x="375" y="340" font-family="'Plus Jakarta Sans', sans-serif" font-size="17" fill="#DCE8E1">• Sound Absorption Panels</text>
    <text x="375" y="366" font-family="'Plus Jakarta Sans', sans-serif" font-size="17" fill="#DCE8E1">• Custom Banquette Seating</text>
    <text x="375" y="392" font-family="'Plus Jakarta Sans', sans-serif" font-size="17" fill="#DCE8E1">• Spatial Privacy Zoning</text>
    <text x="375" y="418" font-family="'Plus Jakarta Sans', sans-serif" font-size="15" font-weight="700" fill="#C5A880">DIVISION: Cane Africa &amp; Joinery</text>
  </g>

  <!-- 03 RESTORE -->
  <g filter="url(#shadow1)">
    <rect x="670" y="245" width="290" height="185" rx="7" fill="#1B3B2B" stroke="#28523E" stroke-width="1.3"/>
    <rect x="670" y="245" width="290" height="5" rx="2" fill="#C5A880"/>
    <text x="690" y="278" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" font-weight="700" letter-spacing="2" fill="#C5A880">03 RESTORE</text>
    <text x="690" y="304" font-family="'Plus Jakarta Sans', sans-serif" font-size="22" font-weight="700" fill="#FAF8F5">Artisanal Renewal</text>
    <line x1="690" y1="316" x2="940" y2="316" stroke="#28523E" stroke-width="1"/>
    <text x="690" y="340" font-family="'Plus Jakarta Sans', sans-serif" font-size="17" fill="#DCE8E1">• Solid Hardwood Reconditioning</text>
    <text x="690" y="366" font-family="'Plus Jakarta Sans', sans-serif" font-size="17" fill="#DCE8E1">• Cane &amp; Wicker Weaving</text>
    <text x="690" y="392" font-family="'Plus Jakarta Sans', sans-serif" font-size="17" fill="#DCE8E1">• Contract Leather Treatment</text>
    <text x="690" y="418" font-family="'Plus Jakarta Sans', sans-serif" font-size="15" font-weight="700" fill="#C5A880">DIVISION: The Wood Doctor</text>
  </g>

  <!-- ROW 2 (Pillars 04, 05, 06) -->
  <!-- 04 MAINTAIN -->
  <g filter="url(#shadow1)">
    <rect x="40" y="445" width="290" height="185" rx="7" fill="#1B3B2B" stroke="#28523E" stroke-width="1.3"/>
    <rect x="40" y="445" width="290" height="5" rx="2" fill="#C5A880"/>
    <text x="60" y="478" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" font-weight="700" letter-spacing="2" fill="#C5A880">04 MAINTAIN</text>
    <text x="60" y="504" font-family="'Plus Jakarta Sans', sans-serif" font-size="22" font-weight="700" fill="#FAF8F5">Preventative Care</text>
    <line x1="60" y1="516" x2="310" y2="516" stroke="#28523E" stroke-width="1"/>
    <text x="60" y="540" font-family="'Plus Jakarta Sans', sans-serif" font-size="17" fill="#DCE8E1">• Kitchen Extraction Degreasing</text>
    <text x="60" y="566" font-family="'Plus Jakarta Sans', sans-serif" font-size="17" fill="#DCE8E1">• Cold-Chain &amp; HVAC Service</text>
    <text x="60" y="592" font-family="'Plus Jakarta Sans', sans-serif" font-size="17" fill="#DCE8E1">• Mobile Rapid Workshop Dispatch</text>
    <text x="60" y="618" font-family="'Plus Jakarta Sans', sans-serif" font-size="15" font-weight="700" fill="#C5A880">DIVISION: Facilities Engineering</text>
  </g>

  <!-- 05 PROTECT -->
  <g filter="url(#shadow1)">
    <rect x="355" y="445" width="290" height="185" rx="7" fill="#1B3B2B" stroke="#28523E" stroke-width="1.3"/>
    <rect x="355" y="445" width="290" height="5" rx="2" fill="#C5A880"/>
    <text x="375" y="478" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" font-weight="700" letter-spacing="2" fill="#C5A880">05 PROTECT</text>
    <text x="375" y="504" font-family="'Plus Jakarta Sans', sans-serif" font-size="22" font-weight="700" fill="#FAF8F5">Safety &amp; Compliance</text>
    <line x1="375" y1="516" x2="625" y2="516" stroke="#28523E" stroke-width="1"/>
    <text x="375" y="540" font-family="'Plus Jakarta Sans', sans-serif" font-size="17" fill="#DCE8E1">• SANS Standards Alignment</text>
    <text x="375" y="566" font-family="'Plus Jakarta Sans', sans-serif" font-size="17" fill="#DCE8E1">• HACCP Hygiene Readiness</text>
    <text x="375" y="592" font-family="'Plus Jakarta Sans', sans-serif" font-size="17" fill="#DCE8E1">• Staff Presentation &amp; Uniforms</text>
    <text x="375" y="618" font-family="'Plus Jakarta Sans', sans-serif" font-size="15" font-weight="700" fill="#C5A880">DIVISION: AfriHealth &amp; Safety</text>
  </g>

  <!-- 06 GROW -->
  <g filter="url(#shadow1)">
    <rect x="670" y="445" width="290" height="185" rx="7" fill="#1B3B2B" stroke="#28523E" stroke-width="1.3"/>
    <rect x="670" y="445" width="290" height="5" rx="2" fill="#C5A880"/>
    <text x="690" y="478" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" font-weight="700" letter-spacing="2" fill="#C5A880">06 GROW</text>
    <text x="690" y="504" font-family="'Plus Jakarta Sans', sans-serif" font-size="22" font-weight="700" fill="#FAF8F5">Digital &amp; Systems</text>
    <line x1="690" y1="516" x2="940" y2="516" stroke="#28523E" stroke-width="1"/>
    <text x="690" y="540" font-family="'Plus Jakarta Sans', sans-serif" font-size="17" fill="#DCE8E1">• Interactive Digital QR Menus</text>
    <text x="690" y="566" font-family="'Plus Jakarta Sans', sans-serif" font-size="17" fill="#DCE8E1">• Local Search Engine Visibility</text>
    <text x="690" y="592" font-family="'Plus Jakarta Sans', sans-serif" font-size="17" fill="#DCE8E1">• Table Seating &amp; Yield Analytics</text>
    <text x="690" y="618" font-family="'Plus Jakarta Sans', sans-serif" font-size="15" font-weight="700" fill="#C5A880">DIVISION: Scinovalities Tech</text>
  </g>

  <!-- Bottom Bar -->
  <text x="500" y="658" font-family="'Plus Jakarta Sans', sans-serif" font-size="15" font-weight="600" letter-spacing="2" fill="#C2D6CB" text-anchor="middle">ALL TRADES COORDINATED UNDER ONE CONSOLIDATED SERVICE LEVEL AGREEMENT (SLA)</text>
</svg>`;


// DIAGRAM 2: THE VENUE IMPROVEMENT CYCLE (2-Row Spacious Flow, Zero Text Overflow)
const diagram2 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 560" width="100%" height="100%">
  <defs>
    <linearGradient id="goldGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#E2CA9E"/>
      <stop offset="100%" stop-color="#C5A880"/>
    </linearGradient>
    <filter id="shadow2" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="6" stdDeviation="8" flood-color="#091710" flood-opacity="0.4"/>
    </filter>
  </defs>

  <rect width="1000" height="560" rx="10" fill="#132A1F"/>
  <rect x="2" y="2" width="996" height="556" rx="8" fill="none" stroke="#28523E" stroke-width="1.5"/>

  <!-- Diagram Header -->
  <text x="50" y="44" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" font-weight="700" letter-spacing="3" fill="#C5A880">PROCESS 02 • LIFECYCLE MANAGEMENT</text>
  <text x="50" y="78" font-family="'Cormorant Garamond', Georgia, serif" font-size="30" font-weight="600" fill="#FAF8F5">The Venue Improvement &amp; Value Creation Cycle</text>

  <!-- ROW 1: Steps 01 to 04 -->
  <!-- STEP 01: IDENTIFY -->
  <g transform="translate(30, 105)" filter="url(#shadow2)">
    <rect width="212" height="185" rx="7" fill="#1B3B2B" stroke="#28523E" stroke-width="1.3"/>
    <rect width="212" height="5" rx="2" fill="#C5A880"/>
    <text x="16" y="34" font-family="'Plus Jakarta Sans', sans-serif" font-size="24" font-weight="800" fill="#C5A880">01</text>
    <text x="16" y="62" font-family="'Plus Jakarta Sans', sans-serif" font-size="21" font-weight="700" fill="#FAF8F5">IDENTIFY</text>
    <text x="16" y="86" font-family="'Plus Jakarta Sans', sans-serif" font-size="14.5" font-weight="600" fill="#C2D6CB">Venue Diagnostic</text>
    <line x1="16" y1="98" x2="196" y2="98" stroke="#28523E" stroke-width="1"/>
    <text x="16" y="122" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" fill="#DCE8E1">• 360° Physical Audit</text>
    <text x="16" y="146" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" fill="#DCE8E1">• Acoustic Assessment</text>
    <text x="16" y="170" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" fill="#DCE8E1">• Operational Checks</text>
  </g>

  <!-- Arrow 1 to 2 -->
  <path d="M 248 197 L 268 197 M 262 191 L 270 197 L 262 203" stroke="#C5A880" stroke-width="2.5" fill="none"/>

  <!-- STEP 02: ASSESS -->
  <g transform="translate(275, 105)" filter="url(#shadow2)">
    <rect width="212" height="185" rx="7" fill="#1B3B2B" stroke="#28523E" stroke-width="1.3"/>
    <rect width="212" height="5" rx="2" fill="#C5A880"/>
    <text x="16" y="34" font-family="'Plus Jakarta Sans', sans-serif" font-size="24" font-weight="800" fill="#C5A880">02</text>
    <text x="16" y="62" font-family="'Plus Jakarta Sans', sans-serif" font-size="21" font-weight="700" fill="#FAF8F5">ASSESS</text>
    <text x="16" y="86" font-family="'Plus Jakarta Sans', sans-serif" font-size="14.5" font-weight="600" fill="#C2D6CB">Technical Depth</text>
    <line x1="16" y1="98" x2="196" y2="98" stroke="#28523E" stroke-width="1"/>
    <text x="16" y="122" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" fill="#DCE8E1">• Substrate Wear &amp; Grain</text>
    <text x="16" y="146" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" fill="#DCE8E1">• Extraction Airflow</text>
    <text x="16" y="170" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" fill="#DCE8E1">• Shade &amp; Weather Proof</text>
  </g>

  <!-- Arrow 2 to 3 -->
  <path d="M 493 197 L 513 197 M 507 191 L 515 197 L 507 203" stroke="#C5A880" stroke-width="2.5" fill="none"/>

  <!-- STEP 03: PRIORITISE -->
  <g transform="translate(520, 105)" filter="url(#shadow2)">
    <rect width="212" height="185" rx="7" fill="#1B3B2B" stroke="#28523E" stroke-width="1.3"/>
    <rect width="212" height="5" rx="2" fill="#C5A880"/>
    <text x="16" y="34" font-family="'Plus Jakarta Sans', sans-serif" font-size="24" font-weight="800" fill="#C5A880">03</text>
    <text x="16" y="62" font-family="'Plus Jakarta Sans', sans-serif" font-size="21" font-weight="700" fill="#FAF8F5">PRIORITISE</text>
    <text x="16" y="86" font-family="'Plus Jakarta Sans', sans-serif" font-size="14.5" font-weight="600" fill="#C2D6CB">Executive Scope</text>
    <line x1="16" y1="98" x2="196" y2="98" stroke="#28523E" stroke-width="1"/>
    <text x="16" y="122" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" fill="#DCE8E1">• P1: Safety &amp; Egress</text>
    <text x="16" y="146" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" fill="#DCE8E1">• P2: Terrace Capacity</text>
    <text x="16" y="170" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" fill="#DCE8E1">• Clear Cost Estimates</text>
  </g>

  <!-- Arrow 3 to 4 -->
  <path d="M 738 197 L 758 197 M 752 191 L 760 197 L 752 203" stroke="#C5A880" stroke-width="2.5" fill="none"/>

  <!-- STEP 04: IMPLEMENT (Highlighted Master Step) -->
  <g transform="translate(765, 105)" filter="url(#shadow2)">
    <rect width="205" height="185" rx="7" fill="#214634" stroke="#C5A880" stroke-width="1.8"/>
    <rect width="205" height="5" rx="2" fill="#C5A880"/>
    <text x="16" y="34" font-family="'Plus Jakarta Sans', sans-serif" font-size="24" font-weight="800" fill="#C5A880">04</text>
    <text x="16" y="62" font-family="'Plus Jakarta Sans', sans-serif" font-size="21" font-weight="700" fill="#FAF8F5">IMPLEMENT</text>
    <text x="16" y="86" font-family="'Plus Jakarta Sans', sans-serif" font-size="14.5" font-weight="600" fill="#C5A880">Scheduled Execution</text>
    <line x1="16" y1="98" x2="189" y2="98" stroke="#316149" stroke-width="1"/>
    <text x="16" y="122" font-family="'Plus Jakarta Sans', sans-serif" font-size="15.5" fill="#FFFFFF">• Phased Daytime &amp; Batch</text>
    <text x="16" y="146" font-family="'Plus Jakarta Sans', sans-serif" font-size="15.5" fill="#FFFFFF">• Food-Safe Rapid Cure</text>
    <text x="16" y="170" font-family="'Plus Jakarta Sans', sans-serif" font-size="15.5" fill="#FFFFFF">• Planned Maintenance</text>
  </g>

  <!-- Curving Connector from Row 1 to Row 2 -->
  <path d="M 867 290 L 867 312 Q 867 325 850 325 L 825 325" fill="none" stroke="#C5A880" stroke-width="2.5"/>
  <path d="M 830 318 L 820 325 L 830 332" fill="none" stroke="#C5A880" stroke-width="2.5"/>

  <!-- ROW 2: Steps 05, 06, 07 -->
  <!-- STEP 05: VERIFY -->
  <g transform="translate(685, 335)" filter="url(#shadow2)">
    <rect width="285" height="175" rx="7" fill="#1B3B2B" stroke="#28523E" stroke-width="1.3"/>
    <rect width="285" height="5" rx="2" fill="#C5A880"/>
    <text x="18" y="34" font-family="'Plus Jakarta Sans', sans-serif" font-size="24" font-weight="800" fill="#C5A880">05</text>
    <text x="18" y="62" font-family="'Plus Jakarta Sans', sans-serif" font-size="21" font-weight="700" fill="#FAF8F5">VERIFY</text>
    <text x="18" y="86" font-family="'Plus Jakarta Sans', sans-serif" font-size="14.5" font-weight="600" fill="#C2D6CB">Handover Standard</text>
    <line x1="18" y1="98" x2="267" y2="98" stroke="#28523E" stroke-width="1"/>
    <text x="18" y="122" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" fill="#DCE8E1">• Service-Ready Sign-off</text>
    <text x="18" y="146" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" fill="#DCE8E1">• Odour-Free Food Service Checks</text>
    <text x="18" y="170" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" fill="#DCE8E1">• Air Quality &amp; Cleanliness Audit</text>
  </g>

  <!-- Arrow 5 to 6 -->
  <path d="M 680 422 L 655 422 M 662 415 L 653 422 L 662 429" stroke="#C5A880" stroke-width="2.5" fill="none"/>

  <!-- STEP 06: MAINTAIN -->
  <g transform="translate(360, 335)" filter="url(#shadow2)">
    <rect width="285" height="175" rx="7" fill="#1B3B2B" stroke="#28523E" stroke-width="1.3"/>
    <rect width="285" height="5" rx="2" fill="#C5A880"/>
    <text x="18" y="34" font-family="'Plus Jakarta Sans', sans-serif" font-size="24" font-weight="800" fill="#C5A880">06</text>
    <text x="18" y="62" font-family="'Plus Jakarta Sans', sans-serif" font-size="21" font-weight="700" fill="#FAF8F5">MAINTAIN</text>
    <text x="18" y="86" font-family="'Plus Jakarta Sans', sans-serif" font-size="14.5" font-weight="600" fill="#C2D6CB">Preventative Stewardship</text>
    <line x1="18" y1="98" x2="267" y2="98" stroke="#28523E" stroke-width="1"/>
    <text x="18" y="122" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" fill="#DCE8E1">• Scheduled Monthly Timber Care</text>
    <text x="18" y="146" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" fill="#DCE8E1">• Kitchen Extraction Degreasing</text>
    <text x="18" y="170" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" fill="#DCE8E1">• Mobile Workshop Priority SLA</text>
  </g>

  <!-- Arrow 6 to 7 -->
  <path d="M 355 422 L 330 422 M 337 415 L 328 422 L 337 429" stroke="#C5A880" stroke-width="2.5" fill="none"/>

  <!-- STEP 07: OPTIMIZE -->
  <g transform="translate(35, 335)" filter="url(#shadow2)">
    <rect width="285" height="175" rx="7" fill="#1B3B2B" stroke="#28523E" stroke-width="1.3"/>
    <rect width="285" height="5" rx="2" fill="#C5A880"/>
    <text x="18" y="34" font-family="'Plus Jakarta Sans', sans-serif" font-size="24" font-weight="800" fill="#C5A880">07</text>
    <text x="18" y="62" font-family="'Plus Jakarta Sans', sans-serif" font-size="21" font-weight="700" fill="#FAF8F5">OPTIMIZE</text>
    <text x="18" y="86" font-family="'Plus Jakarta Sans', sans-serif" font-size="14.5" font-weight="600" fill="#C2D6CB">Continuous Improvement</text>
    <line x1="18" y1="98" x2="267" y2="98" stroke="#28523E" stroke-width="1"/>
    <text x="18" y="122" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" fill="#DCE8E1">• Dining Cover Capacity Lift</text>
    <text x="18" y="146" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" fill="#DCE8E1">• Dynamic Digital Menus</text>
    <text x="18" y="170" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" fill="#DCE8E1">• Sustained Physical Asset Value</text>
  </g>

  <!-- Return Flow Arrow (07 back to 01) -->
  <path d="M 140 335 L 140 300" fill="none" stroke="#316149" stroke-dasharray="4,4" stroke-width="2"/>
  <path d="M 135 308 L 140 298 L 145 308" fill="none" stroke="#C5A880" stroke-width="2"/>

  <!-- Bottom Baseline Note -->
  <text x="500" y="535" font-family="'Plus Jakarta Sans', sans-serif" font-size="15" font-weight="600" letter-spacing="2" fill="#C2D6CB" text-anchor="middle">CLOSED-LOOP ASSET PROTECTION &amp; VALUE APPRECIATION</text>
</svg>`;


// DIAGRAM 3: THE ONE COORDINATED PARTNER GOVERNANCE MODEL
const diagram3 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 520" width="100%" height="100%">
  <defs>
    <linearGradient id="grad3Client" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#214634"/>
      <stop offset="100%" stop-color="#153023"/>
    </linearGradient>
    <linearGradient id="grad3Hub" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#2C4F3A"/>
      <stop offset="100%" stop-color="#193425"/>
    </linearGradient>
    <filter id="shadow3" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="6" stdDeviation="8" flood-color="#091710" flood-opacity="0.45"/>
    </filter>
  </defs>

  <rect width="1000" height="520" rx="10" fill="#132A1F"/>
  <rect x="2" y="2" width="996" height="516" rx="8" fill="none" stroke="#28523E" stroke-width="1.5"/>

  <!-- Diagram Header -->
  <text x="40" y="44" font-family="'Plus Jakarta Sans', Arial, sans-serif" font-size="14" font-weight="700" letter-spacing="2.5" fill="#C5A880">GOVERNANCE 03 • CONTRACT ARCHITECTURE</text>
  <text x="40" y="78" font-family="'Cormorant Garamond', Georgia, serif" font-size="30" font-weight="600" fill="#FAF8F5">The One Coordinated Partner Operating Model</text>

  <!-- Flow 4 Spacious, Proportionate Pillars -->

  <!-- Col 1: CLIENT -->
  <g transform="translate(32, 108)" filter="url(#shadow3)">
    <rect width="212" height="352" rx="8" fill="url(#grad3Client)" stroke="#316149" stroke-width="1.5"/>
    <rect width="212" height="5" rx="2" fill="#9BBAA9"/>
    <text x="106" y="38" font-family="'Plus Jakarta Sans', Arial, sans-serif" font-size="14" font-weight="800" letter-spacing="1" fill="#FAF8F5" text-anchor="middle">HOSPITALITY CLIENT</text>
    <text x="106" y="60" font-family="'Plus Jakarta Sans', Arial, sans-serif" font-size="11.5" font-weight="600" fill="#C5A880" text-anchor="middle">Venue Executive Leadership</text>
    <line x1="18" y1="72" x2="194" y2="72" stroke="#28523E" stroke-width="1"/>
    <text x="18" y="108" font-family="'Plus Jakarta Sans', Arial, sans-serif" font-size="12.5" font-weight="500" fill="#DCE8E1">• Single Master SLA</text>
    <text x="18" y="146" font-family="'Plus Jakarta Sans', Arial, sans-serif" font-size="12.5" font-weight="500" fill="#DCE8E1">• Dedicated Account Director</text>
    <text x="18" y="184" font-family="'Plus Jakarta Sans', Arial, sans-serif" font-size="12.5" font-weight="500" fill="#DCE8E1">• Consolidated Billing</text>
    <text x="18" y="222" font-family="'Plus Jakarta Sans', Arial, sans-serif" font-size="12.5" font-weight="500" fill="#DCE8E1">• Priority Technical Escalation</text>
    <text x="18" y="260" font-family="'Plus Jakarta Sans', Arial, sans-serif" font-size="12.5" font-weight="500" fill="#DCE8E1">• Coordinated Zonal Care</text>
    <rect x="18" y="304" width="176" height="30" rx="5" fill="#132A1F" stroke="#28523E" stroke-width="1"/>
    <text x="106" y="323" font-family="'Plus Jakarta Sans', Arial, sans-serif" font-size="11" font-weight="700" letter-spacing="0.5" fill="#C2D6CB" text-anchor="middle">COMMERCIAL CLIENT</text>
  </g>

  <!-- Arrow 1 to 2 -->
  <g stroke="#C5A880" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <line x1="248" y1="283" x2="264" y2="283"/>
    <polygon points="259,278 265,283 259,288" fill="#C5A880"/>
  </g>

  <!-- Col 2: AFRISMME HUB (THE INTEGRATOR) -->
  <g transform="translate(268, 102)" filter="url(#shadow3)">
    <rect width="224" height="364" rx="8" fill="url(#grad3Hub)" stroke="#C5A880" stroke-width="2"/>
    <rect width="224" height="6" rx="2" fill="#C5A880"/>
    <text x="112" y="40" font-family="'Plus Jakarta Sans', Arial, sans-serif" font-size="16" font-weight="800" letter-spacing="1.5" fill="#FAF8F5" text-anchor="middle">AFRISMME HUB</text>
    <text x="112" y="62" font-family="'Plus Jakarta Sans', Arial, sans-serif" font-size="11.5" font-weight="700" fill="#C5A880" text-anchor="middle">Ecosystem Integrator &amp; PMO</text>
    <line x1="18" y1="74" x2="206" y2="74" stroke="#316149" stroke-width="1"/>
    <text x="18" y="110" font-family="'Plus Jakarta Sans', Arial, sans-serif" font-size="12.5" font-weight="500" fill="#FAF8F5">• 360° Diagnostic Audits</text>
    <text x="18" y="148" font-family="'Plus Jakarta Sans', Arial, sans-serif" font-size="12.5" font-weight="500" fill="#FAF8F5">• Scope &amp; Pricing Governance</text>
    <text x="18" y="186" font-family="'Plus Jakarta Sans', Arial, sans-serif" font-size="12.5" font-weight="500" fill="#FAF8F5">• Phased &amp; Scheduled Windows</text>
    <text x="18" y="224" font-family="'Plus Jakarta Sans', Arial, sans-serif" font-size="12.5" font-weight="500" fill="#FAF8F5">• Multi-Trade Orchestration</text>
    <text x="18" y="262" font-family="'Plus Jakarta Sans', Arial, sans-serif" font-size="12.5" font-weight="500" fill="#FAF8F5">• SANS &amp; Safety Verification</text>
    <rect x="18" y="304" width="188" height="30" rx="5" fill="#132A1F" stroke="#C5A880" stroke-width="1.2"/>
    <text x="112" y="323" font-family="'Plus Jakarta Sans', Arial, sans-serif" font-size="11" font-weight="800" letter-spacing="0.5" fill="#E2CA9E" text-anchor="middle">SINGLE CONTRACT HOLDER</text>
  </g>

  <!-- Arrow 2 to 3 -->
  <g stroke="#C5A880" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <line x1="496" y1="283" x2="512" y2="283"/>
    <polygon points="507,278 513,283 507,288" fill="#C5A880"/>
  </g>

  <!-- Col 3: SPECIALIST NETWORK -->
  <g transform="translate(516, 108)" filter="url(#shadow3)">
    <rect width="212" height="352" rx="8" fill="#1B3B2B" stroke="#28523E" stroke-width="1.3"/>
    <rect width="212" height="5" rx="2" fill="#C5A880"/>
    <text x="106" y="38" font-family="'Plus Jakarta Sans', Arial, sans-serif" font-size="14" font-weight="800" letter-spacing="1" fill="#FAF8F5" text-anchor="middle">SPECIALIST NETWORK</text>
    <text x="106" y="60" font-family="'Plus Jakarta Sans', Arial, sans-serif" font-size="11.5" font-weight="600" fill="#C5A880" text-anchor="middle">Accredited Master Trades</text>
    <line x1="18" y1="72" x2="194" y2="72" stroke="#28523E" stroke-width="1"/>
    <text x="18" y="108" font-family="'Plus Jakarta Sans', Arial, sans-serif" font-size="12.5" font-weight="500" fill="#DCE8E1">• The Wood Doctor: Timber Care</text>
    <text x="18" y="146" font-family="'Plus Jakarta Sans', Arial, sans-serif" font-size="12.5" font-weight="500" fill="#DCE8E1">• AfriShades: Cantilever Shade</text>
    <text x="18" y="184" font-family="'Plus Jakarta Sans', Arial, sans-serif" font-size="12.5" font-weight="500" fill="#DCE8E1">• Cane Africa: Woven Joinery</text>
    <text x="18" y="222" font-family="'Plus Jakarta Sans', Arial, sans-serif" font-size="12.5" font-weight="500" fill="#DCE8E1">• Facilities: Extraction Systems</text>
    <text x="18" y="260" font-family="'Plus Jakarta Sans', Arial, sans-serif" font-size="12.5" font-weight="500" fill="#DCE8E1">• Scinovalities: Digital Systems</text>
    <rect x="18" y="304" width="176" height="30" rx="5" fill="#132A1F" stroke="#28523E" stroke-width="1"/>
    <text x="106" y="323" font-family="'Plus Jakarta Sans', Arial, sans-serif" font-size="11" font-weight="700" letter-spacing="0.5" fill="#C5A880" text-anchor="middle">SPECIALIST DIVISIONS</text>
  </g>

  <!-- Arrow 3 to 4 -->
  <g stroke="#C5A880" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <line x1="732" y1="283" x2="748" y2="283"/>
    <polygon points="743,278 749,283 743,288" fill="#C5A880"/>
  </g>

  <!-- Col 4: STRATEGIC OUTCOMES -->
  <g transform="translate(752, 108)" filter="url(#shadow3)">
    <rect width="216" height="352" rx="8" fill="#1B3B2B" stroke="#28523E" stroke-width="1.3"/>
    <rect width="216" height="5" rx="2" fill="#2ECC71"/>
    <text x="108" y="38" font-family="'Plus Jakarta Sans', Arial, sans-serif" font-size="14" font-weight="800" letter-spacing="1" fill="#C5A880" text-anchor="middle">STRATEGIC OUTCOMES</text>
    <text x="108" y="60" font-family="'Plus Jakarta Sans', Arial, sans-serif" font-size="11.5" font-weight="600" fill="#C2D6CB" text-anchor="middle">Documented Commercial Value</text>
    <line x1="18" y1="72" x2="198" y2="72" stroke="#28523E" stroke-width="1"/>
    <text x="18" y="108" font-family="'Plus Jakarta Sans', Arial, sans-serif" font-size="12.5" font-weight="500" fill="#FAF8F5">• Seamless Zonal Coordination</text>
    <text x="18" y="146" font-family="'Plus Jakarta Sans', Arial, sans-serif" font-size="12.5" font-weight="500" fill="#FAF8F5">• Maximized Seating Yield</text>
    <text x="18" y="184" font-family="'Plus Jakarta Sans', Arial, sans-serif" font-size="12.5" font-weight="500" fill="#FAF8F5">• Capital Asset Preservation</text>
    <text x="18" y="222" font-family="'Plus Jakarta Sans', Arial, sans-serif" font-size="12.5" font-weight="500" fill="#FAF8F5">• Full Statutory Compliance</text>
    <text x="18" y="260" font-family="'Plus Jakarta Sans', Arial, sans-serif" font-size="12.5" font-weight="500" fill="#FAF8F5">• Prolonged Asset Lifecycles</text>
    <rect x="20" y="304" width="176" height="30" rx="5" fill="#132A1F" stroke="#2ECC71" stroke-width="1"/>
    <text x="108" y="323" font-family="'Plus Jakarta Sans', Arial, sans-serif" font-size="11" font-weight="700" letter-spacing="0.5" fill="#2ECC71" text-anchor="middle">MEASURABLE ROI</text>
  </g>

  <!-- Bottom Baseline Note -->
  <text x="500" y="495" font-family="'Plus Jakarta Sans', Arial, sans-serif" font-size="13.5" font-weight="700" letter-spacing="2" fill="#C2D6CB" text-anchor="middle">UNIFIED SERVICE LEVEL AGREEMENT (SLA) • SINGLE-POINT EXECUTIVE ACCOUNTABILITY</text>
</svg>`;


// DIAGRAM 4: THE CONNECTED HOSPITALITY ENVIRONMENT CONTINUUM (Optimized layout, balanced outcome banner)
const diagram4 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 560" width="100%" height="100%">
  <defs>
    <linearGradient id="grad4Final" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#214634"/>
      <stop offset="100%" stop-color="#132A1F"/>
    </linearGradient>
    <filter id="shadow4" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="6" stdDeviation="8" flood-color="#091710" flood-opacity="0.4"/>
    </filter>
  </defs>

  <rect width="1000" height="560" rx="10" fill="#132A1F"/>
  <rect x="2" y="2" width="996" height="556" rx="8" fill="none" stroke="#28523E" stroke-width="1.5"/>

  <!-- Diagram Header -->
  <text x="50" y="44" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" font-weight="700" letter-spacing="3" fill="#C5A880">INTEGRATION 04 • HOLISTIC DIMENSIONS</text>
  <text x="50" y="78" font-family="'Cormorant Garamond', Georgia, serif" font-size="30" font-weight="600" fill="#FAF8F5">The Connected Hospitality Environment Continuum</text>

  <!-- 4 Input Pillar Cards Across Width -->
  <!-- Pillar 1: PHYSICAL -->
  <g transform="translate(30, 110)" filter="url(#shadow4)">
    <rect width="206" height="240" rx="7" fill="#1B3B2B" stroke="#28523E" stroke-width="1.3"/>
    <rect width="206" height="5" rx="2" fill="#C5A880"/>
    <text x="103" y="36" font-family="'Plus Jakarta Sans', sans-serif" font-size="18" font-weight="800" fill="#C5A880" text-anchor="middle">PHYSICAL</text>
    <text x="103" y="58" font-family="'Plus Jakarta Sans', sans-serif" font-size="15.5" font-weight="700" fill="#FAF8F5" text-anchor="middle">ENVIRONMENT</text>
    <line x1="16" y1="70" x2="190" y2="70" stroke="#28523E" stroke-width="1"/>
    <text x="16" y="100" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" fill="#DCE8E1">• Hand-Rubbed Tables</text>
    <text x="16" y="132" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" fill="#DCE8E1">• Acoustic Banquettes</text>
    <text x="16" y="164" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" fill="#DCE8E1">• AfriShades Cantilevers</text>
    <text x="16" y="196" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" fill="#DCE8E1">• Weather Protection</text>
  </g>

  <!-- Plus 1 -->
  <text x="254" y="235" font-family="'Plus Jakarta Sans', sans-serif" font-size="28" font-weight="800" fill="#C5A880" text-anchor="middle">+</text>

  <!-- Pillar 2: OPERATIONS -->
  <g transform="translate(272, 110)" filter="url(#shadow4)">
    <rect width="206" height="240" rx="7" fill="#1B3B2B" stroke="#28523E" stroke-width="1.3"/>
    <rect width="206" height="5" rx="2" fill="#C5A880"/>
    <text x="103" y="36" font-family="'Plus Jakarta Sans', sans-serif" font-size="18" font-weight="800" fill="#C5A880" text-anchor="middle">OPERATIONS &amp;</text>
    <text x="103" y="58" font-family="'Plus Jakarta Sans', sans-serif" font-size="15.5" font-weight="700" fill="#FAF8F5" text-anchor="middle">MAINTENANCE</text>
    <line x1="16" y1="70" x2="190" y2="70" stroke="#28523E" stroke-width="1"/>
    <text x="16" y="100" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" fill="#DCE8E1">• Kitchen Extraction Ducts</text>
    <text x="16" y="132" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" fill="#DCE8E1">• Refrigeration &amp; HVAC</text>
    <text x="16" y="164" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" fill="#DCE8E1">• Scheduled Maintenance</text>
    <text x="16" y="196" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" fill="#DCE8E1">• Mobile Rapid Workshop</text>
  </g>

  <!-- Plus 2 -->
  <text x="496" y="235" font-family="'Plus Jakarta Sans', sans-serif" font-size="28" font-weight="800" fill="#C5A880" text-anchor="middle">+</text>

  <!-- Pillar 3: SAFETY & COMPLIANCE -->
  <g transform="translate(514, 110)" filter="url(#shadow4)">
    <rect width="206" height="240" rx="7" fill="#1B3B2B" stroke="#28523E" stroke-width="1.3"/>
    <rect width="206" height="5" rx="2" fill="#C5A880"/>
    <text x="103" y="36" font-family="'Plus Jakarta Sans', sans-serif" font-size="18" font-weight="800" fill="#C5A880" text-anchor="middle">SAFETY &amp;</text>
    <text x="103" y="58" font-family="'Plus Jakarta Sans', sans-serif" font-size="15.5" font-weight="700" fill="#FAF8F5" text-anchor="middle">COMPLIANCE</text>
    <line x1="16" y1="70" x2="190" y2="70" stroke="#28523E" stroke-width="1"/>
    <text x="16" y="100" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" fill="#DCE8E1">• SANS 1850 Alignment</text>
    <text x="16" y="132" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" fill="#DCE8E1">• Food Hygiene HACCP Logs</text>
    <text x="16" y="164" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" fill="#DCE8E1">• Fire Egress Inspections</text>
    <text x="16" y="196" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" fill="#DCE8E1">• Professional Uniforms</text>
  </g>

  <!-- Plus 3 -->
  <text x="738" y="235" font-family="'Plus Jakarta Sans', sans-serif" font-size="28" font-weight="800" fill="#C5A880" text-anchor="middle">+</text>

  <!-- Pillar 4: DIGITAL EXPERIENCE -->
  <g transform="translate(756, 110)" filter="url(#shadow4)">
    <rect width="214" height="240" rx="7" fill="#1B3B2B" stroke="#28523E" stroke-width="1.3"/>
    <rect width="214" height="5" rx="2" fill="#C5A880"/>
    <text x="107" y="36" font-family="'Plus Jakarta Sans', sans-serif" font-size="18" font-weight="800" fill="#C5A880" text-anchor="middle">DIGITAL</text>
    <text x="107" y="58" font-family="'Plus Jakarta Sans', sans-serif" font-size="15.5" font-weight="700" fill="#FAF8F5" text-anchor="middle">EXPERIENCE</text>
    <line x1="16" y1="70" x2="198" y2="70" stroke="#28523E" stroke-width="1"/>
    <text x="16" y="100" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" fill="#DCE8E1">• Interactive QR Menus</text>
    <text x="16" y="132" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" fill="#DCE8E1">• AI Guest Communications</text>
    <text x="16" y="164" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" fill="#DCE8E1">• Local SEO &amp; AEO Presence</text>
    <text x="16" y="196" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" fill="#DCE8E1">• Guest Dining Telemetry</text>
  </g>

  <!-- Downward Flow Banner (= Unified Outcome) -->
  <g transform="translate(30, 375)" filter="url(#shadow4)">
    <rect width="940" height="126" rx="8" fill="url(#grad4Final)" stroke="#C5A880" stroke-width="2"/>
    <text x="470" y="36" font-family="'Plus Jakarta Sans', sans-serif" font-size="21" font-weight="800" letter-spacing="3" fill="#C5A880" text-anchor="middle">= THE CONNECTED HOSPITALITY ENVIRONMENT</text>
    <line x1="100" y1="48" x2="840" y2="48" stroke="#316149" stroke-width="1"/>
    <g transform="translate(30, 60)">
      <rect x="0" y="0" width="205" height="46" rx="5" fill="#132A1F" stroke="#28523E" stroke-width="1"/>
      <text x="102" y="29" font-family="'Plus Jakarta Sans', sans-serif" font-size="15" font-weight="700" fill="#FAF8F5" text-anchor="middle">Expanded Seating Capacity</text>

      <rect x="225" y="0" width="205" height="46" rx="5" fill="#132A1F" stroke="#28523E" stroke-width="1"/>
      <text x="327" y="29" font-family="'Plus Jakarta Sans', sans-serif" font-size="15" font-weight="700" fill="#FAF8F5" text-anchor="middle">Extended Guest Dwell Time</text>

      <rect x="450" y="0" width="205" height="46" rx="5" fill="#132A1F" stroke="#28523E" stroke-width="1"/>
      <text x="552" y="29" font-family="'Plus Jakarta Sans', sans-serif" font-size="15" font-weight="700" fill="#FAF8F5" text-anchor="middle">Physical Asset Longevity</text>

      <rect x="675" y="0" width="205" height="46" rx="5" fill="#132A1F" stroke="#28523E" stroke-width="1"/>
      <text x="777" y="29" font-family="'Plus Jakarta Sans', sans-serif" font-size="15" font-weight="700" fill="#C5A880" text-anchor="middle">Executive Peace of Mind</text>
    </g>
  </g>

  <!-- Baseline Caption -->
  <text x="500" y="535" font-family="'Plus Jakarta Sans', sans-serif" font-size="15" font-weight="600" letter-spacing="2" fill="#C2D6CB" text-anchor="middle">YOUR PHYSICAL VENUE AND DIGITAL PRESENCE TELL THE SAME STORY</text>
</svg>`;

fs.writeFileSync(path.join(outDir, 'diagram_01_ecosystem.svg'), diagram1);
fs.writeFileSync(path.join(outDir, 'diagram_02_cycle.svg'), diagram2);
fs.writeFileSync(path.join(outDir, 'diagram_03_partner_model.svg'), diagram3);
fs.writeFileSync(path.join(outDir, 'diagram_04_continuum.svg'), diagram4);

console.log('Successfully re-generated all 4 precision-fitted vector diagrams in public/images/diagrams/!');
