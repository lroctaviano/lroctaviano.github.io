import './assets/main.css'
import '../node_modules/@mdi/font/css/materialdesignicons.css'
import '../node_modules/devicon/devicon.min.css'


import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
