<script setup>
  import CaseUE from "./CaseUE.vue";
  import { reactive } from "vue";

  defineProps(["Niveau"])

  const emit = defineEmits(["choixUE"]);
  
  let UE1s = reactive([]);
  let UE2s = reactive([]);

  UE1s.push("Base de données")
  UE1s.push("Génie logiciel")
  UE1s.push("Anglais")
  UE1s.push("Urbanisation et interopérabilité des Systèmes d’informations de santé")
  
  UE2s.push("Technologie Web")
  UE2s.push("Anglais")
  
  function emitterChoixUE (intitule){
    emit("choixUE",intitule);
  }
</script>

<template>
  <div id="sem1" class="sem">
    <p>Semestre 1</p>
    <CaseUE
      v-for="(ue) of UE1s"
      :intitule="ue"
      @clickc="emitterChoixUE"
    />
  </div>
  <div id="sem2" class="sem">
    <p>Semestre 2</p>
    <CaseUE
      v-for="(ue) of UE2s"
      :intitule="ue"
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