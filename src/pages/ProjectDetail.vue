<script>
import ProjectCard from "../components/ProjectCard.vue";
import axios from "axios";

export default {
  components: {
    ProjectCard,
  },

  data() {
    return {
      project: null,
    };
  },

  created() {
    axios
      .get(`http://127.0.0.1:8000/api/projects/${this.$route.params.slug}`)
      .then((response) => {
        this.project = response.data;
      });
  },
};
</script>

<template>
  <h1>Dettaglio post: {{ project?.title }}</h1>
  <div class="d-flex justify-content-center mt-4">
    <ProjectCard
      v-if="project"
      :project="project"
      :isDetail="true"
    />
  </div>
</template>

<style lang="scss" scoped></style>
