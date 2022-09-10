<template>
  <LogOut />
  <h1>Dashboard View</h1>
  <ShowTasks />
  <CreateTask />
</template>

<script>
import { mapActions } from "pinia";
import taskStore from "@/store/task";
import LogOut from "../components/LogOut.vue";
import ShowTasks from "../components/ShowTasks.vue";
import CreateTask from "../components/CreateTask.vue";

export default {
  components: { LogOut, ShowTasks, CreateTask },
  name: "DashboardPage",
  methods: {
    ...mapActions(taskStore, ["fetchTasks"]),
  },
  created() {
    try {
      this.fetchTasks();
    } catch (error) {
      console.error(error);
    }
  },
};
</script>

<style></style>
