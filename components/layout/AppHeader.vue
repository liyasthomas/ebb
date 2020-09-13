<template>
  <header class="sticky top-0 z-20 bg-white bg-opacity-75">
    <TranslateDown>
      <nav
        class="container flex flex-wrap items-center justify-between px-4 py-2 mx-auto transition duration-150 ease-in-out bg-transparent border-b border-transparent"
        :class="{ 'border-dividerLight': scrolled }"
      >
        <div class="inline-flex flex-shrink-0">
          <nuxt-link
            v-tooltip="{ content: !signedIn ? '' : 'Home' }"
            :to="!signedIn ? localePath('/') : localePath('/life')"
            class="inline-flex items-center px-4 py-2 transition duration-150 ease-in-out rounded-lg focus:outline-none"
            exact
          >
            <Logo class="w-6 h-6" />
            <span v-if="!signedIn" class="ml-4 font-bold"> ebb </span>
          </nuxt-link>
        </div>
        <div class="inline-flex">
          <nuxt-link
            v-if="signedIn"
            v-tooltip="'Profile'"
            :to="localePath('/profile')"
            class="inline-flex items-center px-4 py-2 transition duration-150 ease-in-out rounded-lg focus:outline-none"
          >
            <ProfilePicture :url="this.$store.state.authUser.photoURL" />
          </nuxt-link>
          <TabPrimary v-if="!signedIn" to="/enter" icon="login" label="Enter" />
          <v-popover v-else>
            <TabPrimary v-tooltip="'More'" icon="more_vert" />
            <template slot="popover">
              <div class="flex flex-col items-stretch">
                <PopoverItem
                  v-close-popover
                  to="/settings"
                  icon="settings"
                  label="Settings"
                />
                <PopoverItem
                  v-close-popover
                  to="/about"
                  icon="help_outline"
                  label="About"
                />
                <div class="my-2 border-t border-dividerLight"></div>
                <PopoverItem
                  v-close-popover
                  icon="exit_to_app"
                  label="Sign out"
                  @click.native="$modal.show('sign-out')"
                />
              </div>
            </template>
          </v-popover>
        </div>
      </nav>
    </TranslateDown>
    <SignOutModal />
  </header>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  data() {
    return {
      scrolled: false,
    }
  },
  computed: {
    ...mapState({
      authUser: (state) => state.authUser,
    }),
    ...mapGetters({
      signedIn: 'signedIn',
    }),
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.scrolled = window.scrollY > 0
    },
  },
  beforeDestroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
}
</script>
