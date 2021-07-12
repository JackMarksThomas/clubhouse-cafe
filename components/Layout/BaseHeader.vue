<template>
  <header class="BaseHeader">
    <nav class="BaseHeader__nav b-container">
      <ul class="BaseHeader__nav-list">
        <li class="BaseHeader__nav-link">
          <NuxtLink to="/">About Us</NuxtLink>
        </li>
        <li class="BaseHeader__nav-link">
          <NuxtLink to="/">Menu</NuxtLink>
        </li>
      </ul>
      <Logo class="BaseHeader__logo" />
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
  @apply z-20
    fixed
    bg-karki
    w-full;

  height: 120px;
}

.BaseHeader__nav {
  @apply flex
    flex-grow
    items-center
    justify-between;

  height: 120px;
}

.BaseHeader__logo {
  @apply z-10
    self-start;
}

.BaseHeader__nav-list {
  @apply flex;
}

.BaseHeader__nav-link {
  @apply px-4
    uppercase;
}
</style>
