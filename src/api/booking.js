import axios from "axios";
import store from '../store';

import { getApartments } from './academ';

//* получение инфы по резервациям
function getBookingList() {
	//* id квартир
	let apartmentsId = [];

	//* список id резерваций
	let bookingsId = [];

	//* сроки резерваций
	let dates = [];

	axios.get(`${store.getters.BASEURL}/academ/reservation/`,
		{
			headers: { Authorization: `token ${store.getters.TOKEN}` },
		}
	).then(response => {
		if (response.status === 200) {
			for (let i = 0, j = 0; i < response.data.length; i++) {
				if (response.data[i].user == `${store.getters.USER.id}`) {
					apartmentsId[j] = response.data[i].apartment;
					bookingsId[j] = response.data[i].id;
					dates[j] = response.data[i].expiration_date.substring(0, 10);
					j++;
				}
			}
			apartmentsInfo(apartmentsId, bookingsId, dates);
		}
	}).catch(err => {
		console.error(err);
	});
}

//* получение всей инфы по зарезирвированным квартирам юзера
function apartmentsInfo(apartmentsId, bookingsId, dates) {
	let apartments = [];

	axios.get(`${store.getters.BASEURL}/academ/apartment/`,
		{
			headers: { Authorization: `token ${store.getters.TOKEN}` },
		}
	).then(response => {
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
	).catch(err => {
		console.error(err);
	});
}

//* отменить резервацию квартиры по id резервации
function removeReservation(id) {
	axios.delete(`${store.getters.BASEURL}/academ/reservation/${id}/`, {
		headers: { Authorization: `token ${store.getters.TOKEN}` }
	})
		.then(response => {
			if (response.status === 204) {
				console.log(`Бронирование под номером ${id} успешно отменено`);
				getBookingList();
			}
		})
		.catch(err => {
			console.error(err);
		})
}

function addReservation(user, apartment) {
	axios.post(`${store.getters.BASEURL}/academ/reservation/`, {
		user: user,
		apartment: apartment,
	}, { headers: { Authorization: `token ${store.getters.TOKEN}` } }).then(response => {
		if (response.status === 201) {
			getApartments();
		}
	})
}
export { getBookingList, apartmentsInfo, removeReservation, addReservation }