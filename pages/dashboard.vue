<template>
  <div class="min-h-screen bg-gray-900 text-white relative overflow-hidden flex">
    <!-- Background Effects -->
    <BackgroundEffects />
    
    <!-- Left Sidebar Navigation -->
    <div class="fixed left-0 top-0 h-full w-64 bg-gray-800/90 backdrop-blur-xl border-r border-gray-700/50 z-20">
      <div class="p-6">
        <!-- Logo/Brand -->
        <div class="flex items-center mb-8">
          <div class="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
            </svg>
          </div>
          <span class="text-xl font-bold gradient-text">Devin AI</span>
        </div>

        <!-- Navigation Menu -->
        <nav class="space-y-2">
          <NuxtLink to="/" class="flex items-center px-4 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-gray-700/50 transition-all duration-300 group">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-3 group-hover:text-purple-400">
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
              <polyline points="9,22 9,12 15,12 15,22"/>
            </svg>
            <span class="font-medium">首页</span>
          </NuxtLink>

          <div class="flex items-center px-4 py-3 rounded-xl text-white bg-purple-600/20 border border-purple-500/30">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-3 text-purple-400">
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
            </svg>
            <span class="font-medium">说明书生成器</span>
          </div>

          <div class="flex items-center px-4 py-3 rounded-xl text-gray-400 cursor-not-allowed">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-3">
              <path d="M12 8V4H8"/>
              <rect width="16" height="12" x="4" y="8" rx="2"/>
              <path d="m14 8-2-2-2 2"/>
              <path d="M15 13v2"/>
              <path d="M9 13v2"/>
            </svg>
            <span class="font-medium">NPDAI助手</span>
            <span class="ml-auto text-xs bg-gray-600 px-2 py-1 rounded-full">待开发</span>
          </div>
        </nav>
      </div>

      <!-- Bottom Section - User Profile -->
      <div class="absolute bottom-6 left-6 right-6">
        <!-- User Profile Collapsible -->
        <div class="bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-xl border border-purple-500/20 overflow-hidden">
          <!-- User Info Header -->
          <div class="p-4 cursor-pointer hover:bg-purple-500/5 transition-colors duration-200" @click="toggleUserMenu">
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <div class="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mr-3 overflow-hidden">
                  <img v-if="user?.avatar" :src="user.avatar" :alt="user.username" class="w-full h-full object-cover">
                  <span v-else class="text-white text-sm font-bold">{{ user?.username?.charAt(0)?.toUpperCase() || 'U' }}</span>
                </div>
                <div class="flex-1 min-w-0">
                  <p class="text-sm font-medium text-white truncate">{{ user?.username || '用户' }}</p>
                </div>
              </div>
              <div class="flex items-center space-x-2">
                <div class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-400 transform transition-transform duration-200" :class="{ 'rotate-180': isUserMenuOpen }">
                  <polyline points="6,9 12,15 18,9"></polyline>
                </svg>
              </div>
            </div>
          </div>

          <!-- Collapsible Menu -->
          <div class="overflow-hidden transition-all duration-300 ease-in-out" :class="isUserMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'">
            <div class="border-t border-purple-500/20 bg-gray-900/50">
              <!-- Personal Center Options -->
              <div class="p-2 space-y-1">
                <NuxtLink to="/profile" class="w-full flex items-center px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-purple-500/10 rounded-lg transition-all duration-200 group">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-3 group-hover:text-purple-400">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                  <span>个人资料</span>
                </NuxtLink>
                
                <button class="w-full flex items-center px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-purple-500/10 rounded-lg transition-all duration-200 group">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-3 group-hover:text-purple-400">
                    <circle cx="12" cy="12" r="3"></circle>
                    <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1"></path>
                  </svg>
                  <span>账户设置</span>
                </button>
                
                <button class="w-full flex items-center px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-purple-500/10 rounded-lg transition-all duration-200 group">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-3 group-hover:text-purple-400">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="m22 2-5 10-5-10z"></path>
                  </svg>
                  <span>会员中心</span>
                  <span class="ml-auto text-xs bg-gradient-to-r from-purple-500 to-blue-500 px-2 py-1 rounded-full text-white">Pro</span>
                </button>
                
                <button class="w-full flex items-center px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-purple-500/10 rounded-lg transition-all duration-200 group">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-3 group-hover:text-purple-400">
                    <path d="M9 12l2 2 4-4"></path>
                    <path d="M21 12c.552 0 1-.448 1-1V8a2 2 0 0 0-2-2h-5L9.414 2.586A2 2 0 0 0 8 2H4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h18a2"></path>
                  </svg>
                  <span>我的项目</span>
                </button>
                
                <div class="border-t border-gray-700/50 mt-2 pt-2">
                  <button @click="logout" class="w-full flex items-center px-3 py-2 text-sm text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg transition-all duration-200 group">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-3">
                      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                      <polyline points="16,17 21,12 16,7"></polyline>
                      <line x1="21" x2="9" y1="12" y2="12"></line>
                    </svg>
                    <span>退出登录</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="flex-1 ml-64 relative z-10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <!-- Header Section -->
        <div class="text-center mb-16">
          <div class="inline-flex items-center px-6 py-3 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-300 text-sm font-medium mb-8 hover-lift backdrop-blur-sm">
            <span class="w-2 h-2 bg-purple-500 rounded-full mr-3 animate-pulse"></span>
            AI 智能生成工具
          </div>
          <h1 class="text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            <span class="gradient-text">AI 产品说明书</span>
            <br />
            <span class="gradient-text">自动化生成工具</span>
          </h1>
          <p class="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            基于先进AI技术，智能分析产品特性，自动生成专业规范的产品说明书
          </p>
        </div>

        <div class="grid lg:grid-cols-12 gap-8">
          <!-- Left Panel - Product Configuration -->
          <div class="lg:col-span-8 space-y-8">
            <!-- Product Configuration Card -->
            <div class="glass rounded-2xl p-10 border border-gray-700/50 hover-lift shadow-2xl">
              <div class="flex items-center mb-8">
                <div class="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                  </svg>
                </div>
                <div>
                  <h2 class="text-3xl font-bold text-white">产品配置</h2>
                  <p class="text-gray-400 mt-1">配置您的产品基本信息</p>
                </div>
              </div>
              
              <div class="grid md:grid-cols-2 gap-8">
                <!-- Product Type -->
                <div class="space-y-3">
                  <label class="block text-base font-semibold text-gray-200">产品类型</label>
                  <select v-model="formData.productType" class="w-full px-5 py-4 bg-gray-800/80 border border-gray-600/50 rounded-xl text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 backdrop-blur-sm hover:bg-gray-800">
                    <option value="">请选择产品类型</option>
                    <option value="electric-stove">电器炉</option>
                    <option value="gas-fireplace">燃气壁炉</option>
                    <option value="air-conditioner">空调设备</option>
                    <option value="water-heater">热水器</option>
                    <option value="refrigerator">冰箱</option>
                  </select>
                </div>

                <!-- Dimensions -->
                <div class="space-y-3">
                  <label class="block text-base font-semibold text-gray-200">产品尺寸</label>
                  <div class="relative">
                    <input v-model="formData.dimensions" type="text" placeholder="请输入产品尺寸" class="w-full px-5 py-4 bg-gray-800/80 border border-gray-600/50 rounded-xl text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 pr-16 backdrop-blur-sm hover:bg-gray-800">
                    <span class="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-400 font-medium">cm</span>
                  </div>
                </div>

                <!-- Power -->
                <div class="space-y-3">
                  <label class="block text-base font-semibold text-gray-200">功率规格</label>
                  <select v-model="formData.power" class="w-full px-5 py-4 bg-gray-800/80 border border-gray-600/50 rounded-xl text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 backdrop-blur-sm hover:bg-gray-800">
                    <option value="">请选择功率规格</option>
                    <option value="1">1 kW</option>
                    <option value="2">2 kW</option>
                    <option value="3">3 kW</option>
                    <option value="5">5 kW</option>
                    <option value="10">10 kW</option>
                  </select>
                </div>

                <!-- Country -->
                <div class="space-y-3">
                  <label class="block text-base font-semibold text-gray-200">使用地区</label>
                  <select v-model="formData.country" class="w-full px-5 py-4 bg-gray-800/80 border border-gray-600/50 rounded-xl text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 backdrop-blur-sm hover:bg-gray-800">
                    <option value="">请选择使用地区</option>
                    <option value="china">中国</option>
                    <option value="usa">美国</option>
                    <option value="japan">日本</option>
                    <option value="germany">德国</option>
                  </select>
                </div>
              </div>

              <!-- Features -->
              <div class="mt-10 space-y-4">
                <label class="block text-base font-semibold text-gray-200">关键功能特性</label>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <label class="flex items-center space-x-3 cursor-pointer group p-4 rounded-xl bg-gray-800/30 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300">
                    <input v-model="formData.features.voiceControl" type="checkbox" class="w-5 h-5 text-purple-600 bg-gray-800 border-gray-600 rounded-md focus:ring-purple-500 focus:ring-2">
                    <span class="text-gray-300 group-hover:text-white transition-colors duration-200 font-medium">语音控制</span>
                  </label>
                  <label class="flex items-center space-x-3 cursor-pointer group p-4 rounded-xl bg-gray-800/30 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300">
                    <input v-model="formData.features.energySaving" type="checkbox" class="w-5 h-5 text-purple-600 bg-gray-800 border-gray-600 rounded-md focus:ring-purple-500 focus:ring-2">
                    <span class="text-gray-300 group-hover:text-white transition-colors duration-200 font-medium">节能模式</span>
                  </label>
                  <label class="flex items-center space-x-3 cursor-pointer group p-4 rounded-xl bg-gray-800/30 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300">
                    <input v-model="formData.features.smartControl" type="checkbox" class="w-5 h-5 text-purple-600 bg-gray-800 border-gray-600 rounded-md focus:ring-purple-500 focus:ring-2">
                    <span class="text-gray-300 group-hover:text-white transition-colors duration-200 font-medium">智能控制</span>
                  </label>
                  <label class="flex items-center space-x-3 cursor-pointer group p-4 rounded-xl bg-gray-800/30 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300">
                    <input v-model="formData.features.safetyProtection" type="checkbox" class="w-5 h-5 text-purple-600 bg-gray-800 border-gray-600 rounded-md focus:ring-purple-500 focus:ring-2">
                    <span class="text-gray-300 group-hover:text-white transition-colors duration-200 font-medium">安全保护</span>
                  </label>
                </div>
              </div>

              <!-- Generate Button -->
              <div class="mt-12">
                <button @click="generateManual" :disabled="isGenerating" class="w-full bg-gradient-to-r from-purple-600 via-purple-700 to-blue-600 text-white px-10 py-5 rounded-xl font-bold text-lg hover:from-purple-700 hover:via-purple-800 hover:to-blue-700 transition-all duration-300 transform hover:scale-[1.02] glow-purple disabled:opacity-50 disabled:cursor-not-allowed shadow-2xl">
                  <span v-if="!isGenerating" class="flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-3">
                      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                    </svg>
                    生成产品说明书
                  </span>
                  <span v-else class="flex items-center justify-center">
                    <div class="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                    AI 正在生成中...
                  </span>
                </button>
              </div>
            </div>

            <!-- Image Upload Section -->
            <div class="glass rounded-2xl p-10 border border-gray-700/50 hover-lift shadow-2xl">
              <div class="flex items-center mb-8">
                <div class="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
                    <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
                    <circle cx="9" cy="9" r="2"/>
                    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
                  </svg>
                </div>
                <div>
                  <h2 class="text-3xl font-bold text-white">产品图片</h2>
                  <p class="text-gray-400 mt-1">上传产品相关图片，最多8张</p>
                </div>
              </div>
              
              <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div v-for="(image, index) in images" :key="index" class="aspect-square border-2 border-dashed border-gray-600/50 rounded-xl flex items-center justify-center cursor-pointer hover:border-purple-500/70 transition-all duration-300 group relative overflow-hidden bg-gray-800/20 backdrop-blur-sm">
                  <input type="file" @change="handleImageUpload($event, index)" accept="image/*" class="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10">
                  <div v-if="!image.url" class="text-center group-hover:text-purple-400 transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mx-auto mb-3 text-gray-500 group-hover:text-purple-400">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                      <polyline points="7,10 12,15 17,10"/>
                      <line x1="12" x2="12" y1="15" y2="3"/>
                    </svg>
                    <span class="text-sm text-gray-500 group-hover:text-purple-400 font-medium">图片 {{ index + 1 }}</span>
                  </div>
                  <img v-else :src="image.url" :alt="`Image ${index + 1}`" class="w-full h-full object-cover rounded-xl">
                  <button v-if="image.url" @click="removeImage(index)" class="absolute top-3 right-3 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm hover:bg-red-600 transition-colors duration-200 shadow-lg">
                    ×
                  </button>
                </div>
              </div>

              <button @click="addImagesToManual" :disabled="!hasImages" class="w-full bg-gradient-to-r from-green-600 via-green-700 to-teal-600 text-white px-10 py-4 rounded-xl font-bold hover:from-green-700 hover:via-green-800 hover:to-teal-700 transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed shadow-xl">
                将图片添加到说明书
              </button>
            </div>
          </div>

          <!-- Right Panel - Preview -->
          <div class="lg:col-span-4">
            <div class="glass rounded-2xl p-8 border border-gray-700/50 hover-lift sticky top-24 shadow-2xl">
              <div class="flex items-center mb-6">
                <div class="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mr-3 shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                  </svg>
                </div>
                <div>
                  <h2 class="text-2xl font-bold text-white">实时预览</h2>
                  <p class="text-gray-400 text-sm mt-1">查看生成的说明书内容</p>
                </div>
              </div>
              
              <div v-if="!generatedContent" class="text-center py-16">
                <div class="w-20 h-20 bg-gray-800/50 rounded-xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-500">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                  </svg>
                </div>
                <p class="text-gray-500 text-base leading-relaxed">请先配置产品信息<br />并生成说明书</p>
              </div>

              <div v-else class="space-y-6">
                <div class="bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-xl p-6 border border-purple-500/20 backdrop-blur-sm">
                  <h3 class="font-bold text-purple-400 mb-3 text-lg">产品概述</h3>
                  <p class="text-sm text-gray-300 leading-relaxed">{{ generatedContent.overview }}</p>
                </div>

                <div class="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-xl p-6 border border-yellow-500/20 backdrop-blur-sm">
                  <h3 class="font-bold text-yellow-400 mb-3 text-lg">安全警告</h3>
                  <ul class="text-sm text-gray-300 space-y-2">
                    <li v-for="warning in generatedContent.warnings" :key="warning" class="flex items-start">
                      <span class="text-yellow-400 mr-3 mt-0.5">⚠</span>
                      <span>{{ warning }}</span>
                    </li>
                  </ul>
                </div>

                <div class="bg-gradient-to-r from-green-500/10 to-teal-500/10 rounded-xl p-6 border border-green-500/20 backdrop-blur-sm">
                  <h3 class="font-bold text-green-400 mb-3 text-lg">使用说明</h3>
                  <ol class="text-sm text-gray-300 space-y-2">
                    <li v-for="(instruction, index) in generatedContent.instructions" :key="instruction" class="flex items-start">
                      <span class="text-green-400 mr-3 font-bold min-w-[20px]">{{ index + 1 }}.</span>
                      <span>{{ instruction }}</span>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

