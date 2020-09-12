<template>
  <div
    class="flex flex-col mt-8 transition duration-150 ease-in-out border rounded-lg lg:p-4 border-divider bg-primaryLight"
  >
    <div class="inline-flex flex-col flex-1 p-4">
      <div class="mb-4 text-xl font-bold text-secondaryDark">Past 7 days</div>
      <div class="flex overflow-auto">
        <table class="w-full">
          <thead class="text-xs text-left uppercase">
            <tr>
              <th class="py-3 pr-6 border-b border-divider">Date</th>
              <th class="px-6 py-3 border-b border-divider">Task</th>
              <th class="px-6 py-3 border-b border-divider">Status</th>
              <th class="px-6 py-3 border-b border-divider">Reward</th>
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
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      past: [
        {
          date: '22 Sept',
          mood: 'Happy',
          task: 'Meditate',
          duration: '20 mins',
          status: 'Completed',
          reward: 'Game',
        },
        {
          date: '21 Sept',
          mood: 'Sad',
          task: 'Talk',
          duration: '10 mins',
          status: 'Not reported',
          reward: 'Nap',
        },
        {
          date: '20 Sept',
          mood: 'Happy',
          task: 'Listen',
          duration: '20 mins',
          status: 'Completed',
          reward: 'Picnic',
        },
        {
          date: '19 Sept',
          mood: 'Anxious',
          task: 'Read',
          duration: '20 mins',
          status: 'Completed',
          reward: 'Game',
        },
        {
          date: '18 Sept',
          mood: 'Depressed',
          task: 'Jog',
          duration: '20 mins',
          status: 'Canceled',
          reward: 'Volunter',
        },
        {
          date: '17 Sept',
          mood: 'Sad',
          task: 'Meditate',
          duration: '20 mins',
          status: 'Completed',
          reward: 'Ice cream',
        },
      ],
    }
  },
  methods: {
    getStatusColor(status) {
      switch (status) {
        case 'Completed':
          return 'green'
        case 'Not reported':
          return 'orange'
        case 'Canceled':
          return 'red'
        default:
          break
      }
    },
  },
}
</script>
