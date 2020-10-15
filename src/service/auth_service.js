import api from "./api";
const env = require('@/config/env');
class authService extends api {

  async users_login(body) {
    const { data } = await this.create(env.host_api+"users/login", body,  this.setHeader(env.Authorization));
    return data;
  }
  async users_register(body) {
    const { data } = await this.create(env.host_api+"users", body,  this.setHeader(env.Authorization));
    return data;
  }
}

export default authService;