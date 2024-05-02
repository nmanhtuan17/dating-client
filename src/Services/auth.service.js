import {RequestService} from "./request.service";


export class AuthService extends RequestService {
  static async login(data) {
    const res = await this.callApi('auth/sign-in', {
      method: "POST",
      data: data
    })
    return res.data
  }
  static async register (data) {
    const res = await this.callApi('auth/rigister', {
      method: "POST",
      data: data
    })
    return res.data
  }
}
