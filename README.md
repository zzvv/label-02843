# 京东商城首页 - Vue3 纯前端实现

## How to Run

### 前置要求

- Docker 和 Docker Compose 已安装
- 确保 Docker 支持多平台构建（ARM64 和 AMD64）

### 快速启动

1. **克隆或进入项目根目录**

   ```bash
   ```

2. **使用 Docker Compose 构建并启动所有服务**

   ```bash
   docker-compose up --build -d
   ```

3. **访问应用**

   - 用户端前端：http://localhost:8081

4. **查看日志**

   ```bash
   docker-compose logs -f frontend-user
   ```

5. **停止服务**

   ```bash
   docker-compose down
   ```

### 本地开发（不使用 Docker）

如果需要本地开发调试，可以进入对应子项目目录：

```bash
cd frontend-user
npm install
npm run dev
```

## Services

本项目当前包含以下服务：

| 服务名称 | 目录 | 端口映射 | 说明 |
|---------|------|---------|------|
| frontend-user | `frontend-user/` | 8081 | 用户端前端应用（Vue3 + Vite） |

### 技术栈说明

- **前端框架**：Vue 3（Composition API + `<script setup>`）
- **构建工具**：Vite 7
- **路由管理**：Vue Router 5
- **状态管理**：Pinia 3
- **HTTP 请求**：Axios（请求本地 Mock 数据，架构与真实 API 调用一致）
- **容器化**：Docker + Docker Compose
- **Web 服务器**：Nginx（生产环境）

### 项目结构

```
.
├── frontend-user/          # 用户端前端项目
│   ├── src/                # 源代码目录
│   │   ├── components/     # Vue 组件
│   │   ├── views/          # 页面视图
│   │   ├── router/         # 路由配置
│   │   ├── store/          # Pinia 状态管理
│   │   ├── directives/     # 自定义指令（图片懒加载）
│   │   └── main.js         # 应用入口
│   ├── public/             # 静态资源
│   │   └── mock/           # Mock 数据
│   ├── Dockerfile          # Docker 构建文件
│   └── package.json        # 项目依赖
├── docker-compose.yml       # Docker Compose 配置
├── .gitignore              # Git 忽略文件
└── README.md               # 项目说明文档
```

## 测试账号

> 本项目为纯前端实现，不涉及用户登录认证功能，因此无需测试账号。

所有数据均通过本地 Mock 文件（`frontend-user/public/mock/home-data.json`）提供，包括：
- 商品分类数据
- 限时抢购商品列表
- 推荐商品列表
- 品牌专区数据

## 题目内容

使用Vue.js技术栈开发京东商城首页的纯前端实现。要求页面布局与京东商城官方首页保持高度一致，包含但不限于顶部导航栏、搜索框、轮播图、分类导航、商品推荐区、限时抢购模块、品牌专区及页脚等核心组件。确保实现响应式设计，适配PC端主流屏幕尺寸。使用Vue Router实现页面内路由跳转，采用Vuex或Pinia进行状态管理，使用Axios模拟API请求获取商品数据。代码需遵循ES6+语法规范，组件化开发思想，确保代码可维护性和可扩展性。添加适当的交互动画和过渡效果提升用户体验，实现图片懒加载优化性能。最终交付完整的源代码、资源文件及运行说明文档。

---

## 项目详细说明

### 核心功能实现

#### 1. 页面布局组件

- **顶部导航栏**（`JdHeader.vue`）
  - 左侧：配送地址选择
  - 中间：路由导航菜单（首页、秒杀抢购、品牌专区）
  - 右侧：用户相关入口（我的订单、我的京东、京东会员）

- **搜索栏**（`JdSearchBar.vue`）
  - 左侧：京东 Logo
  - 中间：搜索输入框 + 搜索按钮 + 热门搜索词
  - 右侧：购物车入口

- **主内容区**（`JdMainLayout.vue`）
  - 左侧：商品分类导航（`JdCategoryNav.vue`）
  - 中间：轮播图（`JdCarousel.vue`）
  - 右侧：用户信息卡片 + 公告列表

- **限时抢购模块**（`JdFlashSale.vue`）
  - 展示秒杀商品列表，包含商品图片、名称、现价、原价

- **为你推荐**（`JdRecommend.vue`）
  - 推荐商品网格展示

- **品牌专区**（`JdBrandZone.vue`）
  - 品牌旗舰店展示

- **页脚**（`JdFooter.vue`）
  - 服务说明与常用链接

#### 2. 技术特性

- **Vue Router 路由管理**
  - 配置了首页（`/`）、秒杀页面（`/flash-sale`）、品牌专区（`/brands`）等路由
  - 支持单页应用内的路由跳转

- **Pinia 状态管理**
  - 使用 Pinia Store 管理商品数据（分类、秒杀、推荐、品牌）
  - 通过 Axios 请求本地 Mock 数据

- **图片懒加载**
  - 自定义 `v-lazy` 指令，基于 `IntersectionObserver` API
  - 图片进入视口时才加载，优化首屏性能

- **交互动画**
  - 轮播图淡入淡出过渡效果
  - 卡片悬浮阴影与抬起动画
  - 按钮与导航 hover 效果

- **响应式设计**
  - 适配 PC 端主流屏幕尺寸（≥1000px）
  - 使用 CSS Grid 和 Flexbox 实现灵活布局

#### 3. Docker 支持

- **多平台构建**
  - Dockerfile 使用 `--platform=$BUILDPLATFORM` 支持 ARM64 和 AMD64
  - 基础镜像（`node:20-alpine` 和 `nginx:alpine`）均为官方多架构镜像

- **多阶段构建**
  - 构建阶段：使用 Node.js 镜像编译 Vue 项目
  - 生产阶段：使用 Nginx 镜像服务静态文件

- **Docker Compose**
  - 统一管理服务配置
  - 端口映射：8081（用户端前端）
  - 网络隔离：使用自定义 bridge 网络

### 开发说明

#### 本地开发

```bash
cd frontend-user
npm install
npm run dev
```

#### 构建生产版本

```bash
cd frontend-user
npm run build
```

#### Docker 构建验证

验证镜像是否支持 ARM 环境：

```bash
docker pull --platform linux/arm64 node:20-alpine
docker pull --platform linux/arm64 nginx:alpine
```

### 注意事项

- 本项目为纯前端实现，所有数据来自本地 Mock 文件
- 图片资源使用网络公开图片链接，如出现加载失败可替换为其他地址
- 当前版本主要针对 PC 端，移动端适配不在本次实现范围内
- 本项目仅用于技术学习与演示，与京东官方无关
