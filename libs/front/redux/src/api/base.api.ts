import axios, { AxiosInstance } from 'axios';

class BaseApi {
  private readonly instance: AxiosInstance;

  constructor(baseURL: string) {
    this.instance = axios.create({ baseURL });

    // Add token
    this.instance.interceptors.request.use((config) => {
      const token = localStorage.getItem('TOKEN');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });
  }

  get(url: string) {
    return this.instance.get(url);
  }

  post(url: string, body?: unknown) {
    return this.instance.post(url, body);
  }

  put(url: string, body?: unknown) {
    return this.instance.put(url, body);
  }
}

export default BaseApi;
