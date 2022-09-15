<template>
  <div class="navbar"></div>
  <router-view />
</template>

<script>
import { mapState, mapActions } from 'pinia';
import userStore from '@/store/user';

export default {
  name: 'App',
  computed: {
    ...mapState(userStore, ['user']),
  },
  methods: {
    ...mapActions(userStore, ['fetchUser']),
  },

  async created() {
    try {
      await this.fetchUser(); // here we call fetch user
    } catch (e) {
      console.error(e);
    }
  },
  watch: {
    user() {
      if (!this.user) {
        this.$router.push({ path: '/auth' });
      } else {
        this.$router.push({ path: '/' });
      }
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


.navbar {
  width: 100%;
  background-color: black;
  height: 50px;
  margin-bottom: 10px;
}
</style>
