// @vue/component
export default {
  name: 'SliderWrapper',
  mounted() {
  },
  methods: {
    slide() {
      let sliderValue = this.$refs.slider.value;
      let relativeValue = ((sliderValue - 50) * 2) / 100;
      this.updateValue(relativeValue);
    },
    updateValue(value) {
      document.getElementById('value').innerHTML = value;
    }
  }
};
