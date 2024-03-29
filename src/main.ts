import './assets/main.css'

import { createApp } from 'vue'
import registerCustomElements from './components'
import App from './App.vue'

registerCustomElements()

createApp(App).mount('#app')
