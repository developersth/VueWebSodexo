<template>
   <div class="MapView">
      <div class="content">
         <div class="container-fluid">
            <div class="row">
               <div class="col-md-3 nopadding" >
                  <div class="card  card-danger">
                     <div class="card-header">
                        <div class="form-row">
                           <div class="col">
                              <a href="#" class="h6"><b>Booking</b></a>
                           </div>
                           <div class="col text-center">
                           </div>
                           <div class="col text-right">
                              <div class="card-tools">
                                 <button type="button" class="btn btn-tool" data-card-widget="maximize">
                                 <i class="fas fa-expand"></i>
                                 </button>
                                 <button type="button" class="btn btn-tool" data-card-widget="collapse">
                                 <i class="fas fa-minus"></i>
                                 </button>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="card-body">
                        <div class="row">
                           <div class="col-md-12">
                              <ul class="nav nav-pills nav-justified mb-1" id="pills-tab" role="tablist">
                                 <li class="nav-item">
                                    <a class="nav-link active" id="pills-team-tab" data-toggle="pill" href="#pills-team" role="tab" aria-controls="pills-home" aria-selected="true">Team</a>
                                 </li>
                                 <li class="nav-item">
                                    <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Today</a>
                                 </li>
                              </ul>
                              <div class="tab-content" id="pills-tabContent">
                                 <div class="tab-pane fade show active" id="pills-team" role="tabpanel" aria-labelledby="pills-team-tab">
                                    <div class="row">
                                       <div class="form-group col-sm-12 col-md-12">
                                          <div class="input-group">
                                             <span class="input-group-btn">
                                             <button type="button" class="btn btn-success" @click="is_show_booking=true">
                                             <i class="fa fa-plus">Add</i> 
                                             </button>
                                             </span>
                                             <input  class="form-control" type="text" v-model="keyword" placeholder="Search..." autofocus="true" />
                                             <span class="input-group-btn">
                                             <button
                                                type="button"
                                                class="btn btn-primary"
                                                @click="getAllBooking()"
                                                >
                                             <i class="fa fa-search"></i>ค้นหา
                                             </button>
                                             </span>
                                          </div>
                                       </div>
                                    </div>
                                    <div class="scrollbar scrollbar-indigo bordered-indigo thin" style="position: relative; height: 67vh; overflow: auto;">
                                       <table class="table">
                                          <tbody>
                                             <tr v-for="(item,index) in users_items" :key="index">
                                                <th scope="row">
                                                   <img src="/dist/img/avatar5.png" width="60" height="60" class="rounded-circle" alt="Cinque Terre">
                                                </th>
                                                <td>
                                                   <div class="text-warning">{{item.name}} </div>
                                                   <div class="text-success"><i class="far fa-check-circle fa-xs"> Online</i></div>
                                                   <div class="form-inline">
                                                      <button class="btn btn-outline-info btn-xs"><i class="fas fa-business-time"> Assign Job</i></button>
                                                      <button class="btn btn-outline-primary btn-xs"><i class="fas fa-user-circle"> Profile</i></button>
                                                   </div>
                                                </td>
                                             </tr>
                                          </tbody>
                                       </table>
                                    </div>
                                 </div>
                                 <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                       <div class="scrollbar scrollbar-indigo bordered-indigo thin" style="position: relative; height: 67vh; overflow: auto;">
                                       <table class="table">
                                          <tbody>
                                             <tr v-for="(item,index) in booking_item" :key="index">
                                                <td>
                                                   <div class="row">                           
                                                       <div class="col-7">
                                                          <div class="float-left">
                                                            <div class="text-secondary">{{item.mobile_name}} </div>
                                                          </div>
                                                       </div>
                                                       <div class="col-5">
                                                         <div class="float-right">
                                                           <div class="text-success">{{item.reserv_time}} </div>
                                                          </div>
                                                       </div>
                                                   </div>

                                                   <div class="text-success"><i class="far fa-check-circle fa-xs"> {{item.status_name}}</i></div>
                                                   <div class="form-inline">
                                                      <button class="btn btn-primary btn-xs"><i class="fas fa-pencil-alt"> Edit</i></button>|
                                                      <button class="btn btn-info btn-xs"><i class="fas fa-user-circle"> View log</i></button>
                                                   </div>
                                                </td>
                                             </tr>
                                          </tbody>
                                       </table>
                                    </div>
                                    </div>
                                 <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">...</div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div v-if="is_show_booking" class="col-md-3 nopadding">
                  <div class="card  card-info">
                     <div class="card-header">
                        <div class="form-row">
                           <div class="col">
                              <a href="#" class="h6">AddBooking</a>
                           </div>
                           <div class="col text-center">
                           </div>
                           <div class="col text-right">
                              <div class="card-tools">
                                 <button type="button" class="btn btn-tool" data-card-widget="maximize">
                                 <i class="fas fa-expand"></i>
                                 </button>
                                 <button type="button" class="btn btn-tool" @click="closePanelBooking()">
                                 <i class="fas fa-times"></i>
                                 </button>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="scrollbar scrollbar-indigo bordered-indigo thin" style="position: relative; height: 80vh; overflow-y: auto">
                        <div class="card-body">
                              <div class="row">
                                 <div class="col-md-12">
                                  <div class="btn-group" style="display: flex; justify-content: center">
                                  <button class="btn btn-success w-100 btn-lg" style="font-size: 24px"  @click="handleSubmit" :disabled="isActive">
                                    <span v-bind:class="{ 'spinner-border  spinner-border-md': isActive }">
                                      <i v-if="!isActive" class="fas fa-save"> Save</i>
                                      </span>  
                                        <span v-if="isActive"> Loading...</span>
                                     </button>
                                  </div>
                                  <br>
                                    <!-- text input -->
                                    <div class="form-group">
                                       <label>{{ $t("booking.reservation_date") }} :</label>
                                       <div class="input-group date">
                                          <date-picker
                                             lang="th"
                                             type="date"
                                             v-model="form.reservation_date"
                                             format="DD-MM-YYYY"
                                             ></date-picker>
                                          <div
                                             class="input-group-append"
                                             data-target="#reservationdate"
                                             data-toggle="datetimepicker"
                                             ></div>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="col-md-6">
                                    <div class="form-group">
                                       <label>{{ $t("booking.reservation_time_start") }} :</label>
                                       <div
                                          class="input-group date"
                                          id="timepicker"
                                          data-target-input="nearest"
                                          >
                                          <date-picker
                                             lang="en"
                                             type="time"
                                             v-model="form.reservation_time_start"
                                             format="HH:mm"
                                             ></date-picker>
                                          <div
                                             class="input-group-append"
                                             data-target="#timepicker"
                                             data-toggle="datetimepicker"
                                             ></div>
                                       </div>
                                       <!-- /.input group -->
                                    </div>
                                 </div>
                                 <div class="col-md-6">
                                    <div class="form-group">
                                       <label>{{ $t("booking.reservation_time_end") }} :</label>
                                       <div
                                          class="input-group date"
                                          id="timepicker"
                                          data-target-input="nearest"
                                          >
                                          <date-picker
                                             lang="en"
                                             type="time"
                                             v-model="form.reservation_time_end"
                                             format="HH:mm"
                                             ></date-picker>
                                          <div
                                             class="input-group-append"
                                             data-target="#timepicker"
                                             data-toggle="datetimepicker"
                                             ></div>
                                       </div>
                                       <!-- /.input group -->
                                    </div>
                                 </div>
                              </div>
                              <div class="row">
                                 <div class="col-md-12">
                                    <!-- text input -->
                                    <div class="form-group" data-select2-id="47">
                                       <label>{{ $t("booking.machine") }}</label>
                                       <div class="input-group mb-3">
                                          <input
                                             type="text"
                                             class="form-control"
                                             v-model="form.machine_id"
                                             :placeholder="$t('booking.machine')"
                                             readonly
                                             />
                                          <div class="input-group-append">
                                             <button
                                                class="btn btn-primary"
                                                @click.prevent="showModalMachine"
                                                >
                                             <i class="fas fa-search"></i>
                                             </button>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="row">
                                 <div class="col-sm-12">
                                    <!-- text input -->
                                    <div class="form-group">
                                       <label>{{ $t("booking.assing_to_mobile") }}</label>
                                       <div class="input-group">
                                          <div class="input-group-prepend">
                                             <span class="input-group-text">
                                             <i class="fas fa-hospital-user"></i>
                                             </span>
                                          </div>
                                          <select class="form-control" v-model="form.mobile_id">
                                             <option value="0">=== please select ===</option>
                                             <option
                                                v-for="(items, index) in mobile_item"
                                                v-bind:key="index"
                                                :value="items._id"
                                                >
                                                {{ items.name }}
                                             </option>
                                          </select>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="col-sm-12">
                                    <!-- text input -->
                                    <div class="form-group">
                                       <label>{{ $t("booking.job_title") }}</label>
                                       <div class="input-group">
                                          <div class="input-group-prepend">
                                             <span class="input-group-text">
                                             <i class="fas fa-file-medical-alt"></i>
                                             </span>
                                          </div>
                                          <select
                                             id="booking_status"
                                             v-model="form.job_title"
                                             class="form-control"
                                             >
                                             <option value="Reserve Booking">Reserve Booking</option>
                                          </select>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="col-sm-12">
                                    <!-- text input -->
                                    <div class="form-group">
                                       <label>{{ $t("booking.location") }}</label>
                                       <div class="input-group">
                                          <div class="input-group-prepend">
                                             <span class="input-group-text"
                                                ><i class="fas fa-map"></i
                                                ></span>
                                          </div>
                                          <textarea  rows="4" type="text" class="form-control" v-model="form.location" :placeholder="$t('booking.location')"/>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="row">
                                 <div class="col-sm-12">
                                    <!-- text input -->
                                    <div class="form-group">
                                       <label>{{ $t("booking.hospital_name") }}</label>
                                       <div class="input-group">
                                          <div class="input-group-prepend">
                                             <span class="input-group-text"
                                                ><i class="fas fa-hospital"></i
                                                ></span>
                                          </div>
                                          <select
                                             class="form-control"
                                             v-on:change="get_hospital_name()"
                                             v-model="form.hospital_id"
                                             >
                                             <option value="">-- Select Hospital --</option>
                                             <option
                                                v-for="(items, index) in hospital_item"
                                                v-bind:key="index"
                                                :value="items._id"
                                                >
                                                {{ items.hospital_name }}
                                             </option>
                                          </select>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="row">
                                 <div class="col-sm-12">
                                    <!-- text input -->
                                    <div class="form-group">
                                       <label>{{ $t("booking.contact_person") }}</label>
                                       <div class="input-group">
                                          <div class="input-group-prepend">
                                             <span class="input-group-text"
                                                ><i class="fas fa-user"></i
                                                ></span>
                                          </div>
                                          <input
                                             type="text"
                                             class="form-control"
                                             v-model="form.contact_person"
                                             :placeholder="$t('booking.contact_person')"
                                             />
                                       </div>
                                    </div>
                                 </div>
                                 <div class="col-sm-12">
                                    <!-- text input -->
                                    <!-- phone mask -->
                                    <div class="form-group">
                                       <label>{{ $t("booking.contact_mobile") }}</label>
                                       <div class="input-group">
                                          <div class="input-group-prepend">
                                             <span class="input-group-text"
                                                ><i class="fas fa-phone"></i
                                                ></span>
                                          </div>
                                          <input
                                             type="text"
                                             maxlength="15"
                                             class="form-control"
                                             v-model="form.contact_mobile"
                                             data-inputmask='"mask": "(999) 999-9999"'
                                             data-mask
                                             />
                                       </div>
                                       <!-- /.input group -->
                                    </div>
                                 </div>
                              </div>
                              <div class="row">
                                 <div class="col-sm-12">
                                    <!-- text input -->
                                    <div class="form-group">
                                       <label>{{ $t("booking.note") }}</label>
                                       <textarea
                                          type="text"
                                          class="form-control"
                                          v-model="form.detail"
                                          :placeholder="$t('booking.note')"
                                          ></textarea>
                                    </div>
                                 </div>
                              </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div   v-bind:class="activeClassBooking()">
                  <div class="custom-gmap-class">
                     <GmapMap  :center="{lat:13.7622354, lng:100.5067183}" :zoom="13" map-type-id="terrain" style="width:100%;height:87vh"></GmapMap>
                  </div>
               </div>
            </div>
         </div>
      </div>
          <b-modal id="modal-machine" size="lg" title="Machine List">
       <div style="white-space: nowrap; overflow-x: auto">
      <table class="table table-hover">
        <tbody>
          <tr v-if="machine_item.length === 0">
            No Data Not Found
          </tr>
          <tr v-for="(item, index) in machine_item" v-bind:key="index" >
            <td style="width: 50px">
              <img :src="item.url" height="120" width="160" />
            </td>
            <td>
              <div>
                <h6>รหัส : {{ item._id }}</h6>
              </div>
              <div>
                <h6>ชื่อ : {{ item.machine_name }}</h6>
              </div>
              <div>
                <h6>โมเดล : {{ item.model }}</h6>
              </div>
              <div>
                <div v-if="item.book_status === 1">
                  <h6 class="badge bg-success">สถานะ: สามารถจองได้</h6>
                </div>
                <div v-else>
                  <h6 class="badge bg-danger">สถานะ: ไม่ว่าง</h6>
                </div>
              </div>
            </td>
            <td style="text-align: right">
              <button
                class="btn btn-primary mt-4 px-2"
                @click="select_machine(item._id)"
                :disabled="!item.book_status"
              >
                <i class="fas fa-check-circle"> <lable> เลือก</lable></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
     </div>
    </b-modal>
   </div>
