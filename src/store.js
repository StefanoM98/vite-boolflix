import { reactive } from "vue";

export const store = reactive({
  api_key: "d67681baa98f85fd55e695e63898a0f6",
  apiUrlMovie: "https://api.themoviedb.org/3/search/movie",
  apiUrlTvSeries: "https://api.themoviedb.org/3/search/tv",
  imgPath: "https://image.tmdb.org/t/p/w342",
  filmArray: [],
  tvSeriesArray: [],
});
