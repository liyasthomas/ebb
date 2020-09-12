<template>
  <TranslateGroupDown
    class="flex flex-col items-center justify-center flex-1 max-w-sm px-8 py-4 mx-auto text-center"
  >
    <Lottie
      key="animation"
      :height="'260px'"
      :options="emptyOptions"
      :controls="false"
      :loop="false"
    />
    <div key="body" class="flex flex-col items-center justify-center w-full">
      <h3 class="mb-4 text-lg font-bold">
        It's empty here.
        <br />
        Add your emotion.
      </h3>
      <ButtonPrimary to="/start" icon="keyboard_arrow_right" label="Start" />
    </div>
  </TranslateGroupDown>
</template>
<script>
import emptyAnimation from '~/static/animations/empty.json'

export default {
  data() {
    return {
      emptyOptions: { animationData: emptyAnimation },
    }
  },
}
</script>
