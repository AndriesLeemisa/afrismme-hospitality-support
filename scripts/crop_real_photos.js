const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const outDir = path.join(__dirname, '../public/real_showcase');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

async function cropPage7() {
  const p7 = path.join(__dirname, '../public/catalog_pages/highres_page_7.png');
  
  // Teak Armchair Before
  await sharp(p7)
    .extract({ left: 125, top: 400, width: 500, height: 750 })
    .jpeg({ quality: 92 })
    .toFile(path.join(outDir, 'teak_armchair_before.jpg'));

  // Teak Armchair After
  await sharp(p7)
    .extract({ left: 665, top: 400, width: 500, height: 750 })
    .jpeg({ quality: 92 })
    .toFile(path.join(outDir, 'teak_armchair_after.jpg'));

  // Combined Teak Side-by-Side
  await sharp(p7)
    .extract({ left: 120, top: 380, width: 1060, height: 780 })
    .jpeg({ quality: 92 })
    .toFile(path.join(outDir, 'teak_armchair_before_after_pair.jpg'));

  // Wicker Arm Before
  await sharp(p7)
    .extract({ left: 1310, top: 1120, width: 450, height: 680 })
    .jpeg({ quality: 92 })
    .toFile(path.join(outDir, 'wicker_arm_before.jpg'));

  // Wicker Arm After
  await sharp(p7)
    .extract({ left: 1780, top: 1120, width: 450, height: 680 })
    .jpeg({ quality: 92 })
    .toFile(path.join(outDir, 'wicker_arm_after.jpg'));

  // Combined Wicker Side-by-Side
  await sharp(p7)
    .extract({ left: 1290, top: 1010, width: 970, height: 800 })
    .jpeg({ quality: 92 })
    .toFile(path.join(outDir, 'wicker_arm_before_after_pair.jpg'));

  // Artisans Weaving Cane / Wicker
  await sharp(p7)
    .extract({ left: 120, top: 1260, width: 1060, height: 550 })
    .jpeg({ quality: 92 })
    .toFile(path.join(outDir, 'artisans_handweaving_workshop.jpg'));

  // Pool Lounger Before / After
  await sharp(p7)
    .extract({ left: 1290, top: 340, width: 970, height: 650 })
    .jpeg({ quality: 92 })
    .toFile(path.join(outDir, 'pool_lounger_before_after_pair.jpg'));

  console.log('Page 7 crops complete!');
}

async function cropPage6() {
  const p6 = path.join(__dirname, '../public/catalog_pages/highres_page_6.png');

  // Floor Sanding Dustless Machine (Bottom Left)
  await sharp(p6)
    .extract({ left: 80, top: 1160, width: 1120, height: 620 })
    .jpeg({ quality: 92 })
    .toFile(path.join(outDir, 'hardwood_floor_sanding_craftsman.jpg'));

  // Staircase Stripping & Restoration (Right side)
  await sharp(p6)
    .extract({ left: 1230, top: 380, width: 1060, height: 1400 })
    .jpeg({ quality: 92 })
    .toFile(path.join(outDir, 'staircase_restoration_craftsman.jpg'));

  // Archway & Door Painting (Top Left)
  await sharp(p6)
    .extract({ left: 80, top: 380, width: 550, height: 740 })
    .jpeg({ quality: 92 })
    .toFile(path.join(outDir, 'door_archway_craftsman.jpg'));

  // Window Frame Prep & Refurbishment (Top Middle)
  await sharp(p6)
    .extract({ left: 650, top: 380, width: 550, height: 740 })
    .jpeg({ quality: 92 })
    .toFile(path.join(outDir, 'window_refurbishment_craftsman.jpg'));

  console.log('Page 6 crops complete!');
}

async function cropPage4() {
  const p4 = path.join(__dirname, '../public/catalog_pages/highres_page_4.png');

  // Chesterfield Reupholstery Before -> After
  await sharp(p4)
    .extract({ left: 1780, top: 40, width: 550, height: 500 })
    .jpeg({ quality: 92 })
    .toFile(path.join(outDir, 'chesterfield_upholstery_before_after.jpg'));

  // Cantilever Umbrella (Row 2, col 1)
  await sharp(p4)
    .extract({ left: 20, top: 620, width: 570, height: 490 })
    .jpeg({ quality: 92 })
    .toFile(path.join(outDir, 'cantilever_umbrella_beachside.jpg'));

  console.log('Page 4 crops complete!');
}

async function run() {
  await cropPage7();
  await cropPage6();
  await cropPage4();
}

run().catch(console.error);
