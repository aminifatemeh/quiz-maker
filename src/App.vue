<template>
  <v-app>
    <Sidebar @change-view="changeView" />
    <div class="main-content">
      <TopBar :page-title="currentView" />
      <component :is="currentView" />
    </div>
  </v-app>
</template>

<script>
import Sidebar from "./components/SidebarMenu.vue";
import TopBar from "./components/TopBar.vue";
import Dashboard from "./views/DashboardPage.vue";
import QuizCreator from "./views/QuizCreatorPage.vue";

export default {
  components: {
    Sidebar,
    TopBar,
    Dashboard,
    QuizCreator,
  },
  data() {
    return {
      currentView: "Dashboard", // Default view
    };
  },
  methods: {
    changeView(view) {
      // Change the current view based on the clicked menu item
      switch (view) {
        case "Dashboard":
          this.currentView = "Dashboard";
          break;
        case "Quizzes":
          this.currentView = "Quizzes";
          break;
        case "createQuiz":
          this.currentView = "QuizCreator";
          break;
        default:
          this.currentView = "Dashboard";
          break;
      }
    },
    handleViewChange(view) {
      console.log("Event received in App.vue: change-view");
      console.log("Received view name:", view);
      this.currentView = view;
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
