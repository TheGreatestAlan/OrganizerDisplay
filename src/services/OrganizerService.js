import axios from 'axios'

const apiClient = axios.create({
	baseURL: 'http://localhost:8081',
	withCredentials: false,
	headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json',
	}
})

export default {
	getEvents() {
		const url = '/inventory';
		console.log(`Making request to: ${apiClient.defaults.baseURL}${url}`);
		return apiClient.get(url);
	},

	getItemLocation(itemLocation){
		const url = `/inventory/item/${itemLocation}`;
		console.log(`Making request to: ${apiClient.defaults.baseURL}${url}`);
		return apiClient.get(url);
	},

	getContainerLocation(containerLocation){
		const url = `/inventory/container/${containerLocation}`;
		console.log(`Making request to: ${apiClient.defaults.baseURL}${url}`);
		return apiClient.get(url);
	}
}
