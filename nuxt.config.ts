// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // 确保正确加载环境变量文件
  runtimeConfig: {
    // Private keys (only available on server-side)
    jwtSecret: process.env.JWT_SECRET || 'your-secret-key',
    databaseUrl: process.env.DATABASE_URL,
    
    // Public keys (exposed to client-side)
    public: {
      appName: process.env.NUXT_PUBLIC_APP_NAME || 'WebAI',
      appUrl: process.env.NUXT_PUBLIC_APP_URL || 'http://localhost:3000'
    }
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  ssr: true,
  // 开发服务器配置
  devServer: {
    port: parseInt(process.env.NUXT_PORT || '3000'), // 开发服务器端口
    host: process.env.NUXT_HOST || 'localhost' // 开发服务器地址，0.0.0.0允许外部访问
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt'
  ],
  css: [
    '~/assets/css/main.css'
  ],
  // 确保正确的路由配置
  router: {
    options: {
      hashMode: false,
      linkActiveClass: 'router-link-active',
      linkExactActiveClass: 'router-link-exact-active'
    }
  },
  // 添加明确的路由规则以确保更好的导航
  routeRules: {
    '/': { prerender: true }
  },
   // 修复渲染器初始化问题
  nitro: {
    experimental: {
      wasm: false
    },
    serverAssets: [
      {
        baseName: 'prisma',
        dir: './prisma'
      }
    ],
    // 修复 Prisma 在 ES 模块中的问题
    esbuild: {
      options: {
        target: 'node18'
      }
    }
  },
  // 添加页面过渡效果
  app: {
    pageTransition: { 
      name: 'page', 
      mode: 'out-in',
      duration: 300
    },
    head: {
      title: 'WebAI - AI Software Engineer',
      meta: [
        { name: 'description', content: 'Meet WebAI, the first AI software engineer' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap' }
      ]
    }
  }
})