const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer-core');
const { loadAllAssets, rootDir } = require('./pdf_asset_helper');

async function generateSupportBooklet() {
  console.log('Loading assets for Detailed Hospitality Support Booklet...');
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
      line-height: 1.42;
    }

    .page {
      width: 210mm;
      height: 297mm;
      padding: 15mm 18mm;
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
      padding-bottom: 2.8mm;
      border-bottom: 1px solid rgba(197, 168, 128, 0.35);
      margin-bottom: 3.5mm;
      font-size: 7.2pt;
      font-weight: 700;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: #C5A880;
    }
    .page.dark .doc-header {
      border-bottom: 1px solid rgba(197, 168, 128, 0.25);
    }
    .doc-header .section-tag {
      color: #8E95A5;
      font-weight: 600;
    }
    .page.dark .doc-header .section-tag {
      color: #A0A7B5;
    }

    .doc-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 3mm;
      border-top: 1px solid rgba(197, 168, 128, 0.35);
      margin-top: 3.5mm;
      font-size: 6.8pt;
      color: #7A8191;
      font-family: 'JetBrains Mono', monospace;
      letter-spacing: 1px;
    }
    .page.dark .doc-footer {
      border-top: 1px solid rgba(197, 168, 128, 0.25);
      color: #6C7383;
    }
    .doc-footer a {
      color: #C5A880;
      text-decoration: none;
      font-weight: 600;
    }

    .content-area {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      overflow: hidden;
    }

    .part-banner {
      display: inline-block;
      font-size: 7pt;
      font-family: 'JetBrains Mono', monospace;
      font-weight: 700;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: #C5A880;
      margin-bottom: 1.5mm;
    }
    .eyebrow {
      font-size: 7.8pt;
      font-weight: 700;
      letter-spacing: 2.2px;
      text-transform: uppercase;
      color: #C5A880;
      margin-bottom: 1.5mm;
      display: inline-flex;
      align-items: center;
      gap: 5px;
    }
    .eyebrow::before {
      content: '';
      display: inline-block;
      width: 12px;
      height: 2px;
      background: #C5A880;
    }

    h1.display-title {
      font-family: 'Cormorant Garamond', Georgia, serif;
      font-size: 30pt;
      font-weight: 700;
      line-height: 1.05;
      color: #132A1F;
      margin-bottom: 2.5mm;
    }
    .page.dark h1.display-title {
      color: #FAF8F5;
    }

    h2.section-title {
      font-family: 'Cormorant Garamond', Georgia, serif;
      font-size: 22pt;
      font-weight: 600;
      line-height: 1.1;
      color: #132A1F;
      margin-bottom: 2mm;
    }
    .page.dark h2.section-title {
      color: #FAF8F5;
    }

    h3.card-title {
      font-size: 10pt;
      font-weight: 700;
      color: #132A1F;
      margin-bottom: 1.2mm;
    }
    .page.dark h3.card-title {
      color: #FAF8F5;
    }

    .lead-paragraph {
      font-size: 9.2pt;
      line-height: 1.45;
      color: #214634;
      margin-bottom: 3mm;
    }
    .page.dark .lead-paragraph {
      color: #E5DEC9;
    }

    p.body-text {
      font-size: 8pt;
      line-height: 1.46;
      color: #28523E;
      margin-bottom: 2.5mm;
    }
    .page.dark p.body-text {
      color: #C2D6CB;
    }

    .grid-2 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3.5mm;
    }
    .grid-3 {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 3mm;
    }

    .card {
      background: #FFFFFF;
      border: 1px solid #E6E2DB;
      border-radius: 3px;
      padding: 3mm 3.5mm;
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
      font-size: 6.5pt;
      color: #7E8594;
      font-family: 'JetBrains Mono', monospace;
      margin-top: 1mm;
      display: flex;
      justify-content: space-between;
    }

    .badge {
      display: inline-block;
      padding: 1.5px 6px;
      border-radius: 2px;
      font-size: 6.5pt;
      font-weight: 700;
      letter-spacing: 1px;
      text-transform: uppercase;
      background: rgba(197, 168, 128, 0.15);
      color: #9E7D4E;
      border: 1px solid rgba(197, 168, 128, 0.35);
      margin-bottom: 1.5mm;
    }
    .page.dark .badge {
      color: #C5A880;
    }

    .diagram-wrapper {
      width: 100%;
      border: 1px solid rgba(197, 168, 128, 0.25);
      border-radius: 4px;
      overflow: hidden;
      margin: 2mm 0;
      background: #132A1F;
    }
    .diagram-wrapper img {
      width: 100%;
      display: block;
    }

    .stat-strip {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 2.5mm;
      margin: 2.5mm 0;
    }
    .stat-box {
      background: #FFFFFF;
      border: 1px solid #E6E2DB;
      border-radius: 3px;
      padding: 2.5mm;
      text-align: center;
    }
    .page.dark .stat-box {
      background: #132A1F;
      border: 1px solid #28523E;
    }
    .stat-val {
      font-family: 'Cormorant Garamond', Georgia, serif;
      font-size: 17pt;
      font-weight: 700;
      color: #C5A880;
      line-height: 1;
      margin-bottom: 0.5mm;
    }
    .stat-lbl {
      font-size: 6.5pt;
      font-weight: 600;
      color: #6D7483;
      text-transform: uppercase;
      letter-spacing: 0.6px;
    }
    .page.dark .stat-lbl {
      color: #C2D6CB;
    }

    table.matrix-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 7.2pt;
      margin-top: 1.5mm;
    }
    table.matrix-table th {
      background: #1B3B2B;
      color: #C5A880;
      text-align: left;
      padding: 2.5mm 2.8mm;
      font-weight: 700;
      letter-spacing: 1px;
      text-transform: uppercase;
      border-bottom: 1.5px solid #C5A880;
      font-size: 6.8pt;
    }
    table.matrix-table td {
      padding: 2.2mm 2.8mm;
      border-bottom: 1px solid #E6E2DB;
      color: #214634;
      vertical-align: top;
    }
    .page.dark table.matrix-table td {
      border-bottom: 1px solid #28523E;
      color: #C2D6CB;
    }
    table.matrix-table tr:nth-child(even) td {
      background: rgba(0,0,0,0.015);
    }
    .page.dark table.matrix-table tr:nth-child(even) td {
      background: rgba(255,255,255,0.02);
    }
  `;

  // Define 36 Pages for Document C
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
          <div style="font-size: 6.5pt; font-family: 'JetBrains Mono', monospace; color: #C5A880; letter-spacing: 1.5px;">DOCUMENT C • TECHNICAL HANDBOOK</div>
          <div style="font-size: 6.5pt; font-family: 'JetBrains Mono', monospace; color: #FFFFFF;">2026 / 2027 COMPREHENSIVE EDITION</div>
        </div>
      </div>

      <div style="margin: 6mm 0;">
        <div class="img-box" style="height: 104mm; border: 1px solid rgba(197,168,128,0.4); box-shadow: 0 15px 35px rgba(0,0,0,0.45);">
          <img src="${assets.ai01Terrace}" alt="Premier Hospitality Terrace" />
        </div>
        <div class="img-caption">
          <span>REPRESENTATIVE VISUALISATION • EXECUTIVE COASTAL DINING ENVIRONMENT</span>
          <span>CAMPS BAY, CAPE TOWN • ARCHITECTURAL INTEGRATION</span>
        </div>
      </div>

      <div>
        <div style="display: inline-block; padding: 1.5mm 3.5mm; background: rgba(197,168,128,0.15); border: 1px solid #C5A880; border-radius: 2px; margin-bottom: 3.5mm;">
          <span style="font-size: 7.5pt; font-weight: 700; letter-spacing: 2.5px; color: #C5A880; text-transform: uppercase;">IDENTIFY • SOLVE • RESTORE • MAINTAIN • GROW</span>
        </div>
        <h1 class="display-title" style="font-size: 30pt; margin-bottom: 2.5mm;">
          Hospitality Support Booklet:<br/>
          <span style="font-style: italic; color: #C5A880;">Infrastructure, Craft &amp; Operations Manual.</span>
        </h1>
        <p class="lead-paragraph" style="font-size: 9.5pt; max-width: 155mm; color: #E5DEC9; margin-bottom: 4.5mm;">
          A comprehensive operational and technical handbook for General Managers, Operations Directors, Hospitality Investors, and Procurement Committees.
        </p>
        <div style="display: flex; gap: 7mm; border-top: 1px solid rgba(197,168,128,0.3); padding-top: 3.5mm; font-size: 7pt; font-family: 'JetBrains Mono', monospace; color: #C2D6CB;">
          <span>PHASED &amp; SCHEDULED DELIVERY</span>
          <span>•</span>
          <span>SANS 10400 &amp; NFPA 96 ALIGNED</span>
          <span>•</span>
          <span>CONSOLIDATED SLA ARCHITECTURE</span>
        </div>
      </div>

      <div class="doc-footer">
        <div>AFRISMME HUB • HOSPITALITY SUPPORT BOOKLET</div>
        <div>PAGE 01 OF 36</div>
      </div>
    </div>
    `,

    // PAGE 02: TABLE OF CONTENTS
    `
    <div class="page">
      <div class="doc-header">
        <span class="brand-left">AFRISMME HUB • HOSPITALITY SUPPORT BOOKLET</span>
        <span class="section-tag">TABLE OF CONTENTS</span>
      </div>
      <div class="content-area">
        <span class="eyebrow">Publication Structure</span>
        <h2 class="section-title">Comprehensive Handbook Index</h2>
        <p class="lead-paragraph">
          This manual serves as an authoritative guide to the physical infrastructure, technical maintenance, acoustic optimization, and digital systems of modern hospitality properties.
        </p>

        <div class="grid-2" style="margin-bottom: 3mm;">
          <div style="display: flex; flex-direction: column; gap: 2.2mm;">
            <div class="card" style="padding: 2.5mm 3.5mm;">
              <strong style="color: #C5A880; font-size: 8pt;">PART I — THE HOSPITALITY ENVIRONMENT</strong>
              <div style="font-size: 7.2pt; color: #555C6B; margin-top: 0.8mm;">
                <div>Page 03 — Executive Foreword: Fragility of Hospitality Spaces</div>
                <div>Page 04 — The Contractor Fragmentation Crisis</div>
              </div>
            </div>
            <div class="card" style="padding: 2.5mm 3.5mm;">
              <strong style="color: #C5A880; font-size: 8pt;">PART II — OUR ECOSYSTEM ARCHITECTURE</strong>
              <div style="font-size: 7.2pt; color: #555C6B; margin-top: 0.8mm;">
                <div>Page 05 — Centralized Governance Model</div>
                <div>Page 06 — Architecture Diagram: The Support Ecosystem</div>
                <div>Page 07 — Specialist Division Capabilities</div>
                <div>Page 08 — Multi-Trade Accountability &amp; Insurance</div>
              </div>
            </div>
            <div class="card" style="padding: 2.5mm 3.5mm;">
              <strong style="color: #C5A880; font-size: 8pt;">PART III — THE SIX SUPPORT PILLARS</strong>
              <div style="font-size: 7.2pt; color: #555C6B; margin-top: 0.8mm;">
                <div>Pages 09-10 — Pillar 01 ATTRACT: Exterior &amp; Shading</div>
                <div>Pages 11-12 — Pillar 02 ENHANCE: Acoustics &amp; Banquettes</div>
                <div>Pages 13-14 — Pillar 03 RESTORE: Artisanal Furniture Care</div>
                <div>Pages 15-16 — Pillar 04 MAINTAIN: Facilities &amp; Ventilation</div>
                <div>Pages 17-18 — Pillar 05 PROTECT: Safety, OHS &amp; Standards</div>
                <div>Pages 19-20 — Pillar 06 GROW: Digital, Menus &amp; Yield</div>
              </div>
            </div>
          </div>

          <div style="display: flex; flex-direction: column; gap: 2.2mm;">
            <div class="card" style="padding: 2.5mm 3.5mm;">
              <strong style="color: #C5A880; font-size: 8pt;">PART IV — SPECIALIST CAPABILITIES</strong>
              <div style="font-size: 7.2pt; color: #555C6B; margin-top: 0.8mm;">
                <div>Page 21 — Hardwood Timber Chemistry &amp; Zero-VOC Oils</div>
                <div>Page 22 — Textile &amp; Contract Leather Engineering</div>
                <div>Page 23 — Artisanal Cane &amp; Wicker Weaving</div>
                <div>Page 24 — Extraction Ventilation &amp; Hydrodynamics</div>
              </div>
            </div>
            <div class="card" style="padding: 2.5mm 3.5mm;">
              <strong style="color: #C5A880; font-size: 8pt;">PART V — TECHNOLOGY &amp; DIGITAL HOSPITALITY</strong>
              <div style="font-size: 7.2pt; color: #555C6B; margin-top: 0.8mm;">
                <div>Page 25 — The Unified Digital Guest Discovery Journey</div>
                <div>Page 26 — AI Guest Concierge &amp; Reputation Telemetry</div>
              </div>
            </div>
            <div class="card" style="padding: 2.5mm 3.5mm;">
              <strong style="color: #C5A880; font-size: 8pt;">PART VI — ASSESSMENT &amp; IMPLEMENTATION</strong>
              <div style="font-size: 7.2pt; color: #555C6B; margin-top: 0.8mm;">
                <div>Page 27 — The 10-Point Diagnostic Framework</div>
                <div>Page 28 — The 4-Tier Prioritisation Decision Matrix</div>
                <div>Page 29 — Diagram: Venue Improvement Cycle</div>
                <div>Page 30 — The Phased &amp; Scheduled Operating Runbook</div>
              </div>
            </div>
            <div class="card" style="padding: 2.5mm 3.5mm;">
              <strong style="color: #C5A880; font-size: 8pt;">PARTS VII - X — SECTORS, SLA &amp; CONTACT</strong>
              <div style="font-size: 7.2pt; color: #555C6B; margin-top: 0.8mm;">
                <div>Pages 31-32 — Preventative Maintenance &amp; Fleet Response</div>
                <div>Pages 33-34 — Sector Applications &amp; Group Governance</div>
                <div>Pages 35-36 — Commercial SLA Models &amp; Audit Onboarding</div>
              </div>
            </div>
          </div>
        </div>

        <div class="card highlight" style="margin-top: auto;">
          <p style="font-size: 7.6pt; color: #4A505E; margin: 0; line-height: 1.4;">
            <strong>Confidentiality Notice:</strong> Prepared exclusively for corporate hospitality clients. Contains proprietary technical standards and scheduled operational workflows of AfriSMME Hub.
          </p>
        </div>
      </div>
      <div class="doc-footer">
        <div>AFRISMME HUB • HOSPITALITY SUPPORT BOOKLET</div>
        <div>PAGE 02 OF 36</div>
      </div>
    </div>
    `,

    // PAGE 03: PART I — EXECUTIVE FOREWORD
    `
    <div class="page">
      <div class="doc-header">
        <span class="brand-left">PART I • THE HOSPITALITY ENVIRONMENT</span>
        <span class="section-tag">01 EXECUTIVE FOREWORD</span>
      </div>
      <div class="content-area">
        <span class="part-banner">PART I — THE HOSPITALITY ENVIRONMENT</span>
        <span class="eyebrow">Executive Foreword</span>
        <h2 class="section-title">The Fragility of the Physical Hospitality Space</h2>
        <p class="lead-paragraph">
          The commercial performance of a luxury dining destination or boutique hotel is inextricably linked to the physical condition of its immediate environment.
        </p>

        <div class="grid-2" style="margin-bottom: 3.5mm;">
          <div>
            <p class="body-text">
              Fine hospitality is an intensely sensory medium. Long before an appetizer touches the table, a guest has already evaluated the restaurant through subliminal physical cues: the tension and shade of the terrace canopy, the warmth of the entrance signage, the tactile quality of a hardwood tabletop, the comfort of an upholstered banquette, and the acoustic reverberation of the dining room.
            </p>
            <p class="body-text">
              Yet, commercial hospitality environments endure punishing physical degradation. Hundreds of covers per evening subject furniture to hot cookware, red wine, acidic citrus, and cutlery abrasions. Coastal salt air, high UV solar radiation, and rain degrade outdoor canopies and hardwood decks. In back-of-house areas, extraction hoods collect volatile grease while refrigeration compressors run non-stop under tropical ambient heat.
            </p>
            <div class="card highlight" style="margin-top: 2mm;">
              <p style="font-size: 7.8pt; color: #383D48; margin: 0; font-weight: 600;">
                The physical space either supports premium menu pricing power and extended dwell time, or subtly erodes guest confidence and average check spend.
              </p>
            </div>
          </div>
          <div>
            <div class="img-box" style="height: 60mm;">
              <img src="${assets.ai03Hotel}" alt="Five Star Hotel Outdoor Terrace" />
            </div>
            <div class="img-caption">
              <span>REPRESENTATIVE VISUALISATION • FIVE-STAR HOSPITALITY ENVIRONMENT</span>
              <span>TACTILE QUALITY • ACOUSTIC COMFORT • COMMERCIAL RESILIENCE</span>
            </div>
            <div class="card" style="margin-top: 3mm; background: #FAF5EE;">
              <div style="font-size: 7pt; font-weight: 700; color: #9E7D4E; text-transform: uppercase;">Asset Longevity Principle</div>
              <p style="font-size: 7.5pt; color: #584E3F; margin: 0; line-height: 1.4;">
                Proactive cyclical restoration costs a fraction of reactive capital replacement, extending the operating lifespan of premium solid wood and contract leather FF&amp;E indefinitely.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="doc-footer">
        <div>AFRISMME HUB • HOSPITALITY SUPPORT BOOKLET</div>
        <div>PAGE 03 OF 36</div>
      </div>
    </div>
    `,

    // PAGE 04: PART I — THE CONTRACTOR FRAGMENTATION TRAP
    `
    <div class="page">
      <div class="doc-header">
        <span class="brand-left">PART I • THE HOSPITALITY ENVIRONMENT</span>
        <span class="section-tag">02 FRAGMENTATION TRAP</span>
      </div>
      <div class="content-area">
        <span class="part-banner">PART I — THE HOSPITALITY ENVIRONMENT</span>
        <span class="eyebrow">Root Causes of Failure</span>
        <h2 class="section-title">The Contractor Fragmentation Trap</h2>
        <p class="lead-paragraph">
          Why traditional single-trade contractors consistently fail high-traffic hospitality operations.
        </p>

        <div class="grid-3" style="margin-bottom: 3.5mm;">
          <div class="card">
            <div class="badge" style="color: #C0392B; border-color: rgba(192,57,43,0.3); background: rgba(192,57,43,0.08);">Failure Mode 1</div>
            <h3 class="card-title">Daytime Disruption</h3>
            <p class="body-text">
              Conventional trades operate between 08:00 and 17:00. To perform table sanding or duct degreasing, they demand venue closures, costing the property thousands in lost covers.
            </p>
          </div>
          <div class="card">
            <div class="badge" style="color: #D35400; border-color: rgba(211,84,0,0.3); background: rgba(211,84,0,0.08);">Failure Mode 2</div>
            <h3 class="card-title">Toxic Chemistry</h3>
            <p class="body-text">
              Standard commercial varnishes and chemical strippers emit hazardous volatile organic compounds (VOCs) that linger for 48 hours, tainting fine wines and food aromas.
            </p>
          </div>
          <div class="card">
            <div class="badge" style="color: #8E44AD; border-color: rgba(142,68,173,0.3); background: rgba(142,68,173,0.08);">Failure Mode 3</div>
            <h3 class="card-title">Disputed Responsibility</h3>
            <p class="body-text">
              When an outdoor canopy leaks onto a newly reupholstered banquette, the shade contractor and upholsterer blame each other, leaving the operator with unrecoverable damages.
            </p>
          </div>
        </div>

        <div class="card highlight" style="margin-top: auto;">
          <h3 class="card-title" style="margin-bottom: 1.5mm;">The Administrative Sinkhole for Management</h3>
          <p class="body-text" style="margin: 0;">
            Hospitality general managers spend an average of 65 hours per month managing maintenance requests, cross-verifying contractor quotes, following up delayed artisans, and disputing unexpected call-out fees. AfriSMME Hub eliminates this entire overhead by consolidating all physical and digital maintenance under a single corporate umbrella.
          </p>
        </div>
      </div>
      <div class="doc-footer">
        <div>AFRISMME HUB • HOSPITALITY SUPPORT BOOKLET</div>
        <div>PAGE 04 OF 36</div>
      </div>
    </div>
    `,

    // PAGE 05: PART II — ECOSYSTEM ARCHITECTURE
    `
    <div class="page dark">
      <div class="doc-header">
        <span class="brand-left">PART II • OUR ECOSYSTEM ARCHITECTURE</span>
        <span class="section-tag">03 CENTRAL GOVERNANCE</span>
      </div>
      <div class="content-area">
        <span class="part-banner">PART II — OUR ECOSYSTEM ARCHITECTURE</span>
        <span class="eyebrow">Corporate Structure</span>
        <h2 class="section-title">Centralized Governance &amp; Multi-Trade Network</h2>
        <p class="lead-paragraph">
          AfriSMME Hub functions as a single corporate umbrella that manages, coordinates, and guarantees specialist trade capability across the hospitality spectrum.
        </p>

        <div class="grid-2" style="margin-bottom: 3.5mm;">
          <div>
            <h3 class="card-title" style="color: #C5A880;">The Integrator Role</h3>
            <p class="body-text">
              Instead of delegating maintenance to fragmented informal subcontractors, AfriSMME Hub maintains dedicated workshop infrastructure, master craft specialists, and digital engineers. Each project is managed by an experienced hospitality facilities director who serves as your single point of executive contact.
            </p>
            <h3 class="card-title" style="color: #C5A880; margin-top: 2.5mm;">Unified Operating Standards</h3>
            <p class="body-text">
              All divisions adhere to the AfriSMME Standard Operating Procedure (SOP), which mandates:
            </p>
            <ul style="font-size: 7.8pt; color: #C2D6CB; margin-left: 4mm; line-height: 1.5;">
              <li>Planned daytime maintenance windows and phased batch rotation.</li>
              <li>100% dustless HEPA extraction containment on-site.</li>
              <li>Food-safe, zero-VOC rapid curing chemical specifications.</li>
              <li>Service-ready handover checklists co-signed with duty management.</li>
            </ul>
          </div>
          <div>
            <div class="card" style="height: 100%; display: flex; flex-direction: column; justify-content: space-between;">
              <div>
                <h3 class="card-title" style="color: #C5A880;">Consolidated Legal &amp; Insurance Protection</h3>
                <p class="body-text">
                  Clients benefit from a comprehensive R20M Commercial General Liability policy, strict statutory OHS compliance, and master warranties across all timber joinery, shading structures, upholstery stitching, and mechanical installations.
                </p>
              </div>
              <div class="stat-strip" style="grid-template-columns: 1fr 1fr; margin-top: 3mm;">
                <div class="stat-box">
                  <div class="stat-val">R20M</div>
                  <div class="stat-lbl">Liability Cover</div>
                </div>
                <div class="stat-box">
                  <div class="stat-val">1 SLA</div>
                  <div class="stat-lbl">Total Protection</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style="background: #132A1F; border-radius: 4px; padding: 2.8mm 3.5mm; border-left: 3px solid #C5A880; margin-top: auto;">
          <p style="font-size: 7.8pt; color: #E5DEC9; margin: 0;">
            <strong>Corporate Guarantee:</strong> One contract, one monthly itemized statement, zero vendor disputes, and guaranteed service-ready handovers.
          </p>
        </div>
      </div>
      <div class="doc-footer">
        <div>AFRISMME HUB • HOSPITALITY SUPPORT BOOKLET</div>
        <div>PAGE 05 OF 36</div>
      </div>
    </div>
    `,

    // PAGE 06: PART II — ARCHITECTURE DIAGRAM 1
    `
    <div class="page dark">
      <div class="doc-header">
        <span class="brand-left">PART II • OUR ECOSYSTEM ARCHITECTURE</span>
        <span class="section-tag">04 ARCHITECTURAL BLUEPRINT</span>
      </div>
      <div class="content-area">
        <span class="part-banner">PART II — OUR ECOSYSTEM ARCHITECTURE</span>
        <span class="eyebrow">Master Ecosystem Map</span>
        <h2 class="section-title">The Coordinated Operational Blueprint</h2>
        <p class="lead-paragraph">
          How the AfriSMME Hub central governance node coordinates the six support pillars and specialist trading divisions.
        </p>

        <div class="diagram-wrapper" style="margin-bottom: 3mm;">
          <img src="${assets.diagram01}" alt="Master Hospitality Support Ecosystem Diagram" />
        </div>

        <div class="grid-3" style="margin-top: auto;">
          <div class="card">
            <h3 class="card-title" style="color: #C5A880; font-size: 9pt;">Attract &amp; Enhance</h3>
            <p style="font-size: 7.4pt; color: #C2D6CB; margin: 0; line-height: 1.35;">
              Facade presence, commercial umbrellas, windbreaks, acoustic dining room panels, and custom contract banquettes.
            </p>
          </div>
          <div class="card">
            <h3 class="card-title" style="color: #C5A880; font-size: 9pt;">Restore &amp; Maintain</h3>
            <p style="font-size: 7.4pt; color: #C2D6CB; margin: 0; line-height: 1.35;">
              Phased solid wood table oiling, cane re-weaving, extraction hood degreasing, refrigeration checks, and rapid fleet dispatch.
            </p>
          </div>
          <div class="card">
            <h3 class="card-title" style="color: #C5A880; font-size: 9pt;">Protect &amp; Grow</h3>
            <p style="font-size: 7.4pt; color: #C2D6CB; margin: 0; line-height: 1.35;">
              SANS/NFPA compliance, HACCP hygiene, tailored uniforms, smart QR menus, AI guest messaging, and seat yield modeling.
            </p>
          </div>
        </div>
      </div>
      <div class="doc-footer">
        <div>AFRISMME HUB • HOSPITALITY SUPPORT BOOKLET</div>
        <div>PAGE 06 OF 36</div>
      </div>
    </div>
    `,

    // PAGE 07: PART II — SPECIALIST DIVISION PROFILES
    `
    <div class="page">
      <div class="doc-header">
        <span class="brand-left">PART II • OUR ECOSYSTEM ARCHITECTURE</span>
        <span class="section-tag">05 SPECIALIST DIVISIONS</span>
      </div>
      <div class="content-area">
        <span class="part-banner">PART II — OUR ECOSYSTEM ARCHITECTURE</span>
        <span class="eyebrow">Divisional Capabilities</span>
        <h2 class="section-title">Specialist Ecosystem Network Profiles</h2>
        <p class="lead-paragraph">
          Dedicated artisanal and technical capability coordinated seamlessly under AfriSMME Hub.
        </p>

        <div class="grid-2" style="margin-bottom: 3mm;">
          <div class="card highlight">
            <h3 class="card-title">The Wood Doctor</h3>
            <p class="body-text">
              Specialized timber restoration atelier. Focuses on commercial table stripping, destaining, phased food-safe hardwax oil application, and dustless hardwood floor sanding.
            </p>
            <div style="font-size: 7pt; color: #8E95A5; font-family: 'JetBrains Mono', monospace;">wooddoctor.co.za • Sandton Central Workshop</div>
          </div>

          <div class="card highlight">
            <h3 class="card-title">AfriShades</h3>
            <p class="body-text">
              Engineered outdoor living and commercial shading. Heavy-duty cantilever systems, motorized drop-down weather blinds, and architectural exterior signage fabrication.
            </p>
            <div style="font-size: 7pt; color: #8E95A5; font-family: 'JetBrains Mono', monospace;">afrishades.co.za • Architectural Shading</div>
          </div>

          <div class="card highlight">
            <h3 class="card-title">Cane Africa</h3>
            <p class="body-text">
              Artisanal hand-weaving of natural cane, rattan, and synthetic wicker. Full structural re-tensioning and aluminum frame repairs for outdoor hospitality furniture.
            </p>
            <div style="font-size: 7pt; color: #8E95A5; font-family: 'JetBrains Mono', monospace;">caneafrica.co.za • Hand-Weaving Atelier</div>
          </div>

          <div class="card highlight">
            <h3 class="card-title">Textile Doctor</h3>
            <p class="body-text">
              Contract-grade commercial upholstery. High-resilience CMHR foam replacement, bespoke fluted banquettes, and on-site deep leather pigment rejuvenation.
            </p>
            <div style="font-size: 7pt; color: #8E95A5; font-family: 'JetBrains Mono', monospace;">Contract Fabrics • Stain-Shield Crypton</div>
          </div>

          <div class="card highlight">
            <h3 class="card-title">AfriHealth &amp; Safety</h3>
            <p class="body-text">
              Hospitality compliance advisory. SANS 10400 fire safety verification, commercial kitchen hygiene audit readiness (HACCP), and tailored uniform cresting.
            </p>
            <div style="font-size: 7pt; color: #8E95A5; font-family: 'JetBrains Mono', monospace;">HACCP Aligned • Municipal Inspection Shield</div>
          </div>

          <div class="card highlight">
            <h3 class="card-title">Scinovalities</h3>
            <p class="body-text">
              Digital hospitality and artificial intelligence division. High-performance web portals, smart interactive QR menus, AI automated booking concierges, and local AEO/SEO.
            </p>
            <div style="font-size: 7pt; color: #8E95A5; font-family: 'JetBrains Mono', monospace;">scinovalities.com • Hospitality Digital Partner</div>
          </div>
        </div>

        <div class="card" style="background: #FAF5EE; margin-top: auto;">
          <p style="font-size: 7.6pt; color: #584E3F; margin: 0; line-height: 1.4;">
            <strong>Governance Standard:</strong> Clients sign a single service contract with AfriSMME Hub. We handle trade dispatch, quality oversight, materials procurement, and unified warranty enforcement.
          </p>
        </div>
      </div>
      <div class="doc-footer">
        <div>AFRISMME HUB • HOSPITALITY SUPPORT BOOKLET</div>
        <div>PAGE 07 OF 36</div>
      </div>
    </div>
    `,

    // PAGE 08: PART II — MULTI-TRADE ACCOUNTABILITY & GOVERNANCE
    `
    <div class="page">
      <div class="doc-header">
        <span class="brand-left">PART II • OUR ECOSYSTEM ARCHITECTURE</span>
        <span class="section-tag">06 GOVERNANCE &amp; RISK</span>
      </div>
      <div class="content-area">
        <span class="part-banner">PART II — OUR ECOSYSTEM ARCHITECTURE</span>
        <span class="eyebrow">Enterprise Risk Shield</span>
        <h2 class="section-title">Multi-Trade Accountability &amp; Insurance Protection</h2>
        <p class="lead-paragraph">
          Commercial properties require absolute legal, environmental, and financial security. AfriSMME Hub provides complete institutional governance.
        </p>

        <div class="grid-2" style="margin-bottom: 3.5mm;">
          <div class="card">
            <h3 class="card-title">Statutory Compliance Shield</h3>
            <p class="body-text">
              All personnel dispatched to client properties are fully compliant with:
            </p>
            <ul style="font-size: 7.8pt; color: #4A505E; margin-left: 4mm; line-height: 1.5;">
              <li><strong>Occupational Health &amp; Safety Act (Act 85 of 1993):</strong> Full Letter of Good Standing (COIDA).</li>
              <li><strong>SANS 10400:</strong> National Building Regulations compliance for public hospitality buildings.</li>
              <li><strong>SANS 1850:</strong> Mandatory design and maintenance standard for commercial kitchen extraction systems.</li>
              <li><strong>R638 Food Hygiene Regulations:</strong> Certified chemical safety protocols for dining surfaces.</li>
            </ul>
          </div>

          <div class="card">
            <h3 class="card-title">Unified Master Warranty</h3>
            <p class="body-text">
              Unlike fragmented trades who disclaim liability, AfriSMME Hub provides a comprehensive institutional warranty:
            </p>
            <ul style="font-size: 7.8pt; color: #4A505E; margin-left: 4mm; line-height: 1.5;">
              <li><strong>Timber Finishes:</strong> 12-month adhesion and moisture resistance guarantee.</li>
              <li><strong>Cane Weaving:</strong> 24-month structural tension and frame weld warranty.</li>
              <li><strong>Commercial Parasols:</strong> 36-month structural mast and marine hardware warranty.</li>
              <li><strong>Extraction Ducting:</strong> 100% pass certification for municipal fire audits.</li>
            </ul>
          </div>
        </div>

        <div class="diagram-wrapper" style="margin-top: auto;">
          <img src="${assets.diagram03}" alt="The One Partner Model Governance Flow" />
        </div>
      </div>
      <div class="doc-footer">
        <div>AFRISMME HUB • HOSPITALITY SUPPORT BOOKLET</div>
        <div>PAGE 08 OF 36</div>
      </div>
    </div>
    `,

    // PAGE 09: PART III — PILLAR 01 ATTRACT: SHADING ENGINEERING
    `
    <div class="page">
      <div class="doc-header">
        <span class="brand-left">PART III • THE SIX SUPPORT PILLARS</span>
        <span class="section-tag">PILLAR 01 ATTRACT</span>
      </div>
      <div class="content-area">
        <span class="part-banner">PART III — THE SIX SUPPORT PILLARS</span>
        <span class="eyebrow">Pillar 01 — Exterior Presence</span>
        <h2 class="section-title">ATTRACT: Exterior Architecture &amp; Shade Engineering</h2>
        <p class="lead-paragraph">
          Unlocking maximum cover capacity and commanding street appeal through commercial shade architecture and bespoke exterior signage.
        </p>

        <div class="grid-2" style="margin-bottom: 3.5mm;">
          <div>
            <h3 class="card-title">Commercial Cantilever Engineering</h3>
            <p class="body-text">
              Hospitality outdoor dining requires shade structures capable of withstanding severe gusting winds without threatening guest safety. Our cantilever systems feature heavy-gauge extruded aluminum alloy masts, 316 marine-grade stainless steel cables, and solid granite bases that maintain stability in gusts up to 60 km/h.
            </p>
            <h3 class="card-title" style="margin-top: 2.5mm;">Bespoke Architectural Signage</h3>
            <p class="body-text">
              First impressions set guest expectations. We fabricate CNC-milled solid brass lettering, hand-patinated bronze plaques, and halo-lit architectural entry signboards that reflect Michelin-grade craftsmanship from the exterior curb.
            </p>
            <div class="card highlight" style="margin-top: 2.5mm;">
              <div style="font-size: 7pt; font-weight: 700; color: #9E7D4E; text-transform: uppercase;">Commercial Outcome</div>
              <p style="font-size: 7.6pt; color: #383D48; margin: 0; font-weight: 600;">
                Terraces generate up to 50% of venue revenue during fair weather. Our shade architecture preserves these seats during scorching midday sun and unexpected rain.
              </p>
            </div>
          </div>
          <div>
            <div class="img-box" style="height: 64mm;">
              <img src="${assets.ai04Umbrella}" alt="Commercial Cantilever Detail" />
            </div>
            <div class="img-caption">
              <span>REPRESENTATIVE VISUALISATION • COMMERCIAL CANTILEVER RIGGING</span>
              <span>MARINE 316 HARDWARE • POLISHED GRANITE BASE</span>
            </div>
          </div>
        </div>
      </div>
      <div class="doc-footer">
        <div>AFRISMME HUB • HOSPITALITY SUPPORT BOOKLET</div>
        <div>PAGE 09 OF 36</div>
      </div>
    </div>
    `,

    // PAGE 10: PART III — PILLAR 01 ATTRACT: FABRIC SCIENCE
    `
    <div class="page">
      <div class="doc-header">
        <span class="brand-left">PART III • THE SIX SUPPORT PILLARS</span>
        <span class="section-tag">PILLAR 01 ATTRACT SPEC</span>
      </div>
      <div class="content-area">
        <span class="part-banner">PART III — THE SIX SUPPORT PILLARS</span>
        <span class="eyebrow">Technical Specification</span>
        <h2 class="section-title">Canopy Fabric Science &amp; Weatherproofing</h2>
        <p class="lead-paragraph">
          Technical specifications for commercial shade canopies, motorized windbreaks, and terrace weatherproofing assemblies.
        </p>

        <div class="grid-2" style="margin-bottom: 3.5mm;">
          <div class="card">
            <h3 class="card-title">Solution-Dyed Acrylic Canopies</h3>
            <p class="body-text">
              Unlike cheap piece-dyed fabrics where pigment sits only on the surface, our canopies utilize 100% solution-dyed European acrylic fibers where color is locked into the core polymer during extrusion.
            </p>
            <ul style="font-size: 7.8pt; color: #4A505E; margin-left: 4mm; line-height: 1.5;">
              <li><strong>UV Resistance:</strong> UPF 50+ blocking 98% of harmful ultraviolet radiation.</li>
              <li><strong>Colorfastness:</strong> Grade 7/8 on the ISO 105-B02 blue wool scale.</li>
              <li><strong>Water Column:</strong> &gt;350mm hydrostatic head with fluorocarbon coating.</li>
              <li><strong>Anti-Mildew:</strong> Fungicidal treatment prevents mold accumulation in humid coastal locations.</li>
            </ul>
          </div>

          <div class="card">
            <h3 class="card-title">Retractable Windbreaks &amp; Heating</h3>
            <p class="body-text">
              To achieve genuine four-season outdoor dining, wind management is critical. We integrate:
            </p>
            <ul style="font-size: 7.8pt; color: #4A505E; margin-left: 4mm; line-height: 1.5;">
              <li><strong>Motorized Zip-Track Blinds:</strong> Heavy-gauge clear Japanese PVC that seals terrace edges against coastal wind.</li>
              <li><strong>Infrared Outdoor Heating:</strong> Discrete ceiling-mounted shortwave infrared heaters warming guests directly rather than the air.</li>
              <li><strong>Concealed Perimeter Drains:</strong> Prevents puddle accumulation on dining timber decks during heavy downpours.</li>
            </ul>
          </div>
        </div>

        <div class="stat-strip" style="margin-top: auto;">
          <div class="stat-box">
            <div class="stat-val">UPF 50+</div>
            <div class="stat-lbl">Solar Block</div>
          </div>
          <div class="stat-box">
            <div class="stat-val">60 km/h</div>
            <div class="stat-lbl">Wind Rating</div>
          </div>
          <div class="stat-box">
            <div class="stat-val">350mm</div>
            <div class="stat-lbl">Hydrostatic Head</div>
          </div>
          <div class="stat-box">
            <div class="stat-val">100%</div>
            <div class="stat-lbl">Solution-Dyed</div>
          </div>
        </div>
      </div>
      <div class="doc-footer">
        <div>AFRISMME HUB • HOSPITALITY SUPPORT BOOKLET</div>
        <div>PAGE 10 OF 36</div>
      </div>
    </div>
    `,

    // PAGE 11: PART III — PILLAR 02 ENHANCE: ACOUSTIC CONDITIONING
    `
    <div class="page">
      <div class="doc-header">
        <span class="brand-left">PART III • THE SIX SUPPORT PILLARS</span>
        <span class="section-tag">PILLAR 02 ENHANCE</span>
      </div>
      <div class="content-area">
        <span class="part-banner">PART III — THE SIX SUPPORT PILLARS</span>
        <span class="eyebrow">Pillar 02 — Acoustic Architecture</span>
        <h2 class="section-title">ENHANCE: Acoustic Conditioning &amp; Sound Balancing</h2>
        <p class="lead-paragraph">
          Eliminate painful dining room reverberation, allowing diners to converse effortlessly while preserving a vibrant hospitality atmosphere.
        </p>

        <div class="grid-2" style="margin-bottom: 3.5mm;">
          <div>
            <h3 class="card-title">The Physics of Restaurant Echo</h3>
            <p class="body-text">
              Contemporary hospitality architecture favors hard, reflective finishes: polished concrete, floor-to-ceiling glass, exposed brickwork, and hard plaster. These materials reflect over 95% of acoustic energy. As conversation volume rises, diners unconsciously speak louder (the Lombard Effect), creating a deafening sonic environment where table conversation becomes exhausting.
            </p>
            <h3 class="card-title" style="margin-top: 2.5mm;">Discrete Sound Absorption Interventions</h3>
            <p class="body-text">
              We do not install unsightly commercial foam squares. We integrate high-performance acoustic absorption cores (NRC &gt; 0.85) concealed behind:
            </p>
            <ul style="font-size: 7.8pt; color: #4A505E; margin-left: 4mm; line-height: 1.5;">
              <li>Micro-perforated natural timber wall and ceiling battens.</li>
              <li>Acoustically transparent architectural fabric murals and artwork.</li>
              <li>Underside table acoustic baffles absorbing low-frequency chair chatter.</li>
            </ul>
          </div>
          <div>
            <div class="img-box" style="height: 64mm;">
              <img src="${assets.acousticBooth}" alt="Acoustic Privacy Booth" />
            </div>
            <div class="img-caption">
              <span>DOCUMENTED FIELD ASSET • ACOUSTIC BOOTH ARCHITECTURE</span>
              <span>CONCEALED NRC SOUND ABSORPTION • ERGONOMIC SEATING</span>
            </div>
          </div>
        </div>

        <div class="card highlight" style="margin-top: auto;">
          <p style="font-size: 7.6pt; color: #383D48; margin: 0; line-height: 1.4;">
            <strong>Commercial Bottom Line:</strong> Reducing dining reverberation time (RT60) from 1.8s to 0.8s extends average table dwell times by 25 minutes, directly increasing wine and dessert sales.
          </p>
        </div>
      </div>
      <div class="doc-footer">
        <div>AFRISMME HUB • HOSPITALITY SUPPORT BOOKLET</div>
        <div>PAGE 11 OF 36</div>
      </div>
    </div>
    `,

    // PAGE 12: PART III — PILLAR 02 ENHANCE: CONTRACT BANQUETTES
    `
    <div class="page">
      <div class="doc-header">
        <span class="brand-left">PART III • THE SIX SUPPORT PILLARS</span>
        <span class="section-tag">PILLAR 02 ENHANCE SPEC</span>
      </div>
      <div class="content-area">
        <span class="part-banner">PART III — THE SIX SUPPORT PILLARS</span>
        <span class="eyebrow">Seating Ergonomics &amp; Layout</span>
        <h2 class="section-title">Contract Banquettes &amp; Spatial Dining Enclaves</h2>
        <p class="lead-paragraph">
          Ergonomic engineering, high-density CMHR foam specification, and spatial floorplan zoning that turns every table into a preferred reservation.
        </p>

        <div class="grid-2" style="margin-bottom: 3.5mm;">
          <div class="card">
            <h3 class="card-title">High-Resilience CMHR Foam Cores</h3>
            <p class="body-text">
              Residential furniture foam collapses after three months of commercial service. We specify Combustion Modified High Resilience (CMHR) commercial foam cores:
            </p>
            <ul style="font-size: 7.8pt; color: #4A505E; margin-left: 4mm; line-height: 1.5;">
              <li><strong>Density:</strong> 45–55 kg/m³ providing sustained lumbar support throughout a multi-course dinner.</li>
              <li><strong>Fire Resistance:</strong> Compliant with BS 5852 Crib 5 fire safety standards.</li>
              <li><strong>Recovery:</strong> Zero permanent depression even after 20,000 compression cycles.</li>
            </ul>
          </div>

          <div class="card">
            <h3 class="card-title">Spatial Enclave Zoning</h3>
            <p class="body-text">
              Open dining floors with rows of loose tables feel cold and exposed. Diners consistently request booth seating because it provides intimacy and privacy.
            </p>
            <ul style="font-size: 7.8pt; color: #4A505E; margin-left: 4mm; line-height: 1.5;">
              <li><strong>Bespoke Banquette Joinery:</strong> Hand-built hardwood internal frames anchored to walls.</li>
              <li><strong>Fluted &amp; Deep-Buttoned Channels:</strong> Elegant upholstery detailing that enhances acoustic absorption.</li>
              <li><strong>Integrated Table Charging:</strong> Discreet Qi wireless charging pads embedded in timber ledges.</li>
            </ul>
          </div>
        </div>

        <div class="img-box" style="height: 50mm; margin-top: auto;">
          <img src="${assets.ai06Upholstery}" alt="Upholstery Craftsmanship Atelier" />
        </div>
        <div class="img-caption">
          <span>REPRESENTATIVE VISUALISATION • COMMERCIAL UPHOLSTERY ATELIER</span>
          <span>SADDLE LEATHER FLUTING • HIGH-DENSITY CMHR FOAM ASSEMBLY</span>
        </div>
      </div>
      <div class="doc-footer">
        <div>AFRISMME HUB • HOSPITALITY SUPPORT BOOKLET</div>
        <div>PAGE 12 OF 36</div>
      </div>
    </div>
    `,

    // PAGE 13: PART III — PILLAR 03 RESTORE: TIMBER CHEMISTRY
    `
    <div class="page">
      <div class="doc-header">
        <span class="brand-left">PART III • THE SIX SUPPORT PILLARS</span>
        <span class="section-tag">PILLAR 03 RESTORE</span>
      </div>
      <div class="content-area">
        <span class="part-banner">PART III — THE SIX SUPPORT PILLARS</span>
        <span class="eyebrow">Pillar 03 — Artisanal Restoration</span>
        <h2 class="section-title">RESTORE: Hardwood Chemistry &amp; Food-Safe Oils</h2>
        <p class="lead-paragraph">
          Phased timber restoration using rapid-curing, zero-VOC natural hardwax oils that cure completely for safe, odour-free guest dining.
        </p>

        <div class="grid-2" style="margin-bottom: 3.5mm;">
          <div>
            <h3 class="card-title">The Chemical Dilemma of Table Finishing</h3>
            <p class="body-text">
              Traditional polyurethane lacquers form a brittle plastic film across timber. When hot plates, cutlery scratches, or alcohol spills penetrate this film, moisture becomes trapped underneath, causing grey discoloration and flaking. Repairing lacquer requires stripping the entire table in an off-site spray booth.
            </p>
            <h3 class="card-title" style="margin-top: 2.5mm;">The Hardwax Oil Solution</h3>
            <p class="body-text">
              The Wood Doctor utilizes proprietary micro-porous natural hardwax oils composed of vegetable oils and natural waxes (carnauba and candelilla). The oils penetrate deep into timber pores, nourishing the wood, while the waxes cure at the surface to form a water-beading, satin shield.
            </p>
            <div class="card highlight" style="margin-top: 2.5mm;">
              <div style="font-size: 7pt; font-weight: 700; color: #9E7D4E; text-transform: uppercase;">EN 71-3 Certified</div>
              <p style="font-size: 7.6pt; color: #383D48; margin: 0; font-weight: 600;">
                Certified food-safe and saliva-resistant. Food can be served directly on restored timber surfaces without toxic leaching or solvent odor.
              </p>
            </div>
          </div>
          <div>
            <div class="img-box" style="height: 64mm;">
              <img src="${assets.ai05WoodWorkshop}" alt="Artisan Restoring Teak Table" />
            </div>
            <div class="img-caption">
              <span>REPRESENTATIVE VISUALISATION • ARTISANAL TIMBER ATELIER</span>
              <span>HAND-RUBBED OIL APPLICATION • DUST-FREE HEPA PREPARATION</span>
            </div>
          </div>
        </div>
      </div>
      <div class="doc-footer">
        <div>AFRISMME HUB • HOSPITALITY SUPPORT BOOKLET</div>
        <div>PAGE 13 OF 36</div>
      </div>
    </div>
    `,

    // PAGE 14: PART III — PILLAR 03 RESTORE: CANE & LEATHER
    `
    <div class="page">
      <div class="doc-header">
        <span class="brand-left">PART III • THE SIX SUPPORT PILLARS</span>
        <span class="section-tag">PILLAR 03 RESTORE SPEC</span>
      </div>
      <div class="content-area">
        <span class="part-banner">PART III — THE SIX SUPPORT PILLARS</span>
        <span class="eyebrow">Artisanal Craftsmanship</span>
        <h2 class="section-title">Cane Re-Weaving &amp; Fine Leather Revival</h2>
        <p class="lead-paragraph">
          Preserving heritage natural cane seating and restoring executive aniline leather upholstery to immaculate condition.
        </p>

        <div class="grid-2" style="margin-bottom: 3.5mm;">
          <div class="card">
            <h3 class="card-title">Cane Africa: Artisanal Weaving</h3>
            <p class="body-text">
              High-end hospitality spaces feature bespoke cane and rattan chairs that cannot be easily replaced from retail catalogues. Cane Africa preserves these valuable assets:
            </p>
            <ul style="font-size: 7.8pt; color: #4A505E; margin-left: 4mm; line-height: 1.5;">
              <li><strong>Hand-Tensioned Rattan Peel:</strong> Master female artisans re-weave split seats and armrests using authentic techniques.</li>
              <li><strong>Structural Frame Welding:</strong> Internal aluminum and ironwood frames are re-aligned and powder-coated.</li>
              <li><strong>UV-Resistant Synthetic Wicker:</strong> High-density polyethylene (HDPE) strands matched seamlessly to original colour profiles.</li>
            </ul>
          </div>

          <div class="card">
            <h3 class="card-title">Textile Doctor: Leather Revival</h3>
            <p class="body-text">
              Fine dining chairs and chesterfield banquettes are restored on-site using gentle restorative chemistry:
            </p>
            <ul style="font-size: 7.8pt; color: #4A505E; margin-left: 4mm; line-height: 1.5;">
              <li><strong>Deep Pore Cleansing:</strong> Removes embedded oils, grease, and dirt without drying the grain.</li>
              <li><strong>Custom Pigment Matching:</strong> Re-dyes scuffed edges and high-wear piping to exact factory colour.</li>
              <li><strong>Hydro-Lock Conditioning:</strong> Restores natural suppleness and prevents future micro-fissuring.</li>
            </ul>
          </div>
        </div>

        <div class="img-box" style="height: 50mm; margin-top: auto;">
          <img src="${assets.ai07CaneWeave}" alt="Cane Artisan Weaving in Workshop" />
        </div>
        <div class="img-caption">
          <span>REPRESENTATIVE VISUALISATION • CANE AFRICA ARTISAN ATELIER</span>
          <span>HAND-TENSIONED RATTAN • SOLID SUBSTRUCTURE ANCHORING</span>
        </div>
      </div>
      <div class="doc-footer">
        <div>AFRISMME HUB • HOSPITALITY SUPPORT BOOKLET</div>
        <div>PAGE 14 OF 36</div>
      </div>
    </div>
    `,

    // PAGE 15: PART III — PILLAR 04 MAINTAIN: EXTRACTION HYDRODYNAMICS
    `
    <div class="page">
      <div class="doc-header">
        <span class="brand-left">PART III • THE SIX SUPPORT PILLARS</span>
        <span class="section-tag">PILLAR 04 MAINTAIN</span>
      </div>
      <div class="content-area">
        <span class="part-banner">PART III — THE SIX SUPPORT PILLARS</span>
        <span class="eyebrow">Pillar 04 — Preventative Care</span>
        <h2 class="section-title">MAINTAIN: Kitchen Extraction &amp; Airflow Hydrodynamics</h2>
        <p class="lead-paragraph">
          Ensuring optimal air exchange, preventing dining room smoke contamination, and mitigating severe fire hazards in commercial kitchens.
        </p>

        <div class="grid-2" style="margin-bottom: 3.5mm;">
          <div>
            <h3 class="card-title">The Science of Commercial Extraction</h3>
            <p class="body-text">
              A high-volume restaurant extraction hood handles thousands of cubic meters of grease-laden air per hour. Over time, vaporized animal fats and cooking oils coat the interior of canopy plenums, horizontal duct runs, and rooftop centrifugal exhaust fans. This buildup restricts airflow velocity, forcing cooking smoke back into dining spaces and creating extreme fire risk.
            </p>
            <h3 class="card-title" style="margin-top: 2.5mm;">Our Certified Maintenance Protocol</h3>
            <p class="body-text">
              We perform deep degreasing and mechanical balancing strictly outside kitchen prep hours:
            </p>
            <ul style="font-size: 7.8pt; color: #4A505E; margin-left: 4mm; line-height: 1.5;">
              <li>High-temperature chemical foam dissolution of baked-on grease.</li>
              <li>Rotary brush mechanical cleaning through all duct inspection ports.</li>
              <li>Exhaust fan motor vibration analysis, belt tensioning, and bearing greasing.</li>
              <li>Digital manometer airflow velocity balancing across all hood baffles.</li>
            </ul>
          </div>
          <div>
            <div class="img-box" style="height: 64mm;">
              <img src="${assets.realKitchenExtraction}" alt="Commercial Kitchen Extraction System" />
            </div>
            <div class="img-caption">
              <span>DOCUMENTED FIELD ASSET • COMMERCIAL STAINLESS EXTRACTION</span>
              <span>NFPA 96 &amp; SANS 1850 COMPLIANT • AIRFLOW VELOCITY BALANCED</span>
            </div>
          </div>
        </div>

        <div class="card highlight" style="margin-top: auto;">
          <p style="font-size: 7.6pt; color: #383D48; margin: 0; line-height: 1.4;">
            <strong>Insurance Compliance:</strong> Every service is accompanied by a photographic audit certificate and SANS 1850 compliance log, mandatory for property insurance fire claims.
          </p>
        </div>
      </div>
      <div class="doc-footer">
        <div>AFRISMME HUB • HOSPITALITY SUPPORT BOOKLET</div>
        <div>PAGE 15 OF 36</div>
      </div>
    </div>
    `,

    // PAGE 16: PART III — PILLAR 04 MAINTAIN: COLD CHAIN & HVAC
    `
    <div class="page">
      <div class="doc-header">
        <span class="brand-left">PART III • THE SIX SUPPORT PILLARS</span>
        <span class="section-tag">PILLAR 04 MAINTAIN SPEC</span>
      </div>
      <div class="content-area">
        <span class="part-banner">PART III — THE SIX SUPPORT PILLARS</span>
        <span class="eyebrow">Technical Refrigeration &amp; HVAC</span>
        <h2 class="section-title">Cold-Chain Assurance &amp; Rapid Mobile Fleet</h2>
        <p class="lead-paragraph">
          Protecting perishable high-value culinary inventory through scheduled refrigeration maintenance and priority rapid response dispatch.
        </p>

        <div class="grid-2" style="margin-bottom: 3.5mm;">
          <div class="card">
            <h3 class="card-title">Cold-Chain Preventative Protocols</h3>
            <p class="body-text">
              A failing compressor on a walk-in freezer can ruin tens of thousands of rands in prime steaks and seafood within hours. Our scheduled servicing includes:
            </p>
            <ul style="font-size: 7.8pt; color: #4A505E; margin-left: 4mm; line-height: 1.5;">
              <li><strong>Condenser Coil De-scaling:</strong> Clean coils reduce compressor head pressure and cut energy bills by 15%.</li>
              <li><strong>Door Seal &amp; Gasket Renewal:</strong> Magnetic rubber gaskets replaced to prevent ambient air infiltration and frost build-up.</li>
              <li><strong>Digital Telemetry Logging:</strong> Temperature probe calibrations to meet municipal health inspection standards.</li>
            </ul>
          </div>

          <div class="card">
            <h3 class="card-title">Dedicated Rapid Fleet Dispatch</h3>
            <p class="body-text">
              When emergency mechanical faults occur, contract clients receive priority dispatch:
            </p>
            <ul style="font-size: 7.8pt; color: #4A505E; margin-left: 4mm; line-height: 1.5;">
              <li><strong>Sub-60 Minute Response:</strong> Mobile units stationed across Johannesburg, Cape Town, and Durban.</li>
              <li><strong>Fully Stocked Spares:</strong> Technicians arrive with universal contactors, fan motors, gas regulators, and thermostats.</li>
              <li><strong>Certified Commercial Technicians:</strong> Qualified commercial refrigeration and electrical specialists.</li>
            </ul>
          </div>
        </div>

        <div class="img-box" style="height: 50mm; margin-top: auto;">
          <img src="${assets.mockupFleet}" alt="AfriSMME Rapid Fleet Vehicle" />
        </div>
        <div class="img-caption">
          <span>DOCUMENTED FLEET ASSET • MOBILE RAPID WORKSHOP</span>
          <span>PRIORITY DISPATCH • FULL EMERGENCY SPARES INVENTORY</span>
        </div>
      </div>
      <div class="doc-footer">
        <div>AFRISMME HUB • HOSPITALITY SUPPORT BOOKLET</div>
        <div>PAGE 16 OF 36</div>
      </div>
    </div>
    `,

    // PAGE 17: PART III — PILLAR 05 PROTECT: STATUTORY SAFETY
    `
    <div class="page">
      <div class="doc-header">
        <span class="brand-left">PART III • THE SIX SUPPORT PILLARS</span>
        <span class="section-tag">PILLAR 05 PROTECT</span>
      </div>
      <div class="content-area">
        <span class="part-banner">PART III — THE SIX SUPPORT PILLARS</span>
        <span class="eyebrow">Pillar 05 — Safety &amp; Compliance Shield</span>
        <h2 class="section-title">PROTECT: Statutory Safety &amp; Municipal Compliance</h2>
        <p class="lead-paragraph">
          Protecting venue licenses, brand reputation, and operating permissions through rigorous compliance audits and risk containment.
        </p>

        <div class="grid-2" style="margin-bottom: 3.5mm;">
          <div>
            <h3 class="card-title">SANS 10400 &amp; NFPA 96 Fire Protocols</h3>
            <p class="body-text">
              Municipal fire departments and insurance assessors conduct stringent audits of commercial hospitality properties. Non-compliance results in immediate operational suspension. AfriHealth &amp; Safety ensures your property maintains continuous compliance:
            </p>
            <ul style="font-size: 7.8pt; color: #4A505E; margin-left: 4mm; line-height: 1.5;">
              <li>Automatic fire suppression system nozzle alignment and fusible link inspection.</li>
              <li>Emergency gas isolation solenoid valve testing and certification.</li>
              <li>Photoluminescent egress signage, panic hardware, and illuminated escape routes.</li>
              <li>Portable fire extinguisher servicing and regulatory tagging.</li>
            </ul>
          </div>
          <div>
            <div class="img-box" style="height: 64mm;">
              <img src="${assets.ai09Compliance}" alt="Hospitality Compliance Audit" />
            </div>
            <div class="img-caption">
              <span>REPRESENTATIVE VISUALISATION • EXECUTIVE KITCHEN SAFETY AUDIT</span>
              <span>GAS MANIFOLD • EXTRACTION AIRFLOW • HACCP LOGGING</span>
            </div>
          </div>
        </div>

        <div class="card highlight" style="margin-top: auto;">
          <p style="font-size: 7.6pt; color: #383D48; margin: 0; line-height: 1.4;">
            <strong>Zero-Shutdown Assurance:</strong> We pre-audit your premises using municipal inspection criteria, resolving potential infringements before official inspectors arrive.
          </p>
        </div>
      </div>
      <div class="doc-footer">
        <div>AFRISMME HUB • HOSPITALITY SUPPORT BOOKLET</div>
        <div>PAGE 17 OF 36</div>
      </div>
    </div>
    `,

    // PAGE 18: PART III — PILLAR 05 PROTECT: HYGIENE & UNIFORMS
    `
    <div class="page">
      <div class="doc-header">
        <span class="brand-left">PART III • THE SIX SUPPORT PILLARS</span>
        <span class="section-tag">PILLAR 05 PROTECT SPEC</span>
      </div>
      <div class="content-area">
        <span class="part-banner">PART III — THE SIX SUPPORT PILLARS</span>
        <span class="eyebrow">HACCP Protocols &amp; Staff Presentation</span>
        <h2 class="section-title">Kitchen Hygiene Standards &amp; Uniform Cresting</h2>
        <p class="lead-paragraph">
          Ensuring clinical hygiene in culinary zones and commanding corporate elegance across all front-of-house staff touchpoints.
        </p>

        <div class="grid-2" style="margin-bottom: 3.5mm;">
          <div class="card">
            <h3 class="card-title">HACCP Hygiene Readiness</h3>
            <p class="body-text">
              Under Regulation R638 of the Foodstuffs, Cosmetics and Disinfectants Act, commercial kitchens must maintain strict food hygiene protocols:
            </p>
            <ul style="font-size: 7.8pt; color: #4A505E; margin-left: 4mm; line-height: 1.5;">
              <li><strong>Cross-Contamination Zoning:</strong> Clear color-coded prep board and knife station demarcation.</li>
              <li><strong>Stainless Surface Sanitisation:</strong> Chemical passivation of stainless steel surfaces to eliminate bacterial biofilms.</li>
              <li><strong>Staff Hygiene Training Logs:</strong> Documented handwashing and temperature check registers for audit defense.</li>
            </ul>
          </div>

          <div class="card">
            <h3 class="card-title">Staff Presentation &amp; Uniforms</h3>
            <p class="body-text">
              A luxury venue's presentation is only as polished as its front-of-house staff:
            </p>
            <ul style="font-size: 7.8pt; color: #4A505E; margin-left: 4mm; line-height: 1.5;">
              <li><strong>Tailored Executive Uniforms:</strong> High-durability wool-blend blazers, stain-resistant aprons, and breathable shirts.</li>
              <li><strong>Precision Bullion Cresting:</strong> Metallic thread and etched enamel crests that communicate refined prestige.</li>
              <li><strong>Commercial Durability:</strong> Engineered for industrial laundering without color fading or fabric shrinkage.</li>
            </ul>
          </div>
        </div>

        <div class="img-box" style="height: 50mm; margin-top: auto;">
          <img src="${assets.mockupUniform}" alt="Tailored Uniform Crest Mockup" />
        </div>
        <div class="img-caption">
          <span>DOCUMENTED FIELD ASSET • BESPOKE TAILORED UNIFORM CREST</span>
          <span>HIGH-DURABILITY COMMERCIAL FABRIC • METALLIC BULLION EMBROIDERY</span>
        </div>
      </div>
      <div class="doc-footer">
        <div>AFRISMME HUB • HOSPITALITY SUPPORT BOOKLET</div>
        <div>PAGE 18 OF 36</div>
      </div>
    </div>
    `,

    // PAGE 19: PART III — PILLAR 06 GROW: DIGITAL HOSPITALITY
    `
    <div class="page">
      <div class="doc-header">
        <span class="brand-left">PART III • THE SIX SUPPORT PILLARS</span>
        <span class="section-tag">PILLAR 06 GROW</span>
      </div>
      <div class="content-area">
        <span class="part-banner">PART III — THE SIX SUPPORT PILLARS</span>
        <span class="eyebrow">Pillar 06 — Commercial &amp; Digital Lift</span>
        <h2 class="section-title">GROW: Digital Systems, Smart QR Menus &amp; Tech</h2>
        <p class="lead-paragraph">
          Connecting physical dining spaces to modern digital journeys via Scinovalities, lifting average check size and streamlining table turnover.
        </p>

        <div class="grid-2" style="margin-bottom: 3.5mm;">
          <div>
            <h3 class="card-title">Next-Gen Interactive Digital Menus</h3>
            <p class="body-text">
              Diners despise pinching and zooming on clunky PDF menus. In partnership with Scinovalities, we implement elegant, app-free interactive web menus that open instantly via custom brass QR table tokens.
            </p>
            <ul style="font-size: 7.8pt; color: #4A505E; margin-left: 4mm; line-height: 1.5;">
              <li><strong>Dynamic Cellar Pairing:</strong> Recommends reserve wines tailored to each chosen starter or main dish.</li>
              <li><strong>High-Resolution Imagery:</strong> Editorial photography of signature dishes, proven to increase appetizer conversion.</li>
              <li><strong>Multi-Currency Conversion:</strong> Automatically displays prices in USD, EUR, or GBP for international tourists.</li>
            </ul>
          </div>
          <div>
            <div class="img-box" style="height: 64mm;">
              <img src="${assets.ai10DigitalTech}" alt="Digital Hospitality Analytics UI" />
            </div>
            <div class="img-caption">
              <span>REPRESENTATIVE VISUALISATION • DIGITAL HOSPITALITY PLATFORM</span>
              <span>SCINOVALITIES TECH • INTERACTIVE QR MENUS • TABLE ANALYTICS</span>
            </div>
          </div>
        </div>

        <div class="card highlight" style="margin-top: auto;">
          <p style="font-size: 7.6pt; color: #383D48; margin: 0; line-height: 1.4;">
            <strong>Measurable Lift:</strong> Restaurants deploying our interactive digital menu platform report an average 18% increase in dessert and specialty cocktail orders.
          </p>
        </div>
      </div>
      <div class="doc-footer">
        <div>AFRISMME HUB • HOSPITALITY SUPPORT BOOKLET</div>
        <div>PAGE 19 OF 36</div>
      </div>
    </div>
    `,

    // PAGE 20: PART III — PILLAR 06 GROW: FLOORPLAN YIELD
    `
    <div class="page">
      <div class="doc-header">
        <span class="brand-left">PART III • THE SIX SUPPORT PILLARS</span>
        <span class="section-tag">PILLAR 06 GROW SPEC</span>
      </div>
      <div class="content-area">
        <span class="part-banner">PART III — THE SIX SUPPORT PILLARS</span>
        <span class="eyebrow">Capacity Modeling &amp; Turnover</span>
        <h2 class="section-title">Floorplan Yield Modeling &amp; Capacity Lift</h2>
        <p class="lead-paragraph">
          Optimizing physical table layouts and server circulation pathways to add high-value covers without compromising dining room elegance.
        </p>

        <div class="grid-2" style="margin-bottom: 3.5mm;">
          <div class="card">
            <h3 class="card-title">Dynamic Seating Reconfiguration</h3>
            <p class="body-text">
              Many dining rooms are over-indexed on 4-top tables, leaving empty chairs when couples dine. We model table mix data to configure flexible modular layouts:
            </p>
            <ul style="font-size: 7.8pt; color: #4A505E; margin-left: 4mm; line-height: 1.5;">
              <li>Convert fixed 4-tops into divisible 2-top banquette pairs.</li>
              <li>Increases total room cover density by 14% to 22% during peak dinner shifts.</li>
              <li>Maintains compliant 1.2m service aisles for food runner trolley efficiency.</li>
            </ul>
          </div>

          <div class="card">
            <h3 class="card-title">Local SEO &amp; Answer Engine Dominance</h3>
            <p class="body-text">
              We ensure your venue dominates search results when high-value diners search for dining in your area:
            </p>
            <ul style="font-size: 7.8pt; color: #4A505E; margin-left: 4mm; line-height: 1.5;">
              <li><strong>Google Maps &amp; Apple Maps:</strong> Complete optimization with professional photography and verified menus.</li>
              <li><strong>Answer Engine Optimisation (AEO):</strong> Structured markup ensuring ChatGPT, Siri, and Gemini recommend your venue.</li>
              <li><strong>Reputation Telemetry:</strong> Instant review monitoring and sentiment analysis alerts.</li>
            </ul>
          </div>
        </div>

        <div class="stat-strip" style="margin-top: auto;">
          <div class="stat-box">
            <div class="stat-val">+18%</div>
            <div class="stat-lbl">Cover Density</div>
          </div>
          <div class="stat-box">
            <div class="stat-val">#1</div>
            <div class="stat-lbl">Local Search Map</div>
          </div>
          <div class="stat-box">
            <div class="stat-val">&lt;30s</div>
            <div class="stat-lbl">AI Lead Response</div>
          </div>
          <div class="stat-box">
            <div class="stat-val">100%</div>
            <div class="stat-lbl">Brand Synergized</div>
          </div>
        </div>
      </div>
      <div class="doc-footer">
        <div>AFRISMME HUB • HOSPITALITY SUPPORT BOOKLET</div>
        <div>PAGE 20 OF 36</div>
      </div>
    </div>
    `,

    // PAGE 21: PART IV — SPECIALIST CAPABILITIES: TIMBER SCIENCE
    `
    <div class="page">
      <div class="doc-header">
        <span class="brand-left">PART IV • SPECIALIST CAPABILITIES</span>
        <span class="section-tag">07 TIMBER SCIENCE</span>
      </div>
      <div class="content-area">
        <span class="part-banner">PART IV — SPECIALIST CAPABILITIES</span>
        <span class="eyebrow">Artisanal Engineering</span>
        <h2 class="section-title">Timber Science: Substrates, Curing &amp; Hardwax Chemistry</h2>
        <p class="lead-paragraph">
          Technical specifications for solid African teak, French oak, kiaat, and massaranduba hardwood restoration.
        </p>

        <div class="grid-2" style="margin-bottom: 3.5mm;">
          <div class="card">
            <h3 class="card-title">Commercial Hardwood Species Profiles</h3>
            <p class="body-text">
              Different hardwood timbers behave distinctly under commercial hospitality conditions:
            </p>
            <ul style="font-size: 7.6pt; color: #4A505E; margin-left: 4mm; line-height: 1.45;">
              <li><strong>Rhodesian / African Teak (Baikiaea plurijuga):</strong> Dense, oily grain requiring specialized solvent pore cleansing before oil penetration.</li>
              <li><strong>French &amp; American Oak:</strong> Open-grain structure prone to tannin reaction with wine. Requires oxalic acid neutralization before sealing.</li>
              <li><strong>Massaranduba (Decking):</strong> Extremely dense ironwood substrate requiring deep penetrating tung oil emulsions to prevent sun checking.</li>
            </ul>
          </div>

          <div class="card">
            <h3 class="card-title">Multi-Stage Restoration Methodology</h3>
            <p class="body-text">
              The Wood Doctor applies a strict 5-stage mechanical and chemical protocol:
            </p>
            <ol style="font-size: 7.6pt; color: #4A505E; margin-left: 4mm; line-height: 1.45;">
              <li><strong>Stage 1:</strong> Coarse orbital sanding (80-grit) to eradicate heat rings, deep gouges, and degraded factory lacquers.</li>
              <li><strong>Stage 2:</strong> Chemical pore cleansing removing embedded food greases.</li>
              <li><strong>Stage 3:</strong> Fine finishing sanding (180 to 240-grit) creating silky tactile grain.</li>
              <li><strong>Stage 4:</strong> Hand-rubbed application of natural hardwax oil buffed into pores.</li>
              <li><strong>Stage 5:</strong> Forced air ventilation curing achieving certified food contact safety before service handover.</li>
            </ol>
          </div>
        </div>

        <div class="card highlight" style="margin-top: auto;">
          <p style="font-size: 7.6pt; color: #383D48; margin: 0; line-height: 1.4;">
            <strong>Asset Preservation Economics:</strong> A set of 25 solid teak dining tables costs over R250,000 to replace with imported stock. The Wood Doctor restores the entire set in phased batches for less than R45,000, preserving original timber capital.
          </p>
        </div>
      </div>
      <div class="doc-footer">
        <div>AFRISMME HUB • HOSPITALITY SUPPORT BOOKLET</div>
        <div>PAGE 21 OF 36</div>
      </div>
    </div>
    `,

    // PAGE 22: PART IV — SPECIALIST CAPABILITIES: TEXTILE & LEATHER
    `
    <div class="page">
      <div class="doc-header">
        <span class="brand-left">PART IV • SPECIALIST CAPABILITIES</span>
        <span class="section-tag">08 TEXTILE &amp; LEATHER</span>
      </div>
      <div class="content-area">
        <span class="part-banner">PART IV — SPECIALIST CAPABILITIES</span>
        <span class="eyebrow">Upholstery Engineering</span>
        <h2 class="section-title">Textile &amp; Leather Engineering Standards</h2>
        <p class="lead-paragraph">
          Contract abrasion ratings, stain-repellent technologies, and leather rejuvenation protocols for luxury seating.
        </p>

        <div class="grid-2" style="margin-bottom: 3.5mm;">
          <div class="card">
            <h3 class="card-title">Martindale Abrasion &amp; Crypton Technology</h3>
            <p class="body-text">
              Residential fabrics disintegrate within months under commercial restaurant traffic. We specify contract-grade textiles engineered for institutional use:
            </p>
            <ul style="font-size: 7.6pt; color: #4A505E; margin-left: 4mm; line-height: 1.45;">
              <li><strong>Martindale Rub Test:</strong> Minimum 50,000 rubs (severe contract grade); selected velvets rated up to 100,000 rubs.</li>
              <li><strong>Crypton Moisture Barrier:</strong> An integrated, breathable fluid barrier preventing wine, coffee, and sauces from reaching inner foam.</li>
              <li><strong>Antimicrobial Treatment:</strong> Silver ion technology inhibiting mold and bacteria growth inside seating seams.</li>
            </ul>
          </div>

          <div class="card">
            <h3 class="card-title">Leather Hydration &amp; Pigment Restoration</h3>
            <p class="body-text">
              Fine full-grain aniline and semi-aniline leathers dry out and crack under air conditioning and sunlight. Our Textile Doctor restoration protocol:
            </p>
            <ul style="font-size: 7.6pt; color: #4A505E; margin-left: 4mm; line-height: 1.45;">
              <li><strong>pH-Balanced Cleansing:</strong> Opens leather pores without stripping natural oils.</li>
              <li><strong>Deep Collagen Hydration:</strong> Emulsified lipids re-hydrate the fibrous structure, restoring leather suppleness.</li>
              <li><strong>Micro-Pigment Spray:</strong> Precision color-matched airbrushing covers scuffs while preserving natural grain character.</li>
            </ul>
          </div>
        </div>

        <div class="img-box" style="height: 50mm; margin-top: auto;">
          <img src="${assets.ai06Upholstery}" alt="Leather Banquette Fluting Detail" />
        </div>
        <div class="img-caption">
          <span>REPRESENTATIVE VISUALISATION • COGNAC LEATHER BANQUETTE FLUTING</span>
          <span>50,000+ MARTINDALE RATING • CMHR FIRE RETARDANT FOAM</span>
        </div>
      </div>
      <div class="doc-footer">
        <div>AFRISMME HUB • HOSPITALITY SUPPORT BOOKLET</div>
        <div>PAGE 22 OF 36</div>
      </div>
    </div>
    `,

    // PAGE 23: PART IV — SPECIALIST CAPABILITIES: CANE WEAVING
    `
    <div class="page">
      <div class="doc-header">
        <span class="brand-left">PART IV • SPECIALIST CAPABILITIES</span>
        <span class="section-tag">09 CANE &amp; WICKER</span>
      </div>
      <div class="content-area">
        <span class="part-banner">PART IV — SPECIALIST CAPABILITIES</span>
        <span class="eyebrow">Artisanal Handcraft</span>
        <h2 class="section-title">Cane Africa: Rattan &amp; Synthetic Wicker Science</h2>
        <p class="lead-paragraph">
          Reviving handcrafted woven furniture through traditional hand-tensioning techniques and marine-grade polymer strands.
        </p>

        <div class="grid-2" style="margin-bottom: 3.5mm;">
          <div class="card">
            <h3 class="card-title">Natural Rattan vs Synthetic Wicker</h3>
            <p class="body-text">
              Hospitality environments utilize both natural and all-weather synthetic woven materials, each requiring specialized craft approaches:
            </p>
            <ul style="font-size: 7.6pt; color: #4A505E; margin-left: 4mm; line-height: 1.45;">
              <li><strong>Natural Rattan Core &amp; Peel:</strong> Sourced from sustainable tropical palms. Must be hydrated before weaving to ensure flexibility, drying into rock-solid tension.</li>
              <li><strong>High-Density Polyethylene (HDPE) Wicker:</strong> UV-inhibited synthetic strands designed for pool decks and coastal terraces. Will not crack, fade, or rot in marine air.</li>
            </ul>
          </div>

          <div class="card">
            <h3 class="card-title">Structural Re-tensioning Protocols</h3>
            <p class="body-text">
              When cane chairs sag, the underlying substructure has often failed. Cane Africa addresses the entire chair architecture:
            </p>
            <ol style="font-size: 7.6pt; color: #4A505E; margin-left: 4mm; line-height: 1.45;">
              <li>De-construct broken cane strands and inspect the underlying frame.</li>
              <li>Weld or reinforce internal aluminum, beech, or ironwood joins.</li>
              <li>Hand-weave fresh cane strands using bone fid tools to lock knots securely.</li>
              <li>Apply protective elasticized clear sealer to shield natural cane from moisture.</li>
            </ol>
          </div>
        </div>

        <div class="img-box" style="height: 50mm; margin-top: auto;">
          <img src="${assets.ai07CaneWeave}" alt="Artisan Weaving Cane Chair" />
        </div>
        <div class="img-caption">
          <span>REPRESENTATIVE VISUALISATION • CANE AFRICA ATELIER</span>
          <span>ARTISANAL HAND WEAVING • FRAME REINFORCEMENT</span>
        </div>
      </div>
      <div class="doc-footer">
        <div>AFRISMME HUB • HOSPITALITY SUPPORT BOOKLET</div>
        <div>PAGE 23 OF 36</div>
      </div>
    </div>
    `,

    // PAGE 24: PART IV — SPECIALIST CAPABILITIES: EXTRACTION & FIRE DAMPERS
    `
    <div class="page">
      <div class="doc-header">
        <span class="brand-left">PART IV • SPECIALIST CAPABILITIES</span>
        <span class="section-tag">10 EXTRACTION DAMPERS</span>
      </div>
      <div class="content-area">
        <span class="part-banner">PART IV — SPECIALIST CAPABILITIES</span>
        <span class="eyebrow">Commercial Mechanical Engineering</span>
        <h2 class="section-title">Commercial Kitchen Ventilation &amp; Fire Dampers</h2>
        <p class="lead-paragraph">
          Hydrodynamic airflow balancing, chemical grease emulsification, and fire damper compliance under SANS 1850 standards.
        </p>

        <div class="grid-2" style="margin-bottom: 3.5mm;">
          <div class="card">
            <h3 class="card-title">Fire Damper Verification</h3>
            <p class="body-text">
              In commercial kitchen exhaust ducts, fire dampers prevent flames and superheated gas from spreading from the kitchen into dining areas or hotel guest rooms above.
            </p>
            <ul style="font-size: 7.6pt; color: #4A505E; margin-left: 4mm; line-height: 1.45;">
              <li><strong>Fusible Link Testing:</strong> Verify links melt and trigger damper closure at 72°C / 141°C.</li>
              <li><strong>Track Lubrication:</strong> Clean grease accumulation preventing spring-loaded blades from slamming shut.</li>
              <li><strong>Inspection Port Access:</strong> Cut and install sealed SANS-compliant access doors every 3 meters along vertical risers.</li>
            </ul>
          </div>

          <div class="card">
            <h3 class="card-title">Airflow Balancing &amp; Carbon Scrubbers</h3>
            <p class="body-text">
              Negative kitchen pressure draws conditioned dining room air away; positive kitchen pressure pushes cooking fumes into the dining room.
            </p>
            <ul style="font-size: 7.6pt; color: #4A505E; margin-left: 4mm; line-height: 1.45;">
              <li><strong>Airflow Capture Velocity:</strong> Balance hood face velocity to an optimal 0.5 m/s.</li>
              <li><strong>Electrostatic Precipitators (ESP):</strong> Clean ionization plates removing microscopic grease aerosols.</li>
              <li><strong>Activated Carbon Canisters:</strong> Refill carbon beds neutralizing cooking odors before roof exhaust discharge.</li>
            </ul>
          </div>
        </div>

        <div class="stat-strip" style="margin-top: auto;">
          <div class="stat-box">
            <div class="stat-val">SANS 1850</div>
            <div class="stat-lbl">Kitchen Standard</div>
          </div>
          <div class="stat-box">
            <div class="stat-val">NFPA 96</div>
            <div class="stat-lbl">Fire Code Align</div>
          </div>
          <div class="stat-box">
            <div class="stat-val">0.5 m/s</div>
            <div class="stat-lbl">Capture Velocity</div>
          </div>
          <div class="stat-box">
            <div class="stat-val">100%</div>
            <div class="stat-lbl">Pass Guarantee</div>
          </div>
        </div>
      </div>
      <div class="doc-footer">
        <div>AFRISMME HUB • HOSPITALITY SUPPORT BOOKLET</div>
        <div>PAGE 24 OF 36</div>
      </div>
    </div>
    `,

    // PAGE 25: PART V — TECHNOLOGY: UNIFIED GUEST JOURNEY
    `
    <div class="page dark">
      <div class="doc-header">
        <span class="brand-left">PART V • TECHNOLOGY &amp; DIGITAL HOSPITALITY</span>
        <span class="section-tag">11 DIGITAL GUEST JOURNEY</span>
      </div>
      <div class="content-area">
        <span class="part-banner">PART V • TECHNOLOGY &amp; DIGITAL HOSPITALITY</span>
        <span class="eyebrow">Scinovalities Architecture</span>
        <h2 class="section-title">The Unified Digital Guest Discovery Journey</h2>
        <p class="lead-paragraph">
          Ensuring your physical luxury and digital footprint tell the exact same story across search, social, web, and dining room touchpoints.
        </p>

        <div class="grid-2" style="margin-bottom: 3.5mm;">
          <div class="card">
            <h3 class="card-title" style="color: #C5A880;">The 4-Stage Digital Hospitality Funnel</h3>
            <div style="font-size: 7.6pt; color: #D2D7E2; line-height: 1.55;">
              <div style="padding: 1mm 0; border-bottom: 1px solid #282D37;">
                <strong style="color: #C5A880;">1. Discovery (AEO &amp; Google Maps):</strong> Diners search "best steakhouse in Sandton" or "sea-view terrace in Camps Bay". Our schema optimization places your venue #1 in AI summaries.
              </div>
              <div style="padding: 1mm 0; border-bottom: 1px solid #282D37;">
                <strong style="color: #C5A880;">2. Reservation Conversion:</strong> Sub-second mobile site with direct Dineplan / OpenTable integration captures bookings without third-party commission bleed.
              </div>
              <div style="padding: 1mm 0; border-bottom: 1px solid #282D37;">
                <strong style="color: #C5A880;">3. Dining Room Engagement:</strong> Smart QR menus display sommelier notes, allergens, and signature dish visuals directly on guest smartphones.
              </div>
              <div style="padding: 1mm 0;">
                <strong style="color: #C5A880;">4. Post-Meal Advocacy:</strong> Automated WhatsApp follow-up requests verified 5-star Google Reviews, continuously elevating your venue ranking.
              </div>
            </div>
          </div>

          <div class="card">
            <h3 class="card-title" style="color: #C5A880;">Direct vs Aggregator Economics</h3>
            <p class="body-text">
              Hospitality operators forfeit 15% to 25% of top-line revenue to third-party delivery and booking aggregators. Our digital architecture captures direct guest data, building your private CRM database of high-net-worth regulars.
            </p>
            <div style="background: rgba(197,168,128,0.1); border: 1px solid #C5A880; padding: 2.5mm; border-radius: 2px; margin-top: 3mm;">
              <div style="font-size: 7pt; font-weight: 700; color: #C5A880; text-transform: uppercase;">Direct Booking Advantage</div>
              <p style="font-size: 7.4pt; color: #A6ADB9; margin: 0; line-height: 1.35;">
                Every confirmed direct booking saves platform fees and establishes direct marketing access for wine dinners, private events, and seasonal menu launches.
              </p>
            </div>
          </div>
        </div>

        <div class="diagram-wrapper" style="margin-top: auto;">
          <img src="${assets.diagram04}" alt="Connected Hospitality Continuum" />
        </div>
      </div>
      <div class="doc-footer">
        <div>AFRISMME HUB • HOSPITALITY SUPPORT BOOKLET</div>
        <div>PAGE 25 OF 36</div>
      </div>
    </div>
    `,

    // PAGE 26: PART V — TECHNOLOGY: AI GUEST CONCIERGE
    `
    <div class="page dark">
      <div class="doc-header">
        <span class="brand-left">PART V • TECHNOLOGY &amp; DIGITAL HOSPITALITY</span>
        <span class="section-tag">12 AI &amp; TELEMETRY</span>
      </div>
      <div class="content-area">
        <span class="part-banner">PART V • TECHNOLOGY &amp; DIGITAL HOSPITALITY</span>
        <span class="eyebrow">Scinovalities Artificial Intelligence</span>
        <h2 class="section-title">24/7 AI Guest Concierge &amp; Reputation Telemetry</h2>
        <p class="lead-paragraph">
          Automating group dining inquiries, instant reservation assistance, and real-time review sentiment alerts.
        </p>

        <div class="grid-2" style="margin-bottom: 3.5mm;">
          <div class="card">
            <h3 class="card-title" style="color: #C5A880;">Intelligent Event &amp; PDR Routing</h3>
            <p class="body-text">
              High-value private dining room (PDR) and corporate function inquiries often arrive outside office hours. If unaddressed promptly, corporate organizers book competitor venues.
            </p>
            <ul style="font-size: 7.6pt; color: #D2D7E2; margin-left: 4mm; line-height: 1.5;">
              <li><strong>Instant Automated Quotation:</strong> AI calculates set-menu pricing based on guest numbers and beverage packages.</li>
              <li><strong>Dietary Capability Q&amp;A:</strong> Confirms halal-friendly, vegan, or celiac options instantly using your menu database.</li>
              <li><strong>Executive Lead Handover:</strong> Sends pre-qualified event dossiers directly to your general manager's phone.</li>
            </ul>
          </div>

          <div class="card">
            <h3 class="card-title" style="color: #C5A880;">Live Sentiment Telemetry</h3>
            <p class="body-text">
              Our telemetry monitors online customer sentiment 24/7 across TripAdvisor, Google, and Instagram:
            </p>
            <ul style="font-size: 7.6pt; color: #D2D7E2; margin-left: 4mm; line-height: 1.5;">
              <li><strong>Early Noise / Acoustic Alerts:</strong> Detects recurring patron comments regarding dining room echo before ratings drop.</li>
              <li><strong>Service Choke Detection:</strong> Identifies specific shifts with prolonged wait times between mains and dessert.</li>
              <li><strong>Automated Professional Responses:</strong> Generates executive-level management responses to public reviews.</li>
            </ul>
          </div>
        </div>

        <div class="img-box" style="height: 50mm; margin-top: auto;">
          <img src="${assets.ai10DigitalTech}" alt="Hospitality Digital Dashboard" />
        </div>
        <div class="img-caption">
          <span>REPRESENTATIVE VISUALISATION • SCINOVALITIES DIGITAL HOSPITALITY</span>
          <span>RESERVATION TELEMETRY • AUTOMATED GUEST MESSAGING PIPELINE</span>
        </div>
      </div>
      <div class="doc-footer">
        <div>AFRISMME HUB • HOSPITALITY SUPPORT BOOKLET</div>
        <div>PAGE 26 OF 36</div>
      </div>
    </div>
    `,

    // PAGE 27: PART VI — ASSESSMENT PROTOCOL: 10-POINT AUDIT
    `
    <div class="page">
      <div class="doc-header">
        <span class="brand-left">PART VI • ASSESSMENT &amp; IMPLEMENTATION</span>
        <span class="section-tag">13 DIAGNOSTIC AUDIT</span>
      </div>
      <div class="content-area">
        <span class="part-banner">PART VI — ASSESSMENT &amp; IMPLEMENTATION</span>
        <span class="eyebrow">Consultative Methodology</span>
        <h2 class="section-title">The 10-Point Hospitality Venue Diagnostic Protocol</h2>
        <p class="lead-paragraph">
          An objective, data-driven evaluation of your property across ten operational and structural dimensions.
        </p>

        <table class="matrix-table">
          <thead>
            <tr>
              <th style="width: 20%;">Dimension</th>
              <th style="width: 45%;">Diagnostic Criteria &amp; Assessment Scope</th>
              <th style="width: 35%;">Typical Identified Deficit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>01. Physical Environment</strong></td>
              <td>Flooring wear, entrance street appeal, architectural facade brass condition.</td>
              <td>Scuffed traffic lanes, dull finishes, tarnished brass.</td>
            </tr>
            <tr>
              <td><strong>02. Guest Experience</strong></td>
              <td>Ambient noise reverberation (RT60), table spacing, seating comfort.</td>
              <td>Deafening echo during peak dinner; collapsed booth foam.</td>
            </tr>
            <tr>
              <td><strong>03. Outdoor Spaces</strong></td>
              <td>Parasol wind ratings, canopy UV degradation, terrace wind tunnels.</td>
              <td>Terrace empty during midday heat or light gusts.</td>
            </tr>
            <tr>
              <td><strong>04. Furniture &amp; Finishes</strong></td>
              <td>Table surface lacquer, cane structural weave, leather hydration.</td>
              <td>Wine stains, heat rings, snapped wicker strands.</td>
            </tr>
            <tr>
              <td><strong>05. Preventative Care</strong></td>
              <td>Extraction hood degreasing logs, motor belts, compressor coils.</td>
              <td>Grease accumulation in ducts; warm refrigeration.</td>
            </tr>
            <tr>
              <td><strong>06. Safety &amp; Compliance</strong></td>
              <td>SANS 10400 fire egress, gas isolation valves, hygiene HACCP logs.</td>
              <td>Missing inspection tags, uncalibrated temperature logs.</td>
            </tr>
            <tr>
              <td><strong>07. Digital Presence</strong></td>
              <td>Mobile website load speed, Google Maps visibility, menu accessibility.</td>
              <td>Unsearchable PDF menus, slow mobile page loads.</td>
            </tr>
            <tr>
              <td><strong>08. Technology &amp; AI</strong></td>
              <td>Automated reservation workflows, guest inquiry response times.</td>
              <td>Lost private dining room leads over weekends.</td>
            </tr>
            <tr>
              <td><strong>09. Operational Flow</strong></td>
              <td>Waitstation choke points, runner circulation, busing return paths.</td>
              <td>Server collisions during peak 20:00 dinner rush.</td>
            </tr>
            <tr>
              <td><strong>10. Growth Yield</strong></td>
              <td>Seat density yield, 2-top vs 4-top mix, average spend optimization.</td>
              <td>Empty chairs at 4-tops; under-utilized patio corners.</td>
            </tr>
          </tbody>
        </table>

        <div class="card highlight" style="margin-top: auto;">
          <p style="font-size: 7.6pt; color: #4A505E; margin: 0; line-height: 1.4;">
            <strong>Audit Turnaround:</strong> Our technical team conducts the complete 90-minute walk-through and delivers an executive diagnostic roadmap with itemized pricing within 48 hours.
          </p>
        </div>
      </div>
      <div class="doc-footer">
        <div>AFRISMME HUB • HOSPITALITY SUPPORT BOOKLET</div>
        <div>PAGE 27 OF 36</div>
      </div>
    </div>
    `,

    // PAGE 28: PART VI — ASSESSMENT PROTOCOL: 4-TIER MATRIX
    `
    <div class="page">
      <div class="doc-header">
        <span class="brand-left">PART VI • ASSESSMENT &amp; IMPLEMENTATION</span>
        <span class="section-tag">14 PRIORITISATION MATRIX</span>
      </div>
      <div class="content-area">
        <span class="part-banner">PART VI — ASSESSMENT &amp; IMPLEMENTATION</span>
        <span class="eyebrow">Strategic Decision Framework</span>
        <h2 class="section-title">The 4-Tier Prioritisation Decision Framework</h2>
        <p class="lead-paragraph">
          Allocating maintenance budgets where they deliver immediate regulatory security, cover yield lift, or tangible cost savings.
        </p>

        <div style="display: flex; flex-direction: column; gap: 2.5mm; margin-bottom: 3.5mm;">
          <div class="card" style="border-left: 4px solid #C0392B; padding: 2.5mm 3.5mm;">
            <div style="display: flex; justify-content: space-between; align-items: baseline;">
              <strong style="font-size: 9pt; color: #C0392B;">PRIORITY 1 — CRITICAL (Life Safety &amp; Statutory Risk)</strong>
              <span class="badge" style="background: rgba(192,57,43,0.1); color: #C0392B; border-color: rgba(192,57,43,0.3); margin: 0;">Execute Within 48 Hours</span>
            </div>
            <p style="font-size: 7.6pt; color: #4A505E; margin: 1mm 0 0 0; line-height: 1.4;">
              <strong>Scope:</strong> Gas manifold leaks, kitchen extraction fire hazards (NFPA 96), blocked emergency exits, or refrigeration failures threatening food safety. Failure risks immediate municipal closure or insurance forfeiture.
            </p>
          </div>

          <div class="card" style="border-left: 4px solid #D35400; padding: 2.5mm 3.5mm;">
            <div style="display: flex; justify-content: space-between; align-items: baseline;">
              <strong style="font-size: 9pt; color: #D35400;">PRIORITY 2 — HIGH IMPACT (Direct Revenue &amp; Cover Lift)</strong>
              <span class="badge" style="background: rgba(211,84,0,0.1); color: #D35400; border-color: rgba(211,84,0,0.3); margin: 0;">Execute Within 14 Days</span>
            </div>
            <p style="font-size: 7.6pt; color: #4A505E; margin: 1mm 0 0 0; line-height: 1.4;">
              <strong>Scope:</strong> Commercial cantilever umbrella installations on unused terraces, acoustic dining treatments (NRC &gt; 0.85) to resolve noisy dining rooms, and floorplan reconfigurations adding 15% to 25% peak covers.
            </p>
          </div>

          <div class="card" style="border-left: 4px solid #F39C12; padding: 2.5mm 3.5mm;">
            <div style="display: flex; justify-content: space-between; align-items: baseline;">
              <strong style="font-size: 9pt; color: #F39C12;">PRIORITY 3 — IMPROVEMENT (Brand Prestige &amp; Asset Care)</strong>
              <span class="badge" style="background: rgba(243,156,18,0.1); color: #F39C12; border-color: rgba(243,156,18,0.3); margin: 0;">Execute Within 30 Days</span>
            </div>
            <p style="font-size: 7.6pt; color: #4A505E; margin: 1mm 0 0 0; line-height: 1.4;">
              <strong>Scope:</strong> Phased solid hardwood table refinishing with zero-VOC food-safe oils, cane chair re-weaving, contract leather hydration, and entrance architectural brass signage polishing.
            </p>
          </div>

          <div class="card" style="border-left: 4px solid #27AE60; padding: 2.5mm 3.5mm;">
            <div style="display: flex; justify-content: space-between; align-items: baseline;">
              <strong style="font-size: 9pt; color: #27AE60;">PRIORITY 4 — OPTIMISATION (Digital &amp; Long-Term Telemetry)</strong>
              <span class="badge" style="background: rgba(39,174,96,0.1); color: #27AE60; border-color: rgba(39,174,96,0.3); margin: 0;">Continuous Program</span>
            </div>
            <p style="font-size: 7.6pt; color: #4A505E; margin: 1mm 0 0 0; line-height: 1.4;">
              <strong>Scope:</strong> Interactive QR smart menus, AI guest concierge automation, Google Maps local SEO dominance, and monthly preventative maintenance scheduling.
            </p>
          </div>
        </div>

        <div class="card" style="background: #1B3B2B; color: #FAF8F5; margin-top: auto; padding: 2.8mm 3.5mm;">
          <p style="font-size: 7.6pt; color: #E5DEC9; margin: 0; line-height: 1.4;">
            <strong>Budgetary Clarity:</strong> Operators select which priorities to implement immediately versus phasing across quarterly budgets under our flexible SLA agreement.
          </p>
        </div>
      </div>
      <div class="doc-footer">
        <div>AFRISMME HUB • HOSPITALITY SUPPORT BOOKLET</div>
        <div>PAGE 28 OF 36</div>
      </div>
    </div>
    `,

    // PAGE 29: PART VI — DIAGRAM 2: IMPROVEMENT CYCLE
    `
    <div class="page dark">
      <div class="doc-header">
        <span class="brand-left">PART VI • ASSESSMENT &amp; IMPLEMENTATION</span>
        <span class="section-tag">15 VALUE CYCLE</span>
      </div>
      <div class="content-area">
        <span class="part-banner">PART VI — ASSESSMENT &amp; IMPLEMENTATION</span>
        <span class="eyebrow">Closed-Loop Value Creation</span>
        <h2 class="section-title">The Continuous Venue Improvement Cycle</h2>
        <p class="lead-paragraph">
          How AfriSMME Hub transforms hospitality facilities from reactive maintenance liabilities into performing commercial assets.
        </p>

        <div class="diagram-wrapper" style="margin-bottom: 3.5mm;">
          <img src="${assets.diagram02}" alt="The Venue Improvement Cycle Diagram" />
        </div>

        <div class="grid-2" style="margin-top: auto;">
          <div class="card">
            <h3 class="card-title" style="color: #C5A880;">Identify, Assess &amp; Prioritise</h3>
            <p class="body-text" style="margin: 0;">
              Objective diagnostic telemetry pinpoints wear before catastrophic failure occurs. Fixed-cost prioritised roadmaps eliminate surprise contractor invoices.
            </p>
          </div>
          <div class="card">
            <h3 class="card-title" style="color: #C5A880;">Implement, Maintain &amp; Grow</h3>
            <p class="body-text" style="margin: 0;">
              Phased daytime and scheduled maintenance execution keeps your trading floor performing. Continuous scheduled servicing and digital optimization compound bottom-line venue valuation.
            </p>
          </div>
        </div>
      </div>
      <div class="doc-footer">
        <div>AFRISMME HUB • HOSPITALITY SUPPORT BOOKLET</div>
        <div>PAGE 29 OF 36</div>
      </div>
    </div>
    `,

    // PAGE 30: PART VI — PHASED & SCHEDULED OPERATING RUNBOOK
    `
    <div class="page dark">
      <div class="doc-header">
        <span class="brand-left">PART VI • ASSESSMENT &amp; IMPLEMENTATION</span>
        <span class="section-tag">16 SCHEDULED RUNBOOK</span>
      </div>
      <div class="content-area">
        <span class="part-banner">PART VI — ASSESSMENT &amp; IMPLEMENTATION</span>
        <span class="eyebrow">Phased Execution Protocol</span>
        <h2 class="section-title">The Phased &amp; Scheduled Execution Runbook</h2>
        <p class="lead-paragraph">
          The step-by-step operational protocol that ensures minimal trading disruption and guaranteed service-ready handovers.
        </p>

        <div style="font-size: 7.8pt; color: #E5DEC9; line-height: 1.55; margin-bottom: 3.5mm;">
          <div style="background: #132A1F; border-left: 3px solid #C5A880; padding: 2mm 3mm; margin-bottom: 1.8mm; border-radius: 2px;">
            <strong style="color: #C5A880;">STAGE 01 — Site Ingress &amp; Zonal Containment Setup</strong><br/>
            Crew arrives during scheduled daytime maintenance windows. Lay industrial neoprene floor runners across transit lanes; isolate work zones cleanly.
          </div>
          <div style="background: #132A1F; border-left: 3px solid #C5A880; padding: 2mm 3mm; margin-bottom: 1.8mm; border-radius: 2px;">
            <strong style="color: #C5A880;">STAGE 02 — HEPA Dustless Sanding &amp; Batch Collection</strong><br/>
            Festool multi-disc sanders connected to HEPA extractors strip tables, or furniture batches are rotated to our Kew, Sandton workshop.
          </div>
          <div style="background: #132A1F; border-left: 3px solid #C5A880; padding: 2mm 3mm; margin-bottom: 1.8mm; border-radius: 2px;">
            <strong style="color: #C5A880;">STAGE 03 — Kitchen Extraction Chemical Degreasing</strong><br/>
            High-pressure alkaline foam injected into extraction ducts during scheduled kitchen maintenance windows. Technicians scrape baffles down to bare stainless steel.
          </div>
          <div style="background: #132A1F; border-left: 3px solid #C5A880; padding: 2mm 3mm; margin-bottom: 1.8mm; border-radius: 2px;">
            <strong style="color: #C5A880;">STAGE 04 — Food-Safe Zero-VOC Hardwax Application</strong><br/>
            Natural plant oils buffed into timber grain. Leather seats conditioned; brass fixtures polished with non-abrasive cream.
          </div>
          <div style="background: #132A1F; border-left: 3px solid #C5A880; padding: 2mm 3mm; margin-bottom: 1.8mm; border-radius: 2px;">
            <strong style="color: #C5A880;">STAGE 05 — Air Exchange &amp; Odor Verification</strong><br/>
            Industrial ozone-free air scrubbers verify clean dining room air. Ambient VOC readings verified at 0.0 ppm.
          </div>
          <div style="background: #132A1F; border-left: 3px solid #27AE60; padding: 2mm 3mm; border-radius: 2px;">
            <strong style="color: #27AE60;">STAGE 06 — Formal Handover Sign-Off</strong><br/>
            Site supervisor walks property with duty manager. Checklist signed; zone is pristine, odorless, and ready for guest service.
          </div>
        </div>

        <div class="stat-strip" style="margin-top: auto;">
          <div class="stat-box">
            <div class="stat-val">0.0 ppm</div>
            <div class="stat-lbl">VOC Reading</div>
          </div>
          <div class="stat-box">
            <div class="stat-val">99.97%</div>
            <div class="stat-lbl">Dust Filtration</div>
          </div>
          <div class="stat-box">
            <div class="stat-val">Phased</div>
            <div class="stat-lbl">Zonal Handover</div>
          </div>
          <div class="stat-box">
            <div class="stat-val">100%</div>
            <div class="stat-lbl">Covers Protected</div>
          </div>
        </div>
      </div>
      <div class="doc-footer">
        <div>AFRISMME HUB • HOSPITALITY SUPPORT BOOKLET</div>
        <div>PAGE 30 OF 36</div>
      </div>
    </div>
    `,

    // PAGE 31: PART VII — PREVENTATIVE MAINTENANCE CALENDARS
    `
    <div class="page">
      <div class="doc-header">
        <span class="brand-left">PART VII • MAINTENANCE &amp; CONTINUOUS CARE</span>
        <span class="section-tag">17 SERVICE CALENDARS</span>
      </div>
      <div class="content-area">
        <span class="part-banner">PART VII • MAINTENANCE &amp; CONTINUOUS CARE</span>
        <span class="eyebrow">Lifecycle Management</span>
        <h2 class="section-title">Preventative Facility Care Calendars &amp; SLA Schedules</h2>
        <p class="lead-paragraph">
          Structured monthly, quarterly, and bi-annual servicing routines preventing premature capital equipment failure.
        </p>

        <div class="grid-3" style="margin-bottom: 3.5mm;">
          <div class="card">
            <div class="badge" style="color: #2980B9; border-color: rgba(41,128,185,0.3); background: rgba(41,128,185,0.08);">Monthly Routine</div>
            <h3 class="card-title">Monthly Verification</h3>
            <ul style="font-size: 7.4pt; color: #4A505E; margin-left: 4mm; line-height: 1.45;">
              <li>Inspect &amp; de-grease primary kitchen hood baffle filters.</li>
              <li>Refrigeration condenser coil vacuuming &amp; gasket check.</li>
              <li>Tabletop oil barrier inspection &amp; localized buffing.</li>
              <li>Commercial umbrella mast tension &amp; cable safety check.</li>
            </ul>
          </div>

          <div class="card">
            <div class="badge" style="color: #8E44AD; border-color: rgba(142,68,173,0.3); background: rgba(142,68,173,0.08);">Quarterly Routine</div>
            <h3 class="card-title">Quarterly Deep Service</h3>
            <ul style="font-size: 7.4pt; color: #4A505E; margin-left: 4mm; line-height: 1.45;">
              <li>Full duct run chemical degreasing (SANS 1850).</li>
              <li>Contract leather hydration &amp; deep pore conditioning.</li>
              <li>Acoustic wall panel inspection &amp; fabric re-tensioning.</li>
              <li>Exterior facade brass de-tarnishing &amp; protective wax.</li>
            </ul>
          </div>

          <div class="card">
            <div class="badge" style="color: #27AE60; border-color: rgba(39,174,96,0.3); background: rgba(39,174,96,0.08);">Bi-Annual Routine</div>
            <h3 class="card-title">Bi-Annual Overhaul</h3>
            <ul style="font-size: 7.4pt; color: #4A505E; margin-left: 4mm; line-height: 1.45;">
              <li>Complete dining floor dustless micro-sanding &amp; reseal.</li>
              <li>Comprehensive SANS 10400 fire safety compliance audit.</li>
              <li>Outdoor massaranduba deck deep chemical oil nourish.</li>
              <li>Digital SEO audit &amp; seasonal menu visual refresh.</li>
            </ul>
          </div>
        </div>

        <div class="card highlight" style="margin-top: auto;">
          <p style="font-size: 7.6pt; color: #383D48; margin: 0; line-height: 1.4;">
            <strong>Automated Telemetry Reminders:</strong> Our digital asset portal logs every service date, issuing automated maintenance notifications and compliance certificates to your corporate risk team.
          </p>
        </div>
      </div>
      <div class="doc-footer">
        <div>AFRISMME HUB • HOSPITALITY SUPPORT BOOKLET</div>
        <div>PAGE 31 OF 36</div>
      </div>
    </div>
    `,

    // PAGE 32: PART VII — RAPID FLEET & EMERGENCY SPARES
    `
    <div class="page">
      <div class="doc-header">
        <span class="brand-left">PART VII • MAINTENANCE &amp; CONTINUOUS CARE</span>
        <span class="section-tag">18 RAPID RESPONSE FLEET</span>
      </div>
      <div class="content-area">
        <span class="part-banner">PART VII • MAINTENANCE &amp; CONTINUOUS CARE</span>
        <span class="eyebrow">Critical Response Infrastructure</span>
        <h2 class="section-title">Emergency Rapid-Response Fleet &amp; Spares Logistics</h2>
        <p class="lead-paragraph">
          Sub-60 minute metropolitan emergency support with mobile workshops carrying essential commercial kitchen and electrical spares.
        </p>

        <div class="grid-2" style="margin-bottom: 3.5mm;">
          <div class="card">
            <h3 class="card-title">Mobile Workshop Capabilities</h3>
            <p class="body-text">
              Each AfriSMME Hub rapid response vehicle is outfitted as a mobile commercial workshop:
            </p>
            <ul style="font-size: 7.6pt; color: #4A505E; margin-left: 4mm; line-height: 1.45;">
              <li><strong>Electrical Diagnostic Gear:</strong> Thermal imaging cameras for breaker panels and 3-phase phase balancing meters.</li>
              <li><strong>Commercial Gas Tooling:</strong> Electronic gas sniffers, pressure manometers, and replacement thermocouple safety valves.</li>
              <li><strong>Rapid Timber &amp; Upholstery Kits:</strong> Spot destaining chemicals, rapid-cure hardwax oils, and leather repair compounds.</li>
            </ul>
          </div>

          <div class="card">
            <h3 class="card-title">Guaranteed Spares Inventory</h3>
            <p class="body-text">
              We eliminate the standard "waiting for parts from suppliers" delay by holding dedicated inventory:
            </p>
            <ul style="font-size: 7.6pt; color: #4A505E; margin-left: 4mm; line-height: 1.45;">
              <li>Commercial exhaust fan drive belts and universal 3-phase motors.</li>
              <li>Heavy-duty umbrella winch mechanisms and replacement 316 rigging wires.</li>
              <li>Walk-in freezer condenser fan motors and digital defrost controllers.</li>
              <li>Emergency exit photoluminescent hardware and fire extinguisher recharges.</li>
            </ul>
          </div>
        </div>

        <div class="img-box" style="height: 50mm; margin-top: auto;">
          <img src="${assets.mockupFleet}" alt="Mobile Engineering Unit" />
        </div>
        <div class="img-caption">
          <span>DOCUMENTED FLEET ASSET • MOBILE RAPID WORKSHOP UNIT</span>
          <span>EMERGENCY DISPATCH • PRE-STOCKED COMMERCIAL SPARES</span>
        </div>
      </div>
      <div class="doc-footer">
        <div>AFRISMME HUB • HOSPITALITY SUPPORT BOOKLET</div>
        <div>PAGE 32 OF 36</div>
      </div>
    </div>
    `,

    // PAGE 33: PART VIII — SECTOR APPLICATIONS: FINE DINING & RESORTS
    `
    <div class="page">
      <div class="doc-header">
        <span class="brand-left">PART VIII • SECTOR APPLICATIONS</span>
        <span class="section-tag">19 BISTROS &amp; RESORTS</span>
      </div>
      <div class="content-area">
        <span class="part-banner">PART VIII • SECTOR APPLICATIONS</span>
        <span class="eyebrow">Market Tailoring</span>
        <h2 class="section-title">Fine Dining Bistros &amp; Five-Star Beach Resorts</h2>
        <p class="lead-paragraph">
          Precision intervention models engineered for urban culinary flagships and high-volume coastal leisure properties.
        </p>

        <div class="grid-2" style="margin-bottom: 3.5mm;">
          <div class="card highlight">
            <h3 class="card-title">Fine Dining &amp; Luxury Urban Bistros</h3>
            <p class="body-text">
              Urban flagships in Sandton, Rosebank, and Bree Street Cape Town require flawless acoustic intimacy and immaculate surfaces under scrutiny from food critics and discerning diners.
            </p>
            <ul style="font-size: 7.6pt; color: #4A505E; margin-left: 4mm; line-height: 1.45;">
              <li><strong>Target Interventions:</strong> Micro-perforated acoustic timber wall paneling; phased zero-VOC table refinishing; bespoke leather banquettes.</li>
              <li><strong>Operational Benefit:</strong> Dining room reverberation reduced to 0.7s; minimal service disruption; sustained menu pricing power.</li>
            </ul>
          </div>

          <div class="card highlight">
            <h3 class="card-title">Five-Star Hotels &amp; Beach Resorts</h3>
            <p class="body-text">
              Coastal resorts in Umhlanga and Camps Bay face relentless marine salt air, high UV radiation, and continuous 16-hour daily guest traffic across pool and terrace venues.
            </p>
            <ul style="font-size: 7.6pt; color: #4A505E; margin-left: 4mm; line-height: 1.45;">
              <li><strong>Target Interventions:</strong> 316 stainless commercial cantilever umbrellas; synthetic wicker lounger structural repairs; scheduled HVAC care.</li>
              <li><strong>Operational Benefit:</strong> 100% terrace weather readiness in all seasons; eliminates premature furniture rust and fabric rotting.</li>
            </ul>
          </div>
        </div>

        <div class="img-box" style="height: 50mm; margin-top: auto;">
          <img src="${assets.ai01Terrace}" alt="Camps Bay Luxury Terrace" />
        </div>
        <div class="img-caption">
          <span>REPRESENTATIVE VISUALISATION • EXECUTIVE COASTAL RESORT TERRACE</span>
          <span>CAMPS BAY, CAPE TOWN • WIND-RATED SHADE &amp; HARDWOOD DECKING</span>
        </div>
      </div>
      <div class="doc-footer">
        <div>AFRISMME HUB • HOSPITALITY SUPPORT BOOKLET</div>
        <div>PAGE 33 OF 36</div>
      </div>
    </div>
    `,

    // PAGE 34: PART VIII — SECTOR APPLICATIONS: LODGES & ESTATES
    `
    <div class="page">
      <div class="doc-header">
        <span class="brand-left">PART VIII • SECTOR APPLICATIONS</span>
        <span class="section-tag">20 LODGES &amp; ESTATES</span>
      </div>
      <div class="content-area">
        <span class="part-banner">PART VIII • SECTOR APPLICATIONS</span>
        <span class="eyebrow">Market Tailoring</span>
        <h2 class="section-title">African Safari Lodges &amp; Historic Wine Estates</h2>
        <p class="lead-paragraph">
          Preserving natural materials in harsh wilderness climates and maintaining historic Cape Dutch architecture.
        </p>

        <div class="grid-2" style="margin-bottom: 3.5mm;">
          <div class="card highlight">
            <h3 class="card-title">African Safari Lodges &amp; Bush Camps</h3>
            <p class="body-text">
              Lodges in the Sabi Sands, Greater Kruger, and Madikwe feature extensive outdoor timber decks, thatched dining bomas, and canvas shading exposed to intense bush sun.
            </p>
            <ul style="font-size: 7.6pt; color: #4A505E; margin-left: 4mm; line-height: 1.45;">
              <li><strong>Target Interventions:</strong> Heavy ironwood deck oil saturation; canvas shade pavilion restoration; batch off-season workshop refurbishment.</li>
              <li><strong>Operational Benefit:</strong> Timber decks protected from sun-bleach and termites; zero disruption to international guests during peak safari season.</li>
            </ul>
          </div>

          <div class="card highlight">
            <h3 class="card-title">Historic Wine Estates</h3>
            <p class="body-text">
              Stellenbosch and Franschhoek wine estates must balance heritage architectural aesthetics with high-volume weekend alfresco dining and unpredictable Cape weather.
            </p>
            <ul style="font-size: 7.6pt; color: #4A505E; margin-left: 4mm; line-height: 1.45;">
              <li><strong>Target Interventions:</strong> Heavy-duty parasol shading arrays; heritage oak joinery restoration; discrete perimeter windbreaks.</li>
              <li><strong>Operational Benefit:</strong> Expands outdoor tasting and dining covers by 40%; preserves historic architectural character.</li>
            </ul>
          </div>
        </div>

        <div class="img-box" style="height: 50mm; margin-top: auto;">
          <img src="${assets.ai02Safari}" alt="Safari Lodge Dining Deck Dusk" />
        </div>
        <div class="img-caption">
          <span>REPRESENTATIVE VISUALISATION • EXCLUSIVE SAFARI LODGE DINING DECK</span>
          <span>SABI SANDS CORRIDOR • NATURAL TIMBER &amp; CANVAS SHADE CARE</span>
        </div>
      </div>
      <div class="doc-footer">
        <div>AFRISMME HUB • HOSPITALITY SUPPORT BOOKLET</div>
        <div>PAGE 34 OF 36</div>
      </div>
    </div>
    `,

    // PAGE 35: PART IX — COMMERCIAL SLA MODELS
    `
    <div class="page">
      <div class="doc-header">
        <span class="brand-left">PART IX • COMMERCIAL PARTNERSHIP</span>
        <span class="section-tag">21 SLA MODELS</span>
      </div>
      <div class="content-area">
        <span class="part-banner">PART IX — COMMERCIAL PARTNERSHIP</span>
        <span class="eyebrow">Procurement &amp; Engagement</span>
        <h2 class="section-title">Flexible Commercial Service Level Agreements</h2>
        <p class="lead-paragraph">
          Tailored engagement structures aligning with corporate procurement cycles, multi-site groups, and individual hospitality operators.
        </p>

        <div class="grid-3" style="margin-bottom: 3.5mm;">
          <div class="card highlight">
            <div class="badge">Model A</div>
            <h3 class="card-title">On-Demand Sprint</h3>
            <p class="body-text">
              Targeted single-trade interventions for immediate needs:
            </p>
            <ul style="font-size: 7.4pt; color: #4A505E; margin-left: 4mm; line-height: 1.45;">
              <li>Fixed-price quotation following on-site audit.</li>
              <li>Scheduled daytime or phased workshop execution.</li>
              <li>Standard 12-month structural warranty.</li>
              <li>Ideal for pre-season dining room refreshes.</li>
            </ul>
          </div>

          <div class="card highlight" style="border-left-color: #D35400;">
            <div class="badge" style="color: #D35400; border-color: rgba(211,84,0,0.3);">Model B</div>
            <h3 class="card-title">Retained Care SLA</h3>
            <p class="body-text">
              Comprehensive preventative monthly management:
            </p>
            <ul style="font-size: 7.4pt; color: #4A505E; margin-left: 4mm; line-height: 1.45;">
              <li>Scheduled monthly diagnostic audits.</li>
              <li>Kitchen extraction degreasing &amp; filter care.</li>
              <li>Ongoing timber &amp; leather nourishment.</li>
              <li>Priority sub-60m emergency fleet dispatch.</li>
            </ul>
          </div>

          <div class="card highlight" style="border-left-color: #27AE60;">
            <div class="badge" style="color: #27AE60; border-color: rgba(39,174,96,0.3);">Model C</div>
            <h3 class="card-title">Enterprise Group SLA</h3>
            <p class="body-text">
              Turnkey portfolio governance for hotel chains:
            </p>
            <ul style="font-size: 7.4pt; color: #4A505E; margin-left: 4mm; line-height: 1.45;">
              <li>Dedicated key account executive.</li>
              <li>Volume pricing economies across all properties.</li>
              <li>Centralized corporate billing &amp; asset portal.</li>
              <li>Comprehensive 360° physical &amp; digital scope.</li>
            </ul>
          </div>
        </div>

        <div class="card" style="background: #1B3B2B; color: #FAF8F5; margin-top: auto; padding: 3mm 4mm;">
          <div style="font-size: 7.5pt; font-weight: 700; color: #C5A880; letter-spacing: 2px; text-transform: uppercase;">Corporate Transparency Promise</div>
          <p style="font-size: 7.8pt; color: #E5DEC9; margin: 1mm 0 0 0; line-height: 1.4;">
            Zero hidden call-out surcharges. Itemized scopes of work with photographic before-and-after sign-offs required prior to invoicing.
          </p>
        </div>
      </div>
      <div class="doc-footer">
        <div>AFRISMME HUB • HOSPITALITY SUPPORT BOOKLET</div>
        <div>PAGE 35 OF 36</div>
      </div>
    </div>
    `,

    // PAGE 36: PART X — CONTACT & VENUE AUDIT ONBOARDING
    `
    <div class="page dark" style="justify-content: space-between; padding: 18mm 20mm; background: radial-gradient(circle at 50% 10%, #28523E 0%, #132A1F 100%);">
      <div class="doc-header">
        <span class="brand-left">PART X • EXECUTIVE CONTACT</span>
        <span class="section-tag">22 ONBOARDING</span>
      </div>

      <div class="content-area" style="justify-content: center;">
        <span class="part-banner">PART X — EXECUTIVE CONTACT &amp; ONBOARDING</span>
        <span class="eyebrow">Initiate Venue Transformation</span>
        <h2 class="section-title" style="font-size: 28pt; margin-bottom: 2mm;">
          Book Your 90-Minute<br/>
          <span style="color: #C5A880; font-style: italic;">On-Site Engineering Audit.</span>
        </h2>
        <p class="lead-paragraph" style="max-width: 150mm; margin-bottom: 5mm;">
          Our technical directors conduct an exhaustive physical, acoustic, and digital diagnostic inspection of your venue, delivering an itemized priority roadmap within 48 hours.
        </p>

        <div class="grid-2" style="margin-bottom: 6mm;">
          <div class="card" style="padding: 4.5mm;">
            <div style="font-size: 7.5pt; font-weight: 700; color: #C5A880; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 2mm;">Central Headquarters &amp; Workshops</div>
            <p style="font-size: 8.5pt; color: #FAF8F5; line-height: 1.6; margin-bottom: 2mm;">
              <strong>AfriSMME Hub (Pty) Ltd</strong><br/>
              146 10th Road, Kew, Sandton<br/>
              Johannesburg, 2090<br/>
              Gauteng, South Africa
            </p>
            <div style="font-size: 7.8pt; color: #A6ADB9; font-family: 'JetBrains Mono', monospace; line-height: 1.5;">
              <div>Office: <a href="tel:+27113465018" style="color: #C5A880; text-decoration: none;">+27 (0)11 346 5018</a></div>
              <div>Mobile / WhatsApp: <a href="https://wa.me/27834328394" style="color: #C5A880; text-decoration: none;">+27 (0)83 432 8394</a></div>
              <div>Direct Email: <a href="mailto:info@hospitalitysupport.co.za" style="color: #C5A880; text-decoration: none;">info@hospitalitysupport.co.za</a></div>
            </div>
          </div>

          <div class="card" style="padding: 4.5mm; display: flex; flex-direction: column; justify-content: space-between;">
            <div>
              <div style="font-size: 7.5pt; font-weight: 700; color: #C5A880; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 2mm;">Official Digital Portal</div>
              <p style="font-size: 8.2pt; color: #D2D7E2; line-height: 1.5; margin-bottom: 3mm;">
                Access our interactive digital assessment diagnostic tool, review full engineering specifications, and schedule site audits:
              </p>
              <div style="background: rgba(197,168,128,0.12); border: 1px solid #C5A880; padding: 2.5mm 3.5mm; border-radius: 3px; text-align: center;">
                <a href="https://www.hospitalitysupport.co.za" style="color: #FAF8F5; text-decoration: none; font-size: 8.5pt; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase;">
                  WWW.HOSPITALITYSUPPORT.CO.ZA
                </a>
              </div>
            </div>
            <div style="font-size: 7pt; font-family: 'JetBrains Mono', monospace; color: #8E95A5; margin-top: 3mm;">
              PRINT MASTER &amp; TECHNICAL MANUAL • 2026/2027 SPECIFICATION
            </div>
          </div>
        </div>

        <div style="text-align: center; border-top: 1px solid rgba(197,168,128,0.3); padding-top: 4mm;">
          <div style="font-size: 8pt; font-weight: 800; letter-spacing: 3px; color: #FAF8F5; text-transform: uppercase;">AFRISMME HUB • HOSPITALITY SUPPORT ECOSYSTEM</div>
          <div style="font-size: 7pt; font-weight: 600; letter-spacing: 2px; color: #C5A880; margin-top: 1mm;">IDENTIFY • SOLVE • RESTORE • MAINTAIN • GROW</div>
        </div>
      </div>

      <div class="doc-footer">
        <div>AFRISMME HUB • HOSPITALITY SUPPORT BOOKLET</div>
        <div>PAGE 36 OF 36</div>
      </div>
    </div>
    `
  ];

  const fullHtml = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>AfriSMME Hub — Detailed Hospitality Support Booklet</title>
    <style>${css}</style>
  </head>
  <body>
    ${pages.join('\n')}
  </body>
  </html>`;

  const htmlPath = path.join(rootDir, 'public/PDFs/booklet_print.html');
  const pdfPath = path.join(rootDir, 'public/PDFs/AfriSMME_Hospitality_Support_Booklet.pdf');

  fs.writeFileSync(htmlPath, fullHtml, 'utf8');
  console.log(`Saved Detailed Support Booklet HTML to ${htmlPath}`);

  console.log('Rendering Detailed Support Booklet PDF with Puppeteer...');
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--font-render-hinting=none'],
    headless: true
  });

  const page = await browser.newPage();
  await page.setContent(fullHtml, { waitUntil: 'domcontentloaded', timeout: 120000 });
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
  console.log(`Detailed Support Booklet PDF successfully generated! Size: ${(stats.size / 1024 / 1024).toFixed(2)} MB (${stats.size} bytes)`);
}

generateSupportBooklet().catch(err => {
  console.error('Error generating Support Booklet:', err);
  process.exit(1);
});
