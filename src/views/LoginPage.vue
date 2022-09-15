<template>
  <h1>Te damos la bienvenida a TwoDo</h1>
  <div class='dashboard-zone'>
    <div class='sign-up-zone'>
      <h2>Join TwoDo</h2>
      <SignUp />
    </div>
    <div class='log-in-zone'>
      <h2>Login</h2>
      <LogIn />
    </div>
  </div>
</template>

<script>
import { mapState } from 'pinia';
import userStore from '@/store/user';
import SignUp from '@/components/SignUp.vue';
import LogIn from '../components/LogIn.vue';

export default {
  components: { SignUp, LogIn },
  name: 'LoginPage',
  computed: {
    ...mapState(userStore, ['user']),
  },
};
</script>

<style>
.dashboard-zone {
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  align-items: center;
}

.sign-up-zone,
.log-in-zone {
  display: flex;
  width: 45%;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}
</style>
