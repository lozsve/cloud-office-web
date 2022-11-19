import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
// import vitePluginEslint from 'vite-plugin-eslint'
import unpluginAutoImport from 'unplugin-auto-import/vite'
import unpluginElementPlus from 'unplugin-element-plus/vite'
import unpluginComponents from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  base: '/', // 配置路径
  resolve: {
    alias: { // 配置别名
      '@': resolve(__dirname, 'src'),
      '@resource': resolve(__dirname, '../public-resource')
    },
    extensions: [ '.js', '.jsx', '.ts', '.tsx', '.vue', '.json' ]
  },
  css: {
    preprocessorOptions: {
      scss: { // 引入全局变量
        additionalData: '@use \'../public-resource/css/variable.scss\' as *;'
      }
    }
  },
  envPrefix: 'VITE_APP_', // 环境变量配置开头关键字
  server: {
    host: '0.0.0.0', // 默认是 localhost
    port: 8000, // 默认是 5173 端口
    strictPort: true, // 设为 true 时若端口已被占用则会直接退出，而不是尝试下一个可用端口
    https: false, // 是否开启 https
    open: true, // 浏览器自动打开，设为字符串时，会被用作 URL 的路径名
    proxy: {}, // 本地开发环境通过代理实现跨域，生产环境使用 nginx 转发
    cors: true // 为开发服务器配置 CORS，默认启用并允许任何源
  },
  build: {
    outDir: 'dist', // 打包构建输出路径，默认 dist，如果路径存在，构建之前会被删除
    cssCodeSplit: true, // 启用代码拆分，如果禁用，整个项目中的所有 CSS 将被提取到一个 CSS 文件中
    sourcemap: false, // 构建后是否生成 source map 文件，禁用加快构建速度
    minify: 'terser', // 混淆器，terser 构建后文件体积更小；默认为 esbuild，比 terser 快 20-40 倍，压缩率只差 1%-2%
    terserOptions: {
      compress: { // 生产环境移除
        'drop_console': true,
        'drop_debugger': true
      }
    }
  },
  plugins: [
    vue(), // 挂载 vue
    // vitePluginEslint({
    //   cache: false // 禁用 eslint 缓存
    // }),
    unpluginAutoImport({ // 自动导入
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/ // .vue
      ],
      eslintrc: {
        enabled: true,
        filepath: '.eslintrc-auto-import.json',
        globalsPropValue: true
      },
      resolvers: [ ElementPlusResolver() ],
      imports: [ 'vue', 'vue-router' ],
      dts: 'src/types/auto-imports.d.ts'
    }),
    unpluginComponents({ // 自动注册
      resolvers: [ ElementPlusResolver() ],
      dts: 'src/types/components.d.ts'
    }),
    unpluginElementPlus() // 按需导入组件库样式
  ]
})
