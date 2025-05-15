const { chromium } = require('@playwright/test');
const path = require('path');
const fs = require('fs');

(async () => {
  const reportPath = path.resolve(__dirname, 'allure-report', 'index.html');

  if (!fs.existsSync(reportPath)) {
    console.error('Allure report not found! Please generate it first.');
    process.exit(1);
  }

  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Load Allure report HTML file
  await page.goto('file://' + reportPath, { waitUntil: 'load' });

  // Give it a second to fully render
  await page.waitForTimeout(1000);

  // Save to PDF
  await page.pdf({
    path: 'allure-report.pdf',
    format: 'A4',
    printBackground: true
  });

  await browser.close();
  console.log('✅ PDF generated: allure-report.pdf');
})();
