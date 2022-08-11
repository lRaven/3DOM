import axios from "axios";
import store from '@/store';

async function getApartments() {
	await axios.get(`${store.getters.BASEURL}/academ/apartment/`, {})
		.then(response => {
			if (response.status === 200) {
				sortApartments(response.data, 'SET_APARTMENTS');
			}
		}).catch(err => { throw new Error(err) })
}

async function getApartmentsOnTheFloor(floor) {
	try {
		const response = await axios.get(`${store.getters.BASEURL}/academ/apartment`);

		let apartments = [];


		response.data.forEach(element => {
			if (element.floor === floor) {
				apartments.push(element);
			}
		});

		sortApartments(apartments, 'SET_APARTMENTS_ON_FLOOR');
	} catch { e => { throw new Error(e) } }

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