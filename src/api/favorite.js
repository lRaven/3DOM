import axios from "axios";
import store from '../store';


//* получение списка квартир избранных юзером и передача в функцию выборки
function getFavoriteApartmentNumber() {
	axios.get('http://localhost:8001/academ/favorite/', {
		headers: { Authorization: `token ${store.getters.TOKEN}` }
	})
		.then(response => {
			let apartments = [];
			for (const key in response.data) {
				if (Object.hasOwnProperty.call(response.data, key)) {
					apartments[key] = response.data[key];
					apartments[key].favorite = apartments[key].id;
					delete apartments[key].id;
				}
			}
			getFavoriteApartments(apartments);
		})
		.catch(err => {
			console.log(err);
		});
}

//* получение всех данных о квартирах
function getFavoriteApartments(favorites) {
	axios.get('http://localhost:8001/academ/apartment/', {
		headers: { Authorization: `token ${store.getters.TOKEN}` }
	})
		.then(response => {
			for (let i = 0; i < response.data.length; i++) {
				for (let index = 0; index < favorites.length; index++) {
					if (response.data[i].id == favorites[index].apartment) {
						let favorite = favorites[index].favorite;
						favorites[index] = response.data[i];
						favorites[index].favorite = favorite;
					}
				}
			}
			store.commit('SET_FAVORITES', favorites);
			sortFavoriteList();
		})
		.catch(err => {
			console.log(err);
		});
}

//* удаление из избранного
function removeFavorite(id) {
	axios.delete(`http://localhost:8001/academ/favorite/${id}/`, {
		headers: { Authorization: `token ${store.getters.TOKEN}` }
	})
		.then(response => {
			if (response.status === 204) {
				console.log(`Квартира под номером ${id} удалена из Избранного`);
				getFavoriteApartmentNumber();
			}
		})
		.catch(err => {
			console.log(err);
		});
}

//*сортировка по-возрастанию (по цене или по площади)
function sortFavoriteList(way = store.getters.SORT) {
	let favoriteList = store.getters.FAVORITES;
	switch (way) {
		//* сортировка по цене (по-возрастанию)
		case 'price': {
			for (let index = 0; index < favoriteList.length - 1; index++) {
				for (let i = 0; i < favoriteList.length - 1; i++) {
					if (favoriteList[i].cost > favoriteList[i + 1].cost) {
						let item = favoriteList[i];
						favoriteList[i] = favoriteList[i + 1];
						favoriteList[i + 1] = item;
					}
				}
			}
			break;
		}

		//* сортировка по площади (по-возрастанию)
		case 'area': {
			for (let index = 0; index < favoriteList.length - 1; index++) {
				for (let i = 0; i < favoriteList.length - 1; i++) {
					if (favoriteList[i].area > favoriteList[i + 1].area) {
						let item = favoriteList[i];
						favoriteList[i] = favoriteList[i + 1];
						favoriteList[i + 1] = item;
					}
				}
			}
			break;
		}
		default: {
			break;
		}
	}
}

export { getFavoriteApartmentNumber, getFavoriteApartments, removeFavorite, sortFavoriteList }