/**
 * Brand Pages Generator Script
 * Reads JSON data and generates HTML pages for new brands
 * Usage: node generate-brand-pages.js <brand-slug>
 */

const fs = require('fs');
const path = require('path');

// Configuration
const BASE_PATH = path.join(__dirname, '..');
const TEMPLATES_PATH = path.join(BASE_PATH, 'templates');
const BRAND_SLUG = process.argv[2];

if (!BRAND_SLUG) {
    console.error('Usage: node generate-brand-pages.js <brand-slug>');
    console.error('Example: node generate-brand-pages.js semikron');
    process.exit(1);
}

const BRAND_PATH = path.join(BASE_PATH, BRAND_SLUG);

// Utility functions
function readJSON(filePath) {
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error(`Error reading ${filePath}:`, error.message);
        return null;
    }
}

function readTemplate(fileName) {
    try {
        return fs.readFileSync(path.join(TEMPLATES_PATH, fileName), 'utf8');
    } catch (error) {
        console.error(`Error reading template ${fileName}:`, error.message);
        return null;
    }
}

function writeFile(filePath, content) {
    try {
        const dir = path.dirname(filePath);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`✓ Created: ${filePath}`);
    } catch (error) {
        console.error(`Error writing ${filePath}:`, error.message);
    }
}

function replaceVariables(template, variables) {
    let result = template;
    for (const [key, value] of Object.entries(variables)) {
        const regex = new RegExp(`\\{\\{${key}\\}\\}`, 'g');
        result = result.replace(regex, value);
    }
    return result;
}

// Generate Brand Homepage
function generateBrandHomepage(aboutData) {
    const brand = aboutData.brand;
    const template = readTemplate('brand-template.html');
    if (!template) return;

    const variables = {
        BRAND_NAME: brand.name,
        BRAND_SHORT_NAME: brand.shortName,
        BRAND_SLUG: brand.id,
        BRAND_DESCRIPTION: brand.description,
        BRAND_LOGO: brand.logo,
        BRAND_URL: brand.url,
        CERT_TYPE: brand.certification.type,
        CERT_NUMBER: brand.certification.number,
        CERT_VALID: brand.certification.validUntil,
        CERT_REGION: brand.certification.region,
        STAT_PRODUCTS: brand.stats.productsInStock.toLocaleString(),
        STAT_YEARS: brand.stats.yearsPartnership,
        STAT_QUOTE: brand.stats.quoteResponse,
        SEO_TITLE: brand.seo.title,
        SEO_DESCRIPTION: brand.seo.description,
        SEO_KEYWORDS: brand.seo.keywords.join(', ')
    };

    const html = replaceVariables(template, variables);
    writeFile(path.join(BRAND_PATH, 'index.html'), html);
}

// Generate Product Categories Page
function generateProductCategoriesPage(productsData, aboutData) {
    const template = readTemplate('product-categories-template.html');
    if (!template) return;

    const brand = aboutData.brand;
    const categories = productsData.categories;

    // Generate category cards HTML
    const categoryCards = categories.map(cat => `
        <div class="product-category-card">
            <div class="product-category-card__icon">
                <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="8" y="16" width="48" height="32" rx="2"/>
                    <path d="M16 24h32M16 32h32M16 40h32"/>
                </svg>
            </div>
            <h3 class="product-category-card__title">${cat.name}</h3>
            <p class="product-category-card__desc">${cat.description.substring(0, 150)}...</p>
            <ul class="product-category-card__specs">
                <li>${cat.products.length} Products</li>
            </ul>
            <a href="/${brand.id}/products/${cat.id}/" class="product-category-card__link">View Products →</a>
        </div>
    `).join('\n');

    const variables = {
        BRAND_NAME: brand.name,
        BRAND_SLUG: brand.id,
        SEO_TITLE: `${brand.name} Products | ${brand.shortName} Distributor | BeiLuo`,
        SEO_DESCRIPTION: `Browse ${brand.name} products. Genuine ${brand.shortName} components with technical support from BeiLuo.`,
        CATEGORY_CARDS: categoryCards
    };

    const html = replaceVariables(template, variables);
    writeFile(path.join(BRAND_PATH, 'products', 'index.html'), html);
}

