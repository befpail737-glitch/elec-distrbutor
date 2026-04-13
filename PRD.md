# BeiLuo Electronic Components Distributor Website - Product Requirements Document

## 1. 项目概述

### 1.1 项目背景
BeiLuo（www.elec-distributor.com）是一家专业的电子元器件核心代理商，为全球客户提供正品原装现货、技术支持和优势价格。本项目旨在构建一个SEO/GEO优化的纯英文静态网站，支持100+品牌子目录，提升Google搜索排名和AI推荐曝光。

### 1.2 项目目标
- 创建主站 + 100+品牌子目录的完整网站架构
- 实现SEO优化，提升核心关键词排名
- 实现GEO优化，提升AI搜索引擎引用率
- 建立可复制的品牌子目录生成流程

### 1.3 目标用户
- 电子工程师和采购人员
- 全球B2B客户（美国、德国、印度、越南、韩国等）
- 寻找授权代理商的终端客户

---

## 2. 网站架构

### 2.1 主站结构
```
/
├── index.html                    # 首页
├── brands/                       # 品牌列表页
│   └── index.html
├── news/                         # 新闻中心
│   ├── index.html               # 新闻列表
│   └── [slug].html              # 新闻详情页
├── about/                        # 关于我们
│   └── index.html
├── contact/                      # 联系我们
│   └── index.html
└── assets/                       # 静态资源
    ├── css/
    ├── js/
    └── images/
```

### 2.2 品牌子目录结构（以Infineon为例）
```
/infineon/
├── index.html                    # 品牌首页（关于品牌）
├── products/                     # 产品中心
│   ├── index.html               # 产品分类列表
│   ├── [category]/              # 二级产品分类
│   │   ├── index.html          # 型号表格页（含侧边栏产品分类导航）
│   │   └── [model].html        # 型号详情页
├── solutions/                    # 解决方案
│   ├── index.html               # 解决方案列表
│   └── [solution].html          # 解决方案详情
├── support/                      # 技术支持
│   ├── index.html               # 支持文章列表（含分类Tab）
│   ├── guides/                  # 选型指南分类
│   ├── application-notes/       # 应用笔记分类
│   ├── troubleshooting/         # 问题排查分类
│   ├── product-reviews/         # 新品评测分类
│   └── [article].html           # 支持文章详情
├── team/                         # FAE工程师团队
│   └── [engineer].html          # 工程师简介页
└── assets/                       # 品牌专属资源
```

### 2.3 品牌子目录二级导航菜单
每个品牌子目录页面必须包含**Tab二级导航菜单**：
- **关于品牌** (About) - 品牌简介、核心产品、解决方案概览
- **产品中心** (Products) - 产品分类列表
- **解决方案** (Solutions) - 行业解决方案
- **技术支持** (Support) - 技术文章、选型指南

导航样式：固定在页面顶部下方，当前选中项高亮显示

---

## 3. 页面需求

### 3.1 首页 (Homepage)

#### 3.1.1 SEO Meta
- **Title**: Electronic Components Core Distributor | Genuine Original Stock | BeiLuo
- **Description**: BeiLuo is a core distributor of electronic components, providing long-term stable supply of genuine original stock. Technical support and competitive pricing available.
- **Keywords**: BeiLuo, electronic components distributor, chip stock, authorized distributor

#### 3.1.2 页面模块
1. **Hero Banner**
   - 全宽设计，渐变背景或抽象几何图形
   - 主标题：Your Trusted Electronic Components Distributor
   - 副标题：Authorized distributor with local inventory and fast delivery
   - CTA按钮：Get Quote | Browse Products

2. **Core Advantages (Why Choose Us)**
   - 授权代理商认证
   - 本地仓库备货
   - 快速交付能力
   - 专业技术支持团队

3. **Featured Brands**
   - 展示核心品牌Logo网格
   - 点击跳转品牌子目录

4. **Latest News**
   - 展示最新3-5条新闻
   - 包含发布日期和摘要

5. **Final CTA**
   - 底部行动号召区域
   - Contact Us按钮

### 3.2 品牌列表页 (Brands)

