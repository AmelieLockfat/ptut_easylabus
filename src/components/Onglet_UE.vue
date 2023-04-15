<script setup>
  import { reactive } from "vue";
  import { onMounted } from "vue";
  import { ref } from "vue";

  import SEMESTRE from "../SEMESTRE";
  import PETITUE from "../PETITUE";

  import CaseUE from "./CaseUE.vue";
  import CaseUEmodifiable from "./CaseUEmodifiable.vue";

  const url = "https://backendeasylabus.azurewebsites.net/api";

  const props = defineProps({Niveau: String});

  const emit = defineEmits(["choixUE"]);
  
  let Semestres = reactive([]);
  let add1 = ref(false);
  let add2 = ref(false);
  let numSem1 = ref("");
  let numSem2 = ref("");
  let UE1s = reactive([]);
  let UE2s = reactive([]);

  function getAll(intNiv) {
    const fetchOptions = { method: "GET" };
    fetch(url+"/semestres/ByNiveau?intituleniveau="+intNiv, fetchOptions)
      .then((response) => {
        return response.json();
      })
      .then((dataJSON) => {
        Semestres.splice(0, Semestres.length);
        dataJSON.forEach((v) =>
          Semestres.push(new SEMESTRE(v.idsemestre,v.numsemestre))
        );
        if (Semestres[0].num>Semestres[1].num) {
          Semestres.reverse();
        }
        numSem1.value = "Semestre "+Semestres[0].num;
        numSem2.value = "Semestre "+Semestres[1].num;
        getUE1s(Semestres[0].id);
        getUE2s(Semestres[1].id);
      })
      .catch((error) => console.log(error));
  }

  function getUE1s(idSem) {
    const fetchOptions = { method: "GET" };
    fetch(url+"/ues/BySemestre?idsemestre="+idSem, fetchOptions)
      .then((response) => {
        return response.json();
      })
      .then((dataJSON) => {
        UE1s.splice(0, Semestres.length);
        dataJSON.forEach((v) =>
          UE1s.push(new PETITUE(v.codeue, v.intituleue))
        );
      })
      .catch((error) => console.log(error));
  }

  function getUE2s(idSem) {
    const fetchOptions = { method: "GET" };
    fetch(url+"/ues/BySemestre?idsemestre="+idSem, fetchOptions)
      .then((response) => {
        return response.json();
      })
      .then((dataJSON) => {
        UE2s.splice(0, Semestres.length);
        dataJSON.forEach((v) =>
          UE2s.push(new PETITUE(v.codeue, v.intituleue))
        );
      })
      .catch((error) => console.log(error));
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
    <CaseUEmodifiable
      :code="''"
      :intitule="''"
      :idSem="Semestres[0].id"
      @annuler="add1=false"
      @terminer="getUE1s, add1=false"
      v-if="add1"
    />
    <button class="case add" @click="add1=true" v-else>
      +
    </button>
  </div>
  <div id="sem2" class="sem">
    <p>{{ numSem2 }}</p>
    <CaseUE
      v-for="(ue) of UE2s"
      :ue="ue"
      @clickc="emitterChoixUE"
    />
    <CaseUEmodifiable
      :code="''"
      :intitule="''"
      :idSem="Semestres[1].id"
      @annuler="add2=false"
      @terminer="getUE2s, add2=false"
      v-if="add2"
    />
    <button class="case add" @click="add2=true" v-else>
      +
    </button>
  </div>

  <v-btn id="lienINU" class="my-12"  href="https://auth.univ-jfc.fr/cas/login?service=https%3A%2F%2Fent.univ-jfc.fr%2FuPortal%2FLogin">
      Se connecter à l'ENT JFC
    </v-btn> 
    <v-btn id="lienISIS" class="my-0"  href="https://isis.univ-jfc.fr/">
      Visiter le site de l'école
    </v-btn>   
</template>

<style scoped>
  #lienINU{
    font-size:x-small;
    position:absolute;
    top:235px;
    right:1080px;
    background-color: rgb(3, 155, 229);
  }
  #lienINU:hover{
    background-color: rgb(70, 187, 245);
  }
  #lienISIS{
    font-size:x-small;
    position:absolute;
    top:235px;
    right:1080px;
    background-color: rgb(3, 155, 229);
  }
  #lienISIS:hover{
    background-color: rgb(81, 190, 244);
  }
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
    width: 250px; height: 40px; padding-left: 13px;
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

  button.add {
    display: inline-block; height: 150px; width: 220px;
        margin-bottom: 20px; margin-left: 10px; margin-right: 10px; margin-top: 10px; margin-bottom: 20px;
        color: rgb(255, 255, 255); border-style: solid; font-size: 150px;
        border-style: solid; border-width: 10px; border-color: rgb(3, 155, 229);
  }

  button.add:hover {
    background-color: rgb(3, 155, 229); color: rgb(40, 53, 147);
  }
</style>