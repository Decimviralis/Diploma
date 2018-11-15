import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isAuth: false,
    showDefault: false,
    pageName: null
  },
  mutations: {
    setAuth(state, status) {
      state.isAuth = status;
    },
    setPageName(state, name) {
      state.pageName = name;
    }
  },
  actions: {}
});
