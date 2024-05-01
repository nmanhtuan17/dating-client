import {store} from "../Store/store";
import axios from "axios";


const URL = 'http://localhost:8080/api';
export class RequestService {
  static axiosInstance = axios.create({});
  // constructor() {
  //   this.axiosInstance.interceptors.response.use(
  //     response => {
  //       console.log("response----", response)
  //       return response;
  //     },
  //     error => {
  //       if (error.response?.data?.code === 403) {
  //         return store.dispatch(refreshToken()).then((res) => {
  //           console.log(res)
  //           // if (res.payload.tokens) {
  //           //   error.config.headers.Authorization = `Bearer ${res.payload.tokens.accessToken}`;
  //           //
  //           //   return this.axiosInstance(error.config);
  //           // }
  //         });
  //       }
  //       return Promise.reject(error);
  //     }
  //   );
  // }

  static async callApi(
    endpoint,
    config = {method: "GET"}
  ) {
    const {tokens} = store.getState()?.auth
    const requestHeaders = {};
    if (tokens && tokens?.accessToken.length > 0) {
      requestHeaders["Authorization"] = `Bearer ${tokens?.accessToken}`;
    }
    return this.axiosInstance({
      ...config,
      headers: {
        ...requestHeaders,
        ...config.headers
      },
      method: config.method || "GET",
      url: `${URL}/${endpoint}`
    });
  }
}
