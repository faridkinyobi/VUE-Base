<template><div>components orange</div></template>

<script>
export default {
  mounted() {
    console.log("orage pertama kali dibuat");
  },
  activated() {
    console.log("orange diaktifkan");
  },
  deactivated() {
    console.log("orange dinonaktifkan");
  },
  unmounted() {
    console.log("orange dihapus dari Dom");
  },
};
</script>

<style>
</style>