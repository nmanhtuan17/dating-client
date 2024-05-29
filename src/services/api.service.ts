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

  static async uploadImages (formdata) {
    const {data} = await this.callApi('post/uploadImage', {
      method: 'POST',
      data: formdata
    })
    return data
  }

  static async getPosts () {
    const {data} = await this.callApi('post/getAll', {
      method: 'GET'
    })
    return data
  }

  static async getPost (postId) {
    const {data} = await this.callApi(`post/${postId}`, {
      method: 'GET'
    })
    return data
  }

  static async likePost (postId) {
    const {data} = await this.callApi(`post/like/${postId}`, {
      method: 'POST',
    })
    return data
  }

  static async commentPost (payload: any, postId) {
    const {data} = await this.callApi(`post/comment/${postId}`, {
      method: 'POST',
      data: payload
    })
    return data
  }

  static async getComments(postId) {
    const {data} = await this.callApi(`post/comment/${postId}`, {
      method: 'GET',
    })
    return data
  }
}
