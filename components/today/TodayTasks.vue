<template>
  <div
    class="flex flex-col lg:p-4 transition duration-150 ease-in-out border rounded-lg border-divider bg-primaryLight"
  >
    <div class="inline-flex flex-col flex-1 p-4">
      <div class="text-xl font-bold text-secondaryDark">Today's objective</div>
    </div>
    <div
      class="inline-flex flex-col items-center flex-1 p-4 md:items-start md:flex-row"
    >
      <div class="w-full">
        <h1
          class="mb-4 text-2xl font-bold tracking-widest uppercase text-secondaryDark"
        >
          {{ objective.title }}
        </h1>
        <ChipPrimary
          color="orange"
          icon="watch_later"
          :label="objective.duration"
        />
        <div class="my-4">
          <ul class="ml-4 space-y-2 list-disc">
            <li v-for="description in objective.description" :key="description">
              {{ description }}
            </li>
          </ul>
        </div>
        <div class="inline-flex flex-col flex-1 w-full my-4 md:flex-row">
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
          />
        </div>
        <p class="my-4 text-xs">
          <i>{{ objective.quote.description }}</i>
          <br />
          <i>{{ objective.quote.author }}</i>
        </p>
        <span
          class="font-mono text-xs text-red-400 transition duration-150 ease-in-out border-b cursor-pointer hover:border-red-400 focus:outline-none"
        >
          Cancel Task
        </span>
      </div>
      <Lottie
        key="animation"
        :options="objective.options"
        :controls="false"
        class="w-full h-full"
      />
    </div>
  </div>
</template>

<script>
import meditateAnimation from '~/static/animations/meditate.json'

export default {
  data() {
    return {
      objective: {
        title: 'Meditate',
        duration: '20 mins',
        description: [
          'Do 10 sets of breathing exercises.',
          'Lorem ipsum dolor sit amet adipisicing.',
        ],
        quote: {
          description:
            '“Meditation and concentration are the way to a life of serenity.”',
          author: '— Baba Ram Dass',
        },
        options: { animationData: meditateAnimation },
      },
    }
  },
}
</script>
