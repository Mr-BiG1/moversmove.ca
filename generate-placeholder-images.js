const fs = require('fs');
const path = require('path');

// This script creates basic placeholder images
// You should replace these with your actual branded images

console.log('🎨 Generating placeholder images...');

// Create a simple SVG favicon
const faviconSvg = `<svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
  <rect width="32" height="32" fill="#0A5DB5"/>
  <text x="16" y="20" font-family="Arial, sans-serif" font-size="16" fill="white" text-anchor="middle">M</text>
</svg>`;

// Create a simple SVG apple touch icon
const appleTouchSvg = `<svg width="180" height="180" viewBox="0 0 180 180" xmlns="http://www.w3.org/2000/svg">
  <rect width="180" height="180" fill="#0A5DB5"/>
  <text x="90" y="110" font-family="Arial, sans-serif" font-size="72" fill="white" text-anchor="middle">M</text>
  <text x="90" y="140" font-family="Arial, sans-serif" font-size="16" fill="white" text-anchor="middle">Movers Move</text>
</svg>`;

// Create a simple SVG OG image
const ogImageSvg = `<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#0A5DB5"/>
  <text x="600" y="250" font-family="Arial, sans-serif" font-size="72" fill="white" text-anchor="middle">Movers Move</text>
  <text x="600" y="320" font-family="Arial, sans-serif" font-size="36" fill="white" text-anchor="middle">Freight & Logistics</text>
  <text x="600" y="380" font-family="Arial, sans-serif" font-size="24" fill="white" text-anchor="middle">Professional Moving Services Across Canada</text>
</svg>`;

try {
  // Write SVG files (these can be converted to PNG/ICO later)
  fs.writeFileSync('public/favicon.svg', faviconSvg);
  fs.writeFileSync('public/apple-touch-icon.svg', appleTouchSvg);
  fs.writeFileSync('public/og-image.svg', ogImageSvg);
  
  console.log('✅ Generated placeholder SVG files:');
  console.log('  - public/favicon.svg');
  console.log('  - public/apple-touch-icon.svg');
  console.log('  - public/og-image.svg');
  
  console.log('\n📝 Next steps:');
  console.log('1. Convert these SVG files to the required formats:');
  console.log('   - favicon.svg → favicon.ico (16x16, 32x32, 48x48)');
  console.log('   - apple-touch-icon.svg → apple-touch-icon.png (180x180)');
  console.log('   - og-image.svg → og-image.jpg (1200x630)');
  console.log('2. Replace with your actual branded images');
  console.log('3. Update layout.tsx to reference the correct file types');
  
} catch (error) {
  console.error('❌ Error generating placeholder images:', error);
}

