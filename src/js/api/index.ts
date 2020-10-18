import axios, { AxiosResponse } from 'axios';
import camelcaseKeys from 'camelcase-keys';
import { DefaultApi } from './client-base';

export * from './client-base/domains';

const instance = axios.create();
instance.interceptors.response.use((response: AxiosResponse<any>) => ({
  ...response,
  data: camelcaseKeys(response.data),
}));

const basePath = 'http://0.0.0.0:4010';
export const api = new DefaultApi({}, basePath, instance);
