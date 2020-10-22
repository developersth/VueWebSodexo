<template>
  <div id="hopital">
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-12">
          <div class="col-sm-6">
            <h1>Hospital</h1>
          </div>
          <!-- /.col -->
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active">Hospital</li>
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
                    <a href="#" class="h3"><b>Hospital</b></a>
                  </div>
                  <div class="col text-center">
                    <button
                      type="button"
                      data-toggle="modal"
                      class="btn btn-success text-center"
                      @click="showModal"
                    >
                      <i class="fas fa-plus"> Add Hospital</i>
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
                    <table class="table">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">ชื่อสถานพยาบาล</th>
                          <th scope="col">สถานะ</th>
                          <th scope="col" class="text-center">#</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(item,index) in hospital_items" v-bind:key="index">
                          <th scope="row">{{index+1}}</th>
                          <td>{{item.hospital_name}}</td>
                          <td v-if="item.status"><label class="badge bg-success">ใช้งาน</label></td>
                          <td v-else><label class="badge bg-danger">หยุดใช้งาน</label></td>
                          <td class="text-center">
                            <button class="btn btn-info btn-sm" @click="editModal(item._id)">Edit</button>
                            <button class="btn btn-danger btn-sm ml-2" @click="delete_data(item._id)">Delete</button>
                            </td>
                        </tr>
                      </tbody>
                    </table>
                    <b-modal
                      id="modal-hospital"
                      header-bg-variant="primary"
                      size="lg"
                      title="#Hospital"
                      no-close-on-backdrop
                    >
                     <div class="row">
                      <div class="col-sm-12">
                      <google-places-autocomplete
                        @resultChanged="(placeDetail) => (resultGoogle(placeDetail)) "
                        @resultCleared="() => (place = null)"
                      >
                        <div
                          slot="input"
                          slot-scope="{ context, events, actions }"
                        >
                            <div class="form-group">
                              <label class="text-center"
                                ><h4>ค้นหาชื่อและที่อยู่</h4></label
                              >
                              <input
                                v-model="context.input"
                                @focus="events.inputHasReceivedFocus"
                                @input="events.inputHasChanged"
                                @keydown.enter.prevent="actions.selectItemFromList"
                                @keydown.down.prevent="actions.shiftResultsSelection"
                                @keydown.up.prevent="actions.unshiftResultsSelection"
                                country="th"
                                type="search"
                                id="locationInput"
                                class="form-control"
                                placeholder="ค้นหาสถานพยาบาล..."
                              />
                            </div>
                        </div>

                        <span
                          slot="item"
                          slot-scope="{ place }"
                          class="block p-2 list-group-item list-group-item-action list-group-item-success"
                        >
                          {{ place.description }}
                        </span>
                        <span
                          slot="activeItem"
                          slot-scope="{ place }"
                          class="block p-2 rounded list-group-item list-group-item-action list-group-item-danger"
                        >
                          {{ place.description }}
                        </span>
                      </google-places-autocomplete>
                    </div>
                   </div>
                        <div class="row">
                      <div class="col-sm-12">
                        <!-- text input -->
                        <div class="form-group">
                          <label>ชื่อสถานพยาบาล</label>
                          <input
                            type="text"
                            class="form-control"
                            v-model="hospital_name"
                            placeholder="ระบุชื่อสถานพยาบาล"
                          />
                        </div>
                         <div class="form-group">
                          <label>ที่อยู่</label>
                          <input
                            type="text"
                            class="form-control"
                            v-model="address"
                            placeholder="ระบุที่อยู่"
                          />
                        </div>
                           <div class="form-group">
                          <label>เบอร์โทร</label>
                          <input
                            type="text"
                            class="form-control"
                            v-model="tel"
                            placeholder="เบอร์โทร"
                          />
                        </div>
                         <div class="row">
                           <div class="col-sm-4">
                             <div class="form-group">
                          <label>ละติจูด</label>
                          <input
                            type="text"
                            class="form-control"
                            v-model="lat"
                            placeholder="ละติจูด"
                          />
                        </div>
                         </div>
                         <div class="col-sm-4">
                             <div class="form-group">
                          <label>ลองติจูด</label>
                          <input
                            type="text"
                            class="form-control"
                            v-model="lng"
                            placeholder="ลองติจูด"
                          />
                        </div>
                          </div>
                             <div class="col-sm-4">
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
import { GooglePlacesAutocomplete } from "vue-better-google-places-autocomplete";
import apiService from "@/service/api_service";
const service = new apiService();
export default {
  name: "hopital",
  components: {
    GooglePlacesAutocomplete,
  },
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
      hospital_items:[],
      action:'A'
    };
  },
  mounted() {
    this.data = this.place
    this.getAll_hospital()
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
      this.$bvModal.show("modal-hospital")
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
    async getAll_hospital(){
        await service.getAll_hospital()
         .then((res) => {
           this.hospital_items=res
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
