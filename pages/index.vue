<template>
  <div>
    <Hero :content="homePage.hero" />
    <div class="SectionsLoop">
      <SplitPanel />

      <!-- Menu Section -->
      <section class="b-container">
        <Heading tag="h2" size="h1">Menu</Heading>
        <Heading tag="h3" size="h3">Drinks</Heading>

        <Disclosure />
        <Disclosure />
        <Disclosure />
      </section>
    </div>
    <section class="b-container">
      <Heading tag="h3" size="h1">Find Us</Heading>
      <GmapMap
        :center="{ lat: 51.4814933, lng: -0.0953476 }"
        :zoom="17"
        :options="{
          styles,
        }"
        style="width: 500px; height: 300px"
      >
        <!-- <GmapMarker
          v-for="(m, index) in markers"
          :key="index"
          :position="m.position"
          :clickable="true"
          :draggable="true"
          @click="center = m.position"
        /> -->
      </GmapMap>
    </section>
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

  data() {
    return {
      open: false,
      styles: [
        {
          elementType: 'geometry',
          stylers: [
            {
              color: '#ebe3cd',
            },
          ],
        },
        {
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#523735',
            },
          ],
        },
        {
          elementType: 'labels.text.stroke',
          stylers: [
            {
              color: '#f5f1e6',
            },
          ],
        },
        {
          featureType: 'administrative',
          elementType: 'geometry.stroke',
          stylers: [
            {
              color: '#c9b2a6',
            },
          ],
        },
        {
          featureType: 'administrative.land_parcel',
          elementType: 'geometry.stroke',
          stylers: [
            {
              color: '#dcd2be',
            },
          ],
        },
        {
          featureType: 'administrative.land_parcel',
          elementType: 'labels',
          stylers: [
            {
              visibility: 'off',
            },
          ],
        },
        {
          featureType: 'administrative.land_parcel',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#ae9e90',
            },
          ],
        },
        {
          featureType: 'landscape.natural',
          elementType: 'geometry',
          stylers: [
            {
              color: '#dfd2ae',
            },
          ],
        },
        {
          featureType: 'poi',
          elementType: 'geometry',
          stylers: [
            {
              color: '#dfd2ae',
            },
          ],
        },
        {
          featureType: 'poi',
          elementType: 'labels.text',
          stylers: [
            {
              visibility: 'off',
            },
          ],
        },
        {
          featureType: 'poi',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#93817c',
            },
          ],
        },
        {
          featureType: 'poi.business',
          stylers: [
            {
              visibility: 'off',
            },
          ],
        },
        {
          featureType: 'poi.park',
          elementType: 'geometry.fill',
          stylers: [
            {
              color: '#a5b076',
            },
          ],
        },
        {
          featureType: 'poi.park',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#447530',
            },
          ],
        },
        {
          featureType: 'road',
          elementType: 'geometry',
          stylers: [
            {
              color: '#f5f1e6',
            },
          ],
        },
        {
          featureType: 'road',
          elementType: 'labels.icon',
          stylers: [
            {
              visibility: 'off',
            },
          ],
        },
        {
          featureType: 'road.arterial',
          elementType: 'geometry',
          stylers: [
            {
              color: '#fdfcf8',
            },
          ],
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry',
          stylers: [
            {
              color: '#f8c967',
            },
          ],
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry.stroke',
          stylers: [
            {
              color: '#e9bc62',
            },
          ],
        },
        {
          featureType: 'road.highway.controlled_access',
          elementType: 'geometry',
          stylers: [
            {
              color: '#e98d58',
            },
          ],
        },
        {
          featureType: 'road.highway.controlled_access',
          elementType: 'geometry.stroke',
          stylers: [
            {
              color: '#db8555',
            },
          ],
        },
        {
          featureType: 'road.local',
          elementType: 'labels',
          stylers: [
            {
              visibility: 'off',
            },
          ],
        },
        {
          featureType: 'road.local',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#806b63',
            },
          ],
        },
        {
          featureType: 'transit',
          stylers: [
            {
              visibility: 'off',
            },
          ],
        },
        {
          featureType: 'transit.line',
          elementType: 'geometry',
          stylers: [
            {
              color: '#dfd2ae',
            },
          ],
        },
        {
          featureType: 'transit.line',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#8f7d77',
            },
          ],
        },
        {
          featureType: 'transit.line',
          elementType: 'labels.text.stroke',
          stylers: [
            {
              color: '#ebe3cd',
            },
          ],
        },
        {
          featureType: 'transit.station',
          elementType: 'geometry',
          stylers: [
            {
              color: '#dfd2ae',
            },
          ],
        },
        {
          featureType: 'water',
          elementType: 'geometry.fill',
          stylers: [
            {
              color: '#b9d3c2',
            },
          ],
        },
        {
          featureType: 'water',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#92998d',
            },
          ],
        },
      ],
    }
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

  & > * {
    @apply mb-32;
  }
}
</style>
