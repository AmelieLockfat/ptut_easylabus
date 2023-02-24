<script setup>
  import { ref } from "vue";
  import Onglet_UE from "./components/Onglet_UE.vue";
  import Onglet_NIVEAU from "./components/Onglet_NIVEAU.vue";

  let nivChoisie = ref(false)
  let intNiv = ref("")

  function handlerChoixNiv (intitule) {
    nivChoisie=true;
    intNiv.value=intitule;
  }
</script>

<template>
  <p>{{ intNiv }}</p>
  <Onglet_UE v-if="nivChoisie"/>
  <Onglet_NIVEAU @choixNiv="handlerChoixNiv" v-else/>
</template>

<style>
</style>