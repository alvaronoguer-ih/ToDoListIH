<template>
  <button class="btn-lo" @click="handleLogOut()">Cerrar Sesión</button>
</template>

<script>
import { mapActions } from 'pinia';
import userStore from '@/store/user';

export default {
  name: 'LogOut',
  methods: {
    ...mapActions(userStore, ['signOut']),
    async handleLogOut() {
      await this.signOut();
    },
  },
};
</script>

<style>
.btn-lo {
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
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: fit-content;
  word-break: break-word;
  border: 0;
}

.task-status {
  display: inline-block;
}
</style>
