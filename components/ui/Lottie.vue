<template>
  <div
    class="relative"
    @mouseover="showControls = true"
    @mouseleave="showControls = false"
  >
    <TranslateDown>
      <div ref="lottieContainer" :style="style"></div>
    </TranslateDown>
    <TranslateDown>
      <div
        v-if="controls && showControls"
        class="absolute bottom-0 left-0 z-10 flex items-center justify-center w-full"
      >
        <div class="bg-opacity-25 rounded-lg bg-primaryDark">
          <ButtonSecondary
            :icon="playing ? 'pause_circle_filled' : 'play_circle_filled'"
            @click.native="playing ? pause() : play()"
          />
          <ButtonSecondary icon="stop_circle" @click.native="stop" />
        </div>
        <!-- <span>x{{ animationSpeed }}</span>
        <input
          v-model="animationSpeed"
          class="w-full h-2 overflow-hidden bg-gray-400 rounded-lg appearance-none"
          type="range"
          value="1"
          min="0"
          max="3"
          step="0.5"
          @change="onSpeedChange"
        /> -->
      </div>
    </TranslateDown>
  </div>
</template>

<script>
import lottie from 'lottie-web'

export default {
  props: {
    options: {
      type: Object,
      required: true,
      default: () => {},
    },
    height: { type: String, default: '100%' },
    width: { type: String, default: '100%' },
    margin: { type: String, default: '0 auto' },
    controls: { type: Boolean, default: true },
    loop: { type: Boolean, default: true },
    autoplay: { type: Boolean, default: true },
  },
  data() {
    return {
      style: {
        width: this.width,
        height: this.height,
        overflow: 'hidden',
        margin: this.margin,
      },
      animationSpeed: 1,
      showControls: false,
      playing: true,
      anim: {},
    }
  },
  watch: {
    options(newOptions) {
      if (this.anim) this.anim.destroy()

      this.anim = lottie.loadAnimation({
        container: this.$refs.lottieContainer,
        renderer: 'svg',
        loop: this.loop,
        autoplay: this.autoplay,
        animationData: newOptions.animationData,
        rendererSettings: newOptions.rendererSettings,
        path: newOptions.path,
      })
      this.handleAnimation(this.anim)
    },
  },
  mounted() {
    this.anim = lottie.loadAnimation({
      container: this.$refs.lottieContainer,
      renderer: 'svg',
      loop: this.loop,
      autoplay: this.autoplay,
      animationData: this.options.animationData,
      rendererSettings: this.options.rendererSettings,
      path: this.options.path,
    })
    this.handleAnimation(this.anim)
  },
  beforeDestroy() {
    if (this.anim) this.anim.destroy()
  },
  methods: {
    handleAnimation(anim) {
      this.anim = anim
    },
    stop() {
      this.anim.stop()
      this.playing = false
    },
    play() {
      this.anim.play()
      this.playing = true
    },
    pause() {
      this.anim.pause()
      this.playing = false
    },
    onSpeedChange() {
      this.anim.setSpeed(this.animationSpeed)
    },
  },
}
</script>
