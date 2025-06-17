export default defineEventHandler(async (event) => {
  try {
    // 清除 auth-token cookie
    setCookie(event, 'auth-token', '', {
      httpOnly: true,
      secure: false,
      sameSite: 'lax',
      maxAge: 0 // 立即过期
    })

    return {
      success: true,
      message: '登出成功'
    }
  } catch (error: any) {
    console.error('Logout error:', error)
    
    throw createError({
      statusCode: 500,
      statusMessage: '服务器内部错误'
    })
  }
}) 