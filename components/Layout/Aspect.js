const ratioValidator = (value) => {
  const num = Number(value)
  return num === Math.floor(num) && num >= 1 && num <= 16
}

export default {
  props: {
    tag: {
      type: String,
      default: 'div',
      validator: (value) => ['div', 'section', 'span'].includes(value),
    },
    aspectW: {
      type: [String, Number],
      default: 1,
      validator: ratioValidator,
    },
    aspectH: {
      type: [String, Number],
      default: 1,
      validator: ratioValidator,
    },
  },

  render(createElement) {
    return createElement(
      this.tag,
      {
        class: {
          Aspect: true,
          [`aspect-w-${this.aspectW}`]: this.aspectW,
          [`aspect-h-${this.aspectH}`]: this.aspectH,
        },
      },
      [this.$slots.default]
    )
  },
}
