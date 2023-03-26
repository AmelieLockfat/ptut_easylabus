<script setup>
    import { reactive } from 'vue';
    import CaseMATmodifiable from "./CaseMATmodifiable.vue";

    defineProps(["UE"])
    
    const emit = defineEmits(["finEdit"]);

    let mats = reactive([]);

    mats.push({inti:"Mathématiques Analyse 1",cont:"Contenu Mathématiques"})
    mats.push({inti:"Electricité 1",cont:"Contenu Electricité"})
    mats.push({inti:"Mécanique physique",cont:"Contenu Mécanique physique"})
    mats.push({inti:"Optique",cont:"Contenu Optique"})

    function handlerDelete(idx) {
        mats.splice(idx,1)
    }

    function handlerAdd() {
        mats.push({inti:"",cont:""})
    }
</script>

<template>
    <input class="edit" type="button" value="terminer" @click="$emit('finEdit')"/>
    <div id="fiche">
        <input type="text" value="Mathématiques - Algorithmique"/>
        <table border="1">
            <thead>
                <tr>
                    <th>Code UE</th>
                    <th>Intitulé UE</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><input type="text" value="E1-1-SFPH"/></td>
                    <td><input type="text" value="Sciences fondamentales et physiques"/></td>
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
                    <td><input type="number" value="1"/></td>
                </tr>
            </tbody>
        </table>
        <table border="1">
            <caption>Mots-clés (RNCP)</caption>
            <tbody>
                <tr>
                    <td><input type="text" value="Bla bla bla bla bla"/></td>
                </tr>
            </tbody>
        </table>
        <table border="1">
            <caption>Compétences (RNCP)</caption>
            <tbody>
                <tr>
                    <td><input type="text" value="Capacité à mobiliser les ressources d'un large champ de sciences fondamentales"/></td>
                </tr>
            </tbody>
        </table>
        <table border="1">
            <caption>Contenu (MATIERES)</caption>
            <tbody>
                <CaseMATmodifiable v-for="(mati, index) of mats"
                    :mat="mati"
                    :indexm="index"
                    @delete="handlerDelete"
                />
                <tr><input type="button" value="+" @click="handlerAdd"/></tr>
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
                    <td><input type="number" value="54"/></td>
                    <td><input type="number" value="74"/></td>
                    <td><input type="number" value="24"/></td>
                    <td><input type="number" value="90"/></td>
                    <td><input type="number" value="0"/></td>
                    <td><input type="number" value="0"/></td>
                </tr>
            </tbody>
        </table>
        <table border="1">
            <caption>Prérequis pour suivre l'UE</caption>
            <tbody>
                <tr>
                    <td><input type="text" value="Ble ble ble ble ble"/></td>
                </tr>
            </tbody>
        </table>
        <table border="1">
            <caption>Modalités de contrôle des connaissances (Conditions de validation / Principes généraux)</caption>
            <tbody>
                <tr>
                    <td><input type="text" value="Voir les Modalités de Cintrôle des Connaissances."/></td>
                </tr>
            </tbody>
        </table>
        <table border="1">
            <caption>Bibliographie de base</caption>
            <tbody>
                <tr>
                    <td><input type="text" value="Bli bli bli bli bli"/></td>
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
    input.edit:hover {
        background-color: rgb(255, 129, 131); color: rgb(40, 53, 147);
    }
</style>