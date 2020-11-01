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
                              <a href="#" class="h3"><b>{{ $t('users.title') }}</b></a>
                           </div>
                           <div class="col text-center">
                              <button type="button" data-toggle="modal" class="btn btn-success text-center" @click="showModal">
                              <i class="fas fa-plus"> Add Users</i>
                              </button>
                           </div>
                           <div class="col text-right">
                              <div class="card-tools">
                                 <button type="button" class="btn btn-tool" data-card-widget="card-refresh" data-source="widgets.html" data-source-selector="#card-refresh-content" data-load-on-init="false">
                                 <i class="fas fa-sync-alt"></i>
                                 </button>
                                 <button type="button" class="btn btn-tool" data-card-widget="maximize">
                                 <i class="fas fa-expand"></i>
                                 </button>
                                 <button type="button" class="btn btn-tool" data-card-widget="collapse">
                                 <i class="fas fa-minus"></i>
                                 </button>
                                 <button type="button" class="btn btn-tool" data-card-widget="remove">
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
                                          <th>{{ $t('users.name') }}</th>
                                          <th>{{ $t('users.username') }}</th>
                                          <th>{{ $t('users.mobile') }}</th>
                                          <th>{{ $t('users.email') }}</th>
                                          <th>{{ $t('users.type') }}</th>
                                          <th>{{ $t('users.last_login') }}</th>
                                          <th>{{ $t('users.status') }}</th>
                                          <th style="width:100px;" class="text-center ng-binding">{{ $t('users.edit') }}</th>
                                       </tr>
                                    </thead>
                                    <tbody>
                                       <tr v-for="(item,index) in users_items" v-bind:key="index">
                                          <td>{{index+1}}</td>
                                          <td>{{item.name}}</td>
                                          <td>{{item.username}}</td>
                                          <td>{{item.mobile}}</td>
                                          <td>{{item.email}}</td>
                                          <td v-if="item.role_type">{{item.role_name}}</td>
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
                              <b-modal id="modal-users" header-bg-variant="primary"  :title="getActionName+` Users`" no-close-on-backdrop>
                                 <form>
                                    <div class="row">
                                       <div class="col-md-12">
                                          <div class="form-group">
                                             <label class="col-sm-3">
                                               {{$t('users.name')}} <i class="text-danger">*</i>
                                             </label>
                                             <input type="text" class="form-control" v-model="name" :placeholder="$t('users.name')">
                                          </div>
                                          <div class="form-group">
                                             <label class="col-sm-3">
                                                 {{$t('users.username') }}  <i class="text-danger">*</i>
                                             </label>
                                             <input type="text"  name="username" v-model="username" required="true" class="form-control" :placeholder="$t('users.username')">
                                          </div>
                                            <label class="col-sm-3">
                                                 {{$t('users.password') }} <i class="text-danger">*</i>
                                             </label>
                                          <div class="input-group mb-3">
                                             <input :type="passwordType"  v-model="password" class="form-control">
                                             <div class="input-group-append">
                                             <button class="btn btn-info" @click.prevent="showPassword">
                                             <i class="far fa-eye"></i>
                                             </button>
                                           </div>
                                          </div>
                                          <div class="form-group">
                                             <label class="col-sm-3">{{$t('users.email') }}</label>
                                             <input type="email"  v-model="email" class="form-control" placeholder="example@mail.com">
                                          </div>
                                          <div class="form-group">
                                             <label class="col-sm-3"> {{$t('users.mobile') }}</label>
                                             <input v-model="mobile" onkeypress='return event.charCode >= 48 && event.charCode <= 57' class="form-control" maxlength="10" :placeholder="$t('users.mobile')">
                                          </div>
                                          <div class="form-group">
                                             <div class="row">
                                                <div class="col-sm-8">
                                                   <label>{{$t('users.type') }}</label>
                                                   <select class="form-control" v-model="role_id">
                                                      <option value="">=== Select Role===</option>
                                                      <option v-for="(item,index) in UserRoleItems" v-bind:key="index" :value="item._id" >
                                                         {{item.role_name}}
                                                      </option>
                                                   </select>
                                                </div>
                                                <div class="col-sm-4">
                                                   <div class="form-group">
                                                      <label>{{ $t('users.status') }}</label>
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
     data() {
       return {
         validateNames  :  [],
         txtSearch      :  "",
         users_items    :  [],
         action         :  'A',
         UserRoleItems  :  [],
         id             :  0,
         name           :  "",
         username       :  "",
         password       :  "",
         email          :  "",
         mobile         :  "",
         role_id        :  "",
         status         :  true,
         passwordType   :  "password"
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
     mounted() {
       this.data = this.place
       this.getAllUserSearch()
       this.getUserRole()
     },
     methods: {
       showPassword(){
          this.passwordType= this.passwordType==="password"?"text":"password"
       },
       validate_action(){
         if ( this.action==='A')
           this.create()
         else
           this.edit()
       },
       showModal(){
         this.action='A'
         this.$bvModal.show("modal-users")
       },
       resetModal(){
           this.name       = ""
           this.username   = ""
           this.password   = ""
           this.email      = ""
           this.mobile     = ""
           this.role_id    = ""
           this.status     = true
       },
       async getUserRole(){
        const result= await service.getUserRole()
        this.UserRoleItems=result
       },
       async getAllUserSearch(){
           await service.getAllUserSearch().then((res) => {
              this.users_items=res
           })
           .catch((e) => {
             //console.log(e);
             this.$swal({position: "top-end",icon: "warning",title: "warning",text: e,showConfirmButton: false,timer: 3000});
           });
       },
      async delete_data(id){
        this.$swal({title: 'Are you sure?',text: "คุณต้องการลบข้อมูลหรือไม่!",icon: 'warning',showCancelButton: true,confirmButtonColor: '#3085d6',cancelButtonColor: '#d33',confirmButtonText: 'Yes, delete it!'}).then((result) => {
           if (result.isConfirmed) {
               service.delete_users(id)
               .then((res) => {
                 if (res.success) {
                    this.$swal('Deleted!',res.message,'success')
                    this.getAllUserSearch()
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
           await service.getUserById(id)
            .then((res) => {
               this.name      =  res.name
               this.username  =  res.username
               this.email     =  res.email
               this.mobile     =  res.mobile
               this.role_id   =  res.role_id
               this.status    =  res.status
               this.$bvModal.show("modal-users")
           })
           .catch((e) => {
             //console.log(e);
             this.$swal({position: "top-end",icon: "warning",title: "warning",text: e,showConfirmButton: false,timer: 3000});
           });
       },
       async create(){
         this.validateNames=[]
         if(!this.name)      this.validateNames.push({ message: "ระบุ ชื่อ-สกุล ด้วยค่ะ!" });
         if(!this.username)  this.validateNames.push({ message: "ระบุ username ด้วยค่ะ!" });
         if(!this.password)  this.validateNames.push({ message: "ระบุ password ด้วยค่ะ!" });
         if(!this.mobile)    this.validateNames.push({ message: "ระบุ Mobile ด้วยค่ะ!" });
        if (this.validateNames.length > 0){
         let message = "";
            for (let i = 0; i < this.validateNames.length; i++) {
               message += this.validateNames[i].message + "<br />";
            }
           this.$swal({position: "top-end",icon: "warning",title: "แจ้งเตือน",html: message,showConfirmButton: false,timer: 2000});
           return;
        }
         const body = {
            name     :  this.name,
            username :  this.username,
            password :  this.password,
            email    :  this.email,
            mobile   :  this.mobile,
            role_id  :  this.role_id,
            status   :  this.status
        };
          await service.create_users(body)
            .then((res) => {
             if (res.success) {
                this.$swal({position: "top-end",icon: "success",title: "Information",text: res.message,showConfirmButton: false,timer: 1500});
                this.$bvModal.hide("modal-users");
                this.resetModal()
                this.getAllUserSearch()
             } else {
               this.$swal({position: "top-end",icon: "warning",title: "Information",text: res.message,showConfirmButton: false,timer: 1500});
             }
           })
           .catch((e) => {
             //console.log(e);
             this.$swal({position: "top-end",icon: "warning",title: "Information",text: e,showConfirmButton: false,timer: 2000});
           });
       },
     async edit(){
       this.validateNames=[]
         if(!this.name)      this.validateNames.push({ message: "ระบุ ชื่อ-สกุล ด้วยค่ะ!" });
         if(!this.username)  this.validateNames.push({ message: "ระบุ username ด้วยค่ะ!" });
         if(!this.mobile)    this.validateNames.push({ message: "ระบุ Mobile ด้วยค่ะ!" });
         if (this.validateNames.length > 0){
            let message = "";
               for (let i = 0; i < this.validateNames.length; i++) {
                  message += this.validateNames[i].message + "<br />";
               }
            this.$swal({position: "top-end",icon: "warning",title: "แจ้งเตือน",html: message,showConfirmButton: false,timer: 2000});
            return;
         }
         const body = {
            name     :  this.name,
            username :  this.username,
            password :  this.password,
            email    :  this.email,
            mobile   :  this.mobile,
            role_id  :  this.role_id,
            status   :  this.status
        };
          await service.update_users(this.id,body)
            .then((res) => {
             if (res.success) {
                this.$swal({position: "top-end",icon: "success",title: "Information",text: res.message,showConfirmButton: false,timer: 1500});
                this.$bvModal.hide("modal-users");
                this.resetModal()
                this.getAllUserSearch()
             } else {
               this.$swal({position: "top-end",icon: "warning",title: "Warning",text: res.message,showConfirmButton: false,timer: 2000});
             }
           })
           .catch((e) => {
               //console.log(e);
               this.$swal({position: "top-end",icon: "warning",title: "Warning",text: e,showConfirmButton: false,timer: 2000});
           });
       }
     },
   };
</script>
<style>
</style>