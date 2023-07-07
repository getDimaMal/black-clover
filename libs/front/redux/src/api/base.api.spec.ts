import axios from 'axios';

import { baseURL } from '../../jest.setup';

import BaseApi from './base.api';

describe('BaseApi', () => {
  let baseApi: BaseApi;

  const url = '/endpoint';
  const body = { test: 'Test' };

  beforeEach(() => {
    baseApi = new BaseApi(baseURL);
  });

  it('should create an instance of Axios with the provided baseURL', () => {
    expect(axios.create).toHaveBeenCalledWith({ baseURL });
  });

  it('should make a GET request with URL', async () => {
    await baseApi.get(url);
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(url);
  });

  it('should make a PUT request with URL & body', async () => {
    await baseApi.put(url, body);

    expect(axios.put).toHaveBeenCalledTimes(1);
    expect(axios.put).toHaveBeenCalledWith(url, body);
  });

  it('should make a POST request with URL & body', async () => {
    await baseApi.post(url, body);

    expect(axios.post).toHaveBeenCalledTimes(1);
    expect(axios.post).toHaveBeenCalledWith(url, body);
  });
});
