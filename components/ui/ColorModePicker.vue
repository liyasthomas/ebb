<template>
  <div class="space-x-4">
    <ButtonSecondary
      v-for="(color, index) of colors"
      :key="`color-${index}`"
      v-tooltip="`${color.charAt(0).toUpperCase()}${color.slice(1)}`"
      :icon="getIcon(color)"
      :class="[
        { 'bg-primary': color === $colorMode.preference },
        { 'text-accent': color === $colorMode.value },
      ]"
      @click.native="$colorMode.preference = color"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      colors: ['system', 'light', 'dark'],
    }
  },
  methods: {
    getIcon(color) {
      switch (color) {
        case 'system':
          return 'desktop_windows'
        case 'light':
          return 'wb_sunny'
        case 'dark':
          return 'nights_stay'
        default:
          return 'desktop_windows'
      }
    },
  },
}
</script>
