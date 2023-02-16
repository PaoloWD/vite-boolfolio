import { createRouter, createWebHistory } from "vue-router";

import Projects from "./pages/projects/Projects.vue";
import HomePage from "./pages/projects/HomePage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/", // uri da scrivere nel browser
      name: "home", // nome della rotta da usare per creare un link
      component: HomePage, // componente che ritorna l'html della pagina
    },

    {
      path: "/Progetti",
      name: "projects.projects",
      component: Projects,
    },

    /* {
      path: "/posts/:id",
      name: "posts.show",
      component: PostsShowPage,
    },  */
  ],
});

export { router };
