<template>
  <div class="flex flex-col p-4 lg:flex-row">
    <SidebarLeft>
      <div
        class="hidden px-4 py-8 text-sm font-bold tracking-wide lg:inline-flex text-secondaryLight"
      >
        ebb
      </div>
      <TabPrimary to="/life" label="Life" exact />
    </SidebarLeft>
    <div class="flex flex-col flex-1">
      <EmotionPrompt />
      <nuxt-child />
    </div>
  </div>
</template>

<script>
export default {
  middleware: 'auth-redirect-signin',
}
</script>
