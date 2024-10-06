import { createProdMockServer } from 'vite-plugin-mock/dist/client'
console.log('加载mock文件')
const modules = import.meta.glob('./**/*.mock.ts', {
  import: 'default',
  eager: true
})

const mockModules: any[] = []
Object.keys(modules).forEach(async (key) => {
  if (key.includes('_')) {
    return
  }
  mockModules.push(...(modules[key] as any))
})
export async function setupProdMockServer() {
  console.log('开启mockjs')
  await createProdMockServer(mockModules)
}
