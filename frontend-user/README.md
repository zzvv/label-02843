## 项目说明：Vue3 仿京东商城首页（纯前端）

本项目使用 **Vue3 + Vite** 技术栈，实现一个京东商城首页的 **纯前端仿真页面**，包含顶部导航栏、搜索框、轮播图、分类导航、商品推荐区、限时抢购模块、品牌专区及页脚等核心组件。

> 说明：本项目仅用于技术学习与演示，所有数据与图片均为示例，与京东官方无关，不涉及任何真实交易。

### 技术栈与主要特性

- **框架**：Vue 3 `<script setup>` 语法
- **路由**：Vue Router（首页 `/`、`/flash-sale`、`/brands` 等路由跳转）
- **状态管理**：Pinia（`src/store/index.js`）
- **数据请求**：Axios 请求本地 Mock 数据（读取 `public/mock/home-data.json` 商品数据）
- **组件化开发**：布局与业务模块拆分在 `src/components` 与 `src/views`
- **响应式设计**：针对主流 PC 屏幕宽度（≥1000px）进行布局适配
- **交互动画**：轮播图淡入淡出、卡片悬浮阴影、按钮与导航 hover 效果等
- **图片懒加载**：自定义指令 `v-lazy`，基于 `IntersectionObserver`

### 目录结构概览

- `src/main.js`：应用入口，注册 Router、Pinia 和懒加载指令
- `src/App.vue`：根组件，只负责渲染 `<router-view />`
- `src/router/index.js`：前端路由配置
- `src/store/index.js`：Pinia Store 与 Axios 请求封装
- `src/views/Home.vue`：京东首页主视图
- `src/components/layout`：整体布局相关组件（头部、搜索区、主内容、页脚等）
- `src/components/home`：首页业务模块组件（轮播图、分类导航、秒杀、推荐、品牌区等）
- `src/directives/lazy.js`：图片懒加载指令
- `public/mock/home-data.json`：本地 mock 商品与品牌数据

### 本地运行步骤

1. **进入项目目录**

   ```bash
   cd /Users/benzhi/Desktop/lj/2/2843/jd-mall-home
   ```

2. **安装依赖**

   ```bash
   npm install
   ```

3. **启动开发环境**

   ```bash
   npm run dev
   ```

4. 浏览器访问终端输出的本地地址（通常类似于 `http://localhost:5173/`）即可查看仿京东首页效果。

### 关键实现说明

- **Axios 请求本地 Mock 数据**
  - 在 `src/store/index.js` 中创建 Axios 实例 `request`，通过 `request.get('/mock/home-data.json')` 获取本地 JSON 数据。
  - 虽然数据来源是本地文件，但使用 Axios 发起 HTTP 请求的方式与真实 API 调用一致，便于后续对接真实后端接口。
  - `useProductStore` 的 `fetchHomeData` 动作中统一拉取分类、秒杀、推荐和品牌数据并存入 Pinia 状态。

- **路由跳转**
  - 使用 `Vue Router` 创建 `Home`、`FlashSale`、`Brands` 等路由，均复用 `Home.vue` 布局。
  - 顶部导航栏组件 `JdHeader` 中通过 `router.push` 实现路由切换，演示单页应用内的导航体验。

- **组件化布局**
  - 顶部结构：`JdHeader` + `JdSearchBar`
  - 中间主内容：`JdMainLayout` 内包含 `JdCategoryNav`（左侧分类）+ `JdCarousel`（中间轮播）+ 用户卡片 & 公告（右侧），下方为 `JdFlashSale`、`JdRecommend`、`JdBrandZone` 等模块。
  - 底部：`JdFooter` 显示服务说明与常用链接。

- **图片懒加载与动画**
  - 在 `src/directives/lazy.js` 中基于 `IntersectionObserver` 实现 `v-lazy` 指令，在图片进入视口时才真正加载。
  - 轮播图 `JdCarousel` 使用 `transition` 的 `fade` 过渡实现淡入淡出效果，并支持自动轮播与鼠标悬浮暂停。
  - 卡片组件（如秒杀列表、推荐商品、品牌专区）均增加轻微 `hover` 升起与阴影动画，提升交互质感。

### 注意事项

- 当前布局重点针对 **桌面端**（PC）浏览体验，移动端适配不在本示例范围内。
- 所有远程图片链接来自网络公开资源，若出现加载缓慢或 404，可根据需要替换为其他图片地址。

