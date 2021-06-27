<template>
  <section class="SplitPanel b-container">
    <div class="SplitPanel__item">
      <NuxtImg
        class="SplitPanel__img"
        provider="cloudinary"
        fit="cover"
        src="Rectangle_2_q0zu2r.jpg"
        sizes="xs:100vw sm:100vw md:50vw lg:50vw xl:50vw"
      />
    </div>
    <div class="SplitPanel__item SplitPanel__item--copy">
      <div class="SplitPanel__copy">
        <Heading tag="h2" size="h1" font="sans"> Our story </Heading>
        <Heading tag="h3" size="h2" font="sans">
          We’re doing it for the community. <strong>All</strong> of our profit
          goes to Charity.
        </Heading>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
          justo porttitor, Burgess Sports id, ultricies nibh. Ut a metus ut
          mauris efficitur hendrerit.
        </p>
        <p>
          gravida faucibus fringilla. Praesent quam lacus, vestibulum nec dui
          quis, porta lobortis mauris. Vivamus nec elementum nulla. Maecenas
          sodales ornare nisl. Suspendisse potenti. Morbi nec suscipit augue.
          Donec arcu lectus, bibendum eget tempor eget, convallis ac nisi.
          Quisque iaculis ut quam non vestibulum.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="postcss">
.SplitPanel {
  @apply grid
    grid-cols-12;
}

.SplitPanel__item {
  @apply col-span-12
    md:col-span-6;
}

.SplitPanel__item--copy {
  @apply md:order-first;
}

.SplitPanel__img {
  @apply h-full;
}

.SplitPanel__copy {
  @apply flex
    flex-col
    justify-center
    md:p-8;
}

.SplitPanel__copy p {
  @apply max-w-sm;
}
</style>
