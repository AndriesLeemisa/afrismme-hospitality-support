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
const imgTerraceLuxury = getBase64Image('public/real_showcase/luxury_sunlit_restaurant_terrace.jpg');
const imgAcousticDining = getBase64Image('public/real_showcase/intimate_acoustic_dining_interior.jpg');
const imgAcousticBooth = getBase64Image('public/images/acoustic_privacy_booth.jpg');
const imgWoodDetail = getBase64Image('public/images/furniture_restoration_detail.jpg');
const imgKitchenExtraction = getBase64Image('public/real_showcase/commercial_kitchen_stainless_extraction.jpg');
const imgBrassSignage = getBase64Image('public/images/mockup_brass_signage.jpg');
const imgFleetVehicle = getBase64Image('public/images/mockup_fleet_vehicle.jpg');
const imgUniformCrest = getBase64Image('public/images/mockup_uniform_crest.jpg');
const imgHospitalityTech = getBase64Image('public/images/hospitality_tech_ai.jpg');
const imgEveningPatio = getBase64Image('public/real_showcase/outdoor_patio_dining_evening.jpg');

// Real Before & After and Craftsman images
const imgTeakBefore = getBase64Image('public/real_showcase/teak_armchair_before_perfect.jpg');
const imgTeakAfter = getBase64Image('public/real_showcase/teak_armchair_after_perfect.jpg');
const imgWickerBefore = getBase64Image('public/real_showcase/wicker_arm_before_clean.jpg');
const imgWickerAfter = getBase64Image('public/real_showcase/wicker_arm_after_clean.jpg');
const imgFloorCraftsman = getBase64Image('public/real_showcase/hardwood_floor_sanding_craftsman.jpg');
const imgStaircaseCraftsman = getBase64Image('public/real_showcase/staircase_restoration_craftsman.jpg');
const imgArtisansWeaving = getBase64Image('public/real_showcase/artisans_handweaving_clean.jpg');
const imgUpholsterySplit = getBase64Image('public/real_showcase/chesterfield_upholstery_before_after.jpg');

