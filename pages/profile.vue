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

          <NuxtLink to="/dashboard" class="flex items-center px-4 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-gray-700/50 transition-all duration-300 group">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-3 group-hover:text-purple-400">
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
            </svg>
            <span class="font-medium">说明书生成器</span>
          </NuxtLink>
        </nav>
      </div>

      <!-- Bottom Section - User Profile -->
      <div class="absolute bottom-6 left-6 right-6">
        <div class="bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-xl border border-purple-500/20 overflow-hidden">
          <div class="cursor-pointer" @click="toggleUserMenu">
            <div class="p-4">
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
          </div>

          <!-- Collapsible Menu -->
          <div class="overflow-hidden transition-all duration-300 ease-in-out" :class="isUserMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'">
            <div class="border-t border-purple-500/20 bg-gray-900/50">
              <!-- Personal Center Options -->
              <div class="p-2 space-y-1">
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
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <!-- Header Section -->
        <div class="mb-12">
          <div class="flex items-center mb-6">
            <button @click="$router.go(-1)" class="mr-4 p-2 hover:bg-gray-800/50 rounded-lg transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-400 hover:text-white">
                <path d="m12 19-7-7 7-7"/>
                <path d="M19 12H5"/>
              </svg>
            </button>
            <div>
              <h1 class="text-4xl font-bold gradient-text">个人资料</h1>
              <p class="text-gray-400 mt-2">管理您的个人信息和账户设置</p>
            </div>
          </div>
        </div>

        <div class="grid lg:grid-cols-3 gap-8">
          <!-- Left Panel - Avatar and Basic Info -->
          <div class="lg:col-span-1">
            <div class="glass rounded-2xl p-8 border border-gray-700/50 hover-lift shadow-2xl text-center">
              <!-- Avatar Upload -->
              <div class="relative inline-block mb-6">
                <div class="w-32 h-32 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto overflow-hidden group cursor-pointer" @click="triggerAvatarUpload">
                  <img v-if="profileData.avatar" :src="profileData.avatar" :alt="profileData.username" class="w-full h-full object-cover">
                  <span v-else class="text-white text-3xl font-bold">{{ profileData.username?.charAt(0)?.toUpperCase() || 'U' }}</span>
                  
                  <!-- Upload Overlay -->
                  <div class="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
                      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/>
                      <circle cx="12" cy="13" r="3"/>
                    </svg>
                  </div>
                </div>
                <input ref="avatarInput" type="file" @change="handleAvatarUpload" accept="image/*" class="hidden">
              </div>

              <h2 class="text-2xl font-bold text-white mb-2">{{ profileData.username || '用户' }}</h2>
              <p class="text-gray-400 mb-4">{{ profileData.email || 'user@example.com' }}</p>
              
              <!-- Status -->
              <div class="flex items-center justify-center space-x-2 mb-6">
                <div class="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span class="text-sm text-green-400 font-medium">在线</span>
              </div>

              <!-- Quick Stats -->
              <div class="grid grid-cols-2 gap-4 text-center">
                <div class="bg-gray-800/30 rounded-xl p-4">
                  <div class="text-2xl font-bold text-purple-400 mb-1">{{ userStats.projectsCount }}</div>
                  <div class="text-xs text-gray-400">项目数量</div>
                </div>
                <div class="bg-gray-800/30 rounded-xl p-4">
                  <div class="text-2xl font-bold text-blue-400 mb-1">{{ userStats.daysActive }}</div>
                  <div class="text-xs text-gray-400">活跃天数</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Panel - Profile Form -->
          <div class="lg:col-span-2 space-y-8">
            <!-- Basic Information -->
            <div class="glass rounded-2xl p-8 border border-gray-700/50 hover-lift shadow-2xl">
              <div class="flex items-center justify-between mb-6">
                <div class="flex items-center">
                  <div class="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-2xl font-bold text-white">基本信息</h3>
                    <p class="text-gray-400 text-sm">{{ isEditingProfile ? '编辑您的个人基本信息' : '查看您的个人基本信息' }}</p>
                  </div>
                </div>
                <button @click="isEditingProfile = !isEditingProfile" class="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors duration-200 flex items-center space-x-2">
                  <svg v-if="!isEditingProfile" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>
                    <path d="m15 5 4 4"/>
                  </svg>
                  <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M18 6 6 18"/>
                    <path d="m6 6 12 12"/>
                  </svg>
                  <span>{{ isEditingProfile ? '取消编辑' : '编辑' }}</span>
                </button>
              </div>

              <!-- 查看模式 -->
              <div v-if="!isEditingProfile" class="space-y-6">
                <div class="grid md:grid-cols-2 gap-6">
                  <!-- Username -->
                  <div class="space-y-2">
                    <label class="block text-sm font-semibold text-gray-200">用户名</label>
                    <div class="w-full px-4 py-3 bg-gray-800/30 border border-gray-600/30 rounded-xl text-gray-300">
                      {{ profileData.username || '未设置' }}
                    </div>
                  </div>

                  <!-- Email -->
                  <div class="space-y-2">
                    <label class="block text-sm font-semibold text-gray-200">邮箱地址</label>
                    <div class="w-full px-4 py-3 bg-gray-800/30 border border-gray-600/30 rounded-xl text-gray-300">
                      {{ profileData.email || '未设置' }}
                    </div>
                  </div>
                </div>

                <!-- Bio -->
                <div class="space-y-2">
                  <label class="block text-sm font-semibold text-gray-200">个人简介</label>
                  <div class="w-full px-4 py-3 bg-gray-800/30 border border-gray-600/30 rounded-xl text-gray-300 min-h-[84px]">
                    {{ profileData.bio || '暂无个人简介' }}
                  </div>
                </div>
              </div>

              <!-- 编辑模式 -->
              <form v-else @submit.prevent="updateProfile" class="space-y-6">
                <div class="grid md:grid-cols-2 gap-6">
                  <!-- Username -->
                  <div class="space-y-2">
                    <label class="block text-sm font-semibold text-gray-200">用户名</label>
                    <input v-model="profileData.username" type="text" class="w-full px-4 py-3 bg-gray-800/80 border border-gray-600/50 rounded-xl text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300">
                  </div>

                  <!-- Email -->
                  <div class="space-y-2">
                    <label class="block text-sm font-semibold text-gray-200">邮箱地址</label>
                    <input v-model="profileData.email" type="email" class="w-full px-4 py-3 bg-gray-800/80 border border-gray-600/50 rounded-xl text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300">
                  </div>
                </div>

                <!-- Bio -->
                <div class="space-y-2">
                  <label class="block text-sm font-semibold text-gray-200">个人简介</label>
                  <textarea v-model="profileData.bio" rows="3" placeholder="介绍一下您自己..." class="w-full px-4 py-3 bg-gray-800/80 border border-gray-600/50 rounded-xl text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 resize-none"></textarea>
                </div>

                <!-- Save Button -->
                <button type="submit" :disabled="isUpdating" class="w-full bg-gradient-to-r from-purple-600 via-purple-700 to-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:from-purple-700 hover:via-purple-800 hover:to-blue-700 transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed">
                  <span v-if="!isUpdating">保存更改</span>
                  <span v-else class="flex items-center justify-center">
                    <div class="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    保存中...
                  </span>
                </button>
              </form>
            </div>

            <!-- Password Change -->
            <div class="glass rounded-2xl p-8 border border-gray-700/50 hover-lift shadow-2xl">
              <div class="flex items-center justify-between mb-6">
                <div class="flex items-center">
                  <div class="w-10 h-10 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
                      <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/>
                      <path d="m7 11V7a5 5 0 0 1 10 0v4"/>
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-2xl font-bold text-white">修改密码</h3>
                    <p class="text-gray-400 text-sm">{{ isEditingPassword ? '更新您的登录密码' : '密码安全设置' }}</p>
                  </div>
                </div>
                <button @click="isEditingPassword = !isEditingPassword" class="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors duration-200 flex items-center space-x-2">
                  <svg v-if="!isEditingPassword" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>
                    <path d="m15 5 4 4"/>
                  </svg>
                  <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M18 6 6 18"/>
                    <path d="m6 6 12 12"/>
                  </svg>
                  <span>{{ isEditingPassword ? '取消修改' : '修改密码' }}</span>
                </button>
              </div>

              <!-- 查看模式 -->
              <div v-if="!isEditingPassword" class="space-y-6">
                <div class="bg-gray-800/30 border border-gray-600/30 rounded-xl p-6 text-center">
                  <div class="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-green-400">
                      <path d="M9 12l2 2 4-4"/>
                      <circle cx="12" cy="12" r="9"/>
                    </svg>
                  </div>
                  <h4 class="text-lg font-semibold text-white mb-2">密码安全</h4>
                  <p class="text-gray-400 text-sm">您的密码已设置，最后更新时间：{{ user?.updatedAt ? new Date(user.updatedAt).toLocaleDateString() : '未知' }}</p>
                  <div class="mt-4 flex items-center justify-center space-x-2 text-sm text-gray-400">
                    <span>密码强度：</span>
                    <span class="text-green-400 font-medium">安全</span>
                  </div>
                </div>
              </div>

              <!-- 编辑模式 -->
              <form v-else @submit.prevent="changePassword" class="space-y-6">
                <!-- Current Password -->
                <div class="space-y-2">
                  <label class="block text-sm font-semibold text-gray-200">当前密码</label>
                  <input v-model="passwordForm.currentPassword" type="password" class="w-full px-4 py-3 bg-gray-800/80 border border-gray-600/50 rounded-xl text-white focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all duration-300">
                </div>

                <div class="grid md:grid-cols-2 gap-6">
                  <!-- New Password -->
                  <div class="space-y-2">
                    <label class="block text-sm font-semibold text-gray-200">新密码</label>
                    <input v-model="passwordForm.newPassword" type="password" class="w-full px-4 py-3 bg-gray-800/80 border border-gray-600/50 rounded-xl text-white focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all duration-300">
                  </div>

                  <!-- Confirm Password -->
                  <div class="space-y-2">
                    <label class="block text-sm font-semibold text-gray-200">确认新密码</label>
                    <input v-model="passwordForm.confirmPassword" type="password" class="w-full px-4 py-3 bg-gray-800/80 border border-gray-600/50 rounded-xl text-white focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all duration-300">
                  </div>
                </div>

                <!-- Change Password Button -->
                <button type="submit" :disabled="isChangingPassword" class="w-full bg-gradient-to-r from-red-600 via-red-700 to-orange-600 text-white px-8 py-3 rounded-xl font-bold hover:from-red-700 hover:via-red-800 hover:to-orange-700 transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed">
                  <span v-if="!isChangingPassword">修改密码</span>
                  <span v-else class="flex items-center justify-center">
                    <div class="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    修改中...
                  </span>
                </button>
              </form>
            </div>

            <!-- Account Settings -->
            <div class="glass rounded-2xl p-8 border border-gray-700/50 hover-lift shadow-2xl">
              <div class="flex items-center mb-6">
                <div class="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
                    <circle cx="12" cy="12" r="3"/>
                    <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1"/>
                  </svg>
                </div>
                <div>
                  <h3 class="text-2xl font-bold text-white">账户设置</h3>
                  <p class="text-gray-400 text-sm">管理您的账户偏好设置</p>
                </div>
              </div>

              <div class="space-y-4">
                <!-- Email Notifications -->
                <div class="flex items-center justify-between p-4 bg-gray-800/30 rounded-xl">
                  <div>
                    <p class="text-white font-medium">邮件通知</p>
                    <p class="text-gray-400 text-sm">接收重要账户更新通知</p>
                  </div>
                  <label class="relative inline-flex items-center cursor-pointer">
                    <input v-model="settings.emailNotifications" type="checkbox" class="sr-only peer">
                    <div class="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300/25 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                  </label>
                </div>

                <!-- Two Factor Authentication -->
                <div class="flex items-center justify-between p-4 bg-gray-800/30 rounded-xl">
                  <div>
                    <p class="text-white font-medium">双重认证</p>
                    <p class="text-gray-400 text-sm">增强账户安全性</p>
                  </div>
                  <label class="relative inline-flex items-center cursor-pointer">
                    <input v-model="settings.twoFactorAuth" type="checkbox" class="sr-only peer">
                    <div class="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300/25 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                  </label>
                </div>

                <!-- Auto Save -->
                <div class="flex items-center justify-between p-4 bg-gray-800/30 rounded-xl">
                  <div>
                    <p class="text-white font-medium">自动保存</p>
                    <p class="text-gray-400 text-sm">自动保存项目进度</p>
                  </div>
                  <label class="relative inline-flex items-center cursor-pointer">
                    <input v-model="settings.autoSave" type="checkbox" class="sr-only peer">
                    <div class="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300/25 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                  </label>
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
import { ref, reactive, onMounted } from 'vue'

