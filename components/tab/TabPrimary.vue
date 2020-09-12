<template>
  <component
    :is="to ? 'nuxt-link' : 'button'"
    :to="localePath(to)"
    :exact="exact"
    class="inline-flex items-center px-4 py-2 font-bold transition duration-150 ease-in-out border-2 border-transparent rounded-lg w-100 hover:border-transparent focus:outline-none"
    :class="[
      color
        ? `text-${color}-500 hover:text-${color}-600`
        : 'hover:text-secondaryDark',
      { 'opacity-50 cursor-not-allowed': disabled },
    ]"
    :disabled="disabled"
    type="button"
  >
    <i v-if="icon" :class="label ? 'mr-4' : ''" class="material-icons">
      {{ icon }}
    </i>
    {{ label }}
  </component>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      default: '',
    },
    exact: {
      type: Boolean,
      default: false,
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
  },
}
</script>
