<template>
  <div>
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

    <h3 class="mt-8 text-grey-dark" v-if="place">Result</h3>
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
  computed: {
  },
  methods: {},
};
</script>

<style>
</style>
