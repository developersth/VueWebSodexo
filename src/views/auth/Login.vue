<template>
<div class="Login">
      <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-12">
          <div class="col-sm-6">
            <h1>Login</h1>
          </div><!-- /.col -->
          <div class="col-sm-4">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active">Login</li>
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
     <div class="col-lg-5">
            <!-- general form elements -->
                 <div class="card card-outline card-primary">
                <div class="card-header text-center">
                  <a href="#" class="h1"><b>{{ $t('auth.title') }}</b></a>
             </div>
              <!-- /.card-header -->
              <!-- form start -->
                           <form  @submit.prevent="users_login()">
                <div class="card-body">
              <div class="input-group mb-3">
                <input type="text" class="form-control" v-model="form.username" placeholder="Email or Username">
                <div class="input-group-append">
                  <div class="input-group-text">
                    <span class="fas fa-envelope"></span>
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
                  <div class="icheck-primary">
                    <input type="checkbox" id="remember">
                    <label for="remember">
                      Remember Me
                    </label>
                  </div>
                  <p class="mb-0">
               <router-link to="register"  class="text-center">Register</router-link>
        </p>
                </div>
          <!-- /.col -->
        </div>
     </div>
                <!-- /.card-body -->
                <div class="card-footer">
                  <button type="submit" class="btn btn-primary float-right">Login</button>
                    <button  class="btn btn-danger" @click="logout">Log out</button>
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
import api_service from '@/service/api_service';
const service = new api_service();
export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
    };
  },
  beforeCreate: function () {
     this.$swal(this.$session.get('email'));
     //console.log(this.$session.getAll())
      //console.log(this.$session)
/*     if (!this.$session.exists()) {
      this.$router.push('/')
    } */
  },
  mounted(){

  },
  methods: {
    async users_login() {
      const body ={
        username:this.form.username,
        password:this.form.password
      }
        await service.users_login(body)
         .then(res =>  {
            if (res.success) {
             this.$session.start()
             this.$session.set('jwt', res.token)
             this.$session.set('username', res.username)
             this.$session.set('email', res.email)
             this.$session.set('mobile', res.mobile)
             this.$swal({position: "top-end",icon: "success",title: "Login",text: res.message,showConfirmButton: false,timer: 3000});
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