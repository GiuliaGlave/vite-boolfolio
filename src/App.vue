<script>
import AppHeader from "./components/AppHeader.vue";

export default {
  data() {
    return {
      title: "I miei progetti",
    };
  },

  components: {
    AppHeader,
  },
};
</script>

<template>
  <header>
    <AppHeader :title="title" />
  </header>

  <main class="container mt-5">
    <RouterView></RouterView>
  </main>
</template>

<style lang="scss" scoped></style>
