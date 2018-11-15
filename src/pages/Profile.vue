<template>
    <div class="profile__content">
        <div class="avatar__block">
            <img src="../assets/Avatar.jpg" alt="Avatar">
            <Integration
                    v-bind:elements = "elements"
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
              v-on:redirect="checkStatus"
            />

        </div>

        <ChangeModal v-if="showModal" v-on:close="showModal = false">
            <!--
              you can use custom content here to overwrite
              default content
            -->
        </ChangeModal>
    </div>
</template>

<script>
    import Vue from 'vue'
import Input from "../components/Input-default";
import Button from "../components/Button-default";
import Integration from "../components/Straight-panel-default";
import ChangeModal from "../components/Modal-default";

export default {
  name: "Profile",
  components: {
    Input,
    Button,
    Integration,
    ChangeModal
  },
  data: function() {
    return {
      elements: [
        {
          id: 0,
          image: require("../assets/plus.png"),
        }
      ],
      showModal: false
    };
  },
  methods: {
    checkStatus() {
      this.showModal = !this.showModal;
      console.log(this.showModal);
    }
  }

};
</script>

<style scoped lang="scss">
    .profile__content {
        -webkit-order: 0;
        -ms-flex-order: 0;
        order: 0;
        -webkit-flex: 1 1 auto;
        -ms-flex: 1 1 auto;
        flex: 1 1 auto;
        -webkit-align-self: stretch;
        -ms-flex-item-align: stretch;
        align-self: stretch;
        max-width: 50%;
        margin-left: 300px;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-evenly;

        .avatar__block {
            width: 200px;
            display: flex;
            flex-flow: row nowrap;
            img {
                min-width: 200px;
                min-height: 200px;
                max-width: 200px;
                max-height: 200px;
                -webkit-border-radius: 100px;
                -moz-border-radius: 100px;
                border-radius: 100px;
                border: 4px solid #38bf32;
            }

            #icon {
                margin-top: 70px;
                max-width: 40px;
                &:hover {
                    color: #38bf32;
                }
            }

        }

        .input__block {

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
