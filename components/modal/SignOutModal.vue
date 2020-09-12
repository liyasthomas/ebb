<template>
  <modal
    name="sign-out"
    height="auto"
    width="300"
    classes="p-8 rounded-lg shadow-lg bg-primaryLight"
  >
    <h2 class="text-xl font-bold text-secondaryDark">Sign out</h2>
    <p class="mt-4">
      You can always log back in at any time. If you just want to log in to
      another device, you can do that from the
      <nuxt-link
        :to="localePath('/life')"
        class="transition duration-150 ease-in-out border-b-2 text-accent hover:border-accent focus:outline-none"
        @click.native="$modal.hide('sign-out')"
      >
        ebb life
      </nuxt-link>
      .
    </p>
    <div class="flex mt-4">
      <SignOutButton v-close-popover @click.native="$modal.hide('sign-out')" />
      <ButtonSecondary
        label="Cancel"
        color="gray"
        class="ml-2"
        @click.native="$modal.hide('sign-out')"
      />
    </div>
  </modal>
</template>
