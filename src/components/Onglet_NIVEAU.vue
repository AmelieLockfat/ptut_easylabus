<script setup>
import { reactive } from "vue";
  
  import { onMounted } from "vue";

  import NIVEAU from "../NIVEAU";
  
  import Case from "./Case.vue";

  const emit = defineEmits(["choixNiv"]);
  
  let items = reactive([]);
  let Niveaux = reactive([]);

  items.push("2022-2023")
  items.push("2021-2022")
  items.push("2020-2021")
  items.push("2019-2020")

  function getNiveaux() {
    const fetchOptions = { method: "GET" };
    fetch("https://backendeasylabus.azurewebsites.net/api/niveaus/All", fetchOptions)
      .then((response) => {
        return response.json();
      })
      .then((dataJSON) => {
        Niveaux.splice(0, Niveaux.length);
        dataJSON.forEach((v) =>
          Niveaux.push(new NIVEAU(v.intituleniveau))
        );
      })
      .catch((error) => console.log(error));
  }
  onMounted(() => {
    getNiveaux();
  });
  
  function emitterChoixNiv (index){
    emit("choixNiv",Niveaux[index].id,Niveaux[index].intitule);
  }
</script>

<template>
  <br>
    <div id="annéeEtude" class=" d-flex justify-space-around">
    <v-menu>
      <template v-slot:activator="{ props }">
        <v-btn
          color="rgb(3, 155, 229)"
          v-bind="props"
        >
          Années
        </v-btn>
      </template>
      <v-list>
        <v-list-item color="black"
          v-for="(item, index) in items"
          :key="index"
          :value="index"
        >
          <v-list-item-title>{{ item }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>

  <div id="niveaux">
    <Case
      v-for="(niveau,index) of Niveaux"
      :intitule="niveau.intitule"
      :indexn="index"
      :bleu="niveau.estFIE"
      @clickc="emitterChoixNiv"
    />
  </div>
</template>

<style scoped>
#annéeEtude{
  position:relative;
  top:30px;
  

}
  #niveaux{
    position:relative;
    left:250px;
    top:100px;
    width: 900px;
  }
</style>