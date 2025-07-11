# 🏢AI模板系统

一个基于 Nuxt.js 构建的AI-RAG模板，包含完整的用户认证、个人资料管理等功能。

## ✨ 主要功能

- 🔐 **用户认证系统** - 注册、登录、JWT令牌验证
- 👤 **个人资料管理** - 头像上传、资料编辑、密码修改
- 🎨 **现代化界面** - 响应式设计，支持深色模式
- 📊 **仪表板** - 用户信息展示，折叠式菜单
- 🔒 **安全保护** - 路由中间件，API权限验证

## 🛠 技术栈

- **前端框架**: [Nuxt.js 3](https://nuxt.com) + Vue.js
- **样式框架**: [Tailwind CSS](https://tailwindcss.com)
- **数据库**: PostgreSQL + [Prisma ORM](https://prisma.io)
- **身份验证**: JWT + bcryptjs
- **图标库**: Lucide Vue Next
- **代码高亮**: Prism.js

## 📁 项目结构

```
codebase-template-office/
├── components/          # Vue组件
├── pages/              # 页面路由
├── server/api/         # API端点
├── prisma/             # 数据库模型
├── composables/        # 组合式函数
├── middleware/         # 路由中间件
└── assets/css/         # 样式文件
```

## 🚀 快速开始

### 1. 安装依赖

```bash
pnpm install
```

### 2. 环境配置

创建 `.env` 文件：

```bash
# 数据库连接
DATABASE_URL="postgresql://username:password@localhost:5432/database"

# JWT密钥
JWT_SECRET="your-super-secret-jwt-key"

# 应用配置
NUXT_PUBLIC_APP_NAME=
NUXT_PUBLIC_APP_URL=后端地址
```

### 3. 数据库设置

```bash
# 生成Prisma客户端
pnpm run db:generate

# 推送数据库模型
pnpm run db:push
```

### 4. 启动开发服务器

```bash
pnpm dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看应用。

## 📖 主要页面

- **首页** (`/`) - 产品介绍和功能展示
- **注册** (`/register`) - 用户注册页面
- **登录** (`/login`) - 用户登录页面
- **仪表板** (`/dashboard`) - 用户工作台
- **个人资料** (`/profile`) - 个人信息管理

## 🔧 可用命令

```bash
# 开发
pnpm dev              # 启动开发服务器

# 构建
pnpm build            # 构建生产版本
pnpm preview          # 预览生产构建

# 数据库
pnpm run db:generate  # 生成Prisma客户端
pnpm run db:push      # 推送数据库模型
pnpm run db:studio    # 打开Prisma Studio
pnpm run db:reset     # 重置数据库
```

## 🤝 贡献

欢迎提交 Issues 和 Pull Requests 来改进这个项目！

## 📄 开源协议

本项目采用 MIT 协议开源。
