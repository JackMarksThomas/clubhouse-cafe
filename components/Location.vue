<template>
  <section class="Location b-container">
    <Heading tag="h3" size="h3">Locations</Heading>
    <div class="Location__container">
      <div class="Location__details">
        <Heading v-if="location.name" tag="h5" size="h5" family="sans">
          {{ location.name }}
        </Heading>
        <div v-if="location.where" class="grid grid-cols-12 mb-4">
          <div class="col-span-3">
            <span class="font-semibold">Where:</span>
          </div>
          <address class="col-span-9 text-base" v-html="location.where" />
        </div>
        <div v-if="location.hours" class="grid grid-cols-12 mb-4 gap-4">
          <div class="col-span-3">
            <span class="font-semibold">Hours:</span>
          </div>
          <span class="col-span-9 text-base" v-html="location.hours" />
        </div>
        <div v-if="location.contact" class="grid grid-cols-12 mb-4">
          <div class="col-span-3">
            <span class="font-semibold">Contact:</span>
          </div>
          <span class="col-span-9 text-base" v-html="location.contact" />
        </div>
        <div v-if="location.followUs" class="grid grid-cols-12 mb-4">
          <div class="col-span-3">
            <span class="font-semibold">Follow Us:</span>
          </div>
          <span class="col-span-9 text-base" v-html="location.followUs" />
        </div>
      </div>
      <GmapMap
        v-if="
          location.mapCoOrdinates &&
          location.mapCoOrdinates.lat &&
          location.mapCoOrdinates.lng
        "
        class="Location__map"
        height="100%"
        width="100%"
        :center="{
          lat: location.mapCoOrdinates.lat,
          lng: location.mapCoOrdinates.lng,
        }"
        :zoom="17"
        :options="{
          styles,
          zoomControl: true,
          mapTypeControl: false,
          streetViewControl: false,
          rotateControl: false,
          fullscreenControl: false,
          disableDefaultUi: false,
        }"
      >
        <GmapMarker :clickable="true" :draggable="true" />
      </GmapMap>
    </div>
  </section>
</template>

<script>
import mapStyles from '~/const/mapStyles'

export default {
  name: 'Location',
  props: {
    location: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      styles: mapStyles,
    }
  },
}
</script>

<style lang="postcss">
.Location__container {
  @apply grid grid-cols-12;
}

.Location__details {
  @apply col-span-12 md:col-span-5;
}

.Location__map {
  @apply col-span-12 md:col-span-7;

  height: 500px;
}
</style>
