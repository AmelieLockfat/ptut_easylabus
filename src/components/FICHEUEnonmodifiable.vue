<script setup>
    import { ref , reactive , onMounted } from "vue";

    import PETITEMATIERE from "../PETITEMATIERE";
    import PERSONNE from "../PERSONNE";

    import CaseMATnonmodifiable from "./CaseMATnonmodifiable.vue";
    import CaseINTUE from "./CaseINTUE.vue";

    const url = "https://backendeasylabus.azurewebsites.net/api";

    const props = defineProps({codeUE : String, UE : Object, Responsable : Object})

    let codeUE = props.codeUE;

    const emit = defineEmits(["debutEdit","choixMAT"]);

    let mats = reactive([]);
    let ints = reactive([]);
    let int0 = ref(new PERSONNE())

    function getMats (codeUE) {
        const fetchOptions = { method: "GET" };
        fetch(url+"/enseignements/ByUe?codeue="+codeUE, fetchOptions)
        .then((response) => {
            return response.json();
        })
        .then((dataJSON) => {
            dataJSON.forEach((v) =>
                mats.push(new PETITEMATIERE (v.codeens, v.nomens, v.contenu))
            );
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
            if (dataJSON.length>0){
                int0 = new PERSONNE (dataJSON[0].identifiant, null, dataJSON[0].prenompers, dataJSON[0].nompers, null, null, null);
                dataJSON.forEach((v) =>
                    ints.push(new PERSONNE (v.identifiant, null, v.prenompers, v.nompers, null, null, null))
                );
            }
        })
        .catch((error) => console.log(error));
    }

    function handlerChoixMAT (codeMAT,intituleMAT){
        emit("choixMAT",codeMAT,intituleMAT);
    }

    function getAll(codeUE) {
        getMats(codeUE);
        getInts(codeUE);
    }

    onMounted(() => {
        getAll(codeUE);
    });
</script>

<template>
    <input class="edit" type="button" value="éditer" @click="$emit('debutEdit')"/>
    <div id="fiche">
        <h1 class="ArialNarrow">{{ props.UE.intitule }}</h1>
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
                    <td>{{ props.UE.code }}</td>
                    <td>{{ props.UE.intitule }}</td>
                    <td>{{ props.UE.creditsects }}</td>
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
                    v-if="ints.length>1"
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
                    <td>{{ props.UE.intitulediplome }}</td>
                    <td>{{ props.UE.nomorientation }}</td>
                    <td>{{ props.UE.intituleniveau }}</td>
                    <td>{{ props.UE.numsemestre }}</td>
                    <td>{{ props.UE.ordre }}</td>
                </tr>
            </tbody>
        </table>
        <table border="0" class="textLong">
            <caption>Mots-clés (RNCP)</caption>
            <tbody>
                <tr>
                    <td>{{ props.UE.motscles }}</td>
                </tr>
            </tbody>
        </table>
        <table border="0" class="textLong">
            <caption>Compétences (RNCP)</caption>
            <tbody>
                <tr>
                    <td>{{ props.UE.competences }}</td>
                </tr>
            </tbody>
        </table>
        <table border="0">
            <caption>Contenu (MATIERES)</caption>
            <tbody>
                <CaseMATnonmodifiable v-for="(mati) of mats"
                    :mat="mati"
                    @choixMAT="handlerChoixMAT"
                />
            </tbody>
        </table>
        <table border="0" id="heures">
            <caption>Format et volumes horaires</caption>
            <thead>
                <tr>
                    <th colspan="3">Volume horaire présentiel enseignant/étudiant</th>
                    <th colspan="3">Volume horaire "étudiant" <br/> (travail personnel, projet, stage)</th>
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
                    <td>{{ props.UE.volumtravailperso }}</td>
                    <td>{{ props.UE.volumprojet }}</td>
                    <td>{{ props.UE.volumstage }}</td>
                </tr>
            </tbody>
        </table>
        <table border="0" class="textLong">
            <caption>Prérequis pour suivre l'UE</caption>
            <tbody>
                <tr>
                    <td>{{ props.UE.prerequis }}</td>
                </tr>
            </tbody>
        </table>
        <table border="0" class="textLong">
            <caption>Modalités de contrôle des connaissances (Conditions de validation / Principes généraux)</caption>
            <tbody>
                <tr>
                    <td>{{ props.UE.modalitescontrole }}</td>
                </tr>
            </tbody>
        </table>
        <table border="0" class="textLong">
            <caption>Bibliographie de base</caption>
            <tbody>
                <tr>
                    <td>{{ props.UE.bibliographiedebase }}</td>
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

    h1 {
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

    #tableauUE{
        font-size: 16px; font-weight: bold; text-align: center;
    }

    #codeUE {
        width: 150px;
    }

    #ectsUE {
        width: 100px;
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

    #ord {
        width: 100px;
    }

    .textLong {
        min-height: 50px;
    }

    #heures {
        text-align: center;
    }

    #heures tr th{
        font-weight:100;
    }

    .heure {
        width: 130px;
    }

    .volum {
        width: 103px;
    }
</style>