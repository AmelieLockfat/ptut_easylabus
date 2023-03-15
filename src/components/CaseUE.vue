<script setup>
  defineProps(["intitule"]);
  defineEmits(["clickc"]);
</script>

<template>
  <div class="case" @click="$emit('clickc', intitule)">
    <p>{{ intitule }}</p>
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
    display: inline-block; height: 150px; width: 220px;
    border-style: solid; border-width: 10px;
    margin-bottom: 20px; margin-left: 10px; margin-right: 10px; margin-top: 10px; margin-bottom: 20px;
    text-align: center; font-size: 18px; text-transform: uppercase;
    font-family: "Roboto-Regular"; color: rgb(255, 255, 255);
    border-color: rgb(3, 155, 229);

  }

  /*p {
    height: 130px; width: 220px;
    font-size:20px;
    margin: auto; 
        text-align: center;
  }*//*Qu'on mette ça ou non il n'y a pas de changement*/

  div:hover {
    background-color: rgb(3, 155, 229); color: rgb(40, 53, 147);
  }
</style>