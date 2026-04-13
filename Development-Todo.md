# BeiLuo 网站开发详细执行计划

> **执行模式**: 连贯开发步骤模式  
> **检查点策略**: 每完成一个单元模块，立即进行代码审查、测试、验证  
> **质量要求**: 每个模块必须通过审查才能进入下一步

---

## 网站架构说明

### 导航结构

**主站导航（一级导航）**:
- 首页 (Home)
- 品牌专区 (Brands) → `/brands/`
- 新闻 (News) → `/news/`
- 关于我们 (About) → `/about/`

**品牌子目录导航（二级导航，Tab形式）**:
每个品牌子目录网站（如 `/infineon/`）都有Tab二级导航菜单：
- 关于品牌 (About Brand)
- 产品中心 (Products)
- 解决方案 (Solutions)
- 技术支持 (Support)

### 目录层级关系

```
/ (首页)
├── brands/ (品牌列表页 - 一级导航)
├── infineon/ (Infineon品牌中心 - 与 brands/ 同级)
│   ├── index.html (关于品牌 - 默认页)
│   ├── products/ (产品中心)
│   │   ├── index.html (产品分类列表)
│   │   ├── igbt/ (二级产品分类)
│   │   │   ├── index.html (型号表格页)
│   │   │   └── FF600R12ME4.html (型号详情页)
│   │   └── ...
│   ├── solutions/ (解决方案)
│   │   ├── index.html (解决方案列表)
│   │   └── ev-charging.html (解决方案详情)
│   └── support/ (技术支持)
│       ├── index.html (技术文章列表)
│       └── igbt-selection-guide.html (文章详情)
├── news/ (新闻中心 - 一级导航)
│   ├── index.html (新闻列表)
│   └── company-news-1.html (新闻详情)
└── about/ (关于我们 - 一级导航)
    └── index.html
```

**重要**: `/brands/` 和 `/infineon/` 是**同一层级**，不是包含关系。

### SEO关键词策略

**首页SEO**:
- Title: 电子元件核心代理 | 提供正品原装现货 | BeiLuo
- Description: BeiLuo是电子元件核心代理，长期稳定供应提供正品原装现货。并提供技术支持和优势价格，欢迎咨询。
- Keywords: BeiLuo,电子元件代理,电子元件现货

**品牌子目录SEO**:
- 核心关键词: `品牌名+distributor` (如 infineon distributor)
- 地域长尾词: `品牌名+代理商+地域` (如 英飞凌代理USA, 英飞凌日本代理)
- 产品长尾词: `品牌名+产品+代理` (如 英飞凌IGBT代理, 英飞凌MOSFET代理)
- 资质长尾词: `品牌名+授权代理`, `品牌名+一级代理`
- 问题型长尾词: `如何选择品牌名MCU`, `品牌名代理商有哪些`

**关键词映射**:
- 关于品牌页: 核心关键词 + 地域长尾词
- 产品列表页: 品牌 + 产品关键词
- 产品详情页: 具体产品型号
- 解决方案页: 品牌 + 解决方案
- 技术文章页: 长尾问题型关键词

---

## 执行规则

### 1. 开发流程
```
步骤N: 开发任务
    ↓
检查点N: 代码审查 + 测试 + 验证
    ↓
通过? → 步骤N+1
失败? → 修复 → 重新检查点N
```

### 2. 检查点检查清单
每个检查点必须验证：
- [ ] **代码审查**: HTML/CSS/JS 语法正确
- [ ] **功能测试**: 交互功能正常
- [ ] **视觉验证**: 布局、样式符合设计
- [ ] **响应式测试**: 移动端/桌面端适配
- [ ] **SEO验证**: 结构化数据、meta标签
- [ ] **性能检查**: 无阻塞资源、图片优化

### 3. 状态日志格式
```
[检查点 N] - [模块名称]
状态: [通过/失败]
时间: [YYYY-MM-DD HH:MM]
审查结果:
  - 问题1: [描述] → [修复状态]
  - 问题2: [描述] → [修复状态]
测试结果:
  - 功能1: [通过/失败]
  - 功能2: [通过/失败]
验证结果:
  - 视觉: [通过/失败]
  - 响应式: [通过/失败]
  - SEO: [通过/失败]
```

### 4. 代码审查工具使用规则

根据 prompt2.md 要求，每个单元模块必须使用以下技能进行代码审查：

#### 4.1 requesting-code-review
- **使用时机**: 每个单元模块开发完成后
- **使用方法**: 调用 `skill:requesting-code-review`
- **审查内容**: HTML/CSS/JS 代码质量、性能、可维护性
- **输出**: 代码审查报告

#### 4.2 receiving-code-review
- **使用时机**: 收到代码审查反馈后
- **使用方法**: 调用 `skill:receiving-code-review`
- **处理流程**:
  1. 分析审查反馈
  2. 修复问题
  3. 重新测试验证
  4. 通过后才继续下一个模块

#### 4.3 verification-before-completion
- **使用时机**: 每个检查点验证时
- **使用方法**: 调用 `skill:verification-before-completion`
- **验证内容**: HTML模板、JSON模板完整性
- **要求**: 必须有验证证据才能声明通过

### 5. Superpowers Skills 调用规范

开发过程中必须调用 superpowers skills 技能集：

#### 5.1 开发阶段调用
- `superpowers:subagent-driven-development` - 子代理驱动开发
- `superpowers:executing-plans` - 执行计划
- `superpowers:writing-plans` - 编写计划

#### 5.2 代码质量调用
- `superpowers:requesting-code-review` - 请求代码审查
- `superpowers:receiving-code-review` - 接收代码审查
- `superpowers:verification-before-completion` - 完成前验证

#### 5.3 调试测试调用
- `superpowers:systematic-debugging` - 系统调试
- `superpowers:test-driven-development` - 测试驱动开发

#### 5.4 版本控制调用
- `superpowers:using-git-worktrees` - 使用Git工作树
- `superpowers:finishing-a-development-branch` - 完成开发分支

### 6. 审查测试规则（铁律）

根据 prompt2.md 第6条：
- **每个单元模块完成后立即审查和测试，不等待阶段结束**
- **审查和测试是该模块的一部分，不是独立阶段**
- **失败立即修复，修复后重新测试，通过后才继续下一个模块**
- **集成测试在所有单元通过后才开始**

---

## Phase 1: 项目初始化

### 步骤 1.1: 创建项目目录结构

**任务**: 创建完整的项目目录结构

**执行命令**:
```bash
mkdir -p css js scripts assets/images assets/icons assets/brands assets/news assets/products assets/solutions assets/team assets/certs assets/diagrams components templates brands news about contact docs infineon/data infineon/css infineon/products/igbt infineon/products/mosfet infineon/products/sic infineon/solutions infineon/support infineon/team
```

**预期输出**:
```
a5/
├── css/
├── js/
├── scripts/
├── assets/
│   ├── images/
│   ├── icons/
│   ├── brands/
│   ├── news/
│   ├── products/
│   ├── solutions/
│   ├── team/
│   ├── certs/
│   └── diagrams/
├── components/
├── templates/
├── docs/
├── brands/
├── news/
├── about/
├── contact/
└── infineon/
    ├── data/
    ├── css/
    ├── products/
    │   ├── igbt/
    │   ├── mosfet/
    │   └── sic/
    ├── solutions/
    ├── support/
    └── team/
```

---

### 检查点 1.1: 目录结构验证

**验证命令**:
```bash
tree -L 3 -d
```

**检查清单**:
- [ ] 所有目录已创建
- [ ] 目录层级正确
- [ ] 无拼写错误

**状态日志模板**:
```
[检查点 1.1] - 目录结构验证
状态: [待填写]
时间: [待填写]
审查结果:
  - 目录完整性: [待验证]
测试结果:
  - 目录可访问: [待验证]
验证结果:
  - 结构符合设计: [待验证]
```

---

### 步骤 1.2: 创建 CSS 变量文件

**任务**: 创建 `css/variables.css`

**文件内容**:
```css
/* css/variables.css */
:root {
  /* Primary Colors */
  --color-primary: #0072ce;
  --color-primary-dark: #005ba3;
  --color-primary-light: #e6f2fa;
  
  /* Secondary Colors */
  --color-secondary: #f8f9fa;
  --color-secondary-dark: #e9ecef;
  
  /* Accent Colors */
  --color-accent: #ff6b35;
  --color-accent-hover: #e55a2b;
  --color-success: #28a745;
  --color-warning: #ffc107;
  --color-danger: #dc3545;
  
  /* Text Colors */
  --color-text-primary: #1a1a1a;
  --color-text-secondary: #4a4a4a;
  --color-text-tertiary: #6c757d;
  --color-text-inverse: #ffffff;
  
  /* Spacing */
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;
  --space-2xl: 48px;
  --space-3xl: 64px;
  --space-4xl: 96px;
  
  /* Border Radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-full: 9999px;
  
  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.07);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.15);
  
  /* Typography */
  --font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-mono: 'JetBrains Mono', 'Fira Code', monospace;
  
  /* Container */
  --container-max-width: 1319px;
  --container-padding: 24px;
}
```

---

### 步骤 1.3: 创建基础 CSS 文件

**任务**: 创建 `css/base.css`

