<template>
  <div class="flex flex-col p-4 lg:flex-row">
    <SidebarLeft>
      <div
        class="hidden px-4 py-8 text-sm font-bold tracking-wide lg:inline-flex text-secondaryLight"
      >
        settings
      </div>
      <TabPrimary to="/settings" label="General" icon="settings" exact />
      <TabPrimary
        to="/settings/account"
        label="Account"
        icon="account_circle"
        exact
      />
    </SidebarLeft>
    <nuxt-child />
  </div>
</template>

<script>
export default {
  middleware: 'auth-redirect-signin',
}
</script>
