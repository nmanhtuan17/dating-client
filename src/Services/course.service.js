import {RequestService} from "./request.service";


export class CourseService extends RequestService {
  static async loadCourse(data) {
    const res = await this.callApi('course/getAll', {
      method: "GET"
    })
    return res.data
  }
}