// Generate Product List Page
function generateProductListPage(category, productsData, aboutData) {
    const template = readTemplate('product-list-template.html');
    if (!template) return;

    const brand = aboutData.brand;
    
    // Generate product table rows
    const productRows = category.products.map(prod => `
        <tr>
            <td><a href="/${brand.id}/products/${category.id}/${prod.id}/" class="product-link">${prod.partNumber}</a></td>
            <td>${prod.voltage}</td>
            <td>${prod.current}</td>
            <td>${prod.package}</td>
            <td>${prod.configuration || prod.type || 'N/A'}</td>
            <td><span class="stock-badge stock-badge--${prod.stock.status === 'in_stock' ? 'in' : 'out'}">${prod.stock.status === 'in_stock' ? `In Stock (${prod.stock.quantity})` : 'Inquiry'}</span></td>
            <td><a href="/${brand.id}/products/${category.id}/${prod.id}/" class="btn btn--small">View Details</a></td>
        </tr>
    `).join('\n');

    const variables = {
        BRAND_NAME: brand.name,
        BRAND_SLUG: brand.id,
        CATEGORY_NAME: category.name,
        CATEGORY_SLUG: category.id,
        CATEGORY_DESCRIPTION: category.description,
        SEO_TITLE: `${brand.name} ${category.name} | ${brand.shortName} Distributor | BeiLuo`,
        SEO_DESCRIPTION: `${brand.name} ${category.name} for industrial applications. Genuine ${brand.shortName} products with technical support.`,
        PRODUCT_ROWS: productRows
    };

    const html = replaceVariables(template, variables);
    writeFile(path.join(BRAND_PATH, 'products', category.id, 'index.html'), html);
}

// Generate Product Detail Page
function generateProductDetailPage(product, category, productsData, aboutData) {
    const template = readTemplate('product-detail-template.html');
    if (!template) return;

    const brand = aboutData.brand;

    const variables = {
        BRAND_NAME: brand.name,
        BRAND_SLUG: brand.id,
        CATEGORY_NAME: category.name,
        CATEGORY_SLUG: category.id,
        PART_NUMBER: product.partNumber,
        PRODUCT_ID: product.id,
        PRODUCT_SERIES: product.series,
        PRODUCT_VOLTAGE: product.voltage,
        PRODUCT_CURRENT: product.current,
        PRODUCT_PACKAGE: product.package,
        PRODUCT_TECHNOLOGY: product.technology || '',
        PRODUCT_CONFIGURATION: product.configuration || '',
        STOCK_STATUS: product.stock.status,
        STOCK_QUANTITY: product.stock.quantity,
        DATASHEET_URL: product.datasheet,
        SEO_TITLE: `${brand.name} ${product.partNumber} | ${product.series} | BeiLuo`,
        SEO_DESCRIPTION: `${brand.name} ${product.partNumber} ${product.series}. ${product.voltage} ${product.current} with technical support from BeiLuo.`,
        FEATURES_LIST: product.features.map(f => `<li>${f}</li>`).join('\n'),
        APPLICATIONS_LIST: product.applications.map(a => `<li>${a}</li>`).join('\n')
    };

    const html = replaceVariables(template, variables);
    writeFile(path.join(BRAND_PATH, 'products', category.id, product.id, 'index.html'), html);
}

// Generate Solutions List Page
function generateSolutionsListPage(solutionsData, aboutData) {
    const template = readTemplate('solutions-list-template.html');
    if (!template) return;

    const brand = aboutData.brand;
    const solutions = solutionsData.solutions;

    // Generate solution cards
    const solutionCards = solutions.map(sol => `
        <div class="solution-card">
            <div class="solution-card__image">
                <svg viewBox="0 0 400 200" class="solution-card__svg">
                    <rect width="100%" height="100%" fill="#f5f5f5"/>
                    <text x="200" y="100" text-anchor="middle" fill="#333" font-size="16">${sol.title}</text>
                </svg>
            </div>
            <div class="solution-card__content">
                <span class="solution-card__category">${sol.category}</span>
                <h3 class="solution-card__title">${sol.title}</h3>
                <p class="solution-card__desc">${sol.description.substring(0, 150)}...</p>
                <a href="/${brand.id}/solutions/${sol.id}/" class="solution-card__link">Learn More →</a>
            </div>
        </div>
    `).join('\n');

    const variables = {
        BRAND_NAME: brand.name,
        BRAND_SLUG: brand.id,
        SEO_TITLE: `${brand.name} Solutions | Industry Applications | BeiLuo`,
        SEO_DESCRIPTION: `${brand.name} power semiconductor solutions for industrial applications. Technical support from BeiLuo.`,
        SOLUTION_CARDS: solutionCards
    };

    const html = replaceVariables(template, variables);
    writeFile(path.join(BRAND_PATH, 'solutions', 'index.html'), html);
}

