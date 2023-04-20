<script>
import { store } from "../store";
import LangFlag from "vue-lang-code-flags";
export default {
  name: "AppCards",
  data() {
    return {
      store,
    };
  },
  components: {
    LangFlag,
  },
  props: ["item"],
  computed: {
    star() {
      return parseInt(this.item.vote_average / 2);
    },
  },
};
</script>

<template>
  <div class="my_card">
    <img :src="`${store.imgPath}${item.poster_path}`" alt="" />
    <h3 v-if="!item.poster_path">
      Siamo spiacenti ma non ci hanno dato i permessi
    </h3>
    <ul class="description">
      <li v-if="item.title">
        <h4>Titolo:</h4>
        {{ item.title }}
      </li>
      <li v-else>
        <h4>Name:</h4>
        {{ item.name }}
      </li>
      <li v-if="item.original_title">
        <h4>Titolo originale:</h4>
        {{ item.original_title }}
      </li>
      <li>
        <h4>Lingua:</h4>
        <lang-flag
          v-if="item.original_language"
          :iso="`${item.original_language}`"
        />
        <p v-else>{{ item.original_language }}</p>
      </li>
      <li>
        <h4>Voto:</h4>
        <span v-for="i in store.vote">
          <i
            :class="[i <= star ? 'fa-solid fa-star' : 'fa-regular fa-star']"
          ></i>
        </span>
      </li>
      <li>
        <h4>Descrizione:</h4>
        {{ item.overview }}
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.my_card {
  width: 342px;
  height: 600px;
  padding: 0 1rem;
  position: relative;
  h3 {
    color: red;
  }
  .description {
    list-style-type: none;
    padding: 0;
    height: 100%;
    width: 100%;
    background-color: rgba($color: #000000, $alpha: 0.8);
    opacity: 0;
    color: white;
    position: absolute;
    top: 0;
    &.description:hover {
      opacity: 1;
    }
    li {
      font-size: 0.7rem;
      width: 90%;
    }
  }
}
</style>
