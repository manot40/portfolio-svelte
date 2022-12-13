import Axios, { type AxiosResponse, type AxiosRequestConfig } from 'axios';

import { GITHUB_TOKEN as password } from '$env/static/private';
import { PUBLIC_GITHUB_USERNAME as username } from '$env/static/public';

const axios = Axios.create({
  headers: {
    Accept: '*/*',
    'Accept-Encoding': null,
    'Cache-Control': 'no-cache',
    'Content-Type': 'application/json'
  },
  auth: password ? { username, password } : undefined
});

const fetcher = {
  get: <R = unknown>(url: string, opts?: AxiosRequestConfig): Promise<R> => {
    return axios.get(url, opts).then(handleResponse);
  },
  delete: <R = unknown>(url: string, opts?: AxiosRequestConfig): Promise<R> => {
    return axios.delete(url, opts).then(handleResponse);
  },
  post: <R = unknown, T = unknown>(url: string, data: T, opts?: AxiosRequestConfig): Promise<R> => {
    return axios.post(url, data, opts).then(handleResponse);
  },
  put: <R = unknown, T = unknown>(url: string, data: T, opts?: AxiosRequestConfig): Promise<R> => {
    return axios.put(url, data, opts).then(handleResponse);
  },
  patch: <R = unknown, T = unknown>(url: string, data: T, opts?: AxiosRequestConfig): Promise<R> => {
    return axios.patch(url, data, opts).then(handleResponse);
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
