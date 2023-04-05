<script setup>
  import { ref , onMounted } from "vue";

  import UEclass from "../UEclass";
  import PERSONNE from "../PERSONNE";

  import FICHEUEnonmodifiable from "./FICHEUEnonmodifiable.vue"
  import FICHEUEmodifiable from "./FICHEUEmodifiable.vue"

  const url = "https://backendeasylabus.azurewebsites.net/api";

  const props = defineProps({codeUE: String});

  let modeEDIT = ref(false);
  let UE = ref(new UEclass());
  let Resp = ref(new PERSONNE());

  const emit = defineEmits(["choixMAT"]);

  function getAll(codeUE) {
    const fetchOptions = { method: "GET" };
    fetch(url+"/ues/Fiche?codeue="+codeUE, fetchOptions)
      .then((response) => {
        return response.json();
      })
      .then((dataJSON) => {
        UE.value = new UEclass(dataJSON.codeue, dataJSON.intituleue, dataJSON.creditsects, dataJSON.intitulediplome, dataJSON.nomorientation, dataJSON.intituleniveau, dataJSON.numsemestre, dataJSON.ordreue, dataJSON.motcles, dataJSON.competenses, dataJSON.heurecm, dataJSON.heuretd, dataJSON.heuretp, dataJSON.volumtravailperso, dataJSON.volumprojet, dataJSON.volumstage, dataJSON.prerequis, dataJSON.modalitescontrole, dataJSON.bibliographiedebase);
        getResp(UE.value.intituleniveau);
      })
      .catch((error) => console.log(error));
  }

  function getResp(intituleniveau) {
    const fetchOptions = { method: "GET" };
    fetch(url+"/niveaus/Responsable?intitule="+intituleniveau, fetchOptions)
      .then((response) => {
        return response.json();
      })
      .then((dataJSON) => {
        Resp.value = new PERSONNE(dataJSON.identifiant, null, dataJSON.prenompers, dataJSON.nompers, null, null, null);
      })
      .catch((error) => console.log(error));
  }

  onMounted(() => {
    getAll(props.codeUE);
  });

  function handlerChoixMAT (codeMAT,intituleMAT){
    emit("choixMAT",codeMAT,intituleMAT);
  }
</script>

<template>
  <FICHEUEmodifiable :codeUE="props.codeUE" :UE="UE" :Responsable="Resp" @finEdit="modeEDIT=false" v-if="modeEDIT"/>
  <FICHEUEnonmodifiable :codeUE="props.codeUE" :UE="UE" :Responsable="Resp" @debutEdit="modeEDIT=true" @choixMAT="handlerChoixMAT" v-else/>
</template>

<style scoped>
</style>