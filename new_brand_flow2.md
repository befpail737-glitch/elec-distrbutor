新增品牌
============================================
铁律：
1.做纯英文网站
2.按照new_brand_data.md，用seo-geo-claude-skills 库填充JSON
3.按照顺序新增品牌，请完全按照新增品牌new_brand.md要求。做完一个网站，检查清单验证，
如ok,再做下一个网站。中间不要询问停止，一气呵成做完所有品牌。
4.Optimize阶段检查出所有问题后，不要停顿询问，直接全部修复。
5.Cross-cutting阶段检查出所有问题后，不要停顿询问，直接全部修复。
============================================
新增品牌步骤
============================================
<0>创建一个新品牌的子目录文件夹，命名xx(xx是实际品牌，例如semikron),把这个文件夹做新品牌的工作区目录。
复制new_brand_data.md,复制new_brand_flow.md，复制所有html模板，复制所有json模板到xx文件夹
============================================
<1>.初始化项目记忆（Cross-cutting → memory-management）
使用场景：把步骤 1 的报告关键信息导入 skill 库，让后续所有技能都有上下文记忆。

使用 Cross-cutting 的 memory-management 技能，为这个项目初始化记忆结构。

项目名称： xx Distributor GEO SEO 项目 xx是品牌
行业：电子元器件 / 半导体分销
核心关键词：xx Distributor, (xx是品牌)
目标国家：美国、德国、越南、印度、韩国，意大利，波兰，俄罗斯，马来西亚,巴西
业务优势：授权代理商、本地仓库、本地交货、授权证书
已完成：已生成完整的 10 章 GEO SEO 分析报告（请记住报告中的关键长尾词列表、竞品分析和 GEO 架构建议）

请：
1. 初始化 HOT / WARM / COLD 记忆结构
2. 将核心关键词、目标国家、差异化优势存入 HOT 缓存
3. 保存报告中的主要 Topic Cluster 和优先级关键词
4. 输出当前记忆摘要
使用 memory-management 更新项目的记忆

==================================================
<2>.你现在使用 seo-geo-claude-skills 库，为 xx distributor 项目生成一份完整、专业、可落地的 SEO/GEO 分析报告。

项目背景（请从 memory-management 调用或记住）：
- 核心关键词：xx distributor 
- 行业：电子元器件 / 半导体分销
- 目标国家：美国、德国、法国、印度、越南、马来西亚、日本、韩国、 墨西哥、土耳其、意大利、波兰、法国
- 我们是  核心分销商，优势是价格、本地仓库备货、快速交付

请严格按以下流程执行（使用 skill 库的 contract 机制）：

1. **Research 阶段**  
   - 使用 keyword-research + serp-analysis + competitor-analysis  
   - 挖掘至少 30 个长尾关键词（按 6 大分类：地域型、混合地域型、产品/应用型、授权/信任型、交易/服务型、问题/痛点型）  
   - 分析搜索意图、竞争格局、前 10 名竞品（含 Mouser、Digi-Key、Arrow 及各国本地竞品）  
   - 输出 GEO 特定洞察（各国本地化特征、PAA、本地地图结果等）

2. **Cross-cutting 质量把关**  
   - 使用 content-quality-auditor（CORE-EEAT）和 CITE 信任评分系统对分析结果进行审计

3. **生成完整报告**  
   使用 performance-reporter + 自定义结构，输出 Markdown 格式的**完整 10 章 SEO/GEO 分析报告**，章节必须包含：

   1. 关键词概述与竞争格局（含各国搜索量占比、前 10 竞品）
   2. 长尾关键词挖掘（6 大分类，每条标注优先级、Landing Page URL、目标国家、hreflang 建议）
   3. 用户搜索意图分析（分层 + 各国差异）
   4. 用户痛点深度分析（表格形式）
   5. 竞争对手深度对比（标题结构、信任信号、本地化、E-E-A-T 等）
   6. SEO优化建议（On-Page 模板、技术清单、部署平台推荐）
   7. 转化与跟踪机制（CTA 优化、KPI、地域细分）
   8. 风险警示与行动计划（分阶段时间表）
   9. GEO专属优化策略（hreflang、多地域架构、Google Business Profile、本地目录等）
   10. 数据来源与方法说明

