<template>
  <div class="navbar">
    <div class="menu-navbar">
      <h1>TwoDo</h1>
      <div v-if="user">
        <LogOut />
      </div>
    </div>
  </div>
  <router-view />
</template>

<script>
import { mapState, mapActions } from 'pinia';
import userStore from '@/store/user';
import LogOut from '@/components/LogOut.vue';

export default {
  name: 'App',
  components: { LogOut },
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
        this.$router.push({ path: '/' });
      } else {
        this.$router.push({ path: '/dashboard' });
      }
    },
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Color+Emoji&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Gaegu:wght@300;400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap');

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
  height: fit-content;
}

.navbar h1 {
  color: white;
  font-family: 'Gaegu', cursive;
  font-weight: bold;
  text-decoration: line-through;
  text-decoration-thickness: 0.1em;
  user-select: none;
  letter-spacing: -3px;
  margin-bottom: 0;
}

h2 {
  padding-top: 5%;
  font-size: 2rem;
}

.menu-navbar {
  margin: 0 auto;
  display: flex;
  width: 90%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
}
</style>
