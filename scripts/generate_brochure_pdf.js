const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer-core');

const rootDir = process.cwd();

function getBase64Image(relPath) {
  const full = path.join(rootDir, relPath);
  if (fs.existsSync(full)) {
    const ext = path.extname(full).toLowerCase();
    const mime = ext === '.png' ? 'image/png' : ext === '.svg' ? 'image/svg+xml' : 'image/jpeg';
    return `data:${mime};base64,${fs.readFileSync(full).toString('base64')}`;
  }
  return '';
}

// Load real images as base64
const imgTeakBefore = getBase64Image('public/real_showcase/teak_armchair_before_perfect.jpg');
const imgTeakAfter = getBase64Image('public/real_showcase/teak_armchair_after_perfect.jpg');
const imgWickerBefore = getBase64Image('public/real_showcase/wicker_arm_before_clean.jpg');
const imgWickerAfter = getBase64Image('public/real_showcase/wicker_arm_after_clean.jpg');
const imgFloorCraftsman = getBase64Image('public/real_showcase/hardwood_floor_sanding_craftsman.jpg');
const imgUpholsterySplit = getBase64Image('public/real_showcase/chesterfield_upholstery_before_after.jpg');
const imgTerraceLuxury = getBase64Image('public/real_showcase/luxury_sunlit_restaurant_terrace.jpg');
const imgArtisans = getBase64Image('public/real_showcase/artisans_handweaving_clean.jpg');
const imgCraftsmanWood = getBase64Image('public/images/furniture_restoration_detail.jpg');
const imgBrassSignage = getBase64Image('public/images/mockup_brass_signage.jpg');
const imgAcousticBooth = getBase64Image('public/images/acoustic_privacy_booth.jpg');
const imgCantileverBeach = getBase64Image('public/real_showcase/cantilever_umbrella_beachside.jpg');

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>AfriSMME Hub — Before & After Hospitality Restoration Brochure</title>
  <style>
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
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      color: #121316;
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
      background: #121316;
      color: #FAF8F5;
    }

    /* Header component */
    .doc-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid rgba(197, 168, 128, 0.4);
      padding-bottom: 10px;
      margin-bottom: 14px;
    }
    .doc-header .logo-wrap {
      display: flex;
      align-items: baseline;
      gap: 10px;
    }
    .brand-name {
      font-weight: 900;
      letter-spacing: 2px;
      font-size: 13pt;
      color: #C5A880;
    }
    .brand-sub {
      font-size: 8pt;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      color: #8E99A8;
      font-weight: 600;
    }
    .doc-header .doc-type {
      font-size: 8pt;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      color: #C5A880;
      font-weight: 700;
      border: 1px solid rgba(197, 168, 128, 0.5);
      padding: 3px 10px;
      border-radius: 12px;
    }

    /* Page Footer */
    .doc-footer {
      border-top: 1px solid rgba(197, 168, 128, 0.3);
      padding-top: 8px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 7.5pt;
      color: #7A828E;
    }
    .page.dark .doc-footer {
      color: #A0AAB8;
      border-color: rgba(197, 168, 128, 0.25);
    }
    .doc-footer .hub-mark {
      font-weight: 700;
      color: #C5A880;
      letter-spacing: 1px;
    }

    /* COVER PAGE */
    .cover-top {
      text-align: center;
      padding: 6px 0 12px;
    }
    .cover-badge {
      display: inline-block;
      background: rgba(197, 168, 128, 0.15);
      border: 1px solid #C5A880;
      color: #C5A880;
      padding: 4px 14px;
      font-size: 8pt;
      font-weight: 700;
      letter-spacing: 2.5px;
      text-transform: uppercase;
      border-radius: 20px;
      margin-bottom: 12px;
    }
    .cover-title {
      font-size: 26pt;
      font-weight: 800;
      line-height: 1.15;
      color: #FAF8F5;
      margin-bottom: 8px;
      letter-spacing: -0.5px;
    }
    .cover-subtitle {
      font-size: 10.5pt;
      color: #D8C2A0;
      font-weight: 400;
      max-width: 88%;
      margin: 0 auto;
      line-height: 1.45;
    }

    .cover-hero-img-wrap {
      width: 100%;
      height: 380px;
      border-radius: 8px;
      overflow: hidden;
      margin: 12px 0 16px;
      position: relative;
      border: 1px solid rgba(197, 168, 128, 0.35);
      box-shadow: 0 12px 30px rgba(0,0,0,0.5);
    }
    .cover-hero-img-wrap img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .cover-hero-overlay {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background: linear-gradient(to top, rgba(18,19,22,0.94) 0%, rgba(18,19,22,0.4) 60%, transparent 100%);
      padding: 24px 20px 16px;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }
    .hero-stat-pill {
      background: rgba(18,19,22,0.85);
      border: 1px solid #C5A880;
      padding: 6px 14px;
      border-radius: 6px;
      font-size: 8.5pt;
      color: #FAF8F5;
      backdrop-filter: blur(4px);
    }
    .hero-stat-pill strong {
      color: #C5A880;
    }

    .cover-pillars-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 12px;
    }
    .cover-pillar-card {
      background: #181B22;
      border: 1px solid #2B3342;
      border-radius: 6px;
      padding: 12px;
      text-align: left;
    }
    .cover-pillar-card .pillar-num {
      font-size: 7.5pt;
      color: #C5A880;
      font-weight: 800;
      letter-spacing: 1.5px;
    }
    .cover-pillar-card h4 {
      font-size: 9.5pt;
      font-weight: 700;
      color: #FAF8F5;
      margin: 2px 0 4px;
    }
    .cover-pillar-card p {
      font-size: 7.6pt;
      color: #8E99A8;
      line-height: 1.35;
    }

    /* SECTION HEADINGS */
    .section-title-wrap {
      margin-bottom: 12px;
    }
    .section-eyebrow {
      font-size: 7.5pt;
      text-transform: uppercase;
      letter-spacing: 2px;
      font-weight: 700;
      color: #C5A880;
    }
    .section-heading {
      font-size: 19pt;
      color: #121316;
      font-weight: 800;
      line-height: 1.2;
    }
    .page.dark .section-heading {
      color: #FAF8F5;
    }
    .section-sub {
      font-size: 8.5pt;
      color: #555E6D;
      margin-top: 3px;
    }
    .page.dark .section-sub {
      color: #A0AAB8;
    }

    /* PAGE 2: BEFORE & AFTER CASE STUDIES */
    .ba-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
      flex: 1;
    }
    .ba-card {
      background: #FFFFFF;
      border: 1px solid #E4DFD5;
      border-radius: 8px;
      padding: 11px;
      display: flex;
      flex-direction: column;
      box-shadow: 0 3px 10px rgba(0,0,0,0.03);
    }
    .ba-card-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      margin-bottom: 8px;
      border-bottom: 1px solid #EFECE6;
      padding-bottom: 5px;
    }
    .ba-card-title {
      font-size: 10pt;
      font-weight: 800;
      color: #121316;
    }
    .ba-card-metric {
      font-size: 7.2pt;
      font-weight: 700;
      color: #1B3B2B;
      background: #E8F0EA;
      padding: 2px 7px;
      border-radius: 4px;
      letter-spacing: 0.5px;
    }

    .ba-photos-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 7px;
      margin-bottom: 7px;
    }
    .ba-photo-box {
      position: relative;
      height: 122px;
      border-radius: 5px;
      overflow: hidden;
      border: 1px solid #DED7CB;
      background: #EFECE6;
    }
    .ba-photo-box.wide {
      grid-column: span 2;
      height: 126px;
    }
    .ba-photo-box img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
    .ba-tag {
      position: absolute;
      top: 5px;
      left: 5px;
      padding: 2px 7px;
      font-size: 6.5pt;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 1px;
      border-radius: 3px;
    }
    .ba-tag.before {
      background: rgba(18, 19, 22, 0.9);
      color: #FFAA8A;
      border: 1px solid rgba(255, 120, 80, 0.5);
    }
    .ba-tag.after {
      background: rgba(27, 59, 43, 0.92);
      color: #92E8B8;
      border: 1px solid rgba(80, 200, 120, 0.5);
    }
    .ba-details {
      font-size: 7.6pt;
      color: #4A5260;
      line-height: 1.35;
    }
    .ba-details p {
      margin-bottom: 3px;
    }
    .ba-details strong {
      color: #121316;
    }

    /* PAGE 3: THE 6 PILLARS & CAPABILITIES */
    .pillars-showcase-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 11px;
      flex: 1;
      margin-top: 6px;
    }
    .pillar-box {
      background: #FFFFFF;
      border: 1px solid #E4DFD5;
      border-radius: 8px;
      padding: 11px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .pillar-box-top {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 7px;
    }
    .pillar-box-icon {
      width: 30px;
      height: 30px;
      background: rgba(197, 168, 128, 0.15);
      border: 1px solid #C5A880;
      color: #A88A62;
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 800;
      font-size: 9.5pt;
    }
    .pillar-box-title {
      font-size: 10pt;
      font-weight: 800;
      color: #121316;
    }
    .pillar-box-tag {
      font-size: 7.2pt;
      color: #7A828E;
      font-weight: 600;
    }
    .pillar-features-list {
      list-style: none;
      font-size: 7.6pt;
      color: #4A5260;
      line-height: 1.38;
      margin-bottom: 7px;
    }
    .pillar-features-list li {
      position: relative;
      padding-left: 11px;
      margin-bottom: 2.5px;
    }
    .pillar-features-list li::before {
      content: "•";
      color: #C5A880;
      position: absolute;
      left: 1px;
      font-weight: bold;
    }
    .pillar-partner-badge {
      font-size: 6.8pt;
      color: #8E99A8;
      background: #F9F8F5;
      border: 1px solid #EFECE6;
      padding: 3px 8px;
      border-radius: 4px;
    }
    .pillar-partner-badge strong {
      color: #121316;
    }

    /* PAGE 4: PROCESS & AUDIT VOUCHER */
    .process-bar {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 10px;
      margin: 10px 0 14px;
    }
    .process-step {
      background: #FFFFFF;
      border: 1px solid #E4DFD5;
      padding: 10px 8px;
      border-radius: 6px;
      text-align: center;
    }
    .process-step .step-no {
      font-size: 11pt;
      font-weight: 800;
      color: #C5A880;
      margin-bottom: 2px;
    }
    .process-step h5 {
      font-size: 8.2pt;
      font-weight: 700;
      color: #121316;
      margin-bottom: 2px;
    }
    .process-step p {
      font-size: 7pt;
      color: #555E6D;
      line-height: 1.25;
    }

    .voucher-box {
      border: 2px dashed #C5A880;
      background: #FFFDF9;
      border-radius: 8px;
      padding: 14px 18px;
      margin-bottom: 12px;
    }
    .voucher-badge {
      display: inline-block;
      background: #1B3B2B;
      color: #FAF8F5;
      font-size: 7.2pt;
      font-weight: 800;
      letter-spacing: 1.5px;
      padding: 2.5px 9px;
      border-radius: 3px;
      text-transform: uppercase;
      margin-bottom: 5px;
    }
    .voucher-title {
      font-size: 14pt;
      font-weight: 800;
      color: #121316;
      margin-bottom: 3px;
    }
    .voucher-desc {
      font-size: 8pt;
      color: #4A5260;
      line-height: 1.4;
      margin-bottom: 10px;
    }
    .voucher-checklist {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 5px 12px;
      font-size: 7.6pt;
      color: #2D3748;
      margin-bottom: 8px;
    }
    .voucher-checklist div {
      display: flex;
      align-items: center;
      gap: 5px;
    }
    .check-bullet {
      color: #1B3B2B;
      font-weight: bold;
    }

    .impact-callout {
      background: #EFECE6;
      border-radius: 6px;
      padding: 10px 14px;
      margin-bottom: 12px;
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .contact-grid {
      background: #121316;
      color: #FAF8F5;
      border-radius: 8px;
      padding: 14px 18px;
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 14px;
      align-items: center;
    }
    .contact-info h4 {
      font-size: 10.5pt;
      font-weight: 800;
      color: #FAF8F5;
      margin-bottom: 3px;
      letter-spacing: 0.5px;
    }
    .contact-info p {
      font-size: 7.8pt;
      color: #D8C2A0;
      margin-bottom: 2px;
    }
    .contact-numbers {
      margin-top: 6px;
      display: flex;
      gap: 14px;
      font-size: 8pt;
    }
    .contact-numbers span {
      color: #FAF8F5;
      font-weight: 600;
    }
    .contact-numbers span strong {
      color: #C5A880;
    }
    .contact-cta-box {
      text-align: right;
      border-left: 1px solid rgba(197, 168, 128, 0.3);
      padding-left: 14px;
    }
    .contact-cta-box .qr-label {
      font-size: 6.8pt;
      color: #8E99A8;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 4px;
    }
    .contact-cta-box .web-badge {
      display: inline-block;
      background: #C5A880;
      color: #121316;
      font-weight: 800;
      font-size: 7.8pt;
      padding: 6px 12px;
      border-radius: 4px;
      text-decoration: none;
      letter-spacing: 0.5px;
    }
  </style>
</head>
<body>

  <!-- ================= PAGE 1: COVER ================= -->
  <div class="page dark">
    <div class="doc-header">
      <div class="logo-wrap">
        <span class="brand-name">AFRISMME HUB</span>
        <span class="brand-sub">HOSPITALITY SUPPORT ECOSYSTEM</span>
      </div>
      <div class="doc-type">Executive Field Brochure</div>
    </div>

    <div class="cover-top">
      <div class="cover-badge">Sales Leave-Behind Collateral</div>
      <h1 class="cover-title">Physical Facility &amp; Furniture Renewal</h1>
      <p class="cover-subtitle">
        Protecting your dining ambiance, terrace capacity, and guest comfort with master craftsmanship, food-safe finishes, and rapid overnight execution.
      </p>
    </div>

    <div class="cover-hero-img-wrap">
      <img src="${imgTerraceLuxury}" alt="Luxury Restaurant Dining Terrace" />
      <div class="cover-hero-overlay">
        <div>
          <div style="font-size: 13pt; font-weight: 700; color: #FAF8F5;">Zero Daytime Trading Interruption</div>
          <div style="font-size: 8.5pt; color: #D8C2A0;">Executed overnight between dinner close and morning breakfast service</div>
        </div>
        <div class="hero-stat-pill">
          <strong>100%</strong> Food-Safe &amp; Zero-VOC
        </div>
      </div>
    </div>

    <div class="cover-pillars-grid">
      <div class="cover-pillar-card">
        <div class="pillar-num">01 / ATTRACT &amp; SHADE</div>
        <h4>Commercial Terrace Care</h4>
        <p>Cantilever umbrellas, all-weather windbreaks, and architectural brass signage that maximize outdoor covers.</p>
      </div>
      <div class="cover-pillar-card">
        <div class="pillar-num">02 / RESTORE &amp; REVIVE</div>
        <h4>Master Timber &amp; Cane</h4>
        <p>Hardwood refinishing, leather nourishment, and artisanal wicker re-weaving executed without daytime closure.</p>
      </div>
      <div class="cover-pillar-card">
        <div class="pillar-num">03 / MAINTAIN &amp; COMPLY</div>
        <h4>Kitchen &amp; OHS Infrastructure</h4>
        <p>Hood degreasing, cold-chain checks, municipal health readiness, and bespoke staff uniform presentation.</p>
      </div>
    </div>

    <div class="doc-footer">
      <div>AFRISMME HUB HOSPITALITY SUPPORT • SANDTON, SOUTH AFRICA</div>
      <div>CONFIDENTIAL &amp; PROPRIETARY • 2026 EDITION</div>
    </div>
  </div>

  <!-- ================= PAGE 2: REAL BEFORE & AFTER TRANSFORMATIONS ================= -->
  <div class="page">
    <div class="doc-header">
      <div class="logo-wrap">
        <span class="brand-name" style="color: #121316;">AFRISMME HUB</span>
        <span class="brand-sub">HOSPITALITY SUPPORT ECOSYSTEM</span>
      </div>
      <div class="doc-type" style="color: #121316; border-color: #C5A880;">Case Studies • Realistic Wear</div>
    </div>

    <div class="section-title-wrap">
      <div class="section-eyebrow">Proven Facility Transformation</div>
      <h2 class="section-heading">Commercial Wear Replaced by Master Craftsmanship</h2>
      <p class="section-sub">
        High-traffic restaurants experience relentless UV bleaching, water rings, and mechanical wear. We restore prime assets to showroom prestige.
      </p>
    </div>

    <div class="ba-grid">
      <!-- Case 1: Hardwood & Teak Dining -->
      <div class="ba-card">
        <div class="ba-card-header">
          <div class="ba-card-title">Commercial Teak &amp; Hardwood Tables</div>
          <span class="ba-card-metric">Overnight Service</span>
        </div>
        <div class="ba-photos-container">
          <div class="ba-photo-box">
            <img src="${imgTeakBefore}" alt="Weathered Gray Outdoor Chair" />
            <span class="ba-tag before">Before • UV Bleached</span>
          </div>
          <div class="ba-photo-box">
            <img src="${imgTeakAfter}" alt="Restored Honey Teak Finish" />
            <span class="ba-tag after">After • Deep Oiled</span>
          </div>
        </div>
        <div class="ba-details">
          <p><strong>The Wear:</strong> Sun exposure and spills cause silver-gray oxidation, wine rings, and micro-cracking in solid timber.</p>
          <p><strong>The Renewal:</strong> Deep artisanal sanding, stain extraction, and food-safe Danish hardwax oil that creates a water-beading satin shield.</p>
        </div>
      </div>

      <!-- Case 2: Wicker & Cane Structural Repair -->
      <div class="ba-card">
        <div class="ba-card-header">
          <div class="ba-card-title">Outdoor Wicker &amp; Cane Re-Weaving</div>
          <span class="ba-card-metric">75% Replacement Savings</span>
        </div>
        <div class="ba-photos-container">
          <div class="ba-photo-box">
            <img src="${imgWickerBefore}" alt="Ripped Wicker Arm" />
            <span class="ba-tag before">Before • Broken Weave</span>
          </div>
          <div class="ba-photo-box">
            <img src="${imgWickerAfter}" alt="Restored Wicker Arm" />
            <span class="ba-tag after">After • Re-Woven</span>
          </div>
        </div>
        <div class="ba-details">
          <p><strong>The Wear:</strong> UV brittleness and heavy guest use snap synthetic and natural cane, exposing sharp metal frames.</p>
          <p><strong>The Renewal:</strong> Skilled female artisans in our Kew workshop hand-cane matching weave, re-tensioning the entire structural frame.</p>
        </div>
      </div>

      <!-- Case 3: Hardwood Dining Floors -->
      <div class="ba-card">
        <div class="ba-card-header">
          <div class="ba-card-title">Dustless Hardwood Floor Revitalisation</div>
          <span class="ba-card-metric">Zero Dust Contamination</span>
        </div>
        <div class="ba-photos-container">
          <div class="ba-photo-box wide">
            <img src="${imgFloorCraftsman}" alt="Craftsman Sanding Hardwood Floor" />
            <span class="ba-tag after" style="top: 8px; left: 8px;">Active Sanding • Half Refinished</span>
          </div>
        </div>
        <div class="ba-details">
          <p><strong>The Wear:</strong> Heel scuffs, chair dragging, and entryway traffic erode floor sealants down to raw discolored grain.</p>
          <p><strong>The Renewal:</strong> Industrial HEPA-vacuum dustless sanding followed by fast-curing commercial polyurethane, ready for morning service.</p>
        </div>
      </div>

      <!-- Case 4: Commercial Banquette & Upholstery Rebuild -->
      <div class="ba-card">
        <div class="ba-card-header">
          <div class="ba-card-title">Banquette Seating &amp; Reupholstery</div>
          <span class="ba-card-metric">High-Density Contract Grade</span>
        </div>
        <div class="ba-photos-container">
          <div class="ba-photo-box wide">
            <img src="${imgUpholsterySplit}" alt="Chesterfield Upholstery Rebuild Split" />
            <span class="ba-tag after" style="top: 8px; left: 8px;">Internal Rebuild • Finished Luxury</span>
          </div>
        </div>
        <div class="ba-details">
          <p><strong>The Wear:</strong> Sagging seat springs, collapsed foam cushions, and creased leather degrade dining posture and satisfaction.</p>
          <p><strong>The Renewal:</strong> Internal timber reinforcement, high-resilience memory foam, and spill-resistant contract leather or performance fabrics.</p>
        </div>
      </div>
    </div>

    <div class="doc-footer">
      <div>AFRISMME HUB • HOSPITALITY FACILITY &amp; FURNITURE RENEWAL</div>
      <div>PAGE 2 OF 4 • RESTORATION EVIDENCE</div>
    </div>
  </div>

  <!-- ================= PAGE 3: 6 STRATEGIC PILLARS ================= -->
  <div class="page">
    <div class="doc-header">
      <div class="logo-wrap">
        <span class="brand-name" style="color: #121316;">AFRISMME HUB</span>
        <span class="brand-sub">HOSPITALITY SUPPORT ECOSYSTEM</span>
      </div>
      <div class="doc-type" style="color: #121316; border-color: #C5A880;">Comprehensive Care</div>
    </div>

    <div class="section-title-wrap">
      <div class="section-eyebrow">Complete Facility Care</div>
      <h2 class="section-heading">Six Pillars of Operational Excellence</h2>
      <p class="section-sub">
        Beyond furniture repair, AfriSMME Hub acts as your single strategic infrastructure partner across exterior, interior, and technical systems.
      </p>
    </div>

    <div class="pillars-showcase-grid">
      <!-- Pillar 1 -->
      <div class="pillar-box">
        <div>
          <div class="pillar-box-top">
            <div class="pillar-box-icon">01</div>
            <div>
              <div class="pillar-box-title">ATTRACT</div>
              <div class="pillar-box-tag">Exterior • Cantilever Shade • Signage</div>
            </div>
          </div>
          <ul class="pillar-features-list">
            <li>Heavy-duty commercial cantilever umbrellas (Sunbrella canvas)</li>
            <li>All-weather glass &amp; fabric windbreaks extending terrace seasons</li>
            <li>Bespoke architectural solid brass &amp; patinated bronze signage</li>
            <li>Warm ambient facade and entrance lighting</li>
          </ul>
        </div>
        <div class="pillar-partner-badge">Partner: <strong>Afrishades &amp; Cane Africa</strong></div>
      </div>

      <!-- Pillar 2 -->
      <div class="pillar-box">
        <div>
          <div class="pillar-box-top">
            <div class="pillar-box-icon">02</div>
            <div>
              <div class="pillar-box-title">ENHANCE</div>
              <div class="pillar-box-tag">Interiors • Acoustics • Booth Seating</div>
            </div>
          </div>
          <ul class="pillar-features-list">
            <li>Acoustic reverberation balancing (turns 80dB echo into conversational warmth)</li>
            <li>Handcrafted banquettes and ergonomic booth seating</li>
            <li>Architectural timber screening and intimate spatial zoning</li>
            <li>Custom table arrangement design to maximize covers</li>
          </ul>
        </div>
        <div class="pillar-partner-badge">Standard: <strong>Balanced Reverberation (&lt;0.8s)</strong></div>
      </div>

      <!-- Pillar 3 -->
      <div class="pillar-box">
        <div>
          <div class="pillar-box-top">
            <div class="pillar-box-icon">03</div>
            <div>
              <div class="pillar-box-title">RESTORE</div>
              <div class="pillar-box-tag">Master Timber • Leather • Overnight</div>
            </div>
          </div>
          <ul class="pillar-features-list">
            <li>Overnight dining table refinishing (zero trading lost)</li>
            <li>Food-safe, zero-VOC natural hardwax oils and Danish finishes</li>
            <li>On-site leather revival, recoloring, and stain protection</li>
            <li>Solid marble, brass foot-rails, and bar top polishing</li>
          </ul>
        </div>
        <div class="pillar-partner-badge">Specialist: <strong>The Wood Doctor</strong></div>
      </div>

      <!-- Pillar 4 -->
      <div class="pillar-box">
        <div>
          <div class="pillar-box-top">
            <div class="pillar-box-icon">04</div>
            <div>
              <div class="pillar-box-title">MAINTAIN</div>
              <div class="pillar-box-tag">Kitchen Hoods • Cold Storage • Repairs</div>
            </div>
          </div>
          <ul class="pillar-features-list">
            <li>Kitchen extraction hood deep degreasing &amp; motor balancing</li>
            <li>Commercial cold-room and refrigeration coil preventative audits</li>
            <li>Gas, electrical, and plumbing rapid technician dispatch</li>
            <li>Scheduled monthly diagnostic logs for municipal certification</li>
          </ul>
        </div>
        <div class="pillar-partner-badge">Coverage: <strong>Emergency &amp; Scheduled Retainers</strong></div>
      </div>

      <!-- Pillar 5 -->
      <div class="pillar-box">
        <div>
          <div class="pillar-box-top">
            <div class="pillar-box-icon">05</div>
            <div>
              <div class="pillar-box-title">PROTECT</div>
              <div class="pillar-box-tag">OHS • Health Inspection • Uniforms</div>
            </div>
          </div>
          <ul class="pillar-features-list">
            <li>Municipal health inspection readiness and sanitation registers</li>
            <li>Fire suppression certification and emergency route verification</li>
            <li>Cross-contamination audits for food prep and prep lines</li>
            <li>Bespoke front-of-house tailored uniforms with embroidered crests</li>
          </ul>
        </div>
        <div class="pillar-partner-badge">Standard: <strong>Full SANS &amp; Municipal Compliance</strong></div>
      </div>

      <!-- Pillar 6 -->
      <div class="pillar-box">
        <div>
          <div class="pillar-box-top">
            <div class="pillar-box-icon">06</div>
            <div>
              <div class="pillar-box-title">GROW</div>
              <div class="pillar-box-tag">Digital • Menus • Technology Yield</div>
            </div>
          </div>
          <ul class="pillar-features-list">
            <li>High-conversion websites and interactive QR digital menus</li>
            <li>Local search dominance, Google Maps optimization &amp; review shields</li>
            <li>Direct commission-free reservation integrations</li>
            <li>Floorplan yield optimization to increase average spend</li>
          </ul>
        </div>
        <div class="pillar-partner-badge">Technology Partner: <strong>Scinovalities</strong></div>
      </div>
    </div>

    <div class="doc-footer">
      <div>AFRISMME HUB • INTEGRATED HOSPITALITY SUPPORT</div>
      <div>PAGE 3 OF 4 • SIX PILLARS OF EXCELLENCE</div>
    </div>
  </div>

  <!-- ================= PAGE 4: HOW WE WORK & COMPLIMENTARY AUDIT LEAVE-BEHIND ================= -->
  <div class="page">
    <div class="doc-header">
      <div class="logo-wrap">
        <span class="brand-name" style="color: #121316;">AFRISMME HUB</span>
        <span class="brand-sub">HOSPITALITY SUPPORT ECOSYSTEM</span>
      </div>
      <div class="doc-type" style="color: #121316; border-color: #C5A880;">Complimentary Voucher</div>
    </div>

    <div class="section-title-wrap">
      <div class="section-eyebrow">Zero Daytime Interruption</div>
      <h2 class="section-heading">How Our Overnight Protocol Works</h2>
      <p class="section-sub">
        We understand that empty tables cost money. Our entire workflow is engineered around your trading hours.
      </p>
    </div>

    <div class="process-bar">
      <div class="process-step">
        <div class="step-no">01</div>
        <h5>On-Site Audit</h5>
        <p>45-min daytime walkthrough. We catalog wear, test acoustics, and inspect extractors.</p>
      </div>
      <div class="process-step">
        <div class="step-no">02</div>
        <h5>Phased Plan</h5>
        <p>Fixed-price itemized proposal. Work scheduled in batches so capacity is never lost.</p>
      </div>
      <div class="process-step">
        <div class="step-no">03</div>
        <h5>Overnight Shift</h5>
        <p>Our team arrives after dinner close (10 PM), restoring surfaces with zero-VOC oils.</p>
      </div>
      <div class="process-step">
        <div class="step-no">04</div>
        <h5>Morning Handover</h5>
        <p>By 7 AM, all surfaces are cured, clean, odorless, and ready for breakfast service.</p>
      </div>
    </div>

    <!-- LEAVE-BEHIND AUDIT VOUCHER -->
    <div class="voucher-box">
      <div class="voucher-badge">Complimentary Hospitality Voucher</div>
      <h3 class="voucher-title">Request Your 360° Physical Facility Audit</h3>
      <p class="voucher-desc">
        A senior AfriSMME facility specialist will conduct a complimentary, no-obligation 45-point inspection of your venue's physical condition and provide an actionable report.
      </p>
      <div class="voucher-checklist">
        <div><span class="check-bullet">✓</span> Dining Timber &amp; Surface Wear Analysis</div>
        <div><span class="check-bullet">✓</span> Acoustic Din &amp; Reverberation Check</div>
        <div><span class="check-bullet">✓</span> Terrace Shade &amp; Umbrella Wind Resilience</div>
        <div><span class="check-bullet">✓</span> Kitchen Extraction &amp; Grease Risk Review</div>
        <div><span class="check-bullet">✓</span> Banquette Spring &amp; Upholstery Health</div>
        <div><span class="check-bullet">✓</span> OHS &amp; Municipal Health Safety Register</div>
      </div>
      <div style="font-size: 7.3pt; color: #7A828E; font-style: italic;">
        * No trading disruption required. Audit takes 45 minutes between lunch and dinner service.
      </div>
    </div>

    <!-- SOCIAL IMPACT STATEMENT -->
    <div class="impact-callout">
      <div style="font-size: 16pt;">🤝</div>
      <div style="font-size: 7.7pt; color: #3A4250; line-height: 1.35;">
        <strong style="color: #121316;">Uplifting Communities Through Training:</strong> AfriSMME Hub directly trains, certifies, and employs local youth and women artisans in our Kew/Sandton workshops. Every table renewed sustains dignified local employment.
      </div>
    </div>

    <!-- EXECUTIVE CONTACT CARD -->
    <div class="contact-grid">
      <div class="contact-info">
        <h4>AFRISMME HUB HOSPITALITY SUPPORT</h4>
        <p>Headquarters &amp; Workshops: 146 10th Road Kew, Sandton, 2090</p>
        <p>Email: <strong>info@afrismmehub.co.za</strong> • Web: <strong>www.afrismmehub.co.za</strong></p>
        <div class="contact-numbers">
          <span>Office: <strong>011 346 5018</strong></span>
          <span>Mobile / WhatsApp: <strong>083 432 8394</strong></span>
        </div>
      </div>
      <div class="contact-cta-box">
        <div class="qr-label">Immediate Booking</div>
        <a href="https://www.afrismmehub.co.za" class="web-badge">BOOK AUDIT ONLINE</a>
      </div>
    </div>

    <div class="doc-footer">
      <div>AFRISMME HUB • HOSPITALITY FACILITY &amp; FURNITURE RENEWAL</div>
      <div>PAGE 4 OF 4 • SALES LEAVE-BEHIND COLLATERAL</div>
    </div>
  </div>

</body>
</html>`;

async function generate() {
  const outPdf = path.join(rootDir, 'public/PDFs/AfriSMME_Hospitality_Before_After_Brochure.pdf');
  console.log('Launching Chrome via Puppeteer-core...');
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  fs.writeFileSync(path.join(rootDir, 'public/PDFs/brochure_print.html'), html);
  console.log('Saved public/PDFs/brochure_print.html!');
  const page = await browser.newPage();
  console.log('Setting HTML content with embedded base64 imagery...');
  await page.setContent(html, { waitUntil: 'domcontentloaded' });
  console.log('Rendering PDF...');
  await page.pdf({
    path: outPdf,
    format: 'A4',
    printBackground: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 }
  });
  await browser.close();
  console.log('Brochure PDF generation complete! File size:', fs.statSync(outPdf).size, 'bytes');
}

generate().catch(console.error);
