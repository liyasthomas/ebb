<template>
  <img
    class="shadow-inner bg-primaryDark"
    :class="`h-${size} w-${size} rounded-${radius} bg-${color} object-cover`"
    :src="url"
    :alt="alt"
    loading="lazy"
  />
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      default: `https://avatars.dicebear.com/v2/avataaars/${Math.random()
        .toString(36)
        .substring(7)}.svg?mood[]=happy`,
    },
    size: {
      type: Number,
      default: 6,
    },
    radius: {
      type: String,
      default: 'full',
    },
    color: {
      type: String,
      default: 'gray',
    },
    alt: {
      type: String,
      default: 'Profile picture',
      // default() {
      //   return this.url
      //     .split('/')
      //     .pop()
      //     .split('.')[0]
      //     .split('#')[0]
      //     .split('?')[0]
      // },
    },
  },
}
</script>
