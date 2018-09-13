const state = {
  count: 0,
};

const mutations = {
  decrement (state) {
    state.count--;
  },
  increment (state) {
    state.count++;
  },
};

const actions = {
  increment: ({commit}) => commit('increment'),
  decrement: ({commit}) => commit('decrement'),
};

export default {
  state,
  mutations,
  actions,
};
