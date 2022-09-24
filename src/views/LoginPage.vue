<template v-if="!user">
  <div class="bk">
    <div class="main-section">
      <img class="iphone" src="../img/iphone.png" alt="iphone" />
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
.iphone {
  width: 15%;
  margin-right: 3%;
}

.copy-area {
  text-align: left;
  width: 40%;
}

.copy-area h1 {
  font-family: 'DM Serif Display', serif;
  font-size: 3.5em;
  color: white;
  user-select: none;
}

.copy-area h2 {
  color: white;
  user-select: none;
  font-size: 1.5em;
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
  background-image: url('https://images.pexels.com/photos/9754/mountains-clouds-forest-fog.jpg');
  background-position: center center;
  background-size: cover;
  height: 85vh;
  padding-top: 0px;
  display: flex;
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
  align-items: flex-end;
  justify-content: flex-start;
}

footer {
  background-color: black;
  padding: 2%;
  height: 10vh;
}

@media (max-width: 990px) {
  .iphone {
    display: none;
  }

  .copy-area {
    width: 100%;
  }

  .main-section {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .log-in-zone {
    width: 100%;
    margin-top: 5%;
  }

  .copy-area h1 {
    text-align: center;
  }

  .copy-area h2 {
    display: none;
  }
}
</style>
