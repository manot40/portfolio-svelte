import Axios, { type AxiosResponse } from 'axios';

const axios = Axios.create({
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json',
		'Accept-Encoding': null
	}
});

const fetcher = {
	get: <R = unknown>(url: string): Promise<R> => {
		return axios.get(url).then(handleResponse);
	},
	delete: <R = unknown>(url: string): Promise<R> => {
		return axios.delete(url).then(handleResponse);
	},
	post: <R = unknown, T = unknown>(url: string, data: T): Promise<R> => {
		return axios.post(url, data).then(handleResponse);
	},
	put: <R = unknown, T = unknown>(url: string, data: T): Promise<R> => {
		return axios.put(url, data).then(handleResponse);
	},
	patch: <R = unknown, T = unknown>(url: string, data: T): Promise<R> => {
		return axios.patch(url, data).then(handleResponse);
	},
	setHeader(key: string, value: string) {
		axios.defaults.headers.common[key] = value;
		return this;
	},
	default: axios.defaults
};

function handleResponse(res: AxiosResponse) {
	const token = res.headers['x-access-token'];
	if (token) axios.defaults.headers.common['Authorization'] = token;
	return res.data;
}

export default fetcher;
