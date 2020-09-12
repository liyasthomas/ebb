<template>
  <div class="p-4">
    <div class="relative overflow-hidden">
      <div class="mx-auto">
        <div class="relative z-10 py-8 sm:py-16 md:py-20 lg:w-1/2 lg:py-24">
          <div class="px-4 mx-auto">
            <TranslateRight>
              <div class="sm:text-center lg:text-left">
                <h2
                  class="text-4xl font-extrabold leading-none text-secondaryDark sm:text-5xl md:text-6xl"
                >
                  Feel life again
                  <p
                    class="relative text-transparent bg-clip-text bg-gradient-to-r from-accent to-accentDark"
                  >
                    from a new perspective
                  </p>
                </h2>
                <p
                  class="mt-3 font-bold sm:mt-5 sm:text-lg sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
                >
                  Take actionable steps to obtain a positive impact on your
                  mental health.
                </p>
                <div class="flex justify-center mt-5 sm:mt-8 lg:justify-start">
                  <ButtonPrimary
                    to="/enter"
                    icon="keyboard_arrow_right"
                    label="Start Life"
                  />
                  <ButtonSecondary
                    to="/about"
                    color="gray"
                    icon="play_circle_outline"
                    label="Learn How"
                  />
                </div>
              </div>
            </TranslateRight>
          </div>
        </div>
      </div>
      <div
        class="flex items-center justify-center p-4 mx-auto lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2"
      >
        <TranslateLeft>
          <Lottie :options="defaultOptions" :controls="false" class="w-full" />
        </TranslateLeft>
      </div>
    </div>
  </div>
</template>

<script>
import bannerAnimation from '~/static/animations/landing-banner.json'

export default {
  middleware: 'auth-redirect-home',
  data() {
    return {
      defaultOptions: { animationData: bannerAnimation },
    }
  },
}
</script>
