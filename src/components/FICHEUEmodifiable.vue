<script setup>
    import { reactive , ref , onMounted } from 'vue';
    
    import PETITEMATIERE from "../PETITEMATIERE";
    import PERSONNE from "../PERSONNE";

    import CaseMATmodifiable from "./CaseMATmodifiable.vue";
    import CaseINTUE from "./CaseINTUE.vue";

    const url = "https://backendeasylabus.azurewebsites.net/api";

    const props = defineProps({codeUE : String, UE : Object, Responsable : Object})

    let codeUE = props.codeUE;
    
    const emit = defineEmits(["finEdit"]);

    let mats = reactive([]);
    let matsOri = [];
    let ints = reactive([]);
    let int0 = ref(new PERSONNE());
    let minNum = ref(0);
    let maxNum = ref(0);

    let code = ref(props.UE.code);
    let intitule = ref(props.UE.intitule);
    let creditsects = ref(props.UE.creditsects);
    let numsemestre = ref(props.UE.numsemestre);
    let ordre = ref(props.UE.ordre);
    let motscles = ref(props.UE.motscles);
    let competences = ref(props.UE.competences);
    let volumtravailperso = ref(props.UE.volumtravailperso);
    let volumprojet = ref(props.UE.volumprojet);
    let volumstage = ref(props.UE.volumstage);
    let prerequis = ref(props.UE.prerequis);
    let modalitescontrole = ref(props.UE.modalitescontrole);
    let bibliographiedebase = ref(props.UE.bibliographiedebase);

    function getMats (codeUE) {
        const fetchOptions = { method: "GET" };
    fetch(url+"/enseignements/ByUe?codeue="+codeUE, fetchOptions)
      .then((response) => {
        return response.json();
      })
      .then((dataJSON) => {
        for (let v of dataJSON) {
          mats.push(new PETITEMATIERE (v.codeens, v.nomens, v.contenu));
          matsOri.push(new PETITEMATIERE (v.codeens, v.nomens, v.contenu));
        }
      })
      .catch((error) => console.log(error));
    }

    function getInts (codeUE) {
        const fetchOptions = { method: "GET" };
        fetch(url+"/ues/Intervenants?codeue="+codeUE, fetchOptions)
            .then((response) => {
                return response.json();
            })
            .then((dataJSON) => {
                int0 = new PERSONNE (dataJSON[0].identifiant, null, dataJSON[0].prenompers, dataJSON[0].nompers, null, null, null);
                dataJSON.forEach((v) =>
                ints.push(new PERSONNE (v.identifiant, null, v.prenompers, v.nompers, null, null, null))
                );
            })
            .catch((error) => console.log(error));
    }

    function getAll(codeUE) {
        getMats(codeUE);
        getInts(codeUE);
        if (numsemestre%2==0){
            minNum.value = numsemestre.value - 1;
            maxNum.value = numsemestre.value;
        } else {
            minNum.value = numsemestre.value;
            maxNum.value = numsemestre.value + 1;
        }
    }

    onMounted(() => {
        getAll(codeUE);
    });

    function handlerDelete(idx) {
        mats.splice(idx,1);
    }

    function handlerInput(codeMat, nomMat, contenuMat, idx) {
        let mat = new PETITEMATIERE(codeMat, nomMat, contenuMat);
        mats.splice(idx,1,mat);
    }

    function handlerAdd() {
        let max = 0;
        let numMat = 0;
        for (let mat of mats) {
            numMat = Number(mat.code.split("-")[mat.code.split("-").length-1]);
            if (numMat > max){
                max = numMat;
            }
        }
        max++;
        mats.push(new PETITEMATIERE (codeUE+"-"+max, null, null));
    }

    function envoieNewMat(codeMat, nomMat, contMat) {
        const head=new Headers()
        head.append("Content-Type", "application/json")
        const fetchOptions={method: "POST",
            headers: head,
            body: JSON.stringify({ codeens : codeMat ,
                                nomens : nomMat ,
                                contenu : contMat })}
        fetch(url+"/ues/AddEns?codeue="+codeUE,fetchOptions)
            .catch((error) =>
                console.log(error)
            )
    }

    function envoieDelMat(codeMat) {
        const fetchOptions={method: "DELETE"}
        fetch(url+"/ues/DelEns?codeens="+codeMat,fetchOptions)
            .catch((error) =>
                console.log(error)
            )
    }

    function handlerSubmit () { //A ajouter dans le bouton terminer (@click="handlerSubmit")
        for (let mat of mats) {
            envoieNewMat(mat.code, mat.nom, mat.contenu);
        }
        let notIN = true;
        for (let mato of matsOri) {
            notIN = true;
            for (let mat of mats) {
                if (mato.code == mat.code) {
                    notIN = false;
                }
            }
            if (notIN){
                envoieDelMat(mato.code)
            }
        }
        // Ajouter appelle à ModifUe
        emit("finEdit"); // trouver un moyen qu'il s'execute seulement un fois que tous les appels sont terminés
    }