// 定义中间件保护此页面
definePageMeta({
  middleware: 'auth'
})

useHead({
  title: 'AI 产品说明书生成工具 - Devin AI'
})

// 用户认证相关
const { user, logout: authLogout, fetchUser } = useAuth()

// 用户菜单折叠状态
const isUserMenuOpen = ref(false)

// 页面初始化时获取最新用户信息
onMounted(async () => {
  try {
    // 主动获取最新用户信息并缓存到localStorage
    await fetchUser()
  } catch (error) {
    console.error('获取用户信息失败:', error)
  }
})

// 切换用户菜单
const toggleUserMenu = () => {
  isUserMenuOpen.value = !isUserMenuOpen.value
}

// 退出登录
const logout = async () => {
  try {
    await authLogout()
    await navigateTo('/login')
  } catch (error) {
    console.error('退出登录失败:', error)
  }
}

// Form data
const formData = ref({
  productType: '',
  dimensions: '',
  power: '',
  country: '',
  features: {
    voiceControl: false,
    energySaving: false,
    smartControl: false,
    safetyProtection: false
  }
})

// Images
const images = ref(Array(8).fill(null).map(() => ({ url: null, file: null })))

// Generated content
const generatedContent = ref(null)
const isGenerating = ref(false)

// Computed
const hasImages = computed(() => images.value.some(img => img.url))

