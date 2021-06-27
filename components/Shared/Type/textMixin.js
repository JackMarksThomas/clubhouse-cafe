export default {
  props: {
    alignment: {
      type: [String, Boolean],
      default: false,
      validator: (value) => [false, 'left', 'center', 'right'].includes(value),
    },
    fontDecoration: {
      type: [String, Boolean],
      default: false,
      validator: (value) =>
        [false, 'line-through', 'underline'].includes(value),
    },
    fontStyle: {
      type: [String, Boolean],
      default: false,
      validator: (value) => [false, 'italic'].includes(value),
    },
    textTransform: {
      type: [String, Boolean],
      default: false,
      validator: (value) => [false, 'uppercase'].includes(value),
    },
  },
  computed: {
    textClasses() {
      return {
        [`text-${this.alignment}`]: this.alignment,
        [`${this.fontDecoration}`]: this.fontDecoration,
        [`${this.fontStyle}`]: this.fontStyle,
        [`${this.textTransform}`]: this.textTransform,
      }
    },
  },
}
