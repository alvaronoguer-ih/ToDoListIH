<template>
  <select
    aria-label="selectingsort"
    class="sortbyselector"
    @change="onChange($event)"
    name="sortby"
  >
    <option aria-label="bydate" value="value1" selected>By date</option>
    <option aria-label="donefirst" value="value2">Done Tasks First</option>
    <option aria-label="todofirst" value="value3">To-Do Tasks First</option>
  </select>
  <div v-if="tasks.length" class="card-area">
    <div class="card" v-for="task in tasks" :key="task.id" :id="task.id">
      <div class="card-body">
        <div class="title-area">
          <div class="deadlineShow-zone">
            <input
              id="deadlineTaskShow"
              type="date"
              v-model="task.deadline"
              aria-label="due date"
              @change="handleEditDeadline(task.deadline, task.id)"
            />
          </div>
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
    <p class="no-tasks">You have not created any task yet.</p>
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
    ...mapActions(taskStore, [
      'deleteTask',
      'editStatus',
      'editTitle',
      'fetchTasks',
      'editDeadline',
    ]),

    onChange(event) {
      const selected = event.target.value;

      switch (selected) {
        case 'value1':
          this.fetchTasks();
          break;
        case 'value2':
          this.tasks = this.tasks.sort((a, b) => b.is_complete - a.is_complete);
          break;
        case 'value3':
          this.tasks = this.tasks.sort((a, b) => a.is_complete - b.is_complete);
          break;
        default:
          alert('Sorry, your option is not available');
      }
    },

    handleEditDeadline(deadline, id) {
      try {
        this.editDeadline(deadline, id);
      } catch (error) {
        alert('Error: ', error.message);
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
      try {
        this.editStatus(!task, taskID);
        const findTask = this.tasks.find((element) => element.id === taskID);
        findTask.is_complete = !task;
      } catch (error) {
        console.alert(error);
        alert('Error: ', error.message);
      }
    },

    handleEditTitle(title, taskID) {
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
  height: 20vh;
}

.card:hover {
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}

.bton-status {
  border: none;
  width: 50%;
  height: 6vh;
  border-radius: 0px 0px 0px 10px;
  color: white;
}

.btn-remove {
  border: none;
  background-color: black;
  width: 50%;
  height: 6vh;
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
  text-align: center;
}

textarea:focus {
  border: none;
}

.card {
  margin-top: 10%;
  margin: 1%;
  min-width: 47%;
  border-radius: 10px;
  border: none;
}

.no-tasks {
  padding-top: 5%;
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

.sortbyselector {
  border: none;
  border-bottom: solid black;
  background-color: transparent;
}

.sortbyselector:focus {
  outline: none;
}

input {
  color-scheme: dark;
}

.deadlineShow-zone {
  background-color: #797e84;
  width: fit-content;
  border-radius: 0px 0px 10px 10px;
  margin-left: 8%;
}

#deadlineTaskShow {
  padding-left: 3%;
  border-radius: 15px 0px 15px 0px;
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  border: none;
  padding-top: 2%;
  padding-bottom: 2%;
  background-color: transparent;
}

#deadlineTaskShow:focus {
  outline: none;
}

@media (max-width: 600px) {
  .card {
    width: 100%;
    margin-bottom: 3%;
  }
  .title-area {
    height: 15vh;
  }

  .bton-status,
  .btn-remove {
    height: 7vh;
  }
}
</style>
