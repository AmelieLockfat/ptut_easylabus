<script setup>
  import { initCustomFormatter, ref } from "vue";
  import Entete from "./components/Entete.vue";
  import Onglet_FICHEMATIERE from "./components/Onglet_FICHEMATIERE.vue";
  import Onglet_FICHEUE from "./components/Onglet_FICHEUE.vue";
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
  
  let matChoisie = ref(false)
  let intMat = ref("")

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

  function handlerChoixMAT (intitule) {
    matChoisie=true;
    intMat.value=intitule;
  }

  function handlerRetour (retourA) {
    if (retourA=="NIV"){
      nivChoisie=false;
      intNiv.value="";
    }
    if (retourA=="UE" || retourA=="NIV"){
      ueChoisie=false;
      intUE.value="";
    }
    if (retourA=="MAT" || retourA=="UE" || retourA=="NIV"){
      matChoisie=false;
      intMat.value="";
    }
  }
</script>

<template>
  <Onglet_FICHEMATIERE :MAT="intMat" v-if="matChoisie"/>
  <Onglet_FICHEUE :UE="intUE" @choixMAT="handlerChoixMAT" v-else-if="ueChoisie"/>
  <Onglet_UE @choixUE="handlerChoixUE" :Niveau="intNiv" v-else-if="nivChoisie"/>
  <Onglet_NIVEAU @choixNiv="handlerChoixNiv" v-else-if="connecte"/>
  <Entete
    :nom="nom"
    :prenom="prenom"
    :NIVchoisi="intNiv"
    :UEchoisi="intUE"
    :MATchoisi="intMat"
    v-if="connecte"
    @retour="handlerRetour"
  />
  <Onglet_IDENTIFICATION @sub="handlerSub" v-else/>
  
</template>

<style>
</style>