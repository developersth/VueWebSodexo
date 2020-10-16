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
                  <a href="#" class="h3"><b>Add Booking</b></a>
             </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-sm-6">

                      <!-- text input -->
                      <div class="form-group">
                        <label>Reservation Date</label>
                          <div class="input-group date">
                         <date-picker lang="th" type="date" v-model="form.reservation_date" format="DD-MM-YYYY"></date-picker>
                          <div class="input-group-append" data-target="#reservationdate" data-toggle="datetimepicker">
                        </div>
                    </div>
                      </div>
                    </div>
                      <div class="col-sm-6">
                      <div class="form-group">
                    <label>Time picker:</label>

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
                      <div class="form-group">
                        <label>Matchin</label>
                        <input type="text" class="form-control" v-model="form.machine_id" placeholder="Select Matchin">
                      </div>
                    </div>
                      <div class="col-sm-6">
                      <!-- text input -->
                      <div class="form-group">
                        <label>Agsing To</label>
                        <input type="text" class="form-control" v-model="form.user_id" placeholder="Agsing To ...">
                      </div>
                    </div>
              </div>
            <div class="row">
                    <div class="col-sm-12">
                      <!-- text input -->
                      <div class="form-group">
                        <label>Job Title</label>
                        <input type="text" class="form-control" v-model="form.job_title" placeholder="Job Title ...">
                      </div>
                    </div>
                      <div class="col-sm-12">
                      <!-- text input -->
                      <div class="form-group">
                        <label>Location</label>
                        <input type="text" class="form-control" v-model="form.location" placeholder="Location ...">
                      </div>
                    </div>
              </div>
            <div class="row">
                      <div class="col-sm-12">
                      <!-- text input -->
                      <div class="form-group">
                        <label>Hospital Name</label>
                        <input type="text" class="form-control" v-model="form.hospital_id" placeholder="Hospital or Clinic">
                      </div>
                    </div>
              </div>
            <div class="row">
                    <div class="col-sm-6">
                      <!-- text input -->
                      <div class="form-group">
                        <label>Contact Name</label>
                        <input type="text" class="form-control" v-model="form.contact_person" placeholder="Contact Name ...">
                      </div>
                    </div>
                      <div class="col-sm-6">
                      <!-- text input -->
                          <!-- phone mask -->
                <div class="form-group">
                  <label>Contack Mobile:</label>

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
                    <div class="col-sm-6">
                      <!-- text input -->
                      <div class="form-group">
                        <label>Text</label>
                        <input type="text" class="form-control" placeholder="Enter ...">
                      </div>
                    </div>
                      <div class="col-sm-6">
                      <!-- text input -->
                      <div class="form-group">
                        <label>Note</label>
                        <input type="text" class="form-control" v-model="form.detail" placeholder="Note ...">
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
import bookingService from '@/service/booking_service';
const service = new bookingService();
export default {
  data() {
    return {
      date: new Date(),  
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
        reservation_time: new Date(),
        reservation_by: "",
        update_by: "",
      },
    };
  },
  mounted: function() {

  },
  methods: {
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
        reservation_by: "admin",
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
  }
  
}
</script>

<style>

</style>