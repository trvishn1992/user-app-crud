<template>
  <div class="container col-md-4">
    <b-card title="SignIn" bg-variant="light">
      <b-form @submit="onSubmit">
        <b-form-group
          id="input-group-1"
          label="Email address:"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="form.email"
            type="email"
            placeholder="Enter email"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-2"
          label="Your Password:"
          label-for="input-2"
        >
          <b-form-input
            id="input-2"
            v-model="form.password"
            type="password"
            placeholder="Enter Password"
            required
          ></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="primary">Login</b-button>
        <br />
        <br />
        <span v-if="isError" style="color: red">Invalid email/password</span>
        <br />
        <br />
        <router-link to="/Register"
          >New User? Click here to Register!</router-link
        >
      </b-form>
    </b-card>
  </div>
</template>

<script>
import LoginService from "../../services/login";

export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      isError: false,
    };
  },
  methods: {
    onSubmit(event) {
      this.isError = false;
      event.preventDefault();
      //alert(JSON.stringify(this.form))
      //this.$router.push('/Users');
      LoginService.authenticateUser(this.form).then(
        (res) => {
          console.log(res);
          if (res.status === 200) {
            this.$router.push("/Users");
          } else {
            this.isError = true;
          }
        },
        (err) => {
          this.isError = true;
          console.log(err);
        }
      );
    },
  },
};
</script>

<style scoped>
</style>