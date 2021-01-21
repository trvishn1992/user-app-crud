<template>
  <div class="container">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="input-group-1" label="Your Name:" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.name"
          placeholder="Enter name"
          required
          readonly
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-2"
        label="Email address:"
        label-for="input-2"
      >
        <b-form-input
          id="input-2"
          v-model="form.email"
          type="email"
          placeholder="Enter email"
          required
          readonly
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Password:" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="form.password"
          type="password"
          placeholder="Enter Password"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Update</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
      <b-button type="reset" variant="outline-primary">
        <router-link to="/">Cancel</router-link>
      </b-button>
    </b-form>
  </div>
</template>

<script>
import UserService from "../../services/users";

export default {
  data() {
    return {
      form: {
        _id: "",
        email: "",
        name: "",
        password: "",
      },
      show: false,
    };
  },
  methods: {
    async onSubmit(event) {
      try {
        event.preventDefault();
        UserService.updateUser(this.form).then(
          (res) => {
            if (res.status === 200) this.$router.push("/Users");
          },
          (err) => {
            console.log(err);
          }
        );
      } catch (err) {
        console.log(err);
      }
    },
    onReset() {
      this.form.password = "";
    },
  },
  mounted() {
    const user = this.$route.params.userData;
    console.log("user from profile", this.$route.params.userData);
    if (user) {
      this.form._id = user._id;
      this.form.email = user.email;
      this.form.name = user.name;
      this.form.password = user.password;
      this.show = true;
    }
  },
};
</script>

<style scoped>
</style>