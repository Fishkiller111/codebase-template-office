<template>
  <div class="min-h-screen bg-gray-900">
    <!-- Stagewise Toolbar (只在开发模式下显示) -->
    <ClientOnly>
      <StagewiseToolbar :config="stagewiseConfig" />
    </ClientOnly>
    
    <!-- 使用NuxtPage来渲染页面路由 -->
    <NuxtPage />
  </div>
</template>

<script setup>
import { StagewiseToolbar } from '@stagewise/toolbar-vue'

// Stagewise配置
const stagewiseConfig = {
  plugins: [] // 可以在这里添加Vue特定的插件
}
</script>