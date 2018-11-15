import Vue from "vue";
import Router from "vue-router";
import Login from "./pages/Login";
import Signin from "./pages/Sign-in";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Lorem from "./pages/Lorem";
import Record from "./pages/Record";
import Upload from "./pages/Upload";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "log-in",
      component: Login
    },
    {
      path: "/sign-in",
      name: "sign-in",
      component: Signin
    },
    {
      path: "/home",
      name: "home",
      component: Home
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile
    },
    {
      path: "/lorem",
      name: "lorem",
      component: Lorem
    },
    {
      path: "/record",
      name: "record",
      component: Record
    },
    {
      path: "/upload",
      name: "upload",
      component: Upload
    }
  ]
});
