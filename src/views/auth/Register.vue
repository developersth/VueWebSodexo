<template>
<div class="Register">
      <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-12">
          <div class="col-sm-6">
            <h1>Register</h1>
          </div><!-- /.col -->
          <div class="col-sm-4">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active">Register</li>
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
     <div class="col-md-6">
            <!-- general form elements -->
            <div class="card card-outline card-primary">
                <div class="card-header text-center">
                  <a href="../../index2.html" class="h1"><b>{{ $t('auth.regis_title') }}</b></a>
             </div>
              <!-- /.card-header -->
              <!-- form start -->
             <form  @submit.prevent="users_register()">
                <div class="card-body">
              <div class="input-group mb-3">
                <input type="text" class="form-control" v-model="form.username" placeholder="Username">
                <div class="input-group-append">
                  <div class="input-group-text">
                    <span class="fas fa-user"></span>
                  </div>
                </div>
              </div>
             <div class="input-group mb-3">
                <input type="email" class="form-control" v-model="form.email" placeholder="Email">
                <div class="input-group-append">
                  <div class="input-group-text">
                    <span class="fas fa-envelope"></span>
                  </div>
                </div>
              </div>
                  <div class="input-group mb-3">
                <input type="number" class="form-control" v-model="form.mobile" placeholder="Mobile">
                <div class="input-group-append">
                  <div class="input-group-text">
                    <span class="fas fa-mobile"></span>
                  </div>
                </div>
              </div>
              <div class="input-group mb-3">
                <input type="password" class="form-control" v-model="form.password" placeholder="Password">
                <div class="input-group-append">
                  <div class="input-group-text">
                    <span class="fas fa-lock"></span>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-8">
                  <p class="mb-9 pull-right">
            <router-link to="login"  class="pull-right">Login</router-link>
        </p>
                </div>
          <!-- /.col -->
        </div>
     </div>
                <!-- /.card-body -->
                <div class="card-footer">
                  <button type="submit" class="btn btn-primary float-right">Register</button>
                </div>
           </form>
            </div>
          </div>

        </div>
        <!-- /.row -->
      </div><!-- /.container-fluid -->
    </div>
</div>

</template>

<script>
//import {HTTP} from "@/service/axios.js";
//const env = require('@/config/env');
import authService from '@/service/auth_service';
const service = new authService();
export default {
  data() {
    return {
      form: {
        username: "",
        email:"",
        mobile:"",
        password: "",
      },
    };
  },
  mounted(){

  },
  methods: {
    async users_register() {
      const body ={
        username:this.form.username,
        email:this.form.email,
        mobile:this.form.mobile,
        password:this.form.password
      }
        await service.users_register(body)
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
    logout: function () {
      this.$session.destroy()
      this.$router.push('/')
    }
    },

};
</script>

<style>
</style>