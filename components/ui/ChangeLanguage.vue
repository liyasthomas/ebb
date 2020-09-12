<template>
  <v-popover>
    <ButtonSecondary icon="translate" :label="$i18n.locale.toUpperCase()" />
    <template slot="popover">
      <nuxt-link
        v-for="locale in $i18n.locales.filter(
          ({ code }) => code !== $i18n.locale
        )"
        :key="locale.code"
        :to="switchLocalePath(locale.code)"
      >
        <PopoverItem v-close-popover :label="locale.name" />
      </nuxt-link>
    </template>
  </v-popover>
</template>
