<script setup>
    import { reactive , ref , onMounted } from 'vue';
    
    import PETITEMATIERE from "../PETITEMATIERE";
    import PERSONNE from "../PERSONNE";

    import CaseMATmodifiable from "./CaseMATmodifiable.vue";
    import CaseINTUE from "./CaseINTUE.vue";

    const props = defineProps({codeUE : String, UE : Object, Responsable : Object})

    let codeUE = props.codeUE;
    
    const emit = defineEmits(["finEdit"]);

    let mats = reactive([]);
    let ints = reactive([]);
    let int0 = ref(new PERSONNE())

    let code = ref(props.UE.code)
    let intitule = ref(props.UE.intitule)
    let creditsects = ref(props.UE.creditsects);
    let numsemestre = ref(props.UE.numsemestre);
    let ordre = ref(props.UE.ordre)
    let motscles = ref(props.UE.motscles);
    let competences = ref(props.UE.competences);
    let volumtravailperso = ref(props.UE.volumtravailperso);
    let volumprojet = ref(props.UE.volumprojet);
    let volumstage = ref(props.UE.volumstage);
    let prerequis = ref(props.UE.prerequis);
    let modalitescontrole = ref(props.UE.modalitescontrole);
    let bibliographiedebase = ref(props.UE.bibliographiedebase);

    function getMats (codeUE) {
        /*const fetchOptions = { method: "GET" };
    fetch(url, fetchOptions)
      .then((response) => {
        return response.json();
      })
      .then((dataJSON) => {*/
        console.log(codeUE);
        let dataJSON = [{codeens:"E1-1-SFPH-1",nomens:"Mathématiques Analyse 1",contenu:"Cet enseignement aborde l'étude des fonctions, la trigonométrie, les suites réelles et complexes ainsi que les équations différentielles du premier et second ordre à coefficients complexes."},{codeens:"E1-1-SFPH-2",nomens:"Electricité 1",contenu:"Différentes caractéristiques de signaux Loi d'ohm en régime stationnaire puis en régime sinusoïdal. Lois de Kirchhoff, théorèmes de superposition, de Thévenin, de Norton et de Millman. Oscilloscope, multimètre. Représentation complexe des signaux sinusoïdaux."},{codeens:"E1-1-SFPH-3",nomens:"Mécanique physique",contenu:"Mécanique du point : vecteurs OM, vitesse, accélération. La loi fondamentale de la dynamique. énergie cinétique et énergie mécanique. relation force - énergie potentielle"},{codeens:"E1-1-SFPH-4",nomens:"Optique",contenu:"Savoir déterminer le trajet suivi par la lumière (modèle du rayon lumineux) lorsqu’elle est réfractée ou réfléchie (lame de verre et dioptres) Dans l’approximation de Gauss, savoir déterminer, à partir d'objets réels et virtuels, la position et la taille des images correspondantes théoriquement et graphiquement. Contenu : - Fondements de l’optique géométrique : principe de Fermat, lois de Descartes Formation des images - Dioptres et miroirs sphériques"}];
        dataJSON.forEach((v) =>
          mats.push(new PETITEMATIERE (v.codeens, v.nomens, v.contenu))
        );
    /*  })
      .catch((error) => console.log(error));*/
    }

    function getInts (codeUE) {
        /*const fetchOptions = { method: "GET" };
    fetch(url, fetchOptions)
      .then((response) => {
        return response.json();
      })
      .then((dataJSON) => {*/
        let dataJSON = [{identifiant:"edupuis",prenompers:"Erik",nompers:"Dupuis"},{identifiant:"eduba",prenompers:"Erika",nompers:"Duba"},{identifiant:"hdurant",prenompers:"Henri",nompers:"Durant"}];
        int0 = new PERSONNE (dataJSON[0].identifiant, null, dataJSON[0].prenompers, dataJSON[0].nompers, null, null, null);
        dataJSON.forEach((v) =>
          ints.push(new PERSONNE (v.identifiant, null, v.prenompers, v.nompers, null, null, null))
        );
    /*  })
      .catch((error) => console.log(error));*/
    }

    function getAll(codeUE) {
        getMats(codeUE);
        getInts(codeUE);
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
</script>

<template>
    <input class="edit" type="button" value="terminer" @click="$emit('finEdit')"/>
    <div id="fiche">
        <input type="text" v-model="intitule"/>
        <table border="1">
            <thead>
                <tr>
                    <th>Code UE</th>
                    <th>Intitulé UE</th>
                    <th>Crédits ECTS</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><input type="text" v-model="code"/></td>
                    <td><input type="text" v-model="intitule"/></td>
                    <td><input type="number" v-model="creditsects"/></td>
                </tr>
            </tbody>
        </table>
        <table border="1">
            <thead>
                <tr>
                    <th colspan="2">Responsable pédagogique de l'UE</th>
                    <th colspan="2">Principaux intervenants</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td :rowspan="ints.length">{{ props.Responsable.prenom }}</td>
                    <td :rowspan="ints.length">{{ props.Responsable.nom }}</td>
                    <td>{{ int0.prenom }}</td>
                    <td>{{ int0.nom }}</td>
                </tr>
                <CaseINTUE  v-for="(int) of ints.slice(1)"
                    :inter="int"
                />
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
                    <td><input type="number" v-model="numsemestre"/></td>
                    <td><input type="number" v-model="ordre"/></td>
                </tr>
            </tbody>
        </table>
        <table border="1">
            <caption>Mots-clés (RNCP)</caption>
            <tbody>
                <tr>
                    <td><input type="text" v-model="motscles"/></td>
                </tr>
            </tbody>
        </table>
        <table border="1">
            <caption>Compétences (RNCP)</caption>
            <tbody>
                <tr>
                    <td><input type="text" v-model="competences"/></td>
                </tr>
            </tbody>
        </table>
        <table border="1">
            <caption>Contenu (MATIERES)</caption>
            <tbody>
                <CaseMATmodifiable v-for="(mat, index) of mats"
                    :mat="mat"
                    :indexm="index"
                    @deleteMat="handlerDelete"
                    @inputMat="handlerInput"
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
                    <td>{{ props.UE.heurecm }}</td>
                    <td>{{ props.UE.heuretd }}</td>
                    <td>{{ props.UE.heuretp }}</td>
                    <td><input type="number" v-model="volumtravailperso"/></td>
                    <td><input type="number" v-model="volumprojet"/></td>
                    <td><input type="number" v-model="volumstage"/></td>
                </tr>
            </tbody>
        </table>
        <table border="1">
            <caption>Prérequis pour suivre l'UE</caption>
            <tbody>
                <tr>
                    <td><input type="text" v-model="prerequis"/></td>
                </tr>
            </tbody>
        </table>
        <table border="1">
            <caption>Modalités de contrôle des connaissances (Conditions de validation / Principes généraux)</caption>
            <tbody>
                <tr>
                    <td><input type="text" v-model="modalitescontrole"/></td>
                </tr>
            </tbody>
        </table>
        <table border="1">
            <caption>Bibliographie de base</caption>
            <tbody>
                <tr>
                    <td><input type="text" v-model="bibliographiedebase"/></td>
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
        position: fixed; bottom: 19px; left: 19px;
        text-transform: uppercase; color: white;
        border-style: solid; border-color: rgb(255, 129, 131); border-width: 10px;
        font-size: 30px; font-family: "Arial"; font-weight: bold; width: 210px; height: 70px;
    }
    input.edit:hover {
        background-color: rgb(255, 129, 131); color: rgb(40, 53, 147);
    }
</style>