<template>
  <Form @submit="onSubmit" class="form-group">
    <label for="name">name</label>
    <Field
      name="name"
      type="text"
      :rules="validateName"
      placeholder="name"
      class="form-control"
    />
    <ErrorMessage name="name" class="erorr" as="div" v-slot="{ message }">
      <div class="alert alert-danger">{{ message }}</div>
    </ErrorMessage>
    <label for="name">name</label>
    <Field
      name="email"
      :rules="validateEmail"
      v-slot="{ field, errors, errorMessage }"
    >
      <input
        name="email"
        type="email"
        placeholder="email"
        class="form-control"
        v-bind="field"
        :class="{ 'is-invalid': errors.length !== 0 }"
      />
      <div role="alert" v-if="errors.length !== 0" class="alert alert-danger">
        {{ errorMessage }}
      </div>
    </Field>
    <div class="form-grub">
      <label for="message">Message</label>
      <Field
        name="message"
        :rules="validateMessage"
        v-slot="{ field, errors, errorMessage }"
      >
        <textarea
          id="message"
          rows="3"
          class="form-control"
          :class="{ 'is-invalid': errors.length !== 0 }"
          v-bind="field"
        >
        </textarea>
        <div role="alert" v-if="errors.length !== 0" class="alert alert-danger">
          {{ errorMessage }}
        </div>
      </Field>
    </div>
    <button class="btn btn-primary">submite</button>
  </Form>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
export default {
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  methods: {
    validateName(value) {
      if (!value) {
        return "name is required";
      }
      return true;
    },
    validateEmail(value) {
      if (!value) {
        return "email is required";
      }
      const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i.test(value);
      if (!regex) {
        return "email is not valid";
      }
      return true;
    },
    validateMessage(value) {
      if (!value) {
        return "message is required";
      }
      return true;
    },
    onSubmit(values, { resetForm }) {
      console.log(values);
      resetForm();
    },
  },
};
</script>

<style>
</style>