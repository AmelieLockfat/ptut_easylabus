<script setup>
  defineProps(["intitule","indexn","bleu"]);
  defineEmits(["clickc"]);
</script>

<template>
  <button id="butB" class="case" @click="$emit('clickc', indexn)" v-if="bleu">
    {{ intitule }}
  </button>
  <button id="butR" class="case" @click="$emit('clickc', indexn)" v-else>
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
    font-size:40px; font-weight: bold;
    font-family: "Roboto-Regular"; text-transform:uppercase;  color: rgb(255, 255, 255);
  }
  button#butB {
    border-color: rgb(3, 155, 229);
    
  }
  button#butR {
    border-color: rgb(255, 129, 131);
  }
  button#butB:hover {
    background-color: rgb(3, 155, 229); color: rgb(40, 53, 147);
  }
  button#butR:hover {
    background-color: rgb(255, 129, 131); color: rgb(40, 53, 147);
  }
</style>