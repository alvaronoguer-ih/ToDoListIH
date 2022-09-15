<template>
  <div class="dashboard">
    <div class="your-tasks">
      <h1>Your Tasks</h1>
      <ShowTasks />
    </div>
    <div class="create-task">
      <CreateTask />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'pinia';
import taskStore from '@/store/task';
import ShowTasks from '../components/ShowTasks.vue';
import CreateTask from '../components/CreateTask.vue';

export default {
  components: { ShowTasks, CreateTask },
  name: 'DashboardPage',
  methods: {
    ...mapActions(taskStore, ['fetchTasks']),
  },
  created() {
    try {
      this.fetchTasks();
    } catch (error) {
      console.error(error);
    }
  },
};
</script>

<style>
.dashboard {
  padding-top: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-items: flex-start;
  justify-content: space-around;
}

.your-tasks {
  width: 60%;
}

.create-task {
  width: 25%;
}
</style>
