import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./pages/Home.vue";
import PostsShowPage from "./pages/posts/Show.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/", // uri da scrivere nel browser
      name: "home", // nome della rotta da usare per creare un link
      component: HomePage, // componente che ritorna l'html della pagina
    },

    {
      path: "/posts/:id",
      name: "posts.show",
      component: PostsShowPage,
    },
  ],
});

export { router };
