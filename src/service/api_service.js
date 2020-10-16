import api from "./api";
const env = require('@/config/env');
class apiService extends api {

  //auth
  async users_login(body) {
    const { data } = await this.create(env.baseURL+"users/login", body,  this.setHeader(env.Authorization));
    return data;
  }
  async users_register(body) {
    const { data } = await this.create(env.baseURL+"users", body,  this.setHeader(env.Authorization));
    return data;
  }
  //users
  async getAll_users(body) {
    const  {data}  = await this.get(env.baseURL+"users", body, this.setHeader(env.Authorization));
    return data;
  }
  //booking
  async booking_reserve(body) {
    const { data } = await this.create(env.baseURL+"booking", body,  this.setHeader(env.Authorization));
    return data;
  }
  async getAll_machine(body) {
    const  {data}  = await this.get(env.baseURL+"machine", body, this.setHeader(env.Authorization));
    return data;
  }
  async getAll_hospital(body) {
    const  {data}  = await this.get(env.baseURL+"hospital", body, this.setHeader(env.Authorization));
    return data;
  }

}

export default apiService;