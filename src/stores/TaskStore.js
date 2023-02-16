import { defineStore } from "pinia";

export const useTaskStore = defineStore("taskStore", {
  state: () => ({
    tasks: [],
    loading: false,
  }),
  getters: {
    favs() {
      return this.tasks.filter((t) => t.isFav);
    },
    favCount() {
      return this.tasks.reduce((p, c) => {
        return c.isFav ? p + 1 : p;
      }, 0);
    },
    totalCount: (state) => {
      return state.tasks.length;
    },
  },
  actions: {
    async getTasks() {
      this.loading = true;
      const result = await fetch(
        "https://63ecac8d32a08117239f8d6e.mockapi.io/tasks"
      );
      const data = await result.json();
      this.tasks = data;
      this.loading = false;
    },

    async addTask(task) {
      // this.tasks.push(task);
      const res = await fetch(
        "https://63ecac8d32a08117239f8d6e.mockapi.io/tasks",
        {
          method: "POST",
          body: JSON.stringify(task),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (res.error) {
        console.log(res.error);
      }
    },
    async delTask(id) {
      this.tasks = this.tasks.filter((item) => item.id !== id);

      const res = await fetch(
        "https://63ecac8d32a08117239f8d6e.mockapi.io/tasks/" + id,
        {
          method: "DELETE",
        }
      );

      if (res.error) {
        console.log(res.error);
      }
    },
    async toggleFav(id) {
      const task = this.tasks.find((t) => t.id === id);
      task.isFav = !task.isFav;

      const res = await fetch(
        "https://63ecac8d32a08117239f8d6e.mockapi.io/tasks/" + id,
        {
          method: "PUT",
          body: JSON.stringify({ isFav: task.isFav }),
          headers: { "Content-Type": "application/json" },
        }
      );

      if (res.error) {
        console.log(res.error);
      }
    },
  },
});
