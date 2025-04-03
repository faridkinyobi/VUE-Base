<template>
  <div>
    <h2>Components Grape</h2>
    <Teleport to="body">
      <comp-modal></comp-modal>
    </Teleport>
  </div>
</template>

<script>
import compModal from "../utils/modal.vue";
export default {
  components: {
    compModal,
  },
  unmounted() {
    console.log("Grape component removed from dom");
  },
};
</script>

<style>
</style>