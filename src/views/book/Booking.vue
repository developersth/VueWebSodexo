<template>
<div class="Booking">
      <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-12">
          <div class="col-sm-6">
            <h1>Booking</h1>
          </div><!-- /.col -->
          <div class="col-sm-4">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active">Booking</li>
            </ol>
          </div><!-- /.col -->
        </div><!-- /.row -->
      </div><!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->

    <!-- Main content -->
    <div class="content">
      <div class="container-fluid">
        <div class="row">
     <div class="col-md-6">
            <!-- general form elements -->
            <div class="card card-outline card-success">
                     <div class="card-header text-center">
                  <a href="#" class="h3"><b>{{ $t('booking.title') }}</b></a>
             </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-sm-6">

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
                      <div class="col-sm-6">
                      <div class="form-group">
                    <label>{{ $t('booking.reservation_time') }} :</label>

                    <div class="input-group date" id="timepicker" data-target-input="nearest">
                    <date-picker lang="en" type="time" v-model="form.reservation_time" format="HH:mm"></date-picker>
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
                      <select class="form-control" v-model="form.machine_id">
                        <option  value="">-- select Machine --</option>
                        <option v-for="(items, index) in machine_item" v-bind:key="index" :value="items._id" >{{items._id+" - "+items.machine_name}}</option>
                      </select>

                </div>
                    </div>
                      <div class="col-sm-6">
                      <!-- text input -->
                      <div class="form-group">
                        <label>{{ $t('booking.assing_to') }}</label>
                          <select class="form-control" v-model="form.user_id">
                        <option  value="">-- select Employee --</option>
                        <option v-for="(items, index) in users_item" v-bind:key="index" :value="items._id" >{{items._id+" - "+items.username}}</option>
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
               
              <button class="btn btn-primary float-right" @click="booking_reserve()">Submit</button>
             </div>
            </div>
          </div>
    <div class="col-md-6">
            <!-- general form elements -->
            <div class="card card-outline card-danger">
              <div class="card-header text-center">
                  <a href="#" class="h3"><b>MAP View</b></a>
             </div>
              <!-- /.card-header -->
              <!-- form start -->
        
            </div>
          </div>
        </div>
        <!-- /.row -->
      </div><!-- /.container-fluid -->
    </div>
</div>
</template>

<script>
import apiService from '@/service/api_service';
const service = new apiService();
export default {
  data() {
    return {
      date: new Date(),
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
        reservation_time: "",
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
        reservation_date: this.form.reservation_date,
        reservation_time: this.form.reservation_time,
        reservation_by: this.$session.get('email'),
        update_by: "test",
      }
        await service.booking_reserve(body)
         .then(res =>  {
            if (res.success) {
             this.$swal({position: "top-end",icon: "success",title: "Register",text: res.message,showConfirmButton: false,timer: 3000});
            }else{
              this.$swal({position: "top-end",icon: "warning",title: "Information",text: res.message,showConfirmButton: false,timer: 3000});  
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
      }
      }
  }
  
}
</script>

<style>

</style>