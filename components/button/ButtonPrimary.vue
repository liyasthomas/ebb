<template>
  <component
    :is="to ? 'nuxt-link' : 'button'"
    :to="localePath(to)"
    class="inline-flex items-center justify-center py-2 font-bold transition duration-150 ease-in-out border-2 focus:outline-none"
    :class="[
      color
        ? `text-${color}-800 bg-${color}-200 border-${color}-200 hover:text-${color}-900 hover:bg-${color}-300 hover:border-${color}-300`
        : 'text-primary bg-accent border-accent hover:bg-accentDark hover:border-accentDark',
      label ? 'px-4 rounded-lg' : 'px-2 rounded-full',
      { 'opacity-50 cursor-not-allowed': disabled },
      { 'pointer-events-none': loading },
    ]"
    :disabled="disabled"
    type="button"
    :tabindex="{ '-1': loading }"
  >
    <span
      v-if="!loading"
      class="inline-flex items-center justify-center text-left"
    >
      {{ label }}
      <i v-if="icon" :class="label ? 'ml-2' : ''" class="material-icons">
        {{ icon }}
      </i>
    </span>
    <Spinner v-else />
  </component>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
