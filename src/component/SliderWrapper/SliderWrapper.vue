<style src="./SliderWrapper.scss" module lang="scss"></style>
<script src="./SliderWrapper.js"></script>

<template>
  <div :class="[$style.sliderWrapper]">
    Filter on sentiment: -1 = negative | 0 = neutral | 1 = positive<br><br>
    Sentiment: <label for="range" id="value" :class="$style.labelSlider" ref="sliderValue">0</label>
    <div :class="['range-wrapper', $style.rangeSlider]">
      <input id="range" type="range" value="50" @input="slide" ref="slider">
    </div>
  </div>
</template>
