<script setup>
    import { ref , reactive , onMounted } from 'vue';

    import PERSONNE from '../PERSONNE';

    import CasePROFnonmodifiable from './CasePROFnonmodifiable.vue';

    const props = defineProps({codeMAT : String, MAT : Object})

    let codeMAT = props.codeMAT;

    defineEmits(["debutEdit"]);

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
</script>

<template>
    <input class="edit" type="button" value="éditer" @click="$emit('debutEdit')"/>
    <div id="fiche">
        <h1>FICHE ENSEIGNEMENT</h1>
        <table border="1">
            <tr>
                <th>INTITULE DE L'ENSEIGNEMENT :</th>
                <td>{{ props.MAT.nom }}</td>
                <td></td>
            </tr>
        </table>
        <table border="1">
            <tr>
                <th rowspan="2">Code et Nom de l'UE</th>
                <td>{{ props.MAT.codeue }}</td>
                <th>Année d'études</th>
                <th>Semestre</th>
            </tr>
            <tr>
                <td>{{ props.MAT.intituleue }}</td>
                <td>2022/2023</td>
                <td>{{ props.MAT.numsemestre }}</td>
            </tr>
            <tr>
                <th colspan="2">Nom de l'intervenant</th>
                <th colspan="2">Coordonnées intervenant</th>
            </tr>
            <CasePROFnonmodifiable v-for="(pers) of perss"
                :pers="pers"
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
                <td>{{ props.MAT.heurecm }}</td>
                <td>{{ props.MAT.heuretd }}</td>
                <td>{{ props.MAT.heuretp }}</td>
                <td>{{ props.MAT.heuretotalencadree }}</td>
                <td>{{ props.MAT.heuretravailperso }}</td>
                <td>{{ props.MAT.coefficient }}</td>
            </tr>
        </table>
        <table border="1">
        </table>
        <table border="1">
            <tr>
                <th>Prérequis pour suivre l'enseignement :</th>
            </tr>
            <tr>
                <td>{{ props.MAT.prerequis }}</td>
            </tr>
        </table>
        <table border="1">
            <tr>
                <th>Description de l'enseignement et plan du cours</th>
            </tr>
            <tr>
                <td>{{ props.MAT.planducours }}</td>
            </tr>
        </table>
        <table border="1">
            <tr>
                <th>Modalités d'évaluation</th>
            </tr>
            <tr>
                <td>{{ props.MAT.modalitesevaluation }}</td>
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