</template>
<script>
   const Utility = require("@/utility/util").default;
   const util = new Utility();
   import apiService from "@/service/api_service";
   const service = new apiService();
   export default {
     data() {
       return {
         isActive:false,
         is_show_booking:false,
         users_items:[],
         keyword:"",
         mobile_item:[],
         hospital_item:[],
         machine_item: {},
         booking_item:[],
        form: {
            machine_id: "",
            mobile_id: "",
            job_title: "Reserve Booking",
            location: "",
            hospital_id: "",
            hospital_name: "",
            contact_person: "",
            contact_mobile: "",
            detail: "",
            reservation_date: new Date(),
            reservation_time_start: "",
            reservation_time_end: "",
            reservation_by: "",
            update_by: "",
          },
       }
     },
     created(){
       this.getAllUserSearch();
       this.getAllMobile();
       this.getAll_hospital();
       this.getAllBooking();
     },
     methods:{
    async getAllBooking() {
      const body = {
        status: '',
        start_date: util.format_date(new Date()),
        end_date: util.format_date(new Date()),
        keyword: this.keyword,
        lang: localStorage.getItem("lang") || "en",
      };
      await service.getAllBooking(body).then((response) => {
        this.booking_item = response;
      });
    },
     async getAll_hospital() {
      await service
        .getAll_hospital()
        .then((response) => {
          this.hospital_item = response;
        })
        .catch((e) => {
          //console.log(e);
          this.$swal({
            position: "top-end",
            icon: "warning",
            title: "warning",
            text: e,
            showConfirmButton: false,
            timer: 2000,
          });
        });
    },
      async getAllMobile() {
      await service
        .getUserType('mobile')
        .then((response) => {
          this.mobile_item = response
        })
        .catch((e) => {
          //console.log(e);
          this.$swal({
            position: "top-end",
            icon: "warning",
            title: "warning",
            text: e,
            showConfirmButton: false,
            timer: 2000,
          });
        });
    },
    handleSubmit() {
      this.isActive=true
      // Exit when the form isn't valid
      if (!this.checkFormValidity()) {
           this.isActive=false
        return;
      }
      // Push the name to submitted names
      if (this.action==='A')
        this.booking_reserve();
      else 
        this.booking_edit();
    },
    checkFormValidity() {
      this.validateNames = [];
      if (!this.form.reservation_date)
        this.validateNames.push({ message: "กรุณากรอก วันที่จองด้วยครับ!" });
      //console.log(this.$moment(dateNow).format("dddd, MMMM Do YYYY"))
      if (this.form.reservation_date&&this.action==='A') {
        let reservation_date = util.format_date(this.form.reservation_date);
        let dateNow = util.format_date(new Date());
        if (reservation_date < dateNow)
          this.validateNames.push({ message: "ไม่สามารถจองย้อนหลังได้!" });
      }
      if (!this.form.reservation_time_start)
        this.validateNames.push({ message: "กรุณากรอก เวลาเริ่มจองด้วยครับ!" });
      if (!this.form.machine_id)
        this.validateNames.push({
          message: "กรุณากรอก เลือกเครื่องที่ต้องการจองด้วยครับ!",
        });
      if (!this.form.reservation_time_end)
        this.validateNames.push({
          message: "กรุณากรอก เวลาสิ้นสุดการจองด้วยครับ!",
        });
      if (this.form.reservation_time_start && this.form.reservation_time_end) {
        if (this.form.reservation_time_start > this.form.reservation_time_end)
          this.validateNames.push({
            message: "เวลาเริ่มต้นต้อง น้อยกว่าเท่ากับ เวลาสิ้นสุดการจอง!",
          });
      }
      if (!this.form.hospital_id)
        this.validateNames.push({
          message: "กรุณากรอก ชื่อสถานพยาบาลด้วยครับ!",
        });
      if (!this.form.contact_person)
        this.validateNames.push({ message: "กรุณากรอก คนที่ติดต่อด้วยครับ!" });
      if (!this.form.contact_mobile)
        this.validateNames.push({
          message: "กรุณากรอก เบอร์คนที่ติดต่อด้วยครับ!",
        });
      if (this.validateNames.length > 0) {
        let message = "";
        for (let i = 0; i < this.validateNames.length; i++) {
          message += this.validateNames[i].message + "<br />";
        }
        this.$swal({
          position: "top-end",
          icon: "warning",
          title: "Information",
          html: message,
          showConfirmButton: false,
          timer: 3000,
        });
        return false;
      } else {
        return true;
      }
    },
    resetModal() {
      this.form.reservation_date = new Date();
      this.form.reservation_time_start = "";
      this.form.reservation_time_end = "";
      this.form.machine_id = "";
      this.form.machine_id = "";
      this.form.mobile_id = "";
      this.form.job_title = "Reserve Booking";
      this.form.location = "";
      this.form.hospital_id = "";
      this.form.contact_person = "";
      this.form.contact_mobile = "";
      this.form.detail = "";
    },
    async booking_reserve() {
      const body = {
        machine_id: this.form.machine_id,
        mobile_id: this.form.mobile_id,
        job_title: this.form.job_title,
        location: this.form.location,
        hospital_id: this.form.hospital_id,
        hospital_name: this.form.hospital_name,
        contact_person: this.form.contact_person,
        contact_mobile: this.form.contact_mobile,
        detail: this.form.detail,
        reservation_date: util.format_date(this.form.reservation_date),
        reservation_time_start: util.format_time(this.form.reservation_time_start),
        reservation_time_end: util.format_time(this.form.reservation_time_end),
        reservation_by: this.$session.get("name"),
        update_by: "test",
      };
      await service
        .booking_reserve(body)
        .then((res) => {
          if (res.success) {
            this.$swal({
              position: "top-end",
              icon: "success",
              title: "Booking",
              text: res.message,
              showConfirmButton: false,
              timer: 1500,
            });
            this.$bvModal.hide("modal-booking");
            this.getAllBooking();
            this.resetModal();
            this.isActive=false
          } else {
            this.$swal({
              position: "top-end",
              icon: "warning",
              title: "Alert!",
              text: res.message,
              showConfirmButton: false,
              timer: 2000,
            });
             this.isActive=false
          }
        })
        .catch((e) => {
          //console.log(e);
          this.$swal({
            position: "top-end",
            icon: "warning",
            title: "warning",
            text: e,
            showConfirmButton: false,
            timer: 3000,
          });
           this.isActive=false
        });
    },
     async booking_edit(){
      const body = {
        machine_id: this.form.machine_id,
        mobile_id: this.form.mobile_id,
        job_title: this.form.job_title,
        location: this.form.location,
        hospital_id: this.form.hospital_id,
        hospital_name: this.form.hospital_name,
        contact_person: this.form.contact_person,
        contact_mobile: this.form.contact_mobile,
        detail: this.form.detail,
        reservation_date: util.format_date(this.form.reservation_date),
        reservation_time_start: util.format_time(this.form.reservation_time_start),
        reservation_time_end: util.format_time(this.form.reservation_time_end),
        reservation_by: this.$session.get("name"),
        update_by: "test",
      };
       await service.update_booking(this.book_id,body)
         .then((res) => {
          if (res.success) {
            this.$swal({
              position: "top-end",
              icon: "success",
              title: "Information",
              text: res.message,
              showConfirmButton: false,
              timer: 1500,
            });
             this.$bvModal.hide("modal-booking");
             this.resetModal()
             this.getAllBooking()
          } else {
            this.$swal({
              position: "top-end",
              icon: "warning",
              title: "Warning",
              text: res.message,
              showConfirmButton: false,
              timer: 1500,
            });
          }
        })
        .catch((e) => {
          //console.log(e);
          this.$swal({
            position: "top-end",
            icon: "warning",
            title: "warning",
            text: e,
            showConfirmButton: false,
            timer: 3000,
          });
        });
    },
    showModalMachine() {
      this.validateNames = [];
      if (!this.form.reservation_date)
        this.validateNames.push({ message: "กรุณากรอก วันที่จองด้วยครับ!" });
      if (!this.form.reservation_time_start)
        this.validateNames.push({ message: "กรุณากรอก เวลาเริ่มจองด้วยครับ!" });
      if (!this.form.reservation_time_end)
        this.validateNames.push({
          message: "กรุณากรอก เวลาสิ้นสุดการจองด้วยครับ!",
        });
      if (this.validateNames.length > 0) {
        let message = "";
        for (let i = 0; i < this.validateNames.length; i++) {
          message += this.validateNames[i].message + "<br />";
        }
        this.$swal({position: "top-end",icon: "warning",title: "Information",html: message,showConfirmButton: false,timer: 2000});
        return;
      }
      this.findMachineBooking();
      this.$bvModal.show("modal-machine");
    },
        async findMachineBooking() {
      const body = {
        reservation_date: util.format_date(this.form.reservation_date),
        reservation_time_start: util.format_time(
          this.form.reservation_time_start
        ),
        reservation_time_end: util.format_time(this.form.reservation_time_end),
        lant: this.$i18n.locale,
      };
      await service
        .findMachineBooking(body)
        .then((response) => {
          this.machine_item = response;
        })
        .catch((e) => {
          //console.log(e);
          this.$swal({
            position: "top-end",
            icon: "warning",
            title: "warning",
            text: e,
            showConfirmButton: false,
            timer: 2000,
          });
        });
    },
      activeClassBooking(){
        let vClass=''
        if (this.is_show_booking) vClass='col-md-6 nopadding'
        else vClass='col-md-9 nopadding'
        return vClass
      },
      closePanelBooking(){
         this.is_show_booking=false
       },
     showPanelBooking(){
         this.is_show_booking=true
         this.$refs.form.reservation_date
       },
      async getAllUserSearch(){
           await service.getAllUserSearch().then((res) => {
              this.users_items=res
              //console.log(res)
           })
           .catch((e) => {
             this.$swal({position: "top-end",icon: "warning",title: "warning",text: e,showConfirmButton: false,timer: 3000});
           });
       },
     get_hospital_name() {
      var id = this.form.hospital_id;
      var objIndex = this.hospital_item.findIndex((obj) => obj._id == id);
      if (objIndex != -1) {
        this.form.hospital_name = this.hospital_item[objIndex].hospital_name;
        this.form.location = this.hospital_item[objIndex].address;
      }
      if (id===''){
         this.form.location ="";
      }
    },
    hideModalMachine() {
      this.$bvModal.hide("modal-machine");
    },
     select_machine(id) {
      this.form.machine_id = id;
      this.hideModalMachine();
     },
     }
   };
