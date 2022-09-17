// /store/task.js
/* eslint-disable */
import { defineStore } from 'pinia';
import supabase from '../supabase/index';

export default defineStore('tasks', {
  state: () => ({
    tasks: [],
  }),
  actions: {
    async fetchTasks() {
      const { data: tasks, error } = await supabase
        .from('tasks')
        .select('*')
        .order('id', { ascending: false });
      if (error) throw error;
      this.tasks = tasks;
    },
    async insertTask(newTitle, userId, newStatus) {
      const { error } = await supabase
        .from('tasks')
        .insert([{ title: newTitle, user_id: userId, is_complete: newStatus }]);
      if (error) throw error;
      this.fetchTasks();
    },
    async deleteTask(taskId) {
      const { error } = await supabase.from('tasks').delete().match({ id: taskId });
      if (error) throw error;
      this.tasks.splice(
        this.tasks.findIndex((task) => task.id === taskId),
        1
      );
    },

    async editStatus(newStatus, taskID) {
      const { error } = await supabase
        .from('tasks')
        .update({ is_complete: newStatus })
        .match({ id: taskID });
      if (error) throw error;
      this.fetchTasks();
    },

    async editTitle(newTitle, taskID) {
      const { error } = await supabase
        .from('tasks')
        .update({ title: newTitle })
        .match({ id: taskID });
      if (error) throw error;
    },
  },
});
