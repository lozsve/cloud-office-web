// 获取 .env 文件里定义的环境变量
const env = import.meta.env as ImportMetaEnv

// 开发环境地址（需要配置子应用设定的端口号）
// 线上环境地址（基座应用和子应用部署在同一个域名下，使用 location.origin 进行补全）
const getLocation = (port: string, base: string) => {
  if (env.MODE == 'development') {
    return `http://localhost:${port}/`
  } else if (env.MODE == 'production') {
    return `${window.location.origin}${base}`
  }
}

// 导出子应用配置
const appList: arrayType = [
  { name: 'AM', id: '#iframeApp' },
  { name: 'MO', id: '#iframeApp' },
  { name: 'PS', id: '#windowApp' },
  { name: 'PD', id: '#iframeApp' }
]
export const microApp: arrayType = appList.map((item: objectType) => ({
  name: env[`VITE_APP_${item.name}_NAME`],
  entry: getLocation(env[`VITE_APP_${item.name}_PORT`], env[`VITE_APP_${item.name}_BASE`]),
  container: item.id,
  activeRule: '/' + env[`VITE_APP_${item.name}_NAME`]
}))
