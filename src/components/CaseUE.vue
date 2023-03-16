<script setup>
  defineProps(["intitule"]);
  defineEmits(["clickc"]);
</script>

<template>
  <button class="case" @click="$emit('clickc', intitule)">
    {{ intitule }}
  </button>
</template>

<style scoped>
  @font-face{
    font-family: 'Roboto-Regular';
    src: url('../assets/Roboto-Regular.ttf') format('truetype');
    src: url('../assets/Roboto-Regular.woff') format('woff');
    src: url('../assets/Roboto-Regular.woff2') format('woff2');
    }

  button {
    display: inline-block; height: 150px; width: 220px;
    border-style: solid; border-width: 10px;
    margin-bottom: 20px; margin-left: 10px; margin-right: 10px; margin-top: 10px; margin-bottom: 20px;
    font-size: 18px; text-transform: uppercase; font-weight: bold;
    font-family: "Roboto-Regular"; color: rgb(255, 255, 255);
    border-color: rgb(3, 155, 229);

  }

  button:hover {
    background-color: rgb(3, 155, 229); color: rgb(40, 53, 147);
  }
</style>