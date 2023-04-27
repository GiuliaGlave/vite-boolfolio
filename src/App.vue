<script>
import AppHeader from "./components/AppHeader.vue";

export default {
  data() {
    return {};
  },

  components: {
    AppHeader,
  },
};
</script>

<template>
  <header>
    <AppHeader />
  </header>

  <main class="container mt-5">
    <RouterView></RouterView>
  </main>
</template>

<style lang="scss" scoped></style>
