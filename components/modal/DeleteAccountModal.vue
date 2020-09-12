<template>
  <modal
    name="delete-account"
    height="auto"
    width="300"
    classes="p-8 rounded-lg shadow-lg bg-primaryLight"
  >
    <h2 class="text-xl font-bold text-secondaryDark">Delete Account</h2>
    <p class="mt-4">
      All your progress and data in ebb will be deleted. This action cannot be
      undone. <br />
      Are you sure ?
    </p>
    <div class="flex mt-4">
      <ButtonPrimary
        v-close-popover
        label="Delete"
        color="red"
        @click.native="onDeleteClick"
      />
      <ButtonSecondary
        label="Cancel"
        color="gray"
        class="ml-2"
        @click.native="$modal.hide('delete-account')"
      />
    </div>
  </modal>
</template>
<script>
export default {
  methods: {
    onDeleteClick() {
      this.$modal.hide('delete-account')
      this.$emit('onDeleteClicked')
    },
  },
}
</script>
