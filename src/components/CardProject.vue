<template>
  <div class="card" style="width: 18rem">
    <div v-if="placeholder.cover_img">
      <img
        :src="url + '/storage/' + placeholder.cover_img"
        alt=""
        class="img-fluid"
      />
    </div>
    <div class="card-body">
      <h5 class="card-title">{{ placeholder.name }}</h5>
      <p class="card-text">
        {{ placeholder.description }}
      </p>
      <router-link
        :to="{ name: 'project.show', params: { id: placeholder.id } }"
        >Mostra dettagli</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "CardProject",
  props: {
    placeholder: {
      type: Object,
    },
  },
  data() {
    return {
      url: "http://127.0.0.1:8000",
    };
  },
};
</script>
