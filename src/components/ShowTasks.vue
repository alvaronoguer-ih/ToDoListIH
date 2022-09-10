<template>
  <table class="table">
    <tr class="title">
      <th>ID</th>
      <th>Task</th>
      <th>Status</th>
      <th>Actions</th>
    </tr>
    <tr v-for="task in tasks" :key="task.id">
      <td>{{ task.id }}</td>
      <td>{{ task.title }}</td>
      <td v-show="task.is_complete">Done</td>
      <td v-show="!task.is_complete">To-Do</td>
      <td><button>Edit</button><button @click="handleDeleteTask(task.id)">Remove</button></td>
    </tr>
  </table>
</template>

<script>
import { mapActions, mapState } from "pinia";
import taskStore from "@/store/task";

export default {
  name: "ShowTasks",
  computed: {
    ...mapState(taskStore, ["tasks"]),
  },
  methods: {
    ...mapActions(taskStore, ["deleteTask"]),

    handleDeleteTask(taskId) {
      this.deleteTask(taskId);
    },
  },
  watch: {
    tasks(state) {
      console.log(state);
    },
  },
};
</script>

<style>
body {
  font-family: Arial, Helvetica, sans-serif;
}

.img-profile {
  width: 70px;
}

.trofeo {
  width: 50px;
}

.btn-zone {
  width: 70%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
  padding-top: 4%;
  padding-bottom: 4%;
}

.table {
  width: 70%;
  margin: 0 auto;
  text-align: center;
}

.title {
  font-weight: bold;
  line-height: 3em;
  font-size: 1.2em;
}

.picture {
  width: min-content;
}

.img-space {
  width: 20%;
}
</style>
