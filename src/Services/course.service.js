import {RequestService} from "./request.service";


export class CourseService extends RequestService {
  static async loadCourse(data) {
    const res = await this.callApi('course/getAll', {
      method: "GET"
    })
    return res.data
  }

  static async createCourse(course) {
    const res = await this.callApi('course/add-course', {
      method: "POST",
      data: course
    })
    return res.data
  }

  static async deleteCourse(id) {
    const {data} = await this.callApi(`course/delete/${id}`, {
      method: 'POST'
    })
    return data;
  }
}