#### 3.2.1 功能需求
- 展示所有品牌卡片网格
- 每个卡片包含：品牌Logo、品牌名称、主要产品类别、进入品牌页链接
- 支持按字母排序和分类筛选

#### 3.2.2 SEO Meta
- **Title**: Authorized Electronic Component Brands | BeiLuo Distributor
- **Description**: Explore our portfolio of 100+ authorized electronic component brands including Infineon, TI, ST, ADI, and more.

### 3.3 品牌子目录首页 (Brand Homepage)

#### 3.3.1 页面结构（以Infineon为例）
1. **品牌Hero区域**
   - 品牌Logo和名称
   - 品牌简介（200-300字）
   - 授权证书展示

2. **核心产品领域**
   - IGBT Modules
   - MOSFETs
   - SiC/GaN Devices
   - 每个类别链接到产品分类页

3. **解决方案与应用**
   - 新能源汽车
   - 工业自动化
   - 可再生能源
   - 每个方案链接到详情页

4. **最新技术支持**
   - 展示最新3篇技术文章

#### 3.3.2 SEO Meta
- **Title**: Infineon Distributor | Authorized Agent | BeiLuo
- **Description**: Authorized Infineon distributor offering IGBT, MOSFET, SiC modules with local stock and technical support.
- **Keywords**: Infineon distributor, Infineon agent, Infineon IGBT distributor

### 3.4 产品中心

#### 3.4.1 产品分类列表页
- 展示品牌下所有产品分类
- 每个分类卡片包含：分类图标、名称、描述、产品数量、进入链接

#### 3.4.2 二级产品分类页（型号表格页）
- **页面顶部描述**：H1标题下方增加200-300字原创描述
  - 介绍产品分类的总体特点、主要系列、核心优势、应用领域
  - 自然融入"品牌+产品+distributor"、"品牌+产品+selection"等关键词
  - 包含"选型指南"入口链接
- **侧边栏产品分类导航**：左侧显示所有产品分类快速导航
- **动态表格列**：根据产品类型显示不同参数列
  - IGBT: 型号、系列、电压、电流、封装、库存状态
  - MOSFET: 型号、系列、电压、电流、Rds(on)、封装、库存状态
- **筛选功能**：每列支持筛选
- **点击型号**：跳转到型号详情页
- **Schema.org**: Product结构化数据

#### 3.4.3 型号详情页
- **首屏Hero区域（双栏布局）**
  - 左侧：产品图片/占位图
  - 右侧：型号标题、库存状态标签、简短描述、CTA按钮组

- **Tab选项卡内容**
  - 产品概述
    - **代理商点评/应用解读**：由FAE工程师撰写的专业解读（带主观色彩）
  - 规格参数（斑马纹表格）
  - 应用电路
  - 相关文档

- **替代料号和配套料号**
  - 提供可直接替代的型号
  - 推荐配套使用的相关型号

- **FAQ模块**
  - 3-5个工程师最常问的常见问题
  - FAQPage Schema标记

- **配套料号推荐**
  - 相关型号卡片轮播

- **多样化CTA（根据工程师不同阶段需求）**
  - "Download Selection Guide" - 信息收集阶段
  - "Request Samples" - 评估阶段
  - "Get Quote" - 采购阶段
  - "Consult FAE" - 研发阶段（链接到联系表单并注明转交FAE）

### 3.5 解决方案

#### 3.5.1 解决方案列表页
- 展示所有行业解决方案卡片
- 每个卡片包含：封面图、标题、摘要、应用场景标签、进入链接

#### 3.5.2 解决方案详情页
- **头部Banner**：全宽背景图，叠加标题、发布日期、分类标签
- **内容结构**
  - 方案概述
  - 方案框图（Block Diagram）
  - 核心优势
  - 推荐物料清单（BOM List）- 链接到产品页
  - 应用场景
  - 客户案例
- **Schema**: Article结构化数据

### 3.6 技术支持

#### 3.6.1 支持文章列表页
- **分类Tab切换**：选型指南、应用笔记、问题排查、新品评测
- **标签系统**：每篇文章打上技术标签（如IGBT, AURIX, BLDC Motor, CAN Bus）
  - 点击标签聚合所有相关文章
  - 改善用户体验和内部链接结构
- 文章卡片列表

