import axios from 'axios'

const apiClient = axios.create({
	baseURL: 'http://builder:8081',
	withCredentials: false,
	headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json',
	}


})

export default {
	getEvents() {
		return apiClient.get('/inventory')
	},

	getItemLocation(itemLocation){
		return apiClient.get(`/inventory/item/${itemLocation}`)
	},

	getContainerLocation(containerLocation){
		return apiClient.get(`/inventory/container/${containerLocation}`)
	}
}