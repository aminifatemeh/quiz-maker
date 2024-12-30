<template>
  <img v-if="iconPath" class="icon" alt="icon" :src="iconPath">
</template>

<script>
import { computed } from 'vue';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'icon',
  props: {
    name: {
      type: String,
      required: true, // Icon file name without extension
    },
    size: {
      type: [String, Number],
      default: 24, // Default size is 24px
    },
    color: {
      type: String,
      default: 'currentColor', // Default to current text color
    },
  },
  setup(props) {
    const iconPath = computed(() => require(`@/assets/icons/${props.name}.svg`));

    const iconSvg = computed(() => {
      if (!iconPath.value) return null;
      const svg = iconPath.value.default;
      return svg.replace('<svg', `<svg width="${props.size}" height="${props.size}" fill="${props.color}"`);
    });

    return { iconPath, iconSvg };
  },
};
</script>

<style scoped>
.icon {
  display: inline-block;
  line-height: 0;
  vertical-align: middle;
}
</style>
