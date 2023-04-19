<script>
import AppHeader from "./components/AppHeader.vue";
import { store } from "./store";
import axios from "axios";
export default {
  components: {
    AppHeader,
    data() {
      return {
        store,
      };
    },
    methods: {
      heandleSearch() {
        const params = {
          apiKey: this.store.api_key,
          query: this.store.userSearch,
        };
        if (this.store.userSearch) {
          this.getMoviesFromApi(params);
          this.getTvShowFromApi(params);
        } else {
          console.log(error);
        }
      },
      getMoviesFromApi(params) {
        axios
          .get(this.store.apiUrlMovie, {
            params,
          })
          .then((resp) => {
            this.store.filmArray = resp.data.results;
          });
      },
      getTvShowFromApi(params) {
        axios
          .get(this.store.apiUrlTvSeries, {
            params,
          })
          .then((resp) => {
            this.store.tvSeriesArray = resp.data.result;
          });
      },
    },
  },
};
</script>

<template>
  <AppHeader @search="heandleSearch" />
  <div class="container">
    <div class="row">
      <div class="col"></div>
    </div>
  </div>
</template>

<style lang="scss">
@use "./styles/general.scss" as *;
</style>
