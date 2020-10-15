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
            <div class="card card-success">
              <div class="card-header">
                <h3 class="card-title">Booking</h3>
              </div>
            <div class="card-body">
            <div class="row">
                    <div class="col-sm-6">
                      <!-- text input -->
                      <div class="form-group">
                        <label>Matchin</label>
                        <input type="text" class="form-control" placeholder="Select Matchin">
                      </div>
                    </div>
                      <div class="col-sm-6">
                      <!-- text input -->
                      <div class="form-group">
                        <label>Agsing To</label>
                        <input type="text" class="form-control" placeholder="Agsing To ...">
                      </div>
                    </div>
              </div>
            <div class="row">
                    <div class="col-sm-6">
                      <!-- text input -->
                      <div class="form-group">
                        <label>Job Title</label>
                        <input type="text" class="form-control" placeholder="Job Title ...">
                      </div>
                    </div>
                      <div class="col-sm-6">
                      <!-- text input -->
                      <div class="form-group">
                        <label>Location</label>
                        <input type="text" class="form-control" placeholder="Location ...">
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
                        <label>Hospital Name</label>
                        <input type="text" class="form-control" placeholder="Hospital or Clinic">
                      </div>
                    </div>
              </div>
            <div class="row">
                    <div class="col-sm-6">
                      <!-- text input -->
                      <div class="form-group">
                        <label>Contact Name</label>
                        <input type="text" class="form-control" placeholder="Contact Name ...">
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
                    <input type="text" class="form-control" data-inputmask='"mask": "(999) 999-9999"' data-mask>
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
                        <input type="text" class="form-control" placeholder="Note ...">
                      </div>
                    </div>
              </div>
                 <div class="row">
                    <div class="col-sm-6">
                      <!-- text input -->
                      <div class="form-group">
                        <label>Reservation Date</label>
                        <input type="text" class="form-control" placeholder="Reservation Date ...">
                      </div>
                    </div>
                      <div class="col-sm-6">
                      <!-- text input -->
                      <div class="form-group">
                        <label>Reservation Time</label>
                        <input type="text" class="form-control" placeholder="Reservation Time ...">
                      </div>
                    </div>
              </div>
              <button class="btn btn-primary" @click="booking_reserve()"></button>
             </div>
            </div>
          </div>
    <div class="col-md-6">
            <!-- general form elements -->
            <div class="card card-danger">
              <div class="card-header">
                <h3 class="card-title">Map</h3>
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
        reservation_date: "",
        reservation_time: "",
        reservation_by: "",
        update_by: "",
      },
    };
  },
  methods: {
    async booking_reserve() {
      const body ={
        machine_id: 2,
        user_id: 5,
        job_title: "dfd",
        location: "dfdfd",
        hospital_id: 1,
        hospital_name: "โรงพยาบาลพยาไท",
        contact_person: "กฤษดี สาเทวิน",
        contact_mobile: "0845908297",
        detail: "test",
        reservation_date: "2020-12-31",
        reservation_time: "10:00:00",
        reservation_by: "test",
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