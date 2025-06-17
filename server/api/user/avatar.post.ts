import jwt from 'jsonwebtoken'
import { prisma } from '~/lib/prisma'

export default defineEventHandler(async (event) => {
  try {
    // 验证请求方法
    if (getMethod(event) !== 'POST') {
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
    
    // 获取请求体中的base64数据
    const body = await readBody(event)
    const { avatar } = body
    
    if (!avatar) {
      throw createError({
        statusCode: 400,
        statusMessage: '请提供头像数据'
      })
    }

    // 验证是否为有效的base64图片数据
    const base64Regex = /^data:image\/(jpeg|jpg|png|gif|webp);base64,/
    if (!base64Regex.test(avatar)) {
      throw createError({
        statusCode: 400,
        statusMessage: '头像格式不正确，只支持 JPEG、PNG、GIF、WebP 格式的图片'
      })
    }

    // 提取base64数据部分（去掉data:image/...;base64,前缀）
    const base64Data = avatar.split(',')[1]
    
    // 验证base64数据是否有效
    if (!base64Data) {
      throw createError({
        statusCode: 400,
        statusMessage: '头像数据无效'
      })
    }

    // 计算图片大小（base64编码后的大小约为原文件的4/3）
    const sizeInBytes = (base64Data.length * 3) / 4
    const maxSize = 5 * 1024 * 1024 // 5MB

    if (sizeInBytes > maxSize) {
      throw createError({
        statusCode: 400,
        statusMessage: '图片大小不能超过 5MB'
      })
    }

    // 更新用户头像信息
    const updatedUser = await prisma.user.update({
      where: {
        id: decoded.userId
      },
      data: {
        avatar: avatar, // 直接存储完整的base64数据URL
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
      message: '头像上传成功',
      user: updatedUser
    }

  } catch (error: any) {
    console.error('上传头像错误:', error)
    
    if (error.statusCode) {
      throw error
    }
    
    throw createError({
      statusCode: 500,
      statusMessage: '服务器内部错误'
    })
  }
}) 