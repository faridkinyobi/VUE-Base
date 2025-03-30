<template>
  <div>
    <h3>lifecycle hook</h3>
    {{ text }}
    <button @click="this.text = 'hallow brader'">hallow brader</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "hallow word",
    };
  },
  beforeCreate() {
    console.log("beforeCreate");
  },
  beforeCreate() {
    console.log("1-beforeCreacte");
  },
  created() {
    console.log("2-creacted");
  },
  beforeMount() {
    console.log("3-beforeMount");
  },
  mounted() {
    console.log("4-mounted");
  },
  beforeUpdate() {
    console.log("U1-beforeUpdate");
  },
  updated() {
    console.log("U2-updated");
  },
  beforeMounted(){
    console.log("D3-beforeMounted")
  },
  unmounted(){
    console.log("D4-unmounted")
  }
};
</script>

<style>
</style>