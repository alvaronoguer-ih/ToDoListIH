<template>
  <div v-if="tasks.length">
    <div class="resume-zone">
      <div class="task-to-do-resume">
        <h3>To-Do</h3>
        <span>{{ taskToDo(this.tasks) }}</span>
      </div>
      <div class="task-done-resume">
        <h3>Done</h3>
        {{ taskDone(this.tasks) }}
      </div>
      <div class="task-overdue-resume">
        <h3>Overdue</h3>
        {{ taskOverdue(this.tasks) }}
      </div>
    </div>
  </div>
  <div class="resume-zone" v-else>
    <h3>Create a task to start</h3>
  </div>
</template>

<script>
import { mapState } from 'pinia';
import taskStore from '@/store/task';

export default {
  name: 'ResumeTasks',
  computed: {
    ...mapState(taskStore, ['tasks']),
  },
  data() {
    return {
      today: new Date().toISOString().substr(0, 10),
    };
  },
  methods: {
    taskToDo(totTask) {
      const numberOfTask = totTask.filter((task) => task.is_complete === false);
      return numberOfTask.length;
    },
    taskDone(totTask) {
      const numberOfTask = totTask.filter((task) => task.is_complete === true);
      return numberOfTask.length;
    },

    taskOverdue(totTask) {
      const numberOfTask = totTask.filter(
        (task) => task.deadline < this.today && task.is_complete === false,
      );
      console.log('Hola', numberOfTask);
      return numberOfTask.length;
    },
  },
};
</script>

<style>
.resume-zone {
  padding: 1rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: #b56576;
  border-radius: 15px;
  color: white;
  font-family: 'DM Serif Display', serif;
}

span {
  transition: --num 1s;
}

.task-to-do-resume,
.task-done-resume,
.task-overdue-resume {
  font-size: 1.8em;
}
</style>
