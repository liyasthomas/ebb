<template>
  <div
    class="inline-flex items-center p-4 transition duration-150 ease-in-out border rounded-lg cursor-pointer md:justify-center md:flex-col border-divider hover:border-dividerDark focus:border-dividerDark bg-primaryLight hover:text-secondaryDark focus:outline-none"
    :class="{ 'bg-accentLight text-secondaryDark': active }"
  >
    <Lottie
      key="animation"
      :options="options"
      :controls="false"
      class="w-12 h-12 mr-2 md:w-full md:h-full md:order-2 md:mr-0"
    />
    <span class="text-sm font-bold md:mb-2 md:order-1">{{ name }}</span>
  </div>
</template>

<script>
export default {
  props: {
    name: { type: String, default: null },
    active: { type: Boolean, default: false },
    options: { type: Object, default: () => {} },
  },
}
</script>
