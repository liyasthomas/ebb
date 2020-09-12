<template>
  <component
    :is="to ? 'nuxt-link' : 'button'"
    :to="localePath(to)"
    class="inline-flex items-center justify-between px-4 py-2 font-bold transition duration-150 ease-in-out rounded-lg hover:bg-primary hover:text-secondaryDark focus:outline-none"
    :class="[
      { 'opacity-50 cursor-not-allowed': disabled },
      { 'flex-1': label },
    ]"
    :disabled="disabled"
    type="button"
  >
    <span class="inline-flex items-center">
      <i v-if="icon" :class="label ? 'mr-4' : ''" class="material-icons">
        {{ icon }}
      </i>
      {{ label }}
    </span>
    <i v-if="infoIcon" class="ml-4 material-icons">
      {{ infoIcon }}
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
    disabled: {
      type: Boolean,
      default: false,
    },
    infoIcon: {
      type: String,
      default: '',
    },
  },
}
</script>
