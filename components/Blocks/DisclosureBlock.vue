<template>
  <section class="b-container">
    <Heading tag="h3" size="h3">{{ content.title }}</Heading>

    <div class="Disclosures">
      <Disclosure v-for="(category, i) in content.menuCategories" :key="i">
        <template #button>
          {{ category.heading }}<Cross class="Disclosure__icon" />
        </template>
        <template #panel>
          <div v-if="category.foodItems.length" class="MenuItems">
            <div
              v-for="(item, j) in category.foodItems"
              :key="j"
              class="MenuItem"
            >
              <div class="flex justify-between mb-4">
                <span class="text-2xl">{{ item.title }}</span>
                <span class="text-2xl dotted" />
                <span class="text-2xl">£{{ item.price }}</span>
              </div>
              <p v-if="item.description">
                {{ item.description }}
              </p>
              <span v-if="item.ingredients" class="text-sm">
                {{ item.ingredients }}
              </span>
            </div>
          </div>
        </template>
      </Disclosure>
    </div>
  </section>
</template>

<script>
export default {
  name: 'DisclosureBlock',

  props: {
    content: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="postcss">
.Disclosures {
  @apply border border-b-0 border-black;
}

.Disclosure__icon {
  width: 24px;
  height: 24px;
}
</style>
