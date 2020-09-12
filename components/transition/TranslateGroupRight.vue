<template>
  <transition-group
    name="translate-group-right"
    appear
    enter-active-class="transition duration-300 ease-in-out transform"
    enter-class="scale-95 -translate-x-3 opacity-0"
    enter-to-class="scale-100 translate-x-0 opacity-100"
    leave-active-class="transition duration-150 ease-in-out transform"
    leave-class="translate-x-0 opacity-100"
    leave-to-class="-translate-x-3 opacity-0"
  >
    <slot></slot>
  </transition-group>
</template>
