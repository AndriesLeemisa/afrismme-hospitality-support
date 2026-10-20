const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer-core');
const { loadAllAssets, rootDir } = require('./pdf_asset_helper');

async function generateSalesBrochure() {
  console.log('Loading assets for Premium Sales Brochure...');
  const assets = loadAllAssets();

  const css = `
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;600&display=swap');

    @page {
      size: A4 portrait;
      margin: 0;
    }
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    body {
      font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      color: #132A1F;
      background: #FAF8F5;
      -webkit-font-smoothing: antialiased;
      line-height: 1.4;
    }

    .page {
      width: 210mm;
      height: 297mm;
      padding: 16mm 18mm;
      position: relative;
      page-break-after: always;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      background: #FAF8F5;
      overflow: hidden;
    }

    .page.dark {
      background: #1B3B2B;
      color: #FAF8F5;
    }

    .doc-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 3mm;
      border-bottom: 1px solid rgba(197, 168, 128, 0.35);
      margin-bottom: 4mm;
      font-size: 7.5pt;
      font-weight: 700;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: #C5A880;
    }
    .page.dark .doc-header {
      border-bottom: 1px solid rgba(197, 168, 128, 0.25);
    }

    .doc-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 3.5mm;
      border-top: 1px solid rgba(197, 168, 128, 0.35);
      margin-top: 4mm;
      font-size: 7pt;
      color: #7A8191;
      font-family: 'JetBrains Mono', monospace;
      letter-spacing: 1px;
    }
    .page.dark .doc-footer {
      border-top: 1px solid rgba(197, 168, 128, 0.25);
      color: #6C7383;
    }

    .eyebrow {
      font-size: 8pt;
      font-weight: 700;
      letter-spacing: 2.5px;
      text-transform: uppercase;
      color: #C5A880;
      margin-bottom: 1.5mm;
      display: inline-flex;
      align-items: center;
      gap: 6px;
    }
    .eyebrow::before {
      content: '';
      display: inline-block;
      width: 14px;
      height: 2px;
      background: #C5A880;
    }

    h1.display-title {
      font-family: 'Cormorant Garamond', Georgia, serif;
      font-size: 32pt;
      font-weight: 700;
      line-height: 1.05;
      color: #132A1F;
      margin-bottom: 3mm;
    }
    .page.dark h1.display-title {
      color: #FAF8F5;
    }

    h2.section-title {
      font-family: 'Cormorant Garamond', Georgia, serif;
      font-size: 24pt;
      font-weight: 600;
      line-height: 1.1;
      color: #132A1F;
      margin-bottom: 2mm;
    }
    .page.dark h2.section-title {
      color: #FAF8F5;
    }

    .lead-paragraph {
      font-size: 9.8pt;
      line-height: 1.45;
      color: #214634;
      margin-bottom: 3.5mm;
    }
    .page.dark .lead-paragraph {
      color: #E5DEC9;
    }

    .card {
      background: #FFFFFF;
      border: 1px solid #E6E2DB;
      border-radius: 4px;
      padding: 3.5mm 4mm;
    }
    .page.dark .card {
      background: #132A1F;
      border: 1px solid #28523E;
    }
    .card.highlight {
      border-left: 3px solid #C5A880;
    }

    .img-box {
      width: 100%;
      border-radius: 3px;
      overflow: hidden;
      position: relative;
      background: #132A1F;
      border: 1px solid rgba(197, 168, 128, 0.25);
    }
    .img-box img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
    .img-caption {
      font-size: 6.8pt;
      color: #7E8594;
      font-family: 'JetBrains Mono', monospace;
      margin-top: 1.5mm;
      display: flex;
      justify-content: space-between;
    }

    .badge {
      display: inline-block;
      padding: 2px 7px;
      border-radius: 2px;
      font-size: 6.8pt;
      font-weight: 700;
      letter-spacing: 1.2px;
      text-transform: uppercase;
      background: rgba(197, 168, 128, 0.15);
      color: #9E7D4E;
      border: 1px solid rgba(197, 168, 128, 0.35);
      margin-bottom: 2mm;
    }
    .page.dark .badge {
      color: #C5A880;
    }

    /* Before / After Pair Grid */
    .ba-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4mm;
      margin-bottom: 3.5mm;
    }
    .ba-pane {
      position: relative;
    }
    .ba-tag {
      position: absolute;
      top: 3mm;
      left: 3mm;
      background: rgba(19, 42, 31, 0.88);
      border: 1px solid rgba(255,255,255,0.2);
      color: #FAF8F5;
      font-size: 6.5pt;
      font-weight: 700;
      letter-spacing: 1px;
      padding: 1.5mm 3mm;
      border-radius: 2px;
      text-transform: uppercase;
      backdrop-filter: blur(4px);
      z-index: 2;
    }
    .ba-tag.after {
      background: rgba(197, 168, 128, 0.9);
      color: #132A1F;
      border-color: #C5A880;
    }

    .metrics-bar {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 3mm;
      margin-top: 2.5mm;
    }
    .metric-item {
      background: #FFFFFF;
      border: 1px solid #E6E2DB;
      padding: 2.5mm 3mm;
      border-radius: 3px;
    }
    .page.dark .metric-item {
      background: #132A1F;
      border-color: #28523E;
    }
    .metric-title {
      font-size: 6.5pt;
      color: #8E95A5;
      text-transform: uppercase;
      font-weight: 700;
      letter-spacing: 0.8px;
    }
    .metric-value {
      font-size: 8.5pt;
      font-weight: 700;
      color: #C5A880;
      margin-top: 0.5mm;
    }

    table.matrix-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 7.5pt;
      margin-top: 2mm;
    }
    table.matrix-table th {
      background: #1B3B2B;
      color: #C5A880;
      text-align: left;
      padding: 2.8mm 3mm;
      font-weight: 700;
      letter-spacing: 1.2px;
      text-transform: uppercase;
      border-bottom: 1.5px solid #C5A880;
      font-size: 7pt;
    }
    table.matrix-table td {
      padding: 2.5mm 3mm;
      border-bottom: 1px solid #E6E2DB;
      color: #214634;
      vertical-align: top;
    }
    .page.dark table.matrix-table td {
      border-bottom: 1px solid #28523E;
      color: #C2D6CB;
    }
  `;

  const pages = [
    // PAGE 01: COVER
    `
    <div class="page dark" style="justify-content: space-between; padding: 18mm 20mm; background: radial-gradient(circle at 80% 20%, #28523E 0%, #132A1F 100%);">
      <div style="display: flex; justify-content: space-between; align-items: flex-start;">
        <div>
          <div style="font-size: 9pt; font-weight: 800; letter-spacing: 4px; color: #C5A880; text-transform: uppercase; margin-bottom: 2mm;">AFRISMME HUB</div>
          <div style="font-size: 7.5pt; font-weight: 600; letter-spacing: 2px; color: #C2D6CB; text-transform: uppercase;">HOSPITALITY SUPPORT ECOSYSTEM</div>
        </div>
        <div style="border: 1px solid rgba(197,168,128,0.4); padding: 2mm 4mm; border-radius: 2px; text-align: right;">
          <div style="font-size: 6.5pt; font-family: 'JetBrains Mono', monospace; color: #C5A880; letter-spacing: 1.5px;">SALES BROCHURE</div>
          <div style="font-size: 6.5pt; font-family: 'JetBrains Mono', monospace; color: #FFFFFF;">EXECUTIVE LEAVE-BEHIND</div>
        </div>
      </div>

      <div style="margin: 6mm 0;">
        <div class="img-box" style="height: 104mm; border: 1px solid rgba(197,168,128,0.4); box-shadow: 0 15px 35px rgba(0,0,0,0.45);">
          <img src="${assets.cantileverLuxury}" alt="Luxury Restaurant Terrace with Commercial Cantilever Umbrellas" />
        </div>
        <div class="img-caption">
          <span>REPRESENTATIVE VISUALISATION • COMMERCIAL CANTILEVER SHADE &amp; LUXURY TERRACE</span>
          <span>PHASED &amp; SCHEDULED DELIVERY</span>
        </div>
      </div>

      <div>
        <div style="display: inline-block; padding: 1.5mm 3.5mm; background: rgba(197,168,128,0.15); border: 1px solid #C5A880; border-radius: 2px; margin-bottom: 3.5mm;">
          <span style="font-size: 7.5pt; font-weight: 700; letter-spacing: 2.5px; color: #C5A880; text-transform: uppercase;">ONE PARTNER • ONE ECOSYSTEM</span>
        </div>
        <h1 class="display-title" style="font-size: 32pt; margin-bottom: 2.5mm;">
          A Better Hospitality Environment.<br/>
          <span style="font-style: italic; color: #C5A880;">Delivered Without Disruption.</span>
        </h1>
        <p class="lead-paragraph" style="font-size: 10pt; max-width: 155mm; color: #E5DEC9; margin-bottom: 5mm;">
          Turnkey terrace architecture, acoustic dining comfort, artisanal furniture restoration, preventative maintenance, compliance, and digital hospitality systems.
        </p>
        <div style="display: flex; gap: 8mm; border-top: 1px solid rgba(197,168,128,0.3); padding-top: 3.5mm; font-size: 7.2pt; font-family: 'JetBrains Mono', monospace; color: #C2D6CB;">
          <span>SCHEDULED DAYTIME WINDOWS</span>
          <span>•</span>
          <span>FOOD-SAFE ZERO-VOC CURED</span>
          <span>•</span>
          <span>SANS 10400 COMPLIANT</span>
        </div>
      </div>

      <div class="doc-footer">
        <div>AFRISMME HUB • PREMIUM SALES BROCHURE</div>
        <div>PAGE 01 OF 12</div>
      </div>
    </div>
    `,

    // PAGE 02: THE PROBLEM
    `
    <div class="page">
      <div class="doc-header">
        <span class="brand-left">AFRISMME HUB • HOSPITALITY SUPPORT ECOSYSTEM</span>
        <span class="section-tag">THE PROBLEM</span>
      </div>
      <div class="content-area">
        <span class="eyebrow">The Operational Challenge</span>
        <h2 class="section-title">“Hospitality Should Not Require Ten Different Contractors.”</h2>
        <p class="lead-paragraph">
          High-traffic dining rooms, hotel terraces, and safari decks suffer severe physical degradation. Managing disconnected single-trade contractors bleeds operational time and guest revenue.
        </p>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 4mm; margin-bottom: 4mm;">
          <div class="card" style="background: #FFF9F9; border-color: #F0D5D5;">
            <div style="font-size: 8pt; font-weight: 800; color: #C0392B; letter-spacing: 1.5px; text-transform: uppercase; margin-bottom: 2mm;">The Contractor Fragmentation Crisis</div>
            <ul style="font-size: 8pt; color: #5C4A4A; line-height: 1.6; margin-left: 4mm;">
              <li><strong>Conflicting Trades:</strong> Upholsterers, carpenters, and extraction cleaners clash on site.</li>
              <li><strong>Lost Trading Covers:</strong> Uncoordinated contractors disrupt peak dining hours and force unplanned closures.</li>
              <li><strong>Disputed Liability:</strong> No single entity takes accountability when repairs degrade prematurely.</li>
              <li><strong>General Manager Drain:</strong> Up to 15 hours weekly spent vetting invoices and chasing artisans.</li>
              <li><strong>Inconsistent Quality:</strong> Uneven finishes erode menu pricing power and brand prestige.</li>
            </ul>
          </div>

          <div class="card" style="background: #F7FAF8; border-color: #D2E4D8;">
            <div style="font-size: 8pt; font-weight: 800; color: #27AE60; letter-spacing: 1.5px; text-transform: uppercase; margin-bottom: 2mm;">The Coordinated AfriSMME Model</div>
            <ul style="font-size: 8pt; color: #3E5346; line-height: 1.6; margin-left: 4mm;">
              <li><strong>Single Account Executive:</strong> One contact, one SLA, one itemized consolidated invoice.</li>
              <li><strong>Phased &amp; Scheduled Execution:</strong> Planned daytime maintenance windows and batch workshop restoration.</li>
              <li><strong>Master Warranty:</strong> Full commercial insurance and unified structural warranty across all trades.</li>
              <li><strong>Operational Freedom:</strong> General managers focus entirely on guest service and hospitality.</li>
              <li><strong>Architectural Harmony:</strong> Unified standards from facade signage to dining table oil finish.</li>
            </ul>
          </div>
        </div>

        <div class="img-box" style="height: 52mm; margin-top: auto;">
          <img src="${assets.cantileverPatioDining}" alt="Revenue-Generating Hospitality Terrace" />
        </div>
        <div class="img-caption">
          <span>REPRESENTATIVE VISUALISATION • REVENUE-GENERATING HOSPITALITY TERRACE</span>
          <span>SEAMLESS COMFORT • FLAWLESS PRESENTATION</span>
        </div>
      </div>
      <div class="doc-footer">
        <div>AFRISMME HUB • PREMIUM SALES BROCHURE</div>
        <div>PAGE 02 OF 12</div>
      </div>
    </div>
    `,

    // PAGE 03: THE SOLUTION
    `
    <div class="page dark">
      <div class="doc-header">
        <span class="brand-left">AFRISMME HUB • HOSPITALITY SUPPORT ECOSYSTEM</span>
        <span class="section-tag">THE SOLUTION</span>
      </div>
      <div class="content-area">
        <span class="eyebrow">The Coordinated Solution</span>
        <h2 class="section-title">One Coordinated Ecosystem for Your Property</h2>
        <p class="lead-paragraph">
          AfriSMME Hub unifies six critical support pillars under a single consultative governance umbrella. We diagnose, prioritize, execute in coordinated phases, and maintain.
        </p>

        <div class="diagram-wrapper" style="margin-bottom: 4mm;">
          <img src="${assets.diagram01}" alt="AfriSMME Support Ecosystem Diagram" />
        </div>

        <div class="grid-3" style="margin-top: auto;">
          <div class="card">
            <div style="font-size: 16pt; font-family: 'Cormorant Garamond', Georgia, serif; font-weight: 700; color: #C5A880; line-height: 1;">01</div>
            <div style="font-size: 9pt; font-weight: 700; color: #FAF8F5; margin-top: 1mm;">Assess &amp; Prioritise</div>
            <p style="font-size: 7.5pt; color: #C2D6CB; margin: 1mm 0 0 0; line-height: 1.4;">
              Comprehensive 10-point diagnostic audit identifying high-impact interventions.
            </p>
          </div>
          <div class="card">
            <div style="font-size: 16pt; font-family: 'Cormorant Garamond', Georgia, serif; font-weight: 700; color: #C5A880; line-height: 1;">02</div>
            <div style="font-size: 9pt; font-weight: 700; color: #FAF8F5; margin-top: 1mm;">Phased Delivery</div>
            <p style="font-size: 7.5pt; color: #C2D6CB; margin: 1mm 0 0 0; line-height: 1.4;">
              Master craftsmen and technicians operate during scheduled daytime windows and off-site batches.
            </p>
          </div>
          <div class="card">
            <div style="font-size: 16pt; font-family: 'Cormorant Garamond', Georgia, serif; font-weight: 700; color: #C5A880; line-height: 1;">03</div>
            <div style="font-size: 9pt; font-weight: 700; color: #FAF8F5; margin-top: 1mm;">Continuous Care</div>
            <p style="font-size: 7.5pt; color: #C2D6CB; margin: 1mm 0 0 0; line-height: 1.4;">
              Scheduled monthly maintenance, kitchen extraction care, and sub-60m rapid dispatch.
            </p>
          </div>
        </div>
      </div>
      <div class="doc-footer">
        <div>AFRISMME HUB • PREMIUM SALES BROCHURE</div>
        <div>PAGE 03 OF 12</div>
      </div>
    </div>
    `,

    // PAGE 04: THE SIX PILLARS OVERVIEW
    `
    <div class="page">
      <div class="doc-header">
        <span class="brand-left">AFRISMME HUB • SERVICE ARCHITECTURE</span>
        <span class="section-tag">THE SIX PILLARS</span>
      </div>
      <div class="content-area">
        <span class="eyebrow">Comprehensive Capabilities</span>
        <h2 class="section-title">The Six Support Pillars at a Glance</h2>
        <p class="lead-paragraph">
          Structured to address every touchpoint of the physical dining environment, back-of-house operations, and digital guest acquisition.
        </p>

        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 3.5mm; margin-bottom: 3.5mm;">
          <div class="card highlight" style="padding: 3mm 3.5mm;">
            <div style="display: flex; justify-content: space-between;">
              <strong style="color: #C5A880; font-size: 8.5pt;">01 ATTRACT</strong>
              <span class="badge" style="margin: 0; padding: 1px 5px;">Afrishades</span>
            </div>
            <div style="font-size: 9pt; font-weight: 700; color: #132A1F; margin-top: 0.5mm;">Exterior, Shade &amp; First Impressions</div>
            <p style="font-size: 7.6pt; color: #28523E; margin: 1mm 0 0 0; line-height: 1.4;">
              Heavy-duty commercial cantilevers, architectural brass signage, windbreaks, and exterior lighting that convert outdoor space into year-round covers.
            </p>
          </div>

          <div class="card highlight" style="padding: 3mm 3.5mm;">
            <div style="display: flex; justify-content: space-between;">
              <strong style="color: #C5A880; font-size: 8.5pt;">02 ENHANCE</strong>
              <span class="badge" style="margin: 0; padding: 1px 5px;">Acoustics</span>
            </div>
            <div style="font-size: 9pt; font-weight: 700; color: #132A1F; margin-top: 0.5mm;">Acoustics, Banquettes &amp; Comfort</div>
            <p style="font-size: 7.6pt; color: #28523E; margin: 1mm 0 0 0; line-height: 1.4;">
              Discrete sound absorption panels, custom leather banquettes, and spatial zoning that eliminate harsh dining noise and extend table dwell time.
            </p>
          </div>

          <div class="card highlight" style="padding: 3mm 3.5mm;">
            <div style="display: flex; justify-content: space-between;">
              <strong style="color: #C5A880; font-size: 8.5pt;">03 RESTORE</strong>
              <span class="badge" style="margin: 0; padding: 1px 5px;">The Wood Doctor</span>
            </div>
            <div style="font-size: 9pt; font-weight: 700; color: #132A1F; margin-top: 0.5mm;">Furniture, Timber, Cane &amp; Upholstery</div>
            <p style="font-size: 7.6pt; color: #28523E; margin: 1mm 0 0 0; line-height: 1.4;">
              Tables, cane armchairs, and leather seats renewed in scheduled batches with food-safe zero-VOC natural hardwax oils. Saves 80% vs new imports.
            </p>
          </div>

          <div class="card highlight" style="padding: 3mm 3.5mm;">
            <div style="display: flex; justify-content: space-between;">
              <strong style="color: #C5A880; font-size: 8.5pt;">04 MAINTAIN</strong>
              <span class="badge" style="margin: 0; padding: 1px 5px;">Rapid Fleet</span>
            </div>
            <div style="font-size: 9pt; font-weight: 700; color: #132A1F; margin-top: 0.5mm;">Preventative Facility Care &amp; Extraction</div>
            <p style="font-size: 7.6pt; color: #28523E; margin: 1mm 0 0 0; line-height: 1.4;">
              Commercial kitchen hoods, duct degreasing, cold-chain refrigeration checks, and emergency mobile workshop fleet dispatch.
            </p>
          </div>

          <div class="card highlight" style="padding: 3mm 3.5mm;">
            <div style="display: flex; justify-content: space-between;">
              <strong style="color: #C5A880; font-size: 8.5pt;">05 PROTECT</strong>
              <span class="badge" style="margin: 0; padding: 1px 5px;">AfriHealth</span>
            </div>
            <div style="font-size: 9pt; font-weight: 700; color: #132A1F; margin-top: 0.5mm;">Safety, Compliance &amp; HACCP Shield</div>
            <p style="font-size: 7.6pt; color: #28523E; margin: 1mm 0 0 0; line-height: 1.4;">
              SANS 10400 fire safety, municipal health inspection readiness, gas isolation compliance, and tailored front-of-house staff uniforms.
            </p>
          </div>

          <div class="card highlight" style="padding: 3mm 3.5mm;">
            <div style="display: flex; justify-content: space-between;">
              <strong style="color: #C5A880; font-size: 8.5pt;">06 GROW</strong>
              <span class="badge" style="margin: 0; padding: 1px 5px;">Scinovalities</span>
            </div>
            <div style="font-size: 9pt; font-weight: 700; color: #132A1F; margin-top: 0.5mm;">Digital Systems, AI, Menus &amp; Yield</div>
            <p style="font-size: 7.6pt; color: #28523E; margin: 1mm 0 0 0; line-height: 1.4;">
              Modern web platforms, interactive smart menus, AI guest concierges, local SEO, and dining room seat yield density modeling.
            </p>
          </div>
        </div>

        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 3mm; margin-bottom: 3.5mm;">
          <div style="position: relative;">
            <div class="img-box" style="height: 25mm;">
              <img src="${assets.cantileverEngDetail}" alt="Pillar 01 Cantilever Shade Rigging" />
            </div>
            <div style="font-size: 6.2pt; color: #8E95A5; font-family: 'JetBrains Mono', monospace; margin-top: 1mm; text-align: center;">01 ATTRACT • CANTILEVER</div>
          </div>
          <div style="position: relative;">
            <div class="img-box" style="height: 25mm;">
              <img src="${assets.luxuryBanquetteAfter}" alt="Pillar 02 Fluted Leather Banquettes" />
            </div>
            <div style="font-size: 6.2pt; color: #8E95A5; font-family: 'JetBrains Mono', monospace; margin-top: 1mm; text-align: center;">02 ENHANCE • BANQUETTES</div>
          </div>
          <div style="position: relative;">
            <div class="img-box" style="height: 25mm;">
              <img src="${assets.luxuryTeakAfter}" alt="Pillar 03 Master Hardwood Restoration" />
            </div>
            <div style="font-size: 6.2pt; color: #8E95A5; font-family: 'JetBrains Mono', monospace; margin-top: 1mm; text-align: center;">03 RESTORE • TEAK CARE</div>
          </div>
        </div>

        <div class="card" style="background: #1B3B2B; color: #FAF8F5; margin-top: auto; padding: 2.5mm 3.5mm;">
          <div style="font-size: 7.2pt; font-weight: 700; color: #C5A880; letter-spacing: 2px; text-transform: uppercase;">The AfriSMME Commercial Advantage</div>
          <p style="font-size: 7.8pt; color: #E5DEC9; margin: 0.8mm 0 0 0; line-height: 1.35;">
            All six pillars are managed under a single unified SLA with itemized pricing, phased scheduling, and guaranteed service-ready handovers.
          </p>
        </div>
      </div>
      <div class="doc-footer">
        <div>AFRISMME HUB • PREMIUM SALES BROCHURE</div>
        <div>PAGE 04 OF 12</div>
      </div>
    </div>
    `,

    // PAGE 05: TRANSFORMATION I: TEAK & HARDWOOD
    `
    <div class="page">
      <div class="doc-header">
        <span class="brand-left">AFRISMME HUB • PROVEN TRANSFORMATIONS</span>
        <span class="section-tag">TRANSFORMATION 01</span>
      </div>
      <div class="content-area">
        <span class="eyebrow">Before &amp; After Case History</span>
        <h2 class="section-title">Solid Teak &amp; Hardwood Furniture Renewal</h2>
        <p class="lead-paragraph">
          Restoring dining tables and chairs in phased batches with minimal service disruption, non-toxic zero-VOC curing, and an 80% CapEx savings versus purchasing new imports.
        </p>

        <div class="ba-grid">
          <div class="ba-pane">
            <div class="ba-tag">BEFORE • UV SUN-BLEACHED &amp; DRIED PATINA</div>
            <div class="img-box" style="height: 66mm;">
              <img src="${assets.luxuryTeakBefore}" alt="Teak Dining Set Before Restoration" />
            </div>
            <div class="card" style="margin-top: 2.5mm; padding: 2.5mm 3mm;">
              <p style="font-size: 7.5pt; color: #555C6B; margin: 0; line-height: 1.4;">
                <strong>Problem:</strong> Sun-bleached grain, wine glass rings, drying micro-fissures, and degraded finish on commercial dining patio.
              </p>
            </div>
          </div>

          <div class="ba-pane">
            <div class="ba-tag after">AFTER • NOURISHING HARDWAX OIL SATIN SHIELD</div>
            <div class="img-box" style="height: 66mm;">
              <img src="${assets.luxuryTeakAfter}" alt="Teak Dining Set After Restoration" />
            </div>
            <div class="card" style="margin-top: 2.5mm; padding: 2.5mm 3mm; border-left: 3px solid #C5A880;">
              <p style="font-size: 7.5pt; color: #383D48; margin: 0; line-height: 1.4;">
                <strong>Solution:</strong> Deep pore cleansing, precision micro-sanding, and hand-rubbed food-safe zero-VOC Danish hardwax oil restoring glowing golden luster.
              </p>
            </div>
          </div>
        </div>

        <div class="metrics-bar" style="margin-top: auto;">
          <div class="metric-item">
            <div class="metric-title">Turnaround Model</div>
            <div class="metric-value">Phased Batches</div>
          </div>
          <div class="metric-item">
            <div class="metric-title">Capital Savings</div>
            <div class="metric-value">80% vs New Teak</div>
          </div>
          <div class="metric-item">
            <div class="metric-title">Food Safety Standard</div>
            <div class="metric-value">Zero-VOC Certified</div>
          </div>
        </div>
      </div>
      <div class="doc-footer">
        <div>AFRISMME HUB • PREMIUM SALES BROCHURE</div>
        <div>PAGE 05 OF 12</div>
      </div>
    </div>
    `,

    // PAGE 06: TRANSFORMATION II: CANE & WICKER
    `
    <div class="page">
      <div class="doc-header">
        <span class="brand-left">AFRISMME HUB • PROVEN TRANSFORMATIONS</span>
        <span class="section-tag">TRANSFORMATION 02</span>
      </div>
      <div class="content-area">
        <span class="eyebrow">Before &amp; After Case History</span>
        <h2 class="section-title">Outdoor Cane &amp; Wicker Structural Hand-Weaving</h2>
        <p class="lead-paragraph">
          Artisanal hand re-weaving and tensioning of high-traffic commercial outdoor seating, preserving terrace capacity without costly chair disposals.
        </p>

        <div class="ba-grid">
          <div class="ba-pane">
            <div class="ba-tag">BEFORE • BROKEN WEAVE &amp; FRAYED CANE</div>
            <div class="img-box" style="height: 66mm;">
              <img src="${assets.luxuryWickerBefore}" alt="Wicker Armchair Before Restoration" />
            </div>
            <div class="card" style="margin-top: 2.5mm; padding: 2.5mm 3mm;">
              <p style="font-size: 7.5pt; color: #555C6B; margin: 0; line-height: 1.4;">
                <strong>Problem:</strong> Snapped strands on armrest and rim, UV-brittle rattan, and loose weave snagging guest attire and eroding venue presentation.
              </p>
            </div>
          </div>

          <div class="ba-pane">
            <div class="ba-tag after">AFTER • HAND RE-WOVEN BY MASTER ARTISANS</div>
            <div class="img-box" style="height: 66mm;">
              <img src="${assets.luxuryWickerAfter}" alt="Wicker Armchair After Restoration" />
            </div>
            <div class="card" style="margin-top: 2.5mm; padding: 2.5mm 3mm; border-left: 3px solid #C5A880;">
              <p style="font-size: 7.5pt; color: #383D48; margin: 0; line-height: 1.4;">
                <strong>Solution:</strong> Re-tensioned and hand-woven with high-tensile all-weather synthetic cane peel by master female artisans at our Sandton atelier.
              </p>
            </div>
          </div>
        </div>

        <div class="metrics-bar" style="margin-top: auto;">
          <div class="metric-item">
            <div class="metric-title">Batch Logistics</div>
            <div class="metric-value">Phased Collection</div>
          </div>
          <div class="metric-item">
            <div class="metric-title">Structural Durability</div>
            <div class="metric-value">Commercial UV-Resistant</div>
          </div>
          <div class="metric-item">
            <div class="metric-title">Replacement Savings</div>
            <div class="metric-value">75% vs Imported Cane</div>
          </div>
        </div>
      </div>
      <div class="doc-footer">
        <div>AFRISMME HUB • PREMIUM SALES BROCHURE</div>
        <div>PAGE 06 OF 12</div>
      </div>
    </div>
    `,

    // PAGE 07: TRANSFORMATION III: DUSTLESS FLOOR SANDING
    `
    <div class="page">
      <div class="doc-header">
        <span class="brand-left">AFRISMME HUB • PROVEN TRANSFORMATIONS</span>
        <span class="section-tag">TRANSFORMATION 03</span>
      </div>
      <div class="content-area">
        <span class="eyebrow">Before &amp; After Case History</span>
        <h2 class="section-title">Dustless Hardwood Dining Floor Restoration</h2>
        <p class="lead-paragraph">
          Industrial HEPA-extracted sanding and commercial polyurethane sealing executed during scheduled maintenance windows with zero airborne dust contamination on tables or glassware.
        </p>

        <div class="ba-grid">
          <div class="ba-pane">
            <div class="ba-tag">BEFORE • HEAVY SCUFFS &amp; WORN SERVICE LANES</div>
            <div class="img-box" style="height: 66mm;">
              <img src="${assets.luxuryFloorBefore}" alt="Restaurant Hardwood Floor Before Restoration" />
            </div>
            <div class="card" style="margin-top: 2.5mm; padding: 2.5mm 3mm;">
              <p style="font-size: 7.5pt; color: #555C6B; margin: 0; line-height: 1.4;">
                <strong>Problem:</strong> Scuffed walkways, dull graying traffic lanes, and heel gouges along dining room corridors eroding ambiance.
              </p>
            </div>
          </div>

          <div class="ba-pane">
            <div class="ba-tag after">AFTER • DUSTLESS SATIN OAK PARQUET SHIELD</div>
            <div class="img-box" style="height: 66mm;">
              <img src="${assets.luxuryFloorAfter}" alt="Pristine Michelin Grade Dining Room Floor" />
            </div>
            <div class="card" style="margin-top: 2.5mm; padding: 2.5mm 3mm; border-left: 3px solid #C5A880;">
              <p style="font-size: 7.5pt; color: #383D48; margin: 0; line-height: 1.4;">
                <strong>Solution:</strong> Scheduled HEPA-extracted multi-disc sanding and fast-curing commercial polyurethane satin seal with zero dining dust.
              </p>
            </div>
          </div>
        </div>

        <div class="metrics-bar" style="margin-top: auto;">
          <div class="metric-item">
            <div class="metric-title">Air Filtration</div>
            <div class="metric-value">99.97% HEPA Dustless</div>
          </div>
          <div class="metric-item">
            <div class="metric-title">Trading Impact</div>
            <div class="metric-value">0 Closed Shifts</div>
          </div>
          <div class="metric-item">
            <div class="metric-title">Surface Longevity</div>
            <div class="metric-value">Commercial Traffic Seal</div>
          </div>
        </div>
      </div>
      <div class="doc-footer">
        <div>AFRISMME HUB • PREMIUM SALES BROCHURE</div>
        <div>PAGE 07 OF 12</div>
      </div>
    </div>
    `,

    // PAGE 08: TRANSFORMATION IV: BANQUETTES & UPHOLSTERY
    `
    <div class="page">
      <div class="doc-header">
        <span class="brand-left">AFRISMME HUB • PROVEN TRANSFORMATIONS</span>
        <span class="section-tag">TRANSFORMATION 04</span>
      </div>
      <div class="content-area">
        <span class="eyebrow">Before &amp; After Case History</span>
        <h2 class="section-title">Commercial Banquettes &amp; Leather Upholstery</h2>
        <p class="lead-paragraph">
          Internal frame reinforcement, high-resilience memory foam replacement, and contract-grade stain-shield leather tailoring that restores luxury comfort.
        </p>

        <div class="ba-grid">
          <div class="ba-pane">
            <div class="ba-tag">BEFORE • COLLAPSED FOAM &amp; CRACKED LEATHER</div>
            <div class="img-box" style="height: 66mm;">
              <img src="${assets.luxuryBanquetteBefore}" alt="Commercial Leather Banquette Before Restoration" />
            </div>
            <div class="card" style="margin-top: 2.5mm; padding: 2.5mm 3mm;">
              <p style="font-size: 7.5pt; color: #555C6B; margin: 0; line-height: 1.4;">
                <strong>Problem:</strong> Sagged seat cushion, collapsed internal foam core, cracked leather piping, and creased seating from heavy patron turnover.
              </p>
            </div>
          </div>

          <div class="ba-pane">
            <div class="ba-tag after">AFTER • CMHR MEMORY CORE &amp; NOURISHED LEATHER</div>
            <div class="img-box" style="height: 66mm;">
              <img src="${assets.luxuryBanquetteAfter}" alt="Commercial Leather Banquette After Restoration" />
            </div>
            <div class="card" style="margin-top: 2.5mm; padding: 2.5mm 3mm; border-left: 3px solid #C5A880;">
              <p style="font-size: 7.5pt; color: #383D48; margin: 0; line-height: 1.4;">
                <strong>Solution:</strong> High-resilience CMHR contract-grade foam rebuild, reinforced tension webbing, deep-buttoned tailoring, and satin leather nourishment barrier.
              </p>
            </div>
          </div>
        </div>

        <div class="metrics-bar" style="margin-top: auto;">
          <div class="metric-item">
            <div class="metric-title">Foam Specification</div>
            <div class="metric-value">High-Resilience CMHR</div>
          </div>
          <div class="metric-item">
            <div class="metric-title">Abrasion Rating</div>
            <div class="metric-value">50,000+ Martindale</div>
          </div>
          <div class="metric-item">
            <div class="metric-title">Dwell Time Lift</div>
            <div class="metric-value">+25 Mins Average</div>
          </div>
        </div>
      </div>
      <div class="doc-footer">
        <div>AFRISMME HUB • PREMIUM SALES BROCHURE</div>
        <div>PAGE 08 OF 12</div>
      </div>
    </div>
    `,

    // PAGE 09: TRANSFORMATION V: TERRACE SHADE
    `
    <div class="page">
      <div class="doc-header">
        <span class="brand-left">AFRISMME HUB • PROVEN TRANSFORMATIONS</span>
        <span class="section-tag">TRANSFORMATION 05</span>
      </div>
      <div class="content-area">
        <span class="eyebrow">Before &amp; After Case History</span>
        <h2 class="section-title">Outdoor Terrace Shading &amp; Weather Architecture</h2>
        <p class="lead-paragraph">
          Transforming sun-bleached, wind-swept outdoor spaces into lucrative, all-weather dining rooms utilizing engineered commercial cantilever umbrella systems.
        </p>

        <div class="ba-pane" style="margin-bottom: 3.5mm;">
          <div class="ba-tag after">FLAGSHIP • 5-STAR COMMERCIAL CANTILEVER SYSTEM</div>
          <div class="img-box" style="height: 50mm;">
            <img src="${assets.cantileverLuxury}" alt="5-Star Commercial Cantilever Terrace" />
          </div>
          <div class="img-caption" style="margin-top: 1.5mm;">
            <span>360° ROTATING OFFSET MAST • 4.0M SUNBRELLA CANOPY</span>
            <span>HEAVYWEIGHT GRANITE BASE</span>
          </div>
        </div>

        <div class="ba-grid" style="margin-bottom: 2mm;">
          <div class="ba-pane">
            <div class="ba-tag">316 MARINE RIGGING • WINCH GEAR</div>
            <div class="img-box" style="height: 40mm;">
              <img src="${assets.cantileverEngDetail}" alt="Commercial Cantilever Engineering Detail" />
            </div>
            <div class="card" style="margin-top: 2mm; padding: 2mm 2.5mm;">
              <p style="font-size: 7.2pt; color: #555C6B; margin: 0; line-height: 1.35;">
                <strong>Engineering:</strong> Extruded architectural aluminum mast, 316 stainless winch gear, 8-position tilt articulation, wind-certified to 65 km/h.
              </p>
            </div>
          </div>

          <div class="ba-pane">
            <div class="ba-tag after">AMBIANCE • 2700K INTEGRATED LED RIBS</div>
            <div class="img-box" style="height: 40mm;">
              <img src="${assets.cantileverEvening}" alt="Terrace with Illuminated Cantilever Umbrellas" />
            </div>
            <div class="card" style="margin-top: 2mm; padding: 2mm 2.5mm; border-left: 3px solid #C5A880;">
              <p style="font-size: 7.2pt; color: #383D48; margin: 0; line-height: 1.35;">
                <strong>All-Day Activation:</strong> Concealed 2700K warm LED strips recessed into structural canopy ribs for continuous terrace hospitality.
              </p>
            </div>
          </div>
        </div>

        <div class="metrics-bar" style="margin-top: auto;">
          <div class="metric-item">
            <div class="metric-title">Wind Rating</div>
            <div class="metric-value">Up to 65 km/h Gusts</div>
          </div>
          <div class="metric-item">
            <div class="metric-title">UV Protection</div>
            <div class="metric-value">UPF 50+ Certified</div>
          </div>
          <div class="metric-item">
            <div class="metric-title">Capacity Impact</div>
            <div class="metric-value">+35% to 50% Covers</div>
          </div>
        </div>
      </div>
      <div class="doc-footer">
        <div>AFRISMME HUB • PREMIUM SALES BROCHURE</div>
        <div>PAGE 09 OF 12</div>
      </div>
    </div>
    `,

    // PAGE 10: WHO WE SUPPORT & THE PHASED PROMISE
    `
    <div class="page dark">
      <div class="doc-header">
        <span class="brand-left">AFRISMME HUB • HOSPITALITY SUPPORT ECOSYSTEM</span>
        <span class="section-tag">WHO WE SUPPORT</span>
      </div>
      <div class="content-area">
        <span class="eyebrow">Target Market &amp; Operations</span>
        <h2 class="section-title">Built for Africa’s Premier Hospitality Destinations</h2>
        <p class="lead-paragraph">
          We service general managers, hospitality holding groups, lodge concessionaires, and executive chefs who demand world-class standards without operational downtime.
        </p>

        <div class="grid-2" style="margin-bottom: 4mm;">
          <div class="card">
            <h3 class="card-title" style="color: #C5A880;">Who We Support</h3>
            <ul style="font-size: 8pt; color: #E5DEC9; line-height: 1.6; margin-left: 4mm;">
              <li><strong>Fine Dining &amp; Urban Bistros:</strong> Acoustic comfort and table refinishing.</li>
              <li><strong>Luxury Hotel Groups:</strong> Commercial terrace shading and preventative facility care.</li>
              <li><strong>Safari Lodges &amp; Bush Camps:</strong> Deck nourishment and remote batch maintenance.</li>
              <li><strong>Historic Wine Estates:</strong> Heritage timber joinery and all-weather parasols.</li>
              <li><strong>Multi-Site Restaurant Chains:</strong> Standardized group maintenance and priority dispatch.</li>
            </ul>
          </div>

          <div class="card" style="border-left: 3px solid #C5A880;">
            <h3 class="card-title" style="color: #C5A880;">The Scheduled Maintenance Promise</h3>
            <p style="font-size: 8pt; color: #E5DEC9; line-height: 1.5; margin-bottom: 2mm;">
              “Coordinate every intervention around your trading schedule and phased maintenance windows. Return every zone ready for service.”
            </p>
            <div style="background: rgba(0,0,0,0.2); border: 1px solid #28523E; padding: 2.5mm; border-radius: 2px;">
              <div style="font-size: 7pt; font-weight: 700; color: #C5A880; text-transform: uppercase;">The Service-Ready Guarantee</div>
              <p style="font-size: 7.2pt; color: #C2D6CB; margin: 0; line-height: 1.35;">
                Zero chemical odors, zero airborne dust, and full operational sign-off completed with your duty management team.
              </p>
            </div>
          </div>
        </div>

        <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 2.5mm; margin-bottom: 3.5mm;">
          <div style="position: relative;">
            <div class="img-box" style="height: 25mm;">
              <img src="${assets.cantileverLuxury}" alt="Luxury Hotels & Resorts" />
            </div>
            <div style="font-size: 6pt; color: #C5A880; font-family: 'JetBrains Mono', monospace; margin-top: 1mm; text-align: center;">LUXURY HOTELS</div>
          </div>
          <div style="position: relative;">
            <div class="img-box" style="height: 25mm;">
              <img src="${assets.cantileverPoolside}" alt="Historic Wine Estates" />
            </div>
            <div style="font-size: 6pt; color: #C5A880; font-family: 'JetBrains Mono', monospace; margin-top: 1mm; text-align: center;">WINE ESTATES</div>
          </div>
          <div style="position: relative;">
            <div class="img-box" style="height: 25mm;">
              <img src="${assets.luxuryFloorAfter}" alt="Fine Dining & Bistros" />
            </div>
            <div style="font-size: 6pt; color: #C5A880; font-family: 'JetBrains Mono', monospace; margin-top: 1mm; text-align: center;">FINE DINING</div>
          </div>
          <div style="position: relative;">
            <div class="img-box" style="height: 25mm;">
              <img src="${assets.ai02Safari}" alt="Safari Lodges & Bush Camps" />
            </div>
            <div style="font-size: 6pt; color: #C5A880; font-family: 'JetBrains Mono', monospace; margin-top: 1mm; text-align: center;">SAFARI LODGES</div>
          </div>
        </div>

        <div class="stat-strip" style="margin-top: auto;">
          <div class="stat-box">
            <div class="stat-val">Phased</div>
            <div class="stat-lbl">Zonal Delivery</div>
          </div>
          <div class="stat-box">
            <div class="stat-val">Daytime</div>
            <div class="stat-lbl">Scheduled Windows</div>
          </div>
          <div class="stat-box">
            <div class="stat-val">&lt;60m</div>
            <div class="stat-lbl">Emergency Response</div>
          </div>
          <div class="stat-box">
            <div class="stat-val">100%</div>
            <div class="stat-lbl">SLA Accountability</div>
          </div>
        </div>
      </div>
      <div class="doc-footer">
        <div>AFRISMME HUB • PREMIUM SALES BROCHURE</div>
        <div>PAGE 10 OF 12</div>
      </div>
    </div>
    `,

    // PAGE 11: EXECUTIVE SERVICE MATRIX
    `
    <div class="page">
      <div class="doc-header">
        <span class="brand-left">AFRISMME HUB • COMMERCIAL BENCHMARK</span>
        <span class="section-tag">EXECUTIVE MATRIX</span>
      </div>
      <div class="content-area">
        <span class="eyebrow">Strategic Value Matrix</span>
        <h2 class="section-title">Executive Service &amp; Commercial Outcome Matrix</h2>
        <p class="lead-paragraph">
          Translating technical capabilities into measurable business performance metrics.
        </p>

        <table class="matrix-table">
          <thead>
            <tr>
              <th style="width: 20%;">Area</th>
              <th style="width: 28%;">Operational Challenge</th>
              <th style="width: 27%;">AfriSMME Intervention</th>
              <th style="width: 25%;">Commercial Outcome</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Outdoor Terraces</strong></td>
              <td>Wind and solar glare leaving seats empty</td>
              <td>Commercial cantilever systems &amp; windbreaks</td>
              <td><strong>+35% to 50% year-round cover lift</strong></td>
            </tr>
            <tr>
              <td><strong>Dining Tables</strong></td>
              <td>Scratched varnish, wine stains, heat rings</td>
              <td>Phased zero-VOC food-safe oil renewal</td>
              <td><strong>80% CapEx savings vs new imports</strong></td>
            </tr>
            <tr>
              <td><strong>Dining Room Acoustics</strong></td>
              <td>Harsh reverberation; shouting guests</td>
              <td>Concealed acoustic sound absorption cores</td>
              <td><strong>+25 mins dwell time; higher spend</strong></td>
            </tr>
            <tr>
              <td><strong>Banquettes &amp; Booths</strong></td>
              <td>Collapsed foam cushions, cracked leather</td>
              <td>CMHR high-density foam &amp; contract leather</td>
              <td><strong>Increased dwell &amp; premium pricing</strong></td>
            </tr>
            <tr>
              <td><strong>Cane &amp; Wicker</strong></td>
              <td>Snapped strands, structural instability</td>
              <td>Artisanal hand re-weaving &amp; tensioning</td>
              <td><strong>Extends furniture life by 5+ years</strong></td>
            </tr>
            <tr>
              <td><strong>Kitchen Extraction</strong></td>
              <td>Grease build-up, smoke risk, fire hazard</td>
              <td>NFPA 96 scheduled degreasing &amp; balancing</td>
              <td><strong>Guaranteed fire &amp; insurance audit pass</strong></td>
            </tr>
            <tr>
              <td><strong>Cold Storage &amp; HVAC</strong></td>
              <td>Compressor strain, spoiled perishables</td>
              <td>Preventative coil cleaning &amp; gasket renewal</td>
              <td><strong>Prevents costly inventory loss &amp; downtime</strong></td>
            </tr>
            <tr>
              <td><strong>Digital &amp; Menus</strong></td>
              <td>Slow PDF menus, poor local search visibility</td>
              <td>Fast QR menus &amp; local search AEO/SEO</td>
              <td><strong>+18% beverage &amp; dessert conversions</strong></td>
            </tr>
          </tbody>
        </table>

        <div class="card highlight" style="margin-top: auto;">
          <p style="font-size: 7.8pt; color: #4A505E; margin: 0; line-height: 1.45;">
            <strong>The Executive Rule:</strong> Preserve your capital, extend physical asset life, and entrust your environment to one accountable engineering partner.
          </p>
        </div>
      </div>
      <div class="doc-footer">
        <div>AFRISMME HUB • PREMIUM SALES BROCHURE</div>
        <div>PAGE 11 OF 12</div>
      </div>
    </div>
    `,

    // PAGE 12: BACK COVER: ASSESS YOUR VENUE
    `
    <div class="page dark" style="justify-content: space-between; padding: 18mm 20mm; background: radial-gradient(circle at 50% 10%, #28523E 0%, #132A1F 100%);">
      <div class="doc-header">
        <span class="brand-left">AFRISMME HUB • HOSPITALITY SUPPORT ECOSYSTEM</span>
        <span class="section-tag">NEXT STEPS</span>
      </div>

      <div class="content-area" style="justify-content: center;">
        <span class="eyebrow">Take the First Step</span>
        <h2 class="section-title" style="font-size: 28pt; margin-bottom: 2mm;">
          Schedule Your 90-Minute<br/>
          <span style="color: #C5A880; font-style: italic;">On-Site Venue Assessment.</span>
        </h2>
        <p class="lead-paragraph" style="max-width: 150mm; margin-bottom: 4mm;">
          Our technical director evaluates your physical space, acoustics, terrace shading, extraction health, and digital presence, delivering a prioritised, costed roadmap within 48 hours.
        </p>

        <div class="img-box" style="height: 46mm; margin-bottom: 4.5mm; border: 1px solid rgba(197,168,128,0.4); box-shadow: 0 10px 25px rgba(0,0,0,0.5);">
          <img src="${assets.cantileverEvening}" alt="Evening Dining with Illuminated Cantilever Umbrellas" />
        </div>

        <div class="grid-2" style="margin-bottom: 5mm;">
          <div class="card" style="padding: 4.5mm;">
            <div style="font-size: 7.5pt; font-weight: 700; color: #C5A880; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 2mm;">Headquarters &amp; Workshops</div>
            <p style="font-size: 8.5pt; color: #FAF8F5; line-height: 1.6; margin-bottom: 2mm;">
              <strong>AfriSMME Hub (Pty) Ltd</strong><br/>
              77 Wilmington Crescent, Lyndhurst<br/>
              Johannesburg, 2192<br/>
              Gauteng, South Africa
            </p>
            <div style="font-size: 7.8pt; color: #A6ADB9; font-family: 'JetBrains Mono', monospace; line-height: 1.5;">
              <div>Office: <a href="tel:+27113465018" style="color: #C5A880; text-decoration: none;">+27 (0) 11 346 5018</a></div>
              <div>Mobile / WhatsApp: <a href="https://wa.me/27834328394" style="color: #C5A880; text-decoration: none;">+27 (0)83 432 8394</a></div>
              <div>Email: <a href="mailto:info@afrismmehub.co.za" style="color: #C5A880; text-decoration: none;">info@afrismmehub.co.za</a></div>
            </div>
          </div>

          <div class="card" style="padding: 4.5mm; display: flex; flex-direction: column; justify-content: space-between;">
            <div>
              <div style="font-size: 7.5pt; font-weight: 700; color: #C5A880; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 2mm;">Online Audit Portal</div>
              <p style="font-size: 8.2pt; color: #D2D7E2; line-height: 1.5; margin-bottom: 3mm;">
                Access our interactive digital assessment diagnostic tool or request an immediate engineering survey:
              </p>
              <div style="background: rgba(197,168,128,0.12); border: 1px solid #C5A880; padding: 2.5mm 3.5mm; border-radius: 3px; text-align: center;">
                <a href="https://www.hospitalitysupport.co.za" style="color: #FAF8F5; text-decoration: none; font-size: 8.5pt; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase;">
                  WWW.HOSPITALITYSUPPORT.CO.ZA
                </a>
              </div>
            </div>
            <div style="font-size: 7pt; font-family: 'JetBrains Mono', monospace; color: #8E95A5; margin-top: 3mm;">
              CONFIDENTIAL • EXECUTIVE COLLATERAL • 2026 EDITION
            </div>
          </div>
        </div>

        <div style="text-align: center; border-top: 1px solid rgba(197,168,128,0.3); padding-top: 4mm;">
          <div style="font-size: 8pt; font-weight: 800; letter-spacing: 3px; color: #FAF8F5; text-transform: uppercase;">AFRISMME HUB • HOSPITALITY SUPPORT ECOSYSTEM</div>
          <div style="font-size: 7pt; font-weight: 600; letter-spacing: 2px; color: #C5A880; margin-top: 1mm;">IDENTIFY • SOLVE • RESTORE • MAINTAIN • GROW</div>
        </div>
      </div>

      <div class="doc-footer">
        <div>AFRISMME HUB • PREMIUM SALES BROCHURE</div>
        <div>PAGE 12 OF 12</div>
      </div>
    </div>
    `
  ];

  const fullHtml = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>AfriSMME Hub — Premium Sales Brochure</title>
    <style>${css}</style>
  </head>
  <body>
    ${pages.join('\n')}
  </body>
  </html>`;

  const htmlPath = path.join(rootDir, 'public/PDFs/brochure_print.html');
  const pdfPath = path.join(rootDir, 'public/PDFs/AfriSMME_Premium_Sales_Brochure.pdf');

  fs.writeFileSync(htmlPath, fullHtml, 'utf8');
  console.log(`Saved Sales Brochure HTML to ${htmlPath}`);

  console.log('Rendering Sales Brochure PDF with Puppeteer...');
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--font-render-hinting=none'],
    headless: true
  });

  const page = await browser.newPage();
  await page.setContent(fullHtml, { waitUntil: 'domcontentloaded', timeout: 90000 });
  await page.evaluate(() => document.fonts.ready);

  await page.pdf({
    path: pdfPath,
    format: 'A4',
    printBackground: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
    preferCSSPageSize: true
  });

  await browser.close();
  const stats = fs.statSync(pdfPath);
  console.log(`Sales Brochure PDF successfully generated! Size: ${(stats.size / 1024 / 1024).toFixed(2)} MB (${stats.size} bytes)`);
}

generateSalesBrochure().catch(err => {
  console.error('Error generating Sales Brochure:', err);
  process.exit(1);
});
