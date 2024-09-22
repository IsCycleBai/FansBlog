import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { useI18n } from 'vue-i18n'

import App from './App.vue'
import router from './router'
import i18n from './i18n'

import '@/assets/tailwind.css'

const app = createApp(App)
app.config.globalProperties.$t = useI18n().t

app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app')
