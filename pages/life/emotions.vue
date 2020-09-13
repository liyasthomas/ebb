<template>
  <div class="inline-flex flex-col flex-1 h-full lg:flex-row">
    <div class="inline-flex flex-col flex-1 p-4">
      <TranslateGroupDown>
        <TodayEmotions key="today" />
        <PastLife key="past" />
      </TranslateGroupDown>
    </div>
    <SidebarRight> </SidebarRight>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: `Emotions - ${this.$store.state.name}`,
    }
  },
}
</script>
