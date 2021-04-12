import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    DataOne: [],
    DataTwo: []
  },
  mutations: {
    setDataOne(state, value) {
      state.DataOne.push(value)
    },
    setDataTwo(state, value) {
      state.DataTwo.push(value)
    }
  },
  actions: {
    setDataOne(vueXContent, DataOne) {
      vueXContent.commit("setDataOne", DataOne)
    },
    setDataTwo(vueXContent, DataTwo) {
      vueXContent.commit("setDataTwo", DataTwo)
    },
  },
  modules: {},
});