所有内容必须基于 skill 库的真实分析结果，不能凭空生成。语言专业但通俗，重点突出“如何差异化打败国际大分销商”和“快速提升全球+本地询盘转化”。

现在开始执行，请一步一步显示进度，并在最后输出完整的 Markdown 报告。
使用 memory-management 更新项目的记忆
=============================================
<3>. 你现在是BeiLuo www.elec-distributor.com\xx (xx是品牌)的高级 SEO+GEO 工程师，已完整加载 seo-geo-claude-skills 全部 20 个技能。

任务：为【新增品牌：{brand_name}】（例如 ST、Cree、Semikron、Crmicro 等）创建全新的品牌子目录网站所需全部独立结构化 JSON 文件。

### 必须严格按以下顺序执行（不可跳步）：

1. **读取必要文档**
   - 读取工作区文件：SEO/GEO分析报告
   - 读取或生成 new_brand_data.md（JSON 数据要求规范文档），确保符合 prompt2.md 中所有 JSON 字段要求。

2. **调用 seo-geo-claude-skills 技能（按顺序）**
   - **entity-optimizer** → "Build canonical entity profile for {brand_name} as authorized core distributor in power semiconductors / electronics"
   - **keyword-research** → "/seo:keyword-research {brand_name} distributor"
   - **serp-analysis** + **content-gap-analysis** → "Full SERP + content gap analysis for {brand_name} distributor vs competitors"
   - **geo-content-optimizer** + **seo-content-writer** → 为每一个 JSON 部分生成专业 B2B 内容（纯英文，差异化、高价值、决策引导）
   - **schema-markup-generator** → "/seo:generate-schema" 为以下类型生成 JSON-LD：
     - Organization（about_us.json）
     - Product + Offer（products.json）
     - FAQPage（每个 FAQ JSON）
     - Article / NewsArticle（news.json、solutions.json、support.json）
   - **meta-tags-optimizer** → 为每个页面生成 title、description、keywords
   - **content-quality-auditor** → 每生成一个主要 JSON 后立即审计（CORE-EEAT 80项），必须得到 "ship" 判决才能继续
   - **memory-management** → 保存当前品牌项目上下文

3. **生成以下独立 JSON 文件（全部输出到工作区目录 /{brand_slug}/ ）**
每个 JSON 文件必须同时包含：
   - 页面直接使用的字段（title, metaDescription, h1, content, images[], faqs[], tables 等）
   - 完整的 JSON-LD Schema.org 结构化数据（<script type="application/ld+json"> 可直接复制）

文件列表（严格创建）：
- about_us.json
- products.json          （产品分类页含动态表格列、每个产品分类至少2个型号详情页）
- solutions.json         （至少 5 个行业解决方案）
- support.json           （详情文章少4篇详情文章）

所有内容必须：
- 纯英文、专业 B2B 半导体分销语气
- 自然融入 GEO 优化（AI 易引用）
- 差异化（与 Infineon 完全不同）
- 每类 FAQ 5-15 条深度问答 + 决策引导，集成到页面
- 符合 prompt2.txt 全部要求（关键词布局、内部链接、CTA 等）
- 无 404、空链接

4. **生成 JS 脚本**
   生成一个 `generate-pages.js` 脚本，复制现有模板，读取以上 JSON，一键批量生成该品牌全部 HTML 页面。

5. **最终验证**
   - 确认所有 JSON 文件符合 Google Rich Results 测试标准（Product、FAQPage、NewsArticle、Organization 等）
   - 输出完整文件树
   - 用new_brand_data.md验证（100% 通过才能结束）

