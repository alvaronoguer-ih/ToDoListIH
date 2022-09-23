<template>
  <div class="create-task-container">
    <input
      type="text"
      id="descTaskCreate"
      v-model="desc"
      aria-label="desc"
      placeholder="Title your task"
      maxlength="20"
    />
    <div class="deadline-area">
      <input id="deadlineTask" type="date" v-model="due_date" aria-label="due date" />
    </div>
    <textarea
      id="input-task-c"
      aria-label="title"
      v-model="title"
      required
      placeholder="Plan a task"
      maxlength="60"
    >
    </textarea>

    <button @click="handleNewTask">Create task</button>
  </div>
</template>

<script>
import { mapActions, mapState } from 'pinia';
import taskStore from '@/store/task';
import userStore from '@/store/user';

export default {
  name: 'CreateTask',
  computed: {
    ...mapState(userStore, ['user']),
  },
  data() {
    return {
      title: '',
      isComplete: false,
    };
  },
  methods: {
    ...mapActions(taskStore, ['insertTask', 'fetchTasks']),
    async handleNewTask() {
      const taskData = {
        title: this.title,
        desc: this.desc,
        user_id: this.user.id,
        deadline: this.due_date,
        isComplete: false,
      };
      console.log(taskData);
      try {
        await this.insertTask(
          taskData.title,
          taskData.desc,
          taskData.user_id,
          taskData.isComplete,
          taskData.deadline,
        );
        document.getElementById('input-task-c').value = '';
        taskData.deadline = '';
        document.getElementById('descTaskCreate').value = '';
        this.$swal({
          title: 'The task was created',
          toast: true,
          position: 'top-end',
          timer: 3000,
          showConfirmButton: false,
          timerProgressBar: true,
          icon: 'success',
        });
      } catch (error) {
        this.$swal({
          title: "You can't leave the task empty",
          toast: true,
          position: 'top-end',
          timer: 3000,
          showConfirmButton: false,
          timerProgressBar: true,
          icon: 'warning',
        });
      }
    },
  },
};
</script>

<style scoped>
input {
  color-scheme: dark;
}

h1 {
  font-family: 'DM Serif Display', serif;
  color: white;
}

.create-task-container {
  color: white;
  background-color: #2c3e50;
  border-radius: 15px;
  border: none;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
}

.create-task-container h1 {
  font-size: 1.65rem;
  padding-top: 3%;
  padding-left: 6%;
  text-align: left;
  font-weight: lighter;
}

button {
  background: #f0ab5d;
  border-radius: 0px 0px 15px 15px;
  color: #ffffff;
  cursor: pointer;
  font-size: 16px;
  border: 0;
  width: 100%;
  height: 50px;
}

textarea {
  width: 100%;
  padding-left: 6%;
  padding-right: 10%;
  height: 15vh;
  resize: none;
  outline: none;
  background-color: transparent;
  border: none;
  color: white;
  margin-bottom: 10px;
}

textarea::placeholder,
#descTaskCreate::placeholder {
  color: rgba(255, 255, 255, 0.384);
}

.deadline-area {
  display: flex;
  padding-left: 6%;
  justify-content: flex-start;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  flex-direction: row;
  flex-wrap: nowrap;
}

#descTaskCreate {
  background-color: transparent;
  border: none;
  outline: none;
  color: white;
  font-size: 2em;
  width: 100%;
  padding-left: 6%;
  font-weight: bold;
  padding-top: 4%;
}

#deadlineTask {
  flex-direction: row-reverse;
  height: 100%;
  font-size: 1.2em;
  background-color: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.384);
  margin-bottom: 10px;
  padding-left: 0;
  outline: none;
}
</style>
