<template>
  <section class="py-20 relative overflow-hidden">
    <!-- Background Effects -->
    <div class="absolute inset-0 bg-gradient-to-r from-purple-900/30 to-blue-900/30"></div>
    <div class="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.1%22%3E%3Cpath d=%22M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
    
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <!-- Main CTA -->
      <div class="animate-fade-up">
        <h2 class="text-5xl lg:text-6xl font-bold mb-6">
          准备好与 AI 一起
          <span class="gradient-text block">构建未来</span>
          了吗？
        </h2>
        
        <p class="text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
          加入数千名已经在使用 Devin 更快构建更好软件的开发者。
          获得早期访问权限，成为 AI 革命的一部分。
        </p>
        
        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <button class="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-12 py-4 rounded-full font-bold text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 transform hover:scale-105 glow-purple">
            立即开始构建
          </button>
          <button class="border-2 border-gray-500 text-white px-12 py-4 rounded-full font-bold text-lg hover:border-gray-400 hover:bg-gray-800 transition-all duration-200">
            预约演示
          </button>
        </div>
        
        <!-- Trust Indicators -->
        <div class="mb-16">
          <p class="text-gray-400 mb-8">受到以下公司开发者信赖</p>
          <div class="flex flex-wrap justify-center items-center gap-12 opacity-60">
            <div class="text-2xl font-bold text-gray-400">Google</div>
            <div class="text-2xl font-bold text-gray-400">Microsoft</div>
            <div class="text-2xl font-bold text-gray-400">Meta</div>
            <div class="text-2xl font-bold text-gray-400">OpenAI</div>
            <div class="text-2xl font-bold text-gray-400">Stripe</div>
          </div>
        </div>
      </div>
      
      <!-- Newsletter Signup -->
      <div class="glass max-w-2xl mx-auto p-8 rounded-xl animate-fade-up">
        <h3 class="text-2xl font-bold mb-4 text-white">保持更新</h3>
        <p class="text-gray-300 mb-6">获取 Devin 的最新更新，第一时间体验新功能。</p>
        
        <form class="flex flex-col sm:flex-row gap-4">
          <input 
            type="email" 
            placeholder="请输入您的邮箱地址"
            class="flex-1 px-6 py-3 bg-gray-800 border border-gray-600 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
          >
          <button 
            type="submit"
            class="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
          >
            订阅
          </button>
        </form>
        
        <p class="text-xs text-gray-500 mt-4">
          无垃圾邮件，随时可取消订阅。我们尊重您的隐私。
        </p>
      </div>
    </div>
  </section>
</template>