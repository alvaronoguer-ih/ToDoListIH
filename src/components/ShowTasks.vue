<template v-if="ok">
  <div class="card-area">
    <div class="card" v-for="task in tasks" :key="task.id" :id="task.id">
      <div class="card-body">
        <input
          aria-label="title"
          v-model="task.title"
          class="card-title"
          @change="handleEditTitle(task.title, task.id)"
        />
        <br />
        <h4>Task Status</h4>
        <input
          aria-label="checkbox"
          class="checkbox"
          @click="handleEditStatus(task.is_complete, task.id)"
          type="checkbox"
          v-model="task.is_complete"
          v-bind:id="task.is_complete"
        /><span v-if="task.is_complete"> Done</span><br />
        <button @click="handleDeleteTask(task.id)" class="card-link">Remove Task</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'pinia';
import taskStore from '@/store/task';

export default {
  name: 'ShowTasks',
  computed: {
    ...mapState(taskStore, ['tasks']),
  },
  methods: {
    ...mapActions(taskStore, ['deleteTask', 'editStatus', 'editTitle']),

    changecolor(status, taskId) {
      if (!status) {
        document.getElementById(taskId).style.backgroundColor = 'green';
      } else {
        document.getElementById(taskId).style.backgroundColor = 'white';
      }
    },

    handleDeleteTask(taskId) {
      try {
        this.deleteTask(taskId);
        alert('La tarea se ha eliminado correctamente');
      } catch (error) {
        alert('Error: ', error.message);
      }
    },

    handleEditStatus(task, taskID) {
      console.log(task, taskID);
      this.editStatus(!task, taskID);
    },

    handleEditTitle(title, taskID) {
      console.log(title, taskID);
      if (title.length !== 0) {
        this.editTitle(title, taskID);
      } else {
        alert('No puedes dejar la tarea vacia');
      }
    },
  },
  watch: {
    tasks(state) {
      console.log(state);
    },
  },
};
</script>

<style scoped>
body {
  font-family: Arial, Helvetica, sans-serif;
  background-color: aliceblue;
}

.card-area {
  display: flex;
  flex-wrap: wrap;
  padding-top: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.card {
  margin-top: 20px;
  margin: 2%;
}

.card-title {
  border: 0;
  text-align: center;
  background-color: transparent;
}
</style>
