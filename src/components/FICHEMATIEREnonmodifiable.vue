<script setup>
    import { reactive , onMounted } from 'vue';

    import PERSONNE from '../PERSONNE';

    import CasePROFnonmodifiable from './CasePROFnonmodifiable.vue';

    const props = defineProps({codeMAT : String, MAT : Object})

    let codeMAT = props.codeMAT;

    defineEmits(["debutEdit"]);

    let perss = reactive([]);

    function getPerss (codeMAT) {
      const fetchOptions = { method: "GET" };
      fetch("https://backendeasylabus.azurewebsites.net/api/enseignements/Intervenants?codeens="+codeMAT, fetchOptions)
      .then((response) => {
        return response.json();
      })
      .then((dataJSON) => {
        console.log(dataJSON);
        dataJSON.forEach((v) =>
          perss.push(new PERSONNE (v.identifiant, null, v.prenompers, v.nompers, v.email, v.numtel, v.coordprivee))
        );
      })
      .catch((error) => console.log(error));
    }

    onMounted(() => {
        getPerss(codeMAT);
    });
</script>

<template>
    <input class="edit" type="button" value="éditer" @click="$emit('debutEdit')"/>
    <div id="fiche">
        <img src="src\assets\LogoISISFichEns.png" alt="Isislogo"/>
        <h1>FICHE ENSEIGNEMENT</h1>
        <table border="0" class="tailleNorm">
            <tr id="caseIntitule">
                <th colspan="2" class="fondOrange textGauche">INTITULE DE L'ENSEIGNEMENT :</th>
                <td class="fondOrange textGauche" id="intitule">{{ props.MAT.nom }}</td>
                <td></td>
            </tr>
        </table>
        <table border="0" class="tailleNorm">
            <tr>
                <th rowspan="2" id="titreUE" class="fondBleu textGauche">Code et Nom de l'UE</th>
                <td id="codeUE">{{ props.MAT.codeue }}</td>
                <th class="fondBleu textGauche" id="anneEtude">Année d'études</th>
                <th class="fondBleu">Semestre</th>
            </tr>
            <tr>
                <td>{{ props.MAT.intituleue }}</td>
                <td>2022/2023</td>
                <td>{{ props.MAT.numsemestre }}</td>
            </tr>
        </table>
        <table border="0" class="tailleNorm">
            <tr>
                <th colspan="2" class="textSousligne">Nom de l'intervenant</th>
                <th colspan="2" class="textSousligne">Coordonnées intervenant</th>
            </tr>
            <CasePROFnonmodifiable v-for="(pers) of perss"
                :pers="pers"
            />
        </table>
        <table border="0" id="heures">
            <tr class="fondOrange">
                <th>Nb heure CM</th>
                <th>Nb heure TD</th>
                <th>Nb heure TP</th>
                <th>Total encadré</th>
                <th>Travail perso</th>
                <th>Coefficient</th>
            </tr>
            <tr>
                <td class="petiteCase">{{ props.MAT.heurecm }}</td>
                <td class="petiteCase">{{ props.MAT.heuretd }}</td>
                <td class="petiteCase">{{ props.MAT.heuretp }}</td>
                <td class="petiteCase">{{ props.MAT.heuretotalencadree }}</td>
                <td class="petiteCase">{{ props.MAT.heuretravailperso }}</td>
                <td class="petiteCase">{{ props.MAT.coefficient }}</td>
            </tr>
        </table>
        <div class="textGauche textLong tailleNorm">
            <tr>
                <th class="textSousligne tropBas">Prérequis pour suivre l'enseignement :</th>
            </tr>
            <tr>
                <td>{{ props.MAT.prerequis }}</td>
            </tr>
        </div>
        <div class="textGauche textLong tailleNorm">
            <tr>
                <th class="textSousligne tropBas">Description de l'enseignement et plan du cours</th>
            </tr>
            <tr>
                <td>{{ props.MAT.planducours }}</td>
            </tr>
        </div>
        <div class="textGauche textLong tailleNorm">
            <tr>
                <th class="textSousligne tropBas">Modalités d'évaluation</th>
            </tr>
            <tr>
                <td>{{ props.MAT.modalitesevaluation }}</td>
            </tr>
        </div>
        <h2>Fiche enseignement</h2>
    </div>
</template>

<style scoped>
    #fiche {
        position: absolute; top: 150px; left:250px;
        background-color: white; min-height: 1131px; width: 800px; border-style: none;
        font-family: "Garamond","Arial"; font-size: 16px;
    }

    #caseIntitule {
        font-size: 14px;
    }

    #intitule {
        width: 320px;
    }

    #intitule+td {
        width: 72px;
    }

    #titreUE {
        width: 110px;
    }

    #codeUE {
        width: 340px;
    }

    #anneEtude {
        width: 120px;
    }

    input.edit {
        position: fixed; bottom: 19px; left: 19px;
        text-transform: uppercase; color: white;
        border-style: solid; border-color: rgb(255, 129, 131); border-width: 10px;
        font-size: 30px; font-family: "Arial"; font-weight: bold; width: 210px; height: 70px;
    }
    input.edit:hover {
        background-color: rgb(255, 129, 131); color: rgb(40, 53, 147);
    }

    img {
        position: relative; left: 100px; top: 10px;
        height: 55px; width: 150px;
    }

    .tailleNorm {
        width: 650px; position: relative; left: 75px;
    }

    div {
        border-color: black; border-style: solid; border-width: 2px;
    }

    table {
        background-color: black;
    }

    #heures {
        position: relative; left: 75px;
    }

    .petiteCase {
        width: 85px;
    }

    tr {
        background-color: white;
    }

    .fondOrange {
        background-color: #F7CAAC;
    }

    .fondBleu {
        background-color: #B4C6E7;
    }

    .textGauche {
        text-align: left;
    }

    .textLong {
        min-height: 100px;
    }

    .textSousligne {
        text-decoration: underline;
    }

    th , td {
        padding-left: 5px; padding-right: 5px;
    }

    .tropBas {
        position: relative; bottom: 3px;
    }

    h1 {
        color: #808080; font-size: 21px; position: relative; left: 350px; bottom: 25px;
    }

    h2 {
        position: relative; top: 25px;
        font-family: "Arial"; color: #808080; font-size: 14px; text-align: center;
    }
</style>