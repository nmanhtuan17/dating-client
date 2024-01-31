import {RequestService} from "./request.service";

export class StudentService extends RequestService {
  static async getStudent (id) {
    const {data} = await this.callApi(`user/${id}`, {
      method: 'GET'
    })
    return data
  }
}
