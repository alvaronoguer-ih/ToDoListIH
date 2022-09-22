<template>
  <div class="dashboard">
    <div class="your-tasks">
      <h1>Your Tasks</h1>
      <ShowTasks />
    </div>
    <div class="create-task">
      <ProfileInfo />
      <ResumeTasks />
      <CreateTask />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import taskStore from '@/store/task';
import userStore from '@/store/user';
import ProfileInfo from '@/components/ProfileInfo.vue';
import ResumeTasks from '@/components/ResumeTasks.vue';
import ShowTasks from '../components/ShowTasks.vue';
import CreateTask from '../components/CreateTask.vue';

export default {
  components: {
    ShowTasks,
    CreateTask,
    ProfileInfo,
    ResumeTasks,
  },
  name: 'DashboardPage',
  computed: {
    ...mapState(userStore, ['user']),
  },
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

<style scoped>
body {
  background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
}
.dashboard {
  padding-top: 50px;
  padding-bottom: 50px;
  display: flex;
  width: 90%;
  margin: 0 auto;
  flex-direction: row;
  align-items: center;
  align-items: flex-start;
  justify-content: space-around;
}

.your-tasks {
  width: 65%;
  border-radius: 19px;
  padding: 5%;
  background-color: white;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}

.your-tasks h1,
.create-task h1 {
  font-family: 'DM Serif Display', serif;
  color: #2c3e50;
}

.create-task {
  width: 30%;
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
}

@media (max-width: 800px) {
  .dashboard {
    width: 100%;
    margin: 0 auto;
    flex-direction: column-reverse;
  }

  .your-tasks {
    margin: 0 auto;
    margin-top: 3%;
    width: 90%;
  }

  .create-task {
    margin: 0 auto;
    width: 90%;
    position: inherit;
  }
}
</style>
