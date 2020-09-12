<template>
  <div class="inline-flex flex-col flex-1 h-full lg:flex-row">
    <div class="inline-flex flex-col flex-1 p-4">
      <TranslateGroupDown>
        <TodayTasks key="today" />
        <PastTasks key="past" />
        <Empty key="empty" />
      </TranslateGroupDown>
    </div>
    <SidebarRight> </SidebarRight>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: `Tasks - ${this.$store.state.name}`,
    }
  },
}
</script>
