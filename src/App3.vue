
<template>
  <app-header />

  <!-- props -->
  <div class="container">
    <button @click="activComp = 'comp-Orang'">Orange</button>
    <button @click="activComp = 'comp-Grap'">Grape</button>
    <!-- <comp-grap v-if="activComp === 'orange-compont'">orange</comp-grap>
    <comp-orange v-if="activComp === 'grape-compont'">grape</comp-orange> -->
    <!-- dynamic component -->
    <p>Dynamic component</p>
    <component :is="activComp"></component>

    <p>keep-alive</p>
    <!-- keep alive -->
    <!-- exclude end include -->
    <keep-alive>
      <component :is="activComp"></component>
    </keep-alive>
  </div>
  <app-footer />
</template>
<script>
import compOrang from "./components/fruits/orang.vue";
import compGrap from "./components/fruits/grap.vue";
export default {
  components: {
    compGrap,
    compOrang,
  },
  data() {
    return {
      activComp: "comp-Orang",
    };
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
