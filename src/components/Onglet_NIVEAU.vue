<script setup>
  import { reactive } from "vue";
  import { onMounted } from "vue";

  import NIVEAU from "../NIVEAU";
  
  import Case from "./Case.vue";

  const emit = defineEmits(["choixNiv"]);
  
  let Niveaux = reactive([]);

  function getNiveaux() {
    /*const fetchOptions = { method: "GET" };
    fetch(url, fetchOptions)
      .then((response) => {
        return response.json();
      })
      .then((dataJSON) => {*/
        let dataJSON = [{intituleniveau:"FIE1"},{intituleniveau:"FIE2"},{intituleniveau:"FIE3"},{intituleniveau:"FIE4"},{intituleniveau:"FIE5"},{intituleniveau:"FIA3"},{intituleniveau:"FIA4"},{intituleniveau:"FIA5"}];
        Niveaux.splice(0, Niveaux.length);
        dataJSON.forEach((v) =>
          Niveaux.push(new NIVEAU(v.intituleniveau))
        );
    /*  })
      .catch((error) => console.log(error));*/
  }
  onMounted(() => {
    getNiveaux();
  });
  
  function emitterChoixNiv (intitule){
    emit("choixNiv",intitule);
  }
</script>

<template>
  <div id="niveaux">
    <Case
      v-for="(niveau) of Niveaux"
      :intitule="niveau.intitule"
      :bleu="niveau.estFIE"
      @clickc="emitterChoixNiv"
    />
  </div>
</template>

<style scoped>
  #niveaux{
    position:relative;
    left:250px;
    top:100px;
    width: 900px;
  }
</style>