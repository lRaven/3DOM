import { createApp } from 'vue'
import App from '@/App'
import store from '@/store'
import router from '@/router'
import 'animate.css'
import VueCookies from 'vue-cookies'

const app = createApp(App)

app.use(router)
app.use(store)
app.use(VueCookies)
app.mount('#app')
