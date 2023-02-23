<script setup>
  defineProps(["intitule"]);
  defineEmits(["click"]);
</script>

<template>
  <div>
    {{ intitule }}
  </div>
</template>

<style scoped>
div {
    display: inline-block; height: 100px; width: 150px;
    border-color: rgb(3, 155, 229); border-style: solid;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif; color: rgb(3, 155, 229);
}
div:hover {
    border-color: rgb(124, 124, 124); background-color: rgb(124, 124, 124); color: rgb(255, 255, 255);
}
</style>