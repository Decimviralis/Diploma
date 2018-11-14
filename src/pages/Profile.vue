<template>
    <div class="profile__content">
        <div class="avatar__block">
            <img src="../assets/Avatar.jpg" alt="Avatar">
            <Integration
                    v-bind:elements = "elements"
                    v-on:redirect = ""
                    id="icon"
            />
        </div>
        <div class="input__block">
            <Input
              type = "text"
              placeholder = "Change your name"
              title = "Name"
            />
            <Input
              type = "text"
              placeholder = "Change your surname"
              title = "Surname"
            />
            <Input
              type = "text"
              placeholder = "Change your email"
              title = "Email"
            />
            <Button
              name="Change password"
              id="change__password"
            />
        </div>
    </div>
</template>

<script>
import Input from "../components/Input-default";
import Button from "../components/Button-default";
import Integration from "../components/Straight-panel-default";

export default {
  name: "Profile",
  components: {
    Input,
    Button,
    Integration
  },
  data: function() {
    return {
      elements: [
        {
          id: 0,
          image: require("../assets/plus.png"),
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
    .profile__content {
        width: 100%;
        display: flex;
        flex-flow: row nowrap;
        .avatar__block {
            position: absolute;
            right: 25%;
            top: 30%;
            width: 200px;
            img {
                width: 200px;
                height: 200px;
                -webkit-border-radius: 100px;
                -moz-border-radius: 100px;
                border-radius: 100px;
            }

            #icon {
                position: absolute;
                top: 30px;
                width: 40px;
                &:hover {
                    color: #38bf32;
                }
            }

        }

        .input__block {
            position: absolute;
            left: 40%;
            top: 35%;
            width: 400px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-flow: column nowrap;
            text-align: center;


        }
        #change__password {
            margin-left: auto;
        }
    }
</style>
