import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuex from 'vuex'
import axios from 'axios'


createApp(App).use(router, store, Vuex, axios).mount('#app')