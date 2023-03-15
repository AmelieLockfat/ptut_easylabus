<script setup>
  import { ref } from "vue";
  import FICHEUEnonmodifiable from "./FICHEUEnonmodifiable.vue"
  import FICHEUEmodifiable from "./FICHEUEmodifiable.vue"

  defineProps(["UE"]);

  let modeEDIT = ref(false)

  const emit = defineEmits(["choixMAT"]);

  function handlerChoixMAT (intituleMat){
    emit("choixMAT",intituleMat);
  }
</script>

<template>
  <FICHEUEmodifiable :UE="UE" @finEdit="modeEDIT=false" v-if="modeEDIT"/>
  <FICHEUEnonmodifiable :UE="UE" @debutEdit="modeEDIT=true" @choixMAT="handlerChoixMAT" v-else/>
</template>

<style scoped>
</style>