/**
 * Simple breadcrumbs height check using native Node.js
 * This script fetches the CSS and checks the breadcrumbs styling
 */

const http = require('http');
const fs = require('fs');
const path = require('path');

// Read the CSS files
const brandCssPath = path.join(__dirname, '..', 'infineon', 'css', 'brand.css');
const pagesCssPath = path.join(__dirname, '..', 'css', 'pages.css');

console.log('Checking breadcrumbs CSS...\n');

// Check brand.css
if (fs.existsSync(brandCssPath)) {
    const brandCss = fs.readFileSync(brandCssPath, 'utf8');
    
    // Extract breadcrumbs styles
    const breadcrumbsMatch = brandCss.match(/\.breadcrumbs\s*\{([^}]+)\}/s);
    const breadcrumbsListMatch = brandCss.match(/\.breadcrumbs__list\s*\{([^}]+)\}/s);
    
    console.log('=== infineon/css/brand.css ===');
    if (breadcrumbsMatch) {
        console.log('.breadcrumbs {');
        console.log(breadcrumbsMatch[1].trim());
        console.log('}');
    }
    console.log('');
    if (breadcrumbsListMatch) {
        console.log('.breadcrumbs__list {');
        console.log(breadcrumbsListMatch[1].trim());
        console.log('}');
    }
}

console.log('\n=== css/pages.css ===');
if (fs.existsSync(pagesCssPath)) {
    const pagesCss = fs.readFileSync(pagesCssPath, 'utf8');
    
    const breadcrumbsMatch = pagesCss.match(/\.breadcrumbs\s*\{([^}]+)\}/s);
    const breadcrumbsListMatch = pagesCss.match(/\.breadcrumbs__list\s*\{([^}]+)\}/s);
    
    if (breadcrumbsMatch) {
        console.log('.breadcrumbs {');
        console.log(breadcrumbsMatch[1].trim());
        console.log('}');
    }
    console.log('');
    if (breadcrumbsListMatch) {
        console.log('.breadcrumbs__list {');
        console.log(breadcrumbsListMatch[1].trim());
        console.log('}');
    }
}

console.log('\n=== Analysis ===');
console.log('Current breadcrumbs height is set to: 20px');
console.log('If this is still too large, we need to:');
console.log('1. Reduce height to 16px or 18px');
console.log('2. Check if there are other CSS rules overriding these');
console.log('3. Verify the HTML structure');