**文件内容**:
```css
/* css/base.css */
@import url('variables.css');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-primary);
  font-size: 16px;
  line-height: 1.6;
  color: var(--color-text-primary);
  background-color: var(--color-secondary);
}

.container {
  max-width: var(--container-max-width);
  margin: 0 auto;
  padding: 0 var(--container-padding);
}

.container-narrow {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 var(--container-padding);
}

a {
  color: var(--color-primary);
  text-decoration: none;
  transition: color 0.15s ease;
}

a:hover {
  color: var(--color-primary-dark);
}

img {
  max-width: 100%;
  height: auto;
}
```

---

### 步骤 1.4: 创建组件 CSS 文件

**任务**: 创建 `css/components.css`

**文件内容**:
```css
/* css/components.css */
@import url('variables.css');

/* Button Components */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  border-radius: var(--radius-md);
  transition: all 0.15s ease;
  cursor: pointer;
  border: none;
  text-decoration: none;
}

.btn--primary {
  background: var(--color-accent);
  color: white;
}

.btn--primary:hover {
  background: var(--color-accent-hover);
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
  color: white;
}

.btn--secondary {
  background: transparent;
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
}

.btn--secondary:hover {
  background: var(--color-primary-light);
}

.btn--large {
  padding: 16px 32px;
  font-size: 18px;
}

.btn--sm {
  padding: 8px 16px;
  font-size: 14px;
}

/* Badge Components */
.badge {
  display: inline-flex;
  align-items: center;
  padding: 4px 12px;
  font-size: 12px;
  font-weight: 600;
  border-radius: var(--radius-full);
}

.badge--primary {
  background: var(--color-primary);
  color: white;
}

.badge--success {
  background: var(--color-success);
  color: white;
}

.badge--warning {
  background: var(--color-warning);
  color: var(--color-text-primary);
}

.badge--danger {
  background: var(--color-danger);
  color: white;
}

/* Card Components */
.card {
  background: white;
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

/* Section Title */
.section-title {
  font-size: 36px;
  font-weight: 600;
  text-align: center;
  margin-bottom: var(--space-2xl);
  color: var(--color-text-primary);
}

/* Breadcrumb */
.breadcrumb {
  font-size: 14px;
  color: var(--color-text-tertiary);
  margin-bottom: var(--space-md);
}

.breadcrumb a {
  color: var(--color-primary);
}

.breadcrumb a:hover {
  text-decoration: underline;
}
```

---

### 步骤 1.5: 创建页面 CSS 文件

**任务**: 创建 `css/pages.css`

**文件内容**:
```css
/* css/pages.css */
@import url('variables.css');

/* Page Header */
.page-header {
  padding: var(--space-3xl) 0 var(--space-xl);
  margin-top: 72px;
  background: var(--color-secondary);
}

.page-header h1 {
  font-size: 42px;
  font-weight: 700;
  margin-top: var(--space-md);
}

/* Hero Section */
.hero {
  position: relative;
  min-height: 500px;
  display: flex;
  align-items: center;
  padding: var(--space-4xl) 0;
  margin-top: 72px;
  overflow: hidden;
}

.hero__bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, var(--color-primary-light) 0%, var(--color-secondary) 100%);
  z-index: -1;
}

.hero__content {
  max-width: 600px;
}

.hero__title {
  font-size: 48px;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: var(--space-lg);
  color: var(--color-text-primary);
}

.hero__subtitle {
  font-size: 18px;
  color: var(--color-text-secondary);
  margin-bottom: var(--space-xl);
  line-height: 1.6;
}

.hero__cta {
  display: flex;
  gap: var(--space-md);
}

/* Advantages Section */
.advantages {
  padding: var(--space-4xl) 0;
  background: white;
}

.advantages__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-xl);
}

.advantage-card {
  text-align: center;
  padding: var(--space-xl);
  border-radius: var(--radius-lg);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.advantage-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.advantage-card__icon {
  width: 64px;
  height: 64px;
  margin: 0 auto var(--space-md);
  background: var(--color-primary-light);
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-primary);
}

.advantage-card h3 {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: var(--space-sm);
}

.advantage-card p {
  font-size: 14px;
  color: var(--color-text-secondary);
}

/* Featured Brands */
.featured-brands {
  padding: var(--space-4xl) 0;
  background: var(--color-secondary);
}

.brands__grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: var(--space-lg);
  margin-bottom: var(--space-xl);
}

.brand-card {
  background: white;
  border-radius: var(--radius-lg);
  padding: var(--space-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.brand-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

/* News Section */
.latest-news {
  padding: var(--space-4xl) 0;
  background: white;
}

.news__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-xl);
}

.news-card {
  background: white;
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.news-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.news-card__image {
  width: 100%;
  height: 200px;
  background: var(--color-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
}

.news-card__content {
  padding: var(--space-lg);
}

.news-card__date {
  font-size: 12px;
  color: var(--color-text-tertiary);
  margin-bottom: var(--space-sm);
  display: block;
}

.news-card h3 {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: var(--space-sm);
}

.news-card p {
  font-size: 14px;
  color: var(--color-text-secondary);
}

/* CTA Section */
.cta-section {
  padding: var(--space-4xl) 0;
  background: var(--color-primary);
  color: white;
  text-align: center;
}

.cta-section__content h2 {
  font-size: 36px;
  font-weight: 600;
  margin-bottom: var(--space-md);
}

.cta-section__content p {
  font-size: 18px;
  margin-bottom: var(--space-xl);
  opacity: 0.9;
}

/* Utility Classes */
.text-center {
  text-align: center;
}

/* Responsive */
@media (max-width: 1024px) {
  .advantages__grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .brands__grid {
    grid-template-columns: repeat(3, 1fr);
  }
  
  .news__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .hero__title {
    font-size: 32px;
  }
  
  .hero__cta {
    flex-direction: column;
  }
  
  .advantages__grid {
    grid-template-columns: 1fr;
  }
  
  .brands__grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .news__grid {
    grid-template-columns: 1fr;
  }
  
  .section-title {
    font-size: 28px;
  }
}
```

---

### 步骤 1.6: 创建主 JS 文件

**任务**: 创建 `js/main.js`

**文件内容**:
```javascript
// js/main.js

document.addEventListener('DOMContentLoaded', function() {
  // Initialize all components
  initNavbar();
  initMobileMenu();
  initActiveLinks();
});

// Navbar scroll effect
function initNavbar() {
  const navbar = document.getElementById('navbar');
  
  if (!navbar) return;
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      navbar.classList.add('navbar--scrolled');
    } else {
      navbar.classList.remove('navbar--scrolled');
    }
  });
}

// Mobile menu toggle
function initMobileMenu() {
  const navbarToggle = document.getElementById('navbarToggle');
  const navbarMenu = document.getElementById('navbarMenu');
  
  if (!navbarToggle || !navbarMenu) return;
  
  navbarToggle.addEventListener('click', function() {
    navbarMenu.classList.toggle('navbar__menu--open');
    navbarToggle.classList.toggle('navbar__toggle--active');
  });
  
  // Close menu when clicking outside
  document.addEventListener('click', function(e) {
    if (!navbar.contains(e.target) && navbarMenu.classList.contains('navbar__menu--open')) {
      navbarMenu.classList.remove('navbar__menu--open');
      navbarToggle.classList.remove('navbar__toggle--active');
    }
  });
}

// Active link highlighting
function initActiveLinks() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.navbar__link');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (href !== '/' && currentPath.startsWith(href))) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// Utility function: Debounce
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Utility function: Throttle
function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}
```

---

### 检查点 1.2: Phase 1 综合验证

**验证清单**:
- [ ] **代码审查**
  - [ ] CSS 语法正确 (无语法错误)
  - [ ] CSS 变量定义完整
  - [ ] 选择器命名规范 (BEM)
  - [ ] JS 语法正确 (ES6+)
  - [ ] 函数注释完整

- [ ] **功能测试**
  - [ ] CSS 文件可正常加载
  - [ ] CSS 变量可正常引用
  - [ ] JS 文件可正常加载
  - [ ] DOMContentLoaded 事件正常触发

- [ ] **视觉验证**
  - [ ] 颜色变量定义符合设计规范
  - [ ] 间距系统一致
  - [ ] 字体栈定义合理

- [ ] **响应式测试**
  - [ ] Media queries 语法正确
  - [ ] 断点设置合理 (1024px, 768px)

- [ ] **SEO验证**
  - [ ] 无阻塞渲染问题

**状态日志模板**:
```
[检查点 1.2] - Phase 1 项目初始化
状态: [待填写]
时间: [待填写]

代码审查:
  - CSS语法: [通过/失败]
  - JS语法: [通过/失败]
  - 命名规范: [通过/失败]

功能测试:
  - 文件加载: [通过/失败]
  - 变量引用: [通过/失败]
  - 事件触发: [通过/失败]

视觉验证:
  - 颜色系统: [通过/失败]
  - 间距系统: [通过/失败]

响应式测试:
  - Media queries: [通过/失败]

SEO验证:
  - 渲染阻塞: [通过/失败]

问题列表:
  1. [问题描述] → [修复状态]
  2. [问题描述] → [修复状态]
```

---

## Phase 2: SVG 图标、Logo 和设计规范

### 步骤 2.1: 生成产品类别 SVG 图标

