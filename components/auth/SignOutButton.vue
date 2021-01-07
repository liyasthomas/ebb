<template>
  <ButtonPrimary label="Sign out" color="red" @click.native="signOut" />
</template>

<script>
export default {
  methods: {
    async signOut() {
      try {
        await this.$fire.auth.signOut()
        this.$toast.info('Signed out', {
          icon: 'person',
        })
        this.$router.push('/')
      } catch (e) {
        alert(e)
        this.$toast.error('Error while signing out', {
          icon: 'error',
        })
      }
    },
  },
}
</script>
