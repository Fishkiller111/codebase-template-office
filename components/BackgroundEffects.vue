<template>
  <div class="fixed inset-0 pointer-events-none overflow-hidden">
    <!-- Gradient Background with Hover Effect -->
    <div 
      class="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-blue-900/20 transition-all duration-700 ease-out hover-bg"
      @mouseenter="onMouseEnter"
      @mousemove="onMouseMove"
      @mouseleave="onMouseLeave"
      :style="backgroundStyle"
    ></div>
    
    <!-- Interactive Particles -->
    <div 
      v-for="(particle, index) in particles" 
      :key="index"
      class="absolute rounded-full animate-pulse particle-hover"
      :class="[
        particle.size,
        particle.color,
        { 'particle-active': isHovering }
      ]"
      :style="{
        left: particle.x + '%',
        top: particle.y + '%',
        animationDelay: particle.delay + 's',
        animationDuration: particle.duration + 's',
        transform: `translate(${particle.offsetX}px, ${particle.offsetY}px) scale(${particle.scale})`,
        opacity: particle.opacity
      }"
    ></div>
    
    <!-- Grid Pattern with Hover Effect -->
    <div class="absolute inset-0 opacity-10 grid-hover transition-opacity duration-500" :class="{ 'grid-active': isHovering }">
      <div class="grid grid-cols-12 h-full">
        <div v-for="i in 12" :key="i" class="border-r border-purple-500/20 transition-colors duration-300"></div>
      </div>
    </div>
    
    <!-- Enhanced Floating Orbs with Mouse Interaction -->
    <div 
      class="absolute w-64 h-64 rounded-full blur-3xl animate-float orb-hover transition-all duration-1000 ease-out"
      :style="{
        top: orbs.orb1.y + '%',
        left: orbs.orb1.x + '%',
        background: orbs.orb1.gradient,
        transform: `translate(${orbs.orb1.offsetX}px, ${orbs.orb1.offsetY}px) scale(${orbs.orb1.scale})`,
        opacity: orbs.orb1.opacity
      }"
    ></div>
    
    <div 
      class="absolute w-48 h-48 rounded-full blur-3xl animate-bounce-slow orb-hover transition-all duration-1000 ease-out"
      :style="{
        top: orbs.orb2.y + '%',
        right: orbs.orb2.x + '%',
        background: orbs.orb2.gradient,
        transform: `translate(${orbs.orb2.offsetX}px, ${orbs.orb2.offsetY}px) scale(${orbs.orb2.scale})`,
        opacity: orbs.orb2.opacity,
        animationDelay: '1s'
      }"
    ></div>
    
    <div 
      class="absolute w-32 h-32 rounded-full blur-2xl animate-pulse-slow orb-hover transition-all duration-1000 ease-out"
      :style="{
        top: orbs.orb3.y + '%',
        left: orbs.orb3.x + '%',
        background: orbs.orb3.gradient,
        transform: `translate(${orbs.orb3.offsetX}px, ${orbs.orb3.offsetY}px) scale(${orbs.orb3.scale})`,
        opacity: orbs.orb3.opacity
      }"
    ></div>
    
    <!-- Mouse Follower Effect -->
    <div 
      v-if="isHovering"
      class="absolute w-96 h-96 rounded-full pointer-events-none transition-all duration-300 ease-out"
      :style="{
        left: mouseFollower.x + 'px',
        top: mouseFollower.y + 'px',
        background: 'radial-gradient(circle, rgba(168, 85, 247, 0.1) 0%, rgba(59, 130, 246, 0.05) 50%, transparent 70%)',
        transform: 'translate(-50%, -50%)',
        opacity: mouseFollower.opacity
      }"
    ></div>
  </div>
</template>

<script setup>
const particles = ref([])
const isHovering = ref(false)
const mousePosition = ref({ x: 0, y: 0 })
const backgroundStyle = ref({})
const mouseFollower = ref({ x: 0, y: 0, opacity: 0 })

// Orbs state with enhanced properties
const orbs = ref({
  orb1: {
    x: 25, y: 25,
    offsetX: 0, offsetY: 0,
    scale: 1, opacity: 0.1,
    gradient: 'radial-gradient(circle, rgba(168, 85, 247, 0.1) 0%, transparent 70%)'
  },
  orb2: {
    x: 25, y: 75,
    offsetX: 0, offsetY: 0,
    scale: 1, opacity: 0.1,
    gradient: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)'
  },
  orb3: {
    x: 75, y: 50,
    offsetX: 0, offsetY: 0,
    scale: 1, opacity: 0.1,
    gradient: 'radial-gradient(circle, rgba(236, 72, 153, 0.1) 0%, transparent 70%)'
  }
})

// Performance optimized mouse move handler with throttling
let mouseMoveTimeout = null
const throttledMouseMove = (event) => {
  if (mouseMoveTimeout) return
  
  // Capture event properties immediately to prevent null reference errors
  const currentTarget = event.currentTarget
  const clientX = event.clientX
  const clientY = event.clientY
  
  // Check if currentTarget exists before proceeding
  if (!currentTarget) return
  
  mouseMoveTimeout = setTimeout(() => {
    const rect = currentTarget.getBoundingClientRect()
    const x = (clientX - rect.left) / rect.width
    const y = (clientY - rect.top) / rect.height
    
    mousePosition.value = { x, y }
    
    // Update mouse follower position
    mouseFollower.value.x = clientX
    mouseFollower.value.y = clientY
    mouseFollower.value.opacity = 0.8
    
    // Update background gradient based on mouse position
    backgroundStyle.value = {
      background: `radial-gradient(circle at ${x * 100}% ${y * 100}%, 
        rgba(168, 85, 247, 0.15) 0%, 
        rgba(59, 130, 246, 0.1) 30%, 
        rgba(17, 24, 39, 1) 70%)`
    }
    
    // Update orbs with subtle mouse interaction
    updateOrbsPosition(x, y)
    
    // Update particles with mouse interaction
    updateParticlesPosition(x, y)
    
    mouseMoveTimeout = null
  }, 16) // ~60fps throttling
}

