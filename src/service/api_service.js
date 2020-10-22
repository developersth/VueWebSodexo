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

  async findMachineBooking(body) {  //ค้นหาเครื่องที่ว่าง
    const { data } = await this.get(env.baseURL+"booking/find-machine-booking", body,  this.setHeader(env.Authorization));
    return data;
  }
  async getAll_machine(body) {
    const  {data}  = await this.get(env.baseURL+"machine", body, this.setHeader(env.Authorization));
    return data;
  }

  //hospital
  async create_hospital(body) {
    const { data } = await this.create(env.baseURL+"hospital", body,  this.setHeader(env.Authorization));
    return data;
  }
  async getAll_hospital() {
    const { data } = await this.get(env.baseURL+"hospital",  this.setHeader(env.Authorization));
    return data;
  }
  async getOne_hospital(id) {
    const { data } = await this.get(env.baseURL+"hospital/"+id,  this.setHeader(env.Authorization));
    return data;
  }
  async update_hospital(id,body) {
    const { data } = await this.update(env.baseURL+"hospital/"+id,body,  this.setHeader(env.Authorization));
    return data;
  }
  async delete_hospital(id) {
    const { data } = await this.delete(env.baseURL+"hospital/"+id,  this.setHeader(env.Authorization));
    return data;
  }
}

export default apiService;