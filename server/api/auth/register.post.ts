import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { prisma } from '~/lib/prisma'

export default defineEventHandler(async (event) => {
  console.log('Register API called')
  
  try {
    const body = await readBody(event)
    const { username, email, password } = body

    console.log('Registration attempt for email:', email, 'username:', username)

    // 验证输入数据
    if (!username || !email || !password) {
      console.log('Missing required fields')
      throw createError({
        statusCode: 400,
        statusMessage: '请填写所有必需字段'
      })
    }

    // 验证邮箱格式
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      console.log('Invalid email format')
      throw createError({
        statusCode: 400,
        statusMessage: '邮箱格式不正确'
      })
    }

    // 验证密码长度
    if (password.length < 6) {
      console.log('Password too short')
      throw createError({
        statusCode: 400,
        statusMessage: '密码长度至少为6位'
      })
    }

    // 检查用户名是否已存在
    const existingUserByUsername = await prisma.user.findUnique({
      where: {
        username: username
      }
    })

    if (existingUserByUsername) {
      console.log('Username already exists')
      throw createError({
        statusCode: 409,
        statusMessage: '用户名已存在'
      })
    }

    // 检查邮箱是否已存在
    const existingUserByEmail = await prisma.user.findUnique({
      where: {
        email: email
      }
    })

    if (existingUserByEmail) {
      console.log('Email already exists')
      throw createError({
        statusCode: 409,
        statusMessage: '邮箱已被注册'
      })
    }

    // 加密密码
    const hashedPassword = await bcrypt.hash(password, 10)
    console.log('Password hashed successfully')

    // 创建新用户
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword
      }
    })

    console.log('User created successfully:', newUser.id)

    // 生成 JWT token
    const token = jwt.sign(
      { 
        userId: newUser.id, 
        email: newUser.email,
        username: newUser.username
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
      message: '注册成功',
      user: {
        id: newUser.id,
        username: newUser.username,
        email: newUser.email
      }
    }

  } catch (error: any) {
    console.error('Registration error:', error)
    
    if (error.statusCode) {
      throw error
    }
    
    throw createError({
      statusCode: 500,
      statusMessage: '服务器内部错误'
    })
  }
}) 