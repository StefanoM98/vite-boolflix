<script>
import { store } from "../store";
export default {
  name: "AppCards",
  data() {
    return {
      store,
    };
  },
  props: ["item"],
  computed: {},
};
</script>

<template>
  <div class="my_card">
    <img :src="`${store.imgPath}${item.poster_path}`" alt="" />
    <ul class="description">
      <li><span>Titolo:</span>{{ funzione }}</li>
      <li><span>Lingua:</span>{{ funzione }}</li>
      <li><span>Voto:</span>{{ funzione }}</li>
      <li><span>Descrizione:</span>{{ funzione }}</li>
    </ul>
  </div>
</template>

<style></style>
