/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  experimental: 'all',
  corePlugins: {
    clear: false,
    float: false,
    skew: false,
  },
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        primaryLight: 'var(--color-primary-light)',
        primaryDark: 'var(--color-primary-dark)',
        secondary: 'var(--color-secondary)',
        secondaryLight: 'var(--color-secondary-light)',
        secondaryDark: 'var(--color-secondary-dark)',
        accent: 'var(--color-accent)',
        accentLight: 'var(--color-accent-light)',
        accentDark: 'var(--color-accent-dark)',
        divider: 'var(--color-divider)',
        dividerLight: 'var(--color-divider-light)',
        dividerDark: 'var(--color-divider-dark)',
        bgGrad1: 'var(bg-grad-1)',
        bgGrad2: 'var(bg-grad-2)',
      },
      inset: {
        header: '60px',
      },
    },
    fontFamily: {
      body: 'var(--font-body)',
      mono: 'var(--font-mono)',
      icon: 'var(--font-icon)',
    },
  },
  variants: {},
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
    ],
    // These options are passed through directly to PurgeCSS
    options: {
      whitelistPatterns: [
        /^bg-/,
        /^text-/,
        /^border-/,
        /^h-/,
        /^w-/,
        /^hover:/,
      ],
    },
  },
}
