<template>
  <div id="users">
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-12">
          <div class="col-sm-6">
            <h1>Users</h1>
          </div>
          <!-- /.col -->
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active">Users</li>
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
            <div class="card card-outline card-danger">
              <div class="card-header">
                <div class="form-row">
                  <div class="col">
                    <a href="#" class="h3"><b>ข้อมูลผู้ใช้งาน</b></a>
                  </div>
                  <div class="col text-center">
                    <button
                      type="button"
                      data-toggle="modal"
                      class="btn btn-success text-center"
                      @click="showModal"
                    >
                      <i class="fas fa-plus"> Add Users</i>
                    </button>
                  </div>
                  <div class="col text-right">
                    <div class="card-tools">
                      <button
                        type="button"
                        class="btn btn-tool"
                        data-card-widget="card-refresh"
                        data-source="widgets.html"
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
                    <div style="white-space: nowrap; overflow-x: auto">
                    <table class="table">
                      <thead>
                           <tr>
                                <th>#</th>
                                <th class="ng-binding">ชื่อ</th>
                                <th class="ng-binding">ชื่อเข้าใช้งาน</th>
                                <th class="ng-binding">เบอร์โทร </th>
                                <th class="ng-binding">อีเมล์</th>
                                <th class="ng-binding">ประเภท</th>
                                <th class="ng-binding"> เข้าใช้งานล่าสุด</th>
                                <th class="ng-binding">สถานะ</th>
                                <th style="width:100px;" class="text-center ng-binding">แก้ไข</th>
                            </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(item,index) in users_items" v-bind:key="index">
                          <td>{{index+1}}</td>
                          <td>{{item.name}}</td>
                          <td>{{item.username}}</td>
                          <td>{{item.mobile}}</td>
                          <td>{{item.email}}</td>
                          <td v-if="item.role_type">{{item.role_type}}</td>
                          <td v-else>ไม่ระบุ</td>
                          <td>{{item.last_login}}</td>
                          <td v-if="item.status"><label class="badge bg-success">ใช้งาน</label></td>
                          <td v-else><label class="badge bg-danger">หยุดใช้งาน</label></td>
                          <td class="text-center" style="width:150px;">
                            <button class="btn btn-info btn-sm" @click="editModal(item._id)"><i class="fas fa-edit"></i></button>
                            <button class="btn btn-danger btn-sm ml-2" @click="delete_data(item._id)"><i class="fas fa-user-times"></i></button>
                            </td>
                        </tr>
                      </tbody>
                    </table>
                    </div>
                    <b-modal
                      id="modal-users"
                      header-bg-variant="primary"
                      title="#Users"
                      no-close-on-backdrop
                    >
                    <form name="admin_form" class="bs-example form-horizontal form-validation ng-pristine ng-invalid ng-invalid-required ng-valid-check_pass ng-valid-email" style="">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-group has-error" ng-class="{'has-error':admin_form.name.$invalid}">
                                    <label class="col-sm-3 control-label ng-binding">ชื่อ</label>
                                    <div class="col-sm-12">
                                        <input type="text" ng-model="p.name" name="name" focus-me="true" required="true" class="form-control  ng-pristine ng-invalid ng-invalid-required ng-touched" aria-required="true" aria-invalid="true" style="">
                                    </div>
                                </div>
                                <div class="form-group has-error" ng-class="{'has-error':admin_form.username.$invalid}">
                                    <label class="col-sm-3 control-label ng-binding">ชื่อเข้าใช้งาน</label>
                                    <div class="col-sm-12">
                                        <input type="text" ng-model="p.username" name="username" required="true" class="form-control  ng-pristine ng-untouched ng-invalid ng-invalid-required" aria-required="true" aria-invalid="true" style="">
                                    </div>
                                </div>
                                <div class="form-group has-error" ng-class="{'has-error':focus_newpass || (admin_form.newpass.$pristine &amp;&amp; p.admin_id - 0 === 0)}" style="">
                                    <label class="col-sm-3 control-label ng-binding">รหัสผ่านใหม่</label>
                                    <div class="col-sm-12">
                                        <input type="password" focus-me="focus_newpass" name="newpass" ui-validate="{check_pass : 'check_new_pass($value)' }" ng-model="p.new_pass" class="form-control ng-pristine ng-untouched ng-valid ng-valid-check_pass" aria-invalid="false" style="">
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label class="col-sm-3 control-label ng-binding">อีเมล์</label>
                                    <div class="col-sm-12">
                                        <input type="email" ng-model="p.email" class="form-control  ng-pristine ng-untouched ng-valid ng-valid-email" aria-invalid="false" style="">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-sm-3 control-label ng-binding"> เบอร์โทรศัพท์</label>
                                    <div class="col-sm-12">
                                        <input type="text" ng-model="p.tel" class="form-control  ng-pristine ng-untouched ng-valid" aria-invalid="false">
                                    </div>
                                </div>
                        
                                <div class="form-group">
                                    
                                 <div class="row">
                                        <div class="col-md-8 col-md-6">
                                                         <label>สถานะ</label>
                                        <select id="booking_status" class="form-control">
                                        <option value="">===All Jobs===</option>
                                        <option value="CB">Create Booking</option>
                                        <option value="UN">Unassigned</option>
                                        <option value="AS">Assigned</option>
                                        <option value="AC">Accepted</option>
                                        <option value="ST">Start Job</option>
                                        <option value="CL">Cancle Job</option>
                                        <option value="CP">Completed</option>
                                    </select>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group">
                                    <label>สถานะ</label>
                                    <div></div>
                                    <label class="switch">
                                        <input type="checkbox" v-model="status">
                                        <span class="slider round"></span>
                                    </label>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            
                            </div>
                        </div>
                    </form>

                          <template #modal-footer="{ cancel }">
      <!-- Emulate built in modal footer ok and cancel button actions -->
      <b-button size="md" variant="success" @click.prevent="validate_action">
        OK
      </b-button>
      <b-button size="md" variant="danger" @click="cancel()">
        Cancel
      </b-button>
      <!-- Button with custom close trigger value -->
      <b-button size="md" variant="secondary" @click.prevent="resetModal()">
        Clear
      </b-button>
    </template>
                    </b-modal>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import apiService from "@/service/api_service";
