<template>
    <label>
        <button v-on:click="$emit('redirect')">
            {{name}}
        </button>
    </label>
</template>

<script>
export default {
  name: "Button-default",
  props: {
    name: String
  }
};
</script>

<style scoped lang="scss">
    button {
        outline: none;
       // display: inline-block;
        border: none;
        padding: 1rem 2rem;
        margin: 0;
        text-decoration: none;
        background: #fff8f8;
        color: #616150;
        font-family: sans-serif;
        font-size: 1rem;
        line-height: 1;
        cursor: pointer;
        text-align: center;
        transition: background 250ms ease-in-out, transform 150ms ease;
        -webkit-appearance: none;
        -moz-appearance: none;
        width: 100%;
    }

    button:hover,
    button:focus {
        background: #38bf32;
        color: white;
    }

    button:focus {

        outline-offset: -4px;
    }

    button:active {
        transform: scale(0.99);
    }
</style>
