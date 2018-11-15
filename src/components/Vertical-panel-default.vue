<template>
    <label class="navbar">
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
.navbar {

}
ul {

  list-style-type: none;
  -webkit-order: 0;
  -ms-flex-order: 0;
  order: 0;
  -webkit-flex: 0 1 auto;
  -ms-flex: 0 1 auto;
  flex: 0 1 auto;
    margin-right: 0;
  /*-webkit-align-self: center;*/
  /*-ms-flex-item-align: center;*/
  align-self: center;
  min-height: 260px;
  max-height: 400px;
    width: 170px;
    max-width: 200px;
  color: white;
  text-align: left;
  cursor: pointer;
  justify-content: space-around;
  li {
    &:hover {
      color: #38bf32;
        outline-offset: -4px;
        transition: background 250ms ease-in-out, transform 150ms ease;
        -webkit-appearance: none;
        -moz-appearance: none;
    }
  }
}
</style>
