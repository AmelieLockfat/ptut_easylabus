<script setup>
  import { reactive } from "vue";
  import CaseMAT from "./CaseMAT.vue";

  defineProps(["UE"])

  const emit = defineEmits(["debutEdit","choixMAT"]);

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
    <input class="edit" type="button" value="éditer" @click="$emit('debutEdit')"/>
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
        <table border="1">
            <caption>Format et volumes horaires</caption>
            <thead>
                <tr>
                    <th colspan="3">Volume horaire présentiel enseignant/étudiant</th>
                    <th colspan="3">Volume horaire "étudiant" (travail personnel, projet, stage)</th>
                </tr>
                <tr>
                    <th>CM</th>
                    <th>TD</th>
                    <th>TP</th>
                    <th>Travail personnel</th>
                    <th>Projet (en heures)</th>
                    <th>Stage (en heures)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>54</td>
                    <td>74</td>
                    <td>24</td>
                    <td>90</td>
                    <td>0</td>
                    <td>0</td>
                </tr>
            </tbody>
        </table>
        <table border="1">
            <caption>Prérequis pour suivre l'UE</caption>
            <tbody>
                <tr>
                    <td>Ble ble ble ble ble</td>
                </tr>
            </tbody>
        </table>
        <table border="1">
            <caption>Modalités de contrôle des connaissances (Conditions de validation / Principes généraux)</caption>
            <tbody>
                <tr>
                    <td>Voir les Modalités de Cintrôle des Connaissances.</td>
                </tr>
            </tbody>
        </table>
        <table border="1">
            <caption>Bibliographie de base</caption>
            <tbody>
                <tr>
                    <td>Bli bli bli bli bli</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>
    #fiche {
        position: absolute; top: 150px; left:250px;
        background-color: white; min-height: 1131px; width: 800px;
    }

    input.edit {
        position: fixed; top: 497px; left: 19px;
        text-transform: uppercase; color: white;
        border-style: solid; border-color: rgb(255, 129, 131); border-width: 10px;
        font-size: 30px; font-family: "Arial"; font-weight: bold; width: 210px; height: 70px;
    }
</style>