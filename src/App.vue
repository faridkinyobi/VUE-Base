
<template>
  <app-header />
  <div class="container">
    <!-- <com-contact></com-contact> -->
    <com-validate></com-validate>
  </div>
  <app-footer />
</template>
<script>
// import comContact from "./components/contact/index.vue";
import comValidate from "./components/validate/index.vue";
export default {
  components: {
    comValidate,
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
<style scoped>
.container {
  padding: 20px;
}
</style>
