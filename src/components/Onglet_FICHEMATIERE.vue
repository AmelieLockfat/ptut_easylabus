<script setup>
  import { ref } from "vue";
  import FICHEMATIEREnonmodifiable from "./FICHEMATIEREnonmodifiable.vue"
  import FICHEMATIEREmodifiable from "./FICHEMATIEREmodifiable.vue"

  defineProps(["MAT"]);

  let modeEDIT = ref(false)

  const emit = defineEmits(["choixMAT"]);
</script>

<template>
  <FICHEMATIEREmodifiable :MAT="MAT" @finEdit="modeEDIT=false" v-if="modeEDIT"/>
  <FICHEMATIEREnonmodifiable :MAT="MAT" @debutEdit="modeEDIT=true" v-else/>
</template>

<style scoped>
  #fiche {
    position: absolute; top: 150px; left:250px;
    background-color: white; min-height: 1131px; width: 800px;
  }
</style>