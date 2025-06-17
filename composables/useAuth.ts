interface User {
  id: string
  username: string
  email: string
  avatar?: string | null
  bio?: string | null
  createdAt: string
  updatedAt?: string
}

interface LoginForm {
  email: string
  password: string
}

interface RegisterForm {
  username: string
  email: string
  password: string
}

export const useAuth = () => {
  // 用户状态
  const user = useState<User | null>('auth.user', () => {
    // 初始化时从localStorage读取
    if (process.client) {
      const cached = localStorage.getItem('auth.user')
      if (cached) {
        try {
          return JSON.parse(cached)
        } catch (error) {
          console.warn('Failed to parse cached user data:', error)
          localStorage.removeItem('auth.user')
        }
      }
    }
    return null
  })

  // 更新用户信息并同步到localStorage
  const setUser = (userData: User | null) => {
    user.value = userData
    if (process.client) {
      if (userData) {
        localStorage.setItem('auth.user', JSON.stringify(userData))
      } else {
        localStorage.removeItem('auth.user')
      }
    }
  }

  // 登录函数
  const login = async (credentials: LoginForm) => {
    try {
      const data = await $fetch<{
        success: boolean
        message: string
        user: User
      }>('/api/auth/login', {
        method: 'POST',
        body: credentials
      })

      if (data.success) {
        setUser(data.user)
        return {
          success: true,
          message: data.message,
          user: data.user
        }
      }

      throw new Error(data.message || '登录失败')
    } catch (error: any) {
      console.error('登录错误:', error)
      throw new Error(error.data?.message || error.message || '登录失败')
    }
  }

  // 注册函数
  const register = async (userData: RegisterForm) => {
    try {
      const data = await $fetch<{
        success: boolean
        message: string
        user: User
      }>('/api/auth/register', {
        method: 'POST',
        body: userData
      })

      if (data.success) {
        setUser(data.user)
        return {
          success: true,
          message: data.message,
          user: data.user
        }
      }

      throw new Error(data.message || '注册失败')
    } catch (error: any) {
      console.error('注册错误:', error)
      throw new Error(error.data?.message || error.message || '注册失败')
    }
  }

  // 获取当前用户信息
  const fetchUser = async () => {
    try {
      const data = await $fetch<{
        success: boolean
        user: User
      }>('/api/auth/me')

      if (data.success) {
        setUser(data.user)
        return data.user
      }

      return null
    } catch (error: any) {
      console.error('获取用户信息错误:', error)
      setUser(null)
      return null
    }
  }

  // 登出函数
  const logout = async () => {
    try {
      await $fetch('/api/auth/logout', {
        method: 'POST'
      })
    } catch (error) {
      console.error('登出错误:', error)
    } finally {
      setUser(null)
      await navigateTo('/')
    }
  }

  // 检查是否已登录
  const isLoggedIn = computed(() => {
    return !!user.value
  })

  // 初始化认证状态
  const initAuth = async () => {
    if (process.client && !user.value) {
      await fetchUser()
    }
  }

  return {
    // 状态
    user: readonly(user),
    isLoggedIn,
    
    // 方法
    login,
    register,
    logout,
    fetchUser,
    initAuth,
    setUser
  }
} 