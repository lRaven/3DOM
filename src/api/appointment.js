import axios from "axios";
import store from '../store';

function postAppointment(client, tel, date, time, building, apartment) {
	axios.post('http://localhost:8001/academ/appointment/', {
		client: client,
		phone_number: tel,
		date: date,
		time: time,
		manager: 1,
		building: building,
		apartment: apartment,
	}, {
		headers: { Authorization: `token ${store.getters.TOKEN}` }
	}).then(response => {
		if (response.status === 201) {
			console.log(`Запись на встречу успешно создана`);
		}
	}).catch(err => {
		console.error(err);
	})
}

export { postAppointment }