// 定义中间件保护此页面
definePageMeta({
  middleware: 'auth'
})

useHead({
  title: '个人资料 - Devin AI'
})

// 用户认证相关
const { user, setUser } = useAuth()

// 页面状态
const isUpdating = ref(false)
const isChangingPassword = ref(false)
const avatarInput = ref(null)
const isEditingProfile = ref(false)
const isEditingPassword = ref(false)
const isUserMenuOpen = ref(false)

// 个人资料数据
const profileData = ref({
  username: '',
  email: '',
  bio: '',
  avatar: null
})

// 密码修改表单
const passwordForm = ref({
  currentPassword: '',
  newPassword: '',
  confirmPassword: ''
})

// 用户统计
const userStats = ref({
  projectsCount: 12,
  daysActive: 45
})

// 设置选项
const settings = ref({
  emailNotifications: true,
  twoFactorAuth: false,
  autoSave: true
})

// 初始化数据
onMounted(() => {
  // 直接使用缓存的用户数据（已在dashboard页面获取并缓存）
  if (user.value) {
    profileData.value = {
      username: user.value.username || '',
      email: user.value.email || '',
      bio: user.value.bio || '',
      avatar: user.value.avatar || null
    }
  }
})

// 触发头像上传
const triggerAvatarUpload = () => {
  avatarInput.value?.click()
}

