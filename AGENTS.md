# AGENTS.md

本文件面向在本仓库中工作的 AI 编码代理，也适用于人类贡献者。它描述本项目的结构约定，以及**提交信息（commit message）的强制规范**。若本文件与 `README.md` 有冲突，以本文件和实际代码为准；修改流程或约定时，请同步更新本文件。

## 1. 项目速览

复旦大学视觉与学习实验室（FVL）官网，基于 VitePress 构建，中英文双语，部署到 GitHub Pages。

| 项目 | 说明 |
| --- | --- |
| 框架 | VitePress 1.6 + Vue 3 + TypeScript + Markdown |
| 包管理器 | npm（仓库内提交了 `package-lock.json`，不要混用 pnpm/yarn） |
| 站点入口 | `docs/`（中文为根 locale，英文在 `docs/en/`） |
| 业务数据 | `docs/.vitepress/data/*.ts` |
| 页面组件 | `docs/.vitepress/theme/views/`、`docs/.vitepress/theme/components/` |
| 静态资源 | `docs/public/assets/`，访问路径为 `/assets/...` |
| 部署 | `.github/workflows/deploy.yml`，推送到 `main` 或手动触发 |

常用命令：

```bash
npm ci                 # 按 lockfile 安装（CI 与本地首选）
npm run docs:dev       # 本地开发
npm run docs:build     # 构建，提交前必须通过
npm run docs:preview   # 预览构建产物
```

关键配置事实：`lastUpdated: false`、`appearance: false`、`cleanUrls: false`、`base: '/'`、`ignoreDeadLinks: true`。除非需求明确要求，不要改动这些值。站点不显示“最后更新”时间，这是有意为之。

## 2. 提交信息规范（本文件重点）

### 2.1 采用的规范

