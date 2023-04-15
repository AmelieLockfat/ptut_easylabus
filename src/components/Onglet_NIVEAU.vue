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
  <br>

    <div id="annéeEtude" class=" d-flex justify-space-around">
    <v-menu>
      <template v-slot:activator="{ props }">
        <v-btn
          color="rgb(3, 155, 229)"
          v-bind="props"
        >
          Années d'étude
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
  <img id="coeur" src="\src\assets\CoeurISIS(offContours).png" alt="logo coeur"/>

    <v-btn id="lienINU" class="my-12"  href="https://auth.univ-jfc.fr/cas/login?service=https%3A%2F%2Fent.univ-jfc.fr%2FuPortal%2FLogin">
      Se connecter à l'ENT JFC
    </v-btn> 
    <v-btn id="lienISIS" class="my-0"  href="https://isis.univ-jfc.fr/">
      Visiter le site de l'école
    </v-btn>   

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
 #coeur{
    position:absolute;
    height: 120px; width: 130px;
    margin-left: 45px;
    top:5px; left: 615px;
    }
a{
  font-size: 10px;
  color:white;
  position:absolute;
  margin-left:1090px;
  top:650px;
}

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
  #lienINU{
    position:absolute;
    top:235px;
    right:1080px;
    background-color: rgb(3, 155, 229);
  }
  #lienINU:hover{
    background-color: rgb(70, 187, 245);
  }
  #lienISIS{
    position:absolute;
    top:235px;
    right:1080px;
    background-color: rgb(3, 155, 229);
  }
  #lienISIS:hover{
    background-color: rgb(81, 190, 244);
  }
</style>