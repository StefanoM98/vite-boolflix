<script>
import AppHeader from "./components/AppHeader.vue";
import AppCards from "./components/AppCards.vue";
import { store } from "./store";
import axios from "axios";
export default {
  components: {
    AppHeader,
    AppCards,
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    heandleSearch() {
      const params = {
        api_key: this.store.api_key,
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
          this.store.tvSeriesArray = resp.data.results;
        });
    },
  },
};
</script>

<template>
  <AppHeader @search="heandleSearch" />
  <main>
    <div class="container-fluid">
      <h2>MOVIES</h2>
      <div class="row">
        <div class="col" v-for="card in store.filmArray">
          <AppCards :item="card" />
        </div>
      </div>
    </div>
    <div class="container-fluid mt-4">
      <h2>TV SERIES</h2>
      <div class="row">
        <div class="col" v-for="card in store.tvSeriesArray">
          <AppCards :item="card" />
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss">
@use "./styles/general.scss" as *;
main {
  background-color: black;
  h2 {
    color: white;
    background-color: rgba($color: white, $alpha: 0.3);
    text-align: center;
    padding: 10px;
  }
}
</style>