// Real Products from Catalog (clean crops without banners)
const imgZimTeak8 = getBase64Image('public/real_showcase/zim_teak_8_clean.jpg');
const imgZimTeak4 = getBase64Image('public/real_showcase/zim_teak_4_seater_dining.jpg');
const imgAluWoodMorris = getBase64Image('public/real_showcase/alu_wood_morris_clean.jpg');
const imgZimbaliLounge = getBase64Image('public/real_showcase/zimbali_lounge_clean.jpg');
const imgGabriella10 = getBase64Image('public/real_showcase/gabriella_10_clean.jpg');
const imgLiveEdgeBoard = getBase64Image('public/real_showcase/live_edge_boardroom_slab.jpg');
const imgLiveEdgeCoffee = getBase64Image('public/real_showcase/live_edge_coffee_suite.jpg');
const imgCantileverBeach = getBase64Image('public/real_showcase/cantilever_umbrella_beachside.jpg');
const imgTransparentDomes = getBase64Image('public/real_showcase/transparent_geodesic_domes.jpg');
const imgWoodenPoolLounger = getBase64Image('public/real_showcase/wooden_pool_lounger_clean.jpg');
const imgAdirondack = getBase64Image('public/real_showcase/adirondack_deck_chairs.jpg');
const imgCustomCushions = getBase64Image('public/real_showcase/custom_outdoor_cushions.jpg');
const imgDecking = getBase64Image('public/real_showcase/composite_decking_clean.jpg');

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>AfriSMME Hub — Hospitality Infrastructure &amp; Facility Ecosystem Presentation Booklet</title>
  <style>
    @page {
      size: A4 landscape;
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
      line-height: 1.45;
    }

    .slide {
      width: 297mm;
      height: 210mm;
      padding: 14mm 18mm;
      position: relative;
      page-break-after: always;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      background: #FAF8F5;
      overflow: hidden;
    }

    .slide.dark {
      background: #121316;
      color: #FAF8F5;
    }

    /* Top Navigation bar */
    .slide-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid rgba(197, 168, 128, 0.4);
      padding-bottom: 8px;
      margin-bottom: 12px;
    }
    .slide-header .brand {
      display: flex;
      align-items: baseline;
      gap: 12px;
    }
    .slide-header .brand-title {
      font-size: 13pt;
      font-weight: 900;
      color: #C5A880;
      letter-spacing: 2px;
    }
    .slide-header .brand-sub {
      font-size: 7.8pt;
      color: #8E99A8;
      font-weight: 600;
      letter-spacing: 1.5px;
      text-transform: uppercase;
    }
    .slide-header .slide-cat {
      font-size: 7.5pt;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1.5px;
      color: #C5A880;
      border: 1px solid rgba(197, 168, 128, 0.5);
      padding: 2.5px 10px;
      border-radius: 12px;
    }

    /* Bottom footer bar */
    .slide-footer {
      border-top: 1px solid rgba(197, 168, 128, 0.3);
      padding-top: 7px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 7.5pt;
      color: #7A828E;
    }
    .slide.dark .slide-footer {
      color: #A0AAB8;
      border-color: rgba(197, 168, 128, 0.25);
    }
    .slide-footer .foot-brand {
      color: #C5A880;
      font-weight: 700;
      letter-spacing: 1px;
    }

    /* TYPOGRAPHY */
    .eyebrow {
      font-size: 8pt;
      font-weight: 800;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: #C5A880;
      margin-bottom: 3px;
    }
    .heading-lg {
      font-size: 22pt;
      font-weight: 800;
      line-height: 1.18;
      color: #121316;
      margin-bottom: 6px;
    }
    .slide.dark .heading-lg {
      color: #FAF8F5;
    }
    .subtext {
      font-size: 9.5pt;
      color: #555E6D;
      line-height: 1.45;
      max-width: 90%;
    }
    .slide.dark .subtext {
      color: #D8C2A0;
    }

    /* SLIDE 1: COVER */
    .cover-body {
      display: grid;
      grid-template-columns: 1.15fr 0.85fr;
      gap: 24px;
      align-items: center;
      flex: 1;
    }
    .cover-badge {
      display: inline-block;
      background: rgba(197, 168, 128, 0.15);
      border: 1px solid #C5A880;
      color: #C5A880;
      padding: 4px 12px;
      font-size: 7.8pt;
      font-weight: 800;
      letter-spacing: 2px;
      text-transform: uppercase;
      border-radius: 14px;
      margin-bottom: 12px;
    }
    .cover-title {
      font-size: 27pt;
      font-weight: 800;
      line-height: 1.15;
      color: #FAF8F5;
      margin-bottom: 12px;
    }
    .cover-desc {
      font-size: 10pt;
      color: #D8C2A0;
      line-height: 1.5;
      margin-bottom: 18px;
    }
    .cover-stats-row {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
    }
    .cover-stat-box {
      background: #181B22;
      border: 1px solid #2B3342;
      padding: 10px;
      border-radius: 6px;
    }
    .cover-stat-box .num {
      font-size: 14pt;
      font-weight: 800;
      color: #C5A880;
    }
    .cover-stat-box .lbl {
      font-size: 7.2pt;
      color: #8E99A8;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    .cover-hero-visual {
      position: relative;
      height: 380px;
      border-radius: 10px;
      overflow: hidden;
      border: 1px solid rgba(197, 168, 128, 0.35);
      box-shadow: 0 16px 36px rgba(0,0,0,0.6);
    }
    .cover-hero-visual img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .cover-hero-badge {
      position: absolute;
      bottom: 14px;
      left: 14px;
      right: 14px;
      background: rgba(18,19,22,0.88);
      border: 1px solid #C5A880;
      padding: 10px 14px;
      border-radius: 6px;
      backdrop-filter: blur(6px);
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    /* 2-COLUMN SPLIT LAYOUT */
    .split-layout {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      flex: 1;
      align-items: stretch;
      margin-top: 4px;
    }
    .split-card {
      background: #FFFFFF;
      border: 1px solid #E4DFD5;
      border-radius: 8px;
      padding: 14px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .slide.dark .split-card {
      background: #181B22;
      border-color: #2B3342;
    }

    /* 3-COLUMN CARDS */
    .tri-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 14px;
      flex: 1;
      margin-top: 8px;
    }
    .tri-card {
      background: #FFFFFF;
      border: 1px solid #E4DFD5;
      border-radius: 8px;
      padding: 14px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .slide.dark .tri-card {
      background: #181B22;
      border-color: #2B3342;
    }

    /* 4-COLUMN CARDS */
    .quad-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 12px;
      flex: 1;
      margin-top: 8px;
    }
    .quad-card {
      background: #FFFFFF;
      border: 1px solid #E4DFD5;
      border-radius: 7px;
      padding: 10px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    /* IMAGE CONTAINERS */
    .img-box {
      width: 100%;
      border-radius: 6px;
      overflow: hidden;
      border: 1px solid #E4DFD5;
      background: #EFECE6;
      margin-bottom: 10px;
      position: relative;
    }
    .slide.dark .img-box {
      border-color: #2B3342;
    }
    .img-box img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    .feature-list {
      list-style: none;
      font-size: 8.2pt;
      line-height: 1.45;
      color: #4A5260;
    }
    .slide.dark .feature-list {
      color: #A0AAB8;
    }
    .feature-list li {
      position: relative;
      padding-left: 14px;
      margin-bottom: 5px;
    }
    .feature-list li::before {
      content: "✓";
      color: #C5A880;
      position: absolute;
      left: 0;
      font-weight: 800;
    }

    .partner-pill {
      display: inline-block;
      font-size: 7.2pt;
      font-weight: 700;
      color: #8E99A8;
      background: #F9F8F5;
      border: 1px solid #EFECE6;
      padding: 3px 8px;
      border-radius: 4px;
      margin-top: 8px;
    }
    .slide.dark .partner-pill {
      background: #121316;
      border-color: #2B3342;
      color: #D8C2A0;
    }

    /* BEFORE AFTER PAIR IN SLIDE */
    .ba-duo {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
      margin: 8px 0;
    }
    .ba-duo-item {
      position: relative;
      height: 135px;
      border-radius: 6px;
      overflow: hidden;
      border: 1px solid #DED7CB;
    }
    .ba-duo-item img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .ba-duo-tag {
      position: absolute;
      top: 6px;
      left: 6px;
      padding: 2.5px 8px;
      font-size: 6.8pt;
      font-weight: 800;
      border-radius: 3px;
      text-transform: uppercase;
      letter-spacing: 0.8px;
    }
    .ba-duo-tag.before {
      background: rgba(18, 19, 22, 0.9);
      color: #FFAA8A;
      border: 1px solid rgba(255, 120, 80, 0.5);
    }
    .ba-duo-tag.after {
      background: rgba(27, 59, 43, 0.92);
      color: #92E8B8;
      border: 1px solid rgba(80, 200, 120, 0.5);
    }
  </style>
</head>
<body>

  <!-- ================= SLIDE 1: COVER ================= -->
  <div class="slide dark">
    <div class="slide-header">
      <div class="brand">
        <span class="brand-title">AFRISMME HUB</span>
        <span class="brand-sub">HOSPITALITY SUPPORT ECOSYSTEM</span>
      </div>
      <div class="slide-cat">Executive Profile &amp; Pitch Presentation</div>
    </div>

    <div class="cover-body">
      <div>
        <div class="cover-badge">Hospitality Field Presentation Booklet</div>
        <h1 class="cover-title">Infrastructure, Craftsmanship &amp; Operational Resilience</h1>
        <p class="cover-desc">
          An integrated corporate ecosystem delivering physical facility restoration, commercial terrace architecture, acoustic dining comfort, and preventative maintenance for South Africa's leading hospitality destinations.
        </p>
        <div class="cover-stats-row">
          <div class="cover-stat-box">
            <div class="num">0 hrs</div>
            <div class="lbl">Daytime Lost (Overnight)</div>
          </div>
          <div class="cover-stat-box">
            <div class="num">6 Pillars</div>
            <div class="lbl">Turnkey Facility Care</div>
          </div>
          <div class="cover-stat-box">
            <div class="num">100%</div>
            <div class="lbl">Food-Safe &amp; Zero-VOC</div>
          </div>
        </div>
      </div>

      <div class="cover-hero-visual">
        <img src="${imgTerraceLuxury}" alt="Premier Dining Terrace" />
        <div class="cover-hero-badge">
          <div>
            <div style="font-size: 10pt; font-weight: 800; color: #FAF8F5;">Sandton Headquarters &amp; Artisanal Workshops</div>
            <div style="font-size: 7.5pt; color: #D8C2A0;">146 10th Road Kew, Sandton • Servicing Premier Venues Nationwide</div>
          </div>
          <div style="font-size: 8.5pt; font-weight: 800; color: #C5A880; border: 1px solid #C5A880; padding: 4px 10px; border-radius: 4px;">
            2026 EDITION
          </div>
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <div>AFRISMME HUB HOSPITALITY SUPPORT • COMMERCIAL PITCH DECK</div>
      <div>SLIDE 01 / 12 • EXECUTIVE OVERVIEW</div>
    </div>
  </div>

  <!-- ================= SLIDE 2: THE HOSPITALITY CHALLENGE ================= -->
  <div class="slide">
    <div class="slide-header">
      <div class="brand">
        <span class="brand-title" style="color: #121316;">AFRISMME HUB</span>
        <span class="brand-sub">HOSPITALITY SUPPORT ECOSYSTEM</span>
      </div>
      <div class="slide-cat" style="color: #121316; border-color: #C5A880;">Strategic Context</div>
    </div>

    <div>
      <div class="eyebrow">The Real Dilemma</div>
      <h2 class="heading-lg">The Hidden Revenue Toll of Facility Wear</h2>
      <p class="subtext">
        High-traffic restaurants, hotels, and wine estates face intense physical pressure. High patron footfall, sun exposure, and daily service degrade venue assets faster than standard suppliers can respond.
      </p>
    </div>

    <div class="tri-grid">
      <div class="tri-card">
        <div>
          <div style="font-size: 16pt; margin-bottom: 6px;">☀️</div>
          <h4 style="font-size: 11pt; font-weight: 800; color: #121316; margin-bottom: 6px;">Empty Terrace Capacity</h4>
          <p style="font-size: 8pt; color: #555E6D; line-height: 1.45; margin-bottom: 10px;">
            Unpredictable coastal wind, scorching afternoon sun, and light rain force diners indoors, sacrificing 35% to 50% of prime al fresco seating capacity during peak trading seasons.
          </p>
        </div>
        <div style="background: #F5EFEB; border-left: 3px solid #C5A880; padding: 6px 10px; border-radius: 0 4px 4px 0; font-size: 7.5pt; color: #734F25;">
          <strong>Lost Yield:</strong> R25,000+ per weekend in forfeited patio covers.
        </div>
      </div>

      <div class="tri-card">
        <div>
          <div style="font-size: 16pt; margin-bottom: 6px;">🔊</div>
          <h4 style="font-size: 11pt; font-weight: 800; color: #121316; margin-bottom: 6px;">80dB+ Dining Room Din</h4>
          <p style="font-size: 8pt; color: #555E6D; line-height: 1.45; margin-bottom: 10px;">
            Hard concrete floors, glass, and bare brick create harsh sound reflections. Guests strain to converse across tables, resulting in customer fatigue, shorter dwell times, and lower wine spend.
          </p>
        </div>
        <div style="background: #F5EFEB; border-left: 3px solid #C5A880; padding: 6px 10px; border-radius: 0 4px 4px 0; font-size: 7.5pt; color: #734F25;">
          <strong>Acoustic Impact:</strong> 22% drop in dessert, coffee &amp; post-dinner wine orders.
        </div>
      </div>

      <div class="tri-card">
        <div>
          <div style="font-size: 16pt; margin-bottom: 6px;">⚠️</div>
          <h4 style="font-size: 11pt; font-weight: 800; color: #121316; margin-bottom: 6px;">Downtime Friction &amp; Risk</h4>
          <p style="font-size: 8pt; color: #555E6D; line-height: 1.45; margin-bottom: 10px;">
            Standard contractors require daytime venue closures for sanding, leaving pungent toxic lacquer odors. Meanwhile, grease buildup in unmaintained kitchen hoods threatens fire safety and health permits.
          </p>
        </div>
        <div style="background: #F5EFEB; border-left: 3px solid #C5A880; padding: 6px 10px; border-radius: 0 4px 4px 0; font-size: 7.5pt; color: #734F25;">
          <strong>Operating Danger:</strong> Municipal fines, insurance invalidation &amp; lost trading days.
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <div>AFRISMME HUB HOSPITALITY SUPPORT • COMMERCIAL PITCH DECK</div>
      <div>SLIDE 02 / 12 • OPERATIONAL CHALLENGE</div>
    </div>
  </div>

  <!-- ================= SLIDE 3: THE 6 PILLAR ECOSYSTEM ================= -->
  <div class="slide dark">
    <div class="slide-header">
      <div class="brand">
        <span class="brand-title">AFRISMME HUB</span>
        <span class="brand-sub">HOSPITALITY SUPPORT ECOSYSTEM</span>
      </div>
      <div class="slide-cat">Full Infrastructure Scope</div>
    </div>

    <div>
      <div class="eyebrow">Unified Management</div>
      <h2 class="heading-lg">The Integrated Six-Pillar Solution</h2>
      <p class="subtext">
        Instead of coordinating a dozen fragmented contractors, AfriSMME Hub provides a single strategic ecosystem covering every touchpoint of your physical venue and guest experience.
      </p>
    </div>

    <div class="tri-grid" style="grid-template-columns: repeat(3, 1fr); gap: 10px; margin-top: 6px;">
      <div class="tri-card" style="padding: 10px;">
        <div style="color: #C5A880; font-size: 7.8pt; font-weight: 800;">01 / ATTRACT</div>
        <h5 style="color: #FAF8F5; font-size: 10pt; font-weight: 700; margin: 2px 0 4px;">Exterior &amp; Shading</h5>
        <p style="font-size: 7.5pt; color: #8E99A8; line-height: 1.35;">Cantilever umbrellas, all-weather windbreaks, solid brass signage, and welcoming terrace lighting.</p>
        <span class="partner-pill">Partner: <strong>Afrishades</strong></span>
      </div>

      <div class="tri-card" style="padding: 10px;">
        <div style="color: #C5A880; font-size: 7.8pt; font-weight: 800;">02 / ENHANCE</div>
        <h5 style="color: #FAF8F5; font-size: 10pt; font-weight: 700; margin: 2px 0 4px;">Acoustics &amp; Comfort</h5>
        <p style="font-size: 7.5pt; color: #8E99A8; line-height: 1.35;">Balanced sound absorption, bespoke banquette booths, intimate spatial screening, and lighting schemes.</p>
        <span class="partner-pill">Standard: <strong>&lt;0.8s Reverberation</strong></span>
      </div>

      <div class="tri-card" style="padding: 10px;">
        <div style="color: #C5A880; font-size: 7.8pt; font-weight: 800;">03 / RESTORE</div>
        <h5 style="color: #FAF8F5; font-size: 10pt; font-weight: 700; margin: 2px 0 4px;">Master Timber &amp; Cane</h5>
        <p style="font-size: 7.5pt; color: #8E99A8; line-height: 1.35;">Overnight table refinishing, food-safe oils, leather revival, marble polishing, and structural wicker re-weaving.</p>
        <span class="partner-pill">Specialist: <strong>The Wood Doctor</strong></span>
      </div>

      <div class="tri-card" style="padding: 10px;">
        <div style="color: #C5A880; font-size: 7.8pt; font-weight: 800;">04 / MAINTAIN</div>
        <h5 style="color: #FAF8F5; font-size: 10pt; font-weight: 700; margin: 2px 0 4px;">Kitchen &amp; Refrigeration</h5>
        <p style="font-size: 7.5pt; color: #8E99A8; line-height: 1.35;">Extraction hood degreasing, airflow balancing, cold-chain checks, and emergency technician dispatch.</p>
        <span class="partner-pill">Model: <strong>Scheduled Care &amp; Rapid Callout</strong></span>
      </div>

      <div class="tri-card" style="padding: 10px;">
        <div style="color: #C5A880; font-size: 7.8pt; font-weight: 800;">05 / PROTECT</div>
        <h5 style="color: #FAF8F5; font-size: 10pt; font-weight: 700; margin: 2px 0 4px;">OHS &amp; Staff Apparel</h5>
        <p style="font-size: 7.5pt; color: #8E99A8; line-height: 1.35;">Municipal health audit readiness, fire suppression checks, and bespoke front-of-house tailored uniforms.</p>
        <span class="partner-pill">Compliance: <strong>SANS &amp; Municipal Standards</strong></span>
      </div>

      <div class="tri-card" style="padding: 10px;">
        <div style="color: #C5A880; font-size: 7.8pt; font-weight: 800;">06 / GROW</div>
        <h5 style="color: #FAF8F5; font-size: 10pt; font-weight: 700; margin: 2px 0 4px;">Digital Intelligence</h5>
        <p style="font-size: 7.5pt; color: #8E99A8; line-height: 1.35;">High-converting digital menus, local search dominance, Google review engines, and capacity layout yield.</p>
        <span class="partner-pill">Partner: <strong>Scinovalities</strong></span>
      </div>
    </div>

    <div class="slide-footer">
      <div>AFRISMME HUB HOSPITALITY SUPPORT • COMMERCIAL PITCH DECK</div>
      <div>SLIDE 03 / 12 • ECOSYSTEM ARCHITECTURE</div>
    </div>
  </div>

  <!-- ================= SLIDE 4: PILLAR 01 - ATTRACT ================= -->
  <div class="slide">
    <div class="slide-header">
      <div class="brand">
        <span class="brand-title" style="color: #121316;">AFRISMME HUB</span>
        <span class="brand-sub">HOSPITALITY SUPPORT ECOSYSTEM</span>
      </div>
      <div class="slide-cat" style="color: #121316; border-color: #C5A880;">Pillar 01 • Exterior Architecture</div>
    </div>

    <div class="split-layout">
      <div>
        <div class="eyebrow">Curbside Presence &amp; Terrace Yield</div>
        <h2 class="heading-lg">ATTRACT: Exterior Shading &amp; Architectural Presence</h2>
        <p style="font-size: 8.5pt; color: #555E6D; line-height: 1.45; margin-bottom: 12px;">
          Your outdoor terrace is often your highest-margin square footage. In partnership with <strong>Afrishades</strong>, we deploy commercial-grade cantilever canopies, architectural windbreaks, and milled brass signage that protect guests from elements while elevating curbside prestige.
        </p>

        <ul class="feature-list" style="margin-bottom: 14px;">
          <li><strong>Commercial Cantilever Umbrellas:</strong> Heavy-duty marine-grade aluminum and hardwood masts with UV50+ Sunbrella canvas built for South African winds.</li>
          <li><strong>Integrated Terrace Windbreaks:</strong> Motorized and structural glass/canvas barriers extending outdoor service into evening chills and coastal breezes.</li>
          <li><strong>Solid Milled Brass Signage:</strong> Architectural facade lettering, bronze entry plaques, and subtle halo LED illumination reflecting Michelin-grade standards.</li>
          <li><strong>Atmospheric Exterior Lighting:</strong> Glare-free warm amber lighting schemes transforming night-time street visibility.</li>
        </ul>

        <div style="background: #F9F8F5; border: 1px solid #E4DFD5; border-radius: 6px; padding: 10px; display: flex; align-items: center; justify-content: space-between;">
          <div>
            <div style="font-size: 8pt; font-weight: 800; color: #121316;">Terrace Cover Yield Potential</div>
            <div style="font-size: 7.2pt; color: #7A828E;">All-weather protection adds up to 45 trading days per year</div>
          </div>
          <span style="font-size: 9pt; font-weight: 800; color: #1B3B2B; background: #E8F0EA; padding: 3px 10px; border-radius: 4px;">+35% Patio Covers</span>
        </div>
      </div>

      <div style="display: flex; flex-direction: column; gap: 10px;">
        <div class="img-box" style="height: 190px; margin-bottom: 0;">
          <img src="${imgCantileverBeach}" alt="Commercial Cantilever Umbrella" />
          <div style="position: absolute; bottom: 8px; left: 8px; background: rgba(18,19,22,0.85); color: #FAF8F5; font-size: 7pt; font-weight: 700; padding: 3px 8px; border-radius: 3px;">
            Commercial Cantilever Canopy (Afrishades)
          </div>
        </div>
        <div class="img-box" style="height: 140px; margin-bottom: 0;">
          <img src="${imgBrassSignage}" alt="Milled Brass Signage" />
          <div style="position: absolute; bottom: 8px; left: 8px; background: rgba(18,19,22,0.85); color: #FAF8F5; font-size: 7pt; font-weight: 700; padding: 3px 8px; border-radius: 3px;">
            Milled Brass Facade Signage &amp; Crest
          </div>
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <div>AFRISMME HUB HOSPITALITY SUPPORT • COMMERCIAL PITCH DECK</div>
      <div>SLIDE 04 / 12 • ATTRACT &amp; SHADE SOLUTIONS</div>
    </div>
  </div>

  <!-- ================= SLIDE 5: PILLAR 02 - ENHANCE ================= -->
  <div class="slide">
    <div class="slide-header">
      <div class="brand">
        <span class="brand-title" style="color: #121316;">AFRISMME HUB</span>
        <span class="brand-sub">HOSPITALITY SUPPORT ECOSYSTEM</span>
      </div>
      <div class="slide-cat" style="color: #121316; border-color: #C5A880;">Pillar 02 • Interior Comfort</div>
    </div>

    <div class="split-layout">
      <div style="display: flex; flex-direction: column; gap: 10px;">
        <div class="img-box" style="height: 190px; margin-bottom: 0;">
          <img src="${imgAcousticBooth}" alt="Custom Acoustic Dining Privacy Booth" />
          <div style="position: absolute; bottom: 8px; left: 8px; background: rgba(18,19,22,0.85); color: #FAF8F5; font-size: 7pt; font-weight: 700; padding: 3px 8px; border-radius: 3px;">
            Acoustic Dining Booth &amp; Timber Joinery
          </div>
        </div>
        <div class="img-box" style="height: 140px; margin-bottom: 0;">
          <img src="${imgAcousticDining}" alt="Balanced Dining Room Acoustics" />
          <div style="position: absolute; bottom: 8px; left: 8px; background: rgba(18,19,22,0.85); color: #FAF8F5; font-size: 7pt; font-weight: 700; padding: 3px 8px; border-radius: 3px;">
            Warm Ambient Dining Sound Balance
          </div>
        </div>
      </div>

      <div>
        <div class="eyebrow">Acoustics &amp; Spatial Flow</div>
        <h2 class="heading-lg">ENHANCE: Acoustic Balancing &amp; Bespoke Banquettes</h2>
        <p style="font-size: 8.5pt; color: #555E6D; line-height: 1.45; margin-bottom: 12px;">
          The difference between a loud, echoing dining room and an intimate, covetable restaurant comes down to sound physics and ergonomic seating. We balance room resonance and craft tailored banquettes that keep guests lingering longer.
        </p>

        <ul class="feature-list" style="margin-bottom: 14px;">
          <li><strong>Acoustic Reverberation Balancing:</strong> Discrete sound absorption concealed behind architectural timber battens, textile art, and ceiling baffles, reducing harsh din without killing dining energy.</li>
          <li><strong>Custom Banquette &amp; Booth Fabrication:</strong> Handcrafted commercial frames built with contract-grade high-density foam and stain-resistant leather or performance velvet.</li>
          <li><strong>Spatial Zoning &amp; Partitioning:</strong> Strategic open-floor structuring creating coveted intimate enclaves that improve reservation table satisfaction.</li>
          <li><strong>Ergonomic Table Arrangement:</strong> Re-engineered seat-to-table pitch and walkway clearances optimizing server efficiency and table turnover.</li>
        </ul>

        <div style="background: #F9F8F5; border: 1px solid #E4DFD5; border-radius: 6px; padding: 10px; display: flex; align-items: center; justify-content: space-between;">
          <div>
            <div style="font-size: 8pt; font-weight: 800; color: #121316;">Measured Acoustic Comfort Target</div>
            <div style="font-size: 7.2pt; color: #7A828E;">Reverberation reduced from 1.8s down to conversational 0.75s</div>
          </div>
          <span style="font-size: 9pt; font-weight: 800; color: #1B3B2B; background: #E8F0EA; padding: 3px 10px; border-radius: 4px;">62dB Intimate Dwell</span>
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <div>AFRISMME HUB HOSPITALITY SUPPORT • COMMERCIAL PITCH DECK</div>
      <div>SLIDE 05 / 12 • ENHANCE &amp; ACOUSTIC ARCHITECTURE</div>
    </div>
  </div>

  <!-- ================= SLIDE 6: PILLAR 03 - RESTORE ================= -->
  <div class="slide">
    <div class="slide-header">
      <div class="brand">
        <span class="brand-title" style="color: #121316;">AFRISMME HUB</span>
        <span class="brand-sub">HOSPITALITY SUPPORT ECOSYSTEM</span>
      </div>
      <div class="slide-cat" style="color: #121316; border-color: #C5A880;">Pillar 03 • Master Restoration</div>
    </div>

    <div class="split-layout">
      <div>
        <div class="eyebrow">Overnight Artisanal Revival</div>
        <h2 class="heading-lg">RESTORE: Zero-Downtime Timber, Leather &amp; Cane</h2>
        <p style="font-size: 8.5pt; color: #555E6D; line-height: 1.45; margin-bottom: 10px;">
          In partnership with <strong>The Wood Doctor</strong> and <strong>Cane Africa</strong>, our master restorers renew solid timber tables, commercial upholstery, and wicker furniture overnight. You lose zero daytime trading hours.
        </p>

        <!-- Real Before/After Side-by-Side in Slide -->
        <div class="ba-duo">
          <div class="ba-duo-item">
            <img src="${imgTeakBefore}" alt="Teak Chair Before" />
            <span class="ba-duo-tag before">Before • UV Bleached</span>
          </div>
          <div class="ba-duo-item">
            <img src="${imgTeakAfter}" alt="Teak Chair After" />
            <span class="ba-duo-tag after">After • Deep Oiled</span>
          </div>
        </div>

        <ul class="feature-list" style="margin-top: 8px;">
          <li><strong>Overnight Table Refinishing:</strong> We arrive at 10 PM after dinner close, sand out rings, and apply rapid-curing, food-safe zero-VOC Danish hardwax oils by 7 AM.</li>
          <li><strong>Wicker &amp; Cane Re-Weaving:</strong> Skilled female artisans in our Kew workshops re-cane damaged chairs, saving 75% compared to purchasing new.</li>
          <li><strong>Leather Rejuvenation:</strong> On-site deep cleaning, stain barrier conditioning, and bespoke pigment color matching.</li>
        </ul>
      </div>

      <div style="display: flex; flex-direction: column; justify-content: space-between;">
        <div class="ba-duo" style="margin-top: 0;">
          <div class="ba-duo-item">
            <img src="${imgWickerBefore}" alt="Wicker Arm Before" />
            <span class="ba-duo-tag before">Before • Broken Cane</span>
          </div>
          <div class="ba-duo-item">
            <img src="${imgWickerAfter}" alt="Wicker Arm After" />
            <span class="ba-duo-tag after">After • Hand Re-Woven</span>
          </div>
        </div>

        <div class="img-box" style="height: 140px; margin-bottom: 0;">
          <img src="${imgWoodDetail}" alt="Artisan Hand Applying Natural Oil" />
          <div style="position: absolute; bottom: 8px; left: 8px; background: rgba(18,19,22,0.85); color: #FAF8F5; font-size: 7pt; font-weight: 700; padding: 3px 8px; border-radius: 3px;">
            Food-Safe Natural Oil Application (The Wood Doctor)
          </div>
        </div>

        <div style="background: #181B22; border: 1px solid #C5A880; border-radius: 6px; padding: 10px; color: #FAF8F5; display: flex; justify-content: space-between; align-items: center; margin-top: 8px;">
          <div>
            <div style="font-size: 8.5pt; font-weight: 800; color: #C5A880;">The Zero-Disruption Guarantee</div>
            <div style="font-size: 7.2pt; color: #A0AAB8;">Zero daytime closures • Food-safe certified • Ready for breakfast</div>
          </div>
          <div style="font-size: 11pt; font-weight: 900; color: #FAF8F5;">10 PM – 7 AM</div>
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <div>AFRISMME HUB HOSPITALITY SUPPORT • COMMERCIAL PITCH DECK</div>
      <div>SLIDE 06 / 12 • RESTORE &amp; TIMBER REVIVAL</div>
    </div>
  </div>

  <!-- ================= SLIDE 7: PILLAR 04 - MAINTAIN ================= -->
  <div class="slide">
    <div class="slide-header">
      <div class="brand">
        <span class="brand-title" style="color: #121316;">AFRISMME HUB</span>
        <span class="brand-sub">HOSPITALITY SUPPORT ECOSYSTEM</span>
      </div>
      <div class="slide-cat" style="color: #121316; border-color: #C5A880;">Pillar 04 • Preventative Infrastructure</div>
    </div>

    <div class="split-layout">
      <div>
        <div class="eyebrow">Critical Kitchen &amp; Plant Systems</div>
        <h2 class="heading-lg">MAINTAIN: Kitchen Extraction &amp; Cold-Chain Care</h2>
        <p style="font-size: 8.5pt; color: #555E6D; line-height: 1.45; margin-bottom: 12px;">
          An unexpected extraction fan breakdown or cold-room trip during Saturday dinner service causes immediate chaos and immense financial loss. Our scheduled preventative servicing keeps back-of-house infrastructure fully compliant and operational.
        </p>

        <ul class="feature-list" style="margin-bottom: 14px;">
          <li><strong>Kitchen Extraction &amp; Hood Servicing:</strong> High-temperature chemical degreasing, motor impeller balancing, belt replacement, and fire-code airflow verification (SANS 1850).</li>
          <li><strong>Refrigeration &amp; Cold-Room Care:</strong> Routine condenser coil cleaning, digital thermostat calibration, and airtight magnetic door gasket renewal protecting food freshness.</li>
          <li><strong>Rapid Maintenance Fleet:</strong> Fully equipped support vans with certified commercial gas, plumbing, and electrical technicians dispatched on-call.</li>
          <li><strong>Compliance Maintenance Certification:</strong> Detailed monthly service logs required by commercial insurance underwriters and municipal fire inspectors.</li>
        </ul>

        <div style="background: #F9F8F5; border: 1px solid #E4DFD5; border-radius: 6px; padding: 10px; display: flex; align-items: center; justify-content: space-between;">
          <div>
            <div style="font-size: 8pt; font-weight: 800; color: #121316;">Fire &amp; Insurance Protection</div>
            <div style="font-size: 7.2pt; color: #7A828E;">Complete extraction degreasing prevents 90% of commercial kitchen fires</div>
          </div>
          <span style="font-size: 9pt; font-weight: 800; color: #1B3B2B; background: #E8F0EA; padding: 3px 10px; border-radius: 4px;">100% Certified</span>
        </div>
      </div>

      <div style="display: flex; flex-direction: column; gap: 10px;">
        <div class="img-box" style="height: 190px; margin-bottom: 0;">
          <img src="${imgKitchenExtraction}" alt="Commercial Kitchen Extraction Hood" />
          <div style="position: absolute; bottom: 8px; left: 8px; background: rgba(18,19,22,0.85); color: #FAF8F5; font-size: 7pt; font-weight: 700; padding: 3px 8px; border-radius: 3px;">
            Pristine Stainless Extraction Hood Maintenance
          </div>
        </div>
        <div class="img-box" style="height: 140px; margin-bottom: 0;">
          <img src="${imgFleetVehicle}" alt="Rapid Maintenance Support Vehicle" />
          <div style="position: absolute; bottom: 8px; left: 8px; background: rgba(18,19,22,0.85); color: #FAF8F5; font-size: 7pt; font-weight: 700; padding: 3px 8px; border-radius: 3px;">
            AfriSMME Rapid Dispatch Fleet (Sandton / JHB)
          </div>
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <div>AFRISMME HUB HOSPITALITY SUPPORT • COMMERCIAL PITCH DECK</div>
      <div>SLIDE 07 / 12 • MAINTAIN &amp; KITCHEN INFRASTRUCTURE</div>
    </div>
  </div>

  <!-- ================= SLIDE 8: PILLAR 05 & 06 - PROTECT & GROW ================= -->
  <div class="slide">
    <div class="slide-header">
      <div class="brand">
        <span class="brand-title" style="color: #121316;">AFRISMME HUB</span>
        <span class="brand-sub">HOSPITALITY SUPPORT ECOSYSTEM</span>
      </div>
      <div class="slide-cat" style="color: #121316; border-color: #C5A880;">Pillars 05 &amp; 06 • Protect &amp; Grow</div>
    </div>

    <div class="split-layout">
      <!-- Pillar 05 -->
      <div class="split-card">
        <div>
          <div class="eyebrow">Pillar 05 / PROTECT</div>
          <h3 style="font-size: 13pt; font-weight: 800; color: #121316; margin-bottom: 6px;">Compliance &amp; Staff Apparel</h3>
          <p style="font-size: 8pt; color: #555E6D; line-height: 1.4; margin-bottom: 10px;">
            Protecting your liquor license, health inspection score, and guest trust with institutional rigor and immaculate staff presentation.
          </p>
          <div class="img-box" style="height: 135px;">
            <img src="${imgUniformCrest}" alt="Hospitality Uniform Crest" />
            <div style="position: absolute; bottom: 6px; left: 6px; background: rgba(18,19,22,0.85); color: #FAF8F5; font-size: 6.8pt; font-weight: 700; padding: 2px 6px; border-radius: 3px;">
              Tailored Uniforms &amp; Embroidered Crests
            </div>
          </div>
          <ul class="feature-list">
            <li><strong>Municipal Health Readiness:</strong> Hygiene gap reports, cross-contamination prep logs, and sanitizer registers.</li>
            <li><strong>Fire &amp; OHS Audits:</strong> Suppression nozzle checks, exit routes, and compliance certification logs.</li>
            <li><strong>Tailored Staff Uniforms:</strong> High-durability stain-resistant front-of-house aprons, jackets, and embroidered crests.</li>
          </ul>
        </div>
        <div class="partner-pill">Standard: <strong>Municipal &amp; OHS Inspection Ready</strong></div>
      </div>

      <!-- Pillar 06 -->
      <div class="split-card">
        <div>
          <div class="eyebrow">Pillar 06 / GROW</div>
          <h3 style="font-size: 13pt; font-weight: 800; color: #121316; margin-bottom: 6px;">Digital &amp; Operational Yield</h3>
          <p style="font-size: 8pt; color: #555E6D; line-height: 1.4; margin-bottom: 10px;">
            Powered by technology partner <strong>Scinovalities</strong>, we connect physical dining excellence with high-performance digital systems.
          </p>
          <div class="img-box" style="height: 135px;">
            <img src="${imgHospitalityTech}" alt="Hospitality Technology Dashboard" />
            <div style="position: absolute; bottom: 6px; left: 6px; background: rgba(18,19,22,0.85); color: #FAF8F5; font-size: 6.8pt; font-weight: 700; padding: 2px 6px; border-radius: 3px;">
              Kitchen Display, Menus &amp; Table Yield AI
            </div>
          </div>
          <ul class="feature-list">
            <li><strong>High-Speed Digital Menus:</strong> Instant interactive QR menus with allergen flags, wine pairings, and real-time updates.</li>
            <li><strong>Local Search &amp; Review Dominance:</strong> Google Maps top 3 optimization and review generation systems.</li>
            <li><strong>Floorplan Yield Optimization:</strong> Table layout re-engineering to maximize average spend per available seat hour (RevPASH).</li>
          </ul>
        </div>
        <div class="partner-pill">Partner: <strong>Scinovalities Technology</strong></div>
      </div>
    </div>

    <div class="slide-footer">
      <div>AFRISMME HUB HOSPITALITY SUPPORT • COMMERCIAL PITCH DECK</div>
      <div>SLIDE 08 / 12 • COMPLIANCE &amp; TECHNOLOGY EXPANSION</div>
    </div>
  </div>

  <!-- ================= SLIDE 9: CATALOG FURNITURE COLLECTION (DINING & LOUNGE) ================= -->
  <div class="slide">
    <div class="slide-header">
      <div class="brand">
        <span class="brand-title" style="color: #121316;">AFRISMME HUB</span>
        <span class="brand-sub">HOSPITALITY SUPPORT ECOSYSTEM</span>
      </div>
      <div class="slide-cat" style="color: #121316; border-color: #C5A880;">Product Catalog • Dining &amp; Lounge</div>
    </div>

    <div>
      <div class="eyebrow">Handcrafted Hospitality Catalog</div>
      <h2 class="heading-lg">Commercial Furniture: Dining &amp; Lounge Suites</h2>
      <p class="subtext">
        Manufactured for hospitality resilience. High-grade African hardwoods, powder-coated aluminum frames, and weather-resistant contract textiles.
      </p>
    </div>

    <div class="quad-grid">
      <!-- Item 1 -->
      <div class="quad-card">
        <div class="img-box" style="height: 120px;">
          <img src="${imgZimTeak8}" alt="Zim Teak 8 Seater Dining Set" />
        </div>
        <div>
          <div style="font-size: 8.5pt; font-weight: 800; color: #121316;">Zim Teak 8-Seater Suite</div>
          <div style="font-size: 7pt; color: #7A828E; margin-bottom: 4px;">Genuine Zimbabwean Teak</div>
          <p style="font-size: 7.2pt; color: #555E6D; line-height: 1.35;">Heavy solid teak outdoor dining set built for high-traffic restaurant terraces and executive private dining.</p>
        </div>
        <div style="margin-top: 6px; font-size: 7pt; font-weight: 700; color: #C5A880;">Generational Durability</div>
      </div>

      <!-- Item 2 -->
      <div class="quad-card">
        <div class="img-box" style="height: 120px;">
          <img src="${imgZimbaliLounge}" alt="Zimbali Lounge Set" />
        </div>
        <div>
          <div style="font-size: 8.5pt; font-weight: 800; color: #121316;">Zimbali Luxury Lounge</div>
          <div style="font-size: 7pt; color: #7A828E; margin-bottom: 4px;">Deep-Seating Modular Sectional</div>
          <p style="font-size: 7.2pt; color: #555E6D; line-height: 1.35;">Woven dark wicker modular lounge with high-density Sunbrella-grade cushions and glass-top table.</p>
        </div>
        <div style="margin-top: 6px; font-size: 7pt; font-weight: 700; color: #C5A880;">Hotel &amp; Resort Lounges</div>
      </div>

      <!-- Item 3 -->
      <div class="quad-card">
        <div class="img-box" style="height: 120px;">
          <img src="${imgAluWoodMorris}" alt="Alu-Wood Morris Lounge Set" />
        </div>
        <div>
          <div style="font-size: 8.5pt; font-weight: 800; color: #121316;">Alu-Wood Morris Suite</div>
          <div style="font-size: 7pt; color: #7A828E; margin-bottom: 4px;">Powder Aluminum + Teak Slats</div>
          <p style="font-size: 7.2pt; color: #555E6D; line-height: 1.35;">Lightweight, rust-free white aluminum frames with natural teak armrests and weather-resistant red cushions.</p>
        </div>
        <div style="margin-top: 6px; font-size: 7pt; font-weight: 700; color: #C5A880;">Modern Coastal Terraces</div>
      </div>

      <!-- Item 4 -->
      <div class="quad-card">
        <div class="img-box" style="height: 120px;">
          <img src="${imgGabriella10}" alt="Gabriella 10 Seater Terrace Suite" />
        </div>
        <div>
          <div style="font-size: 8.5pt; font-weight: 800; color: #121316;">Gabriella 10-Seater Set</div>
          <div style="font-size: 7pt; color: #7A828E; margin-bottom: 4px;">Poolside &amp; Terrace Dining</div>
          <p style="font-size: 7.2pt; color: #555E6D; line-height: 1.35;">Large banquet outdoor table with integrated center umbrella hole and 10 ergonomic woven cane armchairs.</p>
        </div>
        <div style="margin-top: 6px; font-size: 7pt; font-weight: 700; color: #C5A880;">Large Group Bookings</div>
      </div>
    </div>

    <div class="slide-footer">
      <div>AFRISMME HUB HOSPITALITY SUPPORT • COMMERCIAL PITCH DECK</div>
      <div>SLIDE 09 / 12 • DINING &amp; LOUNGE COLLECTION</div>
    </div>
  </div>

  <!-- ================= SLIDE 10: CATALOG FURNITURE COLLECTION (SLABS, POOL & DECKING) ================= -->
  <div class="slide">
    <div class="slide-header">
      <div class="brand">
        <span class="brand-title" style="color: #121316;">AFRISMME HUB</span>
        <span class="brand-sub">HOSPITALITY SUPPORT ECOSYSTEM</span>
      </div>
      <div class="slide-cat" style="color: #121316; border-color: #C5A880;">Product Catalog • Slabs, Pool &amp; Domes</div>
    </div>

    <div>
      <div class="eyebrow">Statement Architecture &amp; Poolside</div>
      <h2 class="heading-lg">Live Edge Tables, Pool Loungers &amp; Domes</h2>
      <p class="subtext">
        Artisanal statement pieces that turn ordinary restaurant corners into iconic focal points and extend outdoor seating into all four seasons.
      </p>
    </div>

    <div class="quad-grid">
      <!-- Item 1 -->
      <div class="quad-card">
        <div class="img-box" style="height: 120px;">
          <img src="${imgLiveEdgeBoard}" alt="Live Edge Boardroom Table" />
        </div>
        <div>
          <div style="font-size: 8.5pt; font-weight: 800; color: #121316;">Live Edge Slab Tables</div>
          <div style="font-size: 7pt; color: #7A828E; margin-bottom: 4px;">Single-Slab African Hardwood</div>
          <p style="font-size: 7.2pt; color: #555E6D; line-height: 1.35;">Monumental single-slab live edge tables with sculpted steel bases for chef's tables, tasting rooms, and boardrooms.</p>
        </div>
        <div style="margin-top: 6px; font-size: 7pt; font-weight: 700; color: #C5A880;">VIP Tasting Rooms</div>
      </div>

      <!-- Item 2 -->
      <div class="quad-card">
        <div class="img-box" style="height: 120px;">
          <img src="${imgWoodenPoolLounger}" alt="Wooden Pool Loungers" />
        </div>
        <div>
          <div style="font-size: 8.5pt; font-weight: 800; color: #121316;">Solid Wood Pool Loungers</div>
          <div style="font-size: 7pt; color: #7A828E; margin-bottom: 4px;">Adjustable Back • Integrated Wheels</div>
          <p style="font-size: 7.2pt; color: #555E6D; line-height: 1.35;">Heavy-gauge solid timber loungers with water-resistant quick-dry reticulated foam cushions for hotel pools.</p>
        </div>
        <div style="margin-top: 6px; font-size: 7pt; font-weight: 700; color: #C5A880;">Boutique Hotel Pools</div>
      </div>

      <!-- Item 3 -->
      <div class="quad-card">
        <div class="img-box" style="height: 120px;">
          <img src="${imgTransparentDomes}" alt="Transparent Geodesic Domes" />
        </div>
        <div>
          <div style="font-size: 8.5pt; font-weight: 800; color: #121316;">Transparent Dining Domes</div>
          <div style="font-size: 7pt; color: #7A828E; margin-bottom: 4px;">All-Weather Geodesic Igloos</div>
          <p style="font-size: 7.2pt; color: #555E6D; line-height: 1.35;">Climate-controlled clear geodesic dining domes that monetize winter rooftops and rainy garden terraces.</p>
        </div>
        <div style="margin-top: 6px; font-size: 7pt; font-weight: 700; color: #C5A880;">Winter Terrace Activation</div>
      </div>

      <!-- Item 4 -->
      <div class="quad-card">
        <div class="img-box" style="height: 120px;">
          <img src="${imgDecking}" alt="Composite & Wooden Decking" />
        </div>
        <div>
          <div style="font-size: 8.5pt; font-weight: 800; color: #121316;">Composite &amp; Timber Decks</div>
          <div style="font-size: 7pt; color: #7A828E; margin-bottom: 4px;">Zero-Splinter Hospitality Decking</div>
          <p style="font-size: 7.2pt; color: #555E6D; line-height: 1.35;">Commercial UV-resistant composite and hardwood deck installation and non-slip restorative sealing.</p>
        </div>
        <div style="margin-top: 6px; font-size: 7pt; font-weight: 700; color: #C5A880;">Slip-Resistant &amp; Durable</div>
      </div>
    </div>

    <div class="slide-footer">
      <div>AFRISMME HUB HOSPITALITY SUPPORT • COMMERCIAL PITCH DECK</div>
      <div>SLIDE 10 / 12 • SLABS, POOL &amp; WEATHER ARCHITECTURE</div>
    </div>
  </div>

  <!-- ================= SLIDE 11: SOCIAL IMPACT & ARTISANAL CRAFTSMANSHIP ================= -->
  <div class="slide">
    <div class="slide-header">
      <div class="brand">
        <span class="brand-title" style="color: #121316;">AFRISMME HUB</span>
        <span class="brand-sub">HOSPITALITY SUPPORT ECOSYSTEM</span>
      </div>
      <div class="slide-cat" style="color: #121316; border-color: #C5A880;">Mission &amp; Impact</div>
    </div>

    <div class="split-layout">
      <div>
        <div class="eyebrow">Enterprise Development &amp; Skills</div>
        <h2 class="heading-lg">Uplifting Communities Through Master Training</h2>
        <p style="font-size: 8.5pt; color: #555E6D; line-height: 1.45; margin-bottom: 12px;">
          AfriSMME Hub is built on a foundational social mandate: empowering local South African talent through certified artisan craftsmanship, social development, and dignified career creation.
        </p>

        <div style="background: #FFFDF9; border: 1px solid #C5A880; border-radius: 6px; padding: 12px; margin-bottom: 12px;">
          <h4 style="font-size: 9.5pt; font-weight: 800; color: #121316; margin-bottom: 4px;">Our Core Social Commitments:</h4>
          <ul class="feature-list">
            <li><strong>Women Artisan Weavers:</strong> Training and employing women in our Kew workshops in traditional and modern cane, wicker, and contract upholstery craftsmanship.</li>
            <li><strong>Youth Apprenticeships:</strong> Accredited vocational mentorship in solid hardwood joinery, timber finishing, and commercial HVAC maintenance.</li>
            <li><strong>Ethical Local Manufacturing:</strong> 100% of furniture manufacturing and restoration work stays within South African communities.</li>
            <li><strong>B-BBEE Level 1 Contributor:</strong> Partnering with AfriSMME directly optimizes your procurement scorecard and ESG impact goals.</li>
          </ul>
        </div>

        <p style="font-size: 7.8pt; color: #7A828E; font-style: italic;">
          "When our clients restore their furniture with AfriSMME Hub, they are directly sustaining families and building industrial trade skills in our communities."
        </p>
      </div>

      <div style="display: flex; flex-direction: column; gap: 10px;">
        <div class="img-box" style="height: 190px; margin-bottom: 0;">
          <img src="${imgArtisansWeaving}" alt="Artisans Handweaving Chairs in Workshop" />
          <div style="position: absolute; bottom: 8px; left: 8px; background: rgba(18,19,22,0.85); color: #FAF8F5; font-size: 7pt; font-weight: 700; padding: 3px 8px; border-radius: 3px;">
            AfriSMME Female Artisans Hand-Weaving Wicker (Kew Workshop)
          </div>
        </div>
        <div class="img-box" style="height: 140px; margin-bottom: 0;">
          <img src="${imgStaircaseCraftsman}" alt="Craftsman Restoring Hardwood Stairs" />
          <div style="position: absolute; bottom: 8px; left: 8px; background: rgba(18,19,22,0.85); color: #FAF8F5; font-size: 7pt; font-weight: 700; padding: 3px 8px; border-radius: 3px;">
            Master Artisan Hand Stripping &amp; Restoring Timber
          </div>
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <div>AFRISMME HUB HOSPITALITY SUPPORT • COMMERCIAL PITCH DECK</div>
      <div>SLIDE 11 / 12 • SOCIAL EMPOWERMENT &amp; ESG IMPACT</div>
    </div>
  </div>

  <!-- ================= SLIDE 12: PARTNERSHIP TIERS & AUDIT INVITATION ================= -->
  <div class="slide dark">
    <div class="slide-header">
      <div class="brand">
        <span class="brand-title">AFRISMME HUB</span>
        <span class="brand-sub">HOSPITALITY SUPPORT ECOSYSTEM</span>
      </div>
      <div class="slide-cat">Partnership Models &amp; Next Steps</div>
    </div>

    <div style="display: grid; grid-template-columns: 1.15fr 0.85fr; gap: 20px; align-items: stretch; flex: 1;">
      <!-- Left: Retainer Packages -->
      <div>
        <div class="eyebrow">Engagement Frameworks</div>
        <h2 class="heading-lg" style="color: #FAF8F5; font-size: 19pt; margin-bottom: 10px;">Flexible Service &amp; Retainer Packages</h2>

        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-bottom: 12px;">
          <!-- Tier 1 -->
          <div style="background: #181B22; border: 1px solid #2B3342; border-radius: 6px; padding: 10px;">
            <div style="font-size: 7.5pt; font-weight: 800; color: #C5A880; letter-spacing: 1px;">TIER 01</div>
            <h5 style="font-size: 9.5pt; font-weight: 700; color: #FAF8F5; margin: 2px 0 4px;">On-Demand Care</h5>
            <p style="font-size: 7.2pt; color: #8E99A8; line-height: 1.35;">Fixed-price itemized emergency callouts, chair repairs, and spot table refinishing as needed.</p>
          </div>

          <!-- Tier 2 -->
          <div style="background: #181B22; border: 1px solid #2B3342; border-radius: 6px; padding: 10px;">
            <div style="font-size: 7.5pt; font-weight: 800; color: #C5A880; letter-spacing: 1px;">TIER 02</div>
            <h5 style="font-size: 9.5pt; font-weight: 700; color: #FAF8F5; margin: 2px 0 4px;">Seasonal Refresh</h5>
            <p style="font-size: 7.2pt; color: #8E99A8; line-height: 1.35;">Bi-annual deep restorative overhaul: full patio umbrella wash, timber oiling, and extraction deep clean.</p>
          </div>

          <!-- Tier 3 -->
          <div style="background: #181B22; border: 1px solid #C5A880; border-radius: 6px; padding: 10px;">
            <div style="font-size: 7.5pt; font-weight: 800; color: #C5A880; letter-spacing: 1px;">TIER 03</div>
            <h5 style="font-size: 9.5pt; font-weight: 700; color: #FAF8F5; margin: 2px 0 4px;">Facility Retainer</h5>
            <p style="font-size: 7.2pt; color: #8E99A8; line-height: 1.35;">Monthly diagnostic walkthroughs, zero-downtime touch-ups, priority emergency SLA, and compliance logs.</p>
          </div>
        </div>

        <!-- Audit Callout -->
        <div style="background: rgba(197, 168, 128, 0.1); border: 1px dashed #C5A880; border-radius: 8px; padding: 12px;">
          <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 4px;">
            <h4 style="font-size: 11pt; font-weight: 800; color: #FAF8F5;">The Complimentary 360° Physical Facility Audit</h4>
            <span style="font-size: 7pt; font-weight: 800; color: #121316; background: #C5A880; padding: 2px 8px; border-radius: 3px;">ZERO RISK</span>
          </div>
          <p style="font-size: 7.6pt; color: #D8C2A0; line-height: 1.38; margin-bottom: 6px;">
            Our lead facility specialist performs a 45-minute on-site review covering your dining timber, patio umbrellas, acoustic resonance, kitchen hoods, and OHS registers. You receive a complete diagnostic scorecard.
          </p>
          <div style="font-size: 7pt; color: #8E99A8;">* Takes 45 minutes between lunch and dinner. Leaves zero disruption to your team.</div>
        </div>
      </div>

      <!-- Right: Contact Card -->
      <div style="background: #181B22; border: 1px solid #C5A880; border-radius: 8px; padding: 16px; display: flex; flex-direction: column; justify-content: space-between;">
        <div>
          <div style="font-size: 7.5pt; letter-spacing: 1.5px; text-transform: uppercase; color: #C5A880; font-weight: 800; margin-bottom: 4px;">CORPORATE HEADQUARTERS</div>
          <h3 style="font-size: 14pt; font-weight: 800; color: #FAF8F5; margin-bottom: 8px;">AFRISMME HUB</h3>
          <p style="font-size: 8pt; color: #D8C2A0; margin-bottom: 4px;">146 10th Road Kew, Sandton, 2090</p>
          <p style="font-size: 8pt; color: #D8C2A0; margin-bottom: 12px;">Johannesburg, Gauteng, South Africa</p>

          <div style="border-top: 1px solid #2B3342; padding-top: 10px; margin-bottom: 10px;">
            <div style="font-size: 7.5pt; color: #8E99A8; margin-bottom: 2px;">Direct Office Line:</div>
            <div style="font-size: 10pt; font-weight: 800; color: #FAF8F5;">011 346 5018</div>
          </div>

          <div style="margin-bottom: 10px;">
            <div style="font-size: 7.5pt; color: #8E99A8; margin-bottom: 2px;">Mobile / WhatsApp Priority Dispatch:</div>
            <div style="font-size: 10pt; font-weight: 800; color: #C5A880;">083 432 8394</div>
          </div>

          <div>
            <div style="font-size: 7.5pt; color: #8E99A8; margin-bottom: 2px;">Email &amp; Digital Portal:</div>
            <div style="font-size: 8.5pt; color: #FAF8F5;">info@afrismmehub.co.za</div>
            <div style="font-size: 8.5pt; color: #C5A880; font-weight: 700;">www.afrismmehub.co.za</div>
          </div>
        </div>

        <div style="border-top: 1px solid #2B3342; padding-top: 12px; text-align: center;">
          <a href="https://www.afrismmehub.co.za" style="display: block; background: #C5A880; color: #121316; font-weight: 800; font-size: 8.5pt; padding: 8px 14px; border-radius: 4px; text-decoration: none; letter-spacing: 0.5px;">
            SCHEDULE ON-SITE AUDIT NOW
          </a>
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <div>AFRISMME HUB HOSPITALITY SUPPORT • COMMERCIAL PITCH DECK</div>
      <div>SLIDE 12 / 12 • BOOKING &amp; CONTACT DETAILS</div>
    </div>
  </div>

</body>
</html>`;

async function generate() {
  const outPdf = path.join(rootDir, 'public/PDFs/AfriSMME_Hospitality_Company_Profile_and_Booklet.pdf');
  const outHtml = path.join(rootDir, 'public/PDFs/booklet_print.html');
  fs.writeFileSync(outHtml, html);
  console.log('Saved public/PDFs/booklet_print.html!');

  console.log('Launching Chrome via Puppeteer-core...');
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  page.setDefaultNavigationTimeout(120000);
  console.log('Setting HTML content with embedded base64 imagery for 12-page booklet...');
  await page.setContent(html, { waitUntil: 'domcontentloaded', timeout: 120000 });
  console.log('Rendering Landscape A4 PDF...');
  await page.pdf({
    path: outPdf,
    format: 'A4',
    landscape: true,
    printBackground: true,
    timeout: 120000,
    margin: { top: 0, right: 0, bottom: 0, left: 0 }
  });
  await browser.close();
  console.log('Company Profile & Booklet PDF generation complete! File size:', fs.statSync(outPdf).size, 'bytes');
}

generate().catch(console.error);
