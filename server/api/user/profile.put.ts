import jwt from 'jsonwebtoken'
import { prisma } from '~/lib/prisma'

export default defineEventHandler(async (event) => {
  try {
    // 验证请求方法
    if (getMethod(event) !== 'PUT') {
      throw createError({
        statusCode: 405,
        statusMessage: '方法不允许'
      })
    }

    // 从 cookie 获取 token
    const token = getCookie(event, 'auth-token')
    
    if (!token) {
      throw createError({
        statusCode: 401,
        statusMessage: '请先登录'
      })
    }

    // 验证 token
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key') as any
    
    // 获取请求体
    const body = await readBody(event)
    const { username, email, bio, avatar } = body

    // 验证必填字段
    if (!username || !email) {
      throw createError({
        statusCode: 400,
        statusMessage: '用户名和邮箱不能为空'
      })
    }

    // 验证邮箱格式
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      throw createError({
        statusCode: 400,
        statusMessage: '邮箱格式不正确'
      })
    }

    // 检查用户名和邮箱是否已被其他用户使用
    const existingUser = await prisma.user.findFirst({
      where: {
        AND: [
          {
            OR: [
              { username: username },
              { email: email }
            ]
          },
          {
            NOT: {
              id: decoded.userId
            }
          }
        ]
      }
    })

    if (existingUser) {
      if (existingUser.username === username) {
        throw createError({
          statusCode: 400,
          statusMessage: '用户名已被使用'
        })
      }
      if (existingUser.email === email) {
        throw createError({
          statusCode: 400,
          statusMessage: '邮箱已被使用'
        })
      }
    }

    // 更新用户信息
    const updatedUser = await prisma.user.update({
      where: {
        id: decoded.userId
      },
      data: {
        username,
        email,
        bio: bio || null,
        avatar: avatar || null,
        updatedAt: new Date()
      },
      select: {
        id: true,
        username: true,
        email: true,
        bio: true,
        avatar: true,
        createdAt: true,
        updatedAt: true
      }
    })

    return {
      success: true,
      message: '个人资料更新成功',
      user: updatedUser
    }

  } catch (error: any) {
    console.error('更新个人资料错误:', error)
    
    if (error.statusCode) {
      throw error
    }
    
    throw createError({
      statusCode: 500,
      statusMessage: '服务器内部错误'
    })
  }
}) 