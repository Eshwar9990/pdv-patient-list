import axios from 'axios';

import { RECEIVE_API_DATA } from '../actionTypes/actionTypes';

var sampleBaseUrl = "http://localhost:8080/api/v1/";

const requestTypes = {
	get: async function(payload) {
		console.log('payload from reqTypes: ', payload.partialUrl);
		return new Promise((resolve, reject) => {
			axios.get(sampleBaseUrl + payload.partialUrl)
			.then(res => {
				console.log('Response: ', res);
				resolve(res);
				// resolve(null);
			}).catch(err => {
				console.log("Error: ", err);
				reject(err);
			});
		});
	},
	delete: async function(payload) {
		console.log('payload from reqTypes: ', payload.partialUrl);
		return new Promise((resolve, reject) => {
			axios.delete(sampleBaseUrl + payload.partialUrl)
			.then(res => {
				console.log('Response: ', res);
				resolve(res);
				// resolve(null);
			}).catch(err => {
				console.log("Error: ", err);
				reject(err);
			});
		});
	},
	receiveApiData: function(data) {
		return {
			type: RECEIVE_API_DATA,
			payload: data
		}
	}
};

export default requestTypes;