import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { prisma } from '~/lib/prisma'

export default defineEventHandler(async (event) => {
  console.log('Login API called')
  
  try {
    const body = await readBody(event)
    const { email, password } = body

    console.log('Login attempt for email:', email)

    if (!email || !password) {
      console.log('Missing email or password')
      throw createError({
        statusCode: 400,
        statusMessage: '请提供邮箱和密码'
      })
    }

    // 查找用户
    const user = await prisma.user.findUnique({
      where: {
        email: email
      }
    })

    console.log('User found:', user ? 'Yes' : 'No')

    if (!user) {
      console.log('User not found')
      throw createError({
        statusCode: 401,
        statusMessage: '邮箱或密码错误'
      })
    }

    // 验证密码
    const isPasswordValid = await bcrypt.compare(password, user.password)
    console.log('Password valid:', isPasswordValid)

    if (!isPasswordValid) {
      console.log('Invalid password')
      throw createError({
        statusCode: 401,
        statusMessage: '邮箱或密码错误'
      })
    }

    // 生成 JWT token
    const token = jwt.sign(
      { 
        userId: user.id, 
        email: user.email,
        username: user.username
      },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '7d' }
    )

    console.log('JWT token generated successfully')

    // 设置 httpOnly cookie
    setCookie(event, 'auth-token', token, {
      httpOnly: true,
      secure: false, // 开发环境设为 false
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7 // 7天
    })

    console.log('Cookie set successfully')

    return {
      success: true,
      message: '登录成功',
      user: {
        id: user.id,
        email: user.email,
        username: user.username
      }
    }
  } catch (error: any) {
    console.error('Login error:', error)
    
    if (error.statusCode) {
      throw error
    }
    
    throw createError({
      statusCode: 500,
      statusMessage: '服务器内部错误'
    })
  }
}) 