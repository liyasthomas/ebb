<template>
  <div class="inline-flex flex-col flex-1 h-full lg:flex-row">
    <div class="inline-flex flex-col flex-1 p-4">
      <TranslateDown>
        <div
          class="flex flex-col lg:p-4 transition duration-150 ease-in-out border rounded-lg border-divider bg-primaryLight"
        >
          <div
            class="flex items-center justify-between p-4 duration-150 ease-in-out border-b border-dividerLight transition-border"
          >
            <div class="inline-flex flex-col flex-1 mr-4">
              <div class="text-xl font-bold text-secondaryDark">Language</div>
              <div class="text-sm">Choose your language</div>
            </div>
            <ChangeLanguage />
          </div>
          <div class="flex items-center p-4">
            <div class="inline-flex flex-col flex-1 mr-4">
              <div class="font-bold text-secondaryDark">Color mode</div>
              <div class="text-sm">
                Choose what suits best forr you. This settings are synced
                between all your devices and sessions.
              </div>
              <ColorModePicker class="py-4" />
              <div class="text-sm font-bold uppercase text-secondaryDark">
                {{ $colorMode.preference }}
                <span v-if="$colorMode.preference === 'system'">
                  : {{ $colorMode.value }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </TranslateDown>
    </div>
    <SidebarRight> </SidebarRight>
  </div>
</template>

<script>
export default {
  middleware: 'auth-redirect-signin',
  data() {
    return {
      settings: {
        toogleA: true,
        toogleB: false,
      },
    }
  },
  head() {
    return {
      title: `Settings - ${this.$store.state.name}`,
    }
  },
}
</script>
