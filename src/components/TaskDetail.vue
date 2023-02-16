<template>
  <div class="task">
    <h3>{{ taskItem.title }}</h3>
    <div class="icons">
      <i class="material-icons" @click="taskStore.delTask(taskItem.id)"> delete </i>
      <i class="material-icons" @click="taskStore.toggleFav(taskItem.id)" :class="{active: taskItem.isFav}"> favorite </i>
    </div>
  </div>
</template>

<script>
import { useTaskStore } from '../stores/TaskStore';

export default {
  props: ["taskItem"],
  setup(){
    const taskStore = useTaskStore()
    return { taskStore }
  }
};
</script>

<style lang="scss" scoped></style>
