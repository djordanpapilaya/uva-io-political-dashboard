<style src="./Tweets.scss" module lang="scss"></style>
<script src="./Tweets.js"></script>

<template>
  <div :class="[$style.tweets, 'wrapper']">
    <div uk-spinner="ratio: 3" :class="[$style.spinner]" v-show="spinner"></div>
    <div :class="['content-wrapper']">
      <div :class="[$style.tweet, 'uk-card uk-card-default uk-margin', {[$style.negative]: tweet.Polarity < 0}, {[$style.positive]: tweet.Polarity > 0}]" v-for="(tweet, index) in allTweets" :key="index">
        <div :class="['uk-card-header', $style.header]">
          <h3 :class="['uk-card-title']">@<span v-text="tweet.Username"></span></h3>
          <p class="uk-text-meta uk-margin-remove-top"><time datetime="2016-04-01T19:00">{{tweet.Tweetcreatedts}}</time></p>
          <div :class="[$style.badge, 'uk-card-badge uk-label']" v-if="tweet.Polarity < 0">NEGATIVE TWEET</div>
          <div :class="[$style.badge, 'uk-card-badge uk-label']" v-if="tweet.Polarity > 0">POSITIVE TWEET</div>
          <div :class="[$style.badge, 'uk-card-badge uk-label']" v-if="tweet.Polarity === 0">NEUTRAL TWEET</div>
        </div>
        <div class="uk-card-body">
          <p v-text="tweet.Text">

          </p>
          <br>
          <span class="uk-badge">{{tweet.Party}}</span>
          <span class="uk-badge">{{tweet.Targeted}}</span>
          <span class="uk-badge">{{tweet.Query}}</span>
          <span class="uk-badge" v-if="tweet.Retweet">Retweet</span>
          <span class="uk-badge">Sentiment: {{Math.round((tweet.Polarity+ Number.EPSILON) * 100) / 100}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
