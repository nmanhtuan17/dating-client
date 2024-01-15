import {RequestService} from "./request.service";


export class AuthService extends RequestService {
  static async login(data) {
    const res = await this.callApi('auth/login', {
      method: "POST",
      data: {
        msv: data.msv,
        password: data.password
      }
    })
    return res.data
  }

  static async refreshToken(refreshToken) {
    const res = await this.callApi('auth/refresh', {
      method: "POST",
      data: {
        refreshToken
      }
    })
    return res.data
  }
}
