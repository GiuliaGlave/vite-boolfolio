<script>
// import MyComponent from "./components/MyComponent.vue";

export default {
  data() {
    return {};
  },
  // components: {
  //   MyComponent,
  // },
  props: {
    project: Object,
    isDetail: Boolean,
  },
  computed: {
    getAbstract() {
      return this.project.details.slice(0, 150) + "[...]";
    },
  },
};
</script>

<template>
  <div>
    <div class="card">
      <div class="card-header my-2 d-flex flex-grow-1">
        <h5 class="card-title">{{ project.title }}</h5>
      </div>
      <div class="card-body">
        <p class="card-text">{{ isDetail ? project.details : getAbstract }}</p>
      </div>
      <div class="card-footer">
        <div v-if="project.type">
          {{ project.type.label }}
        </div>
        <div v-else>
          <span class="text-muted">-</span>
        </div>
        <div v-if="project.technology">
          {{ project.technologies.label }}
        </div>
        <div
          v-else
          class="text-muted"
        >
          <span>-</span>
        </div>

        <div>
          <router-link
            type="button"
            class="btn btn-sm btn-primary"
            v-if="!isDetail"
            :to="{
              name: 'project-detail',
              params: {
                slug: project.slug,
              },
            }"
          >
            open
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
