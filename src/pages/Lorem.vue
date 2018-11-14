<template>
    <Preloader/>
</template>

<script>
  import Preloader from '../components/Preloader'
  export default {
    name: "Lorem",
    components: {
      Preloader
    }
  }
</script>

<style scoped lang="scss">
    .content {
        position: absolute;
        left: 30%;
        top: 25%;
        width: 800px;
        text-align: justify;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-flow: column nowrap;
        color: white;
    }
</style>