// Methods
const handleImageUpload = (event, index) => {
  const file = event.target.files[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = (e) => {
      images.value[index] = {
        url: e.target.result,
        file: file
      }
    }
    reader.readAsDataURL(file)
  }
}

const removeImage = (index) => {
  images.value[index] = { url: null, file: null }
}

const generateManual = async () => {
  if (!formData.value.productType) {
    alert('请选择产品类型')
    return
  }

  isGenerating.value = true
  
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 2000))
  
  // Generate mock content based on form data
  const productTypeNames = {
    'electric-stove': '电器炉',
    'gas-fireplace': '燃气壁炉',
    'air-conditioner': '空调设备',
    'water-heater': '热水器',
    'refrigerator': '冰箱'
  }
  
  const productName = productTypeNames[formData.value.productType] || '产品'
  
  generatedContent.value = {
    overview: `本${productName}采用先进技术设计，具备高效能和安全性。适用于${formData.value.country ? getCountryName(formData.value.country) : '多个国家'}市场，符合当地安全标准。产品经过严格质量检测，确保为用户提供优质的使用体验。`,
    warnings: [
      '使用前请仔细阅读所有安全说明',
      '请确保电源电压符合产品要求',
      '禁止在潮湿环境中使用',
      '儿童使用时需成人监督',
      '定期检查电源线是否损坏'
    ],
    instructions: [
      '检查包装内容是否完整',
      '按照说明书进行正确安装',
      '首次使用前进行功能测试',
      '定期进行清洁和维护',
      '如有异常请及时联系售后服务'
    ]
  }
  
  isGenerating.value = false
}

