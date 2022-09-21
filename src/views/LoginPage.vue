<template v-if="!user">
  <div class="bk">
    <div class="main-section">
      <div class="copy-area">
        <h1>Let's get things done</h1>
        <h2>TwoDo is the best app to manage your tasks and plan your future.</h2>
      </div>
      <div class="log-in-zone">
        <LogIn />
      </div>
    </div>
  </div>
  <footer>
    <h3>Twodo®</h3>
  </footer>
</template>

<script>
import { mapState } from 'pinia';
import userStore from '@/store/user';
import LogIn from '../components/LogIn.vue';

export default {
  components: { LogIn },
  name: 'LoginPage',
  computed: {
    ...mapState(userStore, ['user']),
  },
};
</script>

<style scoped>
.copy-area {
  text-align: left;
  width: 40%;
}

.copy-area h1 {
  font-family: 'DM Serif Display', serif;
  font-size: 3.5em;
}

.copy-area h2 {
  color: white;
}

.main-section {
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.bk {
  padding-top: 5%;
  background-image: url('https://images.pexels.com/photos/9754/mountains-clouds-forest-fog.jpg');
  background-position: center center;
  background-size: cover;
  height: 85vh;
}

.dashboard-zone {
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  align-items: center;
}

.log-in-zone {
  display: flex;
  width: 60%;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}

footer {
  background-color: black;
  padding: 2%;
  height: 10vh;
}
</style>
