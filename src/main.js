import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";

Vue.config.productionTip = false;


function checkStore() {
    console.log("чекнули");
    console.log(store.state.isAuth);
    return store.state.isAuth;
};

router.beforeEach((to, from, next) => {
  checkStore();
  store.commit("pageName", router.name);
  console.log(store.state.pageName);
  next();
});


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
