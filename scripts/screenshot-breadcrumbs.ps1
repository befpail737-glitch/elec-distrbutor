# Playwright Screenshot Script for Breadcrumbs Verification
# This script will launch a browser, navigate to the page, and screenshot the breadcrumbs

param(
    [string]$Url = "http://localhost:8080/infineon/",
    [string]$OutputPath = "c:\Users\ymlt\Desktop\a5\screenshots\breadcrumbs.png"
)

# Ensure output directory exists
$OutputDir = Split-Path -Parent $OutputPath
if (!(Test-Path $OutputDir)) {
    New-Item -ItemType Directory -Path $OutputDir -Force
}

# Create a Node.js script for Playwright
$NodeScript = @"
const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    
    await page.goto('$Url');
    await page.waitForLoadState('networkidle');
    
    // Get breadcrumbs element
    const breadcrumbs = await page.locator('.breadcrumbs');
    
    // Get computed styles
    const styles = await breadcrumbs.evaluate(el => {
        const computed = window.getComputedStyle(el);
        return {
            height: computed.height,
            paddingTop: computed.paddingTop,
            paddingBottom: computed.paddingBottom,
            lineHeight: computed.lineHeight,
            fontSize: computed.fontSize,
            borderBottomWidth: computed.borderBottomWidth
        };
    });
    
    console.log('Breadcrumbs computed styles:');
    console.log(JSON.stringify(styles, null, 2));
    
    // Take screenshot
    await breadcrumbs.screenshot({ path: '$OutputPath' });
    console.log('Screenshot saved to: $OutputPath');
    
    await browser.close();
})();
"@

$TempScriptPath = "$env:TEMP\playwright-screenshot.js"
$NodeScript | Out-File -FilePath $TempScriptPath -Encoding UTF8

# Run the script
Write-Host "Taking screenshot of breadcrumbs..."
Write-Host "URL: $Url"
Write-Host "Output: $OutputPath"
Write-Host ""

node $TempScriptPath

# Cleanup
Remove-Item $TempScriptPath -ErrorAction SilentlyContinue

Write-Host ""
Write-Host "Done! Check the screenshot at: $OutputPath"
