<template>
  <div>
    <Hero :content="homePage.hero" />
    <div class="SectionsLoop">
      <template v-for="(block, index) in homePage.content">
        <DisclosureBlock
          v-if="block.__typename === 'MenuBlockRecord'"
          id="Menu"
          :key="index"
          :content="block"
        />
        <SplitPanel
          v-if="block.__typename === 'SplitPanelRecord'"
          id="About"
          :key="index"
          :content="block"
        />
      </template>
    </div>
    <template v-if="footer.locations.length">
      <Location
        v-for="(location, index) in footer.locations"
        id="Map"
        :key="index"
        :location="location"
      />
    </template>
  </div>
</template>

<script>
import { toHead } from 'vue-datocms'
import { homePageQuery, footerQuery, siteQuery } from '~/apollo/queries'

export default {
  name: 'HomePage',
  apollo: {
    homePage: {
      query: homePageQuery,
    },
    site: {
      query: siteQuery,
    },
    footer: {
      query: footerQuery,
    },
  },

  data() {
    return {
      open: false,
    }
  },

  head() {
    if (!this.site) {
      return
    }
    return toHead(this.homePage.seo, this.site.favicon)
  },
}
</script>

<style lang="postcss">
.SectionsLoop {
  @apply mt-20;

  & > * {
    @apply mb-32;
  }
}
</style>