</script>

<template>
    <input class="edit" type="button" value="terminer" @click="$emit('finEdit')"/>
    <div id="fiche">
        <input id="h1" class="ArialNarrow" type="text" required="true" v-model="intitule"/>
        <table border="0" id="tableauUE"  class="ArialNarrow">
            <thead>
                <tr>
                    <th id="codeUE">Code UE</th>
                    <th>Intitulé UE</th>
                    <th id="ectsUE">Crédits ECTS</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><input id="incode" type="text" required="true" v-model="code"/></td>
                    <td><input id="inint" type="text" required="true" v-model="intitule"/></td>
                    <td><input id="inects" type="number" min="0" step="1" v-model="creditsects"/></td>
                </tr>
            </tbody>
        </table>
        <table border="0">
            <thead>
                <tr>
                    <th colspan="2">Responsable pédagogique de l'UE</th>
                    <th colspan="2">Principaux intervenants</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="noms" :rowspan="ints.length">{{ props.Responsable.prenom }}</td>
                    <td class="noms" :rowspan="ints.length">{{ props.Responsable.nom }}</td>
                    <td class="noms">{{ int0.prenom }}</td>
                    <td class="noms">{{ int0.nom }}</td>
                </tr>
                <CaseINTUE  v-for="(int) of ints.slice(1)"
                    :inter="int"
                />
            </tbody>
        </table>
        <table border="0">
            <caption>Diplôme et Parcours-type</caption>
            <thead>
                <tr>
                    <th id="nat">Nature</th>
                    <th id="dom">Domaine</th>
                    <th>Diplôme</th>
                    <th id="ori">Parcours-type / orientation</th>
                    <th id="niv">Niveau</th>
                    <th id="sem">Semestre</th>
                    <th id="ord">Ordre UE dans la fiche programme du parcours-type concerné</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Princ.</td>
                    <td>ISIS</td>
                    <td>Spécialité " informatique pour la santé "</td>
                    <td>Premier cycle</td>
                    <td>FIE1</td>
                    <td><input id="insem" type="number" :min="minNum" :max="maxNum" step="1" required="true" v-model="numsemestre"/></td>
                    <td><input id="inord" type="number" min="0" step="1" v-model="ordre"/></td>
                </tr>
            </tbody>
        </table>
        <table border="0" class="textLong">
            <caption>Mots-clés (RNCP)</caption>
            <tbody>
                <tr>
                    <td><textarea v-model="motscles"/></td>
                </tr>
            </tbody>
        </table>
        <table border="0" class="textLong">
            <caption>Compétences (RNCP)</caption>
            <tbody>
                <tr>
                    <td><textarea v-model="competences"/></td>
                </tr>
            </tbody>
        </table>
        <table border="0">
            <caption>Contenu (MATIERES)</caption>
            <tbody>
                <CaseMATmodifiable v-for="(mat, index) of mats"
                    :key="index"
                    :mat="mat"
                    :indexm="index"
                    @deleteMat="handlerDelete"
                    @inputMat="handlerInput"
                />
                <tr><td colspan="4"><input type="button" value="+ AJOUTER UN ENSEIGNEMENT +" @click="handlerAdd"/></td></tr>
            </tbody>
        </table>
        <table border="0" id="heures">
            <caption>Format et volumes horaires</caption>
            <thead>
                <tr>
                    <th colspan="3">Volume horaire présentiel enseignant/étudiant</th>
                    <th colspan="3">Volume horaire "étudiant" (travail personnel, projet, stage)</th>
                </tr>
                <tr>
                    <th class="heure">CM</th>
                    <th class="heure">TD</th>
                    <th class="heure">TP</th>
                    <th class="volum">Travail personnel</th>
                    <th class="volum">Projet (en heures)</th>
                    <th class="volum">Stage (en heures)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{{ props.UE.heurecm }}</td>
                    <td>{{ props.UE.heuretd }}</td>
                    <td>{{ props.UE.heuretp }}</td>
                    <td><input type="number" min="0" step="1" v-model="volumtravailperso"/></td>
                    <td><input type="number" min="0" step="1" v-model="volumprojet"/></td>
                    <td><input type="number" min="0" step="1" v-model="volumstage"/></td>
                </tr>
            </tbody>
        </table>
        <table border="0" class="textLong">
            <caption>Prérequis pour suivre l'UE</caption>
            <tbody>
                <tr>
                    <td><textarea v-model="prerequis"/></td>
                </tr>
            </tbody>
        </table>
        <table border="0" class="textLong">
            <caption>Modalités de contrôle des connaissances (Conditions de validation / Principes généraux)</caption>
            <tbody>
                <tr>
                    <td><textarea v-model="modalitescontrole"/></td>
                </tr>
            </tbody>
        </table>
        <table border="0" class="textLong">
            <caption>Bibliographie de base</caption>
            <tbody>
                <tr>
                    <td><textarea v-model="bibliographiedebase"/></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>
    #fiche {
        position: absolute; top: 150px; left:250px;
        background-color: white; min-height: 1131px; width: 800px;
        font-family: "Arial";
    }

    .ArialNarrow {
        font-family: "Arial Narrow","Arial";
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

    #h1 {
        width: 800px; font-weight: bold;
        font-size: 20px; text-align: center; position: relative; top: 20px;
    }

    caption {
        text-align: left; font-weight: bold;
    }

    table {
        width: 700px; position: relative; left: 30px; background-color: black; margin: 20px;
        font-size: 13px;
    }
    tr {
        background-color: white;
    }

    th , td {
        padding-left: 5px; padding-right: 5px;
    }

    #tableauUE {
        font-size: 16px; font-weight: bold; text-align: center;
    }

    #tableauUE input{
        font-size: 16px; font-weight: bold; text-align: center;
    }

    #codeUE {
        width: 150px;
    }

    #incod {
        width: 140px;
    }

    #inint {
        width: 430px;
    }

    #ectsUE {
        width: 100px;
    }

    #inects {
        width: 90px;
    }

    .noms {
        width: 175px;
    }

    #nat {
        width: 50px;
    }

    #dom {
        width: 70px;
    }

    #ori {
        width: 150px;
    }

    #niv {
        width: 70px;
    }

    #sem {
        width: 70px;
    }

    #insem {
        width: 60px;
    }

    #ord {
        width: 100px;
    }

    #inord {
        width: 90px;
    }

    .textLong {
        min-height: 50px;
    }

    textarea {
        resize:none ; width: 690px;
    }

    #heures {
        text-align: center;
    }

    #heures tr th{
        font-weight:100;
    }

    #heures input {
        width: 93px;
    }

    .heure {
        width: 130px;
    }

    .volum {
        width: 103px;
    }
</style>