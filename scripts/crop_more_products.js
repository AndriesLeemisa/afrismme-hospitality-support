const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const realDir = path.join(__dirname, '../public/real_showcase');

async function cropMoreProducts() {
  const p3 = path.join(__dirname, '../public/catalog_pages/highres_page_3.png');
  const p2 = path.join(__dirname, '../public/catalog_pages/highres_page_2.png');
  const p4 = path.join(__dirname, '../public/catalog_pages/highres_page_4.png');
  const p7 = path.join(__dirname, '../public/catalog_pages/highres_page_7.png');

  // Page 7 Teak Armchair - tighter clean crop (no text at bottom)
  await sharp(p7)
    .extract({ left: 120, top: 385, width: 490, height: 600 })
    .jpeg({ quality: 95 })
    .toFile(path.join(realDir, 'teak_armchair_before_tight.jpg'));

  await sharp(p7)
    .extract({ left: 665, top: 385, width: 490, height: 600 })
    .jpeg({ quality: 95 })
    .toFile(path.join(realDir, 'teak_armchair_after_tight.jpg'));

  // Page 3 Transparent Domes (Row 3, Col 1)
  await sharp(p3)
    .extract({ left: 60, top: 1300, width: 520, height: 420 })
    .jpeg({ quality: 95 })
    .toFile(path.join(realDir, 'transparent_geodesic_domes.jpg'));

  // Page 3 Wooden Pool Loungers (Row 1, Col 1)
  await sharp(p3)
    .extract({ left: 40, top: 220, width: 540, height: 420 })
    .jpeg({ quality: 95 })
    .toFile(path.join(realDir, 'wooden_pool_lounger_ocean.jpg'));

  // Page 2 Adirondack Chairs (Row 3, Col 2)
  await sharp(p2)
    .extract({ left: 620, top: 1320, width: 550, height: 420 })
    .jpeg({ quality: 95 })
    .toFile(path.join(realDir, 'adirondack_deck_chairs.jpg'));

  // Page 2 Zim Teak 4 Seater Set (Row 2, Col 1)
  await sharp(p2)
    .extract({ left: 40, top: 780, width: 540, height: 440 })
    .jpeg({ quality: 95 })
    .toFile(path.join(realDir, 'zim_teak_4_seater_dining.jpg'));

  // Page 4 Custom Outdoor Striped Cushions (Row 3, Col 2)
  await sharp(p4)
    .extract({ left: 620, top: 1230, width: 560, height: 450 })
    .jpeg({ quality: 95 })
    .toFile(path.join(realDir, 'custom_outdoor_cushions.jpg'));

  // Page 4 Composite & Wooden Decking (Row 1, Col 2 & 3)
  await sharp(p4)
    .extract({ left: 610, top: 210, width: 560, height: 450 })
    .jpeg({ quality: 95 })
    .toFile(path.join(realDir, 'composite_decking_terrace.jpg'));

  console.log('Additional product crops completed!');
}

cropMoreProducts().catch(console.error);
