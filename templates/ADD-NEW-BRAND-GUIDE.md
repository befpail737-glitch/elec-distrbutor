# 新增品牌流程指南

本文档详细说明如何为BeiLuo网站添加新的品牌子站点。

---

## 目录

1. [准备工作](#准备工作)
2. [目录结构创建](#目录结构创建)
3. [页面创建](#页面创建)
4. [数据文件配置](#数据文件配置)
5. [SEO配置](#seo配置)
6. [验证清单](#验证清单)

---

## 准备工作

### 1.1 收集品牌信息

在开始之前，请准备以下信息：

| 信息项 | 说明 | 示例 |
|--------|------|------|
| 品牌名称 | 官方英文名称 | Texas Instruments |
| 品牌简称 | 用于URL | ti |
| 品牌标语 | 一句话描述 | Analog and Embedded Processing |
| 品牌描述 | 详细介绍 | Texas Instruments is a global semiconductor company... |
| 产品类别 | 主要产品类别 | MCU, Power, Analog |
| 关键词 | SEO关键词 | ti distributor, texas instruments agent |

### 1.2 品牌变量定义

创建品牌时使用的变量模板：

```
{{BRAND_NAME}} = 品牌英文名称
{{BRAND_SLUG}} = 品牌URL简称（小写，无空格）
{{BRAND_TAGLINE}} = 品牌标语
{{BRAND_DESCRIPTION}} = 品牌详细描述
{{BRAND_KEYWORDS}} = SEO关键词
```

---

## 目录结构创建

### 2.1 创建品牌目录

在 `.worktrees/develop/` 目录下执行：

```powershell
# 创建品牌主目录
New-Item -ItemType Directory -Force -Path "{brand-slug}/css"
New-Item -ItemType Directory -Force -Path "{brand-slug}/products/mcu"
New-Item -ItemType Directory -Force -Path "{brand-slug}/products/power"
New-Item -ItemType Directory -Force -Path "{brand-slug}/products/analog"
New-Item -ItemType Directory -Force -Path "{brand-slug}/solutions"
New-Item -ItemType Directory -Force -Path "{brand-slug}/support/selection-guides"
New-Item -ItemType Directory -Force -Path "{brand-slug}/support/application-notes"
New-Item -ItemType Directory -Force -Path "{brand-slug}/team"
```

### 2.2 目录结构示例（以TI为例）

```
ti/                                    # 品牌主目录
├── index.html                         # 品牌首页
├── css/                               # 品牌样式
│   ├── brand.css
│   ├── product-list.css
│   ├── product-detail.css
│   ├── solutions.css
│   └── support.css
├── products/                          # 产品中心
│   ├── index.html                     # 产品分类页
│   ├── mcu/
│   │   ├── index.html                 # MCU产品列表
│   │   └── msp430f5529/               # 具体型号详情
│   │       └── index.html
│   ├── power/
│   │   └── index.html
│   └── analog/
│       └── index.html
├── solutions/                         # 解决方案
│   ├── index.html                     # 解决方案列表
│   └── industrial-automation/         # 具体方案
│       └── index.html
├── support/                           # 技术支持
│   ├── index.html                     # 支持中心
│   ├── selection-guides/
│   │   └── mcu-selection-guide/
│   │       └── index.html
│   └── application-notes/
│       └── power-supply-design/
│           └── index.html
└── team/
    └── index.html                     # FAE团队
```

---

## 页面创建

### 3.1 使用模板创建页面

#### 品牌首页

1. 复制模板文件：
   ```powershell
   Copy-Item "templates/brand-template.html" "{brand-slug}/index.html"
   ```

2. 替换变量：
   ```html
   {{BRAND_NAME}} → Texas Instruments
   {{BRAND_SLUG}} → ti
   {{BRAND_TAGLINE}} → Analog and Embedded Processing
   {{BRAND_DESCRIPTION}} → [品牌详细描述]
   {{BRAND_KEYWORDS}} → ti distributor, texas instruments agent, ti mcu
   ```

#### 产品列表页

1. 复制模板：
   ```powershell
   Copy-Item "templates/product-list-template.html" "{brand-slug}/products/{category}/index.html"
   ```

2. 替换变量：
   ```html
   {{CATEGORY_NAME}} → MCU
   {{CATEGORY_SLUG}} → mcu
   {{CATEGORY_DESCRIPTION}} → [类别描述]
   {{CATEGORY_KEYWORDS}} → ti mcu, texas instruments microcontroller
   ```

#### 产品详情页

1. 复制模板：
   ```powershell
   Copy-Item "templates/product-detail-template.html" "{brand-slug}/products/{category}/{part-number}/index.html"
   ```

2. 替换变量：
   ```html
   {{PART_NUMBER}} → MSP430F5529
   {{PRODUCT_SERIES}} → MSP430
   {{PRODUCT_SHORT_DESCRIPTION}} → Ultra-low-power MCU
   ```

#### 解决方案页面

1. 复制模板：
   ```powershell
   Copy-Item "templates/solutions-list-template.html" "{brand-slug}/solutions/index.html"
   Copy-Item "templates/solution-detail-template.html" "{brand-slug}/solutions/{solution-slug}/index.html"
   ```

#### 技术支持页面

1. 复制模板：
   ```powershell
   Copy-Item "templates/support-list-template.html" "{brand-slug}/support/index.html"
   Copy-Item "templates/support-detail-template.html" "{brand-slug}/support/{category}/{article-slug}/index.html"
   ```

### 3.2 页面变量替换清单

每个页面需要替换的变量：

#### 品牌首页 (brand-template.html)
- ✅ {{BRAND_NAME}}
- ✅ {{BRAND_SLUG}}
- ✅ {{BRAND_TAGLINE}}
- ✅ {{BRAND_DESCRIPTION}}
- ✅ {{BRAND_KEYWORDS}}
- ✅ {{STAT_YEARS}}
- ✅ {{STAT_PRODUCTS}}
- ✅ {{STAT_FAE}}
- ✅ {{PRODUCT_CATEGORIES}}
- ✅ {{SOLUTIONS}}

#### 产品列表页 (product-list-template.html)
- ✅ {{BRAND_NAME}}
- ✅ {{BRAND_SLUG}}
- ✅ {{CATEGORY_NAME}}
- ✅ {{CATEGORY_SLUG}}
- ✅ {{CATEGORY_DESCRIPTION}}
- ✅ {{CATEGORY_KEYWORDS}}
- ✅ {{FILTERS}}
- ✅ {{TABLE_HEADERS}}
- ✅ {{PRODUCT_ROWS}}

#### 产品详情页 (product-detail-template.html)
- ✅ {{BRAND_NAME}}
- ✅ {{BRAND_SLUG}}
- ✅ {{PART_NUMBER}}
- ✅ {{PRODUCT_SERIES}}
- ✅ {{CATEGORY_NAME}}
- ✅ {{CATEGORY_SLUG}}
- ✅ {{STOCK_STATUS}}
- ✅ {{STOCK_TEXT}}
- ✅ {{DATASHEET_URL}}
- ✅ {{SPECIFICATIONS}}
- ✅ {{FEATURES}}
- ✅ {{APPLICATIONS}}

---

## 数据文件配置

### 4.1 创建品牌数据文件

创建 `data/{brand-slug}-products.json`：

```json
{
  "brand": "Texas Instruments",
  "brand_slug": "ti",
  "categories": [
    {
      "id": "mcu",
      "name": "Microcontrollers",
      "description": "Ultra-low-power MCUs for embedded applications",
      "products": [
        {
          "partNumber": "MSP430F5529",
          "series": "MSP430",
          "description": "Ultra-low-power MCU with USB",
          "specs": {
            "flash": "128KB",
            "ram": "8KB",
            "gpio": "63"
          },
          "stock": {
            "status": "in_stock",
            "quantity": 1000
          },
          "url": "/ti/products/mcu/msp430f5529/"
        }
      ]
    }
  ]
}
```

### 4.2 更新品牌列表

编辑 `data/brands.json`，添加新品牌：

```json
{
  "brands": [
    {
      "name": "Texas Instruments",
      "slug": "ti",
      "description": "Analog and Embedded Processing",
      "logo": "/assets/brands/ti-logo.svg",
      "url": "/ti/",
      "featured": true
    }
  ]
}
```

---

## SEO配置

### 5.1 更新Sitemap

编辑 `sitemap.xml`，添加新品牌页面：

```xml
<!-- {BRAND_NAME} Brand Pages -->
<url>
  <loc>https://beiluo.com/{brand-slug}/</loc>
  <lastmod>2024-01-20</lastmod>
  <changefreq>weekly</changefreq>
  <priority>0.9</priority>
</url>
<url>
  <loc>https://beiluo.com/{brand-slug}/products/</loc>
  <lastmod>2024-01-20</lastmod>
  <changefreq>weekly</changefreq>
  <priority>0.8</priority>
</url>
<!-- 添加更多页面... -->
```

### 5.2 关键词布局

每个页面的关键词策略：

| 页面类型 | 主要关键词 | 长尾关键词 |
|----------|-----------|-----------|
| 品牌首页 | {brand} distributor | {brand} agent, authorized {brand} distributor |
| 产品列表 | {brand} {category} | {brand} {category} distributor, buy {brand} {category} |
| 产品详情 | {part-number} | {part-number} datasheet, {part-number} price |
| 解决方案 | {brand} {industry} solution | {industry} design with {brand} |

---

## 验证清单

### 6.1 页面验证

- [ ] 品牌首页可以正常访问
- [ ] 二级TAB导航显示正确
- [ ] 面包屑导航完整
- [ ] 所有链接可点击
- [ ] 响应式布局正常

### 6.2 SEO验证

- [ ] Title标签正确
- [ ] Meta description存在
- [ ] 关键词布局合理
- [ ] Schema.org标记正确
- [ ] Sitemap已更新

### 6.3 功能验证

- [ ] 导航菜单高亮正确
- [ ] 产品表格显示正常
- [ ] Tab切换功能正常
- [ ] 联系表单链接正确

### 6.4 样式验证

- [ ] 品牌色系统一
- [ ] 字体显示正常
- [ ] 图片占位符正确
- [ ] 移动端显示正常

---

## 快速添加脚本

### PowerShell自动化脚本

```powershell
# add-new-brand.ps1
param(
    [Parameter(Mandatory=$true)]
    [string]$BrandName,
    
    [Parameter(Mandatory=$true)]
    [string]$BrandSlug,
    
    [Parameter(Mandatory=$true)]
    [string]$BrandTagline
)

$basePath = ".worktrees/develop"

# 创建目录结构
$directories = @(
    "$basePath/$BrandSlug/css",
    "$basePath/$BrandSlug/products/mcu",
    "$basePath/$BrandSlug/products/power",
    "$basePath/$BrandSlug/solutions",
    "$basePath/$BrandSlug/support/selection-guides",
    "$basePath/$BrandSlug/support/application-notes",
    "$basePath/$BrandSlug/team"
)

foreach ($dir in $directories) {
    New-Item -ItemType Directory -Force -Path $dir
    Write-Host "Created: $dir" -ForegroundColor Green
}

# 复制模板文件
Copy-Item "$basePath/templates/brand-template.html" "$basePath/$BrandSlug/index.html"
Copy-Item "$basePath/templates/product-list-template.html" "$basePath/$BrandSlug/products/index.html"
Copy-Item "$basePath/templates/solutions-list-template.html" "$basePath/$BrandSlug/solutions/index.html"
Copy-Item "$basePath/templates/support-list-template.html" "$basePath/$BrandSlug/support/index.html"

Write-Host "Brand $BrandName structure created successfully!" -ForegroundColor Green
Write-Host "Next steps:" -ForegroundColor Yellow
Write-Host "1. Edit HTML files to replace template variables" -ForegroundColor Yellow
Write-Host "2. Create data/{brand-slug}-products.json" -ForegroundColor Yellow
Write-Host "3. Update sitemap.xml" -ForegroundColor Yellow
```

使用方法：
```powershell
.\add-new-brand.ps1 -BrandName "Texas Instruments" -BrandSlug "ti" -BrandTagline "Analog and Embedded Processing"
```

---

## 模板文件清单

已创建的模板文件：

| 模板文件 | 用途 | 目标页面 |
|----------|------|----------|
| brand-template.html | 品牌首页 | /{brand}/index.html |
| product-list-template.html | 产品列表 | /{brand}/products/{category}/index.html |
| product-detail-template.html | 产品详情 | /{brand}/products/{category}/{part}/index.html |
| solutions-list-template.html | 解决方案列表 | /{brand}/solutions/index.html |
| solution-detail-template.html | 解决方案详情 | /{brand}/solutions/{solution}/index.html |
| support-list-template.html | 技术支持列表 | /{brand}/support/index.html |
| support-detail-template.html | 技术支持详情 | /{brand}/support/{category}/{article}/index.html |

---

## 注意事项

1. **URL规范**：所有URL使用小写，单词间用连字符分隔
2. **图片路径**：使用相对路径 `/assets/brands/{brand-slug}/`
3. **CSS样式**：品牌特定样式放在 `/{brand}/css/` 目录
4. **数据文件**：产品数据使用JSON格式，便于后续自动化处理
5. **SEO优化**：每个页面必须有唯一的title和description

---

**最后更新：** 2026-04-12
