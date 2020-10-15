import api from "./api";
class DoService extends api {
  async SaveDo(body) {
    this.setHeader()
    const { data } = await this.create("/api/do/create", body);
    return data;
  }

}

export default DoService;