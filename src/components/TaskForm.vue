<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" placeholder="I need to  ..." v-model="newTask" />
  </form>
</template>

<script>
import { ref } from "vue";
import { useTaskStore } from "../stores/TaskStore";

export default {
  setup() {
    const taskStoreInfo = useTaskStore();

    const newTask = ref("");

    const handleSubmit = () =>{
        if(newTask.value.length > 0){
            taskStoreInfo.addTask({
                title: newTask.value,
                isFav: false,
                id: Math.floor(Math.random() * 10000)
            })
            newTask.value = ''
        }
    }
  },
};
</script>
