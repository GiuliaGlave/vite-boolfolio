<script>
import axios from "axios";

import AppHeader from "./components/AppHeader.vue";
import ProjectList from "./components/ProjectList.vue";
import ProjectCard from "./components/ProjectCard.vue";

export default {
  data() {
    return {
      title: "I miei progetti",
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
        this.projects = response.data.data;
      });
    },
  },

  created() {
    this.fetchProjects();
  },
};
</script>

<template>
  <header>
    <AppHeader />
  </header>

  <main>
    <ProjectList
      :projects="projects"
      :title="title"
    />
  </main>
</template>

<style lang="scss" scoped></style>
