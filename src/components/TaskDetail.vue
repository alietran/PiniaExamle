<template>
  <div class="task">
    <h3>{{ taskItem.title }}</h3>
    <div class="icons">
      <i class="material-icons"> delete </i>
      <i class="material-icons"> favorite </i>
    </div>
  </div>
</template>

<script>
export default {
  props: ["taskItem"],
};
</script>

<style lang="scss" scoped></style>
