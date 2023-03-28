<script setup>
  defineProps(["MAT"])
</script>

<template>
    <input class="edit" type="button" value="éditer" @click="$emit('debutEdit')"/>
    <div id="fiche">
        <h1>FICHE ENSEIGNEMENT</h1>
        <table border="1">
            <tr>
                <th>INTITULE DE L'ENSEIGNEMENT :</th>
                <td>Mathématiques Analyse 1</td>
                <td></td>
            </tr>
        </table>
        <table border="1">
            <tr>
                <th rowspan="2">Code et Nom de l'UE</th>
                <td>E1-1-SFPH</td>
                <th>Année d'études</th>
                <th>Semestre</th>
            </tr>
            <tr>
                <td>Sciences fondamentales et physiques</td>
                <td>2022/2023</td>
                <td>1</td>
            </tr>
            <tr>
                <th colspan="2">Nom de l'intervenant</th>
                <th colspan="2">Coordonnées intervenant</th>
            </tr>
            <tr>
                <td colspan="2" rowspan="2">Monsieur prof de Maths 1</td>
                <td colspan="2">monsieur.profmaths1@univ-jfc.fr</td>
            </tr>
            <tr>
                <td colspan="2">0612345678</td>
            </tr>
            <tr>
                <td colspan="2" rowspan="2">Monsieur prof de Maths 2</td>
                <td colspan="2">monsieur.profmaths2@univ-jfc.fr</td>
            </tr>
            <tr>
                <td colspan="2">0612345679</td>
            </tr>
        </table>
        <table border="1">
            <tr>
                <th>Nb heure CM</th>
                <th>Nb heure TD</th>
                <th>Nb heure TP</th>
                <th>Total encadré</th>
                <th>Travail perso</th>
                <th>Coefficient</th>
            </tr>
            <tr>
                <td>14</td>
                <td>6</td>
                <td>0</td>
                <td>20</td>
                <td>0</td>
                <td>0.4</td>
            </tr>
        </table>
        <table border="1">
        </table>
        <table border="1">
            <tr>
                <th>Prérequis pour suivre l'enseignement :</th>
            </tr>
            <tr>
                <td>Prérequis et trucs</td>
            </tr>
        </table>
        <table border="1">
            <tr>
                <th>Description de l'enseignement et plan du cours</th>
            </tr>
            <tr>
                <td>Description et plan du cours</td>
            </tr>
        </table>
        <table border="1">
            <tr>
                <th>Modalités d'évaluation</th>
            </tr>
            <tr>
                <td>Les Modalités et trucs</td>
            </tr>
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