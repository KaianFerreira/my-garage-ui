import './assets/scss/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// global components
import ButtonComponent from './components/elements/ButtonComponent.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)

// using global components

app.component('k-btn', ButtonComponent)

app.mount('#app')
