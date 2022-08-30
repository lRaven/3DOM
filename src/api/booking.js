import axios from "axios";
import store from '@/store';
import cookie from 'vue-cookies';

const baseURL = process.env.VUE_APP_BACKEND_BASEURL;

import { getApartments } from '@/api/academ';

//* получение инфы по резервациям
async function getBookingList() {
	try {
		const response = await axios.get(`${baseURL}/academ/reservation/`,
			{
				headers: { Authorization: `token ${cookie.get('auth_token')}` },
			}
		)

		if (response.status === 200) {
			try {
				const responseApartments = await apartmentsInfo(response.data);

				if (responseApartments.status === 200) {
					return true;
				}
			}
			catch (err) { throw new Error(err) }
		}
	}
	catch (err) { throw new Error(err) }
}

//* получение всей инфы по зарезирвированным квартирам юзера
async function apartmentsInfo(bookingApartments) {
	try {
		const response = await axios.get(`${baseURL}/academ/apartment/`,
			{ headers: { Authorization: `token ${cookie.get('auth_token')}` }, })

		if (response.status === 200) {
			const apartments = response.data.reduce((acc, cur) => {
				//* получить забронированную квартиру которая равна квартире из общего списка 
				const findedBooking = bookingApartments.find(apartment => {
					return apartment.apartment === cur.id
				})

				if (findedBooking) {
					//* если есть совпадение, то впихнуть все данные квартиры к bookingApartment 
					for (const key in findedBooking) {
						if (Object.hasOwnProperty.call(findedBooking, key)) {
							if (key !== 'id' && key !== 'apartment') {
								cur[key] = findedBooking[key]
							}
							else if (key === 'id') {
								cur.booking_id = findedBooking[key]
							}
						}
					}

					acc.push(cur);
				}

				return acc
			}, [])

			store.commit('SET_BOOKING', apartments);
		}

		return response;
	}
	catch (err) { throw new Error(err) }
}

//* отменить резервацию квартиры по id резервации
async function removeReservation(id) {
	try {
		const response = await axios.delete(`${baseURL}/academ/reservation/${id}/`, {
			headers: { Authorization: `token ${cookie.get('auth_token')}` }
		})

		// if (response.status === 204) {
		// 	console.log(`Бронирование под номером ${id} успешно отменено`);
		// 	getBookingList();
		// }
		return response;
	}
	catch (err) { return err.response }
}

async function addReservation(user, apartment) {
	try {
		const response = await axios.post(`${baseURL}/academ/reservation/`,
			{ user: user, apartment: apartment, },
			{ headers: { Authorization: `token ${cookie.get('auth_token')}` } })

		if (response.status === 201) {
			getApartments();
		}
	}
	catch (err) { throw new Error(err) }
}

export { getBookingList, apartmentsInfo, removeReservation, addReservation }