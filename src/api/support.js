import axios from "axios";
import store from '@/store';

const baseURL = store.state.baseURL;

const send_support_message = async (form_data) => {
	try {
		const response = await axios.post(`${baseURL}/users/support/`,
			{ ...form_data })

		return response;
	}
	catch (err) { return err.response }
}

export { send_support_message }