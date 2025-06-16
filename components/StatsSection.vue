<template>
  <section class="py-20 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl lg:text-5xl font-bold mb-6">
          <span class="gradient-text">验证的</span> 成果
        </h2>
        <p class="text-xl text-gray-300 max-w-3xl mx-auto">
          数据不会说谎。看看 Devin 如何革命性地改变软件开发。
        </p>
      </div>
      
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div 
          v-for="(stat, index) in stats" 
          :key="stat.label"
          class="text-center group animate-fade-up"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <div class="relative">
            <!-- Animated Number -->
            <div class="text-5xl lg:text-6xl font-bold mb-4">
              <span 
                class="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent group-hover:animate-pulse"
              >
                {{ animatedStats[index] }}{{ stat.suffix }}
              </span>
            </div>
            
            <!-- Label -->
            <div class="text-lg text-gray-300 font-medium mb-2">{{ stat.label }}</div>
            <div class="text-sm text-gray-500">{{ stat.description }}</div>
            
            <!-- Progress Bar -->
            <div class="mt-4 h-1 bg-gray-800 rounded-full overflow-hidden">
              <div 
                class="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transition-all duration-2000 ease-out"
                :style="{ width: `${(animatedStats[index] / stat.target) * 100}%` }"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const stats = [
  {
    label: '构建应用',
    target: 10000,
    suffix: '+',
    description: '已部署的生产应用'
  },
  {
    label: '代码行数',
    target: 5000000,
    suffix: 'M+',
    description: '生成的代码行数',
    display: 5
  },
  {
    label: '节省时间',
    target: 50000,
    suffix: '小时',
    description: '节省的开发时间'
  },
  {
    label: '成功率',
    target: 99,
    suffix: '%',
    description: '成功部署率'
  }
]

const animatedStats = ref([0, 0, 0, 0])

onMounted(() => {
  // Animate numbers on mount
  stats.forEach((stat, index) => {
    const target = stat.display || stat.target
    const duration = 2000
    const steps = 60
    const stepValue = target / steps
    let current = 0
    
    const interval = setInterval(() => {
      current += stepValue
      if (current >= target) {
        animatedStats.value[index] = target
        clearInterval(interval)
      } else {
        animatedStats.value[index] = Math.floor(current)
      }
    }, duration / steps)
  })
})
</script>