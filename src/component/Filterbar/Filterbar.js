// @vue/component
import { mapMutations, mapState } from 'vuex';
import { SET_PARTY, SET_POLITICAL_PARTIES, SET_PRE_STATE, SET_SENTIMENT, SET_TWEETS } from '../../store/module/app/app';
import { getValue } from '../../util/injector';
import { GATEWAY } from '../../data/Injectables';

export default {
  name: 'Filterbar',
  data() {
    return {
      parties: {},
      leaders: {},
      currentIndex: -1,
      selectedFilter: "party/leader",
      sliderValue: 0,
      currentParty: {},
      analysis: {
        negative: 0,
        positive: 0,
        neutral: 0,
        avgSentiment: 0,
        leaderInfo: {},
      },
    };
  },
  watch: {
    tweetData (newTweets, oldTweets) {
      // Our fancy notification (2).
      setTimeout(() => {
        this.tweetAnalysis();
      }, 1000)
    },
  },
  computed: {
    ...mapState({
      politicalParties: (state) => state.app.politicalParties,
      tweetData: (state) => state.app.tweets,
      preState: (state) => state.app.preState,
      party: (state) => state.app.party,
      sentiment: (state) => state.app.party,
    }),
  },
  mounted() {
    setTimeout(() => {
      this.parties = this.politicalParties;
    }, 1000)
  },
  methods: {
    ...mapMutations({
      setPoliticalParties: SET_POLITICAL_PARTIES,
      setTweets: SET_TWEETS,
      setPreState: SET_PRE_STATE,
      setParty: SET_PARTY,
      setSentiment: SET_SENTIMENT,
    }),
    selectPreState(state) {
      this.selectedFilter = state;
      this.setPreState(state);
      this.getParties();
    },
    handleTabSwitch(partyIndex, index) {
      this.currentIndex = index;
      const selectedParty = this.parties[this.currentIndex].Acronym;
      this.setParty(selectedParty);
      this.currentParty = this.parties[index];
    },
    selectSentiment(sentiment) {
      this.setSentiment(sentiment);
    },
    getParties() {
      const gateway = getValue(GATEWAY);

      gateway.get('https://fhx66ke9pk.execute-api.eu-west-1.amazonaws.com/v1/politicalparties').then(result => {
        this.setPoliticalParties(result.data.body);
        this.parties = result.data.body;
      });

      gateway.get('https://ajytiakpx9.execute-api.eu-west-1.amazonaws.com/v1/politicians').then(result => {
        this.leaders = result.data;
      });
    },
    tweetAnalysis() {
      let neg = [];
      let pos = [];
      let neu = [];
      let sentiment = 0;

      Array.from(this.tweetData).forEach((el) => {
        if(el.Polarity < 0) {
          neg.push(el);
          sentiment += el.Polarity;
        }
        if(el.Polarity === 0) {
          neu.push(el);
          sentiment += el.Polarity;
        }
        if(el.Polarity > 0) {
          pos.push(el);
          sentiment += el.Polarity;
        }

        this.analysis.negative = neg.length;
        this.analysis.neutral = neu.length;
        this.analysis.positive = pos.length;
        this.analysis.avgSentiment = sentiment / this.tweetData.length;

        Array.from(this.leaders).forEach((leader) => {
          if(this.currentParty.Acronym === leader.Party) {
            this.analysis.leaderInfo = leader;
            console.log(leader);
          }
        })
      });
    },
  }
};
