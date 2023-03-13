<script setup>
  import Case from "./Case.vue";
  import { reactive } from "vue";

  const emit = defineEmits(["choixNiv"]);
  
  let Niveaux = reactive([]);

  Niveaux.push({nom:"FIE 1",
                estE:true})
  Niveaux.push({nom:"FIE 2",
                estE:true})
  Niveaux.push({nom:"FIE 3",
                estE:true})
  Niveaux.push({nom:"FIE 4",
                estE:true})
  Niveaux.push({nom:"FIE 5",
                estE:true})
  Niveaux.push({nom:"FIA 3",
                estE:false})
  Niveaux.push({nom:"FIA 4",
                estE:false})
  Niveaux.push({nom:"FIA 5",
                estE:false})
  
  function emitterChoixNiv (intitule){
    emit("choixNiv",intitule);
  }
</script>

<template>
  <img id ="logoISIS" src="src\assets\LogoISIS-Blanc.png" alt="Isislogo"/>
  <img id ="logo" src="src\assets\GrosLogo.png" alt="easyLabusLogo"/>
  <div id="niveaux">
  <Case
    v-for="(niveau) of Niveaux"
    :intitule="niveau.nom"
    :bleu="niveau.estE"
    @clickc="emitterChoixNiv"
  />
  </div>
</template>

<style scoped>
#niveaux{
  position:relative;
  left:250px;
  bottom:20px;
}
#logo{
  width : 15%; height:5%;
  position:relative;
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
</style>