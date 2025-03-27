<template>
  <div>
    <h3>user information</h3>
    <ul>
      <li><span>Name</span>:{{ name }}</li>
      <li><span>lastName</span>: {{ lastname }}</li>
      <li><span>userAge</span>: {{ userAge }}</li>
      <li><span>Hobby</span>: {{ hobby }}</li>
      <ul>
        <li v-for="(key, value, index) in userParent" :key="index">
          <span>{{ key }}</span
          >:{{ value }}
        </li>
      </ul>
      <button @click="handleUpdateCildren">Cildren Update age</button>
      <button @click="HandleHallow">Hallow word</button>
      <button @click="handleHobby(hobbys)">Hobby</button>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    lastname: String,
    hobby: String,
    userAge: Number,
    userParent: Object,
    handleHobby: Function,
  },
  data() {
    return {
      hobbys: "Fotball",
    };
  },
  // cheking emits
  // emits: ["update-cildren", "hallow"],
  emits: {
    "update-cildren": function (age) {
      if (age === 21) {
        return true;
      } else {
        alert("age must be less than 20");
        return false;
      }
    },
  },
  // custom event
  methods: {
    handleUpdateCildren() {
      this.$emit("update-cildren", 21);
    },
    HandleHallow() {
      this.$emit("hallow");
    },
  },
};
</script>

<style>
</style>