const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');

function getBase64Image(relPath) {
  const full = path.join(rootDir, relPath);
  if (fs.existsSync(full)) {
    const ext = path.extname(full).toLowerCase();
    const mime = ext === '.png' ? 'image/png' : ext === '.svg' ? 'image/svg+xml' : 'image/jpeg';
    return `data:${mime};base64,${fs.readFileSync(full).toString('base64')}`;
  }
  console.warn(`Warning: Image not found at ${full}`);
  return '';
}

function getSvgContent(relPath) {
  const full = path.join(rootDir, relPath);
  if (fs.existsSync(full)) {
    return fs.readFileSync(full, 'utf8');
  }
  return '';
}

function loadAllAssets() {
  return {
    // AI Generated Categories
    ai01Terrace: getBase64Image('public/images/ai_generated/01_luxury_restaurant_terrace.jpg'),
    ai02Safari: getBase64Image('public/images/ai_generated/02_safari_lodge_deck.jpg'),
    ai03Hotel: getBase64Image('public/images/ai_generated/03_five_star_hotel_terrace.jpg'),
    ai04Umbrella: getBase64Image('public/images/ai_generated/04_commercial_umbrella_detail.jpg'),
    ai05WoodWorkshop: getBase64Image('public/images/ai_generated/05_furniture_restoration_workshop.jpg'),
    ai06Upholstery: getBase64Image('public/images/ai_generated/06_commercial_upholstery_atelier.jpg'),
    ai07CaneWeave: getBase64Image('public/images/ai_generated/07_cane_woven_furniture_restoration.jpg'),
    ai08EstateTerrace: getBase64Image('public/images/ai_generated/08_restored_estate_terrace.jpg'),
    ai09Compliance: getBase64Image('public/images/ai_generated/09_safety_compliance_inspection.jpg'),
    ai10DigitalTech: getBase64Image('public/images/ai_generated/10_digital_hospitality_analytics.jpg'),

    // New Ultra-Luxury Before & After Showcase Assets
    luxuryTeakBefore: getBase64Image('public/images/brochure_showcase/teak_dining_before_luxury.jpg'),
    luxuryTeakAfter: getBase64Image('public/images/brochure_showcase/teak_dining_after_luxury.jpg'),
    luxuryWickerBefore: getBase64Image('public/images/brochure_showcase/wicker_chair_before_luxury.jpg'),
    luxuryWickerAfter: getBase64Image('public/images/brochure_showcase/wicker_chair_after_luxury.jpg'),
    luxuryBanquetteBefore: getBase64Image('public/images/brochure_showcase/banquette_booth_before_luxury.jpg'),
    luxuryBanquetteAfter: getBase64Image('public/images/brochure_showcase/banquette_booth_after_luxury.jpg'),
    luxuryFloorBefore: getBase64Image('public/images/brochure_showcase/floor_sanding_before_luxury.jpg'),
    luxuryFloorAfter: getBase64Image('public/images/brochure_showcase/floor_sanding_after_luxury.jpg'),

    // Commercial Cantilevers & Architectural Umbrellas
    cantileverLuxury: getBase64Image('public/images/cantilevers/cantilever_umbrella_luxury.jpg'),
    cantileverEngDetail: getBase64Image('public/images/cantilevers/cantilever_engineering_detail.jpg'),
    cantileverEvening: getBase64Image('public/images/cantilevers/cantilever_evening_glow.jpg'),
    cantileverPoolside: getBase64Image('public/images/cantilevers/cantilever_poolside_resort.jpg'),
    cantileverPatioDining: getBase64Image('public/images/cantilevers/unsplash_luxury_patio_dining.jpg'),
    cantileverTerrace: getBase64Image('public/images/cantilevers/unsplash_terrace_umbrellas.jpg'),
    cantileverResortPool: getBase64Image('public/images/cantilevers/unsplash_resort_pool_patio.jpg'),

    // Real Showcase Assets (Legacy & Context)
    realTeakBefore: getBase64Image('public/real_showcase/teak_armchair_before_perfect.jpg'),
    realTeakAfter: getBase64Image('public/real_showcase/teak_armchair_after_perfect.jpg'),
    realWickerBefore: getBase64Image('public/real_showcase/wicker_arm_before_clean.jpg'),
    realWickerAfter: getBase64Image('public/real_showcase/wicker_arm_after_clean.jpg'),
    realFloorCraftsman: getBase64Image('public/real_showcase/hardwood_floor_sanding_craftsman.jpg'),
    realStaircase: getBase64Image('public/real_showcase/staircase_restoration_craftsman.jpg'),
    realUpholsterySplit: getBase64Image('public/real_showcase/chesterfield_upholstery_before_after.jpg'),
    realArtisansWeaving: getBase64Image('public/real_showcase/artisans_handweaving_clean.jpg'),
    realTerraceLuxury: getBase64Image('public/real_showcase/luxury_sunlit_restaurant_terrace.jpg'),
    realAcousticDining: getBase64Image('public/real_showcase/intimate_acoustic_dining_interior.jpg'),
    realKitchenExtraction: getBase64Image('public/real_showcase/commercial_kitchen_stainless_extraction.jpg'),
    realCantileverBeach: getBase64Image('public/real_showcase/cantilever_umbrella_beachside.jpg'),
    realEveningPatio: getBase64Image('public/real_showcase/outdoor_patio_dining_evening.jpg'),

    // Brand & Mockup Assets
    mockupBrassSign: getBase64Image('public/images/mockup_brass_signage.jpg'),
    mockupFleet: getBase64Image('public/images/mockup_fleet_vehicle.jpg'),
    mockupUniform: getBase64Image('public/images/mockup_uniform_crest.jpg'),
    mockupLeatherCrest: getBase64Image('mockups/leather_embossed_crest.jpg'),
    mockupBrassFacade: getBase64Image('mockups/brass_facade_signage.jpg'),
    acousticBooth: getBase64Image('public/images/acoustic_privacy_booth.jpg'),
    woodDetail: getBase64Image('public/images/furniture_restoration_detail.jpg'),
    heroCampsBay: getBase64Image('public/images/hero/hero-camps-bay-sunset.jpg'),

    // Diagrams (Base64)
    diagram01: getBase64Image('public/images/diagrams/diagram_01_ecosystem.svg'),
    diagram02: getBase64Image('public/images/diagrams/diagram_02_cycle.svg'),
    diagram03: getBase64Image('public/images/diagrams/diagram_03_partner_model.svg'),
    diagram04: getBase64Image('public/images/diagrams/diagram_04_continuum.svg'),

    // Logos
    logoHorizontal: getBase64Image('logo/horizontal-lockup.svg'),
    logoStacked: getBase64Image('logo/stacked-lockup.svg'),
    logoSymbol: getBase64Image('logo/symbol-only.svg'),
    logoPrimary: getBase64Image('logo/primary-logo.svg'),
  };
}

module.exports = {
  rootDir,
  getBase64Image,
  getSvgContent,
  loadAllAssets,
};
