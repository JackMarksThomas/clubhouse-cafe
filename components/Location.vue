<template>
  <section class="Location b-container">
    <Heading tag="h3" size="h3">Locations</Heading>
    <div class="Location__container">
      <div class="Location__details">
        <Heading tag="h5" size="h5" family="sans">
          Clubhouse Café Burgess Park
        </Heading>
        <div class="grid grid-cols-12 mb-4">
          <div class="col-span-3">
            <span class="font-semibold">Where:</span>
          </div>
          <address class="col-span-9 text-base">
            44 Addington Square,<br />
            Burgess Park,<br />
            SE5 7LA
          </address>
        </div>
        <div class="grid grid-cols-12 mb-4 gap-4">
          <div class="col-span-3">
            <span class="font-semibold">Hours:</span>
          </div>
          <span class="col-span-9 text-base">
            8am-4pm Mon – Fri<br />
            8am-4:30pm Sat – Sun
          </span>
        </div>
        <div class="grid grid-cols-12 mb-4">
          <div class="col-span-3">
            <span class="font-semibold">Contact:</span>
          </div>
          <span class="col-span-9 text-base">
            tel: <a href="tel:07458302333">07458 302333</a><br />
            email:
            <a href="mailto:clubhousecafe@burgesssports.org">
              clubhousecafe@burgesssports.org
            </a>
          </span>
        </div>
        <div class="grid grid-cols-12 mb-4">
          <div class="col-span-3">
            <span class="font-semibold">Follow Us:</span>
          </div>
          <span class="col-span-9 text-base">
            <a
              href="https://www.instagram.com/clubhousecafe1"
              target="_blank"
              rel="noreferrer noopener"
            >
              instagram
            </a>
            <br />
            <a
              href="https://twitter.com/clubhouse_cafe"
              target="_blank"
              rel="noreferrer noopener"
            >
              twitter
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
  @apply col-span-12 md:col-span-5;
}

.Location__map {
  @apply col-span-12 md:col-span-7;

  height: 500px;
}
</style>
