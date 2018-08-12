import Vue from 'nativescript-vue';
import Vuex from 'vuex';

import counter from './modules/counter';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const store = new Vuex.Store({
  modules: {
    counter,
  },
  strict: debug,
});

Vue.prototype.$store = store;

export default store;