**任务**: 为产品类别设计并生成 SVG 矢量图标（AI生成）

**图标列表**:
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

**设计要求**:
- 简洁、专业、风格统一
- 线条风格，科技蓝配色（#0072ce）
- 尺寸：48x48px 和 64x64px 两种规格
- 全部AI生成

---

### 步骤 2.2: 生成页面功能 SVG 图标

**任务**: 生成页面功能图标（AI生成）

**图标列表**:
- 新闻/文章图标
- 关于我们图标
- 联系我们图标
- 下载图标
- 搜索图标
- 菜单图标（汉堡菜单）
- 社交媒体图标（LinkedIn, Twitter, Facebook）
- 关闭图标
- 箭头图标（上下左右）
- 勾选图标

---

### 步骤 2.3: 生成页面插图 SVG 图标

**任务**: 为列表页和详情页生成匹配的 SVG 插图（AI生成）

**图标列表**:
- 新闻列表页插图
- 新闻详情页封面图
- 关于我们页面插图
- 联系我们页面插图
- 产品分类列表页插图
- 产品详情页封面图
- 解决方案列表页插图
- 解决方案详情页封面图
- 技术支持列表页插图
- 技术支持详情页封面图

**设计要求**:
- 简洁、专业、风格统一
- 符合电子元件行业气质
- 全部AI生成

---

### 步骤 2.4: 生成抽象背景 SVG 图案

**任务**: 生成抽象科技感背景图案（AI生成）

**图案列表**:
- 电路板纹理图案
- 科技线条背景
- 几何抽象图案
- 渐变背景
- 点阵背景
- 芯片纹理图案
- 电子元件抽象图案

**应用场景**:
- Hero Banner 背景
- 页面区块背景
- 卡片背景装饰
- 新闻详情页Header Banner
- 关于我们页面背景

---

### 步骤 2.5: 设计 Logo

**任务**: 设计 BeiLuo 公司 Logo（AI生成）

**设计要求**:
- 公司名称：BeiLuo
- 副标题：China's Top 8 Electronic Components Distributor（翻译：中国8强电子元件代理商，放置在Logo右侧）
- 格式：SVG矢量
- 风格：简洁、专业、科技感
- 主色调：科技蓝 #0072ce

**Logo 变体**:
- 主Logo（带副标题）- 用于页头
- 简化Logo（仅文字）- 用于页脚
- Favicon 版本

---

### 步骤 2.6: 定义设计规范

**任务**: 创建 `docs/design-guidelines.md`

**1. 设计风格和美学要求**:
- 采用现代极简主义设计风格，避免过度装饰
- 使用留白和间距增强页面呼吸感
- 颜色搭配：
  - 主色调：科技蓝 #0072ce
  - 中性色：#f8f9fa
  - CTA按钮色：橙色 #ff6b35
- 字体：现代无衬线字体（Inter/Roboto/系统字体）
- 元素圆角：统一8px，组件12px
- 阴影：box-shadow: 0 4px 6px rgba(0,0,0,0.07)

**2. 布局系统要求**:
- 使用CSS Grid和Flexbox实现响应式布局
- 建立12列网格系统
- 模块化组件设计：
  - Hero Banner模块：全宽设计，渐变背景或抽象几何图形
  - Card组件：圆角、阴影、悬停效果
  - Feature Grid：等间距网格
  - CTA模块：对比色背景
- 清晰的视觉层次：H1 > H2 > H3 > 正文 > 辅助文本

**3. 交互效果要求**:
- 按钮悬停效果：阴影加深和颜色变化
- 卡片悬停效果：提升和轻微阴影增强
- 导航栏：滚动时固定，半透明背景
- 加载动画：页面切换平滑过渡

**4. 移动优先设计**:
- 桌面端：最大宽度1319px，居中显示
- 平板端：768px-1199px，适当中等布局
- 移动端：最大宽度100%，全屏适配
- 按钮和交互元素最小44px（易于点击）

**5. 性能和可访问性要求**:
- 使用CSS变量统一管理样式
- 使用纯原生CSS
- 优化图片显示（WebP降级方案）
- 字体加载优化，避免FOIT
- 颜色对比度满足WCAG AA标准
- 所有交互元素支持键盘导航
- 使用语义化HTML标签

---

### 检查点 2.1: SVG 图标和设计规范验证

**验证清单**:
- [ ] 所有产品类别图标已生成（AI生成）
- [ ] 所有页面功能图标已生成（AI生成）
- [ ] 页面插图和封面图已生成（AI生成）
- [ ] 抽象背景图案已生成（AI生成）
- [ ] Logo设计完成（AI生成，带副标题"China's Top 8 Electronic Components Distributor"）
- [ ] 设计规范文档已创建
- [ ] 所有 SVG 文件格式正确
- [ ] SVG 文件大小优化
- [ ] 图标颜色符合设计规范（科技蓝#0072ce）

---

## Phase 3: 导航组件 (Navbar)

### 步骤 2.1: 创建导航组件 HTML

**任务**: 创建 `components/navbar.html`

**文件内容**:
```html
<!-- components/navbar.html -->
<nav class="navbar" id="navbar">
  <div class="container">
    <div class="navbar__inner">
      <a href="/" class="navbar__logo">
        <span class="navbar__logo-text">BeiLuo</span>
        <span class="navbar__logo-subtitle">China's Top 8 Electronic Components Distributor</span>
      </a>
      
      <button class="navbar__toggle" id="navbarToggle" aria-label="Toggle navigation" aria-expanded="false">
        <span></span>
        <span></span>
        <span></span>
      </button>
      
      <ul class="navbar__menu" id="navbarMenu" role="menubar">
        <li role="none"><a href="/" class="navbar__link" role="menuitem">Home</a></li>
        <li role="none"><a href="/brands/" class="navbar__link" role="menuitem">Brands</a></li>
        <li role="none"><a href="/news/" class="navbar__link" role="menuitem">News</a></li>
        <li role="none"><a href="/about/" class="navbar__link" role="menuitem">About Us</a></li>
        <li role="none"><a href="/contact/" class="navbar__link navbar__link--cta" role="menuitem">Contact Us</a></li>
      </ul>
    </div>
  </div>
</nav>
```

---

### 步骤 2.2: 添加导航组件 CSS

**任务**: 追加到 `css/components.css`

**追加内容**:
```css
/* Navbar Component */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 72px;
  background: white;
  z-index: 1000;
  transition: box-shadow 0.3s ease;
}

.navbar--scrolled {
  box-shadow: var(--shadow-md);
}

.navbar__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

.navbar__logo {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  text-decoration: none;
}

.navbar__logo-text {
  font-size: 24px;
  font-weight: 700;
  color: var(--color-primary);
}

.navbar__logo-subtitle {
  font-size: 12px;
  color: var(--color-text-tertiary);
  max-width: 150px;
  line-height: 1.3;
}

.navbar__menu {
  display: flex;
  list-style: none;
  gap: var(--space-xl);
  margin: 0;
  padding: 0;
}

.navbar__link {
  font-size: 16px;
  font-weight: 500;
  color: var(--color-text-primary);
  padding: var(--space-sm) 0;
  position: relative;
  text-decoration: none;
  transition: color 0.15s ease;
}

.navbar__link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--color-primary);
  transition: width 0.3s ease;
}

.navbar__link:hover::after,
.navbar__link.active::after {
  width: 100%;
}

.navbar__link:hover {
  color: var(--color-primary);
}

.navbar__link.active {
  color: var(--color-primary);
}

.navbar__link--cta {
  background: var(--color-accent);
  color: white;
  padding: var(--space-sm) var(--space-md);
  border-radius: var(--radius-md);
}

.navbar__link--cta:hover {
  background: var(--color-accent-hover);
  color: white;
}

.navbar__link--cta::after {
  display: none;
}

.navbar__toggle {
  display: none;
  flex-direction: column;
  gap: 4px;
  background: none;
  border: none;
  cursor: pointer;
  padding: var(--space-sm);
}

.navbar__toggle span {
  width: 24px;
  height: 2px;
  background: var(--color-text-primary);
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.navbar__toggle--active span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.navbar__toggle--active span:nth-child(2) {
  opacity: 0;
}

.navbar__toggle--active span:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .navbar__toggle {
    display: flex;
  }
  
  .navbar__menu {
    position: fixed;
    top: 72px;
    left: 0;
    right: 0;
    background: white;
    flex-direction: column;
    padding: var(--space-lg);
    gap: var(--space-md);
    box-shadow: var(--shadow-lg);
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
  }
  
  .navbar__menu--open {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }
  
  .navbar__link {
    padding: var(--space-md) 0;
  }
  
  .navbar__logo-subtitle {
    display: none;
  }
}
```

---

### 步骤 2.3: 更新主 JS 文件

**任务**: 更新 `js/main.js` 中的导航功能

**验证**: 确保 JS 代码已在步骤 1.6 中包含导航功能

---

### 检查点 2.1: 导航组件验证

**验证清单**:
- [ ] **代码审查**
  - [ ] HTML 语义化正确 (nav, ul, li, a)
  - [ ] ARIA 属性完整 (aria-label, aria-expanded, role)
  - [ ] CSS 选择器正确
  - [ ] 过渡动画流畅

