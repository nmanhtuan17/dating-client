import { RequestService } from "./request.service";
import {AxiosResponse} from "axios";


export class ApiService extends RequestService {
  static async updateProfile(args) {
    const {data} = await this.callApi('user/update', {
      method: 'POST',
      data: args
    })
    return data
  }

  static async uploadAvatar(formData) {
    const {data} = await this.callApi('user/update-avatar', {
      method: 'POST',
      data: formData
    })
    return data
  }

  static async getUsers() {
    const {data} = await this.callApi('user/users', {
      method: 'GET'
    })
    return data
  }
}