现在开始执行！
品牌名称：【在这里替换为具体品牌，例如 ST 或 Crmicro】
brand_slug 请使用 kebab-case（例如 st-microelectronics）

请一步一步告诉我每个技能的调用结果和生成的 JSON 文件内容（用代码块展示每个 .json）。
最后输出 generate-pages.js 并确认可以直接运行生成 HTML。
请输出检查报告 +修复+使用 memory-management 更新项目的记忆

================================================
<4>.更新github代码库，等待cloudflare pages部署更新。用cloudflare mcp查看是否cloudflare pages更新，
如cloudflare pages已更新，再下一步。
================================================

<5>.内容结构检测 + 修改 + 修复（Optimize 阶段）
使用场景：对现有产品页、文章页进行审计和优化。

使用 Optimize 阶段的 on-page-seo-auditor 和 technical-seo-checker 技能，对以下页面进行完整 SEO 检测和改进建议：

URL：https://xx.elec-distributor.com/ xx是品牌

要求：
- 给出带分数的 On-Page 审计报告（Title、Meta、H1-H3、内容结构、Schema 等）
- 指出具体问题和修复建议
- 结合项目记忆中的 GEO 策略，提出本地化优化点（德国合规、亚洲交货期等）
- 同时使用 internal-linking-optimizer 建议内部链接优化方案

最后用 content-refresher 技能，如果内容过时，请给出刷新版本大纲。

使用 Optimize 阶段的 content-refresher 技能，对所有文章依次修改。

请分析当前问题，结合 2026 年最新规格和本地库存案例，给出更新后的内容结构和关键修改点。
请输出检查报告 +修复+使用 memory-management 更新项目的记忆
================================================

<6>.质量把关 + 信任检测 + 记录（Cross-cutting）
使用场景：每次 Optimize 之后，进行质量检查并记录历史。

使用 Cross-cutting 技能对刚刚优化的页面进行质量把关和记录：

1. 使用 content-quality-auditor 运行 CORE-EEAT 80 项审计，给出详细分数和改进建议
2. 使用 domain-authority-auditor / CITE 系统评估页面信任度，重点检查授权证书、本地联系方式、Google Business Profile 等信号
3. 使用 entity-optimizer 强化品牌实体（授权分销商、本地库存等）
4. 使用 memory-management 把本次优化记录下来，包括：
   - 更新日期
   - 修改内容
   - 分数变化（优化前 vs 优化后）
   - 已优化的关键词和仍需优化的关键词列表

请输出审计报告 +修复+memory-management 记忆更新确认
===============================================

新增品牌名单
Crmicro，CRRC，Macmic,Starpower,BYD，silan，nce power，Sino Microelectronic
Infineon,Semikron,fuji，mitsubish，ixys,cree，genesic，inventchip，rohm,sanrex，派恩杰
Power intergrations,Firstack,bronze
LEM ，galaxycore，smartsens,memsensing,goertek ，aac，meiji,
Faratronic，jianghai,aishi，万裕，三莹，lelon，capxon，tongfeng,aowei，narada，华容 ，cectn凯琦佳
hongfa,松下
cosmo冠西，Liteon，
Sinofuse，bussmann,littelfuse，mersen
Ti, ADI,ST,Microchip,renesas，nxp，allegro，espressif，
micron，nexperia,yangtze，unisplendour，sk hynix，will,hisilicon
xilinx，skyworks,lattice，gowin,anlogic，unisoc,jingwei qili
gigadevice，Sinowealth,nationstech，macrosilicon，航顺,nuvoton，
novosense，
chipsea
3peak，richtek,realtek,
sgmicro,silergy，sanyou,utc，wurth，walsin
lrc,yangjie,sunlord
hci，yxc，siward,
vicor,mornsun,,mean well，xinleineng,cetc，aipu,p-duke，recom,tdk-lambda,hawun皓文，cincon，cosel


====================================


