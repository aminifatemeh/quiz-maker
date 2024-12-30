<template>
  <v-app>
    <Sidebar @change-view="changeView" />
    <div class="main-content">
      <TopBar />
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
      this.currentView = view === "createQuiz" ? "QuizCreator" : "Dashboard";
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
  background-color: #ebdfd7;
}

* {
  box-sizing: border-box;
}
</style>
