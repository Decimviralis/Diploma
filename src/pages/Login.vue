<template>
  <div class="input__container">
    <Input
      type = "text"
      placeholder = "example@mail.com"
      title = "Login"
    />
    <Input
      type = "password"
      placeholder = "Enter your password"
      title = "Password"
    />
    <Button
      name = "Log in"
      v-on:redirect = "goToHome"
      id="login"
    />
    <div class="tip__container">
      <Tip
        value="Sign in"
        v-on:redirect="goToSignIn"
      />
      <Tip
        value="Restore password"
      />
    </div>
    <div class="integration">
      <Integration
              v-bind:elements = "elements"
              v-on:redirect = "goToLink"
      />
    </div>
  </div>
</template>

<script>
import Input from "../components/Input-default";
import Button from "../components/Button-default";
import Tip from "../components/Tip-default";
import Integration from "../components/Straight-panel-default";

export default {
  name: "Login-page",
  data: function() {
    return {
      elements: [
        {
          id: 0,
          image: require("../assets/VK.png"),
        },
        {
          id: 1,
          image: require("../assets/FB.png")
        }
      ]
    };
  },
  components: {
    Input,
    Button,
    Tip,
    Integration
  },
  methods: {
    goToSignIn() {
      this.$router.push({ name: "sign-in" });
    },
    goToHome() {
      this.$store.state.isAuth = true;
      this.$router.push({ name: "profile" });
    }
  },
  created() {
    this.$store.state.isAuth = false;
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../styles/colors";
@import "../styles/font-rules";

.input__container {
  position: absolute;
  left: 40%;
  top: 35%;
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-flow: column nowrap;
  text-align: center;


  #login {
    margin-top: 47px;
    width: 100%;
  }
  .tip__container {
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
  }
}
</style>
