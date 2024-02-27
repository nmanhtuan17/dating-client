import {RequestService} from "./request.service";


export class AuthService extends RequestService {
  static async login(data) {
    const res = await this.callApi('auth/login', {
      method: "POST",
      data: data
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

  static async changePassword (password, newPass) {
    const data = await this.callApi('auth/change-password', {
      method: "POST",
      data: {
        password, newPass
      }
    })
    return data;
  }

  static async resetPassword (msv) {
    const data = await this.callApi('auth/reset-password', {
      method: "POST",
      data: {
        msv
      }
    })
    return data;
  }
}
