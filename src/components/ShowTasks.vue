<template>
  <div v-if="tasks.length" class="card-area">
    <div class="card" v-for="task in tasks" :key="task.id" :id="task.id">
      <div class="card-body">
        <div class="title-area">
          <textarea
            maxlength="60"
            aria-label="title"
            v-model="task.title"
            class="card-title align-middle"
            @change="handleEditTitle(task.title, task.id)"
          ></textarea>
        </div>
        <div class="task-status">
          <input
            type="button"
            class="bton-status"
            :value="task.is_complete ? '🎉 Done' : 'To-Do'"
            :style="task.is_complete ? 'background-color: #2a9d8f' : 'background-color: #e63946'"
            @click="handleEditStatus(task.is_complete, task.id)"
          />
        </div>
        <input
          type="button"
          @click="handleDeleteTask(task.id)"
          value="Remove Task"
          class="btn-remove"
        />
      </div>
    </div>
  </div>
  <div v-else>
    <p>You have not created any task yet.</p>
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
    ...mapActions(taskStore, ['deleteTask', 'editStatus', 'editTitle', 'fetchTasks']),

    handleDeleteTask(taskId) {
      try {
        this.deleteTask(taskId);
        alert('La tarea se ha eliminado correctamente');
      } catch (error) {
        alert('Error: ', error.message);
      }
    },

    handleEditStatus(task, taskID) {
      try {
        this.editStatus(!task, taskID);
      } catch (error) {
        alert('Error: ', error.message);
      }
    },

    handleEditTitle(title, taskID) {
      console.log(title, taskID);
      if (title.length !== 0) {
        this.editTitle(title, taskID);
      } else {
        alert('No puedes dejar la tarea vacia');
        this.fetchTasks();
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

.title-area {
  background-color: #dbdbdb;
  border-radius: 10px 10px 0px 0px;
  height: 10vh;
}

.bton-status {
  border: none;
  width: 50%;
  height: 4vh;
  border-radius: 0px 0px 0px 10px;
  color: white;
}

.btn-remove {
  border: none;
  background-color: black;
  width: 50%;
  height: 4vh;
  border-radius: 0px 0px 10px 0px;
  color: white;
}

.checkbox {
  display: grid;
  grid-template-columns: 1em auto;
  gap: 0.5em;
}

.card-area {
  display: flex;
  flex-wrap: wrap;
  padding-top: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

textarea {
  width: 100%;
  padding-left: 10%;
  padding-right: 10%;
  height: 100%;
  resize: none;
  outline: none;
  border-radius: 19px;
}

textarea:focus {
  border: none;
}

.card {
  margin-top: 20px;
  margin: 1%;
  min-width: 47%;
  border-radius: 10px;
  border: none;
}

.card-body {
  padding: 0;
}

.card-title {
  border: 0;
  text-align: left;
  background-color: transparent;
  padding-top: 10px;
}

.task-status {
  display: inline;
}

@media (max-width: 600px) {
  .card {
    width: 100%;
  }
}
</style>
