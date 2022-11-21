import { createApp, App as AppInstance } from 'vue'
import App from './App.vue'
import { router } from './router'
import { createPinia } from 'pinia'
import persistedstate from 'pinia-plugin-persistedstate'

const app: AppInstance = createApp(App)
app.use(router).use(createPinia().use(persistedstate)).mount('#mainApp')
