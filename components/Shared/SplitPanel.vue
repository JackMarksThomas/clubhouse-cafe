<template>
  <section class="SplitPanel b-container">
    <div v-if="content.image" class="SplitPanel__item SplitPanel__item--img">
      <NuxtImg
        class="SplitPanel__img"
        provider="cloudinary"
        fit="cover"
        :src="imageUrl"
        sizes="xs:100vw sm:100vw md:50vw lg:50vw xl:50vw"
      />
    </div>
    <div v-if="content.copy" class="SplitPanel__item SplitPanel__item--copy">
      <StructuredText
        class="SplitPanel__copy"
        :data="content.copy"
        :custom-rules="customRules"
      />
    </div>
  </section>
</template>

<script>
import { StructuredText, renderRule } from 'vue-datocms'
import { isHeading } from 'datocms-structured-text-utils'
import Heading from '~/components/Shared/Type/Heading.vue'

export default {
  name: 'SplitPanel',

  components: {
    StructuredText,
  },

  props: {
    content: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      customRules: [
        renderRule(
          isHeading,
          ({ adapter: { renderNode: h }, node, children, key }) => {
            return h(
              Heading,
              {
                key,
                tag: 'span',
                size: `h${node.level}`,
              },
              children
            )
          }
        ),
      ],
    }
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
.SplitPanel {
  @apply grid
    grid-cols-12
    items-center;
}

.SplitPanel__item {
  @apply col-span-12
    md:col-span-6;
}

.SplitPanel__item--copy {
  @apply md:order-first;
}

.SplitPanel__item--img {
  @apply mb-8 md:mb-0
    h-full;
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
