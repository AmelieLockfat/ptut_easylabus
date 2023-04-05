<script setup>
    import { reactive , ref , onMounted } from 'vue';

    import PERSONNE from "../PERSONNE";
    
    import CasePROFmodifiable from './CasePROFmodifiable.vue';

    const props = defineProps({codeMAT : String, MAT : Object})

    let codeMAT = props.codeMAT;
    let nom = ref(props.MAT.nom);
    let heurecm = ref(props.MAT.heurecm);
    let heuretd = ref(props.MAT.heuretd);
    let heuretp = ref(props.MAT.heuretp);
    let heuretotalencadree = ref(props.MAT.heuretotalencadree);
    let heuretravailperso = ref(props.MAT.heuretravailperso);
    let coefficient = ref(props.MAT.coefficient);
    let prerequis = ref(props.MAT.prerequis);
    let planducours = ref(props.MAT.planducours);
    let modalitesevaluation = ref(props.MAT.modalitesevaluation);

    const emit = defineEmits(["finEdit"]);

    let perss = reactive([]);

    function getPerss (codeMAT) {
      const fetchOptions = { method: "GET" };
      fetch("https://backendeasylabus.azurewebsites.net/api/enseignements/Intervenants?codeens="+codeMAT, fetchOptions)
      .then((response) => {
        return response.json();
      })
      .then((dataJSON) => {
        dataJSON.forEach((v) =>
          perss.push(new PERSONNE (v.identifiant, null, v.prenompers, v.nompers, v.email, v.numtel, v.coordprivee))
        );
      })
      .catch((error) => console.log(error));
    }

    onMounted(() => {
        getPerss(codeMAT);
    });

    function handlerTotal() {
        heuretotalencadree.value = heurecm.value + heuretd.value + heuretp.value;
    }

    function handlerDelete(idx) {
        perss.splice(idx,1);
    }
</script>

<template>
    <input class="edit" type="button" value="terminer" @click="$emit('finEdit')"/>
    <div id="fiche">
        <img src="src\assets\LogoISISFichEns.png" alt="Isislogo"/>
        <h1>FICHE ENSEIGNEMENT</h1>
        <table border="0" class="tailleNorm">
            <tr id="caseIntitule">
                <th colspan="2" class="fondOrange textGauche">INTITULE DE L'ENSEIGNEMENT :</th>
                <td class="fondOrange textGauche" id="intitule"><input type="text" required="true" v-model="nom"/></td>
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
                <th colspan="4" class="textSousligne">Nom de l'intervenant</th>
                <th colspan="2" class="textSousligne">Coordonnées intervenant</th>
            </tr>
            <CasePROFmodifiable v-for="(pers,index) of perss"
                :pers="pers"
                :indexp="index"
                @deletePers="handlerDelete"
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
                <td class="petiteCase"><input type="number" min="0" step="1" v-model="heurecm" @input="handlerTotal"/></td>
                <td class="petiteCase"><input type="number" min="0" step="1" v-model="heuretd" @input="handlerTotal"/></td>
                <td class="petiteCase"><input type="number" min="0" step="1" v-model="heuretp" @input="handlerTotal"/></td>
                <td class="petiteCase">{{ heuretotalencadree }}</td>
                <td class="petiteCase"><input type="number" min="0" step="1" v-model="heuretravailperso"/></td>
                <td class="petiteCase"><input type="number" min="0" step="0.1" v-model="coefficient"/></td>
            </tr>
        </table>
        <div class="textGauche textLong tailleNorm">
            <tr>
                <th class="textSousligne tropBas">Prérequis pour suivre l'enseignement :</th>
            </tr>
            <tr>
                <td class="tropBas"><textarea id="prerequis" v-model="prerequis"/></td>
            </tr>
        </div>
        <div class="textGauche textLong tailleNorm">
            <tr>
                <th class="textSousligne tropBas">Description de l'enseignement et plan du cours</th>
            </tr>
            <tr>
                <td class="tropBas"><textarea id="planCour" v-model="planducours"/></td>
            </tr>
        </div>
        <div class="textGauche textLong tailleNorm">
            <tr>
                <th class="textSousligne tropBas">Modalités d'évaluation</th>
            </tr>
            <tr>
                <td class="tropBas"><textarea id="modEval" v-model="modalitesevaluation"/></td>
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

    #intitule input {
        width: 310px;
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

    textarea {
        resize: none; width: 630px;
    }

    #prerequis {
        height: 120px;
    }

    #planCour {
        height: 300px;
    }

    #modEval {
        height: 80px;
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

    .petiteCase input {
        width: 75px;
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

    th {
        padding: 5px;
    }

    td {
        padding: 5px;
    }

    .tropBas {
        padding-top: 0px; padding-bottom: 0px;
    }

    h1 {
        color: #808080; font-size: 21px; position: relative; left: 350px; bottom: 25px;
    }

    h2 {
        position: relative; top: 25px;
        font-family: "Arial"; color: #808080; font-size: 14px; text-align: center;
    }
</style>