import {RequestService} from "./request.service";

export class ApiService extends RequestService {
  static async createUser (payload) {
    const {data} = this.callApi("user/create-user", {
      method: 'POST',
      data: payload
    })
    console.log(data)
    return data
  }
}
