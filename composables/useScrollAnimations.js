export const useScrollAnimations = () => {
  const initScrollAnimations = () => {
    // Intersection Observer for scroll-triggered animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed')
          
          // Add staggered animation for child elements
          const children = entry.target.querySelectorAll('.stagger-child')
          children.forEach((child, index) => {
            setTimeout(() => {
              child.classList.add('revealed')
            }, index * 100)
          })
        }
      })
    }, observerOptions)

    // Observe all elements with scroll-reveal classes
    const revealElements = document.querySelectorAll('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale')
    revealElements.forEach(el => observer.observe(el))

    return observer
  }

  const initParallaxEffects = () => {
    let ticking = false

    const updateParallax = () => {
      const scrolled = window.pageYOffset
      const parallaxElements = document.querySelectorAll('.parallax-slow, .parallax-medium, .parallax-fast')
      
      parallaxElements.forEach(element => {
        const speed = element.classList.contains('parallax-slow') ? 0.2 : 
                     element.classList.contains('parallax-medium') ? 0.5 : 0.8
        const yPos = -(scrolled * speed)
        element.style.transform = `translateY(${yPos}px)`
      })
      
      ticking = false
    }

    const requestTick = () => {
      if (!ticking) {
        requestAnimationFrame(updateParallax)
        ticking = true
      }
    }

    window.addEventListener('scroll', requestTick, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', requestTick)
    }
  }

  const initSmoothScrolling = () => {
    // Enhanced smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault()
        const target = document.querySelector(this.getAttribute('href'))
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
        }
      })
    })
  }

  const initHoverEffects = () => {
    // Enhanced hover effects for interactive elements
    const hoverElements = document.querySelectorAll('.hover-lift')
    
    hoverElements.forEach(element => {
      element.addEventListener('mouseenter', () => {
        element.style.transform = 'translateY(-8px) scale(1.02)'
      })
      
      element.addEventListener('mouseleave', () => {
        element.style.transform = 'translateY(0) scale(1)'
      })
    })
  }

  const initScrollProgress = () => {
    // Create scroll progress indicator
    const progressBar = document.createElement('div')
    progressBar.className = 'fixed top-0 left-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500 z-50 transition-all duration-300'
    progressBar.style.width = '0%'
    document.body.appendChild(progressBar)

    const updateProgress = () => {
      const scrollTop = document.documentElement.scrollTop
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrollPercent = (scrollTop / scrollHeight) * 100
      progressBar.style.width = scrollPercent + '%'
    }

    window.addEventListener('scroll', updateProgress, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', updateProgress)
      progressBar.remove()
    }
  }

  return {
    initScrollAnimations,
    initParallaxEffects,
    initSmoothScrolling,
    initHoverEffects,
    initScrollProgress
  }
}