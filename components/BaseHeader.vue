<template>
  <header class="BaseHeader">
    <nav class="BaseHeader__nav">
      <ul class="BaseHeader__nav-list">
        <li class="BaseHeader__nav-link">
          <NuxtLink to="/">Our Store</NuxtLink>
        </li>
        <li class="BaseHeader__nav-link">
          <NuxtLink to="/">Menu</NuxtLink>
        </li>
      </ul>
      <Logo />
      <ul class="BaseHeader__nav-list">
        <li class="BaseHeader__nav-link">
          <NuxtLink to="/">Location</NuxtLink>
        </li>
        <li class="BaseHeader__nav-link">
          <NuxtLink to="/">Contact</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {}
</script>

<style lang="postcss">
.BaseHeader {
  @apply w-full;

  height: 120px;
}

.BaseHeader__nav {
  @apply flex
    flex-grow
    items-center
    justify-between;
}

.BaseHeader__nav-list {
  @apply flex;
}

.BaseHeader__nav-link {
  @apply px-4
    uppercase;
}
</style>
