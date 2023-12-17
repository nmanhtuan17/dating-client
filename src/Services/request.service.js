import {store} from "../Store/store";
import axios from "axios";
import {setLogoutAndClearData} from "../Store/Action/auth.action";
export class RequestService {
  static axiosInstance = axios.create({});
  static async initialize() {
    // this.axiosInstance.interceptors.response.use(
    //   response => {
    //     return response;
    //   },
    //   error => {
    //     if (error.response?.data?.code == 401) {
    //       const {tokens} = store.getState()?.auth
    //       if (!tokens?.refreshToken) {
    //         return store.dispatch(setLogoutAndClearData());
    //       }
    //       return store.dispatch(refreshToken()).then((res) => {
    //         if (res.payload.data) {
    //           error.config.headers.Authorization = `Bearer ${res.payload.data.accessToken}`;
    //           return this.axiosInstance(error.config);
    //         }
    //       });
    //     }
    //     return Promise.reject(error);
    //   }
    // );
  }

  static async callApi(
    endpoint,
    config = {method: "GET"}
  ) {
    const {tokens, serverMode} = store.getState()?.auth
    const BASE_URL = '';
    const requestHeaders = {};
    if (tokens) {
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
