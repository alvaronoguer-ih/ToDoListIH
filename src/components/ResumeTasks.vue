<template>
  <div v-if="tasks.length !== taskDone(this.tasks)">
    <div class="resume-zone">
      <div class="task-today-resume" v-if="taskToday(this.tasks)">
        <h3>Today</h3>
        <span>{{ taskToday(this.tasks) }}</span>
      </div>
      <div class="task-to-do-resume" v-if="taskToDo(this.tasks)">
        <h3>To-Do</h3>
        <span>{{ taskToDo(this.tasks) }}</span>
      </div>
      <div class="task-done-resume" v-if="taskDone(this.tasks)">
        <h3>Done</h3>
        {{ taskDone(this.tasks) }}
      </div>
      <div class="task-overdue-resume" v-if="taskOverdue(this.tasks)">
        <h3>Overdue</h3>
        {{ taskOverdue(this.tasks) }}
      </div>
    </div>
  </div>
  <div class="resume-zone" v-else-if="taskDone(this.tasks) === tasks.length">
    <h3>Yeyyy! You have no pending tasks.</h3>
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
      return numberOfTask.length;
    },

    taskToday(totTask) {
      const numberOfTask = totTask.filter(
        (task) => task.deadline === this.today && task.is_complete === false,
      );
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
  background-color: #5f5def;
  border-radius: 15px;
  color: white;
  font-family: 'DM Serif Display', serif;
}

span {
  transition: --num 1s;
}

.task-to-do-resume,
.task-done-resume,
.task-overdue-resume,
.task-today-resume {
  font-size: 1.8em;
  user-select: none;
}
</style>
