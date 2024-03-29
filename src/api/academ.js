import axios from "axios";
import store from '@/store';

import { sortArrayByNumberKey } from "@/js/sortArray";

const baseURL = process.env.VUE_APP_BACKEND_BASEURL;

async function getApartments() {
	try {
		const response = await axios.get(`${baseURL}/academ/apartment/`, {})

		if (response.status === 200) {
			const sort_result = sortArrayByNumberKey({
				array: response.data,
				key: 'number',
				direction: 'ascending',
			});
			store.commit('setApartments', sort_result);
		}
		return response;
	}
	catch (err) { throw new Error(err) }
}

async function getApartmentsOnTheFloor(floor) {
	try {
		const response = await axios.get(`${baseURL}/academ/apartment/`);


		if (response.status === 200) {
			const apartments = response.data.reduce((acc, current) => {
				if (current.floor === floor) {
					acc.push(current)
				}
				return acc
			}, [])

			const sort_result = sortArrayByNumberKey({
				array: apartments,
				key: 'number',
				direction: 'ascending',
			});
			store.commit('setApartmentsOnFloor', sort_result);
		}
	} catch { e => { throw new Error(e) } }
}

export { getApartments, getApartmentsOnTheFloor }