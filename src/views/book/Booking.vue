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
        <div class="row justify-content-md-center">
               <div class="col-md-12">
              <div class="card card-outline card-primary">
                     <div class="card-header text-center">
                     <a href="#" class="h3"><b>{{ $t('booking.title') }}</b></a>
                           <div class="card-tools">
                  <button type="button" class="btn btn-tool" data-card-widget="card-refresh" data-source="widgets.html" data-source-selector="#card-refresh-content" data-load-on-init="false"><i class="fas fa-sync-alt"></i></button>
                  <button type="button" class="btn btn-tool" data-card-widget="maximize"><i class="fas fa-expand"></i></button>
                  <button type="button" class="btn btn-tool" data-card-widget="collapse"><i class="fas fa-minus"></i></button>
                  <button type="button" class="btn btn-tool" data-card-widget="remove"><i class="fas fa-times"></i></button>
                </div>
                   </div>
             
            <div class="card-body">
              <div class="row">
                    <div class="col-md-12">
                     <div class="row">
                        <div class="form-group col-sm-4 col-md-3 padding-small">
                            <label>สถานะ</label>
                            <select id="booking_status" class="form-control">
                                <option value="">===ทุกสถานะ===</option>
                                <option value="9">อยู่ระหว่างทำรายการ</option>
                                <option value="00">รออนุมัติ/อ่านแล้ว</option>
                                <option value="2">อนุมัติ</option>
                                <option value="3">ไม่อนุมัติ</option>
                                <option value="4">ยกเลิก</option>
                                <option value="5">ส่งคืนรถแล้ว</option>
                                <option value="6" selected="">รับคืนรถแล้ว</option>
                            </select>
                        </div>
                        <div class="form-group col-sm-4 col-md-3 padding-small">
                            <label>จากวันที่ใช้รถ</label>
                            <div class="input-group date">
                                <input class="form-control" size="16" type="text" id="start_date" name="start_date" placeholder="วว/ดด/ปี พ.ศ." value="">
                                <span class="input-group-addon btn btn-primary"><span class="glyphicon glyphicon-th"></span></span>
                            </div>
                        </div>
                        <div class="form-group col-sm-4 col-md-3 padding-small">
                            <label>ถึงวันที่</label>
                            <div class="input-group date">
                                <input class="form-control" size="16" type="text" id="end_date" name="end_date" placeholder="วว/ดด/ปี พ.ศ." value="">
                                <span class="input-group-addon btn btn-primary"><span class="glyphicon glyphicon-th"></span></span>
                            </div>
                        </div>
                        <div class="form-group col-sm-4 col-md-3 padding-small">
                            <label>ทะเบียน</label>
                            <div class="input-group">
                                <input class="form-control" type="text" id="txtsearch" placeholder="ค้นหา..." autofocus="true" value="">
                                <span class="input-group-btn">
                                    <button type="button" class="btn btn-primary" onclick="load_div_grid()"><i class="fa fa-search"></i> ค้นหา</button>
                                </span>
                            </div>
                        </div>
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
                  <a href="#" class="h3"><b>{{ $t('booking.title') }}</b></a>
             </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-md-6">

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
                  <div class="input-group mb-3">
                    <select class="form-control" v-model="form.machine_id">
                        <option  value="">-- select Machine --</option>
                        <option v-for="(items, index) in machine_item" v-bind:key="index" :value="items._id" >{{items.machine_name}}</option>
                      </select>
                  <div class="input-group-append">
                    <button class="btn btn-primary" data-toggle="modal" data-target="#modal-machine">
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
               
              <button class="btn btn-primary float-right" @click="booking_reserve()">Submit</button>
             </div>
            </div>
          </div>
        </div>
        <!-- /.row -->
      </div><!-- /.container-fluid -->
<!-- Modal -->

<!-- Modal -->
<div class="modal fade" id="modal-machine" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
<table class="table table-hover">
  <tbody>
    <tr>
      <td style="width:50px"><img src="/dist/img/machine/no-photo-icon-28.jpg" height="150" width="200" />
      </td>
      <td>
        <div><h6>MED 152422</h6></div>
        <div><h6>MED 152422</h6></div>
        <div><h6>MED 152422</h6></div>
        <div><h6 class="badge bg-success">Status: Not Use</h6></div>
        
      </td>
      <td style="text-align: right;">
        <button class="btn btn-primary mt-4 px-2"><i class="fas fa-check-circle"> Select</i></button>
      </td>
    </tr>
      <tr>
      <td style="width:50px"><img src="/dist/img/machine/no-photo-icon-28.jpg" height="150" width="200" />
      </td>
      <td>
        <div><h6>MED 152422</h6></div>
        <div><h6>MED 152422</h6></div>
        <div><h6>MED 152422</h6></div>
        <div><h6 class="badge bg-success">Status: Not Use</h6></div>
        
      </td>
      <td style="text-align: right;">
        <button class="btn btn-primary mt-4 px-2"><i class="fas fa-check-circle"> Select</i></button>
      </td>
    </tr>
      <tr>
      <td style="width:50px"><img src="/dist/img/machine/no-photo-icon-28.jpg" height="150" width="200" />
      </td>
      <td>
        <div><h6>MED 152422</h6></div>
        <div><h6>MED 152422</h6></div>
        <div><h6>MED 152422</h6></div>
        <div><h6 class="badge bg-success">Status: Not Use</h6></div>
        
      </td>
      <td style="text-align: right;">
        <button class="btn btn-primary mt-4 px-2"><i class="fas fa-check-circle"> Select</i></button>
      </td>
    </tr>
  </tbody>
</table>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
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
  show() {
    this.$modal.show('modal-login')
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
        reservation_date: this.format_date(this.form.reservation_date),
        reservation_time: this.format_time(this.form.reservation_time),
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
        this.form.location= this.hospital_item[objIndex].address
      }
      }
  }
  
}
</script>

<style>

</style>