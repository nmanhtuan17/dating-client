import {RequestService} from "./request.service";

export class ApiService extends RequestService {
  static async createUser (payload) {
    const {data} = await this.callApi("user/create-user", {
      method: 'POST',
      data: payload
    })
    return data
  }

  static async getAllStudents () {
    const {data} = await this.callApi("user/getAll", {
      method: 'GET'
    })
    return data
  }
}
