<template>
    <div class="content">

    </div>
</template>

<script>

export default {
  name: "Home",
  data: function() {
    return {

    };
  },
  methods: {
    goToLink(key) {
      this.$router.push({ name: key });
    }
  }
};
</script>

<style scoped>

</style>