#### 3.6.2 技术支持详情页
- **布局**：左侧文章区 + 右侧Sticky侧边栏
- **文章区**
  - 作者栏（FAE工程师头像、姓名、发布日期，链接到作者简介页）
  - 正文内容（max-width: 800px, line-height: 1.8）
  - H2/H3标题带左侧竖线装饰
  - 代码块样式
  - 引用块样式
  - **上下文链接**：产品型号链接到产品分类页，相关概念链接到其他文章
  - **相关文章模块**：文章末尾推荐3-5篇最相关的其他文章
- **侧边栏**
  - 文章目录（Table of Contents）
  - 相关PDF下载
  - 向工程师提问表单
- **Schema**: TechArticle结构化数据

#### 3.6.3 FAE工程师团队页面
- 展示所有FAE工程师卡片
- 每个工程师包含：真实姓名、照片、技术专长、从业经验、联系方式
- 点击工程师卡片进入个人简介页
- 每篇文章的作者处链接到对应的工程师简介页

### 3.7 新闻中心

#### 3.7.1 新闻列表页
- **分离展示**：公司新闻和行业动态分开显示（不在同一板块）
  - **公司新闻**：展示公司内部动态、活动、公告
  - **行业动态**：优化行业热点关键词，引用权威来源并加入解读
- 文章卡片包含：封面图、标题、摘要、发布日期、分类

#### 3.7.2 新闻详情页
- **布局**：左侧正文区 + 右侧侧边栏（新闻导航）
- **头部Banner**：全宽背景，叠加标题、日期、分类
- **正文区**
  - 单栏布局，max-width: 800px
  - 内容阅读聚焦
- **侧边栏（新闻导航）**
  - 最新公司新闻列表
  - 最新行业动态列表
  - 相关新闻推荐
- **底部**
  - 社交媒体分享按钮
  - 推荐阅读（3篇最新行业动态）
- **Schema**: NewsArticle结构化数据（包含标题、作者、发布日期、发布机构等）

### 3.8 关于我们

#### 3.8.1 SEO关键词要求
在整个页面文本中自然地使用以下关键词：
- "electronic components distributor"（电子元件代理）
- "chip stock" / "semiconductor stock"（芯片现货）
- "authorized distributor"（授权代理）
- "genuine original stock"（正品原装现货）

#### 3.8.2 内容模块
- 公司简介
- 发展历程（时间线）
- 核心优势
- 服务客户案例
- 报关单展示（提升信任度和权威性）

### 3.9 联系我们

#### 3.9.1 内容模块
- 全球办公室联系信息（来自contact.txt）
- 联系表单
- 右侧边栏：WhatsApp (+86 15013702378)、WeChat (+86 18612518271)

---

## 4. 设计要求

### 4.1 视觉风格
- **设计风格**：现代极简主义
- **主色调**：科技蓝 #0072ce
- **辅助色**：中性灰 #f8f9fa，橙色 #ff6b35（CTA按钮）
- **字体**：Inter / Roboto（Google Fonts）
- **圆角**：8px（元素），12px（组件）
- **阴影**：box-shadow: 0 4px 6px rgba(0,0,0,0.07)

### 4.2 布局系统
- **CSS Grid + Flexbox** 响应式布局
- **12列网格系统**
- **桌面端**：最大宽度1319px，居中
- **平板端**：768px-1199px
- **移动端**：最大宽度100%
- **最小点击区域**：44px

### 4.3 组件规范

#### 4.3.1 按钮
- **主按钮**：橙色背景，白色文字，悬停阴影加深
- **次按钮**：蓝色描边，蓝色文字
- **悬停效果**：轻微上移 + 阴影增强

#### 4.3.2 卡片
- 圆角12px，轻微阴影
- 悬停效果：提升 + 阴影增强

#### 4.3.3 导航栏
- 滚动时固定
- 半透明背景（backdrop-filter: blur）

### 4.4 响应式断点
- **Desktop**: >= 1200px
- **Tablet**: 768px - 1199px
- **Mobile**: < 768px

---

## 5. SEO/GEO要求

### 5.1 URL结构
- 静态URL，语义化路径
- 面包屑导航（Breadcrumbs）
- XML网站地图