</script>
<style scoped>
   .custom-gmap-class {
   height: 100%;
   width: 100%;
   margin: 0px;
   padding: 0px
   }
   .nopadding {
   padding: 0 !important;
   margin: 0 !important;
   }
   .map-container {
   width: 100%;
   height: 100%;
   }
   #left-panel {
   width: 30%;
   }
   #left-panel .ajax-loader {
   position: absolute;
   top: 50px;
   right: 50%;
   height: 80px;
   width: 80px;
   background-color: #fff;
   padding: 5px;
   border-radius: 10px;
   margin-right: -40px;
   box-shadow: 0 0 50px rgba(0,0,0,0.5);
   z-index: 1080;
   }
   #left-panel .ajax-loader img {
   position: relative;
   display: block;
   width: 100%;
   height: 100%;
   }
   #right-panel {
   width: 35%;
   }
   .overview-container {
   width: 100%;
   height: 100%; }
   .overview-container .overview-group,
   .overview-container .overview-status {
   height: 40px;
   border-bottom: 1px solid #cccccc; }
   .overview-container .overview-group-device {
   display: flex;
   align-items: center;
   padding: 0px 5px;
   height: 40px;
   border-bottom: 1px solid #cccccc; }
   .overview-container .overview-button-add-group {
   margin-left: 5px;
   height: 100%;
   display: flex; }
   .overview-container .overview-group {
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 0 10px; }
   .overview-container .overview-group i {
   cursor: pointer;
   font-size: 16px; }
   .overview-container .overview-button-container {
   display: flex;
   text-align: center;
   height: 100%; }
   .overview-container .wl-search-container {
   display: flex;
   height: 40px; }
   .overview-container .wl-search-container .wl-button {
   margin-left: 5px; }
   .overview-container .overview-list {
   height: calc(100% - (40px * 4)); }
</style>