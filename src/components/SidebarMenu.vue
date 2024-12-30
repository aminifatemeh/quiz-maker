<template>
  <v-navigation-drawer app permanent class="sidebar">
    <v-row align="center" class="mt-8" no-gutters>
      <v-col class="logo-container" cols="3">
        <img src="@/assets/logo.svg" alt="Logo" class="logo" />
      </v-col>
      <v-col class="title-container" cols="8">
        <h3 style="color: white;">Quiz Maker</h3>
      </v-col>
    </v-row>

    <!-- Create New Project Button -->
    <BaseButton label="Create New Quiz" icon-name="plus-icon" color="#FFFFFF" class="my-16">
    </BaseButton>

    <!-- Sidebar Menu Items -->
    <v-list>
      <v-list-item
          v-for="(item, index) in menuItems"
          :key="index"
          :class="{'active-item': activeItem === item.name}"
          @click="selectItem(item.name)"
      >
        <v-list-item-icon>
          <BaseIcon :name="item.icon"/>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title :class="{'white-text': activeItem !== item.name, 'black-text': activeItem === item.name}">{{item.name}}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import BaseButton from "@/components/BaseComponents/BaseButton.vue";
import BaseIcon from "@/components/BaseComponents/BaseIcon.vue";

export default {
  name: 'SidebarMenu',
  components: {BaseButton, BaseIcon},
  data() {
    return {
      activeItem: '', // Track the active item
      menuItems: [
        { name: 'Dashboard', icon: 'dashboard' },
        { name: 'Quizzez', icon: 'quiz' },
        // Add more menu items as needed
      ],
    };
  },
  methods: {
    createNewProject() {
      // Handle the "Create New Project" click action here
      console.log('Create new project clicked');
    },
    selectItem(itemName) {
      this.activeItem = itemName;
      console.log(`Selected ${itemName}`);
    },
  },
};
</script>

<style scoped>
.sidebar {
  background: #060606;
  width: 260px;
  height: 100vh;
  display: flex;
  align-items: center;
}

.active-item {
  background: #ffffff;
  border-radius: 24px;
}

.white-text {
  color: white; /* Inactive text color */
}

.black-text {
  color: black; /* Active text color */
}

.v-list-item {
  cursor: pointer;
}


</style>
