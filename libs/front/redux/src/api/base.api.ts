import axios, { Axios } from 'axios';

class BaseApi {
  private instance: Axios;

  constructor(baseURL: string) {
    this.instance = axios.create({ baseURL });
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
