<script setup>
  import { ref } from "vue";
  import Entete from "./components/Entete.vue";
  import Onglet_UE from "./components/Onglet_UE.vue";
  import Onglet_NIVEAU from "./components/Onglet_NIVEAU.vue";
  import Onglet_IDENTIFICATION from "./components/Onglet_IDENTIFICATION.vue";

  let nivChoisie = ref(false)
  let intNiv = ref("")
  
  let ueChoisie = ref(false)
  let intUE = ref("")

  let connecte = ref(false)
  let prenom = ref("")
  let nom = ref("")

  function handlerSub (invite,ident,mdp){
    if (invite){

    }
    else {
      prenom.value = ident;
      nom.value = mdp;
    }
    connecte.value = true;
  }

  function handlerChoixNiv (intitule) {
    nivChoisie=true;
    intNiv.value=intitule;
  }

  function handlerChoixUE (intitule) {
    ueChoisie=true;
    intUE.value=intitule;
  }
</script>

<template>
  <Onglet_UE @choixUE="handlerChoixUE" v-if="nivChoisie&&connecte"/>
  <Onglet_NIVEAU @choixNiv="handlerChoixNiv" v-else-if="connecte"/>
  <Entete
    :nom="nom"
    :prenom="prenom"
    :NIVchoisi="intNiv"
    :UEchoisi="intUE"
    v-if="connecte"
  />
  <Onglet_IDENTIFICATION @sub="handlerSub" v-else/>
</template>

<style>
</style>