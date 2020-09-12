import Vue from 'vue'
import VTooltip from 'v-tooltip'

Vue.use(VTooltip, {
  defaultClass:
    'relative z-30 px-4 py-2 text-sm font-bold transition-opacity duration-150 ease-in-out rounded-lg shadow-lg bg-primaryLight text-secondaryDark',
  defaultOffset: 8,
  popover: {
    defaultClass:
      'relative z-40 bg-primaryLight shadow-lg rounded-lg p-2 transition-opacity duration-140 ease-in-out focus:outline-none',
    defaultOffset: 8,
  },
})
