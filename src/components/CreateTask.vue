<template>
  <h1>El usuario {{ user.id }} está creando</h1>
  <textarea v-model="title" required></textarea>
  <input type="checkbox" v-model="isComplete" />
  <button @click="handleNewTask">Crear tarea</button>
</template>

<script>
import { mapActions, mapState } from "pinia";
import taskStore from "@/store/task";
import userStore from "@/store/user";

export default {
  name: "CreateTask",
  computed: {
    ...mapState(userStore, ["user"]),
  },
  data() {
    return {
      title: "",
      isComplete: false,
    };
  },
  methods: {
    ...mapActions(taskStore, ["insertTask", "fetchTasks"]),
    handleNewTask() {
      const taskData = {
        title: this.title,
        user_id: this.user.id,
        isComplete: this.isComplete,
      };
      this.insertTask(taskData.title, taskData.user_id, taskData.isComplete);
      this.fetchTasks();
    },
  },
};
</script>

<style></style>
