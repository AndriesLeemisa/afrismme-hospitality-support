const sharp = require('sharp');
const path = require('path');

const realDir = path.join(__dirname, '../public/real_showcase');

async function fixCatalogCrops() {
  const p2 = path.join(__dirname, '../public/catalog_pages/highres_page_2.png');
  const p3 = path.join(__dirname, '../public/catalog_pages/highres_page_3.png');
  const p4 = path.join(__dirname, '../public/catalog_pages/highres_page_4.png');

  // Zim Teak 8 Seater (stop above orange banner)
  await sharp(p2)
    .extract({ left: 630, top: 780, width: 540, height: 330 })
    .jpeg({ quality: 95 })
    .toFile(path.join(realDir, 'zim_teak_8_clean.jpg'));

  // Alu-Wood Morris (stop above orange banner)
  await sharp(p2)
    .extract({ left: 50, top: 220, width: 510, height: 320 })
    .jpeg({ quality: 95 })
    .toFile(path.join(realDir, 'alu_wood_morris_clean.jpg'));

  // Zimbali Lounge (stop above orange banner)
  await sharp(p2)
    .extract({ left: 1810, top: 1330, width: 530, height: 310 })
    .jpeg({ quality: 95 })
    .toFile(path.join(realDir, 'zimbali_lounge_clean.jpg'));

  // Gabriella 10 Seater (stop above orange banner)
  await sharp(p3)
    .extract({ left: 1190, top: 220, width: 570, height: 330 })
    .jpeg({ quality: 95 })
    .toFile(path.join(realDir, 'gabriella_10_clean.jpg'));

  // Wooden Pool Loungers (stop above orange banner)
  await sharp(p3)
    .extract({ left: 45, top: 220, width: 530, height: 330 })
    .jpeg({ quality: 95 })
    .toFile(path.join(realDir, 'wooden_pool_lounger_clean.jpg'));

  // Composite Decking (stop above orange banner)
  await sharp(p4)
    .extract({ left: 610, top: 210, width: 550, height: 330 })
    .jpeg({ quality: 95 })
    .toFile(path.join(realDir, 'composite_decking_clean.jpg'));

  console.log('Clean catalog crops saved!');
}

fixCatalogCrops().catch(console.error);
