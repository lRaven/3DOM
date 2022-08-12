import store from '@/store';
import axios from "axios";
import cookie from 'vue-cookies';

const baseURL = store.state.baseURL;


function fixClient(first_name, last_name, patronymic, tel, info, apartment) {
	axios.post(`${baseURL}/academ/client/`, {
		name: first_name,
		surname: last_name,
		patronymic: patronymic,
		phone_number: tel,
		info: info,
		apartment: apartment,
	}, {
		headers: { Authorization: `token ${cookie.get('auth_token')}` }
	}).then(response => {
		if (response.status === 201) {
			console.log(response.data);
			store.commit('SET_FIX_STATUS', 'success');
		}
	}).catch(err => {
		console.error(err);
		store.commit("SET_FIX_STATUS", 'failed');
	})


}

export { fixClient }