import { createStore } from 'vuex'
import User from './modules/user'

export default createStore({
	modules: {
		ser: User,
	}
});