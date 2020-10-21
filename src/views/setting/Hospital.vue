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
                      v-b-modal.modal-hospital
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
                    <b-modal
                      id="modal-hospital"
                      header-bg-variant="primary"
                      size="lg"
                      title="#hopital"
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
                                @keydown.up.prevent="
                                  actions.unshiftResultsSelection
                                "
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
                          <template #modal-footer="{ ok, cancel,resetModal }">
      <!-- Emulate built in modal footer ok and cancel button actions -->
      <b-button size="md" variant="success" @click="ok()">
        OK
      </b-button>
      <b-button size="md" variant="danger" @click="cancel()">
        Cancel
      </b-button>
      <!-- Button with custom close trigger value -->
      <b-button size="md" variant="secondary" @click="resetModal()">
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
      hospital_name:"",
      address:"",
      tel:"",
      lat: "",
      lng: "",
      status:true
    };
  },
  mounted() {
    this.data = this.place;
  },
  methods: {
    resultGoogle(results){
       console.log(results)
        this.hospital_name=results.name
        this.address=results.formatted_address
        this.tel=results.formatted_phone_number
        var latitude = results.geometry.location.lat()
        var longitude = results.geometry.location.lng()
        this.lat=latitude
        this.lng=longitude
    },
    resetModal(){
        this.context.input=""
        this.hospital_name=""
        this.address=""
        this.tel=""
        this.lat=""
        this.lng=""
        this.$emit('resultCleared')
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
