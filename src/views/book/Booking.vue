<template>
   <div class="Booking">
      <!-- Content Header (Page header) -->
      <div class="content-header">
         <div class="container-fluid">
            <div class="row mb-12">
               <div class="col-sm-6">
                  <h1>Booking</h1>
               </div>
               <!-- /.col -->
               <div class="col-sm-6">
                  <ol class="breadcrumb float-sm-right">
                     <li class="breadcrumb-item"><a href="#">Home</a></li>
                     <li class="breadcrumb-item active">Booking</li>
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
              <div>
</div>
               <div class="col-md-12">
                  <div class="card card-outline card-primary">
                     <div class="card-header">
                       <div class="form-row">
                        <div class="col">
                           <a href="#" class="h3"><b>{{ $t('booking.title') }}</b></a>
                           <span>{{ new Date() | moment("dddd, MMMM Do YYYY") }}</span>
                        </div>
                        <div class="col text-center">
                          <button type="button" data-toggle="modal" @click="$bvModal.show('modal-booking')" class="btn btn-success text-center"><i class="fas fa-plus"> Add Booking</i></button>
                        </div>
                        <div class="col text-right">
                          <div class="card-tools">
                           <button type="button" class="btn btn-tool" data-card-widget="card-refresh" data-source="widgets.html" data-source-selector="#card-refresh-content" data-load-on-init="false"><i class="fas fa-sync-alt"></i></button>
                           <button type="button" class="btn btn-tool" data-card-widget="maximize"><i class="fas fa-expand"></i></button>
                           <button type="button" class="btn btn-tool" data-card-widget="collapse"><i class="fas fa-minus"></i></button>
                           <button type="button" class="btn btn-tool" data-card-widget="remove"><i class="fas fa-times"></i></button>
                         </div>
                        </div>
                      </div>
                          

                     </div>
                     <div class="card-body">
                        <div class="row">
                           <div class="col-md-12">
                              <div class="row">
                                 <div class="form-group col-sm-4 col-md-3 padding-small">
                                    <label>Status</label>
                                    <select id="booking_status" class="form-control">
                                       <option value="">===All Jobs===</option>
                                       <option value="9">Unassigned</option>
                                       <option value="00">Assigned</option>
                                       <option value="2">Accepted</option>
                                       <option value="3">Checked in</option>
                                       <option value="4">Completed</option>
                                    </select>
                                 </div>
                                 <div class="form-group col-sm-4 col-md-3 padding-small">
                                    <label>From</label>
                                    <div class="input-group date">
                                       <input class="form-control" size="16" type="text" id="start_date" name="start_date" placeholder="DD/MM/YYY" value="">
                                       <span class="input-group-addon btn btn-primary"><span class="glyphicon glyphicon-th"></span></span>
                                    </div>
                                 </div>
                                 <div class="form-group col-sm-4 col-md-3 padding-small">
                                    <label>To</label>
                                    <div class="input-group date">
                                       <input class="form-control" size="16" type="text" id="end_date" name="end_date" placeholder="DD/MM/YYY" value="">
                                       <span class="input-group-addon btn btn-primary"><span class="glyphicon glyphicon-th"></span></span>
                                    </div>
                                 </div>
                                 <div class="form-group col-sm-4 col-md-3 padding-small">
                                    <label>Message</label>
                                    <div class="input-group">
                                       <input class="form-control" type="text" id="txtsearch" placeholder="ค้นหา..." autofocus="true" value="">
                                       <span class="input-group-btn">
                                       <button type="button" class="btn btn-primary" onclick="load_div_grid()"><i class="fa fa-search"></i> ค้นหา</button>
                                       </span>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div class="col-md-12">
                              <div style="white-space: nowrap; overflow-x: auto;">
                                 <table class="table table-hover">
                                    <thead class="bg-primary">
                                       <tr>
                                          <th scope="col">#</th>
                                          <th scope="col">Booking No.</th>
                                          <th scope="col">Reservation Date</th>
                                          <th scope="col">Title</th>
                                          <th scope="col">Driver</th>
                                          <th scope="col">Technical</th>
                                          <th scope="col">Reservation Type</th>
                                          <th scope="col">#</th>
                                       </tr>
                                    </thead>
                                    <tbody>
                                       <tr>
                                          <th scope="row">1</th>
                                          <td>1522</td>
                                          <td>Otto</td>
                                          <td>@mdo</td>
                                          <td>Mark</td>
                                          <td>Otto</td>
                                          <td>@mdo</td>
                                          <td><button class="btn btn-info btn-sm"><i class="fas fa-align-left"> Show</i> </button></td>
                                       </tr>
                                       <tr>
                                          <th scope="row">2</th>
                                          <td>Jacob</td>
                                          <td>Thornton</td>
                                          <td>@fat</td>
                                       </tr>
                                       <tr>
                                          <th scope="row">3</th>
                                          <td colspan="2">Larry the Bird</td>
                                          <td>@twitter</td>
                                       </tr>
                                    </tbody>
                                 </table>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="col-md-12">
                  <!-- general form elements -->
                  <div class="card card-outline card-success">
                     <div class="card-header text-center">
                        <a href="#" class="h3"><b>Map View</b></a>
                     </div>
                              <div class="card-body">
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
  <b-modal id="modal-booking" header-bg-variant="primary" size="lg" title="Add Booking"    @ok="handleOk" no-close-on-backdrop>
      <form ref="form" @submit.prevent="handleSubmit">
                        <div class="row">
                           <div class="col-md-4">
                              <!-- text input -->
                              <div class="form-group">
                                 <label>{{ $t('booking.reservation_date') }} :</label>
                                 <div class="input-group date">
                                    <date-picker lang="th" type="date" v-model="form.reservation_date" format="DD-MM-YYYY"></date-picker>
                                    <div class="input-group-append" data-target="#reservationdate" data-toggle="datetimepicker">
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div class="col-sm-4">
                              <div class="form-group">
                                 <label>{{ $t('booking.reservation_time_start') }} :</label>
                                 <div class="input-group date" id="timepicker" data-target-input="nearest">
                                    <date-picker lang="en" type="time" v-model="form.reservation_time_start" format="HH:mm"></date-picker>
                                    <div class="input-group-append" data-target="#timepicker" data-toggle="datetimepicker">
                                    </div>
                                 </div>
                                 <!-- /.input group -->
                              </div>
                           </div>
                           <div class="col-sm-4">
                              <div class="form-group">
                                 <label>{{ $t('booking.reservation_time_end') }} :</label>
                                 <div class="input-group date" id="timepicker" data-target-input="nearest">
                                    <date-picker lang="en" type="time" v-model="form.reservation_time_end" format="HH:mm"></date-picker>
                                    <div class="input-group-append" data-target="#timepicker" data-toggle="datetimepicker">
                                    </div>
                                 </div>
                                 <!-- /.input group -->
                              </div>
                           </div>
                        </div>
                        <div class="row">
                           <div class="col-sm-6">
                              <!-- text input -->
                              <div class="form-group" data-select2-id="47">
                                 <label>{{ $t('booking.machine') }}</label>
                                 <div class="input-group mb-3">
                                    <select class="form-control" v-model="form.machine_id">
                                       <option  value="">-- select Machine --</option>
                                       <option v-for="(items, index) in machine_item" v-bind:key="index" :value="items._id" >{{items.machine_name}}</option>
                                    </select>
                                    <div class="input-group-append">
                                       <button class="btn btn-primary"  @click.prevent="showModalMachine">
                                       <i class="fas fa-search"></i>
                                       </button>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div class="col-sm-6">
                              <!-- text input -->
                              <div class="form-group">
                                 <label>{{ $t('booking.assing_to') }}</label>
                                 <select class="form-control" v-model="form.user_id">
                                    <option  value="">-- select Driver --</option>
                                    <option v-for="(items, index) in users_item" v-bind:key="index" :value="items._id" >{{items.name}}</option>
                                 </select>
                              </div>
                           </div>
                        </div>
                        <div class="row">
                           <div class="col-sm-12">
                              <!-- text input -->
                              <div class="form-group">
                                 <label>{{ $t('booking.job_title') }}</label>
                                 <input type="text" class="form-control" v-model="form.job_title" :placeholder="$t('booking.job_title')">
                              </div>
                           </div>
                           <div class="col-sm-12">
                              <!-- text input -->
                              <div class="form-group">
                                 <label>{{ $t('booking.location') }}</label>
                                 <input type="text" class="form-control" v-model="form.location" :placeholder="$t('booking.location')">
                              </div>
                           </div>
                        </div>
                        <div class="row">
                           <div class="col-sm-12">
                              <!-- text input -->
                              <div class="form-group">
                                 <label>{{ $t('booking.hospital_name') }}</label>
                                 <select class="form-control" v-on:change="get_hospital_name()" v-model="form.hospital_id">
                                    <option  value="">-- Select Hospital --</option>
                                    <option v-for="(items, index) in hospital_item" v-bind:key="index" :value="items._id" >{{items.hospital_name}}</option>
                                 </select>
                              </div>
                           </div>
                        </div>
                        <div class="row">
                           <div class="col-sm-6">
                              <!-- text input -->
                              <div class="form-group">
                                 <label>{{ $t('booking.contact_person') }}</label>
                                 <input type="text" class="form-control" v-model="form.contact_person" :placeholder="$t('booking.contact_person')">
                              </div>
                           </div>
                           <div class="col-sm-6">
                              <!-- text input -->
                              <!-- phone mask -->
                              <div class="form-group">
                                 <label>{{ $t('booking.contact_mobile') }}</label>
                                 <div class="input-group">
                                    <div class="input-group-prepend">
                                       <span class="input-group-text"><i class="fas fa-phone"></i></span>
                                    </div>
                                    <input type="text" class="form-control" v-model="form.contact_mobile" data-inputmask='"mask": "(999) 999-9999"' data-mask>
                                 </div>
                                 <!-- /.input group -->
                              </div>
                           </div>
                        </div>
                        <div class="row">
                           <div class="col-sm-12">
                              <!-- text input -->
                              <div class="form-group">
                                 <label>{{ $t('booking.note') }}</label>
                                 <textarea type="text" class="form-control" v-model="form.detail" :placeholder="$t('booking.note')"></textarea>
                              </div>
                           </div>
                        </div>
      </form>
  </b-modal>

   <b-modal id="modal-machine" size="lg" title="Machine List">
          <table class="table table-hover">
                        <tbody>
                           <tr v-for="(item,index) in machine_item" v-bind:key="index">
                              <td style="width:50px"><img :src="HOST_URL+item.url" height="120" width="160" />
                              </td>
                              <td>
                                 <div>
                                    <h6>Name : {{item.machine_name}}</h6>
                                 </div>
                                 <div>
                                    <h6>Model : {{item.model}}</h6>
                                 </div>
                                 <div>
                                  <div v-if="item.status===1"> <h6 class="badge bg-success">Status: Can be Used</h6></div>
                                    <div v-else> <h6 class="badge bg-danger">Status:Stop Using</h6></div>
                                 </div>
                              </td>
                              <td style="text-align: right;">
                                 
                                 <button class="btn btn-primary mt-4 px-2"><i class="fas fa-check-circle"> Select</i></button>
                              </td>
                           </tr>
                        </tbody>
                     </table>
   </b-modal>
  </div>
