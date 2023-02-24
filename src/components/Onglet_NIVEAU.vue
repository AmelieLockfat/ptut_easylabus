<script setup>
  import Case from "./Case.vue";
  import { reactive } from "vue";

  const emit = defineEmits(["choixNiv"]);
  
  let Niveaux = reactive([]);

  Niveaux.push({nom:"FIE1",
                estE:true})
  Niveaux.push({nom:"FIE2",
                estE:true})
  Niveaux.push({nom:"FIE3",
                estE:true})
  Niveaux.push({nom:"FIE4",
                estE:true})
  Niveaux.push({nom:"FIE5",
                estE:true})
  Niveaux.push({nom:"FIA3",
                estE:false})
  Niveaux.push({nom:"FIA4",
                estE:false})
  Niveaux.push({nom:"FIA5",
                estE:false})
  
  function emitterChoixNiv (intitule){
    emit("choixNiv",intitule);
  }
</script>

<template>
  <Case
    v-for="(niveau) of Niveaux"
    :intitule="niveau.nom"
    :bleu="niveau.estE"
    @clickc="emitterChoixNiv"
  />
</template>

<style scoped>
</style>