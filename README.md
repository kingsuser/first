# LumaMarket 电商官网

这是一个基于 React + Vite 开发的电商官网首页项目。页面品牌为 **LumaMarket**，定位是现代生活方式电商，展示精选科技产品、家居用品和日常设计好物。

## 项目内容

- 官网首页完整页面
- 响应式布局，支持桌面端和移动端
- Header 导航、Hero 首屏、新品展示、房间分类、热卖商品、品牌故事、服务承诺、订阅区和 Footer
- 使用 Image Gen 生成的 UI 设计图作为视觉参考
- 使用 Image Gen 生成的产品摄影图作为页面素材

## 技术栈

- React
- Vite
- Lucide React 图标
- CSS 原生样式

## 目录结构

```text
.
├── design/
│   └── lumamarket-ui-concept.png
├── public/
│   └── assets/
│       ├── hero-products.png
│       └── story-desk.png
├── src/
│   ├── main.jsx
│   └── styles.css
├── index.html
├── package.json
├── package-lock.json
└── .gitignore
```

## 本地运行

先安装依赖：

```bash
npm install
```

启动开发服务器：

```bash
npm run dev
```

默认访问地址：

```text
http://127.0.0.1:5173/
```

## 构建项目

```bash
npm run build
```

构建产物会输出到 `dist/`，该目录已加入 `.gitignore`，不需要上传到 Git。

## Git 上传说明

已配置 `.gitignore`，以下内容不会上传：

- `node_modules/`
- `dist/`
- `qa/`
- `.env`
- 日志文件
- 编辑器和系统临时文件

需要提交的主要文件是源码、配置文件和页面资产，例如：

- `.gitignore`
- `index.html`
- `package.json`
- `package-lock.json`
- `src/`
- `public/assets/`
- `design/`

## 设计参考

UI 设计图位于：

```text
design/lumamarket-ui-concept.png
```

页面实现以该设计图为视觉方向，保持白底、冷灰分区、黑色大标题、蓝色 CTA 和简洁电商商品陈列风格。
