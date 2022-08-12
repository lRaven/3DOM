import axios from "axios";
import store from '@/store';
import cookie from 'vue-cookies';

const baseURL = store.state.baseURL;

async function postAppointment(client, tel, date, time, building, apartment) {
	try {
		const response = axios.post(`${baseURL}/academ/appointment/`, {
			client: client,
			phone_number: tel,
			date: date,
			time: time,
			manager: 1,
			building: building,
			apartment: apartment,
		}, {
			headers: { Authorization: `token ${cookie.get('auth_token')}` }
		})
		if (response.status === 201) {
			console.log(`Запись на встречу успешно создана`);
		}
	}
	catch (err) { throw new Error(err) }
}

export { postAppointment }