<template>
    <label>
        <ul>
            <li
                    v-for="element in elements"
                    v-bind:key="element.id"
                    v-on:click="$emit('redirect', element.linkTo)"
            >
                {{element.value}}
            </li>
        </ul>
    </label>
</template>

<script>
export default {
  name: "Vertical-panel-default",
  props: {
    elements: Array
  }
};
</script>

<style scoped lang="scss">
ul {
    position: absolute;
  list-style-type: none;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  width: 170px;
    box-sizing: border-box;
  min-height: 200px;
  color: white;
  text-align: left;
  margin-right: auto;
  margin-top: 220px;
  cursor: pointer;

  li {
    &:hover {
      color: #38bf32;
    }
  }
}
</style>
