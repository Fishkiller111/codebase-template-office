# 🏢 AI Template System

A modern AI-RAG template built with Nuxt.js, featuring complete user authentication and profile management capabilities.

# Chinese readme vision

```
README_cn.md
```

## ✨ Key Features

- 🔐 **User Authentication System** - Registration, login, JWT token verification
- 👤 **Profile Management** - Avatar upload, profile editing, password modification
- 🎨 **Modern Interface** - Responsive design with dark mode support
- 📊 **Dashboard** - User information display with collapsible menus
- 🔒 **Security Protection** - Route middleware and API permission verification

## 🛠 Tech Stack

- **Frontend Framework**: [Nuxt.js 3](https://nuxt.com) + Vue.js
- **Styling Framework**: [Tailwind CSS](https://tailwindcss.com)
- **Database**: PostgreSQL + [Prisma ORM](https://prisma.io)
- **Authentication**: JWT + bcryptjs
- **Icon Library**: Lucide Vue Next
- **Code Highlighting**: Prism.js

## 📁 Project Structure

```
codebase-template-office/
├── components/          # Vue components
├── pages/              # Page routes
├── server/api/         # API endpoints
├── prisma/             # Database models
├── composables/        # Composable functions
├── middleware/         # Route middleware
└── assets/css/         # Style files
```

## 🚀 Quick Start

### 1. Install Dependencies

```bash
pnpm install
```

### 2. Environment Configuration

Create a `.env` file:

```bash
# Database connection
DATABASE_URL="postgresql://username:password@localhost:5432/database"

# JWT secret
JWT_SECRET="your-super-secret-jwt-key"

# Application configuration
NUXT_PUBLIC_APP_NAME=
NUXT_PUBLIC_APP_URL=backend-address
```

### 3. Database Setup

```bash
# Generate Prisma client
pnpm run db:generate

# Push database models
pnpm run db:push
```

### 4. Start Development Server

```bash
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the application.

## 📖 Main Pages

- **Home** (`/`) - Product introduction and feature showcase
- **Register** (`/register`) - User registration page
- **Login** (`/login`) - User login page
- **Dashboard** (`/dashboard`) - User workspace
- **Profile** (`/profile`) - Personal information management

## 🔧 Available Commands

```bash
# Development
pnpm dev              # Start development server

# Build
pnpm build            # Build production version
pnpm preview          # Preview production build

# Database
pnpm run db:generate  # Generate Prisma client
pnpm run db:push      # Push database models
pnpm run db:studio    # Open Prisma Studio
pnpm run db:reset     # Reset database
```

## 🤝 Contributing

Welcome to submit Issues and Pull Requests to improve this project!

## 📄 License

This project is open source under the MIT License.
