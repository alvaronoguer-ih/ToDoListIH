<template>
  <select
    v-if="this.tasks"
    aria-label="selectingsort"
    class="sortbyselector"
    @change="onChange($event)"
    name="sortby"
  >
    <option aria-label="bydate" value="value1" selected>By date</option>
    <option aria-label="donefirst" value="value2">Done Tasks First</option>
    <option aria-label="todofirst" value="value3">To-Do Tasks First</option>
    <option aria-label="bydeadline" value="value4">By deadline</option>
  </select>

  <div v-if="tasks.length" class="card-area">
    <div class="card" v-for="task in tasks" :key="task.id" :id="task.id">
      <div class="card-body">
        <div
          class="deadlineShow-zone"
          :style="
            task.deadline < this.today && task.is_complete == false
              ? 'background-color: #b56576'
              : 'background-color: #184e77'
          "
        >
          <input
            id="descTaskShow"
            type="text"
            v-model="task.desc"
            aria-label="desc"
            maxlength="20"
            @change="handleEditDesc(task.desc, task.id)"
          />
          <div class="zona-deadline">
            <p v-show="task.deadline < this.today && task.is_complete == false">Overdue</p>

            <p
              class="daysToGo"
              v-show="
                task.is_complete == false &&
                task.deadline > this.today &&
                calculateDays(task.deadline) < 8
              "
            >
              {{ calculateDays(task.deadline) }} days left
            </p>
            <p class="daysToGo" v-show="task.is_complete == false && task.deadline == this.today">
              Today
            </p>
            <input
              id="deadlineTaskShow"
              type="date"
              v-model="task.deadline"
              aria-label="due date"
              :style="
                task.deadline < this.today && task.is_complete == false
                  ? 'background-color: #b56576'
                  : 'background-color: #184e77'
              "
              @change="handleEditDeadline(task.deadline, task.id)"
            />
          </div>
        </div>
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
            :style="task.is_complete ? 'background-color: #2a9d8f' : 'background-color: #30343f'"
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
  data() {
    return {
      today: new Date().toISOString().substr(0, 10),
    };
  },
  methods: {
    ...mapActions(taskStore, [
      'deleteTask',
      'editStatus',
      'editTitle',
      'fetchTasks',
      'editDeadline',
      'editDesc',
    ]),

    calculateDays(taskdate) {
      const date1 = new Date(taskdate);
      const date2 = new Date();
      const diffTime = Math.abs(date2 - date1);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays;
    },

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
        case 'value4':
          this.tasks = this.tasks.sort((a, b) => new Date(a.deadline) - new Date(b.deadline));
          break;

        default:
          alert('Sorry, your option is not available');
      }
    },
    handleEditDesc(desc, id) {
      try {
        this.editDesc(desc, id);
      } catch (error) {
        alert("You can't leave the description empty");
        this.fetchTasks();
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
        this.$swal({
          title: 'The task was deleted',
          toast: true,
          position: 'top-end',
          timer: 3000,
          showConfirmButton: false,
          timerProgressBar: true,
          icon: 'success',
        });
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
  background-color: #e5e5e5;
  height: 15vh;
}

.zona-deadline {
  display: flex;
}

p {
  text-align: left;
  color: white;
  margin-bottom: 0;
  margin-top: 0;
  padding-left: 6%;
  font-weight: bold;
}

.daysToGo {
  font-weight: normal;
  padding-bottom: 0;
}

.card:hover {
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}

.bton-status {
  border: none;
  width: 50%;
  height: 50px;
  border-radius: 0px 0px 0px 10px;
  color: white;
}

.btn-remove {
  border: none;
  background-color: #4f5d75;
  width: 50%;
  height: 50px;
  border-radius: 0px 0px 10px 0px;
  color: white;
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
  height: 100%;
  padding-left: 10%;
  padding-right: 10%;
  resize: none;
  outline: none;
  text-align: center;
}

textarea:focus {
  border: none;
}

.card {
  margin-top: 7%;
  min-width: 49%;
  border: none;
}

.no-tasks {
  padding: 0;
  padding-top: 5%;
  color: #4f5d75;
  text-align: center;
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
  background-color: #007ea7;
  border-radius: 0px;
  border-radius: 15px 15px 0px 0px;
}

#deadlineTaskShow {
  padding-left: 6%;
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  border: none;
  padding-bottom: 2%;
  background-color: transparent;
}

#deadlineTaskShow:focus {
  outline: none;
}

#descTaskShow {
  background-color: transparent;
  border: none;
  outline: none;
  color: white;
  font-size: 1.7em;
  width: 100%;
  padding-left: 6%;
  padding-top: 3%;
  font-weight: bold;
  padding-bottom: 3%;
}

@media (max-width: 800px) {
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
