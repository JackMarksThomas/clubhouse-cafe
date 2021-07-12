<template>
  <section class="Location b-container">
    <Heading tag="h3" size="h3">Locations</Heading>
    <div class="Location__container">
      <div class="Location__details">
        <p class="text-3xl">Clubhouse Café Burgess Park</p>
        <div class="grid grid-cols-12 mb-4">
          <div class="col-span-2">
            <span class="font-semibold">Where:</span>
          </div>
          <address class="col-span-10 text-base">
            44 Addington Square,<br />
            Burgess Park,<br />
            SE5 7LA
          </address>
        </div>
        <div class="grid grid-cols-12 mb-4 gap-4">
          <div class="col-span-2">
            <span class="font-semibold">Hours:</span>
          </div>
          <span class="col-span-10 text-base">
            7am-5:30pm Mon – Fri<br />
            7:30am-6pm Sat – Sun
          </span>
        </div>
        <div class="grid grid-cols-12 mb-4">
          <div class="col-span-2">
            <span class="font-semibold">Contact:</span>
          </div>
          <span class="col-span-10 text-base">
            tel: <a href="tel:0747900500">0747900500</a><br />
            email:
            <a href="mailto:clubhousecafe@burgesssports.org">
              clubhousecafe@burgesssports.org
            </a>
          </span>
        </div>
      </div>
      <GmapMap
        class="Location__map"
        height="100%"
        width="100%"
        :center="{ lat: 51.4814933, lng: -0.0953476 }"
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
  @apply col-span-12 md:col-span-4;
}

.Location__map {
  @apply col-span-12 md:col-span-8;

  height: 500px;
}
</style>
