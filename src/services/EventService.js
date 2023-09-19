import axios from 'axios'

const baseURL =process.env.VUE_APP_BASE_URL;
const apiClient = axios.create({
	baseURL: baseURL,
	withCredentials: false,
	headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json',
	}


})

export default {
	getEvents() {
		console.log(baseURL)
		return apiClient.get('/inventory')
	},

	getItemLocation(itemLocation){
		console.log(baseURL)
		return apiClient.get(`/inventory/item/${itemLocation}`)
	},

	getContainerLocation(containerLocation){
		console.log(baseURL)
		return apiClient.get(`/inventory/container/${containerLocation}`)
	}
}