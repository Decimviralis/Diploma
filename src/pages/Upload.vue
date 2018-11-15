<template>
    <v-uploader
    language="en"
    class="uploader"/>
</template>

<script>
    import Vue from 'vue';
    Vue.use(vUploader, uploaderConfig);
    const uploaderConfig = {
      uploadFileUrl: 'http://xxx/upload',
      deleteFileUrl: 'http://xxx/delete',
      showMessage: (vue, message) => {
        //using v-dialogs to show message
        vue.$vDialog.alert(message, null, {messageType: 'error'});
      }
    };
  import vUploader from 'v-uploader';

  export default {
    name: "Upload"
  }
</script>

<style scoped lang="scss">
    .uploader {
        margin-left: 650px;
        margin-top: 40px;

    }
</style>
