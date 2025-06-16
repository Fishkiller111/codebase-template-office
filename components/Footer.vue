<template>
  <footer class="bg-gray-900 border-t border-gray-800 py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid md:grid-cols-4 gap-8">
        <!-- Company Info -->
        <div class="md:col-span-1">
          <div class="text-2xl font-bold gradient-text mb-4">Devin</div>
          <p class="text-gray-400 mb-6 leading-relaxed">
            全球首个AI软件工程师，构建自主软件开发的未来。
          </p>
          <div class="flex space-x-4">
            <a href="#" class="text-gray-400 hover:text-white transition-colors duration-200">
              <Github class="w-6 h-6" />
            </a>
            <a href="#" class="text-gray-400 hover:text-white transition-colors duration-200">
              <Twitter class="w-6 h-6" />
            </a>
            <a href="#" class="text-gray-400 hover:text-white transition-colors duration-200">
              <Linkedin class="w-6 h-6" />
            </a>
            <a href="#" class="text-gray-400 hover:text-white transition-colors duration-200">
              <Youtube class="w-6 h-6" />
            </a>
          </div>
        </div>
        
        <!-- Product -->
        <div>
          <h3 class="text-white font-semibold mb-6">产品</h3>
          <ul class="space-y-3">
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors duration-200">功能特性</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors duration-200">价格方案</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors duration-200">API接口</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors duration-200">开发文档</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors duration-200">集成方案</a></li>
          </ul>
        </div>
        
        <!-- Company -->
        <div>
          <h3 class="text-white font-semibold mb-6">公司</h3>
          <ul class="space-y-3">
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors duration-200">关于我们</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors duration-200">技术博客</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors duration-200">招聘信息</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors duration-200">媒体报道</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors duration-200">联系我们</a></li>
          </ul>
        </div>
        
        <!-- Support -->
        <div>
          <h3 class="text-white font-semibold mb-6">支持</h3>
          <ul class="space-y-3">
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors duration-200">帮助中心</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors duration-200">用户社区</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors duration-200">Discord</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors duration-200">服务状态</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors duration-200">安全中心</a></li>
          </ul>
        </div>
      </div>
      
      <!-- Bottom Bar -->
      <div class="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
        <div class="text-gray-400 text-sm mb-4 md:mb-0">
          © 2024 Devin AI. 保留所有权利。
        </div>
        <div class="flex space-x-6 text-sm">
          <a href="#" class="text-gray-400 hover:text-white transition-colors duration-200">隐私政策</a>
          <a href="#" class="text-gray-400 hover:text-white transition-colors duration-200">服务条款</a>
          <a href="#" class="text-gray-400 hover:text-white transition-colors duration-200">Cookie政策</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { Github, Twitter, Linkedin, Youtube } from 'lucide-vue-next'
</script>