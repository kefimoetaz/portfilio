const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs').promises;

async function generatePlaceholders() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Set viewport to match our placeholder dimensions
  await page.setViewport({ width: 800, height: 600 });
  
  const placeholderPath = path.join(process.cwd(), 'public', 'project-images', 'placeholder.html');
  const projectImages = [
    'chess-game.png',
    'coffee-dashboard.png',
    'daily-planner.png'
  ];
  
  // Load the placeholder HTML
  await page.goto(`file://${placeholderPath}`);
  
  // Generate each project placeholder
  for (const imageName of projectImages) {
    const outputPath = path.join(process.cwd(), 'public', 'project-images', imageName);
    await page.screenshot({
      path: outputPath,
      type: 'png'
    });
    console.log(`Generated ${imageName}`);
  }
  
  await browser.close();
  console.log('All placeholders generated successfully!');
}

generatePlaceholders().catch(console.error); 