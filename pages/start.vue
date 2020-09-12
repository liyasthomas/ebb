<template>
  <div class="px-8 py-4">
    <swiper
      ref="introSwiper"
      :options="introSwiperOptions"
      @slideChange="changeSwiperIndex"
    >
      <swiper-slide>
        <div class="flex items-center justify-between mb-4">
          <ButtonSecondary icon="arrow_back" to="/life" class="mr-2" />
          <h2 class="font-bold">How was your day?</h2>
          <ButtonSecondary
            icon="arrow_forward"
            class="ml-2"
            @click.native="next"
          />
        </div>
        <TranslateGroupDown
          class="grid grid-cols-1 gap-4 mx-auto md:grid-cols-5"
        >
          <SelectCard
            v-for="(mood, moodIndex) in moods"
            :key="mood.name"
            :name="mood.name"
            :options="mood.options"
            :active="activeMoodIndex === moodIndex"
            @click.native="activeMoodIndex = moodIndex"
          />
        </TranslateGroupDown>
        <TranslateGroupDown
          class="flex flex-col items-center justify-center flex-1 max-w-lg px-8 py-4 mx-auto text-center"
        >
          <div
            key="body"
            class="flex flex-col items-center justify-center font-mono text-sm"
          ></div>
        </TranslateGroupDown>
      </swiper-slide>
      <swiper-slide>
        <div class="flex items-center justify-between mb-4">
          <ButtonSecondary
            icon="arrow_back"
            class="mr-2"
            @click.native="prev"
          />
          <h2 class="font-bold">Choose a fun task</h2>
          <ButtonSecondary
            icon="arrow_forward"
            class="ml-2"
            @click.native="next"
          />
        </div>
        <TranslateGroupDown
          class="grid grid-cols-1 gap-4 mx-auto md:grid-cols-5"
        >
          <SelectCard
            v-for="(task, taskIndex) in tasks"
            :key="task.name"
            :name="task.name"
            :options="task.options"
            :active="activeTaskIndex === taskIndex"
            @click.native="activeTaskIndex = taskIndex"
          />
        </TranslateGroupDown>
        <TranslateGroupDown
          class="flex flex-col items-center justify-center flex-1 max-w-lg px-8 py-4 mx-auto text-center"
        >
          <div
            key="body"
            class="flex flex-col items-center justify-center font-mono text-sm"
          ></div>
        </TranslateGroupDown>
      </swiper-slide>
      <swiper-slide>
        <div class="flex items-center justify-between mb-4">
          <ButtonSecondary
            icon="arrow_back"
            class="mr-2"
            @click.native="prev"
          />
          <h2 class="font-bold">Earn a reward</h2>
          <ButtonSecondary
            icon="arrow_forward"
            class="ml-2"
            @click.native="next"
          />
        </div>
        <TranslateGroupDown
          class="grid grid-cols-1 gap-4 mx-auto md:grid-cols-5"
        >
          <SelectCard
            v-for="(reward, rewardIndex) in rewards"
            :key="reward.name"
            :name="reward.name"
            :options="reward.options"
            :active="activeRewardIndex === rewardIndex"
            @click.native="activeRewardIndex = rewardIndex"
          />
        </TranslateGroupDown>
        <TranslateGroupDown
          class="flex flex-col items-center justify-center flex-1 max-w-lg px-8 py-4 mx-auto text-center"
        >
          <div
            key="body"
            class="flex flex-col items-center justify-center font-mono text-sm"
          ></div>
        </TranslateGroupDown>
      </swiper-slide>
      <swiper-slide>
        <div class="flex items-center justify-between mb-4">
          <ButtonSecondary
            icon="arrow_back"
            class="mr-2"
            @click.native="prev"
          />
          <h2 class="font-bold">Ready?</h2>
          <ButtonSecondary
            icon="arrow_forward"
            class="ml-2"
            @click.native="finishClicked"
          />
        </div>
        <TranslateGroupDown
          class="flex flex-col items-center justify-center flex-1 max-w-lg px-8 py-4 mx-auto text-center"
        >
          <div key="body" class="flex flex-col items-center justify-center">
            <ul class="text-xl font-bold text-left list-disc">
              <li
                v-for="(task, index) in tasks[activeTaskIndex].description"
                :key="index"
              >
                {{ task }}
              </li>
            </ul>
          </div>
        </TranslateGroupDown>
      </swiper-slide>
    </swiper>
    <div class="flex items-center justify-center">
      <div
        class="inline-flex flex-col justify-center flex-1 items- lg:flex-row"
      >
        <ButtonPrimary
          v-if="activeSwiperIndex !== 3"
          icon="keyboard_arrow_right"
          label="Next"
          @click.native="next"
        />
        <ButtonPrimary
          v-else
          icon="done"
          label="Accept"
          :loading="finishing"
          @click.native="finishClicked"
        />
      </div>
    </div>
  </div>
</template>

<script>
import moods from '~/helpers/data/moods'
import tasks from '~/helpers/data/tasks'
import rewards from '~/helpers/data/rewards'

import * as fb from '~/helpers/firebase'

export default {
  middleware: 'auth-redirect-signin',
  data() {
    return {
      activeSwiperIndex: 0,
      introSwiperOptions: { autoHeight: true, spaceBetween: 10 },
      activeMoodIndex: 0,
      activeTaskIndex: 0,
      activeRewardIndex: 0,
      moods,
      tasks,
      rewards,
      finishing: false,
    }
  },
  computed: {
    activeMood() {
      return this.moods[this.activeMoodIndex].name
    },
    activeTask() {
      return this.tasks[this.activeTaskIndex].name
    },
    activeReward() {
      return this.rewards[this.activeRewardIndex].name
    },
  },
  methods: {
    async finishClicked() {
      try {
        this.finishing = true
        await fb.addLogEntryForToday(this.$fireAuth, this.$fireStore, {
          activeMood: this.activeMoodIndex,
          activeTask: this.activeTaskIndex,
          activeReward: this.activeRewardIndex,
          taskStatus: 'PENDING', // 'PENDING' | 'COMPLETE' | 'NOT-COMPLETE' | 'CANCELLED'
        })

        this.$router.push('/')
      } catch (e) {
        this.$toast.error(e, {
          icon: 'error',
        })
      }
      this.finishing = false
    },
    changeSwiperIndex() {
      this.activeSwiperIndex = this.$refs.introSwiper.$swiper.activeIndex
    },
    prev() {
      this.$refs.introSwiper.$swiper.slidePrev()
    },
    next() {
      this.$refs.introSwiper.$swiper.slideNext()
    },
  },
  head() {
    return {
      title: `Start - ${this.$store.state.name}`,
    }
  },
}
</script>
