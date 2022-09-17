<template>
  <div class="create-task-container">
    <h1>Time to create a new Task</h1>
    <textarea
      id="input-task-c"
      aria-label="title"
      v-model="title"
      required
      placeholder="Plan a task"
      maxlength="60"
    >
    </textarea>
    <button @click="handleNewTask">Create task</button>
  </div>
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
    async handleNewTask() {
      const taskData = {
        title: this.title,
        user_id: this.user.id,
        isComplete: false,
      };
      try {
        await this.insertTask(taskData.title, taskData.user_id, taskData.isComplete);
        document.getElementById('input-task-c').value = '';
      } catch (error) {
        alert('No puedes crear una tarea en blanco');
      }
    },
  },
};
</script>

<style scoped>
.create-task-container {
  color: white;
  background-color: #2c3e50;
  border-radius: 15px;
  border: none;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
}

.create-task-container h1 {
  font-size: 1.65rem;
  padding: 4%;
}

button {
  background: #f0ab5d;
  border-radius: 0px 0px 15px 15px;
  color: #ffffff;
  cursor: pointer;
  font-size: 16px;
  border: 0;
  width: 100%;
  height: 50px;
}

textarea {
  width: 100%;
  padding-left: 6%;
  padding-right: 10%;
  height: 100%;
  resize: none;
  outline: none;
  background-color: transparent;
  border: none;
  color: white;
  margin-bottom: 10px;
}

textarea::placeholder {
  color: rgba(255, 255, 255, 0.384);
}
</style>