- [ ] **功能测试**
  - [ ] 导航栏固定在顶部
  - [ ] 滚动时添加阴影效果
  - [ ] 移动端菜单按钮可点击
  - [ ] 菜单展开/收起动画正常
  - [ ] 点击外部关闭菜单
  - [ ] 当前页面链接高亮

- [ ] **视觉验证**
  - [ ] Logo 显示正确
  - [ ] 导航链接间距一致
  - [ ] CTA 按钮样式正确
  - [ ] 悬停效果正常

- [ ] **响应式测试**
  - [ ] 桌面端显示完整导航
  - [ ] 移动端显示汉堡菜单
  - [ ] 菜单展开后覆盖内容

- [ ] **可访问性验证**
  - [ ] 键盘导航可用
  - [ ] ARIA 状态更新正确
  - [ ] 颜色对比度符合 WCAG AA

**状态日志模板**:
```
[检查点 2.1] - 导航组件
状态: [待填写]
时间: [待填写]

代码审查:
  - HTML语义化: [通过/失败]
  - ARIA属性: [通过/失败]
  - CSS选择器: [通过/失败]

功能测试:
  - 固定定位: [通过/失败]
  - 滚动阴影: [通过/失败]
  - 移动菜单: [通过/失败]
  - 外部点击关闭: [通过/失败]
  - 链接高亮: [通过/失败]

视觉验证:
  - Logo: [通过/失败]
  - 链接间距: [通过/失败]
  - CTA按钮: [通过/失败]
  - 悬停效果: [通过/失败]

响应式测试:
  - 桌面端: [通过/失败]
  - 移动端: [通过/失败]

可访问性:
  - 键盘导航: [通过/失败]
  - ARIA状态: [通过/失败]
  - 对比度: [通过/失败]

问题列表:
  1. [问题描述] → [修复状态]
```

---

### 步骤 2.4: 创建品牌子目录 Tab 导航组件

**任务**: 创建 `components/brand-tabs.html`

**说明**: 品牌子目录网站每个页面都要有Tab二级导航菜单

**文件内容**:
```html
<!-- components/brand-tabs.html -->
<nav class="brand-tabs" aria-label="Brand navigation">
  <div class="container">
    <div class="brand-tabs__inner">
      <a href="/infineon/" class="brand-tabs__link active">About Brand</a>
      <a href="/infineon/products/" class="brand-tabs__link">Products</a>
      <a href="/infineon/solutions/" class="brand-tabs__link">Solutions</a>
      <a href="/infineon/support/" class="brand-tabs__link">Support</a>
    </div>
  </div>
</nav>
```

---

### 步骤 2.5: 添加品牌 Tab 导航 CSS

**任务**: 追加到 `css/components.css`

**追加内容**:
```css
/* Brand Tabs Component */
.brand-tabs {
  background: var(--color-secondary);
  border-bottom: 1px solid var(--color-secondary-dark);
  padding: var(--space-md) 0;
}

.brand-tabs__inner {
  display: flex;
  gap: var(--space-lg);
}

.brand-tabs__link {
  font-size: 16px;
  font-weight: 500;
  color: var(--color-text-secondary);
  padding: var(--space-sm) var(--space-md);
  border-radius: var(--radius-md);
  text-decoration: none;
  transition: all 0.15s ease;
}

.brand-tabs__link:hover {
  color: var(--color-primary);
  background: var(--color-primary-light);
}

.brand-tabs__link.active {
  color: var(--color-primary);
  background: var(--color-primary-light);
  font-weight: 600;
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .brand-tabs__inner {
    overflow-x: auto;
    gap: var(--space-md);
    padding-bottom: var(--space-sm);
    -webkit-overflow-scrolling: touch;
  }
  
  .brand-tabs__link {
    white-space: nowrap;
    flex-shrink: 0;
  }
}
```

---

### 检查点 2.2: 品牌 Tab 导航验证

**验证清单**:
- [ ] Tab 导航显示在品牌子目录页面
- [ ] 当前页面 Tab 高亮
- [ ] 点击 Tab 跳转正确
- [ ] 移动端支持横向滚动
- [ ] 样式符合设计规范

---

## Phase 4: 页脚组件 (Footer)

### 步骤 3.1: 创建页脚组件 HTML

**任务**: 创建 `components/footer.html`

**文件内容**:
```html
<!-- components/footer.html -->
<footer class="footer" role="contentinfo">
  <div class="container">
    <div class="footer__grid">
      <div class="footer__brand">
        <h3 class="footer__logo">BeiLuo</h3>
        <p class="footer__tagline">China's Top 8 Electronic Components Distributor</p>
        <p class="footer__description">Your trusted partner for genuine electronic components. Authorized distributor of 100+ brands with local stock and technical support.</p>
      </div>
      
      <nav class="footer__links" aria-label="Footer navigation">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/brands/">Brands</a></li>
          <li><a href="/news/">News</a></li>
          <li><a href="/about/">About Us</a></li>
          <li><a href="/contact/">Contact</a></li>
        </ul>
      </nav>
      
      <div class="footer__contact">
        <h4>Contact Us</h4>
        <p><a href="https://wa.me/8615013702378" target="_blank" rel="noopener">WhatsApp: +86 15013702378</a></p>
        <p>WeChat: +86 18612518271</p>
        <p><a href="mailto:info@elec-distributor.com">Email: info@elec-distributor.com</a></p>
      </div>
      
      <div class="footer__social">
        <h4>Follow Us</h4>
        <div class="footer__social-links">
          <a href="#" aria-label="LinkedIn" target="_blank" rel="noopener">LinkedIn</a>
          <a href="#" aria-label="Twitter" target="_blank" rel="noopener">Twitter</a>
          <a href="#" aria-label="Facebook" target="_blank" rel="noopener">Facebook</a>
        </div>
      </div>
    </div>
    
    <div class="footer__bottom">
      <p>&copy; 2026 BeiLuo Electronic Components. All rights reserved.</p>
    </div>
  </div>
</footer>
```

---

### 步骤 3.2: 添加页脚组件 CSS

**任务**: 追加到 `css/components.css`

**追加内容**:
```css
/* Footer Component */
.footer {
  background: var(--color-text-primary);
  color: var(--color-text-inverse);
  padding: var(--space-3xl) 0 var(--space-lg);
}

.footer__grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: var(--space-2xl);
  margin-bottom: var(--space-2xl);
}

.footer__logo {
  font-size: 24px;
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: var(--space-sm);
}

.footer__tagline {
  font-size: 14px;
  color: var(--color-text-tertiary);
  margin-bottom: var(--space-md);
}

.footer__description {
  font-size: 14px;
  line-height: 1.6;
  color: var(--color-text-tertiary);
  max-width: 300px;
}

.footer__links h4,
.footer__contact h4,
.footer__social h4 {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: var(--space-md);
  color: white;
}

.footer__links ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.footer__links li {
  margin-bottom: var(--space-sm);
}

.footer__links a,
.footer__social a {
  color: var(--color-text-tertiary);
  font-size: 14px;
  text-decoration: none;
  transition: color 0.15s ease;
}

.footer__links a:hover,
.footer__social a:hover {
  color: white;
}

.footer__contact p {
  font-size: 14px;
  color: var(--color-text-tertiary);
  margin-bottom: var(--space-sm);
}

.footer__contact a {
  color: var(--color-text-tertiary);
  text-decoration: none;
  transition: color 0.15s ease;
}

.footer__contact a:hover {
  color: white;
}

.footer__bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: var(--space-lg);
  text-align: center;
}

.footer__bottom p {
  font-size: 14px;
  color: var(--color-text-tertiary);
}

/* Footer Responsive */
@media (max-width: 1024px) {
  .footer__grid {
    grid-template-columns: 1fr 1fr;
    gap: var(--space-xl);
  }
}

@media (max-width: 768px) {
  .footer__grid {
    grid-template-columns: 1fr;
    gap: var(--space-lg);
  }
  
  .footer__description {
    max-width: 100%;
  }
}
```

---

### 检查点 3.1: 页脚组件验证

**验证清单**:
- [ ] **代码审查**
  - [ ] HTML 语义化正确 (footer, nav, address)
  - [ ] 链接使用正确标签
  - [ ] CSS Grid 布局正确

- [ ] **功能测试**
  - [ ] 所有链接可点击
  - [ ] 外部链接有 target="_blank"
  - [ ] 邮件链接使用 mailto:
  - [ ] 电话/WhatsApp 链接正确

- [ ] **视觉验证**
  - [ ] 深色背景正确
  - [ ] 文字颜色对比度足够
  - [ ] 网格布局整齐

- [ ] **响应式测试**
  - [ ] 桌面端 4 列布局
  - [ ] 平板端 2 列布局
  - [ ] 移动端 1 列布局

- [ ] **SEO验证**
  - [ ] 联系信息结构化

**状态日志模板**:
```
[检查点 3.1] - 页脚组件
状态: [待填写]
时间: [待填写]

代码审查:
  - HTML语义化: [通过/失败]
  - 链接标签: [通过/失败]
  - CSS Grid: [通过/失败]

功能测试:
  - 链接可点击: [通过/失败]
  - 外部链接: [通过/失败]
  - 邮件链接: [通过/失败]
  - 社交链接: [通过/失败]

视觉验证:
  - 背景色: [通过/失败]
  - 对比度: [通过/失败]
  - 网格布局: [通过/失败]

响应式测试:
  - 桌面4列: [通过/失败]
  - 平板2列: [通过/失败]
  - 移动1列: [通过/失败]

问题列表:
  1. [问题描述] → [修复状态]
```

