<script>
import textMixin from './textMixin.js'

export default {
  name: 'BaseHeading',

  mixins: [textMixin],

  props: {
    tag: {
      type: String,
      default: 'h2',
      validator: (value) =>
        ['span', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(value),
    },
    size: {
      type: String,
      default: 'h2',
      validator: (value) =>
        ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'h6', 'h6', 'h6--small'].includes(
          value
        ),
    },
    family: {
      type: String,
      default: 'serif',
      validator: (value) => ['serif', 'sans'].includes(value),
    },
    weight: {
      type: String,
      default: 'light',
      validator: (value) =>
        ['light', 'normal', 'medium', 'heavy'].includes(value),
    },
  },

  computed: {
    classes() {
      return {
        Heading: true,
        [`t-${this.size}`]: this.size,
        [`Heading--${this.family}`]: this.family,
        [`Heading--${this.weight}`]: this.weight,
        ...this.textClasses,
      }
    },
  },
  render(createElement) {
    return createElement(`${this.tag}`, { class: this.classes }, [
      this.$slots.default,
    ])
  },
}
</script>

<style lang="postcss">
.Heading--sans {
  @apply font-sans;
}

.Heading--serif {
  @apply font-serif;
}

.Heading--light {
  @apply font-light;
}
.Heading--normal {
  @apply font-normal;
}

.Heading--medium {
  @apply font-medium;
}

p,
.t-body {
  @apply mb-5;

  a {
    @apply opacity-70 underline;
  }
}

.t-h1 {
  @apply text-6xl 
    mb-16
    md:text-7xl;
}

.t-h2 {
  @apply text-5xl
    mb-14
    md:text-4xl;
}

.t-h3 {
  @apply text-4xl md:text-5xl;
}

.t-h4 {
  @apply text-2xl md:text-4xl;
}

.t-h5 {
  @apply text-xl md:text-2xl;
}

.t-h6 {
  @apply uppercase;
}

.t-h6--small {
  @apply uppercase;
}

strong {
  @apply font-bold
    italic;
}
</style>
