<template>
  <h1>Time to create a new Task</h1>
  <p>Task Details</p>
  <input aria-label="title" v-model="title" required /> <br />
  <input aria-label="checkbox" type="checkbox" v-model="isComplete" /><br />
  <button @click="handleNewTask">Crear tarea</button>
</template>

<script>
import { mapActions, mapState } from 'pinia';
import taskStore from '@/store/task';
import userStore from '@/store/user';

export default {
  name: 'CreateTask',
  computed: {
    ...mapState(userStore, ['user']),
  },
  data() {
    return {
      title: '',
      isComplete: false,
    };
  },
  methods: {
    ...mapActions(taskStore, ['insertTask', 'fetchTasks']),
    handleNewTask() {
      const taskData = {
        title: this.title,
        user_id: this.user.id,
        isComplete: this.isComplete,
      };
      this.insertTask(taskData.title, taskData.user_id, taskData.isComplete);
    },
  },
};
</script>

<style></style>
