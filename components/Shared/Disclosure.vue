<template>
  <div class="Disclosure" :class="{ 'Disclosure--is-open': open }">
    <button
      id="disclosure-button-1"
      class="Disclosure__btn"
      type="button"
      aria-expanded="true"
      aria-controls="disclosure-panel-1"
      @click="open = !open"
    >
      <slot name="button" />
    </button>
    <div id="disclosure-panel-1" class="Disclosure__panel">
      <div class="Disclosure__panel-inner">
        <slot name="panel" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Disclosure',

  data() {
    return {
      open: false,
    }
  },
}
</script>

<style lang="postcss">
.Disclosure__btn {
  @apply flex
    justify-between
    items-center
    w-full
    px-4
    py-2
    text-left
    text-3xl
    border-b border-black;
}

.Disclosure__panel {
  @apply border-b border-black;

  max-height: 0;
  opacity: 0;
  pointer-events: none;
  transition: border 0.3s ease-in-out, opacity 0.3s ease-in-out,
    max-height 0.5s ease-in-out;

  .Disclosure--is-open & {
    max-height: 100%;
    opacity: 1;
    pointer-events: auto;
    transition: border 0.3s ease-in-out, opacity 0.3s ease-in-out,
      max-height 0.5s ease-in-out;
  }
}

.Disclosure__panel-inner {
  @apply px-4 pt-4 pb-2;
}

.MenuItems {
  @apply grid
    gap-8
    grid-cols-2;
}

.MenuItem {
  @apply col-span-2
    md:col-span-1;
}

.dotted {
  @apply flex
    flex-grow
    border-b-2 border-black border-dotted
    ml-2
    mr-4
    mb-2;
}
</style>
