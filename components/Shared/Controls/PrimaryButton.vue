<template>
  <BaseLinkBtn v-bind="$attrs" :class="classes">
    <slot />
  </BaseLinkBtn>
</template>

<script>
export default {
  name: 'PrimaryButton',

  computed: {
    classes() {
      return {
        PrimaryButton: true,
      }
    },
  },
}
</script>

<style lang="postcss">
.PrimaryButton {
  @apply uppercase
    leading-none
    px-8
    py-5
    border
    border-white
    hover:bg-white
    hover:text-gray-900
    transition-colors
    duration-300;
}
</style>
