<template>
  <component
    :is="to ? 'nuxt-link' : 'button'"
    :to="localePath(to)"
    class="inline-flex items-center justify-center py-2 font-bold transition duration-150 ease-in-out border-2 border-transparent hover:border-transparent focus:outline-none"
    :class="[
      color
        ? `text-${color}-500 hover:text-${color}-600`
        : 'text-secondary hover:text-secondaryDark',
      label ? 'px-4 rounded-lg' : 'px-2 rounded-full',
      { 'opacity-50 cursor-not-allowed': disabled },
    ]"
    :disabled="disabled"
    type="button"
  >
    {{ label }}
    <i v-if="icon" :class="label ? 'ml-2' : ''" class="material-icons">
      {{ icon }}
    </i>
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
  },
}
</script>
