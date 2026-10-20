const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer-core');
const { loadAllAssets, rootDir } = require('./pdf_asset_helper');

async function generateCorporateProfile() {
  console.log('Loading assets for Corporate Company Profile...');
  const assets = loadAllAssets();

  const css = `
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap');

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
      line-height: 1.48;
    }

    .page {
      width: 210mm;
      height: 297mm;
      padding: 14mm 16mm;
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

    /* Running Header */
    .doc-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 3mm;
      border-bottom: 1px solid rgba(197, 168, 128, 0.35);
      margin-bottom: 3.5mm;
      font-size: 8pt;
      font-weight: 700;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: #C5A880;
    }
    .page.dark .doc-header {
      border-bottom: 1px solid rgba(197, 168, 128, 0.25);
      color: #C5A880;
    }
    .doc-header .brand-left {
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .doc-header .section-tag {
      color: #8E95A5;
      font-weight: 600;
    }
    .page.dark .doc-header .section-tag {
      color: #A0A7B5;
    }

    /* Running Footer */
    .doc-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 3mm;
      border-top: 1px solid rgba(197, 168, 128, 0.35);
      margin-top: 3mm;
      font-size: 8pt;
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

    /* Content Area */
    .content-area {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      overflow: hidden;
    }

    /* Typography Hierarchy - Uniform ~12pt Body for High Print Legibility */
    .eyebrow {
      font-size: 9pt;
      font-weight: 700;
      letter-spacing: 2px;
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
      margin-bottom: 2.5mm;
      letter-spacing: -0.5px;
    }
    .page.dark h1.display-title {
      color: #FAF8F5;
    }
    h2.section-title {
      font-family: 'Cormorant Garamond', Georgia, serif;
      font-size: 23pt;
      font-weight: 600;
      line-height: 1.12;
      color: #132A1F;
      margin-bottom: 2mm;
    }
    .page.dark h2.section-title {
      color: #FAF8F5;
    }
    h3.card-title {
      font-size: 13pt;
      font-weight: 700;
      color: #132A1F;
      margin-bottom: 1.5mm;
      line-height: 1.25;
    }
    .page.dark h3.card-title {
      color: #FAF8F5;
    }
    .lead-paragraph {
      font-size: 12.5pt;
      line-height: 1.45;
      color: #214634;
      margin-bottom: 3.5mm;
      font-weight: 400;
    }
    .page.dark .lead-paragraph {
      color: #E5DEC9;
    }
    p.body-text {
      font-size: 11.5pt;
      line-height: 1.48;
      color: #28523E;
      margin-bottom: 2.5mm;
    }
    .page.dark p.body-text {
      color: #C2D6CB;
    }

    ul.body-list {
      font-size: 11pt;
      color: #28523E;
      margin-left: 5mm;
      line-height: 1.48;
      margin-bottom: 2.5mm;
    }
    .page.dark ul.body-list {
      color: #C2D6CB;
    }
    ul.body-list li {
      margin-bottom: 1.2mm;
    }

    /* Grids & Cards */
    .grid-2 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4mm;
    }
    .grid-3 {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 3.5mm;
    }
    .grid-4 {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 2.5mm;
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
      border-left: 3.5px solid #C5A880;
    }

    /* Image Containers */
    .img-box {
      width: 100%;
      border-radius: 4px;
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
      font-size: 8pt;
      color: #6F7685;
      font-family: 'JetBrains Mono', monospace;
      margin-top: 1.5mm;
      display: flex;
      justify-content: space-between;
      letter-spacing: 0.5px;
    }
    .page.dark .img-caption {
      color: #8E95A5;
    }

    /* Badges & Tags */
    .badge {
      display: inline-block;
      padding: 2.5px 8px;
      border-radius: 2px;
      font-size: 8pt;
      font-weight: 700;
      letter-spacing: 1px;
      text-transform: uppercase;
      background: rgba(197, 168, 128, 0.15);
      color: #9E7D4E;
      border: 1px solid rgba(197, 168, 128, 0.35);
      margin-bottom: 1.5mm;
    }
    .page.dark .badge {
      background: rgba(197, 168, 128, 0.15);
      color: #C5A880;
      border: 1px solid rgba(197, 168, 128, 0.35);
    }

    /* Table Styles - 10.5pt for Print Clarity */
    table.matrix-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 10.5pt;
      margin-top: 2mm;
    }
    table.matrix-table th {
      background: #1B3B2B;
      color: #C5A880;
      text-align: left;
      padding: 3mm 3mm;
      font-weight: 700;
      letter-spacing: 1px;
      text-transform: uppercase;
      border-bottom: 1.5px solid #C5A880;
      font-size: 9.5pt;
    }
    table.matrix-table td {
      padding: 2.8mm 3mm;
      border-bottom: 1px solid #E6E2DB;
      color: #214634;
      vertical-align: top;
      line-height: 1.4;
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

    /* Diagram wrapper */
    .diagram-wrapper {
      width: 100%;
      border: 1px solid rgba(197, 168, 128, 0.25);
      border-radius: 6px;
      overflow: hidden;
      margin: 1.5mm 0;
      background: #132A1F;
      box-shadow: 0 4px 14px rgba(0,0,0,0.25);
    }
    .diagram-wrapper img {
      width: 100%;
      display: block;
    }

    /* Key Metrics Callouts */
    .stat-strip {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 3mm;
      margin: 2.5mm 0;
    }
    .stat-box {
      background: #FFFFFF;
      border: 1px solid #E6E2DB;
      border-radius: 4px;
      padding: 3mm;
      text-align: center;
    }
    .page.dark .stat-box {
      background: #132A1F;
      border: 1px solid #28523E;
    }
    .stat-val {
      font-family: 'Cormorant Garamond', Georgia, serif;
      font-size: 20pt;
      font-weight: 700;
      color: #C5A880;
      line-height: 1;
      margin-bottom: 1mm;
    }
    .stat-lbl {
      font-size: 8pt;
      font-weight: 600;
      color: #6D7483;
      text-transform: uppercase;
      letter-spacing: 0.8px;
    }
    .page.dark .stat-lbl {
      color: #8E95A5;
    }
  `;

  // HTML Assembly - 22 Pages
  const pages = [
    // PAGE 01: COVER
    `
    <div class="page dark" style="justify-content: space-between; padding: 16mm 18mm; background: radial-gradient(circle at 80% 20%, #28523E 0%, #132A1F 100%);">
      <div style="display: flex; justify-content: space-between; align-items: flex-start;">
        <div>
          <div style="font-size: 10pt; font-weight: 800; letter-spacing: 4px; color: #C5A880; text-transform: uppercase; margin-bottom: 1.5mm;">AFRISMME HUB</div>
          <div style="font-size: 8pt; font-weight: 600; letter-spacing: 2px; color: #C2D6CB; text-transform: uppercase;">HOSPITALITY SUPPORT ECOSYSTEM</div>
        </div>
        <div style="border: 1px solid rgba(197,168,128,0.4); padding: 2mm 4mm; border-radius: 3px; text-align: right;">
          <div style="font-size: 7.5pt; font-family: 'JetBrains Mono', monospace; color: #C5A880; letter-spacing: 1.5px;">CORPORATE PROFILE</div>
          <div style="font-size: 7.5pt; font-family: 'JetBrains Mono', monospace; color: #FFFFFF;">2026 / 2027 SPECIFICATION</div>
        </div>
      </div>

      <div style="margin: 4mm 0;">
        <div class="img-box" style="height: 106mm; border: 1px solid rgba(197,168,128,0.4); box-shadow: 0 15px 35px rgba(0,0,0,0.45);">
          <img src="${assets.ai01Terrace}" alt="Luxury Restaurant Terrace Camps Bay" />
        </div>
        <div class="img-caption">
          <span>REPRESENTATIVE VISUALISATION • EXECUTIVE COASTAL DINING ENVIRONMENT</span>
          <span>CAMPS BAY, WESTERN CAPE</span>
        </div>
      </div>

      <div>
        <div style="display: inline-block; padding: 1.5mm 3.5mm; background: rgba(197,168,128,0.15); border: 1px solid #C5A880; border-radius: 2px; margin-bottom: 2.5mm;">
          <span style="font-size: 8pt; font-weight: 700; letter-spacing: 2.5px; color: #C5A880; text-transform: uppercase;">IDENTIFY. SOLVE. RESTORE. MAINTAIN. GROW.</span>
        </div>
        <h1 class="display-title" style="font-size: 32pt; margin-bottom: 2.5mm;">
          One Coordinated Partner<br/>
          <span style="font-style: italic; color: #C5A880;">for the Hospitality Environment.</span>
        </h1>
        <p class="lead-paragraph" style="font-size: 12pt; max-width: 170mm; color: #E5DEC9; margin-bottom: 3.5mm;">
          Integrated architectural enhancement, commercial shade, acoustic comfort, artisanal furniture restoration, preventative maintenance, compliance standards, and digital hospitality systems.
        </p>
        <div style="display: flex; gap: 8mm; border-top: 1px solid rgba(197,168,128,0.3); padding-top: 3mm; font-size: 8pt; font-family: 'JetBrains Mono', monospace; color: #C2D6CB;">
          <span>PHASED &amp; SCHEDULED EXECUTION</span>
          <span>•</span>
          <span>SANS 10400 &amp; SANS 1850 STANDARDS ALIGNMENT</span>
          <span>•</span>
          <span>CONSOLIDATED GOVERNANCE SLA</span>
        </div>
      </div>

      <div class="doc-footer">
        <div>AFRISMME HUB • CORPORATE MASTER PROFILE</div>
        <div>PAGE 01 OF 22</div>
      </div>
    </div>
    `,

    // PAGE 02: EXECUTIVE INTRODUCTION
    `
    <div class="page">
      <div class="doc-header">
        <span class="brand-left">AFRISMME HUB • HOSPITALITY SUPPORT ECOSYSTEM</span>
        <span class="section-tag">01 EXECUTIVE STATEMENT</span>
      </div>
      <div class="content-area">
        <div>
          <span class="eyebrow">Strategic Introduction</span>
          <h2 class="section-title">The Modern Hospitality Reality</h2>
          <p class="lead-paragraph">
            Hospitality is not merely a dining room, a physical building, or an evening menu. It is the synchronized expression of architectural space, physical comfort, surface condition, acoustic intimacy, air hygiene, operational continuity, and digital relevance.
          </p>
        </div>

        <div class="grid-2" style="margin-bottom: 3mm;">
          <div>
            <p class="body-text">
              In premier hotels, high-volume restaurants, luxury safari lodges, and historic wine estates across Southern Africa, executive general managers and property owners face continuous operational pressure. A failing extraction unit, an uncomfortably reverberant dining room, faded timber tables, or an unshaded terrace directly impacts guest covers and bottom-line yield.
            </p>
            <p class="body-text">
              Historically, maintaining these multifaceted environments has forced operators to coordinate numerous independent contractors: furniture refinishers, umbrella installers, extraction cleaners, HVAC mechanics, compliance auditors, and digital agencies. Each works in isolation with disparate schedules and fragmented accountability.
            </p>
            <div class="card highlight" style="margin-top: 2.5mm;">
              <h3 class="card-title">The Single-Source Model</h3>
              <p class="body-text" style="color: #214634; margin: 0;">
                AfriSMME Hub replaces vendor fragmentation with a unified corporate ecosystem. We evaluate the property holistically, establish transparent capital priorities, and execute specialized multi-trade work during planned daytime maintenance windows and phased schedules.
              </p>
            </div>
          </div>
          <div>
            <div class="img-box" style="height: 66mm;">
              <img src="${assets.ai03Hotel}" alt="Five Star Hotel Terrace" />
            </div>
            <div class="img-caption">
              <span>REPRESENTATIVE VISUALISATION • FIVE-STAR OUTDOOR DINING</span>
              <span>COMFORT + COMMERCIAL CONTINUITY</span>
            </div>
            <div class="stat-strip" style="grid-template-columns: 1fr 1fr; margin-top: 3mm;">
              <div class="stat-box">
                <div class="stat-val">Phased</div>
                <div class="stat-lbl">Scheduled Windows</div>
              </div>
              <div class="stat-box">
                <div class="stat-val">100%</div>
                <div class="stat-lbl">Service-Ready Handover</div>
              </div>
            </div>
          </div>
        </div>

        <div style="background: #1B3B2B; border-radius: 4px; padding: 3.5mm 5mm; color: #FAF8F5;">
          <div style="font-size: 8.5pt; font-weight: 700; color: #C5A880; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 1mm;">Core Operational Principle</div>
          <p style="font-size: 11pt; font-family: 'Cormorant Garamond', Georgia, serif; font-style: italic; line-height: 1.4; color: #FAF8F5; margin: 0;">
            “Coordinate work in disciplined daytime maintenance windows and phased workshop batches. Return every zone pristine, odour-free, and service-ready.”
          </p>
        </div>
      </div>
      <div class="doc-footer">
        <div>AFRISMME HUB • CORPORATE PROFILE</div>
        <div>PAGE 02 OF 22</div>
      </div>
    </div>
    `,

    // PAGE 03: WHO WE ARE
    `
    <div class="page">
      <div class="doc-header">
        <span class="brand-left">AFRISMME HUB • HOSPITALITY SUPPORT ECOSYSTEM</span>
        <span class="section-tag">02 CORPORATE IDENTITY</span>
      </div>
      <div class="content-area">
        <div>
          <span class="eyebrow">Enterprise Identity &amp; Mandate</span>
          <h2 class="section-title">An Integrated Infrastructure &amp; Environment Partner</h2>
          <p class="lead-paragraph">
            AfriSMME Hub is an integrated corporate hospitality support ecosystem engineered specifically for luxury restaurants, boutique hotels, safari lodges, wine estates, and commercial venue portfolios.
          </p>
        </div>

        <div class="grid-2" style="margin-bottom: 3mm;">
          <div>
            <h3 class="card-title">Our Distinction</h3>
            <p class="body-text">
              AfriSMME Hub is not an informal repair service, furniture reseller, or middleman broker. We operate as a structured facilities engineering and physical environment management partner, providing institutional-grade coordination across every trade required to maintain hospitality venues.
            </p>
            <h3 class="card-title" style="margin-top: 2.5mm;">Unified Multi-Trade Governance</h3>
            <p class="body-text">
              We unite master wood craftsmen, architectural shade specialists, certified extraction technicians, acoustic joiners, and digital architects under a single master service level agreement (SLA):
            </p>
            <ul class="body-list">
              <li><strong>Dedicated Account Management:</strong> One senior technical director as single point of contact.</li>
              <li><strong>Specialist Regional Workshops:</strong> Purpose-built timber, cane, and metal restoration facilities.</li>
              <li><strong>Scheduled Service Protocols:</strong> Structured daytime maintenance windows and phased batch rotation.</li>
              <li><strong>Institutional Governance:</strong> Consolidated invoicing, clear project scopes, and master warranties.</li>
            </ul>
          </div>
          <div>
            <div class="img-box" style="height: 64mm;">
              <img src="${assets.mockupBrassFacade}" alt="Etched Brass Signage Mockup" />
            </div>
            <div class="img-caption">
              <span>PHYSICAL BRANDING ASSET • BESPOKE ARCHITECTURAL METALWORK</span>
              <span>SANDTON CRAFT FACILITY</span>
            </div>
            <div class="card" style="margin-top: 3mm; background: #FAF5EE; border-color: #E2D6C3;">
              <div style="font-size: 8pt; font-weight: 700; color: #9E7D4E; letter-spacing: 1.5px; text-transform: uppercase; margin-bottom: 1mm;">Corporate Accountability</div>
              <p class="body-text" style="color: #4A4033; margin: 0; font-size: 10.5pt;">
                All site operations are backed by comprehensive commercial general liability insurance, Workmen’s Compensation (COIDA), and strict alignment with SANS regulatory building and ventilation standards.
              </p>
            </div>
          </div>
        </div>

        <div class="stat-strip">
          <div class="stat-box">
            <div class="stat-val">6</div>
            <div class="stat-lbl">Integrated Pillars</div>
          </div>
          <div class="stat-box">
            <div class="stat-val">1</div>
            <div class="stat-lbl">Consolidated SLA</div>
          </div>
          <div class="stat-box">
            <div class="stat-val">Phased</div>
            <div class="stat-lbl">Zonal Execution</div>
          </div>
          <div class="stat-box">
            <div class="stat-val">360°</div>
            <div class="stat-lbl">Diagnostic Scope</div>
          </div>
        </div>
      </div>
      <div class="doc-footer">
        <div>AFRISMME HUB • CORPORATE PROFILE</div>
        <div>PAGE 03 OF 22</div>
      </div>
    </div>
    `,

    // PAGE 04: THE HOSPITALITY CHALLENGE
    `
    <div class="page">
      <div class="doc-header">
        <span class="brand-left">AFRISMME HUB • HOSPITALITY SUPPORT ECOSYSTEM</span>
        <span class="section-tag">03 OPERATIONAL DIAGNOSIS</span>
      </div>
      <div class="content-area">
        <div>
          <span class="eyebrow">The Commercial Problem</span>
          <h2 class="section-title">The Hidden Cost of Managing Multiple Disconnected Vendors</h2>
          <p class="lead-paragraph">
            High-traffic hospitality venues endure heavy physical wear. Managing independent ad-hoc contractors leads to scheduling conflicts, divided accountability, variable quality standards, and avoidable trading disruptions.
          </p>
        </div>

        <div class="grid-3" style="margin-bottom: 3.5mm;">
          <div class="card">
            <div class="badge" style="color: #C0392B; border-color: rgba(192,57,43,0.3); background: rgba(192,57,43,0.08);">Capacity Loss</div>
            <h3 class="card-title">Weather-Exposed Terraces</h3>
            <p class="body-text" style="font-size: 11pt;">
              Sudden coastal wind, solar glare, or passing showers frequently empty outdoor seating during peak lunch and dinner hours, directly compromising cover capacity.
            </p>
          </div>
          <div class="card">
            <div class="badge" style="color: #D35400; border-color: rgba(211,84,0,0.3); background: rgba(211,84,0,0.08);">Guest Comfort</div>
            <h3 class="card-title">Harsh Room Acoustics</h3>
            <p class="body-text" style="font-size: 11pt;">
              Hard tiles, glass, and bare plaster create severe acoustic reverberation. Diners strain to hear conversation, leading to sensory fatigue and shortened dining sessions.
            </p>
          </div>
          <div class="card">
            <div class="badge" style="color: #8E44AD; border-color: rgba(142,68,173,0.3); background: rgba(142,68,173,0.08);">Aesthetic Wear</div>
            <h3 class="card-title">Deteriorated Table Surfaces</h3>
            <p class="body-text" style="font-size: 11pt;">
              UV bleaching, moisture rings, and finish degradation detract from high-end presentation, diminishing perceived dining luxury and table turnover value.
            </p>
          </div>
        </div>

        <div class="grid-3" style="margin-bottom: 3.5mm;">
          <div class="card">
            <div class="badge" style="color: #27AE60; border-color: rgba(39,174,96,0.3); background: rgba(39,174,96,0.08);">CapEx Inefficiency</div>
            <h3 class="card-title">Premature Furniture Disposal</h3>
            <p class="body-text" style="font-size: 11pt;">
              Operators often replace solid hardwood tables and cane armchairs prematurely due to a lack of skilled restorative artisans, incurring avoidable capital costs.
            </p>
          </div>
          <div class="card">
            <div class="badge" style="color: #C0392B; border-color: rgba(192,57,43,0.3); background: rgba(192,57,43,0.08);">Operational Risk</div>
            <h3 class="card-title">Kitchen Duct Inefficiency</h3>
            <p class="body-text" style="font-size: 11pt;">
              Grease build-up in extraction systems chokes airflow, elevates fire risks under SANS 1850 codes, and invites disruptive kitchen failures during service.
            </p>
          </div>
          <div class="card">
            <div class="badge" style="color: #2980B9; border-color: rgba(41,128,185,0.3); background: rgba(41,128,185,0.08);">Digital Disconnect</div>
            <h3 class="card-title">Unoptimized Digital Menus</h3>
            <p class="body-text" style="font-size: 11pt;">
              Clunky PDF menus, missing allergens, and unmanaged local search listings disconnect your physical dining room from guests searching online.
            </p>
          </div>
        </div>

        <div class="card highlight" style="background: #FFFFFF;">
          <h3 class="card-title" style="margin-bottom: 1.5mm;">The Administrative Coordination Drain</h3>
          <p class="body-text" style="margin: 0;">
            General managers often spend valuable operational hours sourcing trades, negotiating quotes, and supervising repairs. AfriSMME Hub replaces multi-vendor friction with a coordinated, accountable facilities partnership.
          </p>
        </div>
      </div>
      <div class="doc-footer">
        <div>AFRISMME HUB • CORPORATE PROFILE</div>
        <div>PAGE 04 OF 22</div>
      </div>
    </div>
    `,

    // PAGE 05: OUR ECOSYSTEM ARCHITECTURE
    `
    <div class="page dark">
      <div class="doc-header">
        <span class="brand-left">AFRISMME HUB • HOSPITALITY SUPPORT ECOSYSTEM</span>
        <span class="section-tag">04 ECOSYSTEM ARCHITECTURE</span>
      </div>
      <div class="content-area">
        <div>
          <span class="eyebrow">Strategic Blueprint</span>
          <h2 class="section-title">The Coordinated Hospitality Ecosystem</h2>
          <p class="lead-paragraph">
            AfriSMME Hub functions as the central governance node, orchestrating specialized trade divisions through one synchronized operational pipeline.
          </p>
        </div>

        <div class="diagram-wrapper" style="margin: 1.5mm 0 3mm 0;">
          <img src="${assets.diagram01}" alt="The Hospitality Support Ecosystem Diagram" />
        </div>

        <div class="grid-2">
          <div class="card">
            <h3 class="card-title" style="color: #C5A880; font-size: 12pt;">Centralized Quality Assurance</h3>
            <p class="body-text" style="margin: 0; font-size: 10.5pt;">
              Every artisan, technician, and installer operates under AfriSMME Hub’s standardized quality protocols. Site supervisors oversee every scheduled intervention, conducting air quality and food-safety checks prior to handover.
            </p>
          </div>
          <div class="card">
            <h3 class="card-title" style="color: #C5A880; font-size: 12pt;">Single Commercial SLA</h3>
            <p class="body-text" style="margin: 0; font-size: 10.5pt;">
              Venue groups interact with one contractual entity. Consolidated monthly billing, unified master warranties, and priority dispatch schedules eliminate multi-vendor friction entirely.
            </p>
          </div>
        </div>
      </div>
      <div class="doc-footer">
        <div>AFRISMME HUB • CORPORATE PROFILE</div>
        <div>PAGE 05 OF 22</div>
      </div>
    </div>
    `,

    // PAGE 06: HOW WE WORK (VENUE IMPROVEMENT CYCLE)
    `
    <div class="page">
      <div class="doc-header">
        <span class="brand-left">AFRISMME HUB • HOSPITALITY SUPPORT ECOSYSTEM</span>
        <span class="section-tag">05 DELIVERY METHODOLOGY</span>
      </div>
      <div class="content-area">
        <div>
          <span class="eyebrow">Operational Methodology</span>
          <h2 class="section-title">The Venue Improvement &amp; Value Creation Cycle</h2>
          <p class="lead-paragraph">
            Our structured consultative lifecycle provides clear diagnostic depth, executive cost roadmaps, disciplined phased execution, and continuous preventative care.
          </p>
        </div>

        <div class="diagram-wrapper" style="margin: 2mm 0 3.5mm 0;">
          <img src="${assets.diagram02}" alt="The Venue Improvement Cycle" />
        </div>

        <div class="grid-2">
          <div class="card highlight">
            <h3 class="card-title">Phased Governance &amp; Handover Standards</h3>
            <p class="body-text" style="margin: 0; font-size: 11pt;">
              From initial 360° diagnostic audit to scheduled daytime maintenance and phased workshop restoration, every milestone is verified with duty managers. Work areas are vacuum-scrubbed, surfaces cured with non-toxic oils, and air exchanges verified for odour-free service.
            </p>
          </div>
          <div class="card highlight">
            <h3 class="card-title">Continuous Value &amp; Preventative Care</h3>
            <p class="body-text" style="margin: 0; font-size: 11pt;">
              Interventions do not end at installation. Scheduled monthly timber re-nourishment, kitchen extraction maintenance, and digital menu engineering maintain asset longevity and optimize dining cover yields continuously.
            </p>
          </div>
        </div>
      </div>
      <div class="doc-footer">
        <div>AFRISMME HUB • CORPORATE PROFILE</div>
        <div>PAGE 06 OF 22</div>
      </div>
    </div>
    `,

    // PAGE 07: THE CONNECTED CONTINUUM
    `
    <div class="page dark">
      <div class="doc-header">
        <span class="brand-left">AFRISMME HUB • HOSPITALITY SUPPORT ECOSYSTEM</span>
        <span class="section-tag">06 STRATEGIC INTEGRATION</span>
      </div>
      <div class="content-area">
        <div>
          <span class="eyebrow">Strategic Convergence</span>
          <h2 class="section-title">Physical, Operational &amp; Digital Continuum</h2>
          <p class="lead-paragraph">
            The physical venue, back-of-house operations, compliance standards, and digital touchpoints are deeply interdependent. AfriSMME Hub connects all four dimensions into a unified ecosystem.
          </p>
        </div>

        <div class="diagram-wrapper" style="margin: 2mm 0 3.5mm 0;">
          <img src="${assets.diagram04}" alt="Connected Hospitality Environment Continuum" />
        </div>

        <div class="grid-2">
          <div class="card">
            <h3 class="card-title" style="color: #C5A880; font-size: 12pt;">The Guest Journey Continuity</h3>
            <p class="body-text" style="margin: 0; font-size: 10.5pt;">
              A guest's experience begins with digital discovery on an AI-optimized search profile, continues onto a weather-protected shaded terrace, settles into an acoustically comfortable dining booth, and concludes with seamless digital payment. Harmony across touchpoints preserves brand prestige.
            </p>
          </div>
          <div class="card">
            <h3 class="card-title" style="color: #C5A880; font-size: 12pt;">The Operational Backing</h3>
            <p class="body-text" style="margin: 0; font-size: 10.5pt;">
              Front-of-house luxury cannot survive without back-of-house discipline. Polished tables and comfortable booths are supported by clean kitchen extraction ducts, compliant gas systems, hygienic food preparation standards, and professional staff uniforms.
            </p>
          </div>
        </div>
      </div>
      <div class="doc-footer">
        <div>AFRISMME HUB • CORPORATE PROFILE</div>
        <div>PAGE 07 OF 22</div>
      </div>
    </div>
    `,

    // PAGE 08: PILLAR 01 — ATTRACT
    `
    <div class="page">
      <div class="doc-header">
        <span class="brand-left">AFRISMME HUB • THE SIX SUPPORT PILLARS</span>
        <span class="section-tag">01 ATTRACT</span>
      </div>
      <div class="content-area">
        <div style="display: flex; justify-content: space-between; align-items: baseline;">
          <div>
            <span class="eyebrow">Pillar 01 — First Impressions &amp; Exterior</span>
            <h2 class="section-title">ATTRACT: Exterior, Shade &amp; Weather Architecture</h2>
          </div>
          <span class="badge">AfriShades Network</span>
        </div>
        <p class="lead-paragraph">
          Convert exposed outdoor areas into high-yielding, weather-protected dining destinations while establishing commanding architectural curb presence.
        </p>

        <div class="grid-2" style="margin-bottom: 3mm;">
          <div>
            <h3 class="card-title">The Commercial Problem</h3>
            <p class="body-text">
              Outdoor terraces represent up to 45% of peak seating capacity, yet operators frequently lose this revenue during harsh afternoon sun, sudden rain, or blustery winds. Residential-grade umbrellas fail under commercial hospitality use, creating safety liabilities and frequent replacement expenses.
            </p>
            <h3 class="card-title" style="margin-top: 2.5mm;">Our Solutions</h3>
            <ul class="body-list">
              <li><strong>AfriShades Commercial Cantilevers:</strong> Wind-rated aluminium masts, marine-grade 316 stainless rigging, and reinforced ballast bases.</li>
              <li><strong>Architectural Facade Signage:</strong> Precision-milled brass, patinated bronze, and edge-lit LED lettering.</li>
              <li><strong>All-Weather Retractable Windbreaks:</strong> Motorized drop blinds and glass balustrade extensions.</li>
              <li><strong>Atmospheric Exterior Lighting:</strong> Warm 2700K glare-free architectural fixtures for evening ambiance.</li>
            </ul>
            <div class="card highlight" style="margin-top: 2.5mm;">
              <div style="font-size: 8pt; font-weight: 700; color: #9E7D4E; text-transform: uppercase;">Measurable Business Outcome</div>
              <p class="body-text" style="color: #2E333D; margin: 0; font-weight: 600; font-size: 11pt;">
                Significantly expands usable outdoor dining capacity across changing weather conditions, protecting valuable table covers and terrace revenue.
              </p>
            </div>
          </div>
          <div>
            <div class="img-box" style="height: 68mm;">
              <img src="${assets.ai04Umbrella}" alt="AfriShades Commercial Cantilever Umbrella" />
            </div>
            <div class="img-caption">
              <span>AUTHENTIC AFRISHADES COMMERCIAL CANTILEVER SYSTEM</span>
              <span>HEAVY-DUTY ALUMINIUM MAST • GRADE 316 RIGGING</span>
            </div>
            <div class="card" style="margin-top: 3mm; background: #FAF5EE;">
              <div style="font-size: 8pt; font-weight: 700; color: #9E7D4E; text-transform: uppercase; margin-bottom: 1mm;">Engineering Specification</div>
              <p class="body-text" style="color: #4A4033; font-size: 10.5pt; margin: 0;">
                High-performance solution-dyed acrylic canopies (UPF 50+), fluorocarbon water-repellent coating, and high-tensile extruded alloy structural frames engineered for South African coastal and highveld conditions.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="doc-footer">
        <div>AFRISMME HUB • CORPORATE PROFILE</div>
        <div>PAGE 08 OF 22</div>
      </div>
    </div>
    `,

    // PAGE 09: PILLAR 02 — ENHANCE
    `
    <div class="page">
      <div class="doc-header">
        <span class="brand-left">AFRISMME HUB • THE SIX SUPPORT PILLARS</span>
        <span class="section-tag">02 ENHANCE</span>
      </div>
      <div class="content-area">
        <div style="display: flex; justify-content: space-between; align-items: baseline;">
          <div>
            <span class="eyebrow">Pillar 02 — Acoustics &amp; Interior Comfort</span>
            <h2 class="section-title">ENHANCE: Acoustics, Banquettes &amp; Guest Dwell Time</h2>
          </div>
          <span class="badge">Interior Comfort</span>
        </div>
        <p class="lead-paragraph">
          Engineer acoustic calm, ergonomic seating intimacy, and atmospheric zoning that lengthens table dwell time and elevates beverage spend.
        </p>

        <div class="grid-2" style="margin-bottom: 3mm;">
          <div>
            <h3 class="card-title">The Commercial Problem</h3>
            <p class="body-text">
              Modern dining spaces featuring concrete floors, glass facades, and bare plaster often suffer from severe acoustic reverberation. Guests strain to hold conversations, leading to vocal fatigue, hurried meals, and decreased after-dinner beverage orders.
            </p>
            <h3 class="card-title" style="margin-top: 2.5mm;">Our Solutions</h3>
            <ul class="body-list">
              <li><strong>Concealed Acoustic Absorption:</strong> High-NRC sound-absorbing cores discreetly integrated behind timber battens, upholstered panels, and artwork.</li>
              <li><strong>Custom Contract Banquettes:</strong> Deep ergonomic fluted booths upholstered in contract-grade stain-resistant leather and velvet.</li>
              <li><strong>Spatial Privacy Zoning:</strong> Architectural room dividers and acoustic planters that create sought-after intimate dining enclaves.</li>
              <li><strong>Circadian Lighting Schemes:</strong> Warm dimming fixtures tailored for dinner service intimacy.</li>
            </ul>
            <div class="card highlight" style="margin-top: 2.5mm;">
              <div style="font-size: 8pt; font-weight: 700; color: #9E7D4E; text-transform: uppercase;">Measurable Business Outcome</div>
              <p class="body-text" style="color: #2E333D; margin: 0; font-weight: 600; font-size: 11pt;">
                Substantially dampens ambient dining room reverberation, creating a relaxed acoustic atmosphere that encourages extended guest dwell time.
              </p>
            </div>
          </div>
          <div>
            <div class="img-box" style="height: 68mm;">
              <img src="${assets.acousticBooth}" alt="Custom Acoustic Privacy Booth" />
            </div>
            <div class="img-caption">
              <span>DOCUMENTED FIELD ASSET • ACOUSTIC BANQUETTE BOOTH</span>
              <span>TIMBER BATTEN INTEGRATION • NRC SOUND REDUCTION</span>
            </div>
            <div class="card" style="margin-top: 3mm; background: #FAF5EE;">
              <div style="font-size: 8pt; font-weight: 700; color: #9E7D4E; text-transform: uppercase; margin-bottom: 1mm;">Acoustic Performance Metric</div>
              <p class="body-text" style="color: #4A4033; font-size: 10.5pt; margin: 0;">
                Target reverberation time (RT60) engineered toward 0.7–0.9 seconds—the recognized international acoustic benchmark for fine dining conversation and intimacy.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="doc-footer">
        <div>AFRISMME HUB • CORPORATE PROFILE</div>
        <div>PAGE 09 OF 22</div>
      </div>
    </div>
    `,

    // PAGE 10: PILLAR 03 — RESTORE
    `
    <div class="page">
      <div class="doc-header">
        <span class="brand-left">AFRISMME HUB • THE SIX SUPPORT PILLARS</span>
        <span class="section-tag">03 RESTORE</span>
      </div>
      <div class="content-area">
        <div style="display: flex; justify-content: space-between; align-items: baseline;">
          <div>
            <span class="eyebrow">Pillar 03 — Artisanal Restoration</span>
            <h2 class="section-title">RESTORE: Furniture, Timber, Cane &amp; Fine Finishes</h2>
          </div>
          <span class="badge">The Wood Doctor</span>
        </div>
        <p class="lead-paragraph">
          Renew premium solid wood tables, cane armchairs, and leather banquettes in scheduled batches and planned maintenance windows with food-safe curing.
        </p>

        <div class="grid-2" style="margin-bottom: 3mm;">
          <div>
            <h3 class="card-title">The Commercial Problem</h3>
            <p class="body-text">
              High guest turnover, hot dishes, alcohol spills, and cleaning chemicals rapidly degrade tabletop varnishes, causing scratches, rings, and chipped edges. Replacing commercial hardwood furniture requires significant capital expenditure and lengthy lead times.
            </p>
            <h3 class="card-title" style="margin-top: 2.5mm;">Our Solutions</h3>
            <ul class="body-list">
              <li><strong>Phased Timber Refinishing:</strong> Deep grain sanding, stain removal, and application of natural hardwax oils during scheduled maintenance windows or off-site workshop batches.</li>
              <li><strong>Zero-VOC Food-Safe Oils:</strong> Rapid-curing, non-toxic finishes with zero persistent chemical odours before guest service.</li>
              <li><strong>Artisanal Cane &amp; Wicker Weaving:</strong> Structural re-weaving of damaged rattan armchairs by master craftsmen.</li>
              <li><strong>Leather Revival &amp; Re-dyeing:</strong> Deep pore conditioning, pigment revival, and protective spill-guard sealants.</li>
            </ul>
            <div class="card highlight" style="margin-top: 2.5mm;">
              <div style="font-size: 8pt; font-weight: 700; color: #9E7D4E; text-transform: uppercase;">Measurable Business Outcome</div>
              <p class="body-text" style="color: #214634; margin: 0; font-weight: 600; font-size: 11pt;">
                Delivers substantial capital expenditure savings relative to replacement, executed in coordinated batches to protect your trading capacity.
              </p>
            </div>
          </div>
          <div>
            <div class="img-box" style="height: 68mm;">
              <img src="${assets.ai05WoodWorkshop}" alt="Artisan Woodworker Workshop" />
            </div>
            <div class="img-caption">
              <span>REPRESENTATIVE VISUALISATION • MASTER ARTISAN TIMBER WORKSHOP</span>
              <span>HAND-RUBBED TEAK RESTORATION • ZERO-VOC CURE</span>
            </div>
            <div class="card" style="margin-top: 3mm; background: #FAF5EE;">
              <div style="font-size: 8pt; font-weight: 700; color: #9E7D4E; text-transform: uppercase; margin-bottom: 1mm;">Food-Safe Surface Standards</div>
              <p class="body-text" style="color: #4A4033; font-size: 10.5pt; margin: 0;">
                Finishes comply with international food contact standards (EN 71-3). Natural plant-based oils cure rapidly to ensure odour-free dining tables ready for guest service.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="doc-footer">
        <div>AFRISMME HUB • CORPORATE PROFILE</div>
        <div>PAGE 10 OF 22</div>
      </div>
    </div>
    `,

    // PAGE 11: PILLAR 04 — MAINTAIN
    `
    <div class="page">
      <div class="doc-header">
        <span class="brand-left">AFRISMME HUB • THE SIX SUPPORT PILLARS</span>
        <span class="section-tag">04 MAINTAIN</span>
      </div>
      <div class="content-area">
        <div style="display: flex; justify-content: space-between; align-items: baseline;">
          <div>
            <span class="eyebrow">Pillar 04 — Preventative Care &amp; Facilities</span>
            <h2 class="section-title">MAINTAIN: Preventative Care &amp; Rapid Fleet Logistics</h2>
          </div>
          <span class="badge">Technical Fleet</span>
        </div>
        <p class="lead-paragraph">
          Protect critical kitchen equipment, commercial ventilation, and cold storage with scheduled preventative audits and priority mobile response.
        </p>

        <div class="grid-2" style="margin-bottom: 3mm;">
          <div>
            <h3 class="card-title">The Commercial Problem</h3>
            <p class="body-text">
              Emergency breakdowns in commercial extraction hoods, under-counter refrigeration, or electrical circuits occur most often under peak weekend service loads. Reactive emergency call-outs incur steep after-hours fees and risk disastrous service halts.
            </p>
            <h3 class="card-title" style="margin-top: 2.5mm;">Our Solutions</h3>
            <ul class="body-list">
              <li><strong>Scheduled Preventative Inspections:</strong> Monthly diagnostic service of hood extraction fans, grease filters, and refrigeration condenser coils.</li>
              <li><strong>Mobile Rapid Workshops:</strong> Fully equipped support vans stocked with critical spares for contract clients.</li>
              <li><strong>Cold-Chain Refrigeration Auditing:</strong> Temperature calibration, door gasket replacements, and digital telemetry checks.</li>
              <li><strong>Preventative Mechanical Logs:</strong> Comprehensive servicing documentation required for insurance and health inspection compliance.</li>
            </ul>
            <div class="card highlight" style="margin-top: 2.5mm;">
              <div style="font-size: 8pt; font-weight: 700; color: #9E7D4E; text-transform: uppercase;">Measurable Business Outcome</div>
              <p class="body-text" style="color: #2E333D; margin: 0; font-weight: 600; font-size: 11pt;">
                Substantially mitigates costly emergency breakdowns through structured preventative maintenance, extending the operating life of kitchen assets.
              </p>
            </div>
          </div>
          <div>
            <div class="img-box" style="height: 68mm;">
              <img src="${assets.mockupFleet}" alt="AfriSMME South African Branded Support Vehicle" />
            </div>
            <div class="img-caption">
              <span>DOCUMENTED FLEET ASSET • SOUTH AFRICAN MOBILE RAPID WORKSHOP</span>
              <span>CAPE TOWN &amp; GAUTENG SERVICE CORRIDORS • PRIORITY DISPATCH</span>
            </div>
            <div class="card" style="margin-top: 3mm; background: #FAF5EE;">
              <div style="font-size: 8pt; font-weight: 700; color: #9E7D4E; text-transform: uppercase; margin-bottom: 1mm;">Fleet Deployment Standards</div>
              <p class="body-text" style="color: #4A4033; font-size: 10.5pt; margin: 0;">
                Fully stocked mobile engineering units operating across Gauteng, Western Cape, and KwaZulu-Natal, staffed with certified gas, electrical, and extraction specialists.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="doc-footer">
        <div>AFRISMME HUB • CORPORATE PROFILE</div>
        <div>PAGE 11 OF 22</div>
      </div>
    </div>
    `,

    // PAGE 12: PILLAR 05 — PROTECT
    `
    <div class="page">
      <div class="doc-header">
        <span class="brand-left">AFRISMME HUB • THE SIX SUPPORT PILLARS</span>
        <span class="section-tag">05 PROTECT</span>
      </div>
      <div class="content-area">
        <div style="display: flex; justify-content: space-between; align-items: baseline;">
          <div>
            <span class="eyebrow">Pillar 05 — Safety &amp; Operational Shield</span>
            <h2 class="section-title">PROTECT: Safety, Compliance &amp; Operational Assurance</h2>
          </div>
          <span class="badge">AfriHealth &amp; Safety</span>
        </div>
        <p class="lead-paragraph">
          Shield the venue from municipal compliance stoppages, insurance repudiation, and hygiene risks through rigorous statutory audits and presentation standards.
        </p>

        <div class="grid-2" style="margin-bottom: 3mm;">
          <div>
            <h3 class="card-title">The Commercial Problem</h3>
            <p class="body-text">
              Municipal environmental health inspectors, Department of Labour OHS auditors, and insurance underwriters enforce exacting standards. Uncertified duct cleaning, missing fire suppression logs, cross-contamination risks, or disheveled staff uniforms expose venues to severe reputational and legal risks.
            </p>
            <h3 class="card-title" style="margin-top: 2.5mm;">Our Solutions</h3>
            <ul class="body-list">
              <li><strong>SANS 10400 &amp; SANS 1850 Alignment:</strong> Extraction duct fire safety checks, automatic gas shut-off verifications, and compliance records.</li>
              <li><strong>HACCP Food Safety Protocols:</strong> Deep kitchen hygiene audits, cross-contamination zoning, and temperature register compliance.</li>
              <li><strong>Emergency Egress &amp; Equipment Verification:</strong> Fire extinguisher inspections, illuminated exit signage, and first aid compliance.</li>
              <li><strong>Staff Presentation &amp; Uniforms:</strong> Contract-grade front-of-house and culinary apparel with tailored embroidered brand crests.</li>
            </ul>
            <div class="card highlight" style="margin-top: 2.5mm;">
              <div style="font-size: 8pt; font-weight: 700; color: #9E7D4E; text-transform: uppercase;">Measurable Business Outcome</div>
              <p class="body-text" style="color: #2E333D; margin: 0; font-weight: 600; font-size: 11pt;">
                Maintains proactive inspection readiness, prevents municipal non-compliance notices, and ensures alignment with insurance risk requirements.
              </p>
            </div>
          </div>
          <div>
            <div class="img-box" style="height: 68mm;">
              <img src="${assets.ai09Compliance}" alt="Hospitality Compliance Audit" />
            </div>
            <div class="img-caption">
              <span>REPRESENTATIVE VISUALISATION • EXECUTIVE KITCHEN SAFETY AUDIT</span>
              <span>GAS ISOLATION • VENTILATION COMPLIANCE • HACCP LOGS</span>
            </div>
            <div class="card" style="margin-top: 3mm; background: #FAF5EE;">
              <div style="font-size: 8pt; font-weight: 700; color: #9E7D4E; text-transform: uppercase; margin-bottom: 1mm;">Regulatory Framework Coverage</div>
              <p class="body-text" style="color: #4A4033; font-size: 10.5pt; margin: 0;">
                Comprehensive statutory coverage aligning with the Occupational Health &amp; Safety Act (Act 85 of 1993), SANS 1850 commercial kitchen ventilation, and R638 food hygiene regulations.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="doc-footer">
        <div>AFRISMME HUB • CORPORATE PROFILE</div>
        <div>PAGE 12 OF 22</div>
      </div>
    </div>
    `,

    // PAGE 13: PILLAR 06 — GROW
    `
    <div class="page">
      <div class="doc-header">
        <span class="brand-left">AFRISMME HUB • THE SIX SUPPORT PILLARS</span>
        <span class="section-tag">06 GROW</span>
      </div>
      <div class="content-area">
        <div style="display: flex; justify-content: space-between; align-items: baseline;">
          <div>
            <span class="eyebrow">Pillar 06 — Technology &amp; Commercial Lift</span>
            <h2 class="section-title">GROW: Digital Systems, AI, Menus &amp; Capacity Yield</h2>
          </div>
          <span class="badge">Scinovalities Tech</span>
        </div>
        <p class="lead-paragraph">
          Maximize seating revenue through floorplan yield modeling, interactive digital menus, AI guest communications, and dominant local search presence.
        </p>

        <div class="grid-2" style="margin-bottom: 3mm;">
          <div>
            <h3 class="card-title">The Commercial Problem</h3>
            <p class="body-text">
              Many high-end venues leave significant revenue unrealized due to static table configurations, cumbersome PDF menu downloads, unmanaged Google Maps listings, and delayed responses to group reservation inquiries.
            </p>
            <h3 class="card-title" style="margin-top: 2.5mm;">Our Solutions (via Scinovalities)</h3>
            <ul class="body-list">
              <li><strong>Interactive Smart QR Menus:</strong> Fast, app-free digital menus featuring high-resolution visuals, allergen filters, and wine pairing notes.</li>
              <li><strong>Floorplan Yield Modeling:</strong> Data-informed reconfiguration of 2-top and 4-top tables to increase seat density without crowding.</li>
              <li><strong>AI Guest Concierge:</strong> Automated inquiry management for group bookings, private dining, and dietary requirements.</li>
              <li><strong>Local SEO &amp; AEO Optimization:</strong> Elevate mobile search ranking and map discovery for luxury dining in your catchment.</li>
            </ul>
            <div class="card highlight" style="margin-top: 2.5mm;">
              <div style="font-size: 8pt; font-weight: 700; color: #9E7D4E; text-transform: uppercase;">Measurable Business Outcome</div>
              <p class="body-text" style="color: #2E333D; margin: 0; font-weight: 600; font-size: 11pt;">
                Enhances average guest order value through visual menu merchandising, wine pairing recommendations, and optimized table turnover during peak services.
              </p>
            </div>
          </div>
          <div>
            <div class="img-box" style="height: 68mm;">
              <img src="${assets.ai10DigitalTech}" alt="Hospitality Digital Analytics UI" />
            </div>
            <div class="img-caption">
              <span>REPRESENTATIVE VISUALISATION • DIGITAL HOSPITALITY TELEMETRY</span>
              <span>SCINOVALITIES PLATFORM • CAPACITY TURNOVER</span>
            </div>
            <div class="card" style="margin-top: 3mm; background: #FAF5EE;">
              <div style="font-size: 8pt; font-weight: 700; color: #9E7D4E; text-transform: uppercase; margin-bottom: 1mm;">Digital Performance Benchmark</div>
              <p class="body-text" style="color: #4A4033; font-size: 10.5pt; margin: 0;">
                Rapid sub-second mobile page delivery, direct Dineplan and OpenTable integration, and structured review management pipelines.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="doc-footer">
        <div>AFRISMME HUB • CORPORATE PROFILE</div>
        <div>PAGE 13 OF 22</div>
      </div>
    </div>
    `,

    // PAGE 14: TECHNOLOGY & DIGITAL INFRASTRUCTURE
    `
    <div class="page dark">
      <div class="doc-header">
        <span class="brand-left">AFRISMME HUB • TECHNOLOGY ARCHITECTURE</span>
        <span class="section-tag">07 DIGITAL INFRASTRUCTURE</span>
      </div>
      <div class="content-area">
        <div>
          <span class="eyebrow">Scinovalities Partnership</span>
          <h2 class="section-title">Digital Hospitality: Physical &amp; Digital Unity</h2>
          <p class="lead-paragraph">
            The physical dining room and your digital presence must tell the same story. In partnership with Scinovalities, we engineer end-to-end digital touchpoints that mirror your physical venue's excellence.
          </p>
        </div>

        <div class="grid-2" style="margin-bottom: 3.5mm;">
          <div class="card">
            <h3 class="card-title" style="color: #C5A880;">Next-Gen Guest Discovery</h3>
            <p class="body-text">
              Dining choices are frequently made on mobile devices within seconds. We implement Answer Engine Optimisation (AEO) and structured Schema markup, ensuring your venue ranks prominently on Google Maps, Apple Maps, and AI assistant searches.
            </p>
            <h3 class="card-title" style="color: #C5A880; margin-top: 2.5mm;">Dynamic Digital Menus</h3>
            <p class="body-text">
              Eliminate dated, illegible PDF downloads. Our bespoke responsive digital menus feature instant currency options, dynamic sommelier wine pairings, daily chef specials, and allergen filters, supporting higher beverage and dessert conversion.
            </p>
          </div>
          <div class="card">
            <h3 class="card-title" style="color: #C5A880;">AI Guest Inquiries &amp; Functions</h3>
            <p class="body-text">
              Streamline group booking and event inquiries via intelligent WhatsApp and website concierges that answer complex menu questions, check function room availability, and route qualified leads directly to your events team.
            </p>
            <h3 class="card-title" style="color: #C5A880; margin-top: 2.5mm;">Reputation Telemetry</h3>
            <p class="body-text">
              Real-time monitoring of Google Reviews, TripAdvisor, and social mentions. AI-assisted sentiment analysis alerts management promptly to emerging food, noise, or service friction points before they impact brand reputation.
            </p>
          </div>
        </div>

        <div class="stat-strip">
          <div class="stat-box">
            <div class="stat-val">&lt;0.8s</div>
            <div class="stat-lbl">Mobile Menu Load</div>
          </div>
          <div class="stat-box">
            <div class="stat-val">Enhanced</div>
            <div class="stat-lbl">Item Conversion</div>
          </div>
          <div class="stat-box">
            <div class="stat-val">24/7</div>
            <div class="stat-lbl">Automated Inquiries</div>
          </div>
          <div class="stat-box">
            <div class="stat-val">Real-Time</div>
            <div class="stat-lbl">Menu Synchronisation</div>
          </div>
        </div>
      </div>
      <div class="doc-footer">
        <div>AFRISMME HUB • CORPORATE PROFILE</div>
        <div>PAGE 14 OF 22</div>
      </div>
    </div>
    `,

    // PAGE 15: SPECIALIST ECOSYSTEM NETWORK
    `
    <div class="page">
      <div class="doc-header">
        <span class="brand-left">AFRISMME HUB • SPECIALIST CAPABILITIES</span>
        <span class="section-tag">08 THE SPECIALIST NETWORK</span>
      </div>
      <div class="content-area">
        <div>
          <span class="eyebrow">Coordinated Specialist Divisions</span>
          <h2 class="section-title">The Specialist Ecosystem Network</h2>
          <p class="lead-paragraph">
            AfriSMME Hub combines specialized craftsmanship, shade engineering, compliance, and digital capabilities under a coordinated operational umbrella.
          </p>
        </div>

        <div class="grid-2" style="margin-bottom: 3.5mm;">
          <div class="card highlight">
            <div style="display: flex; justify-content: space-between; align-items: baseline;">
              <h3 class="card-title">The Wood Doctor</h3>
              <span class="badge">Timber &amp; Restoration</span>
            </div>
            <p class="body-text">
              Specialist timber artisans dedicated to commercial restaurant furniture renewal, dustless hardwood floor sanding, and hand-rubbed food-safe zero-VOC oil finishes.
            </p>
            <div style="font-size: 8pt; color: #8E95A5; font-family: 'JetBrains Mono', monospace;">wooddoctor.co.za • Sandton Workshops</div>
          </div>

          <div class="card highlight">
            <div style="display: flex; justify-content: space-between; align-items: baseline;">
              <h3 class="card-title">AfriShades</h3>
              <span class="badge">Terrace &amp; Shading</span>
            </div>
            <p class="body-text">
              Commercial-grade cantilever umbrellas, heavy-duty parasols, windbreaks, and architectural patio shading systems engineered for extreme weather durability.
            </p>
            <div style="font-size: 8pt; color: #8E95A5; font-family: 'JetBrains Mono', monospace;">afrishades.co.za • Architectural Shading</div>
          </div>

          <div class="card highlight">
            <div style="display: flex; justify-content: space-between; align-items: baseline;">
              <h3 class="card-title">Cane Africa</h3>
              <span class="badge">Cane &amp; Woven Furniture</span>
            </div>
            <p class="body-text">
              Handcrafted natural cane, synthetic commercial wicker, and structural re-weaving of luxury hospitality armchairs and dining suites.
            </p>
            <div style="font-size: 8pt; color: #8E95A5; font-family: 'JetBrains Mono', monospace;">caneafrica.co.za • Hand-Weaving Atelier</div>
          </div>

          <div class="card highlight">
            <div style="display: flex; justify-content: space-between; align-items: baseline;">
              <h3 class="card-title">Textile Doctor</h3>
              <span class="badge">Upholstery &amp; Leather</span>
            </div>
            <p class="body-text">
              Contract-grade commercial reupholstery, custom booth fluting, acoustic wall fabrics, and on-site deep leather pigment revitalization.
            </p>
            <div style="font-size: 8pt; color: #8E95A5; font-family: 'JetBrains Mono', monospace;">Contract Fabrics • CMHR Fire Foam</div>
          </div>

          <div class="card highlight">
            <div style="display: flex; justify-content: space-between; align-items: baseline;">
              <h3 class="card-title">AfriHealth &amp; Safety</h3>
              <span class="badge">Compliance &amp; OHS</span>
            </div>
            <p class="body-text">
              Statutory hospitality health inspections, SANS 10400 / SANS 1850 fire safety compliance, kitchen hygiene certifications, and bespoke uniform cresting.
            </p>
            <div style="font-size: 8pt; color: #8E95A5; font-family: 'JetBrains Mono', monospace;">HACCP Ready • SANS Aligned</div>
          </div>

          <div class="card highlight">
            <div style="display: flex; justify-content: space-between; align-items: baseline;">
              <h3 class="card-title">Scinovalities</h3>
              <span class="badge">Digital &amp; AI Tech</span>
            </div>
            <p class="body-text">
              Modern hospitality web platforms, interactive smart menus, AI guest messaging, Google local search optimization, and capacity yield modeling.
            </p>
            <div style="font-size: 8pt; color: #8E95A5; font-family: 'JetBrains Mono', monospace;">scinovalities.com • Hospitality Tech</div>
          </div>
        </div>

        <div class="card" style="background: #FAF5EE; border-color: #E2D6C3;">
          <p class="body-text" style="color: #4A4033; margin: 0; font-size: 11pt;">
            <strong>Contractual Note:</strong> AfriSMME Hub operates as the unified project coordinator and single contracting entity. All specialist partner services are coordinated, insured, and managed under our single comprehensive SLA.
          </p>
        </div>
      </div>
      <div class="doc-footer">
        <div>AFRISMME HUB • CORPORATE PROFILE</div>
        <div>PAGE 15 OF 22</div>
      </div>
    </div>
    `,

    // PAGE 16: HOSPITALITY SEGMENTS
    `
    <div class="page">
      <div class="doc-header">
        <span class="brand-left">AFRISMME HUB • SECTOR APPLICATIONS</span>
        <span class="section-tag">09 SECTOR SOLUTIONS</span>
      </div>
      <div class="content-area">
        <div>
          <span class="eyebrow">Tailored Market Applications</span>
          <h2 class="section-title">Serving Premier Hospitality Sectors</h2>
          <p class="lead-paragraph">
            Every hospitality sector faces distinct operational friction points. We tailor our six support pillars to address the specific commercial requirements of each venue category.
          </p>
        </div>

        <div class="grid-3" style="margin-bottom: 3mm;">
          <div class="card">
            <h3 class="card-title" style="font-size: 11.5pt;">Fine Dining &amp; Bistros</h3>
            <p class="body-text" style="font-size: 10pt; color: #28523E; margin-bottom: 1.5mm;">
              <strong>Challenges:</strong> Dining acoustic reverberation, wine-stained tables, and short dinner dwell times.
            </p>
            <p class="body-text" style="font-size: 10pt; color: #132A1F; margin: 0;">
              <strong>Interventions:</strong> NRC sound absorption panels, phased table refinishing, and intimate banquette zoning.
            </p>
          </div>

          <div class="card">
            <h3 class="card-title" style="font-size: 11.5pt;">Hotels &amp; Beach Resorts</h3>
            <p class="body-text" style="font-size: 10pt; color: #555C6B; margin-bottom: 1.5mm;">
              <strong>Challenges:</strong> Heavy traffic from breakfast to dinner, UV sun bleaching on pool loungers, and wind damage.
            </p>
            <p class="body-text" style="font-size: 10pt; color: #383D48; margin: 0;">
              <strong>Interventions:</strong> Heavy-duty AfriShades cantilevers, synthetic wicker repair, and scheduled preventative care.
            </p>
          </div>

          <div class="card">
            <h3 class="card-title" style="font-size: 11.5pt;">Safari Lodges &amp; Camps</h3>
            <p class="body-text" style="font-size: 10pt; color: #555C6B; margin-bottom: 1.5mm;">
              <strong>Challenges:</strong> Intense bush sun exposure, weathered ironwood decks, and remote supply logistics.
            </p>
            <p class="body-text" style="font-size: 10pt; color: #383D48; margin: 0;">
              <strong>Interventions:</strong> Heavy timber oil nourishment, canvas pavilion maintenance, and batch workshop collections.
            </p>
          </div>
        </div>

        <div class="grid-3" style="margin-bottom: 3mm;">
          <div class="card">
            <h3 class="card-title" style="font-size: 11.5pt;">Historic Wine Estates</h3>
            <p class="body-text" style="font-size: 10pt; color: #555C6B; margin-bottom: 1.5mm;">
              <strong>Challenges:</strong> Expansive garden patios vulnerable to winds, heritage joinery preservation.
            </p>
            <p class="body-text" style="font-size: 10pt; color: #383D48; margin: 0;">
              <strong>Interventions:</strong> Wind-rated parasols, architectural brass signage, and heritage wood restoration.
            </p>
          </div>

          <div class="card">
            <h3 class="card-title" style="font-size: 11.5pt;">Cocktail Bars &amp; Lounges</h3>
            <p class="body-text" style="font-size: 10pt; color: #555C6B; margin-bottom: 1.5mm;">
              <strong>Challenges:</strong> Heavy bar top scuffing, worn leather stools, and chaotic entrance flow.
            </p>
            <p class="body-text" style="font-size: 10pt; color: #383D48; margin: 0;">
              <strong>Interventions:</strong> Bar top solid surface polishing, deep leather revival, and dimmable accent lighting.
            </p>
          </div>

          <div class="card">
            <h3 class="card-title" style="font-size: 11.5pt;">Multi-Site Groups</h3>
            <p class="body-text" style="font-size: 10pt; color: #555C6B; margin-bottom: 1.5mm;">
              <strong>Challenges:</strong> Inconsistent standards between locations, duplicated contractor invoices.
            </p>
            <p class="body-text" style="font-size: 10pt; color: #383D48; margin: 0;">
              <strong>Interventions:</strong> Standardized group SLA, priority fleet routing, and centralized executive billing.
            </p>
          </div>
        </div>

        <div>
          <div class="img-box" style="height: 52mm;">
            <img src="${assets.ai08EstateTerrace}" alt="Restored Estate Terrace Franschhoek" />
          </div>
          <div class="img-caption">
            <span>REPRESENTATIVE VISUALISATION • HISTORIC WINE ESTATE TERRACE</span>
            <span>FRANSCHHOEK, WESTERN CAPE • COMPREHENSIVE OUTDOOR RESTORATION</span>
          </div>
        </div>
      </div>
      <div class="doc-footer">
        <div>AFRISMME HUB • CORPORATE PROFILE</div>
        <div>PAGE 16 OF 22</div>
      </div>
    </div>
    `,

    // PAGE 17: OPERATING MODEL: PHASED & SCHEDULED PROTOCOL
    `
    <div class="page dark">
      <div class="doc-header">
        <span class="brand-left">AFRISMME HUB • OPERATING MODEL</span>
        <span class="section-tag">10 PHASED &amp; SCHEDULED EXECUTION</span>
      </div>
      <div class="content-area">
        <div>
          <span class="eyebrow">The Phased Operating Principle</span>
          <h2 class="section-title">Minimal Service Disruption: Phased Daytime &amp; Workshop Runbook</h2>
          <p class="lead-paragraph">
            The hospitality business cannot afford unplanned closures for maintenance. Every uncoordinated shutdown disrupts revenue and inconveniences guests.
          </p>
        </div>

        <div class="grid-2" style="margin-bottom: 3.5mm;">
          <div>
            <h3 class="card-title" style="color: #C5A880;">The Phased &amp; Scheduled Execution Protocol</h3>
            <div style="font-size: 10.5pt; color: #E5DEC9; line-height: 1.5;">
              <div style="padding: 1.5mm 0; border-bottom: 1px solid #28523E;">
                <strong style="color: #C5A880;">STAGE 01 — Zonal Isolation &amp; Floor Protection</strong><br/>
                Our crew arrives during agreed daytime maintenance windows. Floor protection and dust containment barriers are established around the designated zone.
              </div>
              <div style="padding: 1.5mm 0; border-bottom: 1px solid #28523E;">
                <strong style="color: #C5A880;">STAGE 02 — Dustless Sanding &amp; Mechanical Servicing</strong><br/>
                Commercial HEPA-filtered sanders strip damaged finishes, or furniture batches are collected for our Lyndhurst, Johannesburg workshop.
              </div>
              <div style="padding: 1.5mm 0; border-bottom: 1px solid #28523E;">
                <strong style="color: #C5A880;">STAGE 03 — Food-Safe Hand-Rubbed Oil Application</strong><br/>
                Master craftsmen apply rapid-cure natural hardwax oils to table surfaces and bar tops. Leather nourishment applied.
              </div>
              <div style="padding: 1.5mm 0; border-bottom: 1px solid #28523E;">
                <strong style="color: #C5A880;">STAGE 04 — Curing &amp; Ventilation Verification</strong><br/>
                Fresh-air exchange verified; zero volatile organic compounds or chemical odours remain in dining zones.
              </div>
              <div style="padding: 1.5mm 0;">
                <strong style="color: #C5A880;">STAGE 05 — Ready-for-Service Sign-Off</strong><br/>
                Final quality inspection signed off with the duty manager. Zone is spotless and ready for guest seating.
              </div>
            </div>
          </div>
          <div>
            <div class="card" style="height: 100%; display: flex; flex-direction: column; justify-content: space-between;">
              <div>
                <h3 class="card-title" style="color: #C5A880;">Service-Ready Handover Commitment</h3>
                <p class="body-text" style="font-size: 11pt;">
                  Structured operational runbooks, dedicated site supervisors, and formal handover protocols ensure every venue zone is returned spotless, cured, and service-ready on schedule.
                </p>
                <div style="background: rgba(197,168,128,0.1); border: 1px solid #C5A880; padding: 3mm; border-radius: 3px; margin-top: 3mm;">
                  <div style="font-size: 8pt; font-weight: 700; color: #C5A880; text-transform: uppercase;">Dustless HEPA Standards</div>
                  <p class="body-text" style="color: #C2D6CB; margin: 0; font-size: 10.5pt; line-height: 1.4;">
                    Sealed vacuum extraction with industrial HEPA filtration safeguards dining tables, linens, and glassware from airborne timber dust.
                  </p>
                </div>
              </div>
              <div class="stat-strip" style="grid-template-columns: 1fr 1fr; margin-top: 3.5mm;">
                <div class="stat-box">
                  <div class="stat-val">0</div>
                  <div class="stat-lbl">Chemical Odour</div>
                </div>
                <div class="stat-box">
                  <div class="stat-val">100%</div>
                  <div class="stat-lbl">Service Ready</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style="background: #132A1F; border-radius: 4px; padding: 3mm 4mm; border-left: 3.5px solid #C5A880;">
          <p class="body-text" style="color: #E5DEC9; margin: 0; font-size: 11pt;">
            <strong style="color: #C5A880;">Scheduled Service Dispatch:</strong> Preventative maintenance and batch collections operate across Johannesburg, Pretoria, Cape Town, and Durban during planned daytime windows.
          </p>
        </div>
      </div>
      <div class="doc-footer">
        <div>AFRISMME HUB • CORPORATE PROFILE</div>
        <div>PAGE 17 OF 22</div>
      </div>
    </div>
    `,

    // PAGE 18: ONE PARTNER GOVERNANCE MODEL
    `
    <div class="page">
      <div class="doc-header">
        <span class="brand-left">AFRISMME HUB • GOVERNANCE ARCHITECTURE</span>
        <span class="section-tag">11 CONTRACT MODEL</span>
      </div>
      <div class="content-area">
        <div>
          <span class="eyebrow">Enterprise Governance</span>
          <h2 class="section-title">The One Coordinated Partner Governance Model</h2>
          <p class="lead-paragraph">
            Eliminate inter-vendor friction, administrative overhead, and fragmented accountability. AfriSMME Hub serves as the unified commercial and operational partner for the entire hospitality environment.
          </p>
        </div>

        <div class="diagram-wrapper" style="margin: 2mm 0 3.5mm 0;">
          <img src="${assets.diagram03}" alt="The One Coordinated Partner Operating Model" />
        </div>

        <div class="grid-2">
          <div class="card highlight">
            <h3 class="card-title" style="color: #A94442;">Traditional Disconnected Model</h3>
            <ul class="body-list" style="color: #555C68;">
              <li>Multiple separate contractor quotes, contracts, and credit applications.</li>
              <li>Divided accountability and inter-trade conflict during overlapping scopes.</li>
              <li>Unplanned daytime service shutdowns and disruptive revenue losses.</li>
              <li>Disproportionate executive management hours drained by trade supervision.</li>
              <li>Fragmented warranties, disputed liabilities, and lack of central recourse.</li>
            </ul>
          </div>
          <div class="card highlight" style="border-left-color: #27AE60;">
            <h3 class="card-title" style="color: #1E7E34;">AfriSMME Hub Coordinated Model</h3>
            <ul class="body-list" style="color: #214634;">
              <li><strong>Consolidated Master Service Agreement (SLA)</strong> across all trades.</li>
              <li>Dedicated Technical Account Director managing end-to-end deliverables.</li>
              <li>Planned daytime maintenance windows and phased batch rotation preserving trading.</li>
              <li>Management bandwidth protected to focus entirely on guest hospitality.</li>
              <li>Coordinated master warranty with single-source contractual accountability.</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="doc-footer">
        <div>AFRISMME HUB • CORPORATE PROFILE</div>
        <div>PAGE 18 OF 22</div>
      </div>
    </div>
    `,

    // PAGE 19: VENUE ASSESSMENT MODEL
    `
    <div class="page">
      <div class="doc-header">
        <span class="brand-left">AFRISMME HUB • DIAGNOSTIC FRAMEWORK</span>
        <span class="section-tag">12 VENUE ASSESSMENT</span>
      </div>
      <div class="content-area">
        <div>
          <span class="eyebrow">Diagnostic Audit Protocol</span>
          <h2 class="section-title">The 10-Point Hospitality Venue Assessment Model</h2>
          <p class="lead-paragraph">
            Before recommending any intervention, our engineers conduct an objective diagnostic audit across ten critical dimensions of your hospitality operation.
          </p>
        </div>

        <div class="grid-2" style="margin-bottom: 3mm;">
          <div style="display: flex; flex-direction: column; gap: 1.8mm;">
            <div class="card" style="padding: 2.2mm 3.5mm;">
              <strong style="color: #C5A880; font-size: 10.5pt;">01. Physical Environment:</strong>
              <span class="body-text" style="font-size: 10.5pt; margin: 0; display: inline;"> Floor finishes, wall condition, architectural lighting, entrance ambiance.</span>
            </div>
            <div class="card" style="padding: 2.2mm 3.5mm;">
              <strong style="color: #C5A880; font-size: 10.5pt;">02. Guest Experience:</strong>
              <span class="body-text" style="font-size: 10.5pt; margin: 0; display: inline;"> Acoustic reverberation, seating ergonomics, table spacing, dining comfort.</span>
            </div>
            <div class="card" style="padding: 2.2mm 3.5mm;">
              <strong style="color: #C5A880; font-size: 10.5pt;">03. Outdoor Spaces:</strong>
              <span class="body-text" style="font-size: 10.5pt; margin: 0; display: inline;"> Terrace shading, wind protection, parasol stability, all-weather capacity.</span>
            </div>
            <div class="card" style="padding: 2.2mm 3.5mm;">
              <strong style="color: #C5A880; font-size: 10.5pt;">04. Furniture &amp; Finishes:</strong>
              <span class="body-text" style="font-size: 10.5pt; margin: 0; display: inline;"> Tabletop lacquer wear, cane weave integrity, leather hydration.</span>
            </div>
            <div class="card" style="padding: 2.2mm 3.5mm;">
              <strong style="color: #C5A880; font-size: 10.5pt;">05. Preventative Care:</strong>
              <span class="body-text" style="font-size: 10.5pt; margin: 0; display: inline;"> Extraction ducts, refrigeration coils, electrical distribution boards.</span>
            </div>
          </div>

          <div style="display: flex; flex-direction: column; gap: 1.8mm;">
            <div class="card" style="padding: 2.2mm 3.5mm;">
              <strong style="color: #C5A880; font-size: 10.5pt;">06. Safety &amp; Compliance:</strong>
              <span class="body-text" style="font-size: 10.5pt; margin: 0; display: inline;"> SANS 10400 fire egress, gas isolation valves, hygiene HACCP logs.</span>
            </div>
            <div class="card" style="padding: 2.2mm 3.5mm;">
              <strong style="color: #C5A880; font-size: 10.5pt;">07. Digital Presence:</strong>
              <span class="body-text" style="font-size: 10.5pt; margin: 0; display: inline;"> Website performance, interactive QR menus, Google local search ranking.</span>
            </div>
            <div class="card" style="padding: 2.2mm 3.5mm;">
              <strong style="color: #C5A880; font-size: 10.5pt;">08. Technology &amp; AI:</strong>
              <span class="body-text" style="font-size: 10.5pt; margin: 0; display: inline;"> Automated booking workflows, table turnaround analytics, reputation alerts.</span>
            </div>
            <div class="card" style="padding: 2.2mm 3.5mm;">
              <strong style="color: #C5A880; font-size: 10.5pt;">09. Operational Continuity:</strong>
              <span class="body-text" style="font-size: 10.5pt; margin: 0; display: inline;"> Service flow choke points, waitstation layouts, dirty dish return routes.</span>
            </div>
            <div class="card" style="padding: 2.2mm 3.5mm;">
              <strong style="color: #C5A880; font-size: 10.5pt;">10. Growth Drivers:</strong>
              <span class="body-text" style="font-size: 10.5pt; margin: 0; display: inline;"> Terrace optimization, table yield configuration, average spend drivers.</span>
            </div>
          </div>
        </div>

        <div>
          <div style="font-size: 9pt; font-weight: 700; color: #132A1F; margin-bottom: 1.5mm; text-transform: uppercase; letter-spacing: 1px;">The 4-Tier Prioritisation Output</div>
          <div class="grid-4">
            <div class="card" style="border-top: 3.5px solid #C0392B; padding: 2.5mm 3mm;">
              <div style="font-size: 8pt; font-weight: 800; color: #C0392B;">PRIORITY 1</div>
              <div style="font-size: 10pt; font-weight: 700; color: #132A1F;">Critical</div>
              <p class="body-text" style="font-size: 9pt; color: #6D7483; margin: 0; line-height: 1.35;">Fire risks, gas leaks, health hazards, emergency downtime.</p>
            </div>
            <div class="card" style="border-top: 3.5px solid #D35400; padding: 2.5mm 3mm;">
              <div style="font-size: 8pt; font-weight: 800; color: #D35400;">PRIORITY 2</div>
              <div style="font-size: 10pt; font-weight: 700; color: #132A1F;">High Impact</div>
              <p class="body-text" style="font-size: 9pt; color: #6D7483; margin: 0; line-height: 1.35;">Terrace shade capacity, dining room acoustics, table count lift.</p>
            </div>
            <div class="card" style="border-top: 3.5px solid #F39C12; padding: 2.5mm 3mm;">
              <div style="font-size: 8pt; font-weight: 800; color: #F39C12;">PRIORITY 3</div>
              <div style="font-size: 10pt; font-weight: 700; color: #132A1F;">Improvement</div>
              <p class="body-text" style="font-size: 9pt; color: #6D7483; margin: 0; line-height: 1.35;">Furniture refinishing, booth reupholstery, brass polishing.</p>
            </div>
            <div class="card" style="border-top: 3.5px solid #27AE60; padding: 2.5mm 3mm;">
              <div style="font-size: 8pt; font-weight: 800; color: #27AE60;">PRIORITY 4</div>
              <div style="font-size: 10pt; font-weight: 700; color: #132A1F;">Optimization</div>
              <p class="body-text" style="font-size: 9pt; color: #6D7483; margin: 0; line-height: 1.35;">AI booking automation, QR menus, predictive telemetry.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="doc-footer">
        <div>AFRISMME HUB • CORPORATE PROFILE</div>
        <div>PAGE 19 OF 22</div>
      </div>
    </div>
    `,

    // PAGE 20: WHY AFRISMME HUB & EXECUTIVE SERVICE MATRIX
    `
    <div class="page">
      <div class="doc-header">
        <span class="brand-left">AFRISMME HUB • COMMERCIAL BENCHMARK</span>
        <span class="section-tag">13 SERVICE MATRIX</span>
      </div>
      <div class="content-area">
        <div>
          <span class="eyebrow">Strategic Value Matrix</span>
          <h2 class="section-title">The Executive Service &amp; Outcome Matrix</h2>
          <p class="lead-paragraph">
            Translating technical engineering and craftsmanship interventions into bottom-line commercial outcomes.
          </p>
        </div>

        <table class="matrix-table">
          <thead>
            <tr>
              <th style="width: 20%;">Venue Area</th>
              <th style="width: 26%;">Operational Challenge</th>
              <th style="width: 26%;">AfriSMME Intervention</th>
              <th style="width: 28%;">Commercial Outcome</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Outdoor Terraces</strong></td>
              <td>Wind, solar glare, rain leaving tables empty</td>
              <td>Heavy-duty cantilevers, windbreaks, heaters</td>
              <td><strong>Substantial terrace cover expansion</strong></td>
            </tr>
            <tr>
              <td><strong>Dining Tables</strong></td>
              <td>Scratched lacquer, wine stains, heat rings</td>
              <td>Phased zero-VOC food-safe hardwax oil</td>
              <td><strong>Significant CapEx savings vs purchasing new</strong></td>
            </tr>
            <tr>
              <td><strong>Acoustic Space</strong></td>
              <td>Harsh reverberation, shouting diners</td>
              <td>Discrete acoustic timber panels (NRC &gt; 0.85)</td>
              <td><strong>Enhanced acoustic comfort; lengthened dwell</strong></td>
            </tr>
            <tr>
              <td><strong>Seating Booths</strong></td>
              <td>Collapsed foam, worn leather, sagging</td>
              <td>CMHR high-density foam &amp; contract leather</td>
              <td><strong>Increased table dwell &amp; premium pricing</strong></td>
            </tr>
            <tr>
              <td><strong>Cane Furniture</strong></td>
              <td>Snapped weave, structural instability</td>
              <td>Artisanal hand re-weaving &amp; frame weld</td>
              <td><strong>Eliminates import replacement delays</strong></td>
            </tr>
            <tr>
              <td><strong>Kitchen Hoods</strong></td>
              <td>Grease build-up, smoke hazard, fire risk</td>
              <td>SANS 1850 scheduled degreasing &amp; balancing</td>
              <td><strong>Statutory fire safety &amp; insurance alignment</strong></td>
            </tr>
            <tr>
              <td><strong>Cold Storage</strong></td>
              <td>Compressor strain, spoiled perishables</td>
              <td>Preventative coil cleaning &amp; gasket renewal</td>
              <td><strong>Prevents costly food spoilage &amp; shutdowns</strong></td>
            </tr>
            <tr>
              <td><strong>Digital Menus</strong></td>
              <td>Illegible PDFs, static unchangeable prices</td>
              <td>Fast interactive mobile QR menu platform</td>
              <td><strong>Higher conversion on pairings &amp; specials</strong></td>
            </tr>
            <tr>
              <td><strong>Compliance</strong></td>
              <td>Environmental health inspection risks</td>
              <td>HACCP &amp; municipal inspection readiness</td>
              <td><strong>Audit readiness &amp; operational risk reduction</strong></td>
            </tr>
          </tbody>
        </table>

        <div class="card highlight" style="margin-top: 3mm;">
          <p class="body-text" style="color: #383D48; margin: 0; font-size: 11pt;">
            <strong>Executive Bottom Line:</strong> Managing your hospitality infrastructure through AfriSMME Hub preserves capital, protects venue asset valuation, and ensures your management team focuses entirely on the guest experience.
          </p>
        </div>
      </div>
      <div class="doc-footer">
        <div>AFRISMME HUB • CORPORATE PROFILE</div>
        <div>PAGE 20 OF 22</div>
      </div>
    </div>
    `,

    // PAGE 21: GEOGRAPHIC FOOTPRINT & CAPABILITIES
    `
    <div class="page">
      <div class="doc-header">
        <span class="brand-left">AFRISMME HUB • LOGISTICS &amp; REACH</span>
        <span class="section-tag">14 GEOGRAPHIC FOOTPRINT</span>
      </div>
      <div class="content-area">
        <div>
          <span class="eyebrow">Operational Reach</span>
          <h2 class="section-title">National Footprint &amp; Workshop Facilities</h2>
          <p class="lead-paragraph">
            Supported by centralized artisan workshops and rapid-response mobile units across South Africa’s key hospitality hubs.
          </p>
        </div>

        <div class="grid-2" style="margin-bottom: 3mm;">
          <div>
            <h3 class="card-title">Central Workshop Facilities</h3>
            <p class="body-text">
              Our central manufacturing and restoration facility is located in Lyndhurst, Johannesburg. Spanning extensive joinery, metal fabrication, and upholstery studios, our workshop handles large-scale batch refurbishments for hotel groups and restaurant chains.
            </p>
            <ul class="body-list">
              <li><strong>Joinery &amp; Timber Lab:</strong> Climate-controlled oil curing and dust extraction.</li>
              <li><strong>Cane Weaving Atelier:</strong> Dedicated hand-weaving frames for natural and synthetic rattan.</li>
              <li><strong>Textile Studio:</strong> Industrial leather stitching and foam fabrication.</li>
              <li><strong>Metal Engineering:</strong> TIG/MIG welding for parasol masts and signage frames.</li>
            </ul>
            <h3 class="card-title" style="margin-top: 2.5mm;">Regional Operating Corridors</h3>
            <div class="body-text" style="font-size: 10.5pt; color: #4A505E; line-height: 1.5;">
              <p style="margin-bottom: 1mm;"><strong>Gauteng:</strong> Sandton, Rosebank, Pretoria, Menlyn, Lanseria.</p>
              <p style="margin-bottom: 1mm;"><strong>Western Cape:</strong> Cape Town, Camps Bay, Franschhoek, Stellenbosch.</p>
              <p style="margin-bottom: 1mm;"><strong>KwaZulu-Natal:</strong> Durban, Umhlanga Rocks, Ballito, North Coast.</p>
              <p style="margin-bottom: 0;"><strong>Safari Lodges:</strong> Sabi Sands, Greater Kruger, Waterberg, Madikwe.</p>
            </div>
          </div>
          <div>
            <div class="img-box" style="height: 66mm;">
              <img src="${assets.ai02Safari}" alt="Safari Lodge Dining Deck" />
            </div>
            <div class="img-caption">
              <span>REPRESENTATIVE VISUALISATION • REMOTE SAFARI LODGE SUPPORT</span>
              <span>SABI SANDS CORRIDOR • TIMBER &amp; SHADE SERVICING</span>
            </div>
            <div class="card" style="margin-top: 3mm; background: #FAF5EE;">
              <div style="font-size: 8pt; font-weight: 700; color: #9E7D4E; text-transform: uppercase; margin-bottom: 1mm;">Remote Lodge Logistics</div>
              <p class="body-text" style="color: #4A4033; font-size: 10.5pt; margin: 0;">
                Scheduled seasonal expedition teams service remote safari properties during low-season gaps, refreshing timber decks, canvas structures, and dining suites without guest disruption.
              </p>
            </div>
          </div>
        </div>

        <div class="stat-strip">
          <div class="stat-box">
            <div class="stat-val">4</div>
            <div class="stat-lbl">Provincial Hubs</div>
          </div>
          <div class="stat-box">
            <div class="stat-val">Priority</div>
            <div class="stat-lbl">Metro SLA Response</div>
          </div>
          <div class="stat-box">
            <div class="stat-val">Regional</div>
            <div class="stat-lbl">Service Corridors</div>
          </div>
          <div class="stat-box">
            <div class="stat-val">Scheduled</div>
            <div class="stat-lbl">Support Windows</div>
          </div>
        </div>
      </div>
      <div class="doc-footer">
        <div>AFRISMME HUB • CORPORATE PROFILE</div>
        <div>PAGE 21 OF 22</div>
      </div>
    </div>
    `,

    // PAGE 22: EXECUTIVE CONTACT & CALL TO ACTION
    `
    <div class="page dark" style="justify-content: space-between; padding: 16mm 18mm; background: radial-gradient(circle at 50% 10%, #28523E 0%, #132A1F 100%);">
      <div class="doc-header">
        <span class="brand-left">AFRISMME HUB • HOSPITALITY SUPPORT ECOSYSTEM</span>
        <span class="section-tag">15 EXECUTIVE ENGAGEMENT</span>
      </div>

      <div class="content-area" style="justify-content: center; gap: 5mm;">
        <div>
          <span class="eyebrow">Initiate Strategic Partnership</span>
          <h2 class="section-title" style="font-size: 28pt; margin-bottom: 2.5mm;">
            Begin With an Objective<br/>
            <span style="color: #C5A880; font-style: italic;">Venue Assessment.</span>
          </h2>
          <p class="lead-paragraph" style="max-width: 160mm; margin-bottom: 4mm;">
            Discover actionable revenue improvements and operational efficiencies across your venue. We conduct a thorough on-site diagnostic audit and deliver a costed, prioritised executive roadmap.
          </p>
        </div>

        <div class="grid-2" style="margin-bottom: 4mm;">
          <div class="card" style="padding: 4.5mm;">
            <div style="font-size: 8.5pt; font-weight: 700; color: #C5A880; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 2mm;">Headquarters &amp; Central Workshops</div>
            <p class="body-text" style="color: #FAF8F5; line-height: 1.6; margin-bottom: 2.5mm; font-size: 11pt;">
              <strong>AfriSMME Hub (Pty) Ltd</strong><br/>
              77 Wilmington Crescent, Lyndhurst<br/>
              Johannesburg, 2192<br/>
              Gauteng, South Africa
            </p>
            <div style="font-size: 9.5pt; color: #A6ADB9; font-family: 'JetBrains Mono', monospace; line-height: 1.55;">
              <div>Office: <a href="tel:+27113465018" style="color: #C5A880; text-decoration: none;">+27 (0) 11 346 5018</a></div>
              <div>WhatsApp: <a href="https://wa.me/27834328394" style="color: #C5A880; text-decoration: none;">+27 (0)83 432 8394</a></div>
              <div>Executive: <a href="mailto:info@afrismmehub.co.za" style="color: #C5A880; text-decoration: none;">info@afrismmehub.co.za</a></div>
            </div>
          </div>

          <div class="card" style="padding: 4.5mm; display: flex; flex-direction: column; justify-content: space-between;">
            <div>
              <div style="font-size: 8.5pt; font-weight: 700; color: #C5A880; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 2mm;">Digital Portal &amp; Audit Booking</div>
              <p class="body-text" style="color: #D2D7E2; line-height: 1.5; margin-bottom: 3.5mm; font-size: 11pt;">
                Schedule your on-site engineering assessment online or explore detailed case studies and technical division capabilities:
              </p>
              <div style="background: rgba(197,168,128,0.12); border: 1px solid #C5A880; padding: 3mm 4mm; border-radius: 4px; text-align: center;">
                <a href="https://www.hospitalitysupport.co.za" style="color: #FAF8F5; text-decoration: none; font-size: 10pt; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase;">
                  WWW.HOSPITALITYSUPPORT.CO.ZA
                </a>
              </div>
            </div>
            <div style="font-size: 8pt; font-family: 'JetBrains Mono', monospace; color: #8E95A5; margin-top: 3mm;">
              CONFIDENTIAL • FOR HOSPITALITY EXECUTIVES &amp; OPERATORS ONLY
            </div>
          </div>
        </div>

        <div style="text-align: center; border-top: 1px solid rgba(197,168,128,0.3); padding-top: 4mm;">
          <div style="font-size: 9.5pt; font-weight: 800; letter-spacing: 3px; color: #FAF8F5; text-transform: uppercase;">AFRISMME HUB • HOSPITALITY SUPPORT ECOSYSTEM</div>
          <div style="font-size: 8pt; font-weight: 600; letter-spacing: 2px; color: #C5A880; margin-top: 1mm;">IDENTIFY • SOLVE • RESTORE • MAINTAIN • GROW</div>
        </div>
      </div>

      <div class="doc-footer">
        <div>AFRISMME HUB • CORPORATE PROFILE</div>
        <div>PAGE 22 OF 22</div>
      </div>
    </div>
    `
  ];

  const fullHtml = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>AfriSMME Hub — Corporate Company Profile</title>
    <style>${css}</style>
  </head>
  <body>
    ${pages.join('\n')}
  </body>
  </html>`;

  const htmlPath = path.join(rootDir, 'public/PDFs/corporate_profile_print.html');
  const pdfPath = path.join(rootDir, 'public/PDFs/AfriSMME_Corporate_Profile_Master.pdf');

  fs.writeFileSync(htmlPath, fullHtml, 'utf8');
  console.log(`Saved Corporate Profile HTML to ${htmlPath}`);

  console.log('Rendering Corporate Profile PDF with Puppeteer...');
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
    preferCSSPageSize: true,
    timeout: 120000
  });

  await browser.close();
  const stats = fs.statSync(pdfPath);
  const altPdfPath = path.join(rootDir, 'public/PDFs/Corporate_Profile_Master.pdf');
  fs.copyFileSync(pdfPath, altPdfPath);
  console.log(`Corporate Profile PDF successfully generated! Size: ${(stats.size / 1024 / 1024).toFixed(2)} MB (${stats.size} bytes)`);
}

generateCorporateProfile().catch(err => {
  console.error('Error generating Corporate Profile:', err);
  process.exit(1);
});
