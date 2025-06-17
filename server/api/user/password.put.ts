import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
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
    const { currentPassword, newPassword } = body

    // 验证必填字段
    if (!currentPassword || !newPassword) {
      throw createError({
        statusCode: 400,
        statusMessage: '当前密码和新密码不能为空'
      })
    }

    // 验证新密码长度
    if (newPassword.length < 6) {
      throw createError({
        statusCode: 400,
        statusMessage: '新密码长度至少6位'
      })
    }

    // 获取用户当前信息
    const user = await prisma.user.findUnique({
      where: {
        id: decoded.userId
      }
    })

    if (!user) {
      throw createError({
        statusCode: 404,
        statusMessage: '用户不存在'
      })
    }

    // 验证当前密码
    const isCurrentPasswordValid = await bcrypt.compare(currentPassword, user.password)
    if (!isCurrentPasswordValid) {
      throw createError({
        statusCode: 400,
        statusMessage: '当前密码不正确'
      })
    }

    // 检查新密码是否与当前密码相同
    const isSamePassword = await bcrypt.compare(newPassword, user.password)
    if (isSamePassword) {
      throw createError({
        statusCode: 400,
        statusMessage: '新密码不能与当前密码相同'
      })
    }

    // 加密新密码
    const hashedNewPassword = await bcrypt.hash(newPassword, 12)

    // 更新密码
    await prisma.user.update({
      where: {
        id: decoded.userId
      },
      data: {
        password: hashedNewPassword,
        updatedAt: new Date()
      }
    })

    return {
      success: true,
      message: '密码修改成功'
    }

  } catch (error: any) {
    console.error('修改密码错误:', error)
    
    if (error.statusCode) {
      throw error
    }
    
    throw createError({
      statusCode: 500,
      statusMessage: '服务器内部错误'
    })
  }
}) 