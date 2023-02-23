<script setup>
  import UE from "./components/UE.vue";
  import { reactive } from "vue";
  
  let UEs = reactive([]);

  UEs.push("Base de données")
  UEs.push("Génie logiciel")
</script>

<template>
  <UE
    v-for="(UE) of UEs"
    :intitule="UE"
  />
  <h3>Hello world !!</h3>
</template>

<style>
</style>