### 5.2 Meta标签
- 每个页面独特的Title（≤60字符）
- 每个页面独特的Description（≤160字符）
- Keywords（3-5个核心词）
- Open Graph标签

### 5.3 结构化数据
- **Organization**: 关于我们页
- **Product**: 产品详情页
- **FAQPage**: 产品页FAQ模块
- **Article/NewsArticle**: 新闻、解决方案、技术支持页
- **BreadcrumbList**: 所有页面

### 5.4 图片优化
- 所有图片添加alt属性
- 使用WebP格式（带降级方案）
- 懒加载

### 5.5 关键词策略（以Infineon为例）
- **核心词**: Infineon distributor
- **地域长尾词**: Infineon distributor USA, Infineon distributor Germany, Infineon distributor India...
- **产品长尾词**: Infineon IGBT distributor, Infineon MOSFET distributor, Infineon SiC distributor
- **资质长尾词**: Infineon authorized distributor, Infineon tier 1 distributor
- **问题型长尾词**: How to select Infineon MCU, Infineon distributor list...

### 5.6 GEO优化
- 内容结构化，便于AI引用
- Answer First写作风格
- 表格、列表、FAQ格式
- E-E-A-T信号强化

### 5.7 面包屑导航（Breadcrumbs）
所有页面必须包含面包屑导航，格式如下：
- **首页**: Home
- **品牌列表页**: Home > Brands
- **品牌首页**: Home > Infineon
- **产品分类页**: Home > Infineon > Products
- **型号表格页**: Home > Infineon > Products > IGBT Modules
- **型号详情页**: Home > Infineon > Products > IGBT Modules > FF600R12ME4
- **解决方案列表页**: Home > Infineon > Solutions
- **解决方案详情页**: Home > Infineon > Solutions > EV Charging
- **技术支持列表页**: Home > Infineon > Support
- **技术支持详情页**: Home > Infineon > Support > IGBT Selection Guide
- **新闻列表页**: Home > News
- **新闻详情页**: Home > News > Article Title
- **关于我们页**: Home > About Us
- **联系我们页**: Home > Contact Us

面包屑导航要求：
- 使用Schema.org BreadcrumbList结构化数据
- 当前页面不添加链接
- 使用" > "作为分隔符
- 支持点击返回上一级

---

## 6. 技术要求

### 6.1 技术栈
- **前端**: 纯HTML5 + CSS3 + 原生JavaScript
- **样式**: CSS变量统一管理
- **交互**: 原生JS（表格筛选、Tab切换、移动端菜单）
- **图标**: SVG矢量图标
- **图片**: SVG抽象背景图

### 6.2 开发铁律（强制遵循）
1. **纯英文网站** - 所有内容必须使用英文
2. **URL层级结构** - /brands/（品牌列表页）和/infineon/、/ti/等品牌子目录是同一层级，不是包含关系
3. **无404/空链接** - 所有链接必须有效，禁止放置404或空链接
4. **独特页面标题** - 列表页和分类页、详情页都必须设置独特、包含关键词、准确描述内容的标题
5. **动态表格列** - 二级产品分类页采用动态表格列，根据品牌和产品类型显示不同参数，点击型号打开型号详情页
6. **完全按照开发步骤** - 严格按照开发步骤开发，不要遗漏任何步骤
7. **审查测试规则** - 每个单元模块完成后立即审查和测试，不等待阶段结束；审查和测试是该模块的一部分，不是独立阶段；失败立即修复，修复后重新测试，通过后才继续下一个模块；集成测试在所有单元通过后才开始
8. **品牌差异化** - 新增品牌的产品分类、应用行业、解决方案都和Infineon不一样，要依据新增品牌的产品、应用行业、解决方案来定制JSON内容
9. **检查要求** - 依据prompt2.md检查PRD至少3遍，检查todo_write至少3遍
10. **代码审查工具** - 用requesting-code-review和receiving-code-review对每个单元做代码审查和测试
11. **验证要求** - 用skill:verification-before-completion验证html模板和JSON模板
12. **模板完整性** - 保证生成html模板、json模板全部完整
13. **技能调用** - 开发过程要调用superpowers skills技能集

### 6.3 性能要求
- 首屏加载 < 3秒
- Lighthouse性能评分 > 90
- 支持CDN加速

