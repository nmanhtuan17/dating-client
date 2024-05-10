import {RequestService} from "./request.service";


export class AuthService extends RequestService {
  static async login(account) {
    const {data} = await this.callApi('auth/login', {
      method: "POST",
      data: account
    })
    return data
  }
  static async register (account) {
    const {data} = await this.callApi('auth/register', {
      method: "POST",
      data: account
    })
    return data
  }
  static async verify (payload) {
    const {data} = await this.callApi(`auth/verify/${payload.accountId}`, {
      method: "POST",
      data: payload.value
    })
    return data
  }
}