const addImagesToManual = () => {
  if (!hasImages.value) {
    alert('请先上传图片')
    return
  }
  
  alert('图片已成功添加到说明书中')
}

const getCountryName = (code) => {
  const countries = {
    'china': '中国',
    'usa': '美国',
    'japan': '日本',
    'germany': '德国'
  }
  return countries[code] || code
}
</script>

<style scoped>
.glass {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.hover-lift {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.hover-lift:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.gradient-text {
  background: linear-gradient(135deg, #a855f7 0%, #3b82f6 30%, #06b6d4 70%, #10b981 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  background-size: 200% 200%;
  animation: gradient-shift 3s ease-in-out infinite;
}

@keyframes gradient-shift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

.glow-purple {
  box-shadow: 0 0 30px rgba(168, 85, 247, 0.4);
}

.glow-purple:hover {
  box-shadow: 0 0 40px rgba(168, 85, 247, 0.6);
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb {
  background: rgba(168, 85, 247, 0.5);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(168, 85, 247, 0.7);
}

/* Enhanced animations */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

/* Form focus states */
input:focus, select:focus {
  transform: translateY(-1px);
}

/* Button hover effects */
button:hover:not(:disabled) {
  transform: translateY(-2px);
}

/* Checkbox animations */
input[type="checkbox"]:checked {
  animation: checkboxPulse 0.3s ease-in-out;
}

@keyframes checkboxPulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}
</style>