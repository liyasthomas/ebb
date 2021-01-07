import webpack from 'webpack'

// Common options
export const options = {
  name: 'ebb',
  shortDescription: 'Feel life again from a new perspective.',
  description:
    'ebb is an immersive task-based journey that inspires people towards self-discovery and emotional maturity — gain the ability to be fully present in the moment.',
  keywords: 'ebb, stress, relief',
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
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    meta: [
      {
        name: 'keywords',
        content: options.keywords,
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
        content: `${process.env.BASE_URL}/banner.jpg`,
      },
      // Add to homescreen for Chrome on Android. Fallback for PWA (handled by nuxt)
      {
        name: 'application-name',
        content: options.name,
      },
      // Windows phone tile icon
      {
        name: 'msapplication-TileImage',
        content: '/icon.png',
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
  },

  // Customize the progress-bar color (https://nuxtjs.org/api/configuration-loading/#customizing-the-progress-bar)
  loading: { color: options.loading.color, continuous: true },

  // Customize the loading indicator (https://nuxtjs.org/api/configuration-loading-indicator)
  loadingIndicator: {
    name: 'pulse',
    color: options.loading.color,
    background: options.loading.background,
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~/assets/scss/themes.scss',
    '~/assets/scss/styles.scss',
    '~/assets/scss/fonts.scss',
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['~/plugins/v-tooltip', '~/plugins/v-modal', '~/plugins/v-swiper'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
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

  // Modules (https://go.nuxtjs.dev/config-modules)
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

  // PWA module configuration (https://pwa.nuxtjs.org/setup)
  pwa: {
    meta: {
      name: `${options.name} - ${options.shortDescription}`,
      description: options.description,
      ogHost: process.env.BASE_URL,
      ogImage: `${process.env.BASE_URL}/banner.jpg`,
      twitterCard: 'summary_large_image',
      twitterSite: options.social.twitter,
      twitterCreator: options.social.twitter,
      theme_color: options.app.background,
    },
    manifest: {
      name: options.name,
      short_name: options.name,
      description: options.shortDescription,
      start_url: '/',
      background_color: options.app.background,
    },
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    // You can extend webpack config here
    extend(config, ctx) {
      // Sets webpack's mode to development if `isDev` is true.
      if (ctx.isDev) {
        config.mode = 'development'
      }
    },
    plugins: [new webpack.IgnorePlugin(/\.\/locale$/)],
    // parallel: true,
    // cache: true,
    // hardSource: true,
  },

  // Generate configuration (https://nuxtjs.org/api/configuration-generate)
  generate: {
    fallback: true,
  },

  // Toast module configuration (https://github.com/nuxt-community/modules/tree/master/packages/toast)
  toast: {
    position: 'bottom-center',
    duration: 3000,
    keepOnHover: true,
  },

  // Firebase module configuration (https://github.com/nuxt-community/firebase-module)
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
    },
  },

  // Color Mode module configuration (https://github.com/nuxt-community/color-mode-module)
  colorMode: { preference: 'light' },

  // i18n module configuration (https://github.com/nuxt-community/i18n-module)
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

  // Public runtime configuration (https://nuxtjs.org/guide/runtime-config)
  publicRuntimeConfig: {
    BASE_URL: process.env.BASE_URL || '/',
  },

  // Private runtime configuration (https://nuxtjs.org/guide/runtime-config)
  privateRuntimeConfig: {
    API_KEY: process.env.API_KEY,
    AUTH_DOMAIN: process.env.AUTH_DOMAIN,
    DATABASE_URL: process.env.DATABASE_URL,
    PROJECT_ID: process.env.PROJECT_ID,
    STORAGE_BUCKET: process.env.STORAGE_BUCKET,
    MESSAGING_SENDER_ID: process.env.MESSAGING_SENDER_ID,
    APP_ID: process.env.APP_ID,
  },

  // Router configuration (https://nuxtjs.org/api/configuration-router)
  router: {
    linkActiveClass: 'text-accent hover:text-accent',
    linkExactActiveClass: 'text-accent hover:text-accent',
  },
}
