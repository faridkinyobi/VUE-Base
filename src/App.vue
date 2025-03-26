<!-- <script setup>
// import HelloWorld from "./components/HelloWorld.vue";
// import TheWelcome from "./components/TheWelcome.vue";
</script> -->

<template>
  <app-header />
  <app-footer />
</template>
<script>
import Footer from "./components/generals/appFooter.vue";

export default {
  components: {
    "app-footer": Footer,
  },
  data() {},
};
</script>
<style scoped>
</style>
