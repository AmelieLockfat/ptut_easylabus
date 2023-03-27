<script setup>
  import { ref } from "vue";
  import { onMounted } from "vue";

  import UEclass from "../UEclass";

  import FICHEUEnonmodifiable from "./FICHEUEnonmodifiable.vue"
  import FICHEUEmodifiable from "./FICHEUEmodifiable.vue"

  const props = defineProps({codeUE: String});

  let modeEDIT = ref(false);
  let UE = ref(new UEclass());

  const emit = defineEmits(["choixMAT"]);

  function getUE(codeUE) {
    /*const fetchOptions = { method: "GET" };
    fetch(url, fetchOptions)
      .then((response) => {
        return response.json();
      })
      .then((dataJSON) => {*/
        let dataJSON = {codeue:"E1-1-SFPH",intituleue:"Sciences fondamentales et physiques",creditsects:10,intitulediplome:"Spécialité « informatique pour la santé »",nomorientation:"Premier cycle",intituleniveau:"FIE1",numsemestre:1,ordreue:1,motcles:"Bla bla bla bla bla",competenses:"Capacité à mobiliser les ressources d’un large champ de sciences fondamentales",heurecm:54.0,heuretd:74.0,heuretp:24.0,volumtravailperso:90.0,volumprojet:0.0,volumstage:0.0,prerequis:"Enseignement de spécialité de mathématiques terminale de lycée général Enseignement de spécialité de physiques terminale de lycée général",modalitescontrole:"Voir les Modalités de Contrôle des Connaissances.",bibliographiedebase:"Bli bli bli bli bli"}
        UE.value = new UEclass(dataJSON.codeue, dataJSON.intituleue, dataJSON.creditsects, dataJSON.intitulediplome, dataJSON.nomorientation, dataJSON.intituleniveau, dataJSON.numsemestre, dataJSON.ordreue, dataJSON.motcles, dataJSON.competenses, dataJSON.heurecm, dataJSON.heuretd, dataJSON.heuretp, dataJSON.volumtravailperso, dataJSON.volumprojet, dataJSON.volumstage, dataJSON.prerequis, dataJSON.modalitescontrole, dataJSON.bibliographiedebase);
    /*  })
      .catch((error) => console.log(error));*/
  }

  onMounted(() => {
    getUE(props.codeUE);
  });

  function handlerChoixMAT (codeMAT,intituleMAT){
    emit("choixMAT",codeMAT,intituleMAT);
  }
</script>

<template>
  <FICHEUEmodifiable :codeUE="props.codeUE" :UE="UE" @finEdit="modeEDIT=false" v-if="modeEDIT"/>
  <FICHEUEnonmodifiable :codeUE="props.codeUE" :UE="UE" @debutEdit="modeEDIT=true" @choixMAT="handlerChoixMAT" v-else/>
</template>

<style scoped>
</style>