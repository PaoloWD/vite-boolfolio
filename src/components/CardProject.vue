<template>
  <div class="card" style="width: 18rem">
    <!-- <img src="..." class="card-img-top" alt="..." /> -->
    <div class="card-body">
      <h5 class="card-title">{{ placeholder.name }}</h5>
      <p class="card-text">
        {{ placeholder.description }}
      </p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
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
    return {};
  },
};
</script>
