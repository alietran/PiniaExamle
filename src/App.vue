<template>
  <div>
    <main>
      <header>
        <img src="./assets/vue.svg" alt="vue" />
        <h1>VUEJS</h1>
      </header>

      <!-- Form iput -->
      <div style="display: flex; margin-bottom: 10px">
        <TaskForm />
      </div>

      <!-- Loading -->
      <div class="loading" v-if="loading">Loading task</div>
      <!-- Nav -->

      <nav class="filter">
        <button @click="filter = 'all'">All</button>
        <button @click="filter = 'favs'">Favs</button>
      </nav>
      <!-- Task List -->

      <div class="task-list" v-if="filter === 'all'">
        <p>All task ({{ totalCount }})</p>
        <div v-for="task in tasks">
          <TaskDetail :taskItem="task" />
          <!-- <p>{{ task.title }}</p> -->
        </div>
      </div>

      <div class="task-list" v-if="filter === 'favs'">
        <p>Favorite task ({{ favCount }})</p>
        <div v-for="task in favs">
          <TaskDetail :taskItem="task" />
          <!-- <p>{{ task.title }}</p> -->
        </div>
      </div>

      <button @click="$reset">reset state</button>
    </main>
  </div>
</template>

<script>
import { ref } from "vue";
import { useTaskStore } from "./stores/TaskStore";
import TaskDetail from "./components/TaskDetail.vue";
import TaskForm from "./components/TaskForm.vue";
import { storeToRefs } from "pinia";
export default {
  components: {
    TaskDetail,
    TaskForm,
  },
  setup() {
    const taskStoreInfo = useTaskStore();
    const { tasks, loading, favs, totalCount, favCount } =
      storeToRefs(taskStoreInfo);
    const filter = ref("all");
    taskStoreInfo.getTasks();
    return {
      taskStoreInfo,
      filter,
      tasks,
      loading,
      favs,
      totalCount,
      favCount,
    };
  },
};
</script>
