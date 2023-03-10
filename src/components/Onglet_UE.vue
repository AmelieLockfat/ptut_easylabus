<script setup>
  import CaseUE from "./CaseUE.vue";
  import { reactive } from "vue";

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
  <div id="banderole"></div>
  <img id ="logoISIS" src="src\assets\LogoISIS-Blanc.png" alt="Isislogo"/>
  <img id ="logo" src="src\assets\GrosLogo.png" alt="easyLabusLogo"/>

  <div class="sem">
    <p>Semestre 1</p>
    <CaseUE
      v-for="(ue) of UE1s"
      :intitule="ue"
      :bleu="true"
      @clickc="emitterChoixUE"
    />
  </div>
  <div class="sem">
    <p>Semestre 2</p>
    <CaseUE
      v-for="(ue) of UE2s"
      :intitule="ue"
      :bleu="true"
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
    bottom : 70px;
  }
  div.sem p {
    text-transform: uppercase;
    font-size: 40px; color: rgb(255, 129, 131); font-family: "Arial Narrow","Arial";
    width: 237px; height: 40px; padding-left: 13px;
    border-top-style: solid; border-top-color: rgb(255, 129, 131); border-top-width: 5px;
    border-left-style: solid; border-left-color: rgb(255, 129, 131); border-left-width: 5px;
    position: relative; bottom: 30px; right: 5px;
  }

  div.sem div.case {
    position: relative; bottom: 50px;
  }
  #logo{
  width : 15%; height:5%;
  position:absolute;
  top:220px;
  left: 10px;
  margin-right: 10px;
  filter: blur(1px);
}
#logoISIS{
  width : 12%; height:12%;
  position: relative;
  top: 70px;
  filter: blur(1px);
}

#banderole {
        position : relative;
        top : 30px;
        height: 30px; width: 600px;
        background-color: rgb(255, 129, 131);
        border-style: solid; border-radius: 10px; border-width: 2px; border-color: rgb(255, 129, 131);
    }

</style>