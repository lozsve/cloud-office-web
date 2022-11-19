import { createApp, App as AppInstance } from 'vue'
import App from './App.vue'
import { router } from './router'

const app: AppInstance = createApp(App)
app.use(router).mount('#mainApp')
