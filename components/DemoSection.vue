<template>
  <section id="demo" class="py-20 bg-gradient-to-br from-gray-900/50 to-purple-900/20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-16 animate-fade-up">
        <h2 class="text-4xl lg:text-5xl font-bold mb-6">
          观看 <span class="gradient-text">Devin</span> 实战演示
        </h2>
        <p class="text-xl text-gray-300 max-w-3xl mx-auto">
          观看 Devin 如何从简单的提示构建完整的电商应用程序。
        </p>
      </div>
      
      <!-- Demo Tabs -->
      <div class="flex justify-center mb-12">
        <div class="glass rounded-full p-1 inline-flex">
          <button 
            v-for="tab in demoTabs" 
            :key="tab.id"
            @click="activeTab = tab.id"
            class="px-6 py-3 rounded-full font-medium transition-all duration-200"
            :class="activeTab === tab.id 
              ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white' 
              : 'text-gray-400 hover:text-white'"
          >
            {{ tab.name }}
          </button>
        </div>
      </div>
      
      <!-- Demo Content -->
      <div class="grid lg:grid-cols-2 gap-12 items-start">
        <!-- Code Editor Demo -->
        <div class="relative">
          <div class="glass rounded-xl overflow-hidden shadow-2xl border border-gray-700">
            <!-- Editor Header -->
            <div class="flex items-center justify-between bg-gray-800/90 px-4 py-3 border-b border-gray-700">
              <div class="flex items-center space-x-2">
                <div class="w-3 h-3 bg-red-500 rounded-full"></div>
                <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div class="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div class="text-gray-400 text-sm font-mono">ProductCard.jsx</div>
              <div class="w-16"></div>
            </div>
            
            <!-- Code Editor Content -->
            <div class="bg-gray-900 relative overflow-hidden">
              <!-- Line Numbers and Code -->
              <div class="flex">
                <!-- Line Numbers -->
                <div class="bg-gray-800/50 px-3 py-4 text-gray-500 font-mono text-sm select-none border-r border-gray-700">
                  <div v-for="n in 12" :key="n" class="leading-6">{{ n }}</div>
                </div>
                
                <!-- Code Content -->
                <div class="flex-1 p-4 font-mono text-sm overflow-hidden">
                  <div class="space-y-1">
                    <!-- Line 1 -->
                    <div class="flex leading-6">
                      <span class="text-gray-500">// 正在创建电商组件...</span>
                    </div>
                    
                    <!-- Line 2 -->
                    <div class="flex leading-6">
                      <span class="text-blue-400">const</span>
                      <span class="text-white ml-2">ProductCard</span>
                      <span class="text-white ml-2">=</span>
                      <span class="text-white ml-2">(</span>
                      <span class="text-white">{</span>
                      <span class="text-orange-400 ml-1">product</span>
                      <span class="text-white ml-1">}</span>
                      <span class="text-white">)</span>
                      <span class="text-blue-400 ml-2">=></span>
                      <span class="text-white ml-2">{</span>
                    </div>
                    
                    <!-- Line 3 -->
                    <div class="flex leading-6">
                      <span class="text-blue-400 ml-4">return</span>
                      <span class="text-white ml-2">(</span>
                    </div>
                    
                    <!-- Line 4 -->
                    <div class="flex leading-6">
                      <span class="text-gray-300 ml-8">&lt;</span>
                      <span class="text-red-400">div</span>
                      <span class="text-green-400 ml-2">className</span>
                      <span class="text-white">=</span>
                      <span class="text-yellow-400">"product-card"</span>
                      <span class="text-gray-300">&gt;</span>
                    </div>
                    
                    <!-- Line 5 -->
                    <div class="flex leading-6">
                      <span class="text-gray-300 ml-12">&lt;</span>
                      <span class="text-red-400">img</span>
                      <span class="text-green-400 ml-2">src</span>
                      <span class="text-white">=</span>
                      <span class="text-white">{</span>
                      <span class="text-orange-400">product</span>
                      <span class="text-white">.</span>
                      <span class="text-orange-400">image</span>
                      <span class="text-white">}</span>
                      <span class="text-gray-300 ml-2">/&gt;</span>
                    </div>
                    
                    <!-- Line 6 -->
                    <div class="flex leading-6">
                      <span class="text-gray-300 ml-12">&lt;</span>
                      <span class="text-red-400">h3</span>
                      <span class="text-gray-300">&gt;</span>
                      <span class="text-white">{</span>
                      <span class="text-orange-400">product</span>
                      <span class="text-white">.</span>
                      <span class="text-orange-400">name</span>
                      <span class="text-white">}</span>
                      <span class="text-gray-300">&lt;/</span>
                      <span class="text-red-400">h3</span>
                      <span class="text-gray-300">&gt;</span>
                    </div>
                    
                    <!-- Line 7 -->
                    <div class="flex leading-6">
                      <span class="text-gray-300 ml-12">&lt;</span>
                      <span class="text-red-400">p</span>
                      <span class="text-green-400 ml-2">className</span>
                      <span class="text-white">=</span>
                      <span class="text-yellow-400">"price"</span>
                      <span class="text-gray-300">&gt;</span>
                      <span class="text-white">{</span>
                      <span class="text-orange-400">product</span>
                      <span class="text-white">.</span>
                      <span class="text-orange-400">price</span>
                      <span class="text-white">}</span>
                      <span class="text-gray-300">&lt;/</span>
                      <span class="text-red-400">p</span>
                      <span class="text-gray-300">&gt;</span>
                    </div>
                    
                    <!-- Line 8 -->
                    <div class="flex leading-6">
                      <span class="text-gray-300 ml-8">&lt;/</span>
                      <span class="text-red-400">div</span>
                      <span class="text-gray-300">&gt;</span>
                    </div>
                    
                    <!-- Line 9 -->
                    <div class="flex leading-6">
                      <span class="text-white ml-4">)</span>
                    </div>
                    
                    <!-- Line 10 -->
                    <div class="flex leading-6">
                      <span class="text-white">}</span>
                    </div>
                    
                    <!-- Line 11 - Empty -->
                    <div class="flex leading-6">
                      <span class="text-transparent">.</span>
                    </div>
                    
                    <!-- Line 12 - Typing Animation -->
                    <div class="flex leading-6">
                      <span class="text-blue-400">export</span>
                      <span class="text-blue-400 ml-2">default</span>
                      <span class="text-white ml-2">{{ typingText }}</span>
                      <span class="animate-pulse text-purple-500 ml-1">|</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Status Bar -->
              <div class="bg-gray-800/70 px-4 py-2 border-t border-gray-700 flex items-center justify-between text-xs">
                <div class="flex items-center space-x-4">
                  <div class="flex items-center space-x-1">
                    <div class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span class="text-green-400">构建中...</span>
                  </div>
                  <span class="text-gray-400">React JSX</span>
                </div>
                <div class="text-gray-400">Ln 12, Col 15</div>
              </div>
            </div>
          </div>
          
          <!-- Floating Elements -->
          <div class="absolute -top-4 -right-4 glass p-3 rounded-lg animate-float border border-gray-600">
            <div class="text-xs font-mono text-green-400">实时编码</div>
          </div>
          
          <div class="absolute -bottom-6 -left-6 glass p-3 rounded-lg animate-bounce-slow border border-gray-600">
            <div class="text-xs font-mono text-blue-400">AI 生成</div>
          </div>
        </div>
        
        <!-- Demo Steps -->
        <div class="space-y-6">
          <div 
            v-for="(step, index) in currentDemoSteps" 
            :key="step.id"
            class="flex items-start space-x-4 group"
          >
            <!-- Step Number -->
            <div class="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
              {{ index + 1 }}
            </div>
            
            <!-- Step Content -->
            <div class="flex-1">
              <h3 class="text-lg font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-200">
                {{ step.title }}
              </h3>
              <p class="text-gray-300 leading-relaxed">{{ step.description }}</p>
              
              <!-- Step Status -->
              <div class="flex items-center mt-3 space-x-2">
                <div class="flex items-center space-x-1">
                  <div 
                    class="w-2 h-2 rounded-full animate-pulse"
                    :class="{
                      'bg-green-500': step.status === '已完成',
                      'bg-yellow-500': step.status === '进行中',
                      'bg-gray-500': step.status === '排队中'
                    }"
                  ></div>
                  <span 
                    class="text-sm"
                    :class="{
                      'text-green-400': step.status === '已完成',
                      'text-yellow-400': step.status === '进行中',
                      'text-gray-400': step.status === '排队中'
                    }"
                  >
                    {{ step.status }}
                  </span>
                </div>
                <div class="text-sm text-gray-500">{{ step.duration }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Demo Stats -->
      <div class="grid md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-gray-800">
        <div class="text-center">
          <div class="text-3xl font-bold text-purple-400 mb-2">47</div>
          <div class="text-gray-400">创建组件数</div>
        </div>
        <div class="text-center">
          <div class="text-3xl font-bold text-blue-400 mb-2">3,247</div>
          <div class="text-gray-400">代码行数</div>
        </div>
        <div class="text-center">
          <div class="text-3xl font-bold text-pink-400 mb-2">12分钟</div>
          <div class="text-gray-400">总构建时间</div>
        </div>
        <div class="text-center">
          <div class="text-3xl font-bold text-green-400 mb-2">100%</div>
          <div class="text-gray-400">测试通过率</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const activeTab = ref('ecommerce')
const typingText = ref('')

const demoTabs = [
  { id: 'ecommerce', name: '电商应用' },
  { id: 'saas', name: 'SaaS 仪表板' },
  { id: 'mobile', name: '移动应用' }
]

const demoSteps = {
  ecommerce: [
    {
      id: 1,
      title: '需求分析',
      description: 'Devin 分析"构建电商平台"的提示，并创建全面的项目计划。',
      status: '已完成',
      duration: '30秒'
    },
    {
      id: 2,
      title: '架构设计',
      description: '设计系统架构，包含 React 前端、Node.js 后端和 PostgreSQL 数据库。',
      status: '已完成',
      duration: '1分15秒'
    },
    {
      id: 3,
      title: '数据库架构',
      description: '为产品、用户、订单和支付系统创建优化的数据库架构。',
      status: '已完成',
      duration: '45秒'
    },
    {
      id: 4,
      title: '前端开发',
      description: '构建响应式 React 组件，采用现代 UI/UX 模式和状态管理。',
      status: '进行中',
      duration: '4分30秒'
    },
    {
      id: 5,
      title: '后端 API',
      description: '实现 RESTful API，包含认证、支付处理和订单管理功能。',
      status: '排队中',
      duration: '3分20秒'
    },
    {
      id: 6,
      title: '测试与部署',
      description: '运行全面测试并通过 CI/CD 流水线部署到生产环境。',
      status: '排队中',
      duration: '2分10秒'
    }
  ],
  saas: [
    {
      id: 1,
      title: '仪表板规划',
      description: '规划包含分析、用户管理和计费功能的综合 SaaS 仪表板。',
      status: '已完成',
      duration: '45秒'
    },
    {
      id: 2,
      title: '组件库',
      description: '创建可重用的 UI 组件和设计系统，确保样式一致性。',
      status: '进行中',
      duration: '2分30秒'
    }
  ],
  mobile: [
    {
      id: 1,
      title: 'React Native 设置',
      description: '初始化 React Native 项目，配置导航和状态管理。',
      status: '已完成',
      duration: '1分20秒'
    }
  ]
}

const currentDemoSteps = computed(() => demoSteps[activeTab.value] || [])

// Typing animation for the last line
onMounted(() => {
  const fullText = 'ProductCard'
  let index = 0
  
  const typeInterval = setInterval(() => {
    if (index < fullText.length) {
      typingText.value += fullText[index]
      index++
    } else {
      clearInterval(typeInterval)
      // Restart typing after a pause
      setTimeout(() => {
        typingText.value = ''
        index = 0
        const restartInterval = setInterval(() => {
          if (index < fullText.length) {
            typingText.value += fullText[index]
            index++
          } else {
            clearInterval(restartInterval)
          }
        }, 150)
      }, 2000)
    }
  }, 150)
})
</script>