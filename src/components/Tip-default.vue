<template>
    <label>
        <p v-on:click="$emit('redirect')">{{value}}</p>
    </label>
</template>

<script>
export default {
  name: "Tip-default",
  props: {
    value: String
  }
};
</script>

<style scoped lang="scss">
    p {
        cursor: pointer;
        font-size: 12px;
        color: gray;


        &:hover {
            text-decoration: underline;
            color: white;
        }
    }
</style>