// 处理头像上传
const handleAvatarUpload = async (event) => {
  const file = event.target.files[0]
  if (file) {
    try {
      // 验证文件类型
      const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp']
      if (!allowedTypes.includes(file.type)) {
        alert('只支持 JPEG、PNG、GIF、WebP 格式的图片')
        return
      }

      // 验证文件大小（5MB）
      const maxSize = 5 * 1024 * 1024
      if (file.size > maxSize) {
        alert('图片大小不能超过 5MB')
        return
      }

      // 将文件转换为base64
      const reader = new FileReader()
      reader.onload = async (e) => {
        try {
          const base64Data = e.target.result

          // 调用头像上传API
          const response = await $fetch('/api/user/avatar', {
            method: 'POST',
            body: {
              avatar: base64Data
            }
          })

          if (response.success) {
            profileData.value.avatar = response.user.avatar
            // 更新用户状态和localStorage缓存
            if (user.value) {
              setUser({ ...user.value, avatar: response.user.avatar })
            }
            alert('头像上传成功！')
          }
        } catch (error) {
          console.error('头像上传失败:', error)
          alert(error.data?.message || '头像上传失败，请重试')
        }
      }

      reader.onerror = () => {
        alert('文件读取失败，请重试')
      }

      reader.readAsDataURL(file)
    } catch (error) {
      console.error('头像处理失败:', error)
      alert('头像处理失败，请重试')
    }
  }
}

