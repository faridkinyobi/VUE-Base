
<template>
  <app-header />
  <div class="container">
    <com-contact></com-contact>
  </div>
  <app-footer />
</template>
<script>
import comContact from "./components/contact/index.vue";
export default {
  components: {
    comContact,
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
