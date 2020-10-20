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
                    <a href="#" class="h3"
                      ><b>Hospital</b></a
                    >
                  </div>
                  <div class="col text-center">
                    <button
                      type="button"
                      data-toggle="modal" 
                      class="btn btn-success text-center"
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
                          <CustomInputAndResultsWithEvents />
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
import CustomInputAndResultsWithEvents from "@/components/CustomInputAndResultsWithEvents.vue";

export default {
  name: "hopital",
  components: {
    CustomInputAndResultsWithEvents,
  },
};
</script>

<style>
</style>