// 更新个人资料
const updateProfile = async () => {
  if (!profileData.value.username || !profileData.value.email) {
    alert('请填写完整的个人信息')
    return
  }

  isUpdating.value = true
  
  try {
    const response = await $fetch('/api/user/profile', {
      method: 'PUT',
      body: {
        username: profileData.value.username,
        email: profileData.value.email,
        bio: profileData.value.bio,
        avatar: profileData.value.avatar
      }
    })
    
    if (response.success) {
      // 更新本地用户数据和localStorage缓存
      if (user.value) {
        setUser({ ...user.value, ...response.user })
      }
      // 退出编辑模式
      isEditingProfile.value = false
      alert('个人资料更新成功！')
    }
  } catch (error) {
    console.error('更新失败:', error)
    alert(error.data?.message || '更新失败，请重试')
  } finally {
    isUpdating.value = false
  }
}

// 修改密码
const changePassword = async () => {
  if (!passwordForm.value.currentPassword || !passwordForm.value.newPassword || !passwordForm.value.confirmPassword) {
    alert('请填写完整的密码信息')
    return
  }

  if (passwordForm.value.newPassword !== passwordForm.value.confirmPassword) {
    alert('新密码两次输入不一致')
    return
  }

  if (passwordForm.value.newPassword.length < 6) {
    alert('新密码长度至少6位')
    return
  }

  isChangingPassword.value = true
  
  try {
    const response = await $fetch('/api/user/password', {
      method: 'PUT',
      body: {
        currentPassword: passwordForm.value.currentPassword,
        newPassword: passwordForm.value.newPassword
      }
    })
    
    if (response.success) {
      // 清空表单
      passwordForm.value = {
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
      }
      
      // 退出编辑模式
      isEditingPassword.value = false
      alert('密码修改成功！')
    }
  } catch (error) {
    console.error('密码修改失败:', error)
    alert(error.data?.message || '密码修改失败，请重试')
  } finally {
    isChangingPassword.value = false
  }
}
 
// 切换用户菜单
const toggleUserMenu = () => {
  isUserMenuOpen.value = !isUserMenuOpen.value
}

// 退出登录
const logout = async () => {
  const { logout: authLogout } = useAuth()
  await authLogout()
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

/* Form focus states */
input:focus, textarea:focus {
  transform: translateY(-1px);
}

/* Button hover effects */
button:hover:not(:disabled) {
  transform: translateY(-2px);
}

/* Toggle switch animations */
.peer-checked:after {
  transform: translateX(100%);
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
</style> 