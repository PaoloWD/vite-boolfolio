<script>
import axios from "axios";
import CardProject from "../../components/CardProject.vue";

export default {
  name: "Projects",
  data() {
    return {
      url: "http://127.0.0.1:8000",
      /**
       * @type {{id: number, name: string, description: string, cover_img: string, link: string }[]}
       */
      projects: [],
    };
  },
  methods: {
    fetchProjects() {
      axios.get(this.url + "/api/projects").then((resp) => {
        this.projects = resp.data;
      });
    },
  },
  mounted() {
    this.fetchProjects();
  },
  components: { CardProject },
};
</script>

<template>
  <h3>Lista Progetti</h3>
  <div class="d-flex">
    <div v-for="project in projects" :key="project.id">
      <CardProject :placeholder="project"></CardProject>
    </div>
  </div>
</template>
