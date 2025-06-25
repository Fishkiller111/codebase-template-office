<template>
  <section id="features" class="py-20 relative section-transition">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-16 scroll-reveal">
        <h2 class="text-4xl lg:text-5xl font-bold mb-6">
          <span class="gradient-text">超人级</span> 能力
        </h2>
        <p class="text-xl text-gray-300 max-w-3xl mx-auto">
          WebAI 不仅仅是编写代码——它像拥有多年经验的高级软件工程师一样思考、规划和执行。
        </p>
      </div>
      
      <!-- Features Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="(feature, index) in features" 
          :key="feature.title"
          class="group glass p-8 rounded-xl hover:bg-white/15 transition-all duration-500 transform hover:-translate-y-2 scroll-reveal hover-lift"
          :class="[
            'stagger-child',
            `stagger-${index + 1}`
          ]"
        >
          <div class="flex items-center mb-6">
            <div class="p-3 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 group-hover:from-purple-500/30 group-hover:to-blue-500/30 transition-all duration-500 group-hover:scale-110">
              <component :is="feature.icon" class="w-8 h-8 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
            </div>
          </div>
          
          <h3 class="text-2xl font-bold mb-4 text-white group-hover:text-purple-300 transition-colors duration-300">{{ feature.title }}</h3>
          <p class="text-gray-300 leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300">{{ feature.description }}</p>
          
          <!-- Enhanced Feature Stats -->
          <div class="flex items-center justify-between pt-4 border-t border-gray-700 group-hover:border-gray-600 transition-colors duration-300">
            <div class="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{{ feature.stat }}</div>
            <div class="text-purple-400 font-semibold group-hover:text-purple-300 transition-colors duration-300">{{ feature.metric }}</div>
          </div>
          
          <!-- Hover Glow Effect -->
          <div class="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/5 group-hover:to-blue-500/5 transition-all duration-500 pointer-events-none"></div>
        </div>
      </div>
      
      <!-- Enhanced Interactive Demo Cards -->
      <div class="mt-20 grid lg:grid-cols-2 gap-12">
        <!-- Code Generation Demo -->
        <div class="glass p-8 rounded-xl scroll-reveal-left hover-lift">
          <h3 class="text-2xl font-bold mb-6 text-white">实时代码生成</h3>
          <div class="bg-gray-900 rounded-lg p-4 font-mono text-sm border border-gray-700">
            <div class="text-gray-500"># WebAI 理解自然语言</div>
            <div class="text-purple-400 mt-2">> "创建用户认证的 REST API"</div>
            <div class="mt-4 space-y-1">
              <div class="text-green-400 scroll-reveal stagger-child">✓ 生成 Express.js 服务器</div>
              <div class="text-green-400 scroll-reveal stagger-child">✓ 添加 JWT 认证</div>
              <div class="text-green-400 scroll-reveal stagger-child">✓ 创建用户模型</div>
              <div class="text-yellow-400 animate-pulse scroll-reveal stagger-child">⚡ 正在添加密码哈希...</div>
            </div>
          </div>
        </div>
        
        <!-- Debugging Demo -->
        <div class="glass p-8 rounded-xl scroll-reveal-right hover-lift">
          <h3 class="text-2xl font-bold mb-6 text-white">智能调试</h3>
          <div class="bg-gray-900 rounded-lg p-4 font-mono text-sm border border-gray-700">
            <div class="text-red-400 scroll-reveal stagger-child">错误: 无法读取未定义对象的 'name' 属性</div>
            <div class="text-gray-500 mt-2 scroll-reveal stagger-child"># WebAI 的分析:</div>
            <div class="mt-2 space-y-1">
              <div class="text-blue-400 scroll-reveal stagger-child">📍 第42行: user 对象为空</div>
              <div class="text-yellow-400 scroll-reveal stagger-child">🔍 缺少空值检查</div>
              <div class="text-green-400 scroll-reveal stagger-child">✓ 自动应用修复</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Parallax Background Elements -->
    <div class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
      <div class="absolute top-1/4 right-1/4 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl parallax-slow"></div>
      <div class="absolute bottom-1/4 left-1/4 w-24 h-24 bg-blue-500/5 rounded-full blur-xl parallax-medium"></div>
    </div>
  </section>
</template>

<script setup>
import { Code, Zap, Shield, Cpu, Database, Rocket } from 'lucide-vue-next'

const features = [
  {
    icon: Code,
    title: '全栈开发',
    description: '构建从前端到后端的完整应用程序，无缝处理数据库、API和用户界面。',
    stat: '完成率',
    metric: '98.5%'
  },
  {
    icon: Zap,
    title: '闪电般快速',
    description: '在几分钟内生成生产就绪的代码，而不是几小时。人类开发者需要几天的工作，WebAI几分钟就能完成。',
    stat: '速度提升',
    metric: '快50倍'
  },
  {
    icon: Shield,
    title: '安全优先',
    description: '内置安全最佳实践、漏洞扫描和安全编码模式，确保每一行代码的安全性。',
    stat: '安全评分',
    metric: 'A+ 等级'
  },
  {
    icon: Cpu,
    title: '高级推理',
    description: '使用先进的AI推理来理解复杂需求，并做出智能的架构决策。',
    stat: '问题解决',
    metric: '95% 准确率'
  },
  {
    icon: Database,
    title: '数据库专家',
    description: '设计最优数据库架构，编写高效查询，并自动处理数据迁移。',
    stat: '查询优化',
    metric: '快80%'
  },
  {
    icon: Rocket,
    title: '随处部署',
    description: '自动部署到AWS、GCP、Azure或任何云服务提供商，配置经过优化。',
    stat: '部署成功率',
    metric: '99.9%'
  }
]
</script>