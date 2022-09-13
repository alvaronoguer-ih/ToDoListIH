// /store/task.js

import { defineStore } from "pinia";
import supabase from "../supabase/index";

export default defineStore("tasks", {
  state: () => ({
    tasks: [],
  }),
  actions: {
    async fetchTasks() {
      const { data: tasks, error } = await supabase
        .from("tasks")
        .select("*")
        .order("id", { ascending: false });
      if (error) throw error;
      this.tasks = tasks;
    },
    async insertTask(newTitle, userId, newStatus) {
      const { data, error } = await supabase
        .from("tasks")
        .insert([{ title: newTitle, user_id: userId, is_complete: newStatus }]);
      if (error) throw error;
    },
    async deleteTask(taskId) {
      const { data, error } = await supabase.from("tasks").delete().match({ id: taskId });
      if (error) throw error;
      this.tasks.splice(
        this.tasks.findIndex((task) => task.id === taskId),
        1
      );
    },

    async editStatus(newStatus, taskID) {
      const { data, error } = await supabase
        .from("tasks")
        .update({ is_complete: newStatus })
        .match({ id: taskID });
      if (error) throw error;
    },

    async editTitle(newTitle, taskID) {
      const { data, error } = await supabase
        .from("tasks")
        .update({ title: newTitle })
        .match({ id: taskID });
      if (error) throw error;
    },
  },
});
