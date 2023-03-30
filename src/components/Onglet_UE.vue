<script setup>
  import { reactive } from "vue";
  import { onMounted } from "vue";
  import { ref } from "vue";

  import SEMESTRE from "../SEMESTRE";
  import PETITUE from "../PETITUE";

  import CaseUE from "./CaseUE.vue";

  const props = defineProps({Niveau: String});

  const emit = defineEmits(["choixUE"]);
  
  let Semestres = [];
  let numSem1 = ref("");
  let numSem2 = ref("");
  let UE1s = reactive([]);
  let UE2s = reactive([]);

  function getAll (intNiv) {
    getSemestres(intNiv);
    if (Semestres[0].num>Semestres[1].num) {
      Semestres.reverse();
    }
    numSem1.value = "Semestre "+Semestres[0].num;
    numSem2.value = "Semestre "+Semestres[1].num;
    getUE1s(Semestres[0].id);
    getUE2s(Semestres[1].id);
  }

  function getSemestres(intNiv) {
    /*const fetchOptions = { method: "GET" };
    fetch(url, fetchOptions)
      .then((response) => {
        return response.json();
      })
      .then((dataJSON) => {*/
        let dataJSON = [{idsemestre:1, numsemestre:5},{idsemestre:2, numsemestre:6}];
        Semestres.splice(0, Semestres.length);
        dataJSON.forEach((v) =>
          Semestres.push(new SEMESTRE(v.idsemestre,v.numsemestre))
        );
    /*  })
      .catch((error) => console.log(error));*/
  }

  function getUE1s(idSem) {
    /*const fetchOptions = { method: "GET" };
    fetch(url, fetchOptions)
      .then((response) => {
        return response.json();
      })
      .then((dataJSON) => {*/
        let dataJSON = [{codeue:"codeBDD", intituleue:"Base de données"},{codeue:"codeGL", intituleue:"Génie logiciel"},{codeue:"codeA1", intituleue:"Anglais"},{codeue:"codeUISIS", intituleue:"Urbanisation et interopérabilité des Systèmes d’informations de santé"}];
        UE1s.splice(0, Semestres.length);
        dataJSON.forEach((v) =>
          UE1s.push(new PETITUE(v.codeue, v.intituleue))
        );
    /*  })
      .catch((error) => console.log(error));*/
  }

  function getUE2s(idSem) {
    /*const fetchOptions = { method: "GET" };
    fetch(url, fetchOptions)
      .then((response) => {
        return response.json();
      })
      .then((dataJSON) => {*/
        let dataJSON = [{codeue:"codeTW", intituleue:"Technologie Web"},{codeue:"codeA2", intituleue:"Anglais"}];
        UE2s.splice(0, Semestres.length);
        dataJSON.forEach((v) =>
          UE2s.push(new PETITUE(v.codeue, v.intituleue))
        );
    /*  })
      .catch((error) => console.log(error));*/
  }

  onMounted(() => {
    getAll(props.Niveau);
  });
  
  function emitterChoixUE (UE){
    emit("choixUE",UE.code,UE.intitule);
  }
</script>

<template>
  <div id="sem1" class="sem">
    <p>{{ numSem1 }}</p>
    <CaseUE
      v-for="(ue) of UE1s"
      :ue="ue"
      @clickc="emitterChoixUE"
    />
  </div>
  <div id="sem2" class="sem">
    <p>{{ numSem2 }}</p>
    <CaseUE
      v-for="(ue) of UE2s"
      :ue="ue"
      @clickc="emitterChoixUE"
    />
  </div>
</template>

<style scoped>
  div.sem {
    width: 780px;
    border-left-style: solid; border-left-color: rgb(255, 129, 131); border-left-width: 5px;
    position:relative;
    left:240px;
    top : 150px;
  }
  div.sem p {
    text-transform: uppercase;
    font-size: 40px; color: rgb(255, 129, 131); font-family: "Arial Narrow","Arial";
    width: 237px; height: 40px; padding-left: 13px;
    border-top-style: solid; border-top-color: rgb(255, 129, 131); border-top-width: 5px;
    border-left-style: solid; border-left-color: rgb(255, 129, 131); border-left-width: 5px;
    position: relative; bottom: 30px; right: 5px;
  }

  .case {
    position: relative; bottom: 17px;
  }

  #sem2 {
    position: relative;
  }
</style>