const service = new apiService();
export default {
  name: "users",
  data() {
    return {
      google:{
        name:"",
        address: "",
        lat: "",
        lng: "",
      },
      txtSearch:"",
      id:0,
      hospital_name:"",
      address:"",
      tel:"",
      lat: "",
      lng: "",
      status:true,
      users_items:[],
      action:'A'
    };
  },
  mounted() {
    this.data = this.place
    this.getAll_Users_search()
  },
  methods: {
    validate_action(){
      if ( this.action==='A')
        this.create_hospital()
      else
        this.edit_hospital()
    },
    showModal(){
      this.action='A'
      this.$bvModal.show("modal-users")
    },
    resultGoogle(results){
        this.hospital_name=results.name
        this.address=results.formatted_address
        this.tel=results.formatted_phone_number
        var latitude = results.geometry.location.lat()
        var longitude = results.geometry.location.lng()
        this.lat=latitude
        this.lng=longitude
    },
    resetModal(){
        this.hospital_name=""
        this.address=""
        this.tel=""
        this.lat=""
        this.lng=""
        this.status=true
    },
    async getAll_Users_search(){
        await service.getAll_Users_search()
         .then((res) => {
           this.users_items=res
        })
        .catch((e) => {
          console.log(e);
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
   async delete_data(id){
     this.$swal({
        title: 'Are you sure?',
        text: "คุณต้องการลบข้อมูลหรือไม่!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
             service.delete_hospital(id)
            .then((res) => {
              if (res.success) {
                 this.$swal('Deleted!','Your has been deleted.','success')
                 this.getAll_hospital()
              }else{
                  this.$swal('Deleted!',res.message,'warning')
              }
            })
        }
      })
   },
   async editModal(id){
        this.action='E'
        this.id=id
        await service.getOne_hospital(id)
         .then((res) => {
           this.hospital_name=res.hospital_name
           this.address=res.address
           this.tel=res.tel
           this.lat=res.lat
           this.lng=res.lng
           this.status=res.status
           this.$bvModal.show("modal-hospital")
        })
        .catch((e) => {
          console.log(e);
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
    async create_hospital(){
      if (!this.hospital_name){
           this.$swal({
              position: "top-end",
              icon: "warning",
              title: "infmation",
              text:"ระบุชื่อสถานบริการ",
              showConfirmButton: false,
              timer: 1500,
            });
            return;
       }
      const body = {
        hospital_name:this.hospital_name,
        address:this.address,
        tel:this.tel,
        lat:this.lat,
        lng:this.lng,
        status:this.status
      }
       await service.create_hospital(body)
         .then((res) => {
          if (res.success) {
            this.$swal({
              position: "top-end",
              icon: "success",
              title: "Infomation",
              text: res.message,
              showConfirmButton: false,
              timer: 1500,
            });
             this.$bvModal.hide("modal-hospital");
             this.resetModal()
             this.getAll_hospital()
          } else {
            this.$swal({
              position: "top-end",
              icon: "warning",
              title: "Information",
              text: res.message,
              showConfirmButton: false,
              timer: 1500,
            });
          }
        })
        .catch((e) => {
          console.log(e);
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
  async edit_hospital(){
      if (!this.hospital_name){
           this.$swal({
              position: "top-end",
              icon: "warning",
              title: "infmation",
              text:"ระบุชื่อสถานบริการ",
              showConfirmButton: false,
              timer: 1500,
            });
            return;
       }
      const body = {
        hospital_name:this.hospital_name,
        address:this.address,
        tel:this.tel,
        lat:this.lat,
        lng:this.lng,
        status:this.status
      }
       await service.update_hospital(this.id,body)
         .then((res) => {
          if (res.success) {
            this.$swal({
              position: "top-end",
              icon: "success",
              title: "Hospital",
              text: res.message,
              showConfirmButton: false,
              timer: 1500,
            });
             this.$bvModal.hide("modal-hospital");
             this.resetModal()
             this.getAll_hospital()
          } else {
            this.$swal({
              position: "top-end",
              icon: "warning",
              title: "Information",
              text: res.message,
              showConfirmButton: false,
              timer: 1500,
            });
          }
        })
        .catch((e) => {
          console.log(e);
          this.$swal({
            position: "top-end",
            icon: "warning",
            title: "warning",
            text: e,
            showConfirmButton: false,
            timer: 3000,
          });
        });
    }
  },
};
</script>

<style>
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}
.switch input { 
  opacity: 0;
  width: 0;
  height: 0;
}
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}
.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}
input:checked + .slider {
  background-color: #2196F3;
}
input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}
input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}
/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}
.slider.round:before {
  border-radius: 50%;
}
</style>
