<style src="./HomePage.scss" module lang="scss"></style>
<script src="./HomePage.js"></script>

<template>
  <div :class="[$style.homePage]">
    <herobar />
    <filterbar />
    <tweets />
  </div>
</template>
