<template>
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" />

  <label for="password">Password</label>
  <input type="password" id="password" name="password" />

  <input type="submit" id="login" value="Sign Up" @click="handleSignUp()" />
</template>

<script>
import { mapState, mapActions } from "pinia";
import userStore from "@/store/user";

export default {
  name: "signIn",
  methods: {
    ...mapActions(userStore, ["signUp"]),
    handleSignUp() {
      const userData = {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
      };
      console.log(userData.email);
      this.signUp(userData.email, userData.password);
    },
  },
};
</script>

<style></style>
