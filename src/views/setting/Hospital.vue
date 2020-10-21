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
<google-places-autocomplete
      @resultChanged="(placeDetail) => (place = placeDetail)"
      @resultCleared="() => (place = null)"
    >
      <div slot="input" slot-scope="{ context, events, actions }">
        <div class="col-sm-12">
          <div class="form-group">
            <label class="text-center"><h4>ค้นหาชื่อและที่อยู่</h4></label>
            <input
              v-model="context.input"
              @focus="events.inputHasReceivedFocus"
              @input="events.inputHasChanged"
              @keydown.enter.prevent="actions.selectItemFromList"
              @keydown.down.prevent="actions.shiftResultsSelection"
              @keydown.up.prevent="actions.unshiftResultsSelection"
              type="search"
              id="locationInput"
              class="form-control"
              placeholder="Type something ..."
            />
          </div>
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
         <input class="form-control" v-if="place" :value="place.geometry[0].lat" />
    <h3 class="mt-8 text-grey-dark" v-if="place">Result</h3>
    <pre v-html="place" class="text-xs" />
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
    GooglePlacesAutocomplete
  },
   data() {
    return {
      place: null,
      address: '',
      lat:'',
      lng:''
    };
  },
  computed: {
},
  methods:{
    geocodeLatLng: function (){
}
  }
}
</script>

<style>
</style>