---

## Phase 5: 首页 (Homepage)

### 步骤 4.1: 创建首页 HTML

**任务**: 创建 `index.html`

**设计目标**: 更专业、内容更丰富、SEO优化更强的首页

**页面结构**:

**1. 英雄横幅 (Hero Banner)**
- 优化文案，更具专业性
- 突出核心价值主张
- 双 CTA 按钮（获取报价、浏览品牌）

**2. 核心优势 (Why Choose Us)**
- 清晰展示作为代理商的核心竞争力
- 库存深度、技术支持团队、物流能力、授权资质
- 图标+文字卡片布局

**3. 优势品牌 (Featured Brands)**
- 展示主要代理品牌 Logo
- 点击引导用户深入了解品牌专区
- 品牌卡片悬停效果

**4. 最新动态 (Latest News)**
- 展示公司活力
- 为首页提供新鲜内容
- 混合展示公司新闻和行业动态
- 新闻卡片包含日期、分类、标题、摘要

**5. 最终行动号召 (Final Call-to-Action)**
- 页面底部再次引导用户联系
- 联系信息（WhatsApp、WeChat、Email）
- 联系表单入口

**关键要求**:
- 包含完整的 Schema.org Organization 标记
- 包含 Open Graph meta 标签
- 现代化、清晰的模块化布局
- 优化字体和排版以提高可读性
- 引用所有 CSS 和 JS 文件

---

### 步骤 4.2: 验证首页功能

**验证清单**:
- [ ] **代码审查**
  - [ ] HTML5 doctype 正确
  - [ ] lang 属性设置
  - [ ] viewport meta 标签
  - [ ] title 和 description 完整
  - [ ] Schema.org JSON-LD 格式正确

- [ ] **功能测试**
  - [ ] 所有 CSS 文件加载
  - [ ] JS 文件加载并执行
  - [ ] 导航栏正常显示
  - [ ] 页脚正常显示
  - [ ] CTA 按钮可点击

- [ ] **视觉验证**
  - [ ] Hero 区域布局正确，文案专业
  - [ ] 核心优势卡片网格对齐
  - [ ] 品牌 Logo 显示正确
  - [ ] 新闻卡片样式一致
  - [ ] 最终 CTA 区域醒目

- [ ] **响应式测试**
  - [ ] 桌面端布局完整
  - [ ] 平板端适配
  - [ ] 移动端单列布局

- [ ] **SEO验证**
  - [ ] title 标签优化
  - [ ] meta description 存在
  - [ ] Schema.org 结构化数据
  - [ ] Open Graph 标签

---

### 检查点 4.1: 首页验证

**状态日志模板**:
```
[检查点 4.1] - 首页
状态: [待填写]
时间: [待填写]

代码审查:
  - HTML5 doctype: [通过/失败]
  - lang属性: [通过/失败]
  - viewport: [通过/失败]
  - meta标签: [通过/失败]
  - Schema.org: [通过/失败]

功能测试:
  - CSS加载: [通过/失败]
  - JS加载: [通过/失败]
  - 导航显示: [通过/失败]
  - 页脚显示: [通过/失败]
  - CTA按钮: [通过/失败]

视觉验证:
  - Hero区域: [通过/失败]
  - 核心优势: [通过/失败]
  - 品牌Logo: [通过/失败]
  - 新闻卡片: [通过/失败]
  - 最终CTA: [通过/失败]

响应式测试:
  - 桌面端: [通过/失败]
  - 平板端: [通过/失败]
  - 移动端: [通过/失败]

SEO验证:
  - title: [通过/失败]
  - description: [通过/失败]
  - Schema.org: [通过/失败]
  - Open Graph: [通过/失败]

问题列表:
  1. [问题描述] → [修复状态]
```

---

## Phase 6: 品牌列表页

### 步骤 5.1: 创建品牌列表页

**任务**: 创建 `brands/index.html`

**关键要求**:
- 字母筛选功能
- 分类下拉筛选
- 品牌卡片网格
- 分页组件

---

### 检查点 5.1: 品牌列表页验证

**验证清单**:
- [ ] 筛选按钮可点击
- [ ] 分类下拉可用
- [ ] 品牌卡片链接正确
- [ ] 分页组件样式正确
- [ ] 面包屑导航显示

---

## Phase 7: Infineon 品牌页 (关于品牌 - Tab导航默认页)

### 步骤 6.1: 创建 Infineon 品牌首页 (关于品牌)

**任务**: 创建 `infineon/index.html`

**说明**: 这是品牌子目录的默认页，对应"关于品牌"Tab

**页面结构**:

**1. 品牌简介**
- 品牌介绍（200-300字原创描述）
- 自然融入核心关键词: infineon distributor, infineon distributor USA, infineon distributor India 等
- 品牌历史、全球地位、技术优势

**2. 核心产品领域 (Core Product Areas)**
- 按类别展示产品，引导用户深入了解
- 产品分类卡片: IGBT功率模块、MOSFET场效应管、SiC/GaN宽禁带半导体、MCU微控制器、传感器等
- 每个卡片包含: 分类图标、名称、描述、产品数量、进入链接
- 点击链接到产品中心对应分类

**3. 解决方案与应用领域 (Solutions & Applications)**
- 针对目标行业展示解决方案能力
- 行业卡片: 新能源汽车、光伏逆变器、工业电机驱动、UPS电源等
- 每个卡片包含: 行业图标、名称、描述、相关解决方案链接
- 点击链接到解决方案详情页

**4. 最新技术支持展示**
- 展示最新3-5篇技术支持文章
- 文章卡片包含: 标题、摘要、发布日期、作者
- 点击链接到技术支持详情页
- 查看更多链接到技术支持列表页

**5. 授权证书展示**
- 展示Infineon授权代理证书
- 提升信任度和权威性
- 证书图片带alt属性

**关键要求**:
- 包含品牌 Tab 导航组件 (About Brand 高亮)
- 现代化、清晰的模块化布局
- 优化字体和排版以提高可读性
- SEO Title: Infineon Distributor | Authorized Infineon Agent | BeiLuo
- SEO Description: BeiLuo is an authorized Infineon distributor providing genuine Infineon IGBT, MOSFET, SiC modules with local stock and technical support.

---

### 步骤 6.2: 创建品牌专属 CSS

**任务**: 创建 `infineon/css/brand.css`

---

### 检查点 6.1: Infineon 品牌页验证

**验证清单**:
- [ ] 品牌 Tab 导航显示 (About Brand 高亮)
- [ ] 品牌简介 200-300字
- [ ] 核心关键词自然融入
- [ ] 核心产品领域卡片展示
- [ ] 解决方案与应用领域卡片展示
- [ ] 最新技术支持文章展示
- [ ] 授权证书展示
- [ ] 所有链接可点击
- [ ] 模块化布局正确
- [ ] SEO Title 符合规范
- [ ] SEO Description 符合规范

---

## Phase 8: 产品列表页

### 步骤 7.1: 创建产品分类页

**任务**: 创建 `infineon/products/igbt/index.html`

**关键要求**:
- 侧边栏分类导航
- 产品表格 (型号、系列、电压、电流、封装、库存)
- 搜索框
- 系列筛选下拉
- 分页

---

### 检查点 7.1: 产品列表页验证

**验证清单**:
- [ ] 侧边栏导航链接正确
- [ ] 产品表格数据完整
- [ ] 搜索框可用
- [ ] 筛选下拉可用
- [ ] 产品链接可点击

---

## Phase 9: 模板制作流程 + 产品相关模板

### 模板制作流程说明

**开发流程**: 制作模板 → 用数据/内容填充 → 批量生成详情页

**通用要求（所有模板必须包含）**:
- 与首页完全一致的 `<nav>` 导航栏
- `<footer>` 页脚
- 面包屑导航（Breadcrumbs）
- SEO Meta 标签占位符
- 侧边栏（根据页面类型）
- 品牌Tab导航（品牌子目录页面）

---

### 步骤 8.1: 创建产品分类列表页模板

**任务**: 创建 `templates/product-category-list.html`

**设计目标**: 展示品牌下所有产品分类，引导用户深入了解

**布局结构**:

**页面顶部描述区域**:
- H1 标题
- 200-300字原创描述，介绍产品分类的总体特点、主要系列、核心优势、应用领域
- 自然融入"品牌+产品+distributor"、"品牌+产品+selection"等关键词
- "选型指南"入口链接

**产品分类卡片网格**:
- 每个分类卡片包含：分类图标、名称、描述、产品数量、进入链接
- 分类：MCU微控制器、IGBT功率模块、MOSFET场效应管、SiC/GaN宽禁带半导体、传感器等

---

### 步骤 8.2: 创建二级产品分类页模板（型号表格页）

**任务**: 创建 `templates/product-table.html`

**设计目标**: 展示分类的所有型号、参数、封装等表格，支持动态表格列

**布局结构 (带侧边栏)**:

**左侧侧边栏**:
- 产品分类导航
- 快速跳转到其他分类

