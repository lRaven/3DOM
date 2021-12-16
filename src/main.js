import { createApp } from 'vue'
import store from './store'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'
import axios from 'axios'


createApp(App).use(router, store, Vuex, axios).mount('#app')