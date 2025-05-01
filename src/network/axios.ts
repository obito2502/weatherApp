/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosError, AxiosResponse } from 'axios';
import Config from 'react-native-config';
import networkConfig from './networkConfig';

const request = axios.create({
  baseURL: networkConfig.apiUrl,
});

request.interceptors.request.use(
  async (config) => {
    config.url = `/weather?appid=${Config.API_KEY}&${config.url}`;

    return Promise.resolve(config);
  },
  (error: AxiosError) => {
    console.error(`Error in request ${JSON.stringify(error.config)}: ${error}`);

    return Promise.reject(error);
  }
);

request.interceptors.response.use(
  (res: AxiosResponse<any>) => {
    return Promise.resolve(res);
  },
  (error) => {
    console.error(`Error in response for request ${JSON.stringify(error)}: ${error}`);

    return Promise.reject(error);
  }
);

export default request;
