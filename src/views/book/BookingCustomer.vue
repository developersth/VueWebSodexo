<template>
  <div class="BookingCustomer">
    <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-12">
          <div class="col-sm-6">
            <h1>Booking Customer</h1>
          </div>
          <!-- /.col -->
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active">Booking Customer</li>
            </ol>
          </div>
          <!-- /.col -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->
    <!-- Main content -->
    <div class="content">
      <div class="container-fluid">
        <div class="row justify-content-md-center">
          <div></div>
          <div class="col-md-12">
            <div class="card card-outline card-primary">
              <div class="card-header">
                <div class="form-row">
                  <div class="col">
                    <a href="#" class="h3"
                      ><b>{{ $t("booking.title") }}</b></a
                    >
                  </div>
                  <div class="col text-center">
                    <button
                      type="button"
                      data-toggle="modal"
                      @click="add_modal()"
                      class="btn btn-success text-center"
                    >
                      <i class="fas fa-plus"> Add Booking</i>
                    </button>
                  </div>
                  <div class="col text-right">
                    <div class="card-tools">
                      <button
                        type="button"
                        class="btn btn-tool"
                        @click="getAllBooking()"
                        data-card-widget="card-refresh"
                        data-source-selector="#card-refresh-content"
                        data-load-on-init="false"
                      >
                        <i class="fas fa-sync-alt"></i>
                      </button>
                      <button
                        type="button"
                        class="btn btn-tool"
                        data-card-widget="maximize"
                      >
                        <i class="fas fa-expand"></i>
                      </button>
                      <button
                        type="button"
                        class="btn btn-tool"
                        data-card-widget="collapse"
                      >
                        <i class="fas fa-minus"></i>
                      </button>
                      <button
                        type="button"
                        class="btn btn-tool"
                        data-card-widget="remove"
                      >
                        <i class="fas fa-times"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-md-12">
                    <div class="row">
                      <div class="col-md-8">
                    <div class="input-group row">
                    <label  class="col-sm-1 col-form-label">Message</label>
                    <div class="col-sm-8">
                      <div class="input-group mb-3">
                       <input class="form-control" type="text" v-model="keyword" placeholder="ค้นหา..." autofocus="true" value=""/>
                        <span class="input-group-btn">
                            <button type="button" class="btn btn-primary" @click="getAllBooking()"><i class="fa fa-search"> ค้นหา</i> </button>
                      </span>
                      </div>
                    </div>
                  </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div style="white-space: nowrap; overflow-x: auto">
                      <table class="table table-hover">
                        <thead class="bg-primary">
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">Book No.</th>
                            <th scope="col">Reserve Date</th>
                            <th scope="col">Title</th>
                            <th scope="col">Status</th>
                            <th scope="col">#</th>
                          </tr>
                        </thead>
                       <tbody v-if="booking_item.length===0">
                            No Data Not Found
                        </tbody>
                        <tbody>
                          <tr
                            v-for="(item, index) in booking_item"
                            v-bind:key="index"
                          >
                            <td>{{ index+1 }}</td>
                            <td>{{ item.book_id }}</td>
                            <td>
                              {{
                                item.reservation_date + " " + item.reserv_time
                              }}
                            </td>
                            <td>{{ item.job_title }}</td>
                            <td>
                              <label v-if="item.cancel_status==1" class="badge bg-danger">
                                {{item.status_name}}
                              </label>
                             <label v-else class="badge bg-success">
                                {{item.status_name}}
                              </label>
                            </td>
                            <td class="text-center">
                              <button class="btn btn-info btn-sm" @click="edit_modal(item.book_id)">แก้ไข</button>
                              <button class="btn btn-danger btn-sm ml-2" @click="cancel_data(item.book_id)">
                                ยกเลิก
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- /.row -->
      </div>
    </div>
    <!-- /.container-fluid -->
    <!-- Modal -->

    <!-- Modal -->
    <b-modal
      id="modal-booking"
      header-bg-variant="primary"
      size="lg"
      :title="getActionName+` Booking`"
      @ok="handleOk"
      no-close-on-backdrop
    >
      <form ref="form" @submit.prevent="handleSubmit">
        <div class="row">
          <div class="col-md-4">
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
          <div class="col-sm-4">
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
          <div class="col-sm-4">
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
          <div class="col-sm-6">
            <!-- text input -->
            <div class="form-group">
              <label>{{ $t("booking.job_title") }}</label>
              <select
                id="booking_status"
                v-model="form.job_title"
                class="form-control"
              >
                <option value="Reserve Booking">Reserve Booking</option>
              </select>
            </div>
          </div>
          <div class="col-sm-12">
            <!-- text input -->
            <div class="form-group">
              <label>{{ $t("booking.location") }}</label>
              <input
                type="text"
                class="form-control"
                v-model="form.location"
                :placeholder="$t('booking.location')"
              />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12">
            <!-- text input -->
            <div class="form-group">
              <label>{{ $t("booking.hospital_name") }}</label>
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
        <div class="row">
          <div class="col-sm-6">
            <!-- text input -->
            <div class="form-group">
              <label>{{ $t("booking.contact_person") }}</label>
              <input
                type="text"
                class="form-control"
                v-model="form.contact_person"
                :placeholder="$t('booking.contact_person')"
              />
            </div>
          </div>
          <div class="col-sm-6">
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
                  type="number"
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
      </form>
    </b-modal>

    <b-modal id="modal-machine" size="lg" title="Machine List">
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
                <h6>ID : {{ item._id }}</h6>
              </div>
              <div>
                <h6>Name : {{ item.machine_name }}</h6>
              </div>
              <div>
                <h6>Model : {{ item.model }}</h6>
              </div>
              <div>
                <div v-if="item.book_status === 1">
                  <h6 class="badge bg-success">Status: Can be Reserve</h6>
                </div>
                <div v-else>
                  <h6 class="badge bg-danger">Status:Can Not Reserve</h6>
                </div>
              </div>
            </td>
            <td style="text-align: right">
              <button
                class="btn btn-primary mt-4 px-2"
                @click="select_machine(item._id)"
                :disabled="!item.book_status"
              >
                <i class="fas fa-check-circle"> Reserve</i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </b-modal>
  </div>
