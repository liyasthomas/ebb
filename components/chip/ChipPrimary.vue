<template>
  <component
    :is="to ? 'nuxt-link' : 'div'"
    :to="localePath(to)"
    class="inline-flex items-center justify-center py-1 text-xs font-bold transition duration-150 ease-in-out rounded-full focus:outline-none"
    :class="[
      color ? `text-${color}-800 bg-${color}-200` : 'text-primary bg-accent',
      label ? 'px-2' : 'px-1',
      { 'opacity-50 cursor-not-allowed': disabled },
    ]"
    :disabled="disabled"
    type="button"
  >
    <i v-if="icon" :class="label ? 'mr-2' : ''" class="material-icons">
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
    disabled: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
