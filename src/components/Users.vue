<template>
  <div class="container">
    <h1>User List</h1>
    <router-link to="/">Logout!</router-link>
    <br />
    <br />
    <router-link to="/Register">Add New User!</router-link>
    <hr v-if="!users.length" />
    <h1 v-if="!users.length">No User's Found</h1>
    <div class="row">
      <b-card
        :title="users.name"
        tag="article"
        style="max-width: 20rem"
        class="col-md-3"
        v-for="user in users"
        :key="user._id"
      >
        <b-card-text>Email : {{ user.email }}</b-card-text>
        <b-card-text>Password : {{ user.password }}</b-card-text>

        <b-button href="#" @click="onEditClick(user)" variant="primary"
          ><b-icon icon="pencil"></b-icon>Edit</b-button
        >
        <b-button href="#" @click="onDeleteClick(user.name)" variant="danger"
          ><b-icon icon="trash"></b-icon>Delete</b-button
        >
      </b-card>
      <br />
    </div>
  </div>
</template>

<script>
import UserService from "../../services/users";

export default {
  data() {
    return {
      users: [],
    };
  },
  methods: {
    getUsers() {
      UserService.getUsers().then(
        (res) => {
          if (res.status === 200) {
            this.users = res.data || [];
          }
        },
        (err) => {
          console.log(err);
        }
      );
    },
    onEditClick(user) {
      this.$router.push({ name: "Profile", params: { userData: user } });
    },
    onDeleteClick(name) {
      UserService.deleteUser(name).then(
        (res) => {
          if (res.status === 200) this.getUsers();
        },
        (err) => {
          console.log(err);
        }
      );
    },
  },
  mounted() {
    this.getUsers();
  },
};
</script>

<style scoped>
</style>