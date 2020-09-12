export const options = {
  name: 'ebb',
  shortDescription: 'Feel life again from a new perspective.',
  description:
    'ebb is an immersive task-based journey that inspires people towards self-discovery and emotional maturity — gain the ability to be fully present in the moment.',
  loading: {
    color: 'var(--color-accent)',
    background: 'var(--color-primary)',
  },
  app: {
    color: '#718096',
    background: '#ffffff',
    accent: '#67d9fb',
  },
  social: {
    twitter: '@liyasthomas',
  },
}

export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'spa',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: `${options.name} - ${options.shortDescription}`,
    meta: [
      {
        name: 'keywords',
        content: 'ebb, ebb life',
      },
      {
        name: 'X-UA-Compatible',
        content: 'IE=edge, chrome=1',
      },
      {
        itemprop: 'name',
        content: `${options.name} - ${options.shortDescription}`,
      },
      {
        itemprop: 'description',
        content: options.description,
      },
      {
        itemprop: 'image',
        content: '/icon.png',
      },
      {
        property: 'og:image',
        content: '/icon.png',
      },
      // Add to homescreen for Chrome on Android. Fallback for PWA (handled by nuxt)
      {
        name: 'application-name',
        content: options.name,
      },
      // Windows phone tile icon
      {
        name: 'msapplication-TileImage',
        content: `/icon.png`,
      },
      {
        name: 'msapplication-TileColor',
        content: options.app.background,
      },
      {
        name: 'msapplication-tap-highlight',
        content: 'no',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'apple-touch-icon',
        href: '/icon.png',
      },
      {
        rel: 'apple-touch-startup-image',
        href: '/icon.png',
      },
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: options.loading.color, continuous: true },
  /*
   ** Customize the loading indicator
   */
  loadingIndicator: {
    name: 'pulse',
    color: options.loading.color,
    background: options.loading.background,
  },
  /*
   ** Global CSS
   */
  css: [
    '~/assets/scss/themes.scss',
    '~/assets/scss/styles.scss',
    '~/assets/scss/fonts.scss',
  ],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: ['~/plugins/v-tooltip', '~/plugins/v-modal', '~/plugins/v-swiper'],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://pwa.nuxtjs.org
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    // Doc: https://github.com/nuxt-community/color-mode-module
    '@nuxtjs/color-mode',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org
    '@nuxtjs/axios',
    // Doc: https://firebase.nuxtjs.org
    '@nuxtjs/firebase',
    // Doc: https://github.com/nuxt-community/modules/tree/master/packages/toast
    '@nuxtjs/toast',
    // Doc: https://i18n.nuxtjs.org
    'nuxt-i18n',
  ],
  pwa: {
    meta: {
      ogHost: process.env.BASE_URL,
      twitterCard: 'summary_large_image',
      twitterSite: options.social.twitter,
      twitterCreator: options.social.twitter,
      description: options.shortDescription,
      theme_color: options.app.background,
    },
    manifest: {
      name: options.name,
      short_name: options.name,
      description: options.shortDescription,
      start_url: '/',
      background_color: options.app.background,
      theme_color: options.app.background,
    },
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
  /*
   ** Generate configuration
   */
  generate: {
    fallback: true,
  },
  toast: {
    position: 'bottom-center',
    duration: 3000,
    keepOnHover: true,
  },
  firebase: {
    config: {
      apiKey: process.env.API_KEY,
      authDomain: process.env.AUTH_DOMAIN,
      databaseURL: process.env.DATABASE_URL,
      projectId: process.env.PROJECT_ID,
      storageBucket: process.env.STORAGE_BUCKET,
      messagingSenderId: process.env.MESSAGING_SENDER_ID,
      appId: process.env.APP_ID,
      measurementId: process.env.MEASUREMENT_ID,
    },
    services: {
      auth: {
        initialize: {
          onAuthStateChangedAction: 'onAuthStateChanged',
        },
      },
      firestore: true,
      storage: true,
    },
  },
  colorMode: { preference: 'light' },
  publicRuntimeConfig: {
    BASE_URL: process.env.BASE_URL || '/',
  },
  i18n: {
    locales: [
      {
        code: 'en',
        name: 'English',
        iso: 'en-US',
        file: 'en-US.json',
      },
      {
        code: 'es',
        name: 'Español',
        iso: 'es-ES',
        file: 'es-ES.json',
      },
    ],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
    },
    lazy: true,
    langDir: 'locales/',
  },
  privateRuntimeConfig: {
    API_KEY: process.env.API_KEY,
    AUTH_DOMAIN: process.env.AUTH_DOMAIN,
    DATABASE_URL: process.env.DATABASE_URL,
    PROJECT_ID: process.env.PROJECT_ID,
    STORAGE_BUCKET: process.env.STORAGE_BUCKET,
    MESSAGING_SENDER_ID: process.env.MESSAGING_SENDER_ID,
    APP_ID: process.env.APP_ID,
    MEASUREMENT_ID: process.env.MEASUREMENT_ID,
  },
  router: {
    linkActiveClass: 'text-accent hover:text-accent',
    linkExactActiveClass: 'text-accent hover:text-accent',
  },
}
