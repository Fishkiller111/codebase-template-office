<template>
  <div class="relative">
    <!-- Terminal Window -->
    <div class="glass rounded-xl border border-gray-700 overflow-hidden shadow-2xl glow-purple">
      <!-- Title Bar -->
      <div class="flex items-center justify-between bg-gray-800/50 px-4 py-3 border-b border-gray-700">
        <div class="flex items-center space-x-2">
          <div class="w-3 h-3 bg-red-500 rounded-full"></div>
          <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div class="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div class="text-gray-400 text-sm font-mono">devin-ai-assistant.py</div>
        <div class="w-16"></div>
      </div>
      
      <!-- Code Content -->
      <div class="p-6 bg-gray-900/50 h-96 overflow-hidden">
        <div class="font-mono text-sm space-y-2">
          <!-- Line Numbers -->
          <div class="flex">
            <div class="text-gray-500 mr-4 select-none">1</div>
            <div class="text-purple-400">import</div>
            <div class="text-white ml-2">ai_assistant</div>
            <div class="text-purple-400 ml-2">from</div>
            <div class="text-green-400 ml-2">'devin'</div>
          </div>
          
          <div class="flex">
            <div class="text-gray-500 mr-4 select-none">2</div>
            <div class="text-purple-400">import</div>
            <div class="text-white ml-2">code_generator</div>
          </div>
          
          <div class="flex">
            <div class="text-gray-500 mr-4 select-none">3</div>
          </div>
          
          <div class="flex">
            <div class="text-gray-500 mr-4 select-none">4</div>
            <div class="text-blue-400">class</div>
            <div class="text-yellow-400 ml-2">DevinAI</div>
            <div class="text-white">:</div>
          </div>
          
          <div class="flex">
            <div class="text-gray-500 mr-4 select-none">5</div>
            <div class="text-blue-400 ml-4">def</div>
            <div class="text-green-400 ml-2">build_app</div>
            <div class="text-white">(</div>
            <div class="text-orange-400">self</div>
            <div class="text-white">, requirements):</div>
          </div>
          
          <div class="flex">
            <div class="text-gray-500 mr-4 select-none">6</div>
            <div class="text-gray-500 ml-8"># Analyze requirements</div>
          </div>
          
          <div class="flex">
            <div class="text-gray-500 mr-4 select-none">7</div>
            <div class="text-white ml-8">architecture = </div>
            <div class="text-orange-400">self</div>
            <div class="text-white">.analyze(requirements)</div>
          </div>
          
          <!-- Typing animation line -->
          <div class="flex">
            <div class="text-gray-500 mr-4 select-none">8</div>
            <div class="ml-8">
              <span class="text-white">{{ typingText }}</span>
              <span class="animate-pulse text-purple-500">|</span>
            </div>
          </div>
        </div>
        
        <!-- Terminal Output -->
        <div class="mt-6 border-t border-gray-700 pt-4">
          <div class="text-green-400 text-xs">
            <div>$ devin build --app="E-commerce Platform"</div>
            <div class="text-gray-400 mt-2">
              ✓ Analyzing requirements...<br>
              ✓ Generating architecture...<br>
              ✓ Creating components...<br>
              <span class="text-yellow-400">⚡ Building application...</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Floating Code Snippets -->
    <div class="absolute -top-4 -right-4 glass p-3 rounded-lg animate-float">
      <div class="text-xs font-mono text-green-400">npm run build</div>
    </div>
    
    <div class="absolute -bottom-6 -left-6 glass p-3 rounded-lg animate-bounce-slow">
      <div class="text-xs font-mono text-blue-400">git push origin</div>
    </div>
  </div>
</template>

<script setup>
const typingText = ref('')
const fullText = 'code = self.generate_code(architecture)'

onMounted(() => {
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
        }, 100)
      }, 2000)
    }
  }, 100)
})
</script>