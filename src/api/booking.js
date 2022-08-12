import axios from "axios";
import store from '@/store';
import cookie from 'vue-cookies';

const baseURL = store.state.baseURL;

import { getApartments } from '@/api/academ';

//* получение инфы по резервациям
async function getBookingList() {
	try {
		const response = axios.get(`${baseURL}/academ/reservation/`,
			{
				headers: { Authorization: `token ${cookie.get('auth_token')}` },
			}
		)

		if (response.status === 200) {
			//* id квартир
			let apartmentsId = [];

			//* список id резерваций
			let bookingsId = [];

			//* сроки резерваций
			let dates = [];

			for (let i = 0, j = 0; i < response.data.length; i++) {
				if (response.data[i].user == `${store.state.cabinet.user.id}`) {
					apartmentsId[j] = response.data[i].apartment;
					bookingsId[j] = response.data[i].id;
					dates[j] = response.data[i].expiration_date.substring(0, 10);
					j++;
				}
			}
			apartmentsInfo(apartmentsId, bookingsId, dates);
		}
	}
	catch (err) { throw new Error(err) }
}

//* получение всей инфы по зарезирвированным квартирам юзера
async function apartmentsInfo(apartmentsId, bookingsId, dates) {
	try {
		const response = axios.get(`${baseURL}/academ/apartment/`,
			{ headers: { Authorization: `token ${cookie.get('auth_token')}` }, })

		if (response.status === 200) {
			let apartments = [];

			response.data.forEach(element => {
				for (let i = 0; i < apartmentsId.length; i++) {
					if (element.id == apartmentsId[i]) {
						apartments[i] = element;
						apartments[i].expiration_date = dates[i];
						apartments[i].booking_id = bookingsId[i];
					}
				}
			});
			store.commit('SET_BOOKING', apartments);
		}
	}
	catch (err) { throw new Error(err) }
}

//* отменить резервацию квартиры по id резервации
async function removeReservation(id) {
	try {
		const response = axios.delete(`${baseURL}/academ/reservation/${id}/`, {
			headers: { Authorization: `token ${cookie.get('auth_token')}` }
		})

		if (response.status === 204) {
			console.log(`Бронирование под номером ${id} успешно отменено`);
			getBookingList();
		}
	}
	catch (err) { throw new Error(err) }
}

async function addReservation(user, apartment) {
	try {
		const response = axios.post(`${baseURL}/academ/reservation/`,
			{ user: user, apartment: apartment, },
			{ headers: { Authorization: `token ${cookie.get('auth_token')}` } })

		if (response.status === 201) {
			getApartments();
		}
	}
	catch (err) { throw new Error(err) }
}
export { getBookingList, apartmentsInfo, removeReservation, addReservation }