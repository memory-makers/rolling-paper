import axios, { AxiosRequestConfig } from 'axios'
import tokenStore from './tokenStore'

const BASE_URL = import.meta.env.VITE_BASE_URL
export const axiosClient = axios.create()

axiosClient.interceptors.request.use(
  (config) => {
    const token = tokenStore.getAccessToken()

    if (!config.headers) config.headers = {}
    config.baseURL = BASE_URL
    config.headers['Content-Type'] = 'application/json'
    config.headers['Accept'] = 'application/json'
    config.headers['Access-Control-Allow-Origin'] = '*'
    config.headers['Access-Control-Allow-Headers'] = 'Content-Type'
    if (token) config.headers['Authorization'] = `Bearer ${token}`
    // config.withCredentials = true
    return config
  },
  (error) => {
    Promise.reject(error)
  }
)

axiosClient.interceptors.response.use(
  function (response) {
    return response
  },
  async function (error) {
    // const originalRequest = error.config;
    // const res = error.response;
    return Promise.reject(error)
  }
)

export const test_API = async () => {
  try {
    return await axiosClient.get('test')
  } catch (err: unknown) {
    console.log(err, 'err')
  }
}
