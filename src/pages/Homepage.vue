<script>
// import MyComponent from "./components/MyComponent.vue";
import ProjectList from "../components/ProjectList.vue";
import ProjectCard from "../components/ProjectCard.vue";
import axios from "axios";
export default {
  data() {
    return {
      projects: [],
    };
  },

  components: {
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
  <ProjectList :projects="projects" />
</template>

<style lang="scss" scoped></style>
