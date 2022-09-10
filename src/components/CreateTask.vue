<template>
  <h1>El usuario {{ user.id }} está creando</h1>
  <textarea id="newTaskTitle" required></textarea>
  <input type="checkbox" id="statusNewTask" />
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
  methods: {
    ...mapActions(taskStore, ["insertTask"]),
    handleNewTask() {
      const taskData = {
        title: document.getElementById("newTaskTitle").value,
        user_id: this.user.id,
        is_complete: document.getElementById("statusNewTask").checked,
      };
      this.insertTask(taskData.title, taskData.user_id, taskData.is_complete);
    },
  },
};
</script>

<style></style>
