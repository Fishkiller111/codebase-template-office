<template>
  <section class="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
    <!-- Parallax Background Elements -->
    <div class="absolute inset-0 parallax-slow">
      <div class="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
      <div class="absolute top-3/4 right-1/4 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl"></div>
    </div>
    
    <div class="absolute inset-0 parallax-medium">
      <div class="absolute top-1/2 left-3/4 w-32 h-32 bg-pink-500/5 rounded-full blur-2xl"></div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <!-- Left Content -->
        <div class="text-left scroll-reveal-left">
          <div class="inline-flex items-center px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-300 text-sm font-medium mb-8 hover-lift">
            <span class="w-2 h-2 bg-purple-500 rounded-full mr-2 animate-pulse"></span>
AI软件工程师
          </div>
          
          <h1 class="text-2xl lg:text-6xl xl:text-6xl font-bold mb-10 leading-[1.1] scroll-reveal stagger-1">
            <span class="block text-white mb-2">将AI创意变为现实</span>
            <span class="gradient-text block">实现从构想到生产的飞跃</span>
          </h1>
          
          <!-- Feature Points -->
          <div class="space-y-8 mb-12">
            <div class="flex items-start space-x-5 scroll-reveal stagger-2">
              <div class="w-3 h-3 bg-purple-500 rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
              <div>
                <h3 class="text-2xl font-bold text-white mb-3 leading-tight">分秒之内，构建强大工作流</h3>
                <p class="text-lg text-gray-300 leading-relaxed">
                  通过可视化拖拽操作，让你直观构建灵活高效的 AI 应用和工作流。
                </p>
              </div>
            </div>
            
            <div class="flex items-start space-x-5 scroll-reveal stagger-3">
              <div class="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
              <div>
                <h3 class="text-2xl font-bold text-white mb-3 leading-tight">一键发布</h3>
                <p class="text-lg text-gray-300 leading-relaxed">
                  无需处理后端复杂性，多种发布选项满足你的不同需求。
                </p>
              </div>
            </div>
            
            <div class="flex items-start space-x-5 scroll-reveal stagger-4">
              <div class="w-3 h-3 bg-pink-500 rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
              <div>
                <h3 class="text-2xl font-bold text-white mb-3 leading-tight">分享与共建</h3>
                <p class="text-lg text-gray-300 leading-relaxed">
                  支持工作流的组合和联套使用，促进社区共享与团队协作。
                </p>
              </div>
            </div>
          </div>
          
          <div class="flex flex-col sm:flex-row gap-4 scroll-reveal stagger-5">
            <!-- Enhanced Get Start Button with better debugging -->
            <NuxtLink 
              to="/dashboard" 
              class="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 glow-purple hover-lift text-center inline-block no-underline"
              @click="handleHeroNavigation"
              @mouseenter="handleHeroButtonHover"
              @mouseleave="handleHeroButtonLeave"
            >
                              立即开始
            </NuxtLink>
            <button class="border border-gray-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:border-gray-500 hover:bg-gray-800 transition-all duration-300 hover-lift">
              观看演示
            </button>
          </div>
        </div>
        
        <!-- Right Content - Enhanced Node Workflow Demo -->
        <div class="relative scroll-reveal-right">
          <!-- Main Demo Window -->
          <div class="glass rounded-xl border border-gray-700 overflow-hidden shadow-2xl glow-soft hover:glow-intense transition-all duration-500 hover-lift">
            <!-- Title Bar -->
            <div class="flex items-center justify-between bg-gray-800/50 px-4 py-3 border-b border-gray-700">
              <div class="flex items-center space-x-2">
                <div class="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <div class="w-3 h-3 bg-yellow-500 rounded-full animate-pulse" style="animation-delay: 0.2s"></div>
                <div class="w-3 h-3 bg-green-500 rounded-full animate-pulse" style="animation-delay: 0.4s"></div>
              </div>
              <div class="text-gray-400 text-sm font-medium">AI Workflow Builder</div>
              <div class="w-16"></div>
            </div>
            
            <!-- Workflow Canvas -->
            <div class="p-8 bg-gray-900/50 h-96 relative overflow-hidden">
              <!-- Enhanced Background Grid -->
              <div class="absolute inset-0 opacity-5 parallax-fast">
                <svg class="w-full h-full">
                  <defs>
                    <pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse">
                      <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#6B7280" stroke-width="0.5"/>
                    </pattern>
                    <pattern id="dots" width="40" height="40" patternUnits="userSpaceOnUse">
                      <circle cx="20" cy="20" r="1" fill="#6B7280" opacity="0.3"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                  <rect width="100%" height="100%" fill="url(#dots)" />
                </svg>
              </div>
              
              <!-- Enhanced Workflow Nodes -->
              <div class="relative z-10 h-full">
                <!-- Start Node -->
                <div 
                  class="absolute top-8 left-8 bg-gray-800/90 backdrop-blur-sm rounded-lg shadow-lg border border-gray-600 p-4 w-44 scroll-reveal-scale stagger-child hover-lift"
                  style="animation-delay: 0.2s"
                >
                  <div class="flex items-center mb-3">
                    <div class="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mr-2 animate-pulse">
                      <span class="text-white text-xs font-bold">AI</span>
                    </div>
                    <span class="text-sm font-semibold text-white">问题分类器</span>
                  </div>
                  <div class="text-xs text-gray-400 mb-2">gpt-3.5-turbo</div>
                  <div class="text-xs text-gray-300">
                    智能分析用户问题类型
                  </div>
                  <!-- Enhanced Output Connection Point -->
                  <div class="absolute -right-2 top-1/2 w-4 h-4 bg-purple-500 rounded-full border-2 border-gray-800 shadow-lg animate-pulse glow-soft"></div>
                </div>
                
                <!-- Processing Node -->
                <div 
                  class="absolute top-4 right-8 bg-gray-800/90 backdrop-blur-sm rounded-lg shadow-lg border border-gray-600 p-4 w-44 scroll-reveal-scale stagger-child hover-lift"
                  style="animation-delay: 0.6s"
                >
                  <div class="flex items-center mb-3">
                    <div class="w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mr-2 animate-pulse">
                      <span class="text-white text-xs font-bold">API</span>
                    </div>
                    <span class="text-sm font-semibold text-white">数据处理</span>
                  </div>
                  <div class="text-xs text-gray-400 mb-2">HTTP Request</div>
                  <div class="text-xs text-gray-300">
                    调用外部API获取数据
                  </div>
                  <!-- Enhanced Connection Points -->
                  <div class="absolute -left-2 top-1/2 w-4 h-4 bg-purple-500 rounded-full border-2 border-gray-800 shadow-lg animate-pulse glow-soft"></div>
                  <div class="absolute -right-2 top-1/2 w-4 h-4 bg-purple-500 rounded-full border-2 border-gray-800 shadow-lg animate-pulse glow-soft"></div>
                </div>
                
                <!-- Output Node -->
                <div 
                  class="absolute bottom-8 right-16 bg-gray-800/90 backdrop-blur-sm rounded-lg shadow-lg border border-gray-600 p-4 w-44 scroll-reveal-scale stagger-child hover-lift"
                  style="animation-delay: 1s"
                >
                  <div class="flex items-center mb-3">
                    <div class="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-2 animate-pulse">
                      <span class="text-white text-xs font-bold">OUT</span>
                    </div>
                    <span class="text-sm font-semibold text-white">结果输出</span>
                  </div>
                  <div class="text-xs text-gray-400 mb-2">Response</div>
                  <div class="text-xs text-gray-300">
                    格式化并返回结果
                  </div>
                  <!-- Enhanced Input Connection Point -->
                  <div class="absolute -left-2 top-1/2 w-4 h-4 bg-purple-500 rounded-full border-2 border-gray-800 shadow-lg animate-pulse glow-soft"></div>
                </div>
                
                <!-- Enhanced Connection Lines -->
                <svg class="absolute inset-0 w-full h-full pointer-events-none" style="z-index: 1;">
                  <defs>
                    <marker id="arrowhead" markerWidth="10" markerHeight="7" 
                     refX="9" refY="3.5" orient="auto">
                      <polygon points="0 0, 10 3.5, 0 7" fill="#A855F7" />
                    </marker>
                    <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" style="stop-color:#A855F7;stop-opacity:0.8" />
                      <stop offset="50%" style="stop-color:#EC4899;stop-opacity:0.9" />
                      <stop offset="100%" style="stop-color:#3B82F6;stop-opacity:0.8" />
                    </linearGradient>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                      <feMerge> 
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>
                  
                  <!-- Enhanced Connection Lines with Glow -->
                  <path d="M 220 60 Q 280 60 320 50" stroke="url(#connectionGradient)" stroke-width="3" fill="none" 
                        marker-end="url(#arrowhead)" filter="url(#glow)" class="animate-pulse" style="animation-delay: 0.8s" />
                  
                  <path d="M 420 50 Q 450 50 450 120 Q 450 200 420 240" stroke="url(#connectionGradient)" stroke-width="3" fill="none" 
                        marker-end="url(#arrowhead)" filter="url(#glow)" class="animate-pulse" style="animation-delay: 1.2s" />
                  
                  <!-- Animated Data Flow Particles -->
                  <circle r="3" fill="#A855F7" opacity="0.8">
                    <animateMotion dur="3s" repeatCount="indefinite" begin="1s">
                      <mpath href="#path1"/>
                    </animateMotion>
                  </circle>
                  
                  <path id="path1" d="M 220 60 Q 280 60 320 50" opacity="0"/>
                </svg>
                
                <!-- Enhanced Floating Status Indicators -->
                <div class="absolute top-16 left-1/2 transform -translate-x-1/2 scroll-reveal-scale">
                  <div class="flex items-center space-x-2 bg-gray-800/80 backdrop-blur-sm px-3 py-1 rounded-full border border-gray-600 glow-soft">
                    <div class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span class="text-xs text-green-400 font-medium">工作流运行中</span>
                  </div>
                </div>
                
                <!-- Processing Indicator -->
                <div class="absolute bottom-16 left-1/2 transform -translate-x-1/2 scroll-reveal-scale">
                  <div class="flex items-center space-x-2 bg-blue-500/10 backdrop-blur-sm px-3 py-1 rounded-full border border-blue-500/30">
                    <div class="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
                    <span class="text-xs text-blue-400 font-medium">处理中...</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Enhanced Floating Elements -->
          <div class="absolute -top-4 -right-4 glass p-3 rounded-lg animate-float border border-gray-600 hover-lift parallax-medium">
            <div class="text-xs font-mono text-green-400">实时处理</div>
          </div>
          
          <div class="absolute -bottom-6 -left-6 glass p-3 rounded-lg animate-bounce-slow border border-gray-600 hover-lift parallax-medium">
            <div class="text-xs font-mono text-blue-400">智能分析</div>
          </div>
          
          <!-- Additional Floating Elements -->
          <div class="absolute top-1/2 -left-8 glass p-2 rounded-lg animate-pulse border border-purple-500/30 parallax-fast">
            <div class="text-xs font-mono text-purple-400">AI</div>
          </div>
          
          <div class="absolute top-1/4 -right-8 glass p-2 rounded-lg animate-pulse border border-blue-500/30 parallax-fast" style="animation-delay: 0.5s">
            <div class="text-xs font-mono text-blue-400">API</div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Enhanced Scroll Indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer hover-lift" onclick="document.getElementById('features').scrollIntoView({behavior: 'smooth'})">
      <div class="flex flex-col items-center space-y-2">
        <ChevronDown class="w-6 h-6 text-gray-400" />
        <div class="text-xs text-gray-500 font-medium">向下滚动</div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ChevronDown } from 'lucide-vue-next'
