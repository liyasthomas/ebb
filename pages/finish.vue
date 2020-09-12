<template>
  <TranslateGroupDown
    class="flex flex-col items-center justify-center flex-1 max-w-sm px-8 py-4 mx-auto text-center"
  >
    <Lottie
      key="animation"
      :height="'260px'"
      :options="defaultOptions"
      :controls="false"
      :loop="false"
    />
    <div key="body" class="flex flex-col items-center justify-center w-full">
      <div class="mb-4 text-xl font-bold text-secondaryDark">
        Enjoy your reward
      </div>
      <ButtonPrimary icon="keyboard_arrow_right" label="Start again" />
    </div>
  </TranslateGroupDown>
</template>

<script>
import finishAnimation from '~/static/animations/finish.json'

export default {
  middleware: 'auth-redirect-signin',
  data() {
    return {
      defaultOptions: { animationData: finishAnimation },
    }
  },
  head() {
    return {
      title: `Finish - ${this.$store.state.name}`,
    }
  },
}
</script>
