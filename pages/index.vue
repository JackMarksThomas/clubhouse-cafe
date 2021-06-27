<template>
  <div>
    <Hero :content="homePage.hero" />
    <div class="SectionsLoop">
      <SplitPanel />
    </div>
  </div>
</template>

<script>
import { homePageQuery } from '~/apollo/queries'

export default {
  name: 'HomePage',
  apollo: {
    homePage: {
      query: homePageQuery,
    },
  },
  // async asyncData({ app, params }) {
  //   try {
  //     const client = app.apolloProvider.defaultClient

  //     const res = await client.query({
  //       query: homePageQuery,
  //     })

  //     // eslint-disable-next-line no-console
  //     console.log(res.data)
  //     return res.data
  //   } catch (error) {
  //     console.log('ERROR', error)
  //   }
  // },
}
</script>

<style lang="postcss">
.SectionsLoop {
  @apply mt-20;
}
</style>
