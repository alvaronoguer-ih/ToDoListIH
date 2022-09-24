<template>
  <div class="login-text">
    <h2>Welcome to TwoDo</h2>
    <div class="login-area-form">
      <label aria-controls="email" for="email"
        ><input type="email" id="email-login" name="email" placeholder="email" v-model="email"
      /></label>

      <label for="password">
        <input type="password" id="password-login" name="password" placeholder="password" />
      </label>

      <div class="botons-area">
        <input class="btn-li" type="submit" value="Log in" @click="handleLogIn()" />
        <div class="or">- or -</div>
        <input class="btn-su" type="submit" id="login" value="Sign Up" @click="handleSignUp()" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'pinia';
import userStore from '@/store/user';

export default {
  name: 'LogIn',
  methods: {
    ...mapActions(userStore, ['signInWithEmail', 'signUp', 'signInMagic']),
    async handleLogIn() {
      const userData = {
        email: document.getElementById('email-login').value,
        password: document.getElementById('password-login').value,
      };
      try {
        await this.signInWithEmail(userData.email, userData.password);
        this.$swal({
          title: `Welcome back ${userData.email}`,
          toast: true,
          position: 'top-end',
          timer: 4000,
          showConfirmButton: false,
          timerProgressBar: true,
          icon: 'success',
        });
      } catch (error) {
        console.log(error);
        if (error.status === 400) {
          this.$swal({
            title: error.message,
            toast: true,
            position: 'top-end',
            timer: 4000,
            showConfirmButton: false,
            timerProgressBar: true,
            icon: 'error',
          });
        } else {
          this.$swal({
            title: 'Email and password required',
            toast: true,
            position: 'top-end',
            timer: 4000,
            showConfirmButton: false,
            timerProgressBar: true,
            icon: 'warning',
          });
        }
      }
    },
    async handleSignUp() {
      const userData = {
        email: document.getElementById('email-login').value,
        password: document.getElementById('password-login').value,
      };
      try {
        await this.signUp(userData.email, userData.password);
      } catch (error) {
        if (error.status === 400) {
          this.$swal({
            title: error.message,
            toast: true,
            position: 'top-end',
            timer: 4000,
            showConfirmButton: false,
            timerProgressBar: true,
            icon: 'warning',
          });
        } else if (error.status === 422) {
          this.$swal({
            title: error.message,
            toast: true,
            position: 'top-end',
            timer: 4000,
            showConfirmButton: false,
            timerProgressBar: true,
            icon: 'warning',
          });
        }
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
  padding: 5%;
  border-radius: 20px;
  background-color: white;
  box-shadow: #3e3e3e 0 10px 20px -10px;
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
  border-bottom: solid 1px;
}

#email-login:focus,
#password-login:focus {
  outline: none;
  border-color: #219ebc;
}

@media (max-width: 800px) {
  .login-text {
    width: 100%;
  }

  .botons-area {
    margin-top: 10%;
    padding-bottom: 5%;
    display: flex;
    flex-direction: row;
  }

  .or {
    padding-top: 3%;
  }

  .btn-li {
    margin-top: 0;
  }
  .btn-su {
    margin-top: 0;
  }
}
</style>
