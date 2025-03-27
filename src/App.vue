<!-- <script setup>
// import HelloWorld from "./components/HelloWorld.vue";
// import TheWelcome from "./components/TheWelcome.vue";
</script> -->

<template>
  <app-header />
  <div class="container">
    <profile-page
      :name="name"
      :lastname="lastName"
      :userAge="userAge"
      :hobby="hobby"
      :userParent="userParent"
      @update-cildren="userAge = $event"
      @hallow="handleHallow"
      :handleHobby="handleHobby"
    >
    </profile-page>
    <button @click="handleUpdate">Update Name</button>
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
      hobby: "swimming",
      userAge: 20,
      userParent: {
        father: "dhani",
        mother: "siti",
      },
    };
  },
  methods: {
    handleUpdate() {
      this.name = "alamsah";
    },
    handleHallow() {
      alert("Hallow word");
    },
    handleHobby(value) {
      this.hobby = value;
    },
  },
};
</script>
<style scoped>
.container {
  padding: 20px;
}
</style>
