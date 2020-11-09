import api from "./api";
const env = require('@/config/env');
class apiService extends api {

  //auth
  async users_login(body) {
    const { data } = await this.create(env.baseURL+"users/login", body);
    return data;
  }
  async users_register(body) {
    const { data } = await this.create(env.baseURL+"users", body);
    return data;
  }
  //users
  async create_users(body) {
    const { data } = await this.create(env.baseURL+"users", body);
    return data;
  }
  async getAll_users(body) {
    const  {data}  = await this.get(env.baseURL+"users", body);
    return data;
  }
  async getAllUserSearch() {
    const { data } = await this.get(env.baseURL+"users/search");
    return data;
  }
  async getUserRole() {
    const { data } = await this.get(env.baseURL+"users/getUserRole");
    return data;
  }
  async getUserById(id) {
    const { data } = await this.get(env.baseURL+"users/"+id);
    return data;
  }
  async update_users(id,body) {
    const { data } = await this.update(env.baseURL+"users/"+id,body);
    return data;
  }
  async delete_users(id) {
    const { data } = await this.delete(env.baseURL+"users/"+id);
    return data;
  }
  //booking
  async booking_reserve(body) {
    const { data } = await this.create(env.baseURL+"booking", body);
    return data;
  }
  async booking_reserve_bycustomer(body) {
    const { data } = await this.create(env.baseURL+"booking/create-booking-bycustomer", body);
    return data;
  }
  async update_booking(id,body) {
    const { data } = await this.update(env.baseURL+"booking/"+id,body);
    return data;
  }
  async getAllBooking(body) {  
    const { data } = await this.get(env.baseURL+"booking/find-booking", body);
    return data;
  }
  async getAllBookingCustomer(cus_id,body) {  
    const { data } = await this.get(env.baseURL+"booking/find-booking-customer/"+cus_id, body);
    return data;
  }

  async findMachineBooking(body) {  //ค้นหาเครื่องที่ว่าง
    const { data } = await this.get(env.baseURL+"booking/find-machine-booking", body);
    return data;
  }
  async getAll_machine(body) {
    const  {data}  = await this.get(env.baseURL+"machine", body);
    return data;
  }
  async getOne_booking(book_id) {
    const { data } = await this.get(env.baseURL+"booking/"+book_id);
    return data;
  }
  async delete_booking(id) {
    const { data } = await this.delete(env.baseURL+"booking/"+id);
    return data;
  }
  async getUserType(name) {
    const  {data}  = await this.get(env.baseURL+"users/getUserType/"+name);
    return data;
  }
  
  //hospital
  async create_hospital(body) {
    const { data } = await this.create(env.baseURL+"hospital", body);
    return data;
  }
  async getAll_hospital() {
    const { data } = await this.get(env.baseURL+"hospital");
    return data;
  }
  async getOne_hospital(id) {
    const { data } = await this.get(env.baseURL+"hospital/"+id);
    return data;
  }
  async update_hospital(id,body) {
    const { data } = await this.update(env.baseURL+"hospital/"+id,body);
    return data;
  }
  async delete_hospital(id) {
    const { data } = await this.delete(env.baseURL+"hospital/"+id);
    return data;
  }
   //machine
   async getAllMachine() {
    const { data } = await this.get(env.baseURL+"machine");
    return data;
  }
}

export default apiService;