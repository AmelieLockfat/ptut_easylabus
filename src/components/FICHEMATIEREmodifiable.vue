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
        /*const fetchOptions = { method: "GET" };
    fetch(url, fetchOptions)
      .then((response) => {
        return response.json();
      })
      .then((dataJSON) => {*/
        let dataJSON = [{identifiant:"mprof1",prenompers:"Monsieur1",nompers:"Prof de Maths 1",numtel:"0612345678",email:"monsieur.profmaths1@univ-jfc.fr",coordprivee:true},{identifiant:"mprof2",prenompers:"Monsieur2",nompers:"Prof de Maths 2",numtel:"0612345679",email:"monsieur.profmaths2@univ-jfc.fr",coordprivee:false}];
        dataJSON.forEach((v) =>
          perss.push(new PERSONNE (v.identifiant, null, v.prenompers, v.nompers, v.email, v.numtel, v.coordprivee))
        );
    /*  })
      .catch((error) => console.log(error));*/
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
        <h1>FICHE ENSEIGNEMENT</h1>
        <table border="1">
            <tr>
                <th>INTITULE DE L'ENSEIGNEMENT :</th>
                <td><input type="text" required="true" v-model="nom"/></td>
                <td></td>
            </tr>
        </table>
        <table border="1">
            <tr>
                <th rowspan="2">Code et Nom de l'UE</th>
                <td colspan="2">{{ props.MAT.codeue }}</td>
                <th>Année d'études</th>
                <th>Semestre</th>
            </tr>
            <tr>
                <td colspan="2">{{ props.MAT.intituleue }}</td>
                <td>2022/2023</td>
                <td>{{ props.MAT.numsemestre }}</td>
            </tr>
            <tr>
                <th colspan="3">Nom de l'intervenant</th>
                <th colspan="2">Coordonnées intervenant</th>
            </tr>
            <CasePROFmodifiable v-for="(pers,index) of perss"
                :pers="pers"
                :indexp="index"
                @deletePers="handlerDelete"
            />
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
                <td><input type="number" min="0" step="1" v-model="heurecm" @input="handlerTotal"/></td>
                <td><input type="number" min="0" step="1" v-model="heuretd" @input="handlerTotal"/></td>
                <td><input type="number" min="0" step="1" v-model="heuretp" @input="handlerTotal"/></td>
                <td>{{ heuretotalencadree }}</td>
                <td><input type="number" min="0" step="1" v-model="heuretravailperso"/></td>
                <td><input type="number" min="0" step="0.1" v-model="coefficient"/></td>
            </tr>
        </table>
        <table border="1">
        </table>
        <table border="1">
            <tr>
                <th>Prérequis pour suivre l'enseignement :</th>
            </tr>
            <tr>
                <td><input type="text" v-model="prerequis"/></td>
            </tr>
        </table>
        <table border="1">
            <tr>
                <th>Description de l'enseignement et plan du cours</th>
            </tr>
            <tr>
                <td><input type="text" v-model="planducours"/></td>
            </tr>
        </table>
        <table border="1">
            <tr>
                <th>Modalités d'évaluation</th>
            </tr>
            <tr>
                <td><input type="text" v-model="modalitesevaluation"/></td>
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
        position: fixed; bottom: 19px; left: 19px;
        text-transform: uppercase; color: white;
        border-style: solid; border-color: rgb(255, 129, 131); border-width: 10px;
        font-size: 30px; font-family: "Arial"; font-weight: bold; width: 210px; height: 70px;
    }
    input.edit:hover {
        background-color: rgb(255, 129, 131); color: rgb(40, 53, 147);
    }
</style>