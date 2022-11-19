import { qiankunWindow, renderWithQiankun } from 'vite-plugin-qiankun/dist/helper'
import { createApp, App as AppInstance } from 'vue'
import App from './App.vue'
import { routeFun } from './router'
import { Router } from 'vue-router'

let app: AppInstance | null = null
let router: Router | null = null

function render() {
  renderWithQiankun({
    bootstrap: () => {
      console.log('bootstrap')
    },
    mount: (props: Record<string, any>) => {
      app = createApp(App)
      router = routeFun(`${props.name}`)
      app.use(router).mount(props.container.querySelector(`#${props.name}`))
      console.log('mount')
    },
    unmount: () => {
      app?.unmount()
      app = null
      router = null
      console.log('unmount')
    },
    update: () => {
      console.log('update')
    }
  })
}

if (qiankunWindow.__POWERED_BY_QIANKUN__) {
  render()
  console.log(qiankunWindow.__INJECTED_PUBLIC_PATH_BY_QIANKUN__, '如果子应用被使用则在这里')
}
