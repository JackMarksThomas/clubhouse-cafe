<template>
  <div class="Disclosure">
    <button
      id="disclosure-button-1"
      class="Disclosure__btn"
      type="button"
      aria-expanded="true"
      aria-controls="disclosure-panel-1"
      @click="open = !open"
    >
      <span>Toasties</span>
    </button>
    <div v-show="open" id="disclosure-panel-1" class="Disclosure__panel">
      <div class="MenuItems">
        <div class="MenuItem">
          <div class="flex justify-between mb-4">
            <span class="text-2xl">Jack</span>
            <span class="text-2xl">£6.00</span>
          </div>
          <span>
            If you're unhappy with your purchase for any reason, email us within
            90 days and we'll refund you in full, no questions asked.
          </span>
        </div>
        <div class="MenuItem">
          <div class="flex justify-between mb-4">
            <span class="text-2xl">Jack</span>
            <span class="text-2xl">£6.00</span>
          </div>
          <span>
            If you're unhappy with your purchase for any reason, email us within
            90 days and we'll refund you in full, no questions asked.
          </span>
        </div>
        <div class="MenuItem">
          <div class="flex justify-between mb-4">
            <span class="text-2xl">Jack</span>
            <span class="text-2xl">£6.00</span>
          </div>
          <span>
            If you're unhappy with your purchase for any reason, email us within
            90 days and we'll refund you in full, no questions asked.
          </span>
        </div>
        <div class="MenuItem">
          <div class="flex justify-between mb-4">
            <span class="text-2xl">Jack</span>
            <span class="text-2xl">£6.00</span>
          </div>
          <span>
            If you're unhappy with your purchase for any reason, email us within
            90 days and we'll refund you in full, no questions asked.
          </span>
        </div>
        <div class="MenuItem">
          <div class="flex justify-between mb-4">
            <span class="text-2xl">Jack</span>
            <span class="text-2xl">£6.00</span>
          </div>
          <span>
            If you're unhappy with your purchase for any reason, email us within
            90 days and we'll refund you in full, no questions asked.
          </span>
        </div>
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
    w-full
    px-4
    py-2
    text-left
    text-3xl
    border border-black;
}

.Disclosure__panel {
  @apply px-4 pt-4 pb-2
    border border-black border-t-0;
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
</style>
