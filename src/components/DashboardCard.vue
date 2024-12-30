<template>
  <v-card class="dashboard-card">
    <span class="card-title">{{ title }}</span>
    <span class="card-description">{{ description }}</span>
  </v-card>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.dashboard-card {
  width: 268px;
  height: 196px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 18px 43px 24px 18px;
  background: rgba(255, 255, 255, 0.34);
  border-radius: 14px;
  color: black;
  font-family: Arial, sans-serif;
}
</style>
