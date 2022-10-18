import { createApp } from 'vue'
import App from '@/App'
import store from '@/store'
import router from '@/router'
import '@/registerServiceWorker'

import Toast, { POSITION } from "vue-toastification"
import "vue-toastification/dist/index.css"
import VueCookies from 'vue-cookies'

import components from '@/components/UI'

const app = createApp(App)

for (const key in components) {
	if (Object.hasOwnProperty.call(components, key)) {
		app.component(key, components[key]);
	}
}

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