**右侧内容区**:

**页面顶部描述区域**:
- H1 标题（如"IGBT Modules"）
- 200-300字原创描述
- 自然融入"品牌+产品+distributor"关键词
- "选型指南"入口链接

**筛选区域**:
- 搜索框（按型号搜索）
- 系列筛选下拉（如EconoDUAL, EconoPACK, PrimePACK）
- 参数筛选（电压、电流等）

**动态表格**:
- 根据产品类型显示不同参数列
- IGBT表格列: 型号、系列、电压(VCES)、电流(IC)、封装、库存状态、操作
- MOSFET表格列: 型号、系列、电压、电流、Rds(on)、封装、库存状态、操作
- 斑马纹表格样式
- 表头加粗背景灰
- 每列支持筛选
- 移动端支持横向滚动
- 点击型号打开型号详情页

**Schema**: Product 类型的 JSON-LD 代码块（每个型号）

---

### 步骤 8.3: 创建产品详情页模板 (product-detail.html)

**任务**: 创建 `templates/product-detail.html`

**设计目标**: 电商级布局，强调产品参数清晰、文档下载便捷、询价入口

**布局结构 (CSS Grid)**:

**首屏 Hero 区域 (双栏布局)**:
- 左侧: 高清产品大图展示区（预留缩略图画廊位置）
- 右侧: 核心信息栏
  - H1 型号标题
  - 库存状态标签（绿色-有货/橙色-询价）
  - 简短描述
  - 双 CTA 按钮组（橙色实心"获取报价"、蓝色描边"下载数据手册"）

**详情内容区 (Tab 选项卡切换)**:
- Tab 切换卡: [产品概述]、[规格参数]、[应用电路]、[相关文档]
- **关键要求**: "规格参数"必须使用**斑马纹表格 (Zebra-striped Table)** 样式
  - 表头加粗背景灰
  - 移动端支持横向滚动

**底部推荐**:
- "配套料号推荐"的卡片轮播

**Schema**: 预留 Product 类型的 JSON-LD 代码块

**响应式适配**: 手机端（<768px）时，双栏变为单栏

---

### 步骤 8.4: 创建具体产品页面

**任务**:
- 创建 `infineon/products/index.html`（基于产品分类列表模板）
- 创建 `infineon/products/igbt/index.html`（基于二级分类页模板）
- 创建 `infineon/products/mosfet/index.html`（基于二级分类页模板）
- 创建 `infineon/products/sic/index.html`（基于二级分类页模板）
- 创建 `infineon/products/igbt/FF600R12ME4.html`（基于产品详情页模板）
- 创建 `infineon/products/igbt/FF450R12ME4.html`（基于产品详情页模板）

**关键要求**:
- 每个分类发布2个型号详情页
- 基于相应模板
- Schema.org Product 标记
- FAE 评论区块（代理商点评/应用解读）
- 替代料号推荐
- FAQ 手风琴（3-5个常见问题）
- 多样化 CTA:
  - "下载产品分类选型手册" (信息收集阶段)
  - "申请样品" (评估阶段)
  - "获取报价" (采购阶段)
  - "咨询技术问题" (研发阶段，链接到联系表单并注明转交FAE)

---

### 检查点 8.1: 产品分类列表页模板验证

**验证清单**:
- [ ] 顶部描述区域200-300字
- [ ] 关键词自然融入
- [ ] 选型指南入口链接
- [ ] 分类卡片网格布局正确
- [ ] 所有分类卡片显示完整

---

### 检查点 8.2: 二级产品分类页模板验证

**验证清单**:
- [ ] 侧边栏分类导航正确
- [ ] 顶部描述区域200-300字
- [ ] 搜索框可用
- [ ] 筛选功能正常
- [ ] 动态表格列根据类型变化
- [ ] 斑马纹表格样式正确
- [ ] 表头加粗背景灰
- [ ] 每列支持筛选
- [ ] 移动端横向滚动支持
- [ ] 点击型号跳转正确
- [ ] Product Schema正确

---

### 检查点 8.3: 产品详情页模板验证

**验证清单**:
- [ ] 双栏布局正确
- [ ] 库存状态标签样式正确
- [ ] Tab 选项卡切换正常
- [ ] 斑马纹表格样式正确
- [ ] 表头加粗背景灰
- [ ] 移动端横向滚动支持
- [ ] 配套料号轮播正常
- [ ] Product Schema 正确

---

### 检查点 8.4: 具体产品页验证

**验证清单**:
- [ ] Schema.org Product 标记正确
- [ ] FAE 评论区块显示
- [ ] 替代料号链接正确
- [ ] FAQ 手风琴展开/收起正常
- [ ] 所有 CTA 按钮可用
- [ ] 表单链接正确（转交FAE）

---

## Phase 10: 解决方案页模板

### 步骤 9.1: 创建解决方案列表页模板

**任务**: 创建 `templates/solutions-list.html`

**关键要求**:
- 解决方案卡片网格
- 每个卡片包含封面图、标题、摘要、应用场景标签
- 丰富列表页内容: 为每个解决方案增加一段摘要（Summary），包含核心关键词和应用场景

---

### 步骤 9.2: 创建解决方案详情页模板

**任务**: 创建 `templates/solution-detail.html`

**设计目标**: 展示技术实力，结构化内容呈现

**布局结构**:

**头部 Banner**:
- 全宽背景图或色块
- H1 标题、发布日期、分类标签叠加显示
- 文字加阴影保证可读性

**内容结构**:
- 方案概述（不少于800字）
- 方案框图（Block Diagram）
- 核心优势
- 推荐物料清单 (BOM List) - 链接到产品页
- 应用场景
- 客户案例（包含FAE个人见解）

**Schema**: Article 类型的 JSON-LD 代码块

---

### 步骤 9.3: 创建具体解决方案页面

**任务**: 
- 创建 `infineon/solutions/index.html`（基于列表模板）
- 创建 `infineon/solutions/ev-charging.html`（基于详情模板）
- 创建 `infineon/solutions/solar-inverter.html`
- 创建 `infineon/solutions/industrial-motor.html`
- 创建 `infineon/solutions/ups.html`

**关键要求**:
- 发布5篇解决方案详情页（独立URL结构）
- 每篇文字不少于800字
- 页面标题和内容围绕"行业 + 解决方案"
- 结构化内容: 使用H2, H3标签分解为"方案框图"、"核心优势"、"推荐物料清单 (BOM List)"、"应用场景"等模块
- 图文并茂: 每个解决方案配上方案框图（Block Diagram），图片添加详细的alt属性
- 物料清单与内链: BOM中列出关键IC型号，每个型号链接到对应的产品详情页
- 包含客户案例
- 包含FAE个人见解和决策框架
- 现代化、清晰的模块化布局
- 优化字体和排版以提高可读性
- 页面设置SEO友好的Title Tag
- 使用结构化标题标签（H1, H2, H3）
- 页面结尾加入"分销商"行动号召 (CTA)
- 侧边栏有相关解决方案推荐

---

### 检查点 9.1: 解决方案列表页验证

**验证清单**:
- [ ] 卡片网格布局正确
- [ ] 每个卡片有摘要
- [ ] 应用场景标签正确
- [ ] 封面图有alt属性

---

### 检查点 9.2: 解决方案详情页模板验证

**验证清单**:
- [ ] Banner布局正确
- [ ] 文字阴影保证可读性
- [ ] 方案框图显示正常
- [ ] BOM表格完整
- [ ] Article Schema正确

---

### 检查点 9.3: 具体解决方案页验证

**验证清单**:
- [ ] 文章字数 >= 800字
- [ ] 包含客户案例
- [ ] 包含FAE见解
- [ ] 产品链接可点击
- [ ] 案例引用样式正确

---

## Phase 11: 技术支持详情页模板 + FAE团队页

### 步骤 10.1: 创建技术支持列表页模板

**任务**: 创建 `templates/support-list.html`

**关键要求**:
- 分类Tab切换: 选型指南、应用笔记、问题排查、新品评测
- 标签系统: 为每篇文章打上技术标签（如IGBT, AURIX, BLDC Motor, CAN Bus）
- 点击标签聚合所有相关文章
- 文章卡片列表

---

### 步骤 10.2: 创建技术支持详情页模板 (tech-detail.html)

**任务**: 创建 `templates/tech-detail.html`

**设计目标**: 类似技术博客或Wiki，优化长文阅读体验，方便通过目录跳转

**布局结构 (Content + Sidebar)**:

**容器布局**:
- 使用 `display: grid; grid-template-columns: 1fr 300px;`（左宽右窄）

**左侧文章区 (Main)**:
- 排版优化: 限制正文最大宽度 `max-width: 800px`
- 行高 `line-height: 1.8`，段间距 24px
- **样式细节**:
  - H2/H3 标题需带有左侧竖线装饰
  - 代码块 (`<pre><code>`) 需有灰色背景和高亮样式
  - 引用块 (`<blockquote>`) 需有左边框
- 作者栏: 文章顶部展示FAE工程师头像、姓名、发布日期
- 上下文链接: 产品型号链接到产品分类页，相关概念链接到其他文章
- 相关文章模块: 文章末尾推荐3-5篇最相关的其他文章
- 文字不少于800字

