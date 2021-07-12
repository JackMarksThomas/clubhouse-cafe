<template>
  <svg
    class="IconCross"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <line class="IconCross_y" y1="11.5" x2="24" y2="11.5" stroke="black"></line>
    <line class="IconCross_x" x1="11.5" y1="24" x2="11.5" stroke="black"></line>
  </svg>
</template>

<script>
export default {
  name: 'IconCross',
}
</script>

<style lang="postcss">
.IconCross {
  transition: transform 0.3s ease-in-out;

  .Disclosure--is-open & {
    transform: rotate(90deg);
  }
}
.IconCross_y {
  transition: opacity 0.3s ease-in-out;

  .Disclosure--is-open & {
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }
}
</style>
