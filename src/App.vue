<script>
import axios from "axios";

import AppHeader from "./components/AppHeader.vue";
import ProjectList from "./components/ProjectList.vue";
import ProjectCard from "./components/ProjectCard.vue";

export default {
  data() {
    return {
      projects: [],
    };
  },

  components: {
    AppHeader,
    ProjectList,
    ProjectCard,
  },

  methods: {
    fetchProjects() {
      axios.get("http://127.0.0.1:8000/api/projects").then((response) => {
        console.log(response.data.data);

        this.projects = response.data.data;
        console.log(this.projects);
      });
    },
  },

  created() {
    this.fetchProjects();
  },
};
</script>

<template>
  <AppHeader />

  <main>
    <ProjectList :projects="projects" />
  </main>
</template>

<style lang="scss" scoped></style>
