<template>
  <div class="profileinfo">
    <img alt="profile Icon" src="../img/user.png" />
    <h2>
      Hello
      {{ this.user.email }}
    </h2>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import userStore from '@/store/user';

export default {
  name: 'ProfileInfo',
  computed: {
    ...mapState(userStore, ['user']),
  },

  methods: {
    ...mapActions(userStore, ['addPhone']),
  },
};
</script>

<style scoped>
p {
  text-align: left;
}
.profileinfo {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 4%;
  margin-top: 4%;
}
h2 {
  text-align: left;
  font-size: 1em;
  margin: 0;
  padding: 0;
}
img {
  height: 40%;
  width: 5%;
  margin-right: 10px;
}
</style>
