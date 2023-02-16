import { createRouter, createWebHistory } from "vue-router";

import Projects from "./pages/projects/Projects.vue";
import HomePage from "./pages/projects/HomePage.vue";
import Show from "./pages/projects/Show.vue";

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

    {
      path: "/projects/:id",
      name: "project.show",
      component: Show,
    },
  ],
});

export { router };
