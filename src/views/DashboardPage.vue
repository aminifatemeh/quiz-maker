<template>
  <div class="dashboard">
    <v-main class="main">
      <div class="card-section">
        <DashboardCard
            v-for="card in dashboardCards"
            :key="card.id"
            :title="card.title"
            :description="card.description"
        />
      </div>
    </v-main>
  </div>
</template>

<script>
import DashboardCard from "@/components/DashboardCard.vue";

export default {
  components: {DashboardCard },
  data() {
    return {
      dashboardCards: [
        { id: 1, title: "Card 1", description: "Description for card 1" },
        { id: 2, title: "Card 2", description: "Description for card 2" },
      ],
    };
  },
};
</script>

<style scoped>
.dashboard {
  display: flex;
  background-color: #ebdfd7;
  height: 100vh;
}

.main {
  flex-grow: 1;
  padding: 20px;
}

.card-section {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}
</style>
