<template>
  <form class="row g-3">
    <div class="row">
      <div class="col-xl-12">
        <h2>contact person</h2>
        <hr />
        <div class="form-group g-1">
          <label for="nama">nama</label>
          <input
            type="text"
            class="form-control"
            id="nama"
            placeholder="nama"
            v-model.lazy="form.nama"
          />
        </div>

        <div class="form-group g-1">
          <label for="email">email</label>
          <input
            type="text"
            class="form-control"
            id="email"
            placeholder="email"
            v-model="form.emial"
          />
        </div>
        <div class="form-group g-1">
          <label for="subject">subject</label>
          <input
            type="text"
            class="form-control"
            id="subject"
            placeholder="subject"
            v-model="form.subject"
          />
        </div>
        <div class="form-group g-1">
          <label for="subject">subject</label>
          <textarea
            type="text"
            class="form-control"
            id="message"
            placeholder="message"
            v-model="form.massage"
          ></textarea>
        </div>
        <div class="form-group g-1">
          <h5>went to get promotion</h5>
          <div class="form-check">
            <input
              type="checkbox"
              class="form-check-input"
              value="newsLetter"
              id="newsLetter"
              v-model="form.extras"
            />
            <label class="form-check-label" for="newsLetter">newsLetter</label>
          </div>
          <div class="form-check">
            <input
              type="checkbox"
              class="form-check-input"
              value="promotion"
              id="promotion"
              v-model="form.extras"
            />
            <label class="form-check-label" for="promotion">Promotion</label>
          </div>
        </div>
        <div class="form-group g-1">
          <h5>what are you</h5>
          <div class="form-check">
            <input
              type="radio"
              class="form-check-input"
              value="male"
              id="male"
              v-model="form.gender"
            />
            <label class="form-check-label" for="male">male</label>
          </div>
          <div class="form-check">
            <input
              type="radio"
              class="form-check-input"
              value="female"
              id="female"
              v-model="form.gender"
            />
            <label class="form-check-label" for="female">female</label>
          </div>
        </div>
        <div class="form-group">
          <label for="country">country</label>
          <select class="form-control" v-model="form.country" id="country">
            <option
              value="1"
              v-for="(country, index) in listCountry"
              :key="index + country"
            >
              {{ country }}
            </option>
          </select>
        </div>
        <button class="btn btn-dark" @click.prevent="submitForm()">save</button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "contact",
  data() {
    return {
      form: {
        nama: "",
        emial: "",
        subject: "",
        massage: "",
        extras: [],
        gender: "male",
        country: " ",
      },
      listCountry: ["indenesia", "vietnam", "malaysia", "singapore"],
    };
  },
  // mounted() {
  //   console.log(this.form);
  // },
  methods: {
    submitForm() {
      console.log(this.form);
    },
  },
};
</script>

<style>
</style>