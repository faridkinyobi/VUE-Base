<template>
  <div>
    <h3>user information</h3>
    <ul>
      <li><span>Name</span>:{{ name }}</li>
      <li><span>lastName</span>: {{ lastname }}</li>
      <li><span>lastName</span>: {{ userAge }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["name", "lastname","userAge"],
};
</script>

<style>
</style>