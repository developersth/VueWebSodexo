import api from "./api";
const env = require('@/config/env');
class bookService extends api {

  async booking_reserve(body) {
    const { data } = await this.create(env.host_api+"booking", body,  this.setHeader(env.Authorization));
    return data;
  }
  async users_register(body) {
    const { data } = await this.create(env.host_api+"users", body,  this.setHeader(env.Authorization));
    return data;
  }
}

export default bookService;