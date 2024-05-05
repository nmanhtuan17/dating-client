import {store} from "@/store";
import axios, { AxiosRequestConfig, AxiosRequestHeaders } from "axios";
export class RequestService {
  static axiosInstance = axios.create({});
  static async callApi(
    endpoint : string,
    config : AxiosRequestConfig = {method: "GET"}
  ) {
    const {tokens} = store.getState()?.auth
    const BASE_URL = 'http://localhost:8080/api';
    const requestHeaders : any = {};
    if (tokens && tokens?.accessToken.length > 0) {
      requestHeaders.Authorization = `Bearer ${tokens?.accessToken}`;
    }
    return this.axiosInstance({
      ...config,
      headers: {
        ...requestHeaders,
        ...config.headers
      },
      method: config.method || "GET",
      url: `${BASE_URL}/${endpoint}`
    });
  }
}