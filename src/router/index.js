import { createRouter, createWebHistory } from "vue-router";
import ArticleView from "../views/ArticleView.vue";

const routes = [
  {
    path: "/",
    name: "article",
    component: ArticleView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
