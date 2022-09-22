<template>
  <div>
    <div class="resume-zone">
      <div class="task-to-do-resume">
        <p>To-Do</p>
        {{ taskToDo(this.tasks) }}
      </div>
      <div class="task-done-resume">
        <p>Done</p>
        {{ taskDone(this.tasks) }}
      </div>
      <div class="task-overdue-resume">
        <p>Overdue</p>
        {{ taskOverdue(this.tasks) }}
      </div>
    </div>
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
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: #30343f;
  border-radius: 15px;
  color: white;
}
</style>
