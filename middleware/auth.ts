export default defineNuxtRouteMiddleware((to) => {
  const { isLoggedIn } = useAuth()
  
  // 如果用户未登录，重定向到登录页面
  if (!isLoggedIn.value) {
    return navigateTo('/login')
  }
}) 