# FVL Website

复旦大学视觉与学习实验室（FVL）官网项目，基于 VitePress 构建，支持中英文双语展示。

## 项目概览

- 站点框架：VitePress
- 语言与技术：TypeScript、Vue 3、Markdown
- 包管理器：npm
- 部署方式：GitHub Actions 自动部署到 GitHub Pages

## 目录结构

```text
.
├─ docs/                         # 站点内容目录
│  ├─ .vitepress/                # VitePress 配置与主题扩展
│  │  ├─ config/                 # 全局配置 + 中英文配置
│  │  ├─ data/                   # 业务数据（新闻/论文/成员/招聘）
│  │  └─ theme/views/            # 页面组件（Homepage/News/People 等）
│  ├─ en/                        # 英文页面
│  ├─ joinus/                    # 招聘页面
│  ├─ index.md                   # 中文首页入口
│  ├─ news.md                    # 中文新闻页入口
│  ├─ publications.md            # 中文论文页入口
│  └─ people.md                  # 中文成员页入口
├─ .github/workflows/deploy.yml  # GitHub Pages 部署流程
└─ package.json                  # 依赖与脚本
```

## 环境要求

- Node.js 18+（CI 当前使用 Node.js 22）
- npm 9+

## 安装依赖

```bash
npm ci
```

或（本地开发时）：

```bash
npm install
```

## 本地开发

启动开发服务器：

```bash
npm run docs:dev
```

默认会在本地启动 VitePress 开发站点。

## 构建与预览

构建静态站点：

```bash
npm run docs:build
```

本地预览构建产物：

```bash
npm run docs:preview
```

本地以 serve 方式运行文档：

```bash
npm run docs:serve
```

## 内容维护指南

### 1) 页面入口（Markdown）

- 中文：`docs/index.md`、`docs/news.md`、`docs/publications.md`、`docs/people.md`
- 英文：`docs/en/index.md`、`docs/en/news.md`、`docs/en/publications.md`、`docs/en/people.md`
- 招聘：`docs/joinus/` 与 `docs/en/joinus/`

### 2) 业务数据（推荐维护位置）

- 新闻：`docs/.vitepress/data/news.ts`
- 论文：`docs/.vitepress/data/publications.ts`
- 成员：`docs/.vitepress/data/people.ts`
- 招聘：`docs/.vitepress/data/recruitment.ts`

### 3) 导航与多语言配置

- 主配置：`docs/.vitepress/config/index.ts`
- 共享配置：`docs/.vitepress/config/shared.ts`
- 中文导航：`docs/.vitepress/config/zh.ts`
- 英文导航：`docs/.vitepress/config/en.ts`

## 部署说明

项目已配置 GitHub Actions 自动部署：

- 工作流文件：`.github/workflows/deploy.yml`
- 触发条件：推送到 `main` 分支或手动触发
- 部署产物目录：`docs/.vitepress/dist`

典型流程：

1. 提交并推送到 `main`
2. GitHub Actions 自动执行安装与构建
3. 构建成功后自动发布到 GitHub Pages

## 常见问题

### 多语言

通过 VitePress `locales` 配置实现中英文路由与导航，入口见 `docs/.vitepress/config/index.ts`。