// Generate Support List Page
function generateSupportListPage(supportData, aboutData) {
    const template = readTemplate('support-list-template.html');
    if (!template) return;

    const brand = aboutData.brand;
    const categories = supportData.categories;
    const articles = supportData.articles;

    // Generate category cards
    const categoryCards = categories.map(cat => {
        const catArticles = articles.filter(a => a.category === cat.id);
        return `
        <div class="support-category-card">
            <div class="support-category-card__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
            </div>
            <h3 class="support-category-card__title">${cat.name}</h3>
            <p class="support-category-card__desc">${cat.description}</p>
            <ul class="support-category-card__articles">
                ${catArticles.map(a => `<li><a href="/${brand.id}/support/${a.id}/">${a.title}</a></li>`).join('\n')}
            </ul>
        </div>
    `}).join('\n');

    // Generate article cards
    const articleCards = articles.map(article => `
        <article class="article-card">
            <div class="article-card__meta">
                <span class="article-card__category">${categories.find(c => c.id === article.category)?.name || article.category}</span>
                <span class="article-card__date">${article.date}</span>
            </div>
            <h3 class="article-card__title">${article.title}</h3>
            <p class="article-card__excerpt">${article.excerpt}</p>
            <div class="article-card__footer">
                <span class="article-card__author">By ${article.author}</span>
                <span class="article-card__readtime">${article.readTime}</span>
            </div>
            <a href="/${brand.id}/support/${article.id}/" class="article-card__link">Read Article →</a>
        </article>
    `).join('\n');

    const variables = {
        BRAND_NAME: brand.name,
        BRAND_SLUG: brand.id,
        SEO_TITLE: `${brand.name} Technical Support | Application Guides | BeiLuo`,
        SEO_DESCRIPTION: `${brand.name} technical support resources including selection guides, application notes, and troubleshooting.`,
        CATEGORY_CARDS: categoryCards,
        ARTICLE_CARDS: articleCards
    };

    const html = replaceVariables(template, variables);
    writeFile(path.join(BRAND_PATH, 'support', 'index.html'), html);
}

// Main execution
function main() {
    console.log(`\n=== Generating pages for brand: ${BRAND_SLUG} ===\n`);

    // Read JSON data files
    const aboutData = readJSON(path.join(BRAND_PATH, 'about-brand.json'));
    const productsData = readJSON(path.join(BRAND_PATH, 'products.json'));
    const solutionsData = readJSON(path.join(BRAND_PATH, 'solutions.json'));
    const supportData = readJSON(path.join(BRAND_PATH, 'support.json'));

    if (!aboutData) {
        console.error(`Error: about-brand.json not found in ${BRAND_PATH}`);
        process.exit(1);
    }

    console.log(`Found brand: ${aboutData.brand.name}\n`);

    // Generate pages
    console.log('Generating pages...\n');

    if (aboutData) {
        console.log('1. Brand Homepage...');
        generateBrandHomepage(aboutData);
    }

    if (productsData && aboutData) {
        console.log('2. Product Categories Page...');
        generateProductCategoriesPage(productsData, aboutData);

        console.log('3. Product List Pages...');
        productsData.categories.forEach(category => {
            generateProductListPage(category, productsData, aboutData);
            
            console.log(`   - ${category.name} products...`);
            category.products.forEach(product => {
                generateProductDetailPage(product, category, productsData, aboutData);
            });
        });
    }

    if (solutionsData && aboutData) {
        console.log('4. Solutions List Page...');
        generateSolutionsListPage(solutionsData, aboutData);
    }

    if (supportData && aboutData) {
        console.log('5. Support List Page...');
        generateSupportListPage(supportData, aboutData);
    }

    console.log('\n=== Generation Complete ===\n');
    console.log('Next steps:');
    console.log('1. Review generated HTML files');
    console.log('2. Update brands/index.html to add brand card');
    console.log('3. Update sitemap.xml');
    console.log('4. Test all pages in browser\n');
}

main();
