<template>
  <div class="login-text">
    <h2>Welcome to TwoDo</h2>
    <div class="login-area-form">
      <label aria-controls="email" for="email"
        ><input type="email" id="email-login" name="email" placeholder="email"
      /></label>

      <label for="password">
        <input type="password" id="password-login" name="password" placeholder="password" />
      </label>

      <input class="btn-li" type="submit" value="Log in" @click="handleLogIn()" />
      <div class="or">- or -</div>
      <input class="btn-su" type="submit" id="login" value="Sign Up" @click="handleSignUp()" />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'pinia';
import userStore from '@/store/user';

export default {
  name: 'LogIn',
  methods: {
    ...mapActions(userStore, ['signInWithEmail', 'signUp']),
    async handleLogIn() {
      const userData = {
        email: document.getElementById('email-login').value,
        password: document.getElementById('password-login').value,
      };
      try {
        await this.signInWithEmail(userData.email, userData.password);
      } catch (error) {
        alert('Prueba otra vez');
      }
    },
    async handleSignUp() {
      const userData = {
        email: document.getElementById('email-login').value,
        password: document.getElementById('password-login').value,
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

<style>
.btn-li {
  margin-top: 10%;
  background: #f0ab5d;
  border-radius: 999px;
  box-shadow: #f0ab5d 0 10px 20px -10px;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  opacity: 1;
  outline: 0 solid transparent;
  padding: 8px 18px;
  width: fit-content;
  word-break: break-word;
  border: 0;
  padding: 5px 40px 5px 40px;
}

.or {
  padding-top: 6%;
}

.login-area-form {
  padding-top: 5%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  align-content: stretch;
}

.btn-su {
  margin-top: 5%;
  background: #5e5df0;
  border-radius: 999px;
  box-shadow: #5e5df0 0 10px 20px -10px;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  opacity: 1;
  outline: 0 solid transparent;
  padding: 8px 18px;
  width: fit-content;
  word-break: break-word;
  border: 0;
  padding: 5px 30px 5px 30px;
}

.login-area-form {
  padding-top: 5%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  align-content: stretch;
}

.login-text {
  margin-top: 5%;
  padding: 5%;
  border-radius: 20px;
  background-color: white;
}

#email-login,
#password-login {
  text-align: center;
  width: 100%;
  margin-top: 5%;
  padding: 10px 60px 10px 60px;
  border-top: none;
  border-left: none;
  border-right: none;
}

#email-login:focus,
#password-login:focus {
  outline: none;
  border-color: #219ebc;
}
</style>
