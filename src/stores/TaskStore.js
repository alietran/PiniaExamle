import { defineStore } from "pinia";

export const useTaskStore = defineStore("taskStore", {
  state: () => ({
    tasks: [
      { id: 1, title: " xin chào", isFav: true },
      { id: 2, title: " xin chào dsf", isFav: false },
      { id: 3, title: " xin chào sdgsd", isFav: true },
    ],
    name: "Yoshi",
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
    totalCount: (state)=>{
      return state.tasks.length
    }
  },
  actions:{
    addTask(task){
      this.tasks.push(task)
    }
  }
});
