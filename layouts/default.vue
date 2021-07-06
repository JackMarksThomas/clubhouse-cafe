<template>
  <div>
    <BaseHeader />
    <Nuxt />
    <BaseFooter />
  </div>
</template>

<style>
html {
  font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI',
    'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;

  @apply bg-karki;
}

.b-container {
  @apply xl:container 
    xl:mx-auto
    px-4;
}
</style>
