// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
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
  // 添加页面过渡效果
  app: {
    pageTransition: { 
      name: 'page', 
      mode: 'out-in',
      duration: 300
    },
    head: {
      title: 'Devin - AI Software Engineer',
      meta: [
        { name: 'description', content: 'Meet Devin, the first AI software engineer' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap' }
      ]
    }
  },
  // 添加调试信息
  nitro: {
    devProxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true
      }
    }
  }
})