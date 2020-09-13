<template>
  <div
    class="flex flex-col mt-8 transition duration-150 ease-in-out border rounded-lg lg:p-4 border-divider bg-primaryLight"
  >
    <div class="inline-flex flex-col flex-1 p-4">
      <div class="mb-4 text-xl font-bold text-secondaryDark">Last 7 days</div>
      <div class="flex overflow-auto">
        <table v-if="past.length !== 0" class="w-full">
          <thead class="text-xs text-left uppercase">
            <tr>
              <th class="py-3 pr-6 border-b border-divider">Date</th>
              <th class="px-6 py-3 border-b border-divider">Task</th>
              <th class="px-6 py-3 border-b border-divider">Status</th>
              <th class="px-6 py-3 border-b border-divider">Reward</th>
              <th class="px-6 py-3 border-b border-divider">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(day, index) in past" :key="index">
              <td class="py-4 pr-6 whitespace-no-wrap border-b border-divider">
                <div class="flex items-center">
                  <div class="truncate">
                    <span class="font-bold text-secondaryDark">
                      {{ day.date }}
                    </span>
                    <div class="text-sm truncate">{{ day.mood }}</div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-no-wrap border-b border-divider">
                <div class="font-bold text-secondaryDark">{{ day.task }}</div>
                <div class="text-xs">{{ day.duration }}</div>
              </td>
              <td class="px-6 py-4 whitespace-no-wrap border-b border-divider">
                <ChipPrimary
                  :label="day.status"
                  :color="getStatusColor(day.status)"
                />
              </td>
              <td
                class="px-6 py-4 font-bold whitespace-no-wrap border-b text-secondaryDark border-divider"
              >
                {{ day.reward }}
              </td>
              <td
                class="px-6 py-4 font-bold whitespace-no-wrap border-b text-secondaryDark border-divider"
              >
                <ButtonSecondary
                  color="gray"
                  icon="delete"
                  @click.native="deleteLog(day.id)"
                />
              </td>
            </tr>
          </tbody>
        </table>
        <Empty v-else />
      </div>
    </div>
  </div>
</template>

<script>
import moods from '~/helpers/data/moods'
import rewards from '~/helpers/data/rewards'
import tasks from '~/helpers/data/tasks'
import * as fb from '~/helpers/firebase'
import { getShortDateString } from '~/helpers/utils/dateutils'

export default {
  data() {
    return {
      past: [],
      cancel7DaysSubscription: null,
    }
  },
  mounted() {
    const sub = fb.subscribeToLogEntriesForPast7Days(
      this.$fireAuth,
      this.$fireStore,
      (logs) => {
        this.past = logs.map((log) => {
          return {
            date: getShortDateString(log.date),
            mood: moods[log.activeMood].name,
            task: tasks[log.activeTask].name,
            duration: tasks[log.activeTask].duration,
            status: this.getTaskStatusMessage(log.taskStatus),
            reward: rewards[log.activeReward].name,
            id: log.id,
          }
        })
      }
    )
    this.cancel7DaysSubscription = sub
  },
  beforeDestroy() {
    if (this.cancel7DaysSubscription) this.cancel7DaysSubscription()
  },
  methods: {
    getTaskStatusMessage(logTaskStatus) {
      const messages = {
        PENDING: 'Not reported',
        COMPLETED: 'Completed',
        // TODO : 'NOT-COMPLETE': 'Not completed',
        CANCELLED: 'Cancelled',
      }
      return messages[logTaskStatus] || logTaskStatus
    },
    getStatusColor(status) {
      switch (status) {
        case 'Completed':
          return 'green'
        case 'Not reported':
          return 'orange'
        case 'Cancelled':
          return 'red'
        default:
          break
      }
    },
    async deleteLog(logId) {
      try {
        await fb.deleteLogEntry(this.$fireAuth, this.$fireStore, logId)
        this.$toast.error('Task deleted', {
          icon: 'done',
        })
      } catch (_e) {
        this.$toast.error('Something went wrong, try again', {
          icon: 'error',
        })
      }
    },
  },
}
</script>
