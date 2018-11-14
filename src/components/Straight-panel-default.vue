<template>
    <ul class="panel">
        <li
          v-for="element in elements"
          v-bind:key="element.id"
          v-on:click="$emit('redirect', element.linkTo)"
        >
            {{element.value}}
            <img v-if="element.image"
                v-bind:src="element.image" alt=""
            >
        </li>
    </ul>
</template>

<script>
export default {
  name: "Straight-panel-default",
  props: {
    elements: Array
  },
  methods: {
  }
};
</script>

<style scoped lang="scss">
@import "../styles/colors.scss";
@import "../styles/font-rules.scss";
ul {
  list-style-type: none;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  min-width: 400px;
  max-width: 500px;
  color: white;
  text-align: center;
  margin-left: auto;
  margin-right: 40px;
  margin-top: 40px;
  cursor: pointer;

  li {
    &:hover {
      color: #38bf32;
    }

    img {
        width: 30px;
        height: 30px;
        border-radius: 30px;
        opacity: 0.5;

        &:hover {
            opacity: 1;
        }
    }
  }

}
</style>
