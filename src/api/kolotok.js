import axios from "axios";

const baseURL = process.env.VUE_APP_BACKEND_BASEURL;

const getProducts = async (params) => {
	try {
		const response = await axios.get(`${baseURL}/search/products/${params ? params : ''}`);

		return response;
	}
	catch (err) { throw new Error(err) }
}

const getCategories = async () => {
	try {
		const response = await axios.get(`${baseURL}/kolotok/categories`);
		return response
	}
	catch (err) { throw new Error(err) }
}

export {
	getProducts,
	getCategories,
}