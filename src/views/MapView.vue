<template>
  <div class="MapView">
    <div class="content">
       <div class="container-fluid">
        <div class="row">
            <div class="col-md-4 col-lg-4 nopadding">
            <div class="card  card-danger">
           <div class="card-header">
                        <div class="form-row">
                           <div class="col">
                              <a href="#" class="h6"><b>MapView</b></a>
                           </div>
                           <div class="col text-center">
                           </div>
                           <div class="col text-right">
                              <div class="card-tools">
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
                             <ul class="nav nav-pills mb-1" id="pills-tab" role="tablist">
                                <li class="nav-item">
                                  <a class="nav-link active" id="pills-team-tab" data-toggle="pill" href="#pills-team" role="tab" aria-controls="pills-home" aria-selected="true">Team</a>
                                </li>
                                <li class="nav-item">
                                  <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Today</a>
                                </li>
                              </ul>
                              <div class="tab-content" id="pills-tabContent">
                                <div class="tab-pane fade show active" id="pills-team" role="tabpanel" aria-labelledby="pills-team-tab">
                              <div class="row">
                                <div class="form-group col-sm-12 col-md-12">
                                  <div class="input-group">
                                    <span class="input-group-btn">
                                      <button type="button" class="btn btn-success">
                                        <i class="fa fa-plus">Add</i> 
                                      </button>
                                    </span>
                                    <input  class="form-control" type="text" v-model="keyword" placeholder="Search..." autofocus="true" />
                                    <span class="input-group-btn">
                                      <button
                                        type="button"
                                        class="btn btn-primary"
                                        @click="getAllBooking()"
                                      >
                                        <i class="fa fa-search"></i> ค้นหา
                                      </button>
                                    </span>
                                  </div>
                                </div>
                              </div>
                                 <div style="position: relative; height: 63vh; overflow: auto;">
                              <table class="table">
                                    <tbody>
                                      <tr v-for="(item,index) in users_items" :key="index">
                                        <th scope="row">
                                          <img src="/dist/img/avatar5.png" width="80" height="80" class="rounded-circle" alt="Cinque Terre">
                                        </th>
                                        <td>
                                          <div class="h5">{{item.name}} </div>
                                          <div class="text-success"><i class="far fa-check-circle"> Online</i></div>
                                         <div class="form-inline">
                                            <button class="btn btn-outline-info"><i class="fas fa-business-time"> Assign Job</i></button>
                                           <button class="btn btn-outline-primary"><i class="fas fa-user-circle"> Profile</i></button>
                                         </div>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
        
                                    </div>
                                  </div>
                                <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">...</div>
                                <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">...</div>
                              </div>
                           </div>
                        </div>
                     </div>
                     </div>
                </div>
         <div class="col-md-8 col-lg-8 nopadding" >
           <div class="custom-gmap-class">
                  <GmapMap  :center="{lat:13.7622354, lng:100.5067183}" :zoom="13" map-type-id="terrain" style="width:100%;height:87vh"></GmapMap>
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
         users_items:[]
       }
     },
     created(){
       this.getAllUserSearch();
     },
     methods:{
         async getAllUserSearch(){
           await service.getAllUserSearch().then((res) => {
              this.users_items=res
              //console.log(res)
           })
           .catch((e) => {
             this.$swal({position: "top-end",icon: "warning",title: "warning",text: e,showConfirmButton: false,timer: 3000});
           });
       }
     }
};
</script>

<style scoped>
.custom-gmap-class {
  height: 100%;
  width: 100%;
  margin: 0px;
  padding: 0px
}
.nopadding {
   padding: 0 !important;
   margin: 0 !important;
}
.map-container {
    width: 100%;
    height: 100%;
}
#left-panel {
	width: 30%;
}
#left-panel .ajax-loader {
	position: absolute;
	top: 50px;
	right: 50%;
	height: 80px;
	width: 80px;
	background-color: #fff;
	padding: 5px;
	border-radius: 10px;
	margin-right: -40px;
	box-shadow: 0 0 50px rgba(0,0,0,0.5);
	z-index: 1080;
}
#left-panel .ajax-loader img {
	position: relative;
	display: block;
	width: 100%;
	height: 100%;
}
#right-panel {
	width: 35%;
}
.overview-container {
  width: 100%;
  height: 100%; }
  .overview-container .overview-group,
  .overview-container .overview-status {
    height: 40px;
    border-bottom: 1px solid #cccccc; }
  .overview-container .overview-group-device {
    display: flex;
    align-items: center;
    padding: 0px 5px;
    height: 40px;
    border-bottom: 1px solid #cccccc; }
  .overview-container .overview-button-add-group {
    margin-left: 5px;
    height: 100%;
    display: flex; }
  .overview-container .overview-group {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px; }
    .overview-container .overview-group i {
      cursor: pointer;
      font-size: 16px; }
  .overview-container .overview-button-container {
    display: flex;
    text-align: center;
    height: 100%; }
  .overview-container .wl-search-container {
    display: flex;
    height: 40px; }
    .overview-container .wl-search-container .wl-button {
      margin-left: 5px; }
  .overview-container .overview-list {
    height: calc(100% - (40px * 4)); }
</style>