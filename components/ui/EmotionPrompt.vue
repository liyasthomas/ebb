<template>
  <div class="inline-flex flex-col flex-1 h-full lg:flex-row">
    <div class="inline-flex flex-col flex-1 p-4">
      <TranslateDown>
        <div
          class="relative flex flex-col transition duration-150 ease-in-out border-2 border-dashed rounded-lg lg:p-4 border-divider bg-primaryLigh"
        >
          <div
            class="absolute inset-0 z-0 bg-top bg-no-repeat bg-cover"
            :style="`background-image: url(images/waves-illustration.svg)`"
          ></div>
          <div class="inline-flex flex-col flex-1 p-4">
            <div class="text-2xl font-bold text-secondaryDark">
              {{ greet }} {{ this.$store.state.authUser.displayName }},
              <br />
              How are you feeling today?
            </div>
          </div>
          <div class="z-10 inline-flex flex-col flex-1 p-4 md:flex-row">
            <ButtonPrimary
              to="/start"
              icon="keyboard_arrow_right"
              label="Start"
            />
          </div>
        </div>
      </TranslateDown>
    </div>
    <SidebarRight> </SidebarRight>
  </div>
</template>

<script>
export default {
  data() {
    return {
      greet: this.getGreeting(),
    }
  },
  methods: {
    getGreeting() {
      const hrs = new Date().getHours()
      let msg = 'Welcome'
      // if (hrs > 0) msg = "Mornin' Sunshine!"
      if (hrs > 6) msg = 'Good morning'
      if (hrs > 12) msg = 'Good afternoon'
      if (hrs > 17) msg = 'Good evening'
      // if (hrs > 22) msg = 'Go to bed!'
      return msg
    },
  },
}
</script>
