import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { pinia } from './store'
import lazy from './directives/lazy'

const app = createApp(App)

app.use(router)
app.use(pinia)
app.directive('lazy', lazy)

app.mount('#app')
