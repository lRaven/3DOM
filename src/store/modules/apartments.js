import axios from 'axios';

const state = () => ({
	apartments: [],
})

const getters = {
	APARTMENTS: state => {
		return state.apartments;
	},
}

const mutations = {
	SET_APARTMENTS(state, payload) {
		state.apartments = payload;
	},
}

const actions = {
	SET_APARTMENTS: async (context) => {
		await axios.get('http://localhost:8001/academ/apartment/', {
			headers: { Authorization: `token ${context.getters.TOKEN}` }
		}).then(response => {
			if (response.status === 200) {
				//*получение свободных квартир
				let arr = response.data.filter(function (number) {
					if (!number.reserved) {
						return number;
					}
				})

				//* сортировка по номеру квартиры
				for (let i = 0; i < arr.length - 1; i++) {
					for (let j = 0; j < arr.length - 1; j++) {
						if (arr[j].number > arr[j + 1].number) {
							let variable = arr[j];
							arr[j] = arr[j + 1];
							arr[j + 1] = variable
						}
					}
				}
				context.commit("SET_APARTMENTS", arr);
			}
		}).catch(err => {
			console.error(err);
		})
	}
}

export default {
	state,
	getters,
	mutations,
	actions
}