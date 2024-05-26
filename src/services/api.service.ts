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

  static async getAllConversation (){
    const {data} = await this.callApi('conversation/getAll', {
      method: 'GET'
    })
    return data
  }

  static async createConversation (receiverId){
    const {data} = await this.callApi(`conversation/create/${receiverId}`, {
      method: 'POST'
    })
    return data
  }

  static async sendMessage ({receiverId, message}) {
    const {data} = await this.callApi(`messages/send/${receiverId}`, {
      method: 'POST',
      data: {message}
    })
    return data;
  }
  static async getMessages (receiverId) {
    const {data} = await this.callApi(`messages/${receiverId}`, {
      method: 'GET'
    })
    return data
  }

  static async uploadPost(arg) {
    const {data} = await this.callApi('post/upload', {
      method: 'POST',
      data: arg
    })
    return data;
  }

  static async uploadImages(formdata) {
    const {data} = await this.callApi('post/uploadImage', {
      method: 'POST',
      data: formdata
    })
    return data
  }
}
