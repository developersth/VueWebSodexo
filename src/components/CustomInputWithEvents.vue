<template>
  <div>
    <google-places-autocomplete
      @resultChanged="(placeDetail) => (place = placeDetail)"
      @resultCleared="() => (place = null)"
    >
      <div class="row">
        <div class="col-sm-6">
          <div slot="input" slot-scope="{ context, events, actions }">
            <div class="form-group">
              <label
                for="locationInput"
                class="block my-4 text-xl text-grey-dark"
                >ค้นหาชื่อและที่อยู่</label
              >
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
      </div>
    </google-places-autocomplete>

    <h3 class="mt-8 text-grey-dark" v-if="place">ผลการค้นหา</h3>
    <pre v-html="place" class="text-xs" />
  </div>
</template>

<script>
import { GooglePlacesAutocomplete } from "vue-better-google-places-autocomplete";

export default {
  name: "CustomInputWithEvents",
  components: {
    GooglePlacesAutocomplete,
  },
  data() {
    return {
      place: null,
    };
  },
};
</script>
