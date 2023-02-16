<template>
  <div>
    <main>
      <header>
        <img src="./assets/vue.svg" alt="vue" />
        <h1>{{ taskStoreInfo.name }}</h1>
      </header>

      <!-- Nav -->

      <nav class="filter">
        <button @click="filter = 'all'">All</button>
        <button  @click="filter = 'favs'">Favs</button>
      </nav>
      <!-- Task List -->

      <div class="task-list" v-if="filter === 'all'">
        <p>All task ({{ taskStoreInfo.totalCount }})</p>
        <div v-for="task in taskStoreInfo.tasks">
          <TaskDetail :taskItem="task" />
          <!-- <p>{{ task.title }}</p> -->
        </div>
      </div>

      <div class="task-list" v-if="filter === 'favs'">
        <p>Favorite task ({{ taskStoreInfo.favCount }})</p>
        <div v-for="task in taskStoreInfo.favs">
          <TaskDetail :taskItem="task" />
          <!-- <p>{{ task.title }}</p> -->
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { ref } from "vue";
import { useTaskStore } from "./stores/TaskStore";
import TaskDetail from "./components/TaskDetail.vue";
export default {
  components: {
    TaskDetail,
  },
  setup() {
    const taskStoreInfo = useTaskStore();
    const filter = ref("all")
    return { taskStoreInfo,filter };
  },
};
</script>
