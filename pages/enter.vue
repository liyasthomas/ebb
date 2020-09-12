<template>
  <TranslateGroupDown
    class="flex flex-col items-center justify-center flex-1 max-w-sm px-8 pb-4 mx-auto text-center"
  >
    <Lottie
      key="animation"
      :height="'260px'"
      :options="defaultOptions"
      :controls="false"
    />
    <div key="body" class="flex flex-col items-center justify-center w-full">
      <SignInButtons v-if="!this.$store.state.authUser" />
      <Spinner v-else />
    </div>
  </TranslateGroupDown>
</template>

<script>
import signinAnimation from '~/static/animations/sign-in.json'

export default {
  middleware: 'auth-redirect-home',
  data() {
    return {
      defaultOptions: { animationData: signinAnimation },
    }
  },
  head() {
    return {
      title: `Enter - ${this.$store.state.name}`,
    }
  },
}
</script>
