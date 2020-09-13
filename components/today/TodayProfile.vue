<template>
  <div
    class="flex flex-col transition duration-150 ease-in-out border rounded-lg lg:p-4 border-divider bg-primaryLight"
  >
    <div class="inline-flex flex-col flex-1 p-4">
      <div class="text-xl font-bold text-secondaryDark">Today's objective</div>
    </div>
    <div v-if="objectives.length !== 0">
      <div
        v-for="(objective, index) in objectives"
        :key="index"
        class="inline-flex flex-col items-center flex-1 p-4 md:items-start md:flex-row w-full"
      >
        <div class="w-full">
          <div
            v-if="loading"
            class="w-1/3 h-8 mb-4 rounded animate-pulse bg-secondaryLight"
          ></div>
          <h1
            v-else
            class="mb-4 text-2xl font-bold tracking-widest uppercase text-secondaryDark"
          >
            {{ objective.name }}
          </h1>
          <div
            v-if="loading"
            class="w-20 h-8 rounded-lg animate-pulse bg-secondaryLight"
          ></div>
          <ChipPrimary
            v-else
            color="orange"
            icon="watch_later"
            :label="objective.duration"
          />
          <div class="my-4">
            <ul v-if="loading" class="space-y-2 animate-pulse">
              <li class="w-3/5 h-2 rounded-lg bg-secondaryLight"></li>
              <li class="w-1/2 h-2 rounded-lg bg-secondaryLight"></li>
              <li class="w-2/3 h-2 rounded-lg bg-secondaryLight"></li>
            </ul>
            <ul v-else class="ml-4 space-y-2 list-disc">
              <li
                v-for="description in objective.description"
                :key="description"
              >
                {{ description }}
              </li>
            </ul>
          </div>
          <div
            v-if="loading"
            class="inline-flex flex-col flex-1 w-full my-4 animate-pulse md:flex-row"
          >
            <div
              class="inline-flex w-full h-10 rounded bg-secondaryLight"
            ></div>
            <div
              class="inline-flex w-full h-10 mt-4 rounded md:ml-4 md:mt-0 bg-secondaryLight"
            ></div>
          </div>
          <div
            v-else
            class="inline-flex flex-col flex-1 w-full my-4 md:flex-row"
          >
            <a
              class="inline-flex items-center justify-center px-4 py-2 font-bold text-blue-800 transition duration-150 ease-in-out bg-blue-200 border-2 border-blue-200 rounded-lg focus:outline-none hover:text-blue-900 hover:bg-blue-300 hover:border-blue-300"
              :href="objective.how"
              target="_blank"
            >
              Learn How
              <i class="ml-2 material-icons">play_circle_outline</i>
            </a>
            <ButtonPrimary
              label="I'm Done"
              icon="done"
              color="green"
              class="mt-4 md:ml-4 md:mt-0"
              :loading="finishing"
              @click.native="finishTask"
            />
          </div>
          <div v-if="loading" class="my-4 animate-pulse">
            <div class="w-2/3 h-2 rounded bg-secondaryLight"></div>
            <div class="w-1/2 h-2 mt-2 rounded bg-secondaryLight"></div>
          </div>
          <p v-else class="my-4 text-xs">
            <i>{{ objective.quote.description }}</i>
            <br />
            <i>{{ objective.quote.author }}</i>
          </p>
          <div
            v-if="loading"
            class="w-16 h-2 mt-2 rounded animate-pulse bg-secondaryLight"
          ></div>
          <span
            v-else
            class="font-mono text-xs text-red-400 transition duration-150 ease-in-out border-b cursor-pointer hover:border-red-400 focus:outline-none"
            @click="cancelTask"
          >
            Cancel Task
          </span>
        </div>
        <div
          v-if="loading"
          class="inline-flex w-full h-full rounded animate-pulse bg-secondaryLight"
        ></div>
        <Lottie
          v-else
          key="animation"
          :options="objective.options"
          :controls="false"
          class="w-full h-full"
        />
      </div>
    </div>
    <Empty v-else />
  </div>
</template>

<script>
import * as fb from '~/helpers/firebase'
import tasks from '~/helpers/data/tasks'

export default {
  data() {
    return {
      loading: true,
      objectives: [],
      cancelLogSubscription: null,
      finishing: false,
    }
  },
  mounted() {
    const subscription = fb.subscribeToLogForToday(
      this.$fireAuth,
      this.$fireStore,
      (logs) => {
        if (logs) {
          this.objectives = logs
            .filter((item) => item.taskStatus === 'PENDING')
            .map((log) => {
              return tasks[log.activeTask]
            })
          this.loading = false
        } else {
          this.objectives = null
        }
      }
    )
    this.cancelLogSubscription = subscription
  },
  beforeDestroy() {
    if (this.cancelLogSubscription) this.cancelLogSubscription()
  },
  methods: {
    async finishTask(objective) {
      this.finishing = true
      await fb
        .completeTask(this.$fireAuth, this.$fireStore, objective)
        .then(() => {
          this.$toast.success('Task completed', {
            icon: 'done',
          })
          this.$router.push('/finish')
        })
        .catch(() => {
          this.$toast.error('Something went wrong, try again', {
            icon: 'error',
          })
        })
    },
    async cancelTask(task) {
      await fb
        .cancelTask(this.$fireAuth, this.$fireStore)
        .then(() => {
          this.$toast.error('Task cancelled', {
            icon: 'done',
          })
        })
        .catch(() => {
          this.$toast.error('Something went wrong, try again', {
            icon: 'error',
          })
        })
    },
  },
}
</script>
