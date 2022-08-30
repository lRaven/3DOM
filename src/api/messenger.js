import axios from 'axios';
import cookie from 'vue-cookies';

const baseURL = process.env.VUE_APP_BACKEND_BASEURL;

const getChats = async () => {
	try {
		const response = await axios.get(`${baseURL}/users/support/`,
			{ headers: { Authorization: `token ${cookie.get('auth_token')}` } }
		);

		return response;
	}
	catch (err) { throw new Error(err) }
}

const getChat = async (id) => {
	try {
		const response = await axios.get(`${baseURL}/users/support/${id}`,
			{ headers: { Authorization: `token ${cookie.get('auth_token')}` } }
		);

		return response;
	}
	catch (err) { throw new Error(err) }
}

const getMessages = async () => {
	try {
		const response = await axios.get(`${baseURL}/chats/support_ticket_messages/`,
			{ headers: { Authorization: `token ${cookie.get('auth_token')}` } });

		return response;
	}
	catch (err) { throw new Error(err) }
}

export { getChats, getChat, getMessages }
