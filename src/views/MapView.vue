<template>
  <div class="MapView">
    <div class="content">
       <div class="container-fluid">
         <div class="row justify-content-md-center">
      <div class="contentDesktop-wrapper">
        <div class="row">
            <div class="col-md-3 col-lg-3 nopadding">
            <div class="contentDesktop-firstPanel active">
            <div class="card  card-primary">
           <div class="card-header">
                        <div class="form-row">
                           <div class="col">
                              <a href="#" class="h3"><b>MapView</b></a>
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
                           </div>
                        </div>
                     </div>
                     </div>
                       </div>
                </div>
         <div class="col-md-9 col-lg-9 nopadding" >
              <div class="contentDesktop-thirdPanel">
               <div class="contentDesktop-thirdPanel_map">
                  <GmapMap  :center="{lat:13.7622354, lng:100.5067183}" :zoom="13" map-type-id="terrain" style="width: 100%;height: 87vh;"></GmapMap>
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
export default {};
</script>

<style scoped>
.nopadding {
   padding: 0 !important;
   margin: 0 !important;
}
@media (min-width: 768px) {
  .contentDesktop-wrapper {
    height: 100%;
    width: 99%;
    position: relative;
    display: flex;
    flex-direction: column;
  }
  .contentDesktop-container {
    height: 100%;
    flex-grow: 1;
    position: relative;
  }
  .contentDesktop-container .contentDesktop-firstPanel,
  .contentDesktop-container .contentDesktop-secondPanel,
  .contentDesktop-container .contentDesktop-thirdPanel {
    -webkit-transition: all 200ms cubic-bezier(0.895, 0.03, 0.685, 0.22);
    -moz-transition: all 200ms cubic-bezier(0.895, 0.03, 0.685, 0.22);
    -o-transition: all 200ms cubic-bezier(0.895, 0.03, 0.685, 0.22);
    -ms-transition: all 200ms cubic-bezier(0.895, 0.03, 0.685, 0.22);
    transition: all 200ms cubic-bezier(0.895, 0.03, 0.685, 0.22);
    display: inline-block;
    vertical-align: top;
    overflow: hidden;
    height: 100%;
  }
  .contentDesktop-container .contentDesktop-firstPanel,
  .contentDesktop-container .contentDesktop-secondPanel {
    width: 0;
  }
  .contentDesktop-container .contentDesktop-firstPanel.active,
  .contentDesktop-container .contentDesktop-secondPanel.active {
    width: 27%;
    box-sizing: border-box;
    border-right: 1px solid #cccccc;
    box-shadow: 2px 0 10px 2px rgba(0, 0, 0, 0.2);
  }
  .contentDesktop-container .contentDesktop-firstPanel {
    background-color: #fff;
  }
  .contentDesktop-container .contentDesktop-firstPanel.fullscreen {
    width: 100%;
  }
  .contentDesktop-container .contentDesktop-secondPanel {
    background-color: #fff;
  }
  .contentDesktop-container .contentDesktop-secondPanel.fullscreen {
    width: calc(100% - 27%);
  }
  .contentDesktop-container .contentDesktop-secondPanel.active {
    margin-left: 0%;
    background: #fff;
    position: relative;
    box-shadow: 2px 0 10px 2px rgba(0, 0, 0, 0.2);
  }
  .contentDesktop-container .contentDesktop-thirdPanel {
    width: 100%;
  }
  .contentDesktop-container .contentDesktop-thirdPanel.activeOne {
    width: calc(100% - 27%);
  }
  .contentDesktop-container .contentDesktop-thirdPanel.activeTwo {
    width: calc(100% - 54% - 0%);
  }
  .contentDesktop-container .contentDesktop-thirdPanel.fullscreen {
    width: 0;
  }
  .contentDesktop-container
    .contentDesktop-thirdPanel.fullscreen
    .mapIcon-container {
    display: none;
  }
  .contentDesktop-container
    .contentDesktop-thirdPanel
    .contentDesktop-thirdPanel_map,
  .contentDesktop-container
    .contentDesktop-thirdPanel
    .contentDesktop-thirdPanel_liveVideo {
    -webkit-transition: height 0.5s ease;
    -moz-transition: height 0.5s ease;
    -o-transition: height 0.5s ease;
    -ms-transition: height 0.5s ease;
    transition: height 0.5s ease;
    display: inline-block;
    vertical-align: top;
    overflow: hidden;
    width: 100%;
  }
  .contentDesktop-container
    .contentDesktop-thirdPanel
    .contentDesktop-thirdPanel_map
    .content-playback-live-video,
  .contentDesktop-container
    .contentDesktop-thirdPanel
    .contentDesktop-thirdPanel_liveVideo
    .content-playback-live-video {
    display: flex;
    height: 100%;
    overflow-x: auto;
  }
  .contentDesktop-container
    .contentDesktop-thirdPanel
    .contentDesktop-thirdPanel_map {
    height: 100%;
  }
  .contentDesktop-container
    .contentDesktop-thirdPanel
    .contentDesktop-thirdPanel_map
    .player-playback {
    display: none;
  }
  .contentDesktop-container
    .contentDesktop-thirdPanel
    .contentDesktop-thirdPanel_map.hasVideo {
    height: calc(100% - 35%);
    position: relative;
  }
  .contentDesktop-container
    .contentDesktop-thirdPanel
    .contentDesktop-thirdPanel_liveVideo {
    background-color: #fff;
    height: 0;
  }
  .contentDesktop-container
    .contentDesktop-thirdPanel
    .contentDesktop-thirdPanel_liveVideo.hasVideo {
    height: 35%;
  }
  .contentDesktop-footer_playback {
    display: inline-block;
    vertical-align: top;
    z-index: 0;
    box-shadow: 2px 0 10px 2px rgba(0, 0, 0, 0.2);
    width: 100%;
    background-color: #fff;
    height: 0;
  }
  .contentDesktop-footer_playback.hasPlayback {
    height: -moz-fit-content;
    height: fit-content;
  }
}
</style>