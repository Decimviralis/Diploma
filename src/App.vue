<template>
  <div id="app">
    <div class="upper__block">
      <Header
              v-bind:elements = "elementsUnauthorized"
              v-on:redirect = "goToLink"
              id="header"
      />
    </div>
    <div class="page__name" v-if="checkStore()">
        {{this.$store.state.pageName}}
    </div>
    <div class="main__content">
      <Navbar
        v-bind:elements="elementsNavbar"
        v-on:redirect = "goToLink"
        v-if="checkStore()"
        id="navbar"
      />
      <router-view id="RW"/>
    </div>
    <div class="footer">
      Created by <a href="mailto:mkholopov@usetech.ru">Maxim Kholopov</a>
    </div>
  </div>
</template>

<script>
import Header from "./components/Straight-panel-default";
import Navbar from "./components/Vertical-panel-default";

export default {
  name: "App",
  components: {
    Header,
    Navbar
  },
  data: function() {
    return {
      elementsUnauthorized: [
        {
          id: 0,
          value: "Sign in",
          linkTo: "sign-in"
        },
        {
          id: 1,
          value: "Help",
          linkTo: "lorem"
        },
        {
          id: 2,
          value: "About service",
          linkTo: "lorem"
        },
        {
          id: 3,
          value: "",
          linkTo: "log-in"
        }
      ],
      elementsNavbar: [
        {
          id: 0,
          value: "Record",
          linkTo: "record"
        },
        {
          id: 1,
          value: "Upload",
          linkTo: "upload"
        },
        {
          id: 2,
          value: "My course",
          linkTo: "lorem"
        }
      ]
    };
  },
  methods: {
    goToLink(key) {
      this.$router.push({ name: key });
    },
    checkStore() {
      return this.$store.state.isAuth;
    }
  },
  mounted() {
    this.checkStore();
    if(this.$store.state.pageName === "sign-in") {
      this.elementsUnauthorized[0].value = "Log in";
      this.elementsUnauthorized[0].linkTo = "log-in";
    } else if(this.$store.state.pageName === "log-in") {
      this.elementsUnauthorized[0].value = "Sign in";
      this.elementsUnauthorized[0].linkTo = "sign-in";
    } else if(this.$store.state.isAuth){
      this.elementsUnauthorized[0].value = "Profile";
      this.elementsUnauthorized[0].linkTo = "profile";
      this.elementsUnauthorized[3].image = require("./assets/sign-out.png");
    }
  }
};
</script>

<style lang="scss">
@import "./styles/colors";
@import "./styles/font-rules";

html {
  margin: 0;
  padding: 0;
}

body {
  display: flex;
  flex: 1;
  height: 50.45vw;
  margin: 0;
  padding: 0;

}
#app {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  position: relative;
  background: #404041;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #404041, #000000);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #504b4f, #000000); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  font-family: $arial, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 24px;


  .upper__block {
    background: black;
    height: 50px;
    margin-bottom: 150px;
    #header.panel {
      width: 100%;
      margin-left: auto;
      margin-top: 0;
      padding: 0;
      display: flex;
      justify-content: space-between;
      padding: 12px 20px;

    }
  }

  .page__name {
    margin-left: 48%;
    color: #38bf32;
    text-transform: uppercase;
    margin-bottom: 80px;
    cursor: pointer;
  }

  .main__content {
    display: flex;
    flex-flow: row nowrap;
    #navbar {
      -webkit-order: 0;
      -ms-flex-order: 0;
      order: 0;
      -webkit-flex: 0 1 auto;
      -ms-flex: 0 1 auto;
      flex: 0 1 auto;
      -webkit-align-self: center;
      -ms-flex-item-align: center;
      align-self: center;
    }

    #RW {
      -webkit-order: 0;
      -ms-flex-order: 0;
      order: 0;
      -webkit-flex: 1 1 auto;
      -ms-flex: 1 1 auto;
      flex: 1 1 auto;
      -webkit-align-self: stretch;
      -ms-flex-item-align: stretch;
      align-self: stretch;
    }
  }

  #navbar {
    margin-top: 40px;
  }
  .footer {
    position: absolute;
    bottom: 20px;
    font-size: 12px;
    display: flex;
    flex-flow: row nowrap;
    left: 42.6%;
    justify-content: space-between;
    width: 300px;
    flex-grow: 1;
    color: white;
    a {
      text-decoration: none;
      color: #38bf32;
    }
  }
}
</style>
