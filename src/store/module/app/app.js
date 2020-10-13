const namespace = 'app';

export const SET_DEVICE_STATE = `${namespace}/setDeviceState`;
export const SET_POLITICAL_PARTIES = `${namespace}/setPoliticalParties`;
export const SET_TWEETS = `${namespace}/setTweets`;
export const SET_PRE_STATE = `${namespace}/setPreState`;
export const SET_PARTY = `${namespace}/setParty`;
export const SET_SENTIMENT = `${namespace}/setSentiment`;

export default {
  state: {
    deviceState: null,
    politicalParties: null,
    tweets: null,
    preState: null,
    party: null,
    sentiment: null,
  },
  getters: {},
  mutations: {
    [SET_DEVICE_STATE](state, deviceState) {
      state.deviceState = deviceState;
    },
    [SET_POLITICAL_PARTIES](state, politicalParties) {
      state.politicalParties = politicalParties;
    },
    [SET_TWEETS](state, tweets) {
      state.tweets = tweets;
    },
    [SET_PRE_STATE](state, preState) {
      state.preState = preState;
    },
    [SET_PARTY](state, party) {
      state.party = party;
    },
    [SET_SENTIMENT](state, sentiment) {
      state.sentiment = sentiment;
    }
  },
  actions: {},
};
