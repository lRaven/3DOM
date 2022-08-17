import axios from "axios";
import store from '@/store';
import cookie from 'vue-cookies';

const baseURL = store.state.baseURL;

const login = async (username, password) => {
	try {
		const response = await axios.post(`${baseURL}/auth/token/login/`,
			{ username, password, }
		);
		return response;
	}
	catch (err) { return err.response }
}

const registration = async (user_data) => {
	try {
		const response = await axios.post(`${baseURL}/auth/users/`, { ...user_data })
		return response;
	}
	catch (err) { return err.response }
}

const logout = async () => {
	try {
		const response = axios.post(`${process.env.VUE_APP_BACKEND_BASEURL}/auth/token/logout/`, {},
			{ headers: { Authorization: `token ${cookie.get("auth_token")}`, }, }
		)

		return response;
	}
	catch (err) { throw new Error(err) }
}

const change_user_data = async (new_data) => {
	try {
		const response =
			await axios.put(`${baseURL}/auth/users/me/`,
				{ ...new_data },
				{ headers: { Authorization: `token ${cookie.get("auth_token")}`, }, }
			)
		return response;
	}
	catch (err) { return err.response }
}

const change_password = async (new_password, current_password) => {
	try {
		const response =
			await axios.post(`${baseURL}/auth/users/set_password/`,
				{ new_password, current_password },
				{ headers: { Authorization: `token ${cookie.get("auth_token")}`, }, }
			)
		return response;
	}
	catch (err) { return err.response }
}

export { login, registration, logout, change_user_data, change_password }