### 6.4 可访问性
- WCAG AA标准
- 键盘导航支持
- 语义化HTML标签
- 足够的颜色对比度

### 6.5 SVG图标规范

#### 6.5.1 产品类别图标
为以下产品类别设计SVG矢量图标：
- MCU微控制器
- IGBT功率模块
- MOSFET场效应管
- SiC/GaN宽禁带半导体
- 传感器
- 电源管理IC
- 连接器/继电器
- 被动元件（电容、电阻、电感）
- 存储芯片
- FPGA/处理器

#### 6.5.2 页面功能图标
- 新闻/文章图标
- 关于我们图标
- 联系我们图标
- 下载图标
- 搜索图标
- 菜单图标
- 社交媒体图标

#### 6.5.3 抽象背景图
- 电路板纹理图案
- 科技线条背景
- 几何抽象图案
- 渐变背景

#### 6.5.4 Logo设计
- 公司名称：BeiLuo
- 副标题：China's Top 8 Electronic Components Distributor（放置在Logo右侧）
- 格式：SVG矢量
- 风格：简洁、专业、科技感

### 6.6 XML网站地图

#### 6.6.1 主站网站地图 (sitemap.xml)
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://elec-distributor.com/</loc>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://elec-distributor.com/brands/</loc>
    <priority>0.9</priority>
  </url>
  <!-- 其他主站页面 -->
</urlset>
```

#### 6.6.2 品牌子目录网站地图 (/infineon/sitemap.xml)
包含品牌下所有页面URL：
- 品牌首页
- 产品分类页
- 型号详情页
- 解决方案页
- 技术支持文章页

#### 6.6.3 网站地图索引 (sitemap-index.xml)
```xml
<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>https://elec-distributor.com/sitemap.xml</loc>
  </sitemap>
  <sitemap>
    <loc>https://elec-distributor.com/infineon/sitemap.xml</loc>
  </sitemap>
  <!-- 其他品牌网站地图 -->