**右侧侧边栏 (Sidebar)**:
- **Sticky效果**: `position: sticky; top: 100px;`
- 文章目录 (Table of Contents) - 滚动时始终可见
- 相关PDF下载
- 向工程师提问表单入口

**Schema**: 预留 TechArticle 类型的 JSON-LD 代码块

**响应式适配**: 手机端（<768px）时，侧边栏自动移动到文章底部

---

### 步骤 10.3: 创建具体技术支持页面

**任务**:
- 创建 `infineon/support/index.html`（基于列表模板）
- 创建 `infineon/support/igbt-selection-guide.html`（基于详情模板）
- 创建 `infineon/support/mosfet-application-note.html`
- 创建 `infineon/support/sic-device-troubleshooting.html`
- 创建 `infineon/support/coolsic-product-review.html`

**关键要求**:
- 每个分类发布1篇详情页，共4篇
- 每篇文字不少于800字
- 内容有深度，具备专业文章应有的细节和篇幅
- 包含FAE个人见解和决策框架
- 标签系统完整（如IGBT, AURIX, BLDC Motor, CAN Bus）
- 上下文链接: 产品型号链接到产品分类页，相关概念链接到其他文章
- 相关文章模块: 文章末尾推荐3-5篇最相关的其他文章
- 现代化、清晰的模块化布局
- 优化字体和排版以提高可读性
- 页面设置SEO友好的Title Tag
- 使用结构化标题标签（H1, H2, H3）
- 页面结尾加入"分销商"行动号召 (CTA)
- 侧边栏有相关文章推荐

---

### 步骤 10.4: 创建 FAE 工程师团队页

**任务**: 创建 `infineon/team/index.html` 和 `infineon/team/michael-chen.html`

**关键要求**:
- 展示所有FAE工程师卡片
- 真实姓名、照片、技术专长、从业经验
- 点击工程师卡片进入个人简介页
- 每篇文章的作者处链接到对应的工程师简介页
- Schema.org Person 标记

---

### 检查点 10.1: 技术支持列表页验证

**验证清单**:
- [ ] 分类Tab切换正常
- [ ] 标签系统可用
- [ ] 标签点击聚合正确
- [ ] 文章卡片显示完整

---

### 检查点 10.2: 技术支持详情页模板验证

**验证清单**:
- [ ] 双栏布局正确
- [ ] 正文max-width: 800px
- [ ] 行高1.8，段间距24px
- [ ] H2/H3左侧竖线装饰
- [ ] 代码块灰色背景
- [ ] 引用块左边框
- [ ] 侧边栏Sticky效果
- [ ] 目录正常显示
- [ ] TechArticle Schema正确

---

### 检查点 10.3: 具体技术支持页验证

**验证清单**:
- [ ] 文章字数 >= 800字
- [ ] 包含FAE个人见解
- [ ] 包含决策框架
- [ ] 上下文链接正确
- [ ] 相关文章推荐3-5篇
- [ ] 作者链接到工程师简介页

---

### 检查点 10.4: FAE团队页验证

**验证清单**:
- [ ] Person Schema 标记正确
- [ ] 工程师卡片显示完整
- [ ] 个人简介页内容完整
- [ ] 文章作者链接正确

---

## Phase 12: 新闻详情页模板 + 关于/联系页

### 步骤 11.1: 创建新闻列表页模板

**任务**: 创建 `templates/news-list.html`

**关键要求**:
- 分离展示：公司新闻和行业动态不在同一板块
- 公司新闻：展示公司内部动态、活动、公告
- 行业动态：优化行业热点关键词，引用权威来源并加入解读
- 新闻卡片布局

---

### 步骤 11.2: 创建新闻详情页模板 (news-detail.html)

**任务**: 创建 `templates/news-detail.html`

**设计目标**: 杂志风格，强调大图视觉和分享传播

**布局结构 (Single Column)**:

**头部视觉 (Header Banner)**:
- 使用全宽度的背景图或色块
- 将 H1 标题、发布日期、分类标签（如"行业动态"）叠加显示在 Banner 上
- **文字加阴影以保证可读性**

**正文区域**:
- 采用**单栏居中布局**，去除侧边栏干扰，聚焦内容阅读
- 文字不少于800字

**底部功能**:
- **分享栏**: 社交媒体分享按钮图标
- **推荐阅读**: 底部展示3个"最新行业动态"的图文卡片

**侧边栏（新闻导航）**:
- 最新公司新闻列表
- 最新行业动态列表
- 相关新闻推荐

**Schema**: 预留 NewsArticle 类型的 JSON-LD 代码块

---

### 步骤 11.3: 创建具体新闻页面

**任务**:
- 创建 `news/index.html`（基于列表模板）
- 创建 `news/company-news-1.html`（基于详情模板）
- 创建 `news/industry-news-1.html`（基于详情模板）

**关键要求**:
- 发布1篇公司新闻和1篇行业动态详情页
- 每篇文字不少于800字
- 将"公司新闻"和"行业动态"分离展示，不在同一板块
- 公司新闻：展示公司内部动态、活动、公告
- 行业动态：优化行业热点关键词，引用权威来源并加入自己的解读，打造成有价值的内容
- 使用 Schema.org 标记: 对文章使用 Article 或 NewsArticle 的Schema标记，在HTML中加入JSON-LD代码
- 现代化、清晰的模块化布局
- 优化字体和排版以提高可读性
- 页面设置SEO友好的Title Tag
- 使用结构化标题标签（H1, H2, H3）
- 页面结尾加入"分销商"行动号召 (CTA)
- 侧边栏有相关新闻推荐

---

### 步骤 11.4: 创建关于我们页

**任务**: 创建 `about/index.html`

**页面结构**:

**1. 公司简介**
- 详细介绍公司历史、使命、愿景
- 自然地使用"electronic components distributor"、"chip stock"、"authorized distributor"、"genuine original stock"等关键词

**2. 发展历程**
- 时间线展示公司重要里程碑
- 关键年份和事件

**3. 核心优势**
- 库存深度
- 技术支持团队（FAE团队）
- 物流能力
- 授权资质

**4. 报关单展示**
- 每个产品做报关单展示
- 提升信任度和权威性
- 报关单图片带alt属性

**5. 服务客户案例**
- 展示主要客户案例
- 客户logo或名称
- 合作成果

**关键要求**:
- 详细介绍公司历史、团队实力、服务客户案例
- 采用现代化、清晰的模块化布局
- 优化字体和排版以提高可读性
- 页面设置SEO友好的Title Tag
- 使用结构化标题标签（H1, H2, H3）

---

### 步骤 11.5: 创建联系页

**任务**: 创建 `contact/index.html`

**页面结构**:

**左侧内容区**:
- 联系表单（姓名、邮箱、电话、公司、留言）
- 表单验证
- 提交按钮

**右侧边栏**:
- 联系方式:
  - WhatsApp: +86 15013702378
  - WeChat: +86 18612518271
  - Email: info@elec-distributor.com
- 全球办公室联系信息（来自contact.txt）
  - 深圳总部
  - 香港办公室
  - 新加坡办公室
  - 美国办公室

**关键要求**:
- 把contact.txt的联系方式添加到contact栏目页上
- 采用现代化、清晰的模块化网格布局
- 联系方式放在页面右侧边栏
- 优化字体和排版以提高可读性
- 页面设置SEO友好的Title Tag

---

### 检查点 11.1: 新闻列表页验证

**验证清单**:
- [ ] 公司新闻和行业动态分离展示
- [ ] 新闻卡片布局正确
- [ ] 分类标签正确

---

### 检查点 11.2: 新闻详情页模板验证

**验证清单**:
- [ ] Banner布局正确
- [ ] 文字阴影保证可读性
- [ ] 单栏居中布局
- [ ] 分享栏正常显示
- [ ] NewsArticle Schema正确

---

### 检查点 11.3: 具体新闻页验证

**验证清单**:
- [ ] 文章字数 >= 800字
- [ ] 行业动态引用权威来源
- [ ] 包含自己的解读
- [ ] 侧边栏新闻导航正确

---

### 检查点 11.4: 关于我们页验证

**验证清单**:
- [ ] 公司介绍完整（历史、使命、愿景）
- [ ] 发展历程时间线正确
- [ ] 核心优势展示（库存、技术、物流、资质）
- [ ] 报关单展示（提升信任度）
- [ ] 服务客户案例展示
- [ ] 关键词自然融入
- [ ] 模块化布局正确
- [ ] 字体排版可读性良好
- [ ] SEO Title正确
- [ ] H1/H2/H3结构正确

---

### 检查点 11.5: 联系页验证

**验证清单**:
- [ ] 联系表单字段完整（姓名、邮箱、电话、公司、留言）
- [ ] 表单验证正常
- [ ] 全球办公室信息正确（来自contact.txt）
- [ ] WhatsApp链接正确（+86 15013702378）
- [ ] WeChat链接正确（+86 18612518271）
- [ ] Email链接正确（info@elec-distributor.com）
- [ ] 右侧边栏布局正确
- [ ] 网格布局正确
- [ ] 模块化布局正确
- [ ] 字体排版可读性良好
- [ ] SEO Title正确

---

## Phase 13: JSON 数据模板

### 步骤 12.1: 创建 about_brand.json

**任务**: 创建 `infineon/data/about_brand.json`

