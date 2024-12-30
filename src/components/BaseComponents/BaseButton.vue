<template>
  <v-btn
      class="custom-btn"
      :class="buttonClass"
      :color="color"
      :elevation="elevation"
  >
    <!-- Slot for icon -->
    <div class="btn-content">
      <BaseIcon v-if="!collapsed" :name="iconName" />
      <span v-if="!collapsed">{{ label }}</span>
    </div>
  </v-btn>
</template>

<script>
import BaseIcon from './BaseIcon.vue';

export default {
  name: 'BaseButton',
  components: {
    BaseIcon,
  },
  props: {
    label: {
      type: String,
      default: 'Button',
    },
    color: {
      type: String,
      default: 'white', // Default background color
    },
    elevation: {
      type: [String, Number],
      default: 2, // Default elevation
    },
    collapsed: {
      type: Boolean,
      default: false, // Determines if the button is collapsed
    },
    iconName: {
      type: String,
    },
  },
  computed: {
    buttonClass() {
      return {
        'collapsed': this.collapsed,
        'expanded': !this.collapsed,
        'custom-btn': true, // Always apply the custom-btn class
      };
    },
  },
};
</script>

<style scoped lang="scss">
.custom-btn {
  font-size: 10px;
  display: flex;
  align-items: center;
  border-radius: 24px;
  padding: 20px 0 !important;

  .btn-content{
    width: 100%;
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 5px;
  }

  &:hover {
    background-color: #f1f1f1; /* Light hover effect */
    transition: background-color 0.2s ease;
  }

  &.collapsed {
    padding: 0;
    justify-content: center;
  }

  &.expanded {
    width: 184px;
  }
}
</style>
