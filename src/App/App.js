import { DeviceStateEvent } from 'seng-device-state-tracker';
import { mapMutations, mapState } from 'vuex';
import { SET_DEVICE_STATE, SET_POLITICAL_PARTIES } from '../store/module/app/app';
import { getValue } from '../util/injector';
import { GATEWAY } from '../data/Injectables';

// @vue/component
export default {
  name: 'App',
  computed: {
    ...mapState({
      deviceState: (state) => state.app.deviceState,
      politicalParties: (state) => state.app.politicalParties,
    }),
  },
  created() {
    this.$deviceStateTracker.addEventListener(
      DeviceStateEvent.STATE_UPDATE,
      this.handleDeviceStateUpdate,
    );
    this.setDeviceState(this.$deviceStateTracker.currentState);
    this.initPoliticalParties();
  },
  methods: {
    ...mapMutations({
      setDeviceState: SET_DEVICE_STATE,
      setPoliticalParties: SET_POLITICAL_PARTIES,
    }),
    handleDeviceStateUpdate(event) {
      this.setDeviceState(event.data.state);
    },
    initPoliticalParties() {
      // const gateway = getValue(GATEWAY);
      //
      // gateway.get('https://fhx66ke9pk.execute-api.eu-west-1.amazonaws.com/v1/politicalparties').then(result => {
      //   this.setPoliticalParties(result.data.body);
      // })
    },
  },
};
