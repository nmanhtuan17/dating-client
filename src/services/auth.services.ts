import {RequestService} from "@services/request.services";

export class AuthService extends RequestService {
  static async signIn (params) {
    const {data} = await this.callApi('auth/sign-in', {
      method: 'POST',
      data: params
    })
    console.log(data)
    return data
  }
}
