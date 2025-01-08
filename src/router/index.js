// router/index.js
import Vue from "vue";
import Router from "vue-router";
import QuizPreviewPage from "@/views/QuizPreviewPage.vue";
import DashboardPage from "@/views/DashboardPage.vue";
import QuizMakerPage from "@/views/QuizMakerPage.vue";

Vue.use(Router);

const routes = [
  {
    path: "/quiz-preview",
    name: "QuizPreview",
    component: QuizPreviewPage,
    props: true,
  },
  {
    path: "/",
    name: "Home",
    component: DashboardPage, // Example for your Dashboard route
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: DashboardPage, // Example for your Dashboard route
  },
  {
    path: "/quizzes",
    name: "Quizzes",
  },
  {
    path: "/quiz-maker",
    name: "QuizMakerPage",
    component: QuizMakerPage,
  },
];

const router = new Router({
  mode: "history", // Enabling history mode
  routes,
});

export default router;