本项目采用 **[Conventional Commits 1.0.0](https://www.conventionalcommits.org/zh-hans/v1.0.0/)**，在 Angular 规则的风格基础上，采用 `@commitlint/config-conventional` 的扩展词表（增加了 `style`、`chore` 等类型）：

- 提交标题必须可被 `commitlint` 等工具解析；当前仓库尚未接入 `commitlint` / `husky`，规则依靠贡献者与代理自觉执行；
- 不使用 gitmoji，不以 emoji 代替 type；
- 不自行发明 type 或 scope。确需新增时，先修改本文件的词表，再使用。

规范只强制 `feat`、`fix` 的语义（分别对应 SemVer 的 MINOR、PATCH）；其余类型来自 Angular 与 commitlint 的通行词表，不具有 SemVer 含义，除非包含破坏性变更。

### 2.2 提交结构

```text
<type>(<scope>): <subject>

<body>

<footer>
```

硬性要求：

1. `type` 与 `scope` 使用小写；`scope` 放在英文括号中。
2. `type` 或 `scope` 之后必须是**英文冒号 + 一个空格**，再接 `subject`。
3. 标题与正文之间必须空一行；正文与 footer 之间也必须空一行。
4. 标题只写一行，不换行。
5. 破坏性变更用 `!` 或 `BREAKING CHANGE:` footer 标记（见 2.8）。
6. 标题建议不超过 50 个字符，硬上限 72 个字符（含 type 和 scope）。

### 2.3 type 词表

| type | 语义 | 本仓库示例 |
| --- | --- | --- |
| `feat` | 新增功能、页面、组件，或新增一条新闻/论文/成员数据 | `feat(publications): add EVA-Cap paper` |
| `fix` | 修复缺陷：错误链接、错误信息、布局或交互问题 | `fix(publications): correct broken arXiv links` |
| `docs` | **仅限仓库文档**：`README.md`、代码注释、`AGENTS.md` 等 | `docs: add AGENTS.md` |
| `style` | 只影响外观或格式，不改变行为与内容：CSS、间距、颜色、标点与空格 | `style(news): tighten card spacing on mobile` |
| `refactor` | 结构调整，外部表现不变：组件拆分、数据整理、重命名 | `refactor(people): group alumni by graduation year` |
| `perf` | 性能优化：图片体积、加载速度、渲染开销 | `perf(homepage): compress cover image` |
| `test` | 测试相关（当前无测试体系，新增测试时使用） | `test(people): add sorting unit tests` |
| `build` | 依赖或构建配置变更 | `build(deps): upgrade vitepress to 1.6.4` |
| `ci` | GitHub Actions 等 CI 配置 | `ci: cache npm dependencies` |
| `chore` | 杂项维护：`.gitignore`、脚本、非依赖类工具配置 | `chore: ignore local backup files` |
| `revert` | 回滚此前的提交 | `revert: feat(news): add 2026-07-02 award news` |

两点需要特别说明：

- **`docs` 不用于官网页面文案。** 新闻、论文、成员、招聘等站点内容属于产品本身，按影响归入 `feat`、`fix`、`refactor` 或 `style`。
- **`style` 在本仓库放宽为“纯视觉调整”。** 严格规范中 `style` 只指不影响语义的格式变动；本项目额外允许纯 CSS/排版调整使用 `style`，但**不得**用它掩盖内容、交互或结构变化。若视觉改动同时改变了行为，请改用 `fix` 或 `refactor`。

### 2.4 scope 词表

`scope` 用于说明改动所属板块，必须从下表选择。取“用户能感知的板块”，不要用文件名，也不要用 `ui`、`misc`、`update` 这类模糊词。

| scope | 对应位置 |
| --- | --- |
| `homepage` | `theme/views/Homepage.vue`、`Carousel.vue`、首页入口 |
| `news` | `data/news.ts`、`views/News.vue`、`HotNews.vue`、`components/NewsCard.vue` |
| `publications` | `data/publications.ts`、`views/Publications.vue`、论文页入口 |
| `people` | `data/people.ts`、`views/People.vue`、成员页入口 |
| `research` | `data/research.ts`、`views/Research.vue` |
| `recruitment` | `data/recruitment.ts`、`views/joinus/*`、`docs/joinus/*`、`docs/en/joinus/*` |
| `footer` | `data/footerData.ts`、`components/Footer.vue` |
| `nav` | `config/zh.ts`、`config/en.ts` 中的导航栏与侧边栏 |
| `config` | `config/shared.ts`、`config/index.ts` 等站点级配置 |
| `theme` | `theme/style/*`、`custom.css`、`Layout.vue` 等全局主题 |
| `i18n` | 跨页面的双语配置、翻译缺失、语言切换逻辑 |
| `assets` | `docs/public/assets/**` 下的图片与静态资源 |
| `deps` | `package.json`、`package-lock.json` 的依赖升级，通常与 `build` 搭配 |

说明：招聘页面 URL 位于 `/joinus/`，但 scope 统一使用 `recruitment`，避免 `joinus` 与 `recruitment` 混用。若一次改动跨多个 scope，说明它应该被拆成多次提交。

### 2.5 subject 规则

`subject` 是对改动的简短总结，必须满足：

- **使用英文**（站点内容可以是中文，但提交标题统一英文）；
- **使用祈使句、现在时**，能填入 “If applied, this commit will ___”，例如 `add`、`fix`、`remove`、`rename`、`replace`、`move`；
- **首字母小写**，末尾不加句号；
- 不超过 50 个字符，硬上限 72 个字符；
- 描述**结果**而非过程：写 `fix broken alumni links`，不要写 `fix bug`、`update`、`changes`、`misc`；
- 不使用 “enhance”“improve” 这类无法验证的形容词，直接说明改了什么。

关于大小写：Angular 规范要求首字母小写，Chris Beams 的七条规则要求首字母大写。本项目采用 Angular 一派的写法（小写），与现有提交历史保持一致。

### 2.6 body 规则

正文用于解释**为什么改**以及**影响是什么**，而不是复述 diff 里的“怎么改”。

- 与标题之间空一行；
- 每行建议不超过 72 个字符；
- 可以分多段，也可以使用短列表；
- 正文默认英文；涉及中文文案取舍、翻译口径时可以用中文说明；
- Angular 要求除 `docs` 外的提交都必须写正文；本项目不强制，简单改动可以省略，但涉及行为、内容取舍或部署影响时应写正文。

推荐模板：

```text
feat(news): add Shanghai science award item

Add the 2026-07-02 news entry and its cover image so the news page
reflects the latest lab achievement. English title and summary follow
the existing bilingual field structure.

Refs: #123
```

### 2.7 footer 规则

footer 用于关联 issue、PR 和记录破坏性变更，遵循 git trailer 风格：

```text
Closes #123
Refs: #456, #457
BREAKING CHANGE: <description>
```

- token 中的空格用 `-` 代替，例如 `Reviewed-by:`；
- `BREAKING CHANGE` 必须全大写；
- 与正文之间空一行。

### 2.8 破坏性变更

本仓库是静态站点，破坏性变更通常指影响部署路径、路由或资源引用的改动。此时在 type/scope 后加 `!`，并在 footer 说明影响：

```text
refactor(config)!: serve the site from a sub-path

BREAKING CHANGE: all absolute asset URLs now require the /fvl/ prefix.
```

### 2.9 提交粒度

- 一次提交只做一件事。出现“顺便”“and also”时，拆成多次提交。
- 不要把数据更新、样式调整、配置修改混在同一次提交里。
- 大规模移动或重命名静态资源时，单独提交，避免与内容改动混在一起。
- 合并前清理 WIP 提交；推荐 squash 成一条符合规范的提交。
- 每个提交都应能通过 `npm run docs:build`。

### 2.10 分支命名

新分支统一使用 `<type>/<kebab-case-slug>`：

```text
feat/i18n-news
fix/mobile-nav
refactor/people-alumni
chore/upgrade-vitepress
```

历史分支中出现的 `feature/news` 属于遗留命名，新分支不要再使用 `feature/`。`main` 的每次 push 都会触发 GitHub Pages 部署，因此不要在未验证构建的情况下直接推送。

### 2.11 PR 标题

如果使用 squash merge，PR 标题会成为最终提交信息。因此 **PR 标题必须符合本规范**，例如：

```text
feat(publications): add NeurIPS 2026 papers
```

PR 描述写动机、影响范围与验证方式（是否本地跑过 `npm run docs:build`、是否同步了中英文）。

### 2.12 反例与修正

| 不要这样写 | 问题 | 改为 |
| --- | --- | --- |
| `style` | 缺少 scope 和具体信息 | `style(homepage): tighten card spacing on mobile` |
| `fix` | 无法知道修了什么 | `fix(news): correct ICCV 2025 news link` |
| `misc` / `update` | 不是合法 type，信息量为零 | 按实际改动选择 type 与 scope |
| `publications: fix paper link` | 缺少 type | `fix(publications): correct paper link` |
| `doc: joinus(zh)` | type 拼写错误、scope 语义混乱、站点内容误用 `docs` | `feat(recruitment): add Chinese join-us page` |
| `feat: enhance carousel styling` | 纯样式改动不是 feature | `style(homepage): refine carousel card styling` |
| `chore: update publications data and improve year display` | 两件事混在一起，type 也不准确 | 拆为 `feat(publications): ...` 和 `fix(publications): ...` |
| `testing research` | 完全不符合格式 | `test(research): add layout snapshot` 或按实际改动改写 |

### 2.13 给 AI 代理的提交流程

1. 先看 `git status` 与 `git diff`，确认改动范围，只提交本次任务相关文件；
2. 从 2.3、2.4 选择唯一的 type 与 scope；
3. 按 2.5 写英文祈使句标题，必要时补充正文与 footer；
4. 运行 `npm run docs:build` 验证；
5. 除非用户明确要求，不要 `git push`，不要改写已推送的历史（`rebase`、`amend` 远端提交），不要擅自合并分支。

## 3. 内容与代码约定

### 3.1 通用规则

- **双语同步**：`docs/x.md` 与 `docs/en/x.md`、`docs/joinus/*` 与 `docs/en/joinus/*` 成对维护；数据文件中的 `zh` / `en` 字段要同时补齐。
- **数据优先**：新闻、论文、成员、招聘的常规更新只改 `docs/.vitepress/data/*.ts`，不要为加一条数据去改组件。
- **图片**：放在 `docs/public/assets/<domain>/` 下，沿用现有目录惯例（如 `news/` 平铺、`publications/images/<year>/`），引用时使用以 `/` 开头的绝对路径，例如 `/assets/news/2026-07-02.png`；新增图片前先压缩。
- **站内链接**：`cleanUrls: false`，页面链接使用相对路径并带 `.html`，例如 `publications.html#2026`。
- **组件位置**：页面级视图放 `theme/views/`，可复用小组件放 `theme/components/`，全局样式放 `theme/style/`。
- **不要提交**：`node_modules/`、`dist/`、`cache/`、`docs/.vitepress/cache/`、`*.backup`、`*.zip`、`resources/`。
- **新增依赖**：先说明用途与替代方案，更新 `package-lock.json`，并在提交正文中解释原因。

### 3.2 论文数据（`publications.ts`）

论文页的唯一数据源是 `docs/.vitepress/data/publications.ts`，`Publications.vue` 只负责筛选和渲染。常规新增、修订论文只改数据文件；只有新增字段或改变展示逻辑时才动组件。

新条目按下面的字段顺序书写（旧条目字段顺序不统一，不要为了整齐批量重排，避免产生大量无关 diff）：

```jsonc
{
    "year": "2026",
    "authors": "Jiapeng Shi, Qiuxia Hou, Jiaqi Leng, Junke Wang, Yanhao Zhang, Haonan Lu, Ziyi Ye, Zuxuan Wu",
    "title": "EVA-Cap: Optimizing Audiovisual Video Captioning via Event-Centric Alignment.",
    "venue": "Advances in Neural Information Processing Systems (NeurIPS), Sydney, Australia, 2026.",
    "venue_abbreviated": "NeurIPS 2026",
    "pdf": "https://arxiv.org/pdf/2610.22186",
    "dataset": "https://huggingface.co/datasets/...",
    "code": "https://github.com/...",
    "image": "/assets/publications/images/2026/neurips-jiapengshi.png"
}
```

字段规则：

| 字段 | 必填 | 规则 |
| --- | --- | --- |
| `year` | 是 | 四位年份字符串，如 `"2026"`。筛选用 `startsWith`，不要写 `"2026-2027"` 之类的范围。 |
| `authors` | 是 | 按论文官方作者顺序，用 `", "` 分隔；最后一位前不加 `and`；不写 `et al.`；末尾不加句号。作者名保留连字符，如 `Yu-Gang Jiang`。 |
| `title` | 是 | 使用论文官方标题，保留官方大小写与缩写（`EVA-Cap`、`VLA-Pro`、`DocPTBench`）；末尾用英文句号；原标题是问句时保留 `?`，不再补句号。**同一年内标题必须唯一**，页面以 `year + title` 作为渲染 key。 |
| `venue` | 是 | 期刊：`<刊名全称> (<缩写>), vol. X, pp. Y-Z, <年>.`，如 `IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI), vol. 48, pp. 7050-7061, 2026.`；会议：`<会议全称> (<缩写>), <城市>, <国家/州>, <年>.`。缩写、地点、月份不确定时可以省略；末尾用句号。 |
| `venue_abbreviated` | 是 | 格式为 `<缩写> <年>`，如 `NeurIPS 2026`、`TPAMI 2025`；新条目中缩写里的年份必须与 `year` 一致。ACM MM 在缩写字段中统一写 `MM 2026`，不要写 `ACM MM`（完整 `venue` 仍可保留 `(ACM MM)`）。没有通用缩写时可用完整名称加年份，如 `Frontiers of Multimedia Research 2018`。 |
| `image` | 否 | 见 3.3；没有合适图片时省略（历史数据中也有 `""`），页面会自动用标题生成占位图。 |
| `pdf` | 否 | 优先官方 PDF 或稳定落地页。arXiv 必须用 `https://arxiv.org/pdf/<id>`，不要 `/abs/`；DOI 用 `https://doi.org/...`。没有稳定外链时才使用本地 PDF（见 3.3）。 |
| `dataset` | 否 | 数据集主页完整 URL，如 Hugging Face 的 dataset/collection 地址。 |
| `code` | 否 | 代码仓库完整 URL。代码尚未公开时可以先注释掉，或留空字符串。 |

书写约定：

- 整个文件采用 JSON 风格：key 和字符串都用双引号、4 空格缩进、使用尾随逗号；允许 `//` 注释。
- 未确定的链接可以暂时写 `""`，但发布前必须补全或移除；不要把无效 URL 留在可渲染字段里。
- 未公开或待核实的论文用整块 `//` 注释保留，确认后再取消注释；不要随意删除其他人留下的注释占位块。
- 裁剪图片来源、特殊说明等可写成行内注释，例如 `// Figure 2, page 3 of the linked paper.`。

排序与分组：

- 全表按 `year` 降序分组；页面只按年份排序，所以**文件里的顺序就是页面显示顺序**。
- 同一年内先排期刊（journal），后排会议（conference）；新增条目应与同 venue 的已有条目相邻。
- 新增条目插入对应年份、对应分组内，不要整体重排历史条目。
- 2026 年顶部现有 NeurIPS/CoRL 排在期刊之前的顺序是历史追加造成的例外；新增 2026 年期刊论文应插入期刊分组，不要继续堆到最前面。
- 年份筛选只自动列出近 10 年（`currentYear - 9` 起），更早的年份统一归入 `earlier`，这是视图逻辑，不要为新增年份修改组件。

### 3.3 论文图片与 PDF 命名

图片位置与命名：

- 目录：`docs/public/assets/publications/images/<year>/`。
- 文件名：`<venue_abbreviated 的缩写部分，小写>-<第一作者全名小写并去掉空格和连字符>.png`。
- 示例：`NeurIPS 2026` + `Jiapeng Shi` → `neurips-jiapengshi.png`；`TPAMI 2025` + `Xuelin Qian` → `tpami-xuelinqian.png`；`CVPR 2025` + `Hui Zhang` → `cvpr-huizhang.png`；`MM 2024` + `Yinxuan Gui` → `mm-yinxuangui.png`。
- 同一 venue、同一年、同一第一作者有多篇论文时，在文件名后追加论文短名，如 `neurips-shuyuantu-baton.png`、`neurips-shuyuantu-stableavatar.png`；历史文件中的 `-1` 后缀（如 `tpami-yongkundu-1.png`）保留原样，不必重命名。
- 统一使用 `.png`。使用论文的 teaser、框架图或关键结果图，横向构图，接近 16:9（更宽的横幅也能正常显示）；不要放整页截图或竖图。页面缩略图宽度只有 280px，图中文字要保证在该尺寸下可辨认。
- 提交前压缩图片，避免单张体积过大。
- `<year>` 目录通常等于论文年份，但历史数据存在复用更早目录的情况（例如 2025 年论文使用 `images/2024/` 的图片）。遇到已有图片时保留原路径，不要为了“整齐”移动文件。
- 历史遗留的特殊命名（如 MIR 用 `machine-*`、ML 用 `machine-learning-*`、`springer.png`、`pr-*`）只作为兼容保留；新条目按上面的常规公式命名。
- 没有合适图片时省略 `image` 字段，或留空字符串；不要借用其他论文的图片。

本地 PDF：

- 优先使用 arXiv、DOI、出版社或会议 open access 的外链。
- 只有拿不到稳定外链时，才把 PDF 放到 `docs/public/assets/publications/pdfs/`。
- 文件名使用标题 slug：全部小写、去掉标点、空格替换为 `-`、保留原有连字符与数字、不删除停用词。例如 `SVTR: Scene Text Recognition with a Single Visual Model.` → `svtr-scene-text-recognition-with-a-single-visual-model.pdf`；`VIREO-374` 保留为 `vireo-374`。
- 文件名中不要出现空格、中文或大写字母；重名时追加 `-2` 或论文短名。

### 3.4 新增论文检查清单

- [ ] 条目插入正确的年份分组；期刊在会议之前，并与同 venue 条目相邻。
- [ ] `year` 是四位字符串，`venue_abbreviated` 的年份与之一致。
- [ ] `title` 与官方标题一致，同一年内不重复，结尾标点正确。
- [ ] `authors` 顺序正确、逗号分隔、没有 `et al.` 或 `and`。
- [ ] `image` 使用 16:9 左右的 PNG，文件名符合 `<venue>-<firstauthor>.png`，路径以 `/assets/publications/images/<year>/` 开头。
- [ ] `pdf` / `dataset` / `code` 链接可访问，arXiv 链接使用 `/pdf/`。
- [ ] 没有重复条目，注释块没有被误删。
- [ ] `npm run docs:build` 通过。

## 4. 提交前检查

- [ ] `npm run docs:build` 通过，无新增警告或死链（当前 `ignoreDeadLinks: true`，但仍应人工检查链接）。
- [ ] 涉及站点内容时，中英文页面均已更新。
- [ ] 图片已压缩，路径与命名符合约定。
- [ ] `git diff` 只包含本次意图内的改动，没有调试代码、临时文件或编辑器配置。
- [ ] 提交标题符合第 2 节，type 与 scope 来自词表。
- [ ] 若写了正文，正文说明了“为什么”，而不只是“改了什么”。

## 5. 参考

- [Conventional Commits 1.0.0（中文）](https://www.conventionalcommits.org/zh-hans/v1.0.0/)
- [Conventional Commits 1.0.0（English）](https://www.conventionalcommits.org/en/v1.0.0/)
- [Angular Commit Message Guidelines](https://github.com/angular/angular/blob/main/contributing-docs/commit-message-guidelines.md)
- [Chris Beams, How to Write a Git Commit Message](https://cbea.ms/git-commit/)
- [@commitlint/config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional)
