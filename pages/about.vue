<template>
  <div class="max-w-lg px-8 py-4">
    <h1 class="text-2xl font-bold">ebb</h1>
    <p class="mt-4 font-mono text-sm font-bold">
      <i>noun</i>
      <br />
      the movement of the tide out to sea.
      <br />
      "the tide was on the ebb"
    </p>
    <hr class="my-4" />
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/VrhNVepG1lI"
      frameborder="0"
      allow="autoplay; encrypted-media"
      allowfullscreen
      class="w-full h-64 rounded-lg"
    ></iframe>
    <hr class="my-4" />
    <p class="mt-4">
      ebb is an interactive guided journey to reduce anxiety, manage stress and
      improve your health & happiness.
    </p>
    <p class="mt-4">
      We want to help people with stress/anxiety/depression realise their
      ability to take control of their condition and take actionable steps to
      obtain a positive impact on their mental health.
    </p>
    <hr class="my-4" />
    <p class="mt-4 font-mono text-xs">
      Built with <a class="text-accent" href="https://vuejs.org">Vue</a> +
      <a class="text-accent" href="https://nuxtjs.org">Nuxt</a> +
      <a class="text-accent" href="https://tailwindcss.com">Tailwind</a> +
      <a class="text-accent" href="https://firebase.google.com">Firebase</a>
      <br />
      Hosted on
      <a class="text-accent" href="https://www.netlify.com">Netlify</a> and
      <a class="text-accent" href="https://vercel.com/">Vercel</a>
      <br />
      Images from
      <a class="text-accent" href="https://www.flaticon.com">Flaticon</a>
      <br />
      Animations from
      <a class="text-accent" href="https://lottiefiles.com">Lottiefiles</a>
      <br />
      Snippets from
      <a class="text-accent" href="https://codepen.io">CodePen</a>
      <br />
      Thanks to
      <a class="text-accent" href="https://www.google.com">Google</a>,
      <a class="text-accent" href="https://stackoverflow.com">Stack Overflow</a>
      and
      <a class="text-accent" href="https://github.com">GitHub</a>
    </p>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: `About - ${this.$store.state.name}`,
    }
  },
}
</script>
