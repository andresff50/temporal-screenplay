import { chromium } from '@playwright/test';
import * as path from 'path';
import * as fs from 'fs';

(async () => {
  const reportPath: string = path.resolve(__dirname, 'reports', 'cucumber-report.html');

  if (!fs.existsSync(reportPath)) {
    console.error('❌ Allure report not found! Please generate it first.', reportPath);
    process.exit(1);
  }

  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto(`file://${reportPath}`, { waitUntil: 'load' });

  // Optional: wait for the full UI to render
  await page.waitForTimeout(1000);

  await page.pdf({
    path: 'allure-report.pdf',
    format: 'A4',
    printBackground: true
  });

  await browser.close();

  console.log('✅ PDF successfully generated: allure-report.pdf');
})();