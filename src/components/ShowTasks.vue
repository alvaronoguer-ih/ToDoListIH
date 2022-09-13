<template>
  <table class="table">
    <tr class="title">
      <th>Task</th>
      <th>Status</th>
      <th>Actions</th>
    </tr>
    <tr v-for="task in tasks" :key="tasks.id">
      <td>
        <input
          type="text"
          class="title"
          v-model="task.title"
          :id="task.id"
          @change="handleEditTitle(task.title, task.id)"
        />
      </td>
      <td>
        <input
          @click="handleEditStatus(task.is_complete, task.id)"
          type="checkbox"
          v-model="task.is_complete"
          v-bind:id="task.is_complete"
        />
      </td>
      <td><button @click="handleDeleteTask(task.id)">Remove</button></td>
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
    ...mapActions(taskStore, ["deleteTask", "editStatus", "editTitle"]),

    handleDeleteTask(taskId) {
      try {
        this.deleteTask(taskId);
      } catch (error) {
        alert("Error: ", error.message);
      }
    },

    handleEditStatus(task, taskID) {
      console.log(task, taskID);
      this.editStatus(!task, taskID);
    },

    handleEditTitle(title, taskID) {
      console.log(title, taskID);
      if (title.length != 0) {
        this.editTitle(title, taskID);
      } else {
        alert("No puedes dejar la tarea vacia");
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

<style>
body {
  font-family: Arial, Helvetica, sans-serif;
  background-color: aliceblue;
}

.img-profile {
  width: 70px;
}

.trofeo {
  width: 50px;
}

.title {
  border: 0px;
  text-align: center;
  width: 100%;
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
  background-color: white;
}

.title {
  font-weight: bold;
  line-height: 2em;
  font-size: 1em;
}

.picture {
  width: min-content;
}

.img-space {
  width: 20%;
}
</style>
