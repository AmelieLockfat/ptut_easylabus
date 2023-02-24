<script setup>
  import Case from "./Case.vue";
  import { reactive } from "vue";
  
  let UEs = reactive([]);

  UEs.push("Base de données")
  UEs.push("Génie logiciel")
  UEs.push("Anglais")
  UEs.push("Urbanisation et interopérabilité des Systèmes d’informations de santé")
  
  function test (intitule){
    console.log("CLICK sur l'UE "+intitule)
  }
</script>

<template>
  <Case
    v-for="(ue) of UEs"
    :intitule="ue"
    :bleu="true"
    @clickc="test"
  />
</template>

<style scoped>
</style>