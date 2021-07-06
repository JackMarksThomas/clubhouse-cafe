<template>
  <div class="Hero">
    <NuxtImg
      class="Hero__img"
      provider="cloudinary"
      fit="cover"
      :src="imageUrl"
      sizes="xs:100vw sm:100vw md:100vw lg:100vw xl:100vw"
    />
    <div class="Hero__content b-container">
      <div class="Hero__tagline">
        <Heading tag="h1" size="h1" font="sans">
          {{ content.heading }}
        </Heading>
      </div>
      <div class="Hero__footer">
        <PrimaryButton :link="content.link">
          {{ content.link.text }}
        </PrimaryButton>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hero',
  props: {
    content: {
      type: Object,
      required: true,
    },
  },
  computed: {
    imageUrl() {
      const paths = this.content.image.url.split('/')
      return paths[paths.length - 1]
    },
  },
}
</script>

<style lang="postcss">
.Hero {
  /* minus Header height */
  height: 90vh;

  @apply relative
    flex
    items-center
    bg-gray-900;
}

.Hero__img {
  @apply absolute
    top-0
    left-0
    w-full
    h-full
    object-cover
    opacity-60;
}

.Hero__content {
  @apply text-white
    z-10
    grid
    grid-cols-12
    mt-header;
}

.Hero__tagline {
  @apply col-start-1
    col-span-12
    md:col-start-2
    md:col-span-9
    lg:col-start-3
    lg:col-span-7
    xl:col-start-3
    xl:col-span-7;
}

.Hero__footer {
  @apply col-start-1
    col-span-12
    md:col-start-2
    md:col-span-9
    lg:col-start-3
    lg:col-span-7
    xl:col-start-3
    xl:col-span-7;
}
</style>
