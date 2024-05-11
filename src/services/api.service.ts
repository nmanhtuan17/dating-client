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
}
