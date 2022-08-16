import { createApp } from 'vue'
import App from '@/App'
import store from '@/store'
import router from '@/router'
import 'animate.css'
import Toast, { POSITION } from "vue-toastification"
import "vue-toastification/dist/index.css"
import VueCookies from 'vue-cookies'

const app = createApp(App)

app.use(router)
app.use(store)
app.use(VueCookies)
app.use(Toast,
	{
		position: POSITION.BOTTOM_RIGHT,
		newestOnTop: false,
	}
)

app.mount('#app')
