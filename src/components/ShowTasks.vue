<template>
  <div class="card" style="width: 18rem;" v-for="task in tasks" :key="tasks.id">
  <div class="card-body">
    <textarea v-model="task.title" class="card-title" @change="handleEditTitle(task.title, task.id)"></textarea> <br>
    <h4>Task Status</h4>
    <input
        class="checkbox"
        @click="handleEditStatus(task.is_complete, task.id)"
        type="checkbox"
        v-model="task.is_complete"
        v-bind:id="task.is_complete"
      /><br>
    <a @click="handleDeleteTask(task.id)" class="card-link">Remove Task</a>
  </div>
</div>

<!--

<div class="card-task-area">
    <div class="task-box" >
      <input
        class="title"
        v-model="task.title"
        :id="task.id"
        @change="handleEditTitle(task.title, task.id)"
      />
      <input
        class="checkbox"
        @click="handleEditStatus(task.is_complete, task.id)"
        type="checkbox"
        v-model="task.is_complete"
        v-bind:id="task.is_complete"
      />
      <button >Remove</button>
    </div>
  </div>
  -->
</template>

<script>
import { mapActions, mapState } from 'pinia'
import taskStore from '@/store/task'

export default {
  name: 'ShowTasks',
  computed: {
    ...mapState(taskStore, ['tasks'])
  },
  methods: {
    ...mapActions(taskStore, ['deleteTask', 'editStatus', 'editTitle']),

    handleDeleteTask(taskId) {
      try {
        this.deleteTask(taskId)
      } catch (error) {
        alert('Error: ', error.message)
      }
    },

    handleEditStatus(task, taskID) {
      console.log(task, taskID)
      this.editStatus(!task, taskID)
    },

    handleEditTitle(title, taskID) {
      console.log(title, taskID)
      if (title.length != 0) {
        this.editTitle(title, taskID)
      } else {
        alert('No puedes dejar la tarea vacia')
      }
    }
  },
  watch: {
    tasks(state) {
      console.log(state)
    }
  }
}
</script>

<style scoped>
body {
  font-family: Arial, Helvetica, sans-serif;
  background-color: aliceblue;
}

.card-title {
  border: 0;
}
</style>
