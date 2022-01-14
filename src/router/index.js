import { createWebHistory, createRouter } from "vue-router";
import List from "@/views/List.vue";
import Article from "@/views/Article.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: List,
  },
  {
    path: "/article",
    name: "Details",
    component: Article,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;