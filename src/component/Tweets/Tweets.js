// @vue/component
import { mapMutations, mapState } from 'vuex';
import { getValue } from '../../util/injector';
import { GATEWAY } from '../../data/Injectables';
import { SET_PARTY, SET_POLITICAL_PARTIES, SET_PRE_STATE, SET_SENTIMENT, SET_TWEETS } from '../../store/module/app/app';

export default {
  name: 'Tweets',
  data() {
    return {
      allTweets: [],
      memTweets: [],
      chosenParty: null,
      chosePreState: null,
      chosenSentiment: null,
      spinner: false,
    };
  },
  computed: {
    ...mapState({
      tweetData: (state) => state.app.tweets,
      preState: (state) => state.app.preState,
      party: (state) => state.app.party,
      sentiment: (state) => state.app.sentiment,
    }),
  },
  watch: {
    tweetData (newTweets, oldTweets) {
      // Our fancy notification (2).
      this.tweets = newTweets;
    },
    preState (newPreState, oldPreState) {
      this.chosePreState = newPreState;
    },
    party (newParty, oldParty) {
      this.chosenParty = newParty;
      this.showLoader();
      this.allTweets = {};
      this.getTweets();
    },
    sentiment (newSentiment, oldSentiment) {
      this.chosenSentiment = newSentiment;
      this.allTweets = {};
      this.spinner = true;
      this.showLoader();
      setTimeout(() => {
        this.filterTweets();
      }, 1000);
    },
  },
  methods: {
    ...mapMutations({
      setPoliticalParties: SET_POLITICAL_PARTIES,
      setTweets: SET_TWEETS,
      setPreState: SET_PRE_STATE,
      setParty: SET_PARTY,
      setSentiment: SET_SENTIMENT,
    }),
    showLoader() {
      this.spinner = true;
    },
    getTweets() {
      const gateway = getValue(GATEWAY);

      if (this.chosenParty === 'none') {
        this.allTweets = [];
        this.memTweets = [];
        this.spinner = false;
        return;
      }

      gateway.get('https://osphg3rg04.execute-api.eu-west-1.amazonaws.com/v1/tweets', {
        params: {
          target: this.chosePreState,
          party: this.chosenParty,
        }
      }).then(result => {
        this.spinner = false;
        this.allTweets = result.data;
        this.memTweets = result.data;
        this.setTweets(result.data);
      });
    },
    filterTweets() {
      const oldTweets = Array.from(this.memTweets);
      let newTweets = [];

      switch (this.chosenSentiment) {
        case 0:
          newTweets = oldTweets;
          break;
        case 1:
          oldTweets.forEach((el) => {
            if(el.Polarity < 0) {
              newTweets.push(el)
            }
          });
          break;
        case 2:
          oldTweets.forEach((el) => {
            if(el.Polarity === 0) {
              newTweets.push(el)
            }
          });
          break;
        case 3:
          oldTweets.forEach((el) => {
            if(el.Polarity > 0) {
              newTweets.push(el)
            }
          });
          break;
      }

      this.allTweets = newTweets;
      this.spinner = false;
    },
  }
};
