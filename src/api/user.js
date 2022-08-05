import axios from "axios";
import store from '@/store';

const baseURL = store.state.baseURL;

const login = async (username, password) => {
	try {
		const response = await axios.post(`${baseURL}/auth/token/login/`, {
			username,
			password,
		});
		return response;
	}
	catch (err) { throw new Error(err) }
}

export {
	login
}