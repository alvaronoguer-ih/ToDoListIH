<template>
  <label for='email' htmlFor="email">Email:
  <input type='email' id='email' name='email' /></label>

  <label for='password'>Password
  <input type='password' id='password' name='password' /></label>

  <input type='submit' id='login' value='Sign Up' @click='handleSignUp()' />
</template>

<script>
import { mapActions } from 'pinia';
import userStore from '@/store/user';

export default {
  name: 'signIn',
  methods: {
    ...mapActions(userStore, ['signUp']),
    async handleSignUp() {
      const userData = {
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
      };
      console.log(userData.email);
      try {
        await this.signUp(userData.email, userData.password);
      } catch (error) {
        alert('Este usuario ya existe');
      }
    },
  },
};
</script>

<style></style>
