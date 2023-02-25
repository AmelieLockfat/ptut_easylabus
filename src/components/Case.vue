<script setup>
  defineProps(["intitule","bleu"]);
  defineEmits(["clickc"]);
</script>

<template>
  <div id="divB" class="case" @click="$emit('clickc', intitule)" v-if="bleu">
    <p>{{ intitule }}</p>
  </div>
  <div id="divR" class="case" @click="$emit('clickc', intitule)" v-else>
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
    display: inline-block; height: 130px; width: 220px;
    border-style: solid; border-width: 10px;
    margin-bottom: 20px; margin-left: 10px; margin-right: 10px; margin-top: 10px; margin-bottom: 20px;
    text-align: center; font-size: 22px;
    font-family: "Roboto-Regular"; text-transform:uppercase;  color: rgb(255, 255, 255);
  }
  div#divB {
    border-color: rgb(3, 155, 229);
  }
  div#divR {
    border-color: rgb(255, 129, 131);
  }
  p {
    height: 130px; width: 220px;
    position: relative; bottom: 22px; right: 2px;
  }

  div#divB:hover {
    background-color: rgb(3, 155, 229); color: rgb(40, 53, 147);
  }
  div#divR:hover {
    background-color: rgb(255, 129, 131); color: rgb(40, 53, 147);
  }
</style>