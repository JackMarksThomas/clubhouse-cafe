<template>
  <BaseLink v-bind="$attrs" :class="classes">
    <slot />
  </BaseLink>
</template>

<script>
export default {
  name: 'PrimaryLink',

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
/* Styles */
</style>
