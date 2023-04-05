<script setup>
  import { ref } from "vue";

  import PERSONNE from "./PERSONNE";

  import Entete from "./components/Entete.vue";
  import Onglet_FICHEMATIERE from "./components/Onglet_FICHEMATIERE.vue";
  import Onglet_FICHEUE from "./components/Onglet_FICHEUE.vue";
  import Onglet_UE from "./components/Onglet_UE.vue";
  import Onglet_NIVEAU from "./components/Onglet_NIVEAU.vue";
  import Onglet_EDITCOMPTE from "./components/Onglet_EDITCOMPTE.vue";
  import Onglet_IDENTIFICATION from "./components/Onglet_IDENTIFICATION.vue";

  let nivChoisie = ref(false)
  let idNiv = ref("")
  let intNiv = ref("")
  
  let ueChoisie = ref(false)
  let intUE = ref("")
  let codUE = ref("")

  let connecte = ref(false)
  let utilisateur = ref(new PERSONNE())

  let editC = ref(false)
  let ePerso = ref(false)
  
  let matChoisie = ref(false)
  let intMat = ref("")
  let codMat = ref("")

  function handlerSub (invite,ident,mdp){
    if (!invite) {
      /*const fetchOptions = { method: "GET" };
      fetch(url, fetchOptions)
        .then((response) => {
          return response.json();
        })
        .then((dataJSON) => {*/
          let dataJSON = {identifiant:"acharron",motdepasse:"mdpacharron",prenompers:"Arnaud",nompers:"Charron",numtel:"0698765432",email:"arnaud.charron@univ-jfc.fr",coordprivee:true};
          utilisateur = new PERSONNE (dataJSON.identifiant, dataJSON.motdepasse, dataJSON.prenompers, dataJSON.nompers, dataJSON.email, dataJSON.numtel, dataJSON.coordprivee);
      /*  })
        .catch((error) => console.log(error));*/
    }
    connecte.value = true;
  }

  function handlerChoixNiv (id,intitule) {
    nivChoisie=true;
    idNiv.value=id;
    intNiv.value=intitule;
  }

  function handlerChoixUE (codeUE,intituleUE) {
    ueChoisie=true;
    codUE.value=codeUE;
    intUE.value=intituleUE;
  }

  function handlerChoixMAT (codeMAT,intituleMAT) {
    matChoisie=true;
    codMat.value=codeMAT;
    intMat.value=intituleMAT;
  }

  function handlerRetour (retourA) {
    if (retourA=="NIV"){
      nivChoisie=false;
      intNiv.value="";
    }
    if (retourA=="UE" || retourA=="NIV"){
      ueChoisie=false;
      intUE.value="";
      codUE.value="";
    }
    if (retourA=="MAT" || retourA=="UE" || retourA=="NIV"){
      matChoisie=false;
      intMat.value="";
      codMat.value="";
    }
    if (retourA=="CONNECT") {
      connecte.value = false;
    }
  }

  function handlerEditCompte (comptPerso) {
    editC.value=!editC.value;
    ePerso.value=comptPerso;
    connecte.value=!connecte.value;
  }
</script>

<template>
  <Onglet_FICHEMATIERE :codeMAT="codMat" v-if="matChoisie && connecte"/>
  <Onglet_FICHEUE :codeUE="codUE" @choixMAT="handlerChoixMAT" v-else-if="ueChoisie && connecte"/>
  <Onglet_UE @choixUE="handlerChoixUE" :Niveau="idNiv" v-else-if="nivChoisie && connecte"/>
  <Onglet_NIVEAU @choixNiv="handlerChoixNiv" v-else-if="connecte"/>
  <Entete
    :nom="utilisateur.nom"
    :prenom="utilisateur.prenom"
    :NIVchoisi="intNiv"
    :UEchoisi="intUE"
    :MATchoisi="intMat"
    @retour="handlerRetour"
    @editCompte="handlerEditCompte"
    v-if="connecte"
  />
  <Onglet_IDENTIFICATION @sub="handlerSub" v-else-if="editC==false"/>
  <Onglet_EDITCOMPTE :Utilisateur="utilisateur" :editPerso="ePerso" v-else/>
  
</template>

<style>
</style>