</sitemapindex>
```

#### 6.6.4 robots.txt
```
User-agent: *
Allow: /
Sitemap: https://elec-distributor.com/sitemap-index.xml
```

---

## 7. 内容要求

### 7.1 Infineon品牌内容规划

#### 7.1.1 产品分类（功率器件）
1. **IGBT Modules**
   - 系列：EconoDUAL, EconoPACK, PrimePACK
   - 每个系列2个型号详情页

2. **MOSFETs**
   - 系列：OptiMOS, CoolMOS
   - 每个系列2个型号详情页

3. **SiC/GaN Devices**
   - 系列：CoolSiC, GaN
   - 每个系列2个型号详情页

#### 7.1.2 解决方案（4篇）
1. EV Charging Solutions
2. Solar Inverter Solutions
3. Industrial Motor Drive Solutions
4. UPS Solutions

#### 7.1.3 技术支持（4篇）
1. IGBT Selection Guide
2. MOSFET Application Note
3. SiC Device Troubleshooting
4. New Product Review: CoolSiC MOSFET

### 7.2 内容质量标准
- 纯英文，专业B2B语气
- 每篇文章不少于800字
- 包含客户案例和FAE见解
- 自然融入关键词
- 差异化（与竞争对手不同）

---

## 8. 品牌子目录生成流程

### 8.1 模板系统
1. **HTML模板**: 可复用的页面结构
2. **JSON数据**: 每个品牌的独立数据文件
3. **生成脚本**: JS脚本读取JSON，批量生成HTML

### 8.2 JSON数据结构详细规范

#### 8.2.1 about_brand.json
```json
{
  "brand": {
    "name": "Infineon Technologies",
    "slug": "infineon",
    "tagline": "Semiconductor Solutions for a Connected World",
    "description": "Detailed brand description (300-500 words)",
    "founded": "1999",
    "headquarters": "Neubiberg, Germany",
    "logo": "/assets/images/brands/infineon-logo.svg",
    "certificates": [
      {
        "name": "Authorization Certificate",
        "image": "/assets/images/certs/infineon-auth.jpg",
        "issued_date": "2024-01-01"
      }
    ],
    "core_products": [
      {
        "category": "IGBT Modules",
        "description": "High-power switching applications",
        "image": "/assets/images/products/igbt-icon.svg",
        "link": "/infineon/products/igbt/"
      }
    ],
    "key_applications": [
      "EV Charging", "Solar Inverters", "Industrial Drives"
    ],
    "seo": {
      "title": "Infineon Distributor | Authorized Agent | BeiLuo",
      "description": "Authorized Infineon distributor offering IGBT, MOSFET, SiC modules...",
      "keywords": "Infineon distributor, Infineon agent, Infineon IGBT distributor",
      "schema": {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Infineon Technologies"
      }
    }
  }
}
```

#### 8.2.2 products.json
```json
{
  "categories": [
    {
      "id": "igbt-modules",
      "name": "IGBT Modules",
      "slug": "igbt-modules",
      "description": "High-performance IGBT modules for industrial applications...",
      "icon": "/assets/images/icons/igbt.svg",
      "image": "/assets/images/categories/igbt.jpg",
      "series": ["EconoDUAL", "EconoPACK", "PrimePACK"],
      "seo": {
        "title": "Infineon IGBT Modules Distributor | BeiLuo",
        "description": "..."
      },
      "models": [
        {
          "model": "FF600R12ME4",
          "series": "EconoDUAL",
          "voltage": "1200V",
          "current": "600A",
          "package": "EconoDUAL 3",
          "stock_status": "In Stock",
          "datasheet": "/datasheets/FF600R12ME4.pdf",
          "description": "...",
          "applications": ["EV Charging", "Solar Inverters"],
          "faqs": [
            {
              "question": "What is the maximum junction temperature?",
              "answer": "The maximum junction temperature is 175°C..."
            }
          ],
          "related_models": ["FF450R12ME4", "FF300R12ME4"],
          "schema": {
            "@type": "Product",
            "name": "FF600R12ME4",
            "brand": "Infineon"
          }
        }
      ]
    }
  ]
}
```

#### 8.2.3 solutions.json
```json
{
  "solutions": [
    {
      "id": "ev-charging",
      "title": "EV Charging Station Solutions",
      "slug": "ev-charging-station",
      "category": "Automotive",
      "excerpt": "Complete power solutions for electric vehicle charging infrastructure...",
      "content": "Full article content (800+ words)...",
      "image": "/assets/images/solutions/ev-charging.jpg",
      "block_diagram": "/assets/images/solutions/ev-charging-diagram.svg",
      "advantages": [
        "High efficiency > 98%",
        "Wide input voltage range",
        "Compact design"
      ],
      "bom_list": [
        {
          "component": "IGBT Module",
          "model": "FF600R12ME4",
          "link": "/infineon/products/igbt-modules/FF600R12ME4/"
        }
      ],
      "applications": ["Public Charging", "Fleet Charging", "Home Charging"],
      "case_studies": [
        {
          "client": "Major EV Manufacturer",
          "description": "Deployed 1000+ charging stations..."
        }
      ],
      "author": {
        "name": "John Smith",
        "title": "Senior FAE",
        "avatar": "/assets/images/team/john-smith.jpg"
      },
      "published_date": "2026-01-15",
      "seo": {
        "title": "EV Charging Solutions | Infineon Distributor | BeiLuo",
        "description": "..."
      },
      "schema": {
        "@type": "Article",
        "headline": "EV Charging Station Solutions"
      }
    }
  ]
}
```

#### 8.2.4 support.json
```json
{
  "categories": [
    {
      "id": "selection-guides",
      "name": "Selection Guides",
      "slug": "selection-guides"
    },
    {
      "id": "application-notes",
      "name": "Application Notes",
      "slug": "application-notes"
    },
    {
      "id": "troubleshooting",
      "name": "Troubleshooting",
      "slug": "troubleshooting"
    },
    {
      "id": "product-reviews",
      "name": "Product Reviews",
      "slug": "product-reviews"
    }
  ],
  "articles": [
    {
      "id": "igbt-selection-guide",
      "title": "IGBT Selection Guide for Industrial Applications",
      "slug": "igbt-selection-guide",
      "category": "selection-guides",
      "tags": ["IGBT", "Power Electronics", "Industrial"],
      "excerpt": "How to select the right IGBT for your application...",
      "content": "Full article content (800+ words)...",
      "toc": [
        {"id": "introduction", "title": "Introduction"},
        {"id": "key-parameters", "title": "Key Parameters"},
        {"id": "selection-process", "title": "Selection Process"}
      ],
      "author": {
        "name": "Michael Chen",
        "title": "Power Electronics FAE",
        "avatar": "/assets/images/team/michael-chen.jpg",
        "bio": "10+ years experience in power electronics..."
      },
      "published_date": "2026-01-10",
      "updated_date": "2026-03-15",
      "related_articles": ["mosfet-selection-guide", "sic-device-guide"],
      "downloads": [
        {
          "name": "IGBT Selection Worksheet",
          "file": "/downloads/igbt-selection-worksheet.xlsx"
        }
      ],
      "seo": {
        "title": "IGBT Selection Guide | Infineon Distributor | BeiLuo",
        "description": "..."
      },
      "schema": {
        "@type": "TechArticle",
        "headline": "IGBT Selection Guide"
      }
    }
  ]
}
```

### 8.3 新增品牌流程
1. 创建品牌子目录
2. 生成品牌专属JSON数据
3. 运行生成脚本创建HTML页面
4. 质量检查和验证
5. 部署上线

### 8.4 代码审查与质量保证流程

#### 8.4.1 审查原则
- **每个单元模块完成后立即审查**，不等待阶段结束
- **审查是模块的一部分**，不是独立阶段
- **失败立即修复**，修复后重新测试，通过后才继续

#### 8.4.2 HTML模板检查清单
- [ ] 所有页面包含完整的SEO Meta标签（Title, Description, Keywords）
- [ ] 所有页面包含Open Graph标签
- [ ] 所有页面包含Schema.org JSON-LD结构化数据
- [ ] 所有图片有alt属性
- [ ] 所有链接有效，无404或空链接
- [ ] 面包屑导航正确实现
- [ ] 响应式设计在Desktop/Tablet/Mobile正常显示
- [ ] 导航栏和页脚一致
- [ ] 语义化HTML标签使用正确
- [ ] 颜色对比度符合WCAG AA标准

#### 8.4.3 CSS样式检查清单
- [ ] 使用CSS变量统一管理颜色和尺寸
- [ ] 响应式断点正确实现
- [ ] 按钮和卡片悬停效果正常
- [ ] 表格样式（斑马纹、表头加粗）正确
- [ ] Tab切换样式正确
- [ ] 移动端菜单正常显示
- [ ] 字体加载正常，无FOIT

#### 8.4.4 JavaScript功能检查清单
- [ ] 表格筛选功能正常
- [ ] Tab切换功能正常
- [ ] 移动端菜单切换正常
- [ ] 平滑滚动效果正常
- [ ] 无JavaScript错误

#### 8.4.5 JSON数据检查清单
- [ ] 所有必填字段已填充
- [ ] SEO字段符合长度要求（Title ≤60字符, Description ≤160字符）
- [ ] Schema.org结构化数据完整
- [ ] 所有链接路径正确
- [ ] 图片路径正确
- [ ] 内容纯英文，无语法错误
- [ ] 文章字数 >= 800字

#### 8.4.6 集成测试检查清单
- [ ] 首页所有链接可正常跳转
- [ ] 品牌列表页所有品牌链接可正常跳转
- [ ] 产品分类页表格筛选正常
- [ ] 型号详情页FAQ折叠正常
- [ ] 解决方案和技术支持文章页目录导航正常
- [ ] 面包屑导航路径正确
- [ ] 内部链接网络完整

#### 8.4.7 代码审查工具
- **requesting-code-review**: 每个单元模块提交审查
- **receiving-code-review**: 处理审查反馈
- **verification-before-completion**: 最终验证

### 8.5 检查清单文件要求

根据prompt2.md任务清单要求，必须创建以下检查清单文件：

#### 8.5.1 HTML模板检查清单 (check_list1.md)
用于验证所有HTML模板的网页样式、布局是否符合要求。
文件位置：`/docs/check_list1.md`

检查内容：
- 所有模板类型是否完整（首页、品牌列表、品牌首页、产品分类、产品详情、解决方案列表、解决方案详情、技术支持列表、技术支持详情、新闻列表、新闻详情、关于我们、联系我们）
- 每个模板的布局是否符合要求
- 响应式设计是否正确实现
- 面包屑导航是否正确
- SEO Meta标签是否完整
- 导航栏和页脚是否一致

#### 8.5.2 JSON模板检查清单 (check_list2.md)
用于验证所有JSON模板是否符合要求。
文件位置：`/docs/check_list2.md`

检查内容：
- about_brand.json结构是否完整
- products.json结构是否完整
- solutions.json结构是否完整
- support.json结构是否完整
- 所有必填字段是否已填充
- SEO字段是否符合长度要求
- Schema.org结构化数据是否完整
- 内容是否纯英文
- 文章字数是否>=800字

#### 8.5.3 新增品牌数据要求文档 (new_brand_data.md)
文件位置：`/docs/new_brand_data.md`

内容要求：
- JSON数据字段详细规范
- 每个字段的数据类型、长度限制、示例值
- 新增品牌流程步骤
- 新增品牌检查清单
- 铁律清单（如出现遗漏，需增加）

---

## 9. 部署方案

### 9.1 代码管理
- **平台**: GitHub
- **仓库**: BeiLuo
- **结构**: 单仓库多目录，每个品牌一个子目录

### 9.2 部署平台
- **平台**: Cloudflare Pages
- **域名**: elec-distributor.com
- **子目录路由**: /infineon/, /ti/, /st/...

### 9.3 CI/CD
- GitHub提交自动触发Cloudflare部署
- 部署预览功能

---

## 10. 验收标准

### 10.1 功能验收
- [ ] 所有页面可正常访问，无404错误
- [ ] 响应式设计在Desktop/Tablet/Mobile正常显示
- [ ] 表格筛选、Tab切换等交互功能正常
- [ ] 所有链接可正常点击

### 10.2 SEO验收
- [ ] 所有页面有独特的Title和Description
- [ ] 结构化数据通过Google Rich Results测试
- [ ] XML网站地图可访问
- [ ] 面包屑导航正常显示

### 10.3 性能验收
- [ ] Lighthouse性能评分 > 90
- [ ] 首屏加载 < 3秒
- [ ] 所有图片有alt属性

### 10.4 内容验收
- [ ] 所有文章字数 >= 800字
- [ ] 内容纯英文，专业B2B语气
- [ ] 自然融入关键词
- [ ] 包含FAQ模块

---

## 11. 项目里程碑

### 阶段1: 模板开发（Infineon）
- Week 1: 首页、品牌列表页、品牌首页
- Week 2: 产品中心（分类页、表格页、详情页）
- Week 3: 解决方案、技术支持、新闻、关于我们、联系我们
- Week 4: SEO优化、性能优化、测试验证

### 阶段2: 批量生成（100+品牌）
- Week 5-8: 按品牌清单依次生成

### 阶段3: 持续优化
- Week 9+: 内容更新、排名监控、持续优化

---

## 12. 风险与应对

| 风险 | 影响 | 应对措施 |
|------|------|----------|
| 内容差异化不足 | SEO降权 | 每个品牌独立AI生成，确保差异化 |
| 页面加载慢 | 用户体验差 | 图片优化、懒加载、CDN加速 |
| 关键词排名不达预期 | 流量低 | 持续内容更新、外链建设 |

---

## 13. 附录

### 13.1 参考文件
- contact.txt - 全球办公室联系信息
- new_brand_flow2.md - 新增品牌流程
- prompt2.md - 详细开发要求
- update.txt - 更新维护流程

### 13.2 品牌清单（部分）
- 功率器件: Infineon, Semikron, Fuji, Mitsubishi, IXYS, Cree, Rohm
- MCU: TI, ADI, ST, Microchip, Renesas, NXP
- 传感器: LEM, Galaxycore, Smartsens
- 被动元件: Faratronic, Jianghai, Aishi
- 连接器/继电器: Hongfa
- 存储: Micron, SK Hynix
- FPGA: Xilinx, Lattice, Gowin

---

**文档版本**: v1.0  
**创建日期**: 2026-04-12  
**最后更新**: 2026-04-12
