<template>
  <div class="flex flex-col items-center justify-center p-4 m-auto text-center">
    <Lottie :options="defaultOptions" :width="'360px'" :controls="false" />
    <!-- <h1 class="mt-4 text-2xl font-bold text-gray-600">
      :/
    </h1> -->
    <!-- <div class="py-4">
      <h2 class="text-xl text-gray-600">
        {{ error.statusCode }}
      </h2>
      <h3 class="text-xl text-gray-500">
        {{ error.message }}
      </h3>
    </div> -->
    <ButtonSecondary
      :to="!this.$store.state.authUser ? '/' : '/life'"
      label="Go Home"
    />
  </div>
</template>

<script>
import error404Animation from '~/static/animations/error-404.json'

export default {
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      defaultOptions: { animationData: error404Animation },
    }
  },
}
</script>
