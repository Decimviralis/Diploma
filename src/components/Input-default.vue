<template>
    <label>
        <span class="title">
            {{title}}
        </span>
        <input
          v-bind="$attrs"
          v-bind:value="value"
          v-bind:placeholder="placeholder"
          v-model="contain"
          v-on:input="checkContain"
        >
    </label>
</template>

<script>
export default {
  name: "Input-default",
  data: function() {
    return {
      contain: null
    }
  },
  props: {
    value: String,
    title: String,
    placeholder: String
  },
  methods: {
    checkContain() {
      console.log(this.contain);
    }
  }
};
</script>

<style scoped lang="scss">
label {
    font-size: 20px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 20px;
    .title {
        color: white;
        text-align: left;
        font-size: 20px;
    }

    input {
        outline: none;
        color: white;
        background: transparent;
        border: none;
        border-bottom: 2px solid white;
        box-sizing: border-box;
        padding-left: 12px;
        font-size: 20px;
    }
    input::placeholder {
        color: gray;
        opacity: 1;
    }
    input:focus {
        border-color: #38bf32
    }
}

</style>
