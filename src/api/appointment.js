import axios from "axios";
import store from '@/store';
import cookie from 'vue-cookies';

const baseURL = store.state.baseURL;

async function postAppointment(data) {
	try {
		const response = await axios.post(`${baseURL}/academ/appointment/`,
			{ ...data },
			{ headers: { Authorization: `token ${cookie.get('auth_token')}` } })

		return response;
		// if (response.status === 201) {
		// 	console.log(`Запись на встречу успешно создана`);
		// }
	}
	catch (err) { return err.response }
}

export { postAppointment }