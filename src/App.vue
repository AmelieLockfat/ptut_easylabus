<script setup>
  import Case from "./components/Case.vue";
  import { reactive } from "vue";
  
  let UEs = reactive([]);

  UEs.push("Base de données")
  UEs.push("Génie logiciel")
  UEs.push("Anglais")
  UEs.push("Urbanisation et interopérabilité des Systèmes d’informations de santé")
  
  function test (intitule){
    console.log("CLICK sur "+intitule)
  }
</script>

<template>
  <Case
    v-for="(ue) of UEs"
    :intitule="ue"
    @clickc="test"
  />
  <h3>Hello world !!</h3>
</template>

<style>
</style>