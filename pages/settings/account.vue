<template>
  <div class="inline-flex flex-col flex-1 h-full lg:flex-row">
    <div class="inline-flex flex-col flex-1 p-4">
      <TranslateGroupDown>
        <div
          v-if="error"
          key="error"
          class="flex px-6 py-4 my-6 text-sm text-left text-red-800 bg-red-200 rounded-lg"
        >
          {{ error }}
        </div>
        <div
          key="delete"
          class="flex flex-col lg:p-4 transition duration-150 ease-in-out border rounded-lg border-divider bg-primaryLight"
        >
          <div class="inline-flex flex-col flex-1 p-4">
            <div class="text-xl font-bold text-secondaryDark">
              Delete account
            </div>
            <div class="text-sm">
              Delete your profile, along with your authentication associations.
              This include applications permissions (Google, GitHub), all
              contents you have, such as rewards, tasks, your emotion list or
              synced settings.
            </div>
            <p class="mt-4 font-mono text-xs">
              {{ this.$store.state.authUser.displayName }}
              <br />
              {{ this.$store.state.authUser.email }}
            </p>
          </div>
          <div class="inline-flex flex-col flex-1 p-4 lg:flex-row">
            <ButtonPrimary
              label="Delete"
              color="red"
              :loading="deleting"
              @click.native="$modal.show('delete-account')"
            />
          </div>
        </div>
      </TranslateGroupDown>
    </div>
    <DeleteAccountModal @onDeleteClicked="deleteAccount()" />
    <SidebarRight> </SidebarRight>
  </div>
</template>

<script>
export default {
  middleware: 'auth-redirect-signin',
  data() {
    return {
      error: null,
      deleting: false,
    }
  },
  methods: {
    async deleteAccount() {
      this.deleting = true

      try {
        await this.$fireAuth.currentUser.delete()

        this.$toast.success('Account deleted', {
          icon: 'save',
        })
        await this.$fireAuth.signOut()
        this.$toast.info('Signed out', {
          icon: 'person',
        })
        this.$store.commit('RESET_STORE')
        this.$router.push('/')
      } catch (error) {
        this.error = error.message
      }

      this.deleting = false
    },
  },
  head() {
    return {
      title: `Account Settings - ${this.$store.state.name}`,
    }
  },
}
</script>
