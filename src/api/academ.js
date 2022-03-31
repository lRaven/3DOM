import axios from "axios";
import store from '../store';

async function getApartments() {
	await axios.get(`${store.getters.BASEURL}/academ/apartment/`, {})
		.then(response => {
			if (response.status === 200) {
				sortApartments(response.data, 'SET_APARTMENTS');
			}
		}).catch(err => {
			console.error(err);
		})
}

async function getApartmentsOnTheFloor(floor) {
	try {
		//* получение всех квартир 4 этажа
		const response = await axios.get(`${store.getters.BASEURL}/academ/apartment`);

		let apartments = [];
		let single_room = [];
		let two_room = [];
		let three_room = [];

		response.data.forEach(element => {
			if (element.floor === floor) {
				apartments.push(element);

				if (element.type === 1 || element.type === 5) {
					single_room.push(element);
				} else if (element.type === 2) {
					two_room.push(element);
				} else if (element.type === 3) {
					three_room.push(element);
				}
			}
		});

		sortApartments(single_room, 'SET_SINGLE_ROOM');
		sortApartments(two_room, 'SET_TWO_ROOM');
		sortApartments(three_room, 'SET_THREE_ROOM');
		sortApartments(apartments, 'SET_APARTMENTS_ON_FLOOR');
	} catch {
		e => {
			console.error(e);
		}
	}

}

async function sortApartments(array, place) {
	for (let index = 0; index < array.length - 1; index++) {
		for (let i = 0; i < array.length - 1; i++) {
			if (array[i].number > array[i + 1].number) {
				let item = array[i];
				array[i] = array[i + 1];
				array[i + 1] = item;
			}
		}
	}
	store.commit(place, array);
}

export { getApartments, getApartmentsOnTheFloor, sortApartments }