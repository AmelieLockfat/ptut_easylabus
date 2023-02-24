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
@font-face{
  font-family: 'Roboto-Regular';
  src: url('../assets/Roboto-Regular.ttf') format('truetype');
  src: url('../assets/Roboto-Regular.woff') format('woff');
  src: url('../assets/Roboto-Regular.woff2') format('woff2');
  }

div {
  display: inline-block; min-height: 130px; max-width: 300px; min-width: 220px;
  border-color: rgb(3, 155, 229); border-style: solid; border-width: 10px;
  font-family: "Roboto-Regular"; color: rgb(3, 155, 229); font-size: 14px; text-transform:uppercase;
  text-align: center; margin-bottom: 20px; margin-left: 10px; margin-right: 10px; margin-top: 10px; margin-bottom: 20px;
}
div:hover {
  border-color: rgb(60, 60, 60); background-color: rgb(60, 60, 60); color: rgb(255, 255, 255);
}
</style>