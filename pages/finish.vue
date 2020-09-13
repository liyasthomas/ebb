<template>
  <TranslateGroupDown
    class="flex flex-col items-center justify-center flex-1 max-w-sm px-8 py-4 mx-auto text-center"
  >
    <div key="title" class="mb-4 text-xl font-bold text-secondaryDark">
      Enjoy your reward
    </div>
    <Lottie
      key="animation"
      :height="'260px'"
      :options="reward.options"
      :controls="false"
    />
    <div key="body" class="flex flex-col items-center justify-center w-full">
      <div class="mb-4 text-xl font-bold text-secondaryDark">
        {{ reward.name }}
      </div>
      <ul class="mb-4 ml-4 space-y-2 text-left list-disc">
        <li v-for="description in reward.description" :key="description">
          {{ description }}
        </li>
      </ul>
      <ButtonPrimary to="/life" icon="keyboard_arrow_right" label="Home" />
    </div>
  </TranslateGroupDown>
</template>

<script>
import rewards from '~/helpers/data/rewards'

export default {
  middleware: 'auth-redirect-signin',
  computed: {
    reward() {
      return rewards[this.$route.query.id || 0]
    },
  },
  head() {
    return {
      title: `Finish - ${this.$store.state.name}`,
    }
  },
}
</script>
