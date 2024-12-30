<template>
  <v-row class="top-bar-row" no-gutters>
    <!-- Dashboard Title (far left) -->
    <v-col cols="6" class="dashboard-title">
      <h3>Dashboard</h3>
    </v-col>

    <!-- Search Input (center) -->
    <v-col cols="4" class="search-input-section">
      <v-text-field solo dense placeholder="Search..." class="search-input" hide-details></v-text-field>
    </v-col>

    <!-- Profile Section (far right) -->
    <v-col cols="2" class="profile-input">
      <v-avatar size="40px" class="profile-picture">
        <img src="https://via.placeholder.com/40" alt="Profile" />
      </v-avatar>
      <div class="profile-info">
        <span class="profile-name">{{ name }}</span>
        <span class="profile-role">{{ role }}</span>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: "John Doe",
    },
    role: {
      type: String,
      default: "Teacher",
    },
  },
};
</script>

<style scoped>
.top-bar {
  /* Add some padding for spacing */
}

.top-bar-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
}

.dashboard-title {
  flex: 1;
}

.search-input {
  border-radius: 24px;
  width: 336px; /* Fixed width for the search input */
}

.profile-input {
  display: flex;
  align-items: center;
  gap: 15px; /* Adds space between the avatar and the profile info */
  margin-left: 15px; /* Adds space to the left of the profile section */
  background-color: #ffffff;
  border-radius: 24px;
}

.profile-picture {
  border-radius: 50%;
  margin: 5px;
}

.profile-info {
  display: flex;
  flex-direction: column;
}

.profile-name {
  font-weight: bold;
}

.profile-role {
  font-size: 12px;
  color: gray;
}
</style>
