import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";

Vue.config.productionTip = false;

import vUploader from 'v-uploader';

/**
 * v-uploader plugin global config
 */
const uploaderConfig = {
  uploadFileUrl: 'http://xxx/upload',
  deleteFileUrl: 'http://xxx/delete',
  showMessage: (vue, message) => {
    //using v-dialogs to show message
    vue.$vDialog.alert(message, null, {messageType: 'error'});
  }
};

//install plugin with options
Vue.use(vUploader, uploaderConfig);

function checkStore() {
    console.log("чекнули");
    console.log(store.state.isAuth);
    return store.state.isAuth;
};

router.beforeEach((to, from, next) => {
  checkStore();
  store.commit("setPageName", to.name);
  console.log(store.state.pageName);
  if(to.name !== "sign-in" && to.name !== "log--in") {
    store.commit("setAuth", true);
  }
  next();
});


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