</template>
<script>
   import apiService from '@/service/api_service';
   const env = require('@/config/env');
   const service = new apiService();
   export default {
     data() {
       return {
         validateNames: [],
         HOST_URL:env.HOST_URL,
         machine_item:{},
         users_item:{},
         hospital_item:{},  
         form: {
           machine_id: "",
           user_id: "",
           job_title: "",
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
     mounted: function() {
       this.getAll_machine();
       this.getAll_users();
       this.getAll_hospital()
     },
     methods: {
  showModalBooking() {

    },
    hideModalBooking() {

    },
    showModalMachine() {
      this.getAll_machine();
      this.$bvModal.show('modal-machine');
    },
    hideModalMachine() {

    },
     format_time(date){
       var hours = date.getHours();
       var minutes = date.getMinutes();
       return  hours+':'+minutes+':00';
     },
     format_date(date){
       var dd = String(date.getDate()).padStart(2, '0');
       var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
       var yyyy = date.getFullYear();
       return  yyyy+'-'+mm+'-'+dd;
     },
      format_date_time(date){
       var dd = String(date.getDate()).padStart(2, '0');
       var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
       var yyyy = date.getFullYear();
       var hours = date.getHours();
       var minutes = date.getMinutes();
       var seconds = date.getSeconds();
       return  yyyy+'-'+mm+'-'+dd +' '+ hours + ':'+minutes+ ':'+ seconds;
     },
     async  getAll_machine(){
     await service.getAll_machine()
          .then((response) => {
              this.machine_item=response
           })
           .catch(e => {
               console.log(e);
               this.$swal({position: "top-end",icon: "warning",title: "warning",text: e,showConfirmButton: false,timer: 2000});
           });
       },
     async  getAll_users(){
     await service.getAll_users()
          .then((response) => {
              this.users_item=response
           })
           .catch(e => {
               console.log(e);
               this.$swal({position: "top-end",icon: "warning",title: "warning",text: e,showConfirmButton: false,timer: 2000});
           });
       },
     async  getAll_hospital(){
     await service.getAll_hospital()
          .then((response) => {
              this.hospital_item=response
           })
           .catch(e => {
               console.log(e);
               this.$swal({position: "top-end",icon: "warning",title: "warning",text: e,showConfirmButton: false,timer: 2000});
           });
       },
      handleOk(bvModalEvt) {
        // Prevent modal from closing
        bvModalEvt.preventDefault()
        // Trigger submit handler
        this.handleSubmit()
      },
      handleSubmit() {
        // Exit when the form isn't valid
        if (!this.checkFormValidity()) {
          return
        }
        // Push the name to submitted names
        this.booking_reserve()
        // Hide the modal manually
        this.$nextTick(() => {
          this.$bvModal.hide('modal-machine');
        })
      },
      checkFormValidity() {
        this.validateNames=[]
        if (!this.form.reservation_date) this.validateNames.push({message:'กรุณากรอก วันที่จองด้วยครับ!'})
         //console.log(this.$moment(dateNow).format("dddd, MMMM Do YYYY"))
         console.log(this.$moment(this.form.reservation_date))
          console.log(this.$moment(new Date()))
        if (this.$moment(this.form.reservation_date).format("dddd, MMMM Do YYYY")<this.$moment(new Date()).format("dddd, MMMM Do YYYY")) this.validateNames.push({message:'ไม่สามารถจองย้อนหลังได้!'})
        if (!this.form.reservation_time_start) this.validateNames.push({message:"กรุณากรอก เวลาเริ่มจองด้วยครับ!"})
        if (!this.form.reservation_time_end) this.validateNames.push({message:"กรุณากรอก เวลาสิ้นสุดการจองด้วยครับ!"})
        if (this.form.reservation_time_start && this.form.reservation_time_end){
            if (this.format_time(this.form.reservation_time_start)>this.format_time(this.form.reservation_time_end)) this.validateNames.push({message:"เวลาเริ่มต้นต้อง น้อยกว่าเท่ากับ เวลาสิ้นสุดการจอง!"})
        }
        if (!this.form.contact_person) this.validateNames.push({message:"กรุณากรอก คนที่ติดต่อด้วยครับ!"})
        if (!this.form.contact_mobile) this.validateNames.push({message:"กรุณากรอก เบอร์คนที่ติดต่อด้วยครับ!"})
        if (this.validateNames){
           let message='';
           for (let i = 0; i < this.validateNames.length; i++) {
              message +=this.validateNames[i].message +'<br />';
            }
          this.$swal({position: "top-end",icon: "warning",title: "Information",html: message,showConfirmButton: false,timer: 2000}); 
          return false
        }else{
           return true
        } 

      },
       async booking_reserve() {
         const body ={
           machine_id: this.form.machine_id,
           user_id: this.form.user_id,
           job_title: this.form.job_title,
           location: this.form.location,
           hospital_id: this.form.hospital_id,
           hospital_name: this.form.hospital_name,
           contact_person: this.form.contact_person,
           contact_mobile: this.form.contact_mobile,
           detail: this.form.detail,
           reservation_date: this.format_date(this.form.reservation_date),
           reservation_time_start: this.format_time(this.form.reservation_time_start),
           reservation_time_end: this.format_time(this.form.reservation_time_end),
           reservation_by: this.$session.get('email'),
           update_by: "test",
         }
           await service.booking_reserve(body)
            .then(res =>  {
               if (res.success) {
                this.$swal({position: "top-end",icon: "success",title: "Register",text: res.message,showConfirmButton: false,timer: 1500});
               }else{
                 this.$swal({position: "top-end",icon: "warning",title: "Information",text: res.message,showConfirmButton: false,timer: 1500});  
               }
               
           })
           .catch(e => {
               console.log(e);
               this.$swal({position: "top-end",icon: "warning",title: "warning",text: e,showConfirmButton: false,timer: 3000});
           });
   
           },
         get_hospital_name() {
         var id = this.form.hospital_id;
          var objIndex = this.hospital_item.findIndex(obj => obj._id == id);
           if (objIndex != -1) {
           this.form.hospital_name= this.hospital_item[objIndex].hospital_name
           this.form.location= this.hospital_item[objIndex].address
         }
         }
     }
     
   }
</script>
<style>
</style>