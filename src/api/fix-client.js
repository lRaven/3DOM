import store from '@/store';
import axios from "axios";
import cookie from 'vue-cookies';

const baseURL = process.env.VUE_APP_BACKEND_BASEURL;

async function fixClient(first_name, last_name, patronymic, tel, info, apartment) {
	try {
		const response = await axios.post(`${baseURL}/academ/client/`,
			{
				name: first_name,
				surname: last_name,
				patronymic: patronymic,
				phone_number: tel,
				info: info,
				apartment: apartment,
			},
			{ headers: { Authorization: `token ${cookie.get('auth_token')}` } })

		if (response.status === 201) {
			store.commit('SET_FIX_STATUS', 'success');
		}
	}
	catch (err) {
		store.commit("SET_FIX_STATUS", 'failed');
		throw new Error(err)
	}
}

export { fixClient }