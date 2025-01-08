<template>
  <v-app>
    <Sidebar @change-view="changeView" />
    <div class="main-content">
      <TopBar :page-title="currentView" />
      <router-view />
    </div>
  </v-app>
</template>

<script>
import Sidebar from "./components/SidebarMenu.vue";
import TopBar from "./components/TopBar.vue";

export default {
  components: {
    Sidebar,
    TopBar,
  },
  data() {
    return {
      currentView: "Dashboard", // Default view
    };
  },
  watch: {
    // Watch the current route and update the view accordingly
    $route(to) {
      this.updateViewBasedOnRoute(to);
    },
  },
  mounted() {
    // Set the initial view based on the current route
    this.updateViewBasedOnRoute(this.$route);
  },
  methods: {
    changeView(view) {
      // Navigate to the selected route
      this.$router.push({ name: view });
    },
    updateViewBasedOnRoute(route) {
      // Map route names to view titles
      const routeNameToViewMap = {
        Dashboard: "Dashboard",
        Quizzes: "Quizzes",
        QuizMakerPage: "Quiz Creator",
        QuizPreview: "Quiz Preview",
      };
      this.currentView = routeNameToViewMap[route.name] || "Dashboard";
    },
  },
};
</script>

<style>
.main-content {
  margin-left: 250px; /* Adjust based on your sidebar width */
  padding: 20px;
  height: 100%;
  background-color: #ebdfd7;
}

* {
  box-sizing: border-box;
}
</style>