const updateOrbsPosition = (mouseX, mouseY) => {
  // Orb 1 - moves away from mouse
  const orb1Distance = Math.sqrt(Math.pow(mouseX - 0.25, 2) + Math.pow(mouseY - 0.25, 2))
  orbs.value.orb1.offsetX = (mouseX - 0.25) * -30
  orbs.value.orb1.offsetY = (mouseY - 0.25) * -30
  orbs.value.orb1.scale = 1 + (1 - orb1Distance) * 0.3
  orbs.value.orb1.opacity = 0.1 + (1 - orb1Distance) * 0.1
  
  // Orb 2 - moves towards mouse
  orbs.value.orb2.offsetX = (mouseX - 0.75) * 20
  orbs.value.orb2.offsetY = (mouseY - 0.75) * 20
  orbs.value.orb2.scale = 1 + Math.abs(mouseX - 0.75) * 0.2
  orbs.value.orb2.opacity = 0.1 + Math.abs(mouseY - 0.75) * 0.1
  
  // Orb 3 - rotates around mouse
  const angle = Math.atan2(mouseY - 0.5, mouseX - 0.75) * 180 / Math.PI
  orbs.value.orb3.offsetX = Math.cos(angle * Math.PI / 180) * 15
  orbs.value.orb3.offsetY = Math.sin(angle * Math.PI / 180) * 15
  orbs.value.orb3.scale = 1 + Math.sin(Date.now() * 0.001) * 0.1
  orbs.value.orb3.opacity = 0.1 + Math.abs(Math.sin(Date.now() * 0.002)) * 0.05
}

const updateParticlesPosition = (mouseX, mouseY) => {
  particles.value.forEach((particle, index) => {
    const particleX = particle.x / 100
    const particleY = particle.y / 100
    const distance = Math.sqrt(Math.pow(mouseX - particleX, 2) + Math.pow(mouseY - particleY, 2))
    
    // Only update particles within interaction range for performance
    if (distance < 0.3) {
      const force = (0.3 - distance) / 0.3
      particle.offsetX = (mouseX - particleX) * force * 20
      particle.offsetY = (mouseY - particleY) * force * 20
      particle.scale = 1 + force * 0.5
      particle.opacity = 0.3 + force * 0.4
    } else {
      // Smoothly return to original position
      particle.offsetX *= 0.95
      particle.offsetY *= 0.95
      particle.scale = 1 + (particle.scale - 1) * 0.95
      particle.opacity = 0.3 + (particle.opacity - 0.3) * 0.95
    }
  })
}

const onMouseEnter = () => {
  isHovering.value = true
}

const onMouseMove = throttledMouseMove

const onMouseLeave = () => {
  isHovering.value = false
  mouseFollower.value.opacity = 0
  
  // Reset background
  backgroundStyle.value = {}
  
  // Reset orbs to original positions
  Object.keys(orbs.value).forEach(key => {
    orbs.value[key].offsetX = 0
    orbs.value[key].offsetY = 0
    orbs.value[key].scale = 1
    orbs.value[key].opacity = 0.1
  })
  
  // Reset particles
  particles.value.forEach(particle => {
    particle.offsetX = 0
    particle.offsetY = 0
    particle.scale = 1
    particle.opacity = 0.3
  })
}

onMounted(() => {
  // Generate optimized particles with enhanced properties
  for (let i = 0; i < 30; i++) { // Reduced from 50 to 30 for better performance
    particles.value.push({
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 2 + Math.random() * 3,
      offsetX: 0,
      offsetY: 0,
      scale: 1,
      opacity: 0.3,
      size: Math.random() > 0.7 ? 'w-2 h-2' : 'w-1 h-1',
      color: ['bg-purple-500/30', 'bg-blue-500/30', 'bg-pink-500/30'][Math.floor(Math.random() * 3)]
    })
  }
})

onUnmounted(() => {
  // Clear timeout to prevent execution after component is destroyed
  if (mouseMoveTimeout) {
    clearTimeout(mouseMoveTimeout)
    mouseMoveTimeout = null
  }
})
</script>

<style scoped>
.hover-bg {
  pointer-events: auto;
}

.particle-hover {
  transition: transform 0.3s ease-out, opacity 0.3s ease-out;
  will-change: transform, opacity;
}

.particle-active {
  animation-play-state: paused;
}

.orb-hover {
  will-change: transform, opacity;
}

.grid-hover {
  will-change: opacity;
}

.grid-active {
  opacity: 0.2;
}

.grid-active .border-r {
  border-color: rgba(168, 85, 247, 0.3);
}

/* Performance optimizations */
.particle-hover,
.orb-hover,
.hover-bg {
  backface-visibility: hidden;
  perspective: 1000px;
}
</style>