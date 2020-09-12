<template>
  <component
    :is="to ? 'nuxt-link' : 'button'"
    :to="localePath(to)"
    class="inline-flex items-center flex-1 py-2 font-bold transition duration-150 ease-in-out transform border-2 border-transparent w-100 hover:translate-x-2 hover:border-transparent focus:outline-none"
    :class="[
      label ? 'px-4 rounded-lg' : 'px-2 rounded-full',
      active
        ? color
          ? `text-${color}-500 hover:text-${color}-600`
          : 'text-accent'
        : 'hover:text-secondaryDark',
      color ? `text-${color}-500 hover:text-${color}-600` : '',
      { 'translate-x-2': active },
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
    active: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
