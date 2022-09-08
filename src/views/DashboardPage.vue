<template>
  <LogOut />
  <h1>Dashboard View</h1>
  <button>Crear tarea</button>
  <div></div>
</template>

<script>
import { mapState, mapActions } from "pinia";
import taskStore from "@/store/task";
import LogOut from "../components/LogOut.vue";

export default {
  components: { LogOut },
  name: "DashboardPage",
  computed: {
    ...mapState(taskStore, ["task"]),
  },
  methods: {
    ...mapActions(taskStore, ["fetchTasks"]),
  },
  created() {
    this.fetchTasks();
  },
};
</script>

<style></style>
