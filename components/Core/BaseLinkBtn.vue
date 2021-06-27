<template>
  <a
    v-if="link.pageType === 'external_link'"
    :href="link.url"
    :target="getTarget(link.url)"
    rel="noopener noreferrer"
  >
    <slot />
  </a>

  <n-link v-else-if="link.pageType" :to="getUrlPath(link)">
    <slot />
  </n-link>

  <button v-else @click="$emit('click', $event)">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'BaseLinkBtn',

  props: {
    link: {
      type: [Object, Boolean],
      default: false,
    },
  },

  methods: {
    getTarget(url) {
      const isEmail = /mailto:/.test(url)
      const isTelephone = /tel:/.test(url)

      return isEmail || isTelephone ? '_self' : '_blank'
    },

    getUrlPath({ pageType, slug }) {
      switch (true) {
        case pageType === 'home_page':
          return `/`
        case pageType === 'product_page':
          return `/products/${slug}`
        case pageType === 'collection_page':
          return `/collections/${slug}`
        default:
          return `/${slug}`
      }
    },
  },
}
</script>
