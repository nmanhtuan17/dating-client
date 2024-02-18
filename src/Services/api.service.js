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

  static async getAllTeacher () {
    const {data} = await this.callApi("teacher/get-all", {
      method: "GET"
    })
    return data
  }

  static async deleteStudent (id) {
    const {data} = await this.callApi(`user/delete/${id}`, {
      method: "POST"
    })
    return data
  }

  static async updateProfile (_data, id) {
    const {data} = await this.callApi(`user/update-profile/${id}`, {
      method: "POST",
      data: _data
    })
    return data
  }
}
