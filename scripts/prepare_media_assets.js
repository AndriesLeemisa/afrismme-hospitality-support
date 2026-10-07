const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const realDir = path.join(__dirname, '../public/real_showcase');
if (!fs.existsSync(realDir)) fs.mkdirSync(realDir, { recursive: true });

async function cropRefined() {
  const p7 = path.join(__dirname, '../public/catalog_pages/highres_page_7.png');
  const p6 = path.join(__dirname, '../public/catalog_pages/highres_page_6.png');
  const p5 = path.join(__dirname, '../public/catalog_pages/highres_page_5.png');
  const p4 = path.join(__dirname, '../public/catalog_pages/highres_page_4.png');
  const p3 = path.join(__dirname, '../public/catalog_pages/highres_page_3.png');
  const p2 = path.join(__dirname, '../public/catalog_pages/highres_page_2.png');

  // Refined Page 7 Teak Armchair Before & After Pair (tight crop)
  await sharp(p7)
    .extract({ left: 110, top: 380, width: 1050, height: 710 })
    .jpeg({ quality: 95 })
    .toFile(path.join(realDir, 'teak_armchair_before_after_clean.jpg'));

  // Separate Teak Armchair Before (weathered gray, dried grain)
  await sharp(p7)
    .extract({ left: 115, top: 390, width: 500, height: 650 })
    .jpeg({ quality: 95 })
    .toFile(path.join(realDir, 'teak_armchair_before_clean.jpg'));

  // Separate Teak Armchair After (deep honey oiled finish)
  await sharp(p7)
    .extract({ left: 660, top: 390, width: 500, height: 650 })
    .jpeg({ quality: 95 })
    .toFile(path.join(realDir, 'teak_armchair_after_clean.jpg'));

  // Refined Page 7 Artisans Handweaving
  await sharp(p7)
    .extract({ left: 110, top: 1290, width: 1040, height: 490 })
    .jpeg({ quality: 95 })
    .toFile(path.join(realDir, 'artisans_handweaving_clean.jpg'));

  // Refined Page 7 Wicker Arm Before
  await sharp(p7)
    .extract({ left: 1330, top: 1140, width: 430, height: 630 })
    .jpeg({ quality: 95 })
    .toFile(path.join(realDir, 'wicker_arm_before_clean.jpg'));

  // Refined Page 7 Wicker Arm After
  await sharp(p7)
    .extract({ left: 1800, top: 1140, width: 430, height: 630 })
    .jpeg({ quality: 95 })
    .toFile(path.join(realDir, 'wicker_arm_after_clean.jpg'));

  // Refined Page 7 Wicker Arm Pair
  await sharp(p7)
    .extract({ left: 1300, top: 1020, width: 950, height: 760 })
    .jpeg({ quality: 95 })
    .toFile(path.join(realDir, 'wicker_arm_before_after_clean.jpg'));

  // Page 5 Live Edge Boardroom Table
  await sharp(p5)
    .extract({ left: 65, top: 370, width: 540, height: 440 })
    .jpeg({ quality: 95 })
    .toFile(path.join(realDir, 'live_edge_boardroom_slab.jpg'));

  // Page 5 Live Edge Dining Slab
  await sharp(p5)
    .extract({ left: 660, top: 370, width: 540, height: 440 })
    .jpeg({ quality: 95 })
    .toFile(path.join(realDir, 'live_edge_dining_slab.jpg'));

  // Page 5 Live Edge Coffee Table Suite
  await sharp(p5)
    .extract({ left: 1260, top: 880, width: 1050, height: 680 })
    .jpeg({ quality: 95 })
    .toFile(path.join(realDir, 'live_edge_coffee_suite.jpg'));

  // Page 2 Zim Teak 8-Seater Set
  await sharp(p2)
    .extract({ left: 620, top: 780, width: 560, height: 440 })
    .jpeg({ quality: 95 })
    .toFile(path.join(realDir, 'zim_teak_8_seater_dining.jpg'));

  // Page 2 Zimbali Lounge Set
  await sharp(p2)
    .extract({ left: 1810, top: 1330, width: 540, height: 380 })
    .jpeg({ quality: 95 })
    .toFile(path.join(realDir, 'zimbali_luxury_lounge.jpg'));

  // Page 2 Alu-Wood Morris Lounge Set
  await sharp(p2)
    .extract({ left: 40, top: 220, width: 530, height: 420 })
    .jpeg({ quality: 95 })
    .toFile(path.join(realDir, 'alu_wood_morris_lounge.jpg'));

  // Page 3 Cantilever & Gabriella 10-seater Set
  await sharp(p3)
    .extract({ left: 1190, top: 220, width: 590, height: 420 })
    .jpeg({ quality: 95 })
    .toFile(path.join(realDir, 'gabriella_10_seater_terrace.jpg'));

  console.log('Refined crops generated successfully!');
}

async function downloadCharmingPhotos() {
  const photos = [
    {
      name: 'luxury_sunlit_restaurant_terrace.jpg',
      url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=85',
      desc: 'High-end sunlit restaurant terrace with wooden tables and impeccable setup'
    },
    {
      name: 'intimate_acoustic_dining_interior.jpg',
      url: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1600&q=85',
      desc: 'Intimate fine dining room with acoustic timber, ambient lighting, and bespoke seating'
    },
    {
      name: 'artisan_wood_finishing_close_up.jpg',
      url: 'https://images.unsplash.com/photo-1502005229762-ee1b2da97306?auto=format&fit=crop&w=1600&q=85',
      desc: 'Master woodworker hand applying natural finish to premium hardwood'
    },
    {
      name: 'luxury_hotel_pool_pergola.jpg',
      url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=85',
      desc: 'Luxury resort terrace with parasols and wooden pool loungers'
    },
    {
      name: 'commercial_kitchen_stainless_extraction.jpg',
      url: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1600&q=85',
      desc: 'Spotless commercial kitchen extraction hoods and stainless steel prep line'
    },
    {
      name: 'outdoor_patio_dining_evening.jpg',
      url: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1600&q=85',
      desc: 'Atmospheric evening restaurant patio with warm lighting and comfortable banquettes'
    }
  ];

  for (const item of photos) {
    const dest = path.join(realDir, item.name);
    if (!fs.existsSync(dest)) {
      try {
        console.log(`Downloading ${item.name}...`);
        const res = await fetch(item.url);
        if (res.ok) {
          const buffer = Buffer.from(await res.arrayBuffer());
          fs.writeFileSync(dest, buffer);
          console.log(`Saved ${item.name} (${buffer.length} bytes)`);
        } else {
          console.error(`Failed downloading ${item.name}: status ${res.status}`);
        }
      } catch (err) {
        console.error(`Error downloading ${item.name}:`, err.message);
      }
    }
  }
}

async function run() {
  await cropRefined();
  await downloadCharmingPhotos();
}

run().catch(console.error);