import { useScrollAnimations } from '~/composables/useScrollAnimations'

const router = useRouter()
const route = useRoute()

// 增强的导航处理函数
const handleHeroNavigation = (event) => {
  console.log('🎯 Hero navigation clicked')
  console.log('Current route:', route.path)
  console.log('Target route: /dashboard')
  // 让NuxtLink自动处理导航，不干预其默认行为
}

const handleHeroButtonHover = () => {
  console.log('🎯 Hero Get Start button hovered')
}

const handleHeroButtonLeave = () => {
  console.log('🎯 Hero Get Start button unhovered')
}

onMounted(() => {
  console.log('🎯 Hero section mounted')
  console.log('Current route:', route.path)
  console.log('Router available:', !!router)
  
  const { 
    initScrollAnimations, 
    initParallaxEffects, 
    initSmoothScrolling, 
    initHoverEffects,
    initScrollProgress 
  } = useScrollAnimations()
  
  // Initialize all scroll animations
  const observer = initScrollAnimations()
  const cleanupParallax = initParallaxEffects()
  const cleanupProgress = initScrollProgress()
  
  initSmoothScrolling()
  initHoverEffects()
  
  // Cleanup on unmount
  onUnmounted(() => {
    observer.disconnect()
    cleanupParallax()
    cleanupProgress()
  })
})
</script>

<style scoped>
.no-underline {
  text-decoration: none !important;
}
</style>