<template>
  <button @click="handleLogOut()">Cerrar Sesión</button>
</template>

<script>
import { mapActions } from "pinia";
import userStore from "@/store/user";

export default {
  name: "LogOut",
  methods: {
    ...mapActions(userStore, ["signOut"]),
    handleLogOut() {
      this.signOut();
    },
  },
};
</script>

<style></style>
