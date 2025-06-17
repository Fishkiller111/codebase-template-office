<template>
  <nav class="fixed top-0 w-full z-50 bg-gray-900/80 backdrop-blur-lg border-b border-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex-shrink-0 flex items-center">
          <NuxtLink 
            to="/" 
            class="text-2xl font-bold gradient-text hover:scale-105 transition-transform duration-200"
            @click="handleLogoClick"
          >
            Devin
          </NuxtLink>
        </div>
        
        <!-- Desktop Navigation -->
        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-8">
            <a 
              v-for="item in navItems" 
              :key="item.name"
              :href="item.href"
              class="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200 hover:bg-gray-800 rounded-md"
              @click="handleNavItemClick(item)"
            >
              {{ item.name }}
            </a>
          </div>
        </div>
        
        <!-- CTA Button - Enhanced with better debugging -->
        <div class="hidden md:block">
          <!-- 已登录状态 -->
          <div v-if="isLoggedIn" class="flex items-center space-x-4">
            <div class="text-gray-300 text-sm">
              欢迎，<span class="font-semibold text-white">{{ user?.username }}</span>
            </div>
            <button
              @click="handleLogout"
              class="border border-gray-600 text-gray-300 hover:text-white hover:border-gray-500 px-6 py-2 rounded-full font-medium transition-all duration-200 transform hover:scale-105"
            >
              退出登录
            </button>
            <NuxtLink 
              to="/dashboard" 
              class="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-200 transform hover:scale-105 glow-purple inline-block text-center no-underline"
              @click="handleDesktopNavigation"
              @mouseenter="handleButtonHover"
              @mouseleave="handleButtonLeave"
            >
              控制台
            </NuxtLink>
          </div>
          <!-- 未登录状态 -->
          <div v-else class="flex items-center space-x-4">
            <!-- 登录按钮 -->
            <NuxtLink 
              to="/login" 
              class="border border-gray-600 text-gray-300 hover:text-white hover:border-gray-500 px-6 py-2 rounded-full font-medium transition-all duration-200 transform hover:scale-105 inline-block text-center no-underline"
              @click="handleLoginNavigation"
            >
              登录
            </NuxtLink>
            <!-- 立即开始按钮 -->
            <NuxtLink 
              to="/dashboard" 
              class="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-200 transform hover:scale-105 glow-purple inline-block text-center no-underline"
              @click="handleDesktopNavigation"
              @mouseenter="handleButtonHover"
              @mouseleave="handleButtonLeave"
            >
              立即开始
            </NuxtLink>
          </div>
        </div>
        
        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button 
            @click="toggleMobileMenu"
            class="text-gray-400 hover:text-white p-2 rounded-md transition-colors duration-200"
            :aria-expanded="mobileMenuOpen"
            aria-label="Toggle mobile menu"
          >
            <Menu v-if="!mobileMenuOpen" class="h-6 w-6" />
            <X v-else class="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
    
    <!-- Mobile Navigation - Enhanced -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-1"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-1"
    >
      <div 
        v-if="mobileMenuOpen" 
        class="md:hidden bg-gray-900/95 backdrop-blur-lg border-t border-gray-800"
      >
        <div class="px-2 pt-2 pb-3 space-y-1">
          <a 
            v-for="item in navItems" 
            :key="item.name"
            :href="item.href"
            class="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium transition-colors duration-200 rounded-md hover:bg-gray-800"
            @click="handleMobileNavItemClick(item)"
          >
            {{ item.name }}
          </a>
          <!-- 移动端按钮组 -->
          <div class="flex flex-col space-y-3 mt-4">
            <!-- 已登录状态 -->
            <div v-if="isLoggedIn" class="space-y-3">
              <div class="text-center text-gray-300 text-sm py-2">
                欢迎，<span class="font-semibold text-white">{{ user?.username }}</span>
              </div>
              <button
                @click="handleMobileLogout"
                class="border border-gray-600 text-gray-300 hover:text-white hover:border-gray-500 px-6 py-2 rounded-full font-medium text-center block w-full transition-all duration-200"
              >
                退出登录
              </button>
              <NuxtLink 
                to="/dashboard" 
                class="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full font-medium text-center block no-underline hover:from-purple-700 hover:to-blue-700 transition-all duration-200"
                @click="handleMobileNavigation"
              >
                控制台
              </NuxtLink>
            </div>
            <!-- 未登录状态 -->
            <div v-else class="space-y-3">
              <NuxtLink 
                to="/login" 
                class="border border-gray-600 text-gray-300 hover:text-white hover:border-gray-500 px-6 py-2 rounded-full font-medium text-center block no-underline transition-all duration-200"
                @click="handleMobileLoginNavigation"
              >
                登录
              </NuxtLink>
              <NuxtLink 
                to="/dashboard" 
                class="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full font-medium text-center block no-underline hover:from-purple-700 hover:to-blue-700 transition-all duration-200"
                @click="handleMobileNavigation"
              >
                立即开始
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<script setup>
import { Menu, X } from 'lucide-vue-next'

