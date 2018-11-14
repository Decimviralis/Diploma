<template>
  <div id="app">
    <Header
      v-bind:elements = "elementsUnauthorized"
      v-on:redirect = "goToLink"
      id="header"
    />
    <div class="main__content">
      <Navbar
              v-if="checkStore"
        v-bind:elements="elementsNavbar"
        v-on:redirect = "goToLink"
      />
      <router-view/>
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
          linkTo: "lorem"
        },
        {
          id: 1,
          value: "Upload",
          linkTo: "lorem"
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
      console.log("чекнули");
      console.log(this.$store.state.isAuth);
      return this.$store.state.isAuth;
    }
  },
  mounted() {
    this.checkStore();
    if(this.$route.name === "sign-in") {
      this.elementsUnauthorized[0].value = "Log in";
      this.elementsUnauthorized[0].linkTo = "log-in";
    } else if(this.$route.name === "log-in") {
      this.elementsUnauthorized[0].value = "Sign in";
      this.elementsUnauthorized[0].linkTo = "sign-in";
    } else if(!this.$store.state.isAuth){
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
  width: 100%;
  height: 100%;
  position: relative;
  background: #141E30;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #243B55, #141E30);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #243B55, #141E30); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 24px;

  #header {

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
