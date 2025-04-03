
<template>
  <app-header />

  <!-- props -->
  <div class="container">
    <life-comont v-if="show" ></life-comont>
  </div>
  <app-footer />
</template>
<script>
import lifeComont from "./components/Life/index.vue";
export default {
  components: {
    lifeComont,
  },
  data() {
    return {
      show: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.show = false;
    }, 5000);
  },
  methods: {},
};
</script>
<style scoped>
.container {
  padding: 20px;
}
</style>
