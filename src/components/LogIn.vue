<template>
  <label aria-controls='email' for='email'>Email:
  <input type='email' id='email-login' name='email' /></label>

  <label for='password'>password
  <input type='password' id='password-login' name='password' /></label>

  <input type='submit' value='Sign Up' @click='handleLogIn()' />
</template>

<script>
import { mapActions } from 'pinia';
import userStore from '@/store/user';

export default {
  name: 'LogIn',
  methods: {
    ...mapActions(userStore, ['signInWithEmail']),
    handleLogIn() {
      const userData = {
        email: document.getElementById('email-login').value,
        password: document.getElementById('password-login').value,
      };
      this.signInWithEmail(userData.email, userData.password);
    },
  },
};
</script>

<style></style>
