<script>
import ProjectCard from "./ProjectCard.vue";

export default {
  props: {
    projects: Array,
    title: String,
  },
  components: {
    ProjectCard,
  },
};
</script>

<template>
  <h1 class="text-center mt-5">{{ title }}</h1>

  <div class="row row-cols-4 g-4">
    <ProjectCard
      v-for="project in projects"
      :project="project"
      :key="project.id"
      :isDetail="false"
      class="d-flex"
    />
  </div>
</template>

<style lang="scss" scoped></style>
