import { registerMicroApps, start, addGlobalUncaughtErrorHandler } from 'qiankun'
import { microApp } from './app'

// 注册微应用
registerMicroApps(microApp as arrayType, {
  beforeLoad: (app: { name: string }) => {
    console.log('[qiankun] before load', app.name)
    return Promise.resolve()
  },
  beforeMount: (app: { name: string }) => {
    console.log('[qiankun] before mount', app.name)
    return Promise.resolve()
  },
  afterUnmount: (app: { name: string }) => {
    console.log('[qiankun] after unmount', app.name)
    return Promise.resolve()
  }
})

// 添加全局的未捕获异常处理器
addGlobalUncaughtErrorHandler((event: any) => {
  console.error(event)
  console.error('[qiankun] 微应用加载失败，请检查应用是否可运行')
})

// 启动 qiankun
export const startQinakun = () => {
  start({ prefetch: true, sandbox: { experimentalStyleIsolation: true } })
}
