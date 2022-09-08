<template>
  <h1>Hola estoy en LoginPage</h1>
  <SignUp />
  <h2>LOGIN</h2>
  <LogIn />
</template>

<script>
import { mapState, mapActions } from "pinia";
import userStore from "@/store/user";
import SignUp from "@/components/SignUp.vue";
import LogIn from "../components/LogIn.vue";

export default {
  components: { SignUp, LogIn },
  name: "LoginPage",
  computed: {
    ...mapState(userStore, ["user"]),
  },
};
</script>
