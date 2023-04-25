<script>
// import MyComponent from "./components/MyComponent.vue";
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
        console.log(response /* .data.projects */);

        this.projects = response.data /* .projects */;
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

  <ProjectList :projects="projects" />
</template>

<style lang="scss" scoped></style>
