<template>
  <div
    class="flex flex-col transition duration-150 ease-in-out border rounded-lg lg:p-4 border-divider bg-primaryLight"
  >
    <div class="inline-flex flex-col flex-1 p-4">
      <div class="text-xl font-bold text-secondaryDark">Today's objective</div>
    </div>
    <div
      class="inline-flex flex-col items-center flex-1 p-4 md:items-start md:flex-row"
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
            <li v-for="description in objective.description" :key="description">
              {{ description }}
            </li>
          </ul>
        </div>
        <div
          v-if="loading"
          class="inline-flex flex-col flex-1 w-full my-4 animate-pulse md:flex-row"
        >
          <div class="inline-flex w-full h-10 rounded bg-secondaryLight"></div>
          <div
            class="inline-flex w-full h-10 mt-4 rounded md:ml-4 md:mt-0 bg-secondaryLight"
          ></div>
        </div>
        <div v-else class="inline-flex flex-col flex-1 w-full my-4 md:flex-row">
          <ButtonPrimary
            icon="play_circle_outline"
            label="Learn How"
            color="blue"
          />
          <ButtonPrimary
            to="/finish"
            label="I'm Done"
            icon="done"
            color="green"
            class="mt-4 md:ml-4 md:mt-0"
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
    }
  },
  computed: {
    // TEMP
    objective() {
      return this.objectives[0] || tasks[0]
    },
  },
  mounted() {
    const subscription = fb.subscribeToLogForToday(
      this.$fireAuth,
      this.$fireStore,
      (logs) => {
        if (logs) {
          this.objectives = logs.map((log) => tasks[log.activeTask])
          this.loading = false
        } else {
          // TODO: Handle no task today state
          // this.todayTask = null
          this.objectives = [tasks[0]] // TODO : Placeholder, remove this with null assign
        }
      }
    )
    this.cancelLogSubscription = subscription
  },
  beforeDestroy() {
    if (this.cancelLogSubscription) this.cancelLogSubscription()
  },
  methods: {
    async finishTask() {
      // TODO : Loading state ?
      // TODO : Completion State ?
      // TODO : Toasts ?
      await fb.completeTaskForToday(this.$fireAuth, this.$fireStore)
    },
    async cancelTask() {
      // TODO : Loading state ?
      // TODO : Completion State ?
      // TODO : Toasts ?
      await fb.cancelTaskForToday(this.$fireAuth, this.$fireStore)
    },
  },
}
</script>
