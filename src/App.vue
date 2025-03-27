<!-- <script setup>
// import HelloWorld from "./components/HelloWorld.vue";
// import TheWelcome from "./components/TheWelcome.vue";
</script> -->

<template>
  <app-header />
  <div class="container">
    <profile-page :name="name" :lastname="lastName" :userAge="userAge">
    </profile-page>
    <button @click="handleUpdate">Update</button>
  </div>
  <app-footer />
</template>
<script>
import ProfilePage from "./components/user/ProfilePage.vue";
export default {
  components: {
    ProfilePage,
  },
  data() {
    return {
      name: "Abdulah",
      lastName: "Abdul",
      userAge: 20,
    };
  },
  methods: {
    handleUpdate() {
      this.name = 'alamsah';
    },
  },
};
</script>
<style scoped>
.container {
  padding: 20px;
}
</style>
