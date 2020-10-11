<style src="./Tweets.scss" module lang="scss"></style>
<script src="./Tweets.js"></script>

<template>
  <div :class="[$style.tweets, 'wrapper']">
    <div :class="['content-wrapper']">
      <div :class="[$style.tweet, 'uk-card uk-card-default uk-margin']">
        <div :class="['uk-card-header']">
          <h3 :class="['uk-card-title']">@Google development</h3>
        </div>
        <div :class="['uk-card-body']">Google “Great Barrington Declaration”. It doesn’t show up. It’s been shadow banned. Discussion of it has also been censored by Reddit. It’s not a conspiracy theory, not misinformation, not part of the “infodemic”. Big tech is just censoring dissent.</div>
      </div>
      <div :class="[$style.tweet, 'uk-card uk-card-default uk-margin']">
        <div :class="['uk-card-header']">
          <h3 :class="['uk-card-title']">@Brian Tong</h3>
        </div>
        <div :class="['uk-card-body']">When you are kind to yourself it bleeds into how you treat others... there’s a lot of pain out there, compassion is a huge need unfortunately retaliation is the fad</div>
      </div>
      <div :class="[$style.tweet, 'uk-card uk-card-default uk-margin']">
        <div :class="['uk-card-header']">
          <h3 :class="['uk-card-title']">@Another twitter user....</h3>
        </div>
        <div :class="['uk-card-body']">SNL debate ‘fly’ sketch goes off the rails with Jim Carrey, along with Kenan Thompson as Herman Cain reincarnated</div>
      </div>
    </div>
  </div>
</template>
