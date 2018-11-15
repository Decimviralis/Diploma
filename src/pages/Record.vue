<template>
    <audio-recorder
            upload-url="some url"
            :attempts="3"
            :headers="headers"
            :time="2"
            :start-record="callback"
            :stop-record="callback"
            :start-upload="callback"
            :successful-upload="callback"
            :failed-upload="callback"
            class = "recorder"
    />
</template>

<script>
  import Vue from 'vue';
  import AudioRecorder from 'vue-audio-recorder';
  Vue.use(AudioRecorder);
  export default {
    name: "Record",
    methods: {
      callback (msg) {
        console.debug('Event: ', msg)
      }
    }
  }
</script>

<style scoped lang="scss">
    .recorder {
        margin-left: 500px;
        max-width: 500px;
    }
</style>
