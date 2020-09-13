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

            <div
              key="streaks"
              class="flex flex-col mb-8 transition duration-150 ease-in-out border rounded-lg lg:p-4 border-divider bg-primaryLight"
            >
              <div class="inline-flex flex-col flex-1 p-4">
                <div class="text-xl font-bold text-secondaryDark">Streaks</div>
              </div>
              <div
                v-if="!loadingStreak"
                key="streak"
                class="inline-flex flex-col flex-1 p-4"
              >
                <div class="space-x-12 space-y-12">
                  <span v-for="(star, index) in streakCount" :key="index">
                    <i
                      class="text-yellow-300 material-icons"
                      style="font-size: 46px"
                      >star</i
                    >
                  </span>
                </div>
                <div v-if="streakCount === 0">
                  <h2 class="text-xl font-bold text-secondaryDark">
                    No ongoing streaks
                  </h2>
                  <p class="text-sm">
                    Start completing today's task to start a streak.
                  </p>
                </div>
                <h2 v-else class="text-xl font-bold text-secondaryDark">
                  You are on a {{ streakCount }} day streak.
                </h2>
              </div>
              <Empty v-else />
            </div>

            <TodayProfile key="today" />
            <PastLife key="past" />
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
