<script>
import { store } from "../store";
export default {
  name: "AppHeader",
  data() {
    return {
      store,
    };
  },
  emits: ["search"],
};
</script>

<template>
  <header>
    <div
      class="container-fluid d-flex align-items-center justify-content-between"
    >
      <div class="title">
        <h1>Bool<span>flix</span></h1>
      </div>
      <div class="user-input">
        <input
          type="text"
          placeholder="Cerca in Boolflix.."
          v-model.trim="store.userSearch"
          @keyup.enter="$emit('search')"
        />
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
header {
  background-color: black;
  width: 100%;
  h1 {
    color: white;
  }
  span {
    color: red;
  }
}
</style>
