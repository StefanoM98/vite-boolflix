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
    <h3 v-if="!item.poster_path">
      Siamo spiacenti ma non ci hanno dato i permessi
    </h3>
    <ul class="description">
      <li><span>Titolo:</span></li>
      <li><span>Lingua:</span></li>
      <li><span>Voto:</span></li>
      <li><span>Descrizione:</span></li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.my_card {
  width: 200px;
  height: 400px;
  position: relative;
  h3 {
    color: red;
  }
  // .description {
  //   height: 300px;
  //   width: 200px;
  //   background-color: rgba($color: #000000, $alpha: 0.8);
  //   position: absolute;
  //   top: 0;
  // }
}
</style>
