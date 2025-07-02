import { PrismaClient } from '@prisma/client'

declare global {
  var __prisma: PrismaClient | undefined
}

// 简化的 Prisma 客户端配置，避免 ES 模块问题
const prismaClient = new PrismaClient({
  log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
})

export const prisma = globalThis.__prisma ?? prismaClient

if (process.env.NODE_ENV !== 'production') {
  globalThis.__prisma = prisma
}

// 确保在应用关闭时断开连接
if (typeof process !== 'undefined') {
  process.on('beforeExit', async () => {
    await prisma.$disconnect()
  })
} 