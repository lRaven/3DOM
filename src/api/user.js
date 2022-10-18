import axios from "axios";
import cookie from 'vue-cookies';

const baseURL = process.env.VUE_APP_BACKEND_BASEURL;

const login = async (userData) => {
	try {
		const response = await axios.post(`${baseURL}/auth/token/login/`,
			{ ...userData }
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
		const response = await axios.post(`${baseURL}/auth/token/logout/`, {},
			{ headers: { Authorization: `token ${cookie.get('auth_token')}`, }, }
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
				{ headers: { Authorization: `token ${cookie.get('auth_token')}`, }, }
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
				{ headers: { Authorization: `token ${cookie.get('auth_token')}`, }, }
			)
		return response;
	}
	catch (err) { return err.response }
}

const upload_avatar = async (user_id, avatar) => {
	try {
		const response = await axios.put(`${baseURL}/auth/users/upload_avatar/${user_id}/`,
			{ avatar },
			{
				headers: {
					Authorization: `token ${cookie.get('auth_token')}`,
					"Content-Type": "multipart/form-data",
				},
			}
		);
		return response;
	}
	catch (err) { return err.response }
}

export { login, registration, logout, change_user_data, change_password, upload_avatar }
