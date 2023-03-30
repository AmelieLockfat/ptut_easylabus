<script setup>
  import { onMounted, ref } from "vue";

  import MATIERE from "../MATIERE";

  import FICHEMATIEREnonmodifiable from "./FICHEMATIEREnonmodifiable.vue"
  import FICHEMATIEREmodifiable from "./FICHEMATIEREmodifiable.vue"

  const props = defineProps({codeMAT: String});

  let modeEDIT = ref(false)
  let MAT = ref(new MATIERE());

  const emit = defineEmits(["choixMAT"]);

  function getMAT(codeMAT) {
    /*const fetchOptions = { method: "GET" };
    fetch(url, fetchOptions)
      .then((response) => {
        return response.json();
      })
      .then((dataJSON) => {*/
        let dataJSON = {codeens:"E1-1-SFPH-1",nomens:"Mathématiques Analyse 1",heurecm:12.0,heuretd:4.0,heuretp:0.0,heuretotalencadree:16.0,heuretravailperso:30.0,coefficient:0.4,modalitesevaluation:"Les Modalités et trucs",prerequis:"Prérequis et truc",planducours:"Description et plan du cours",codeue:"E1-1-SFPH",intituleue:"Sciences fondamentales et physiques",numsemestre:1}
        MAT.value = new MATIERE(dataJSON.codeens,dataJSON.nomens,dataJSON.heurecm,dataJSON.heuretd,dataJSON.heuretp,dataJSON.heuretotalencadree,dataJSON.heuretravailperso,dataJSON.coefficient,dataJSON.modalitesevaluation,dataJSON.prerequis,dataJSON.planducours,dataJSON.codeue,dataJSON.intituleue,dataJSON.numsemestre);
    /*  })
      .catch((error) => console.log(error));*/
  }

  onMounted(() => {
    getMAT(props.codeMAT);
  });
</script>

<template>
  <FICHEMATIEREmodifiable :codeMAT="props.codeMAT" :MAT="MAT" @finEdit="modeEDIT=false" v-if="modeEDIT"/>
  <FICHEMATIEREnonmodifiable :codeMAT="props.codeMAT" :MAT="MAT" @debutEdit="modeEDIT=true" v-else/>
</template>

<style scoped>
  #fiche {
    position: absolute; top: 150px; left:250px;
    background-color: white; min-height: 1131px; width: 800px;
  }
</style>