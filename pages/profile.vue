<template>
  <div class="flex flex-col p-4 lg:flex-row">
    <SidebarLeft> </SidebarLeft>
    <div class="flex flex-col flex-1">
      <div class="inline-flex flex-col flex-1 h-full lg:flex-row">
        <div class="inline-flex flex-col flex-1 p-4">
          <TranslateGroupDown>
            <div
              key="profile"
              class="flex flex-col items-center justify-center p-4 mb-4"
            >
              <ProfilePicture
                :src="this.$store.state.authUser.photoURL"
                :size="32"
                class="border-8 border-accent"
              />
              <h1 class="mt-4 text-2xl font-bold text-secondaryDark">
                {{ this.$store.state.authUser.displayName }}
              </h1>
            </div>

            <!-- TODO : Liyyyaaasssss dooooo youuuurrr unicorn magikkkkk!!!! --->
            <div key="streak" v-if="!loadingStreak">
              Streak Count: {{ streakCount }}
            </div>
            <div key="streak" v-else>Loading Streak Count</div>

            <TodayTasks key="today" />
            <PastTasks key="past" />
            <Empty key="empty" />
          </TranslateGroupDown>
        </div>
        <SidebarRight> </SidebarRight>
      </div>
    </div>
  </div>
</template>

<script>
import * as fb from '~/helpers/firebase'

export default {
  middleware: 'auth-redirect-signin',
  data() {
    return {
      loadingStreak: true,
      streakCount: null,
    }
  },
  mounted() {
    this.fetchStreakCount()
  },
  methods: {
    async fetchStreakCount() {
      this.loadingStreak = true

      const count = await fb.getStat(this.$fireAuth, this.$fireStore, 'streak')

      this.streakCount = count || 0

      this.loadingStreak = false
    },
  },
}
</script>
