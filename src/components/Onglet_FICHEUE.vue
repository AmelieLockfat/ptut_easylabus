<script setup>
  import { reactive } from "vue";
  import CaseMAT from "./CaseMAT.vue";

  defineProps(["UE"])

  const emit = defineEmits(["choixMAT"]);

  let mats = reactive([]);

  mats.push({inti:"Mathématiques Analyse 1",cont:"Contenu Mathématiques"})
  mats.push({inti:"Electricité 1",cont:"Contenu Electricité"})
  mats.push({inti:"Mécanique physique",cont:"Contenu Mécanique physique"})
  mats.push({inti:"Optique",cont:"Contenu Optique"})

  function handlerChoixMAT (intituleMat){
    emit("choixMAT",intituleMat);
  }
</script>

<template>
  <div id="fiche">
    <h1>Mathématiques - Algorithmique</h1>
    <table border="1">
      <thead>
        <tr>
          <th>Code UE</th>
          <th>Intitulé UE</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>E1-1-SFPH</td>
          <td>Sciences fondamentales et physiques</td>
        </tr>
      </tbody>
    </table>
    <table border="1">
      <thead>
        <tr>
          <th>Responsable pédagogique de l'UE</th>
          <th>Principaux intervenants</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Responsable d'année</td>
          <td>Noms des professeurs</td>
        </tr>
      </tbody>
    </table>
    <table border="1">
      <caption>Diplôme et Parcours-type</caption>
      <thead>
        <tr>
          <th>Nature</th>
          <th>Domaine</th>
          <th>Diplôme</th>
          <th>Parcours-type / orientation</th>
          <th>Niveau</th>
          <th>Semestre</th>
          <th>Ordre UE dans la fiche programme du parcours-type concerné</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Princ.</td>
          <td>ISIS</td>
          <td>Spécialité " informatique pour la santé "</td>
          <td>Premier cycle</td>
          <td>FIE1</td>
          <td>1</td>
          <td>1</td>
        </tr>
      </tbody>
    </table>
    <table border="1">
      <caption>Mots-clés (RNCP)</caption>
      <tbody>
        <tr>
          <td>Bla bla bla bla bla</td>
        </tr>
      </tbody>
    </table>
    <table border="1">
      <caption>Compétences (RNCP)</caption>
      <tbody>
        <tr>
          <td>Capacité à mobiliser les ressources d'un large champ de sciences fondamentales</td>
        </tr>
      </tbody>
    </table>
    <table border="1">
      <caption>Contenu (MATIERES)</caption>
      <tbody>
        <CaseMAT v-for="(mat) of mats"
          :intMat="mat.inti"
          :contMat="mat.cont"
          @choixMAT="handlerChoixMAT"
        />
      </tbody>
    </table>
  </div>
</template>

<style scoped>
  #fiche {
    position: absolute; top: 200px; left:250px;
    background-color: white; height: 1131px; width: 800px;
  }
</style>