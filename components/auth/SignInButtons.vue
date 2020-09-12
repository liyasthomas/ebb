<template>
  <div class="flex flex-col w-full">
    <TranslateGroupDown class="flex flex-col">
      <button
        key="google"
        class="inline-flex items-center flex-1 px-6 py-4 font-bold transition duration-150 ease-in-out border rounded-lg hover:text-secondaryDark bg-primaryLight focus:outline-none border-divider hover:border-dividerDark focus:border-dividerDark"
        :class="{ 'pointer-events-none': signingInWithGoogle }"
        type="button"
        :tabindex="{ '-1': signingInWithGoogle }"
        @click="signInPopup('google')"
      >
        <svg
          v-if="!signingInWithGoogle"
          class="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            d="M113.47 309.408L95.648 375.94l-65.139 1.378C11.042 341.211 0 299.9 0 256c0-42.451 10.324-82.483 28.624-117.732h.014L86.63 148.9l25.404 57.644c-5.317 15.501-8.215 32.141-8.215 49.456.002 18.792 3.406 36.797 9.651 53.408z"
            fill="#fbbb00"
          />
          <path
            d="M507.527 208.176C510.467 223.662 512 239.655 512 256c0 18.328-1.927 36.206-5.598 53.451-12.462 58.683-45.025 109.925-90.134 146.187l-.014-.014-73.044-3.727-10.338-64.535c29.932-17.554 53.324-45.025 65.646-77.911h-136.89V208.176h245.899z"
            fill="#518ef8"
          />
          <path
            d="M416.253 455.624l.014.014C372.396 490.901 316.666 512 256 512c-97.491 0-182.252-54.491-225.491-134.681l82.961-67.91c21.619 57.698 77.278 98.771 142.53 98.771 28.047 0 54.323-7.582 76.87-20.818l83.383 68.262z"
            fill="#28b446"
          />
          <path
            d="M419.404 58.936l-82.933 67.896C313.136 112.246 285.552 103.82 256 103.82c-66.729 0-123.429 42.957-143.965 102.724l-83.397-68.276h-.014C71.23 56.123 157.06 0 256 0c62.115 0 119.068 22.126 163.404 58.936z"
            fill="#f14336"
          />
        </svg>
        <Spinner v-else />
        <div class="flex items-center flex-1 ml-4">
          <span class="text-left">Sign in with Google</span>
        </div>
      </button>
      <button
        key="github"
        class="inline-flex items-center flex-1 px-6 py-4 mt-4 font-bold transition duration-150 ease-in-out border rounded-lg hover:text-secondaryDark bg-primaryLight focus:outline-none border-divider hover:border-dividerDark focus:border-dividerDark"
        :class="{ 'pointer-events-none': signingInWithGitHub }"
        type="button"
        :tabindex="{ '-1': signingInWithGitHub }"
        @click="signInPopup('github')"
      >
        <svg
          v-if="!signingInWithGitHub"
          class="w-6 h-6"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 .5C5.37.5 0 5.78 0 12.292c0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.335-1.725-1.335-1.725-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.981.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.235-3.164-.135-.298-.54-1.497.105-3.121 0 0 1.005-.316 3.3 1.209.96-.262 1.98-.392 3-.398 1.02.006 2.04.136 3 .398 2.28-1.525 3.285-1.209 3.285-1.209.645 1.624.24 2.823.12 3.121.765.825 1.23 1.877 1.23 3.164 0 4.53-2.805 5.527-5.475 5.817.42.354.81 1.077.81 2.182 0 1.578-.015 2.846-.015 3.229 0 .309.21.678.825.56C20.565 21.917 24 17.495 24 12.292 24 5.78 18.627.5 12 .5z"
            fill="#212121"
          />
        </svg>
        <Spinner v-else />
        <div class="flex items-center justify-between flex-1 ml-4">
          <span class="text-left">Sign in with GitHub</span>
        </div>
      </button>
    </TranslateGroupDown>
    <v-dialog />
  </div>
</template>

<script>
export default {
  data() {
    return {
      signingInWithGoogle: false,
      signingInWithGitHub: false,
    }
  },
  methods: {
    async signInPopup(agent) {
      this.$toast.info('Signing in...', {
        icon: 'person',
      })
      let provider
      switch (agent) {
        case 'google':
          this.signingInWithGoogle = true
          provider = new this.$fireAuthObj.GoogleAuthProvider()
          break
        case 'github':
          this.signingInWithGitHub = true
          provider = new this.$fireAuthObj.GithubAuthProvider()
          break
        default:
          this.signingInWithGoogle = true
          provider = new this.$fireAuthObj.GoogleAuthProvider()
          break
      }
      return await this.$fireAuth
        .signInWithPopup(provider)
        .then(({ additionalUserInfo }) => {
          if (additionalUserInfo.isNewUser) {
            this.$toast.success('Welcome new user', {
              icon: 'person',
            })
          }
          this.$toast.success('Signed in', {
            icon: 'person',
          })
        })
        .catch((error) => {
          this.$modal.show('dialog', {
            title: 'Error',
            text: error,
            buttons: [
              {
                title: 'Try again',
                default: true,
                handler: () => {
                  this.signInPopup(agent)
                  this.$modal.hide('dialog')
                },
                class:
                  'inline-flex items-center justify-center px-4 py-2 text-sm font-bold transition duration-150 ease-in-out bg-primary text-secondary focus:outline-none hover:text-secondaryDark hover:bg-primaryDark',
              },
              {
                title: 'Cancel',
                class:
                  'inline-flex items-center justify-center px-4 py-2 text-sm font-bold transition duration-150 ease-in-out bg-primary text-secondary focus:outline-none hover:text-secondaryDark hover:bg-primaryDark',
                handler: () => {
                  this.$modal.hide('dialog')
                },
              },
            ],
          })
          this.$toast.error('Error while signing in', {
            icon: 'error',
          })
        })
        .finally(() => {
          this.signingInWithGoogle = this.signingInWithGitHub = false
        })
    },
  },
}
</script>
