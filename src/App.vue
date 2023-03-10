<script setup>
  import { ref } from "vue";
  import Onglet_UE from "./components/Onglet_UE.vue";
  import Onglet_NIVEAU from "./components/Onglet_NIVEAU.vue";
  import Onglet_IDENTIFICATION from "./components/Onglet_IDENTIFICATION.vue";

  let nivChoisie = ref(false)
  let intNiv = ref("")

  let connecte = ref(false)
  let identifiant = ref("")
  let motDePasse = ref("")

  function handlerSub (invite,ident,mdp){
    if (invite){

    }
    else {
      identifiant.value = ident;
      motDePasse.value = mdp;
    }
    connecte.value = true;
  }

  function handlerChoixNiv (intitule) {
    nivChoisie=true;
    intNiv.value=intitule;
  }
</script>

<template>
  <Onglet_UE v-if="nivChoisie&&connecte"/>
  <Onglet_NIVEAU @choixNiv="handlerChoixNiv" v-else-if="connecte"/>
  <Onglet_IDENTIFICATION @sub="handlerSub" v-else/>
</template>

<style>
</style>