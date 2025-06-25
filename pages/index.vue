<template>
  <div>
    <!-- Background Effects -->
    <BackgroundEffects />
    
    <!-- Navigation -->
    <Navigation />
    
    <!-- Hero Section -->
    <HeroSection />
    
    <!-- Features Section -->
    <FeaturesSection />
    
    <!-- Demo Section -->
    <DemoSection />
    
    <!-- Stats Section -->
    <StatsSection />
    
    <!-- CTA Section -->
    <CTASection />
    
    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import { useScrollAnimations } from '~/composables/useScrollAnimations'

useHead({
  title: 'WebAI - AI Software Engineer',
  meta: [
    { name: 'description', content: 'Meet WebAI, the first AI software engineer that can build entire apps, debug code, and deploy systems end-to-end.' }
  ]
})

onMounted(() => {
  const { 
    initScrollAnimations, 
    initParallaxEffects, 
    initSmoothScrolling, 
    initHoverEffects,
    initScrollProgress 
  } = useScrollAnimations()
  
  // Initialize all scroll animations with a slight delay to ensure DOM is ready
  nextTick(() => {
    const observer = initScrollAnimations()
    const cleanupParallax = initParallaxEffects()
    const cleanupProgress = initScrollProgress()
    
    initSmoothScrolling()
    initHoverEffects()
    
    // Cleanup on unmount
    onUnmounted(() => {
      observer.disconnect()
      cleanupParallax()
      cleanupProgress()
    })
  })
})
</script>