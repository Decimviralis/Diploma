<template>
    <div class="input__container">
        <Input
                type = "text"
                placeholder = "example@mail.com"
                title = "Login"
                v-model="login"
        />
        <Input
                type = "password"
                placeholder = "Enter your password"
                title = "Password"
                v-model="password"
        />
        <Input
                type = "password"
                placeholder = "Repeat your password"
                v-model="repeatedPassword"
        />
        <Button
                name = "Sign in"
                id = "signin"
                v-on:redirect = "checkFields"
        />
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
import Integration from "../components/Straight-panel-default";

export default {
  name: "Sign-in-page",
  components: {
    Input,
    Button,
    Integration
  },
  data: function() {
    return {
      login: "kek",
      password: "123",
      repeatedPassword: "123",
      elements: [
        {
          id: 0,
          image: require("../assets/VK.png")
        },
        {
          id: 1,
          image: require("../assets/FB.png")
        }
      ]
    };
  },
  methods: {
    goToHome() {
      this.$store.state.isAuth = true;
      this.$router.push({ name: "profile" });
    },
    checkFields() {
      this.checkPasswords(this.password, this.repeatedPassword);
      if(this.checkPasswords) {
        if(this.login.length > 0 && this.password.length > 0 && this.repeatedPassword.length > 0) {
          this.goToHome();
        }
      }
    },
    checkPasswords(first, second) {
      console.log(first,second);
      return first == second;
    }

  }

};
</script>

<style scoped lang="scss">
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

        #signin {
            width: 100%;
        }
    }
</style>
