<script>
import axios from "axios";
import CardProject from "../../components/CardProject.vue";
export default {
  name: "Show",
  data() {
    return {
      url: "http://127.0.0.1:8000",
      project: {},
      a: "projects.projects",
    };
  },
  mounted() {
    axios
      .get(this.url + "/api/projects/" + this.$route.params.id)
      .then((resp) => {
        this.project = resp.data;
      });
  },
  components: { CardProject },
};
</script>

<template>
  <!-- <CardProject :placeholder="project"></CardProject> -->
  <div class="card" style="width: 18rem">
    <div v-if="project.cover_img">
      <img
        :src="url + '/storage/' + project.cover_img"
        alt=""
        class="img-fluid"
      />
    </div>
    <div class="card-body">
      <h5 class="card-title">{{ project.name }}</h5>
      <p class="card-text">
        {{ project.description }}
      </p>
      <router-link :to="{ name: a }">Torna ai progetti</router-link>
    </div>
  </div>
</template>
