const fs = require('fs');
const path = require('path');

const mockups = require('./generate_mockups.js');
const rootDir = process.cwd();
const mockupsDir = path.join(rootDir, 'mockups');

const concepts = [
  { id: 'concept-01-ecosystem', slug: 'c1', label: 'Concept 01 (Ecosystem)' },
  { id: 'concept-02-architecture', slug: 'c2', label: 'Concept 02 (Architecture)' },
  { id: 'concept-03-monogram', slug: 'c3', label: 'Concept 03 (Monogram)' }
];

console.log('Generating real-world application mockups...');

concepts.forEach(c => {
  const signage = mockups.buildSignageMockup(c.id);
  const uniform = mockups.buildUniformMockup(c.id);
  const vehicle = mockups.buildVehicleMockup(c.id);
  const card = mockups.buildBusinessCardMockup(c.id);
  const web = mockups.buildWebsiteHeaderMockup(c.id);
  const proposal = mockups.buildProposalDocumentMockup(c.id);
  const avatar = mockups.buildSocialAvatarMockup(c.id);

  // Write per-concept
  fs.writeFileSync(path.join(mockupsDir, `restaurant-entrance-signage-${c.slug}.svg`), signage.trim());
  fs.writeFileSync(path.join(mockupsDir, `staff-uniform-${c.slug}.svg`), uniform.trim());
  fs.writeFileSync(path.join(mockupsDir, `vehicle-${c.slug}.svg`), vehicle.trim());
  fs.writeFileSync(path.join(mockupsDir, `business-card-${c.slug}.svg`), card.trim());
  fs.writeFileSync(path.join(mockupsDir, `website-header-${c.slug}.svg`), web.trim());
  fs.writeFileSync(path.join(mockupsDir, `proposal-document-${c.slug}.svg`), proposal.trim());
  fs.writeFileSync(path.join(mockupsDir, `social-media-avatar-${c.slug}.svg`), avatar.trim());

  // Also write canonical defaults based on Concept 01 (or master selection)
  if (c.slug === 'c1') {
    fs.writeFileSync(path.join(mockupsDir, 'restaurant-entrance-signage.svg'), signage.trim());
    fs.writeFileSync(path.join(mockupsDir, 'staff-uniform.svg'), uniform.trim());
    fs.writeFileSync(path.join(mockupsDir, 'vehicle.svg'), vehicle.trim());
    fs.writeFileSync(path.join(mockupsDir, 'business-card.svg'), card.trim());
    fs.writeFileSync(path.join(mockupsDir, 'website-header.svg'), web.trim());
    fs.writeFileSync(path.join(mockupsDir, 'proposal-document.svg'), proposal.trim());
    fs.writeFileSync(path.join(mockupsDir, 'social-media-avatar.svg'), avatar.trim());
  }

  console.log(`  [OK] Mockups generated for ${c.label}`);
});

console.log('All real-world application mockups generated successfully!');
