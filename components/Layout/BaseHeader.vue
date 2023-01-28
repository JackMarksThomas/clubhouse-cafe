<template>
  <header class="BaseHeader">
    <nav class="BaseHeader__nav b-container">
      <ul class="BaseHeader__nav-list">
        <li class="BaseHeader__nav-link">
          <button @click="jump('#Menu', { offset: -120 })">Menu</button>
        </li>
        <li class="BaseHeader__nav-link">
          <button @click="jump('#About', { offset: -120 })">About Us</button>
        </li>
        <li class="BaseHeader__nav-link">
          <a
            href="https://burgesssports.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Our Charity
          </a>
        </li>
      </ul>
      <Logo class="BaseHeader__logo" />
      <ul class="BaseHeader__nav-list">
        <li class="BaseHeader__nav-link">
          <button @click="jump('#Map')">Location</button>
        </li>
        <li class="BaseHeader__nav-link">
          <button @click="jump('#Map')">Contact</button>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import jump from 'jump.js'

export default {
  name: 'Header',

  data() {
    return {
      jump,
    }
  },
}
</script>

<style lang="postcss">
.BaseHeader {
  @apply z-20
    fixed
    w-full;

  height: 120px;

  @screen md {
    @apply bg-karki;
  }
}

.BaseHeader__nav {
  @apply flex
    flex-grow
    items-center
    justify-center;

  height: 120px;

  @screen md {
    @apply justify-between;
  }
}

.BaseHeader__logo {
  @apply z-10
    self-start
    absolute;

  left: calc(50% - 80px);
}

.BaseHeader__nav-list {
  @apply hidden;

  @screen md {
    @apply flex;
  }
}

.BaseHeader__nav-link {
  @apply px-4
    text-base
    md:text-lg;

  button {
    @apply uppercase;
  }
  a {
    @apply uppercase;
  }
}
</style>
