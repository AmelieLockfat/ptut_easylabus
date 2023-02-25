<script setup>
  import Case from "./Case.vue";
  import { reactive } from "vue";
  
  let UE1s = reactive([]);
  let UE2s = reactive([]);

  UE1s.push("Base de données")
  UE1s.push("Génie logiciel")
  UE1s.push("Anglais")
  UE1s.push("Urbanisation et interopérabilité des Systèmes d’informations de santé")
  
  UE2s.push("Technologie Web")
  UE2s.push("Anglais")
  
  function test (intitule){
    console.log("CLICK sur l'UE "+intitule)
  }
</script>

<template>
  <div class="sem">
    <p>Semestre 1</p>
    <Case
      v-for="(ue) of UE1s"
      :intitule="ue"
      :bleu="true"
      @clickc="test"
    />
  </div>
  <div class="sem">
    <p>Semestre 2</p>
    <Case
      v-for="(ue) of UE2s"
      :intitule="ue"
      :bleu="true"
      @clickc="test"
    />
  </div>
</template>

<style scoped>
  div.sem {
    width: 780px;
    border-left-style: solid; border-left-color: rgb(255, 129, 131); border-left-width: 5px;
  }

  div.sem p {
    text-transform: uppercase;
    font-size: 40px; color: white; font-family: "Arial Narrow","Arial";
    width: 237px; height: 40px; padding-left: 13px;
    border-top-style: solid; border-top-color: rgb(255, 129, 131); border-top-width: 5px;
    border-left-style: solid; border-left-color: rgb(255, 129, 131); border-left-width: 5px;
    position: relative; bottom: 43px; right: 5px;
  }

  div.sem div.case {
    position: relative; bottom: 87px;
  }
</style>