**关键要求**:
- 品牌基本信息（名称、标语、描述、成立时间、总部）
- 授权证书数组
- 核心产品分类
- 关键应用领域
- SEO 字段（title, description, keywords）
- Schema.org Organization 标记

---

### 步骤 12.2: 创建 products.json

**任务**: 创建 `infineon/data/products.json`

**关键要求**:
- 产品分类数组
- 每个分类包含系列、型号列表
- 每个型号包含规格参数、库存状态、数据手册链接
- FAQ 数组
- 相关型号和替代型号
- SEO 字段
- Schema.org Product 标记

---

### 步骤 12.3: 创建 solutions.json

**任务**: 创建 `infineon/data/solutions.json`

**关键要求**:
- 解决方案数组
- 每个方案包含标题、摘要、详细内容
- 区块图路径
- 核心优势列表
- BOM 清单（链接到产品页）
- 应用场景
- 客户案例
- 作者信息
- SEO 字段
- Schema.org Article 标记

---

### 步骤 12.4: 创建 support.json

**任务**: 创建 `infineon/data/support.json`

**关键要求**:
- 文章分类数组（选型指南、应用笔记、问题排查、新品评测）
- 文章数组
- 每篇文章包含目录 (TOC)
- 作者信息（链接到工程师简介页）
- 相关文章
- 下载文件列表
- 技术标签
- SEO 字段
- Schema.org TechArticle 标记

---

### 步骤 12.5: CSS 样式与交互补充

**任务**: 在 `css/components.css` 中添加模板所需的特定样式类

**需要添加的样式类**:
- `.tab-container` - Tab选项卡容器
- `.tab-nav` - Tab导航
- `.tab-content` - Tab内容区
- `.spec-table` - 规格参数表格（斑马纹）
- `.spec-table th` - 表头加粗背景灰
- `.sticky-sidebar` - Sticky侧边栏
- `.article-content` - 文章内容区
- `.article-content h2/h3` - 左侧竖线装饰
- `.article-content pre/code` - 代码块灰色背景
- `.article-content blockquote` - 引用块左边框
- `.hero-banner` - Hero Banner区域
- `.breadcrumb` - 面包屑导航

**响应式适配**:
- 产品页双栏 → 手机端单栏（<768px）
- 技术页侧边栏 → 手机端移动到文章底部（<768px）
- 表格横向滚动（<768px）

---

### 检查点 12.1: JSON 数据模板验证

**验证清单**:
- [ ] about_brand.json 结构完整
- [ ] products.json 结构完整
- [ ] solutions.json 结构完整
- [ ] support.json 结构完整
- [ ] CSS样式类已添加
- [ ] 响应式适配正常
- [ ] 所有必填字段已填充
- [ ] SEO 字段符合长度要求（Title ≤60字符, Description ≤160字符）
- [ ] Schema.org 结构化数据完整
- [ ] 所有链接路径正确
- [ ] 内容纯英文，无语法错误
- [ ] 文章字数 >= 800字

---

## Phase 14: SEO 优化 + 检查清单文件 + 新增品牌流程

### 步骤 13.1: 创建 Sitemap 和 Robots.txt

**任务**: 
- 创建 `sitemap.xml`
- 创建 `sitemap-index.xml`
- 创建 `robots.txt`

---

### 步骤 13.2: 创建面包屑导航组件

**任务**: 创建 `components/breadcrumb.html`

**关键要求**:
- 所有页面必须包含面包屑导航
- 使用 Schema.org BreadcrumbList 结构化数据
- 当前页面不添加链接
- 使用 " > " 作为分隔符
- 支持点击返回上一级

**面包屑路径规范**:
- 首页: Home
- 品牌列表页: Home > Brands
- 品牌首页: Home > Infineon
- 产品分类页: Home > Infineon > Products > IGBT Modules
- 型号详情页: Home > Infineon > Products > IGBT Modules > FF600R12ME4
- 解决方案详情页: Home > Infineon > Solutions > EV Charging
- 技术支持详情页: Home > Infineon > Support > IGBT Selection Guide

---

### 步骤 13.3: 创建检查清单文件

**任务**: 创建 `docs/check_list1.md`

**内容要求**:
- HTML 模板检查清单
- 所有模板类型完整性检查（首页、品牌列表、品牌首页、产品分类、产品详情、解决方案列表、解决方案详情、技术支持列表、技术支持详情、FAE团队页、新闻列表、新闻详情、关于我们、联系我们）
- 每个模板的布局检查
- 响应式设计检查
- 面包屑导航检查
- SEO Meta 标签检查
- 导航栏和页脚一致性检查

---

### 步骤 13.4: 创建 JSON 检查清单文件

**任务**: 创建 `docs/check_list2.md`

**内容要求**:
- JSON 模板检查清单
- about_brand.json 结构检查
- products.json 结构检查
- solutions.json 结构检查
- support.json 结构检查
- 所有必填字段检查
- SEO 字段长度检查
- Schema.org 结构化数据检查
- 内容纯英文检查
- 文章字数检查

---

### 步骤 13.5: 创建新增品牌流程文档

**任务**: 创建 `docs/new_brand_workflow.md`

**新增品牌流程**:

**步骤1: 准备品牌数据**
- 依据新品牌的产品、应用行业、解决方案，定制内容
- 创建品牌JSON数据文件（about_brand.json, products.json, solutions.json, support.json）
- 内容与英飞凌不同，依据新品牌特点定制

**步骤2: 复制模板**
- 复制 `templates/` 目录下的所有HTML模板
- 复制 `css/`, `js/`, `components/` 目录

**步骤3: 修改JSON数据**
- 修改品牌名称、标语、描述
- 修改产品分类（依据新品牌产品线）
- 修改解决方案（依据新品牌应用行业）
- 修改技术支持文章（依据新品牌产品特点）

**步骤4: 生成页面**
- 运行 `scripts/generate-pages.js`
- 基于模板和JSON数据生成静态页面
- 生成品牌子目录（如 `/texasinstruments/`）

**步骤5: 更新品牌列表页**
- 在品牌列表页（`/brands/`）新增品牌卡片
- 添加品牌Logo、简介、链接

**步骤6: 验证和测试**
- 验证所有页面正常显示
- 验证链接正确
- 验证SEO元素完整

**关键原则**:
- 复制模板，修改JSON数据，即可新增品牌子目录网站
- 每个品牌的产品分类、应用行业、解决方案都不同，需要定制内容
- 品牌列表页要新增品牌卡片

---

### 步骤 13.6: 创建 JS 生成脚本

**任务**: 创建 `scripts/generate-pages.js`

**功能要求**:
- 读取 JSON 数据文件（about_brand.json, products.json, solutions.json, support.json）
- 基于 HTML 模板生成静态页面
- 支持批量生成品牌子目录页面
- 支持差异化内容生成

**生成逻辑**:
1. 读取模板文件（templates/*.html）
2. 读取品牌 JSON 数据
3. 替换模板中的占位符（如 {{brand_name}}, {{product_model}}）
4. 生成具体的 HTML 页面到品牌子目录
5. 处理图片路径和链接

**关键函数**:
- `generateBrandPages(brandData)` - 生成品牌所有页面
- `generateProductPages(productsData)` - 生成产品相关页面
- `generateSolutionPages(solutionsData)` - 生成解决方案页面
- `generateSupportPages(supportData)` - 生成技术支持页面

---

### 步骤 13.7: 创建页面验证脚本

**任务**: 创建 `scripts/validate-pages.js`

**功能要求**:
- 验证生成的 HTML 页面是否符合规范
- 检查所有链接是否有效（无404）
- 检查 Schema.org 标记是否完整
- 检查图片 alt 属性是否存在
- 检查 SEO meta 标签是否正确

---

### 检查点 13.1: SEO 文件验证

**验证清单**:
- [ ] sitemap.xml 格式正确
- [ ] URL 完整
- [ ] robots.txt 允许爬虫
- [ ] sitemap 索引正确引用

---

### 检查点 13.2: 面包屑导航验证

**验证清单**:
- [ ] BreadcrumbList Schema 标记正确
- [ ] 所有页面包含面包屑
- [ ] 路径正确
- [ ] 当前页无链接
- [ ] 分隔符正确

---

### 检查点 13.3: 检查清单文件验证

**验证清单**:
- [ ] check_list1.md 内容完整
- [ ] check_list2.md 内容完整
- [ ] new_brand_data.md 内容完整

---

## Phase 15: 最终验证和部署

### 步骤 14.1: 最终检查清单

**验证清单**:
- [ ] 所有 HTML 文件验证通过
- [ ] 所有链接可访问
- [ ] Schema.org 标记测试通过
- [ ] Lighthouse 性能评分 > 90
- [ ] 响应式测试通过
- [ ] 可访问性测试通过

---

## 执行日志记录规范

每个检查点完成后，必须在本文档中更新状态日志。

### 日志更新位置
在对应检查点下方填写实际结果：

```
[检查点 X.X] - [模块名称]
状态: [通过/失败]
时间: [YYYY-MM-DD HH:MM]
...
```

### Git 提交规范
每个 Phase 完成后提交：
```bash
git add .
git commit -m "feat: [Phase X] - [简短描述]"
```

---

**文档创建完成，准备开始执行开发任务。**
