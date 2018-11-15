<script>
  import Input from "../components/Input-default";
  import Button from "../components/Button-default";
  export default {
    name: 'modal',
    components: {
      Input,
      Button
    },
    methods: {
      close() {
        this.$emit('close');
      },
    },
  };
</script>

<template>
    <transition name="modal-fade">
        <transition class="modal-backdrop">
            <div class="modal-backdrop">
                <div class="modal">
                    <header class="modal-header">
                        <slot name="header">
                            <div class="title">Change your password</div>

                            <Button
                                    type="button"
                                    v-on:redirect="close"
                                    class="btn-close"
                                    name="X"
                            >
                            </Button>
                        </slot>
                    </header>
                    <section class="modal-body">
                        <slot name="body">
                            <Input
                                    type = "password"
                                    placeholder = "Your password here"
                                    title = "Old password"
                                    class="input"
                            />
                            <Input
                                    type = "password"
                                    placeholder = "Your password here"
                                    title = "New password"
                                    class="input"
                            />
                            <Input
                                    type = "password"
                                    placeholder = "Your password here"
                                    title = "Repeat"
                                    class="input"
                            />
                        </slot>
                    </section>
                            <Button
                                    type="button"
                                    class="btn-green"
                                    v-on:redirect="close"
                                    name="Confirm"
                            >
                            </Button>
                        </slot>
                    </footer>
                </div>
            </div>
        </transition>
    </transition>
</template>

<style>
    .modal-backdrop {

        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.3);
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
    .input {
        color: black;
    }
    }

    .modal {
        color: black;
        background: #FFFFFF;
        box-shadow: 2px 2px 20px 1px;
        overflow-x: auto;
        display: flex;
        flex-direction: column;
    .input {
        color: black;
    }
    }

    .modal-header,
    .modal-footer {
        padding: 15px;
        display: flex;
    .input {
        color: black;
    }
    }

    .modal-header {
        border-bottom: 1px solid #eeeeee;
        color: #38bf32;
        justify-content: space-between;


    }
    .title {
        margin-top: 8px;
    }


    .modal-footer {
        border-top: 1px solid #eeeeee;
        justify-content: flex-end;
    }

    .modal-body {
        color: black;
        position: relative;
        padding: 20px 10px;

        .input {
            color: black;
        }
    }

    .btn-close {
        border: none;
        font-size: 20px;
        cursor: pointer;
        font-weight: bold;
        color: #38bf32;
        background: transparent;
        margin-left: 10px;
    }

    .btn-green {
        color: white;
        background: #38bf32;
        border: 1px solid #38bf32;
        border-radius: 2px;

    }
</style>
