#!/usr/bin/env node
/**
 * Template Verification Script
 * 验证所有HTML模板是否符合规范
 */

const fs = require('fs');
const path = require('path');

const templatesDir = path.join(__dirname, '..', 'templates');

// 检查清单
const checks = {
  // SEO检查
  seo: {
    title: /<title>.*<\/title>/,
    metaDescription: /<meta name="description"/,
    metaKeywords: /<meta name="keywords"/,
    ogTitle: /<meta property="og:title"/,
    ogDescription: /<meta property="og:description"/,
    ogType: /<meta property="og:type"/,
    ogUrl: /<meta property="og:url"/,
    twitterCard: /<meta name="twitter:card"/,
    twitterTitle: /<meta name="twitter:title"/,
    twitterDescription: /<meta name="twitter:description"/,
    canonical: /<link rel="canonical"/,
    structuredData: /<script type="application\/ld\+json">/,
  },
  // 可访问性检查
  accessibility: {
    charset: /<meta charset="UTF-8">/,
    viewport: /<meta name="viewport"/,
    ariaLabel: /aria-label=/,
    ariaExpanded: /aria-expanded=/,
    ariaCurrent: /aria-current=/,
    role: /role=/,
  },
  // 编码检查
  encoding: {
    utf8: /<meta charset="UTF-8">/,
    noBOM: true, // 将在代码中检查
  }
};

// 颜色输出
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function checkTemplate(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const fileName = path.basename(filePath);
  const results = {
    file: fileName,
    passed: [],
    failed: [],
    warnings: []
  };

  // 检查SEO
  for (const [check, pattern] of Object.entries(checks.seo)) {
    if (pattern.test(content)) {
      results.passed.push(`SEO: ${check}`);
    } else {
      results.failed.push(`SEO: ${check}`);
    }
  }

  // 检查可访问性
  for (const [check, pattern] of Object.entries(checks.accessibility)) {
    if (pattern.test(content)) {
      results.passed.push(`Accessibility: ${check}`);
    } else {
      results.warnings.push(`Accessibility: ${check}`);
    }
  }

  // 检查编码
  if (content.includes('<meta charset="UTF-8">')) {
    results.passed.push('Encoding: UTF-8');
  } else {
    results.failed.push('Encoding: UTF-8');
  }

  // 检查乱码（简单检查是否有�字符）
  if (content.includes('�')) {
    results.failed.push('Encoding: No garbled characters');
  } else {
    results.passed.push('Encoding: No garbled characters');
  }

  return results;
}

function main() {
  log('\n=== Template Verification Report ===\n', 'blue');

  const templateFiles = fs.readdirSync(templatesDir)
    .filter(f => f.endsWith('.html'))
    .map(f => path.join(templatesDir, f));

  let totalPassed = 0;
  let totalFailed = 0;
  let totalWarnings = 0;

  for (const filePath of templateFiles) {
    const results = checkTemplate(filePath);

    log(`\n📄 ${results.file}`, 'blue');
    log('  ' + '─'.repeat(50), 'blue');

    // 显示通过的检查
    if (results.passed.length > 0) {
      log(`  ✅ Passed: ${results.passed.length}`, 'green');
      results.passed.forEach(item => {
        log(`     ✓ ${item}`, 'green');
      });
    }

    // 显示失败的检查
    if (results.failed.length > 0) {
      log(`  ❌ Failed: ${results.failed.length}`, 'red');
      results.failed.forEach(item => {
        log(`     ✗ ${item}`, 'red');
      });
    }

    // 显示警告
    if (results.warnings.length > 0) {
      log(`  ⚠️  Warnings: ${results.warnings.length}`, 'yellow');
      results.warnings.forEach(item => {
        log(`     ! ${item}`, 'yellow');
      });
    }

    totalPassed += results.passed.length;
    totalFailed += results.failed.length;
    totalWarnings += results.warnings.length;
  }

  // 总结
  log('\n' + '═'.repeat(60), 'blue');
  log('SUMMARY', 'blue');
  log('═'.repeat(60), 'blue');
  log(`Total Templates: ${templateFiles.length}`, 'blue');
  log(`Total Checks Passed: ${totalPassed}`, 'green');
  log(`Total Checks Failed: ${totalFailed}`, totalFailed > 0 ? 'red' : 'green');
  log(`Total Warnings: ${totalWarnings}`, totalWarnings > 0 ? 'yellow' : 'green');

  if (totalFailed === 0) {
    log('\n✅ All templates passed verification!', 'green');
  } else {
    log(`\n❌ ${totalFailed} checks failed. Please review and fix.`, 'red');
    process.exit(1);
  }
}

main();
