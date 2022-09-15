<template>
  <div class="bk">
    <div class="log-in-zone">
      <LogIn />
    </div>
  </div>
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

<style>
.bk {
  padding-top: 5%;
  background-image: url('https://images.pexels.com/photos/9754/mountains-clouds-forest-fog.jpg');
  background-position: center center;
  background-size: cover;
  height: 90vh;
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
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}
</style>
