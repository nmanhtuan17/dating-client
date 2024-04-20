import {store} from "@Store/store";
import axios from "axios";

export class RequestService {
  static axiosInstance = axios.create({});

  static async callApi(
    endpoint: string,
    config: { method: string, headers?: any } = {method: "GET"}
  ) {
    const {tokens} = store.getState()?.auth
    const BASE_URL = 'https://sm-rd7n.onrender.com/api';
    const requestHeaders: any = {};
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
