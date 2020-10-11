<style src="./Filterbar.scss" module lang="scss"></style>
<script src="./Filterbar.js"></script>

<template>
  <div :class="[$style.filterbar]">
    <h3 :class="$style.title">Select your political party/ leader:</h3>
    <ul :class="[$style.filters, ' uk-tab']">
      <li :class="[$style.filter, 'nav-item uk-active']">
        <a href="#">All</a>
      </li>

      <li :class="[$style.filter, 'nav-item']">
        <a href="#">VVD</a>
      </li>

      <li :class="[$style.filter, 'nav-item']">
        <a href="#">CDA</a>
      </li>

      <li :class="[$style.filter, 'nav-item']">
        <a href="#">D66</a>
      </li>

      <li :class="[$style.filter, 'nav-item']">
        <a href="#">GroenLinks</a>
      </li>
    </ul>
  </div>
</template>
