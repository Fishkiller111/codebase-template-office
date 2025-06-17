export default defineNuxtPlugin(async () => {
  try {
    const { initAuth } = useAuth()
    
    // 在客户端初始化认证状态
    await initAuth()
  } catch (error) {
    console.warn('Auth initialization failed:', error)
  }
}) 