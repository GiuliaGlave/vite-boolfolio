<script>
// import MyComponent from "./components/MyComponent.vue";

export default {
  data() {
    return {};
  },

  // components: {
  //   MyComponent,
  // },
};
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a
          class="navbar-brand"
          href="#"
          >Vite Boolfolio</a
        >
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse"
          id="navbarNav"
        >
          <ul class="navbar-nav">
            <li class="nav-item d-flex">
              <router-link
                :to="{ name: 'homepage' }"
                class="nav-link"
                aria-current="page"
                href="#"
                >Home</router-link
              >
              <router-link
                :to="{ name: 'contacts' }"
                class="nav-link"
                aria-current="page"
                href="#"
                >Contacts</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped></style>
