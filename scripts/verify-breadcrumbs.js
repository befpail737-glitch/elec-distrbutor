/**
 * Verify breadcrumbs styling using Playwright
 * Run: node scripts/verify-breadcrumbs.js
 */

const { chromium } = require('playwright');

async function verifyBreadcrumbs() {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  // Navigate to Infineon brand page
  await page.goto('http://localhost:8080/infineon/');
  
  // Take screenshot of breadcrumbs area
  const breadcrumbs = await page.locator('.breadcrumbs');
  await breadcrumbs.screenshot({ path: 'screenshots/breadcrumbs-infineon.png' });
  
  // Get computed styles
  const styles = await breadcrumbs.evaluate(el => {
    const computed = window.getComputedStyle(el);
    return {
      height: computed.height,
      padding: computed.padding,
      lineHeight: computed.lineHeight,
      fontSize: computed.fontSize
    };
  });
  
  console.log('Breadcrumbs computed styles:', styles);
  
  // Navigate to products page
  await page.goto('http://localhost:8080/infineon/products/');
  await breadcrumbs.screenshot({ path: 'screenshots/breadcrumbs-products.png' });
  
  await browser.close();
  console.log('Screenshots saved to screenshots/ folder');
}

verifyBreadcrumbs().catch(console.error);
