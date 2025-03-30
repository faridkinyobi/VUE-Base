<!-- <script setup>
// import HelloWorld from "./components/HelloWorld.vue";
// import TheWelcome from "./components/TheWelcome.vue";
</script> -->

<template>
  <app-header />

  <!-- props -->
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
  <!-- end props -->

  <!-- slots -->
  <compont-brand>
    <template v-slot:top>
      <strong>top content brand</strong>
    </template>
    <template v-slot:brand>
      <ul style="padding: 10px">
        <li v-for="(items, index) in brand" :key="index">{{ items }}</li>
      </ul>
    </template>
    <strong>botton content brand</strong>
  </compont-brand>
  <!-- end slots -->

  <app-footer />

</template>
<script>

import ProfilePage from "./components/user/ProfilePage.vue";
import compontBrand from "./components/cars/brand.vue";

export default {
  components: {
    ProfilePage,
    compontBrand,
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
      brand: ["toyota", "honda", "suzuki"],
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