const router = useRouter()
const route = useRoute()
const mobileMenuOpen = ref(false)

const navItems = [
  { name: '功能特性', href: '#features' },
  { name: '产品演示', href: '#demo' },
  { name: '关于我们', href: '#about' },
  { name: '技术博客', href: '#blog' },
  { name: '联系我们', href: '#contact' }
]

// 导航处理函数 - 简化版本，让NuxtLink正常工作
const handleDesktopNavigation = (event) => {
  console.log('🖥️ Desktop navigation clicked')
  console.log('Current route:', route.path)
  console.log('Target route: /dashboard')
  // 不需要额外的router.push调用，让NuxtLink处理导航
}

const handleMobileNavigation = (event) => {
  console.log('📱 Mobile navigation clicked')
  console.log('Closing mobile menu...')
  mobileMenuOpen.value = false
  // 让NuxtLink处理导航，不需要额外的router.push
}

const handleLogoClick = () => {
  console.log('🏠 Logo clicked - navigating to home')
}

const handleNavItemClick = (item) => {
  console.log(`📍 Nav item clicked: ${item.name} -> ${item.href}`)
}

const handleMobileNavItemClick = (item) => {
  console.log(`📱📍 Mobile nav item clicked: ${item.name}`)
  mobileMenuOpen.value = false
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
  console.log(`📱 Mobile menu toggled: ${mobileMenuOpen.value ? 'open' : 'closed'}`)
}

const handleButtonHover = () => {
  console.log('🎯 Get Start button hovered')
}

const handleButtonLeave = () => {
  console.log('🎯 Get Start button unhovered')
}

const handleLoginNavigation = () => {
  console.log('🔑 Login button clicked')
}

const handleMobileLoginNavigation = () => {
  console.log('🔑 Mobile Login button clicked')
}

// 认证相关
const { user, isLoggedIn, logout } = useAuth()

const handleLogout = () => {
  console.log('🚪 Logout clicked')
  logout()
}

const handleMobileLogout = () => {
  console.log('🚪 Mobile Logout clicked')
  mobileMenuOpen.value = false
  logout()
}

// 监听路由变化
watch(() => route.path, (newPath, oldPath) => {
  console.log(`🔄 Route changed from ${oldPath} to ${newPath}`)
  // 关闭移动菜单当路由改变时
  if (mobileMenuOpen.value) {
    mobileMenuOpen.value = false
  }
})

// 组件挂载时的调试信息
onMounted(() => {
  console.log('🚀 Navigation component mounted')
  console.log('Current route:', route.path)
  console.log('Available routes:', router.getRoutes().map(r => r.path))
})
</script>

<style scoped>
.no-underline {
  text-decoration: none !important;
}

.router-link-active {
  color: #A855F7;
}

.router-link-exact-active {
  color: #A855F7;
  background-color: rgba(168, 85, 247, 0.1);
}
</style>