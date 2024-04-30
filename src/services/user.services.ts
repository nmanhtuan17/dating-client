import {RequestService} from "@services/request.services";

export class UserServices extends RequestService {
  static async uploadAvatar (formdata) {
    const data = await this.callApi('user/update-avatar', {
      method: 'POST',
      data: formdata
    })
    console.log(data)
    return data
  }
}
