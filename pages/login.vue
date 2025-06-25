<template>
  <div class="min-h-screen bg-gray-900 flex items-center justify-center px-4 sm:px-6 lg:px-8">
    <!-- Background Effects -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
      <div class="absolute top-3/4 right-1/4 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div class="absolute top-1/2 left-3/4 w-32 h-32 bg-pink-500/5 rounded-full blur-2xl"></div>
    </div>
    
    <div class="max-w-md w-full space-y-8 relative z-10">
      <div class="glass rounded-xl border border-gray-700 p-8 shadow-2xl glow-soft">
        <!-- Header -->
        <div class="text-center mb-8">
          <NuxtLink 
            to="/" 
            class="text-3xl font-bold gradient-text hover:scale-105 transition-transform duration-200 inline-block"
          >
          WebAI
          </NuxtLink>
          <h2 class="mt-6 text-2xl font-bold text-white">
            登录到您的账户
          </h2>
          <p class="mt-2 text-sm text-gray-400">
            或者
            <NuxtLink to="/register" class="font-medium text-purple-400 hover:text-purple-300 transition-colors">
              创建新账户
            </NuxtLink>
          </p>
        </div>
        
        <!-- Login Form -->
        <form @submit.prevent="handleLogin" class="space-y-6">
          <div>
            <label for="email" class="block text-sm font-medium text-gray-300 mb-2">
              邮箱地址
            </label>
            <input
              id="email"
              v-model="loginForm.email"
              type="email"
              autocomplete="email"
              required
              class="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-200"
              placeholder="输入您的邮箱"
            />
          </div>
          
          <div>
            <label for="password" class="block text-sm font-medium text-gray-300 mb-2">
              密码
            </label>
            <input
              id="password"
              v-model="loginForm.password"
              type="password"
              autocomplete="current-password"
              required
              class="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-200"
              placeholder="输入您的密码"
            />
          </div>
          
          <!-- 错误消息 -->
          <div v-if="errorMessage" class="bg-red-500/10 border border-red-500/20 rounded-lg p-3">
            <p class="text-red-400 text-sm">{{ errorMessage }}</p>
          </div>
          
          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input
                id="remember-me"
                v-model="loginForm.rememberMe"
                type="checkbox"
                class="h-4 w-4 text-purple-600 bg-gray-800 border-gray-600 rounded focus:ring-purple-500 focus:ring-2"
              />
              <label for="remember-me" class="ml-2 block text-sm text-gray-300">
                记住我
              </label>
            </div>
            
            <div class="text-sm">
              <a href="#" class="font-medium text-purple-400 hover:text-purple-300 transition-colors">
                忘记密码？
              </a>
            </div>
          </div>
          
          <button
            type="submit"
            :disabled="isLoading"
            class="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 glow-purple disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            <span v-if="!isLoading">登录</span>
            <span v-else class="flex items-center justify-center">
              <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              登录中...
            </span>
          </button>
        </form>
        
        <!-- Social Login -->
        <div class="mt-6">
          <div class="relative">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-gray-600"></div>
            </div>
            <div class="relative flex justify-center text-sm">
              <span class="px-2 bg-gray-900 text-gray-400">或使用以下方式登录</span>
            </div>
          </div>
          
          <div class="mt-6 grid grid-cols-2 gap-3">
            <button
              type="button"
              class="w-full inline-flex justify-center py-2 px-4 border border-gray-600 rounded-lg bg-gray-800/50 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:border-gray-500 transition-all duration-200"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clip-rule="evenodd" />
              </svg>
              <span class="ml-2">GitHub</span>
            </button>
            
            <button
              type="button"
              class="w-full inline-flex justify-center py-2 px-4 border border-gray-600 rounded-lg bg-gray-800/50 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:border-gray-500 transition-all duration-200"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span class="ml-2">Google</span>
            </button>
          </div>
        </div>
      </div>
      
      <!-- Footer Links -->
      <div class="text-center">
        <p class="text-sm text-gray-400">
          还没有账户？
          <NuxtLink to="/register" class="font-medium text-purple-400 hover:text-purple-300 transition-colors">
            立即注册
          </NuxtLink>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
const router = useRouter()

// 页面元数据
useHead({
  title: '登录 - WebAI AI软件工程师',
  meta: [
    { name: 'description', content: '登录到WebAI AI软件工程师平台' }
  ]
})

// 响应式数据
const isLoading = ref(false)
const errorMessage = ref('')
const loginForm = ref({
  email: '',
  password: '',
  rememberMe: false
})

// 登录处理函数
const handleLogin = async () => {
  isLoading.value = true
  errorMessage.value = ''
  
  try {
    const { login } = useAuth()
    
    const result = await login({
      email: loginForm.value.email,
      password: loginForm.value.password
    })
    
    if (result.success) {
      // 登录成功后跳转到dashboard
      await router.push('/dashboard')
    }
  } catch (error) {
    console.error('登录失败:', error)
    errorMessage.value = error.message || '登录失败，请重试'
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  console.log('🔑 Login page mounted')
})
</script>

<style scoped>
/* 使用项目中的现有样式类 */
.glass {
  background: rgba(31, 41, 55, 0.7);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
}

.gradient-text {
  background: linear-gradient(135deg, #A855F7, #3B82F6, #EC4899);
  background-size: 300% 300%;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradient-shift 3s ease-in-out infinite;
}

.glow-soft {
  box-shadow: 0 0 20px rgba(168, 85, 247, 0.1);
}

.glow-purple {
  box-shadow: 0 0 30px rgba(168, 85, 247, 0.3);
}

@keyframes gradient-shift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}
</style> 