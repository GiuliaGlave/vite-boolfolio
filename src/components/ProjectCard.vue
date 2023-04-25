<script>
// import MyComponent from "./components/MyComponent.vue";

export default {
  data() {
    return {
      title: "Hello world",
    };
  },
  // components: {
  //   MyComponent,
  // },
  props: {
    project: Object,
  },
  computed: {
    getAbstract() {
      return this.project.description.slice(0, 100) + "...";
    },
  },
};
</script>

<template>
  <div class="col">
    <div
      class="card h-100"
      style="width: 18rem"
    >
      <div class="card-body">
        <h5 class="card-title">{{ project.title }}</h5>
        <h6 class="card-subtitle mb-2 text-body-secondary">
          {{ project.author }}
        </h6>
        <p class="card-text">{{ getAbstract }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
