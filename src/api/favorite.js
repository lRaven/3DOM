import axios from "axios";
import store from '@/store';
import cookie from 'vue-cookies';

const baseURL = process.env.VUE_APP_BACKEND_BASEURL;

//* получение списка квартир избранных юзером и передача в функцию выборки
async function getFavoriteApartmentNumber() {
	try {
		const response = await axios.get(`${baseURL}/academ/favorite/`, {
			headers: { Authorization: `token ${cookie.get('auth_token')}` }
		})
		if (response.status === 200) {
			let apartments = [];
			for (const key in response.data) {
				if (Object.hasOwnProperty.call(response.data, key)) {
					apartments[key] = response.data[key];
					apartments[key].favorite_id = apartments[key].id;
				}
			}
			getFavoriteApartments(apartments);
		}
	}
	catch (err) { throw new Error(err) }
}

//* получение всех данных о квартирах
async function getFavoriteApartments(favorites) {
	try {
		const response = await axios.get(`${baseURL}/academ/apartment/`, {
			headers: { Authorization: `token ${cookie.get('auth_token')}` }
		})

		if (response.status === 200) {
			for (let i = 0; i < response.data.length; i++) {
				for (let index = 0; index < favorites.length; index++) {
					if (response.data[i].id === favorites[index].apartment) {
						let favorite = favorites[index].favorite_id;
						favorites[index] = response.data[i];
						favorites[index].favorite_id = favorite;
					}
				}
			}
			store.commit('SET_FAVORITES', favorites);
		}
	}
	catch (err) { throw new Error(err) }
}

//* удаление из избранного
async function removeFavorite(id) {
	try {
		const response = await axios.delete(`${baseURL}/academ/favorite/${id}/`, {
			headers: { Authorization: `token ${cookie.get('auth_token')}` }
		})

		return response;
	}
	catch (err) { return err.response }
}

//* добавить в избранное
async function addFavorite(user, apartment) {
	try {
		const response = await axios.post(`${baseURL}/academ/favorite/`,
			{ user: user, apartment: apartment, },
			{ headers: { Authorization: `token ${cookie.get('auth_token')}` } },
		)

		return response;
	}
	catch (err) { return err.response }
}

export { getFavoriteApartmentNumber, getFavoriteApartments, removeFavorite, addFavorite }