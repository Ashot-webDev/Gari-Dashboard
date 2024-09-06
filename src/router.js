import { createRouter, createWebHistory } from "vue-router";
import Boats from "./pages/Boats.vue";
import Edit from "./pages/Edit.vue";
import Add from "./pages/Add.vue";

const routes = [
  { path: "/boats", name: "boats", component: Boats },
  {
    path: "/boat/edit/:id",
    name: "edit",
    component: Edit,
    props: (route) => ({
      id: route.params.id,
      name: route.params.name,
    }),
  },
  {
    path: "/boat/new",
    name: "add",
    component: Add,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