</template>
<script>
import apiService from "@/service/api_service";
const env = require("@/config/env");
const service = new apiService();
const Utility = require("@/utility/util").default;
const util = new Utility();
export default {
  data() {
    return {
      action: "A",
      status: "",
      book_id:"",
      start_date: new Date(),
      end_date: new Date(),
      validateNames: [],
      keyword: "",
      HOST_URL: env.HOST_URL,
      machine_item: {},
      driver_item: {},
      hospital_item: {},
      booking_item: [],
      mobile_item: [],
      cus_id:"",
      form: {
        machine_id: "",
        driver_id: "",
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
    };
  },
  computed:{
    getActionName(){
      if (this.action==='A')
        return 'Add'
      else
        return 'Edit'
    }
  },
  mounted: function() {
    this.getAllBooking();
  },
  methods: {
    getCusID(){
         this.cus_id= this.$session.exists()?this.cus_id=this.$session.get('user_id'):""
         return this.cus_id
    },
    add_modal() {
      this.action = "A";
      this.resetModal()
      this.getAll_hospital();
      this.getAllDriver();
      this.getAllMobile()
      this.$bvModal.show("modal-booking");
    },
    async edit_modal(book_id) {
      this.action = "E"
      this.book_id=book_id
      this.getAll_hospital()
      this.getAllDriver()
      this.getAllMobile()
        await service.getOne_booking(book_id)
         .then((res) => {
           var reservation_date = new Date(res.reservation_date)
           var reservation_time_start = new Date(res.reservation_date +' '+res.reservation_time_start)
           var reservation_time_end = new Date(res.reservation_date +' '+res.reservation_time_end)

           this.form.reservation_date=reservation_date
           this.form.reservation_time_start=reservation_time_start
           this.form.reservation_time_end=reservation_time_end
           this.form.machine_id=res.machine_id
           this.form.driver_id=res.driver_id
           this.form.mobile_id=res.mobile_id
           this.form.location=res.location
           this.form.hospital_id=res.hospital_id
           this.form.contact_person=res.contact_person
           this.form.contact_mobile=res.contact_mobile
           this.form.detail=res.detail
           this.$bvModal.show("modal-booking")
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
    async getAllBooking() {
      const body = {
        keyword: this.keyword,
        lang: localStorage.getItem("lang") || "en",
      };
      await service.getAllBookingCustomer(this.getCusID(),body).then((response) => {
        this.booking_item = response;
      });
    },
    select_machine(id) {
      this.form.machine_id = id;
      this.hideModalMachine();
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
        this.$swal({
          position: "top-end",
          icon: "warning",
          title: "Information",
          html: message,
          showConfirmButton: false,
          timer: 2000,
        });
        return;
      }
      this.findMachineBooking();
      this.$bvModal.show("modal-machine");
    },
    hideModalMachine() {
      this.$bvModal.hide("modal-machine");
    },
    string_to_date(vDate) {
      return new Date(vDate.replace(/(\d{2})-(\d{2})-(\d{4})/, "$2/$1/$3"));
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
    async getAll_machine() {
      await service
        .getAll_machine()
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
    async getAllDriver() {
      await service
        .getUserType('driver')
        .then((response) => {
          this.driver_item = response
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
    handleOk(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault();
      // Trigger submit handler
      this.handleSubmit();
    },
    handleSubmit() {
      // Exit when the form isn't valid
      if (!this.checkFormValidity()) {
        return;
      }
      // Push the name to submitted names
      if (this.action==='A'){
        this.booking_reserve();
      }
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
      this.form.driver_id = "0";
      this.form.mobile_id = "0";
      this.form.job_title = "Reserve Booking";
      this.form.location = "";
      this.form.hospital_id = "";
      this.form.contact_person = "";
      this.form.contact_mobile = "";
      this.form.detail = "";
      this.cus_id="";
    },
    async booking_reserve() {
      const body = {
        machine_id: this.form.machine_id,
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
        reservation_by: this.$session.exists()?this.$session.get('name'):"",
        update_by: this.$session.exists()?this.$session.get('name'):"",
        cus_id:this.getCusID()
      };
      await service
        .booking_reserve_customer(body)
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
          } else {
            this.$swal({
              position: "top-end",
              icon: "warning",
              title: "Alert!",
              text: res.message,
              showConfirmButton: false,
              timer: 2000,
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
      async booking_edit(){
      const body = {
        machine_id: this.form.machine_id,
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
        reservation_by: this.$session.exists()?this.$session.get('name'):"",
        update_by: this.$session.exists()?this.$session.get('name'):"",
        cus_id:this.getCusID()
      };
       await service.update_booking_customer(this.book_id,body)
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
   async cancel_data(id){
     this.$swal({
        title: 'Are you sure?',
        text: "คุณต้องการยกเลิก Booking No : "+id+" หรือไม่?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
             service.cancel_booking_customer(id)
            .then((res) => {
              if (res.success) {
                 this.$swal('Deleted!',res.message,'success')
                this.getAllBooking()
              }else{
                  this.$swal('Deleted!',res.message,'warning')
              }
            })
        }
      })
   }
  }
};
</script>
<style></style>
