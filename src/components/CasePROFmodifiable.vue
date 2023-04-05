<script setup>
    import { ref , reactive , onMounted } from 'vue';

    import PERSONNE from "../PERSONNE";

    const props = defineProps({pers : Object, indexp : Number});

    let ident = ref(props.pers.identifiant);
    let prenom = ref(props.pers.prenom);
    let nom = ref(props.pers.nom);
    let selec = ref("");

    let perss = reactive([]);

    function getPerss (identifiantR,prenomR,nomR) {
      /*const fetchOptions = { method: "GET" };
      fetch("https://backendeasylabus.azurewebsites.net/api/personneinternnes/Search?", fetchOptions)
      .then((response) => {
        return response.json();
      })
      .then((dataJSON) => {*/
        let dataJSON = [{ identifiant:"IDENTIFIANToption1", prenompers:"PRENOMoption1", nompers:"NOMoption1"},{ identifiant:"IDENTIFIANToption2", prenompers:"PRENOMoption2", nompers:"NOMoption2" },{ identifiant:"IDENTIFIANToption3", prenompers:"PRENOMoption3", nompers:"NOMoption3" }];
        dataJSON.forEach((v) =>
          perss.push(new PERSONNE (v.identifiant, null, v.prenompers, v.nompers, v.email, v.numtel, v.coordprivee))
        );
      /*})
      .catch((error) => console.log(error));*/
    }

    onMounted(() => {
        getPerss("","","");
    });

    defineEmits(["deletePers"])
</script>

<template>
    <tr>
        <td rowspan="2" class="noms"><input type="text" required="true" v-model="ident"/></td>
        <td rowspan="2" class="noms"><input type="text" required="true" v-model="prenom"/></td>
        <td rowspan="2" class="noms"><input type="text" required="true" v-model="nom"/></td>
        <td rowspan="2">
            <select v-model="selec">
                <option v-for="(pers) of perss">{{ pers.identifiant+" | "+pers.prenom+" "+pers.nom }}</option>
            </select>
        </td>
        <td>{{ pers.email }}</td>
        <td rowspan="2" id="del"><input type="button" id="del" value="X" @click="$emit('deletePers', props.indexp)"/></td>
    </tr>
    <tr>
        <td>{{ pers.numTel }}</td>
    </tr>
</template>

<style scoped>
    .noms {
        width: 127px;
    }

    .noms input {
        width: 117px;
    }

    #del {
        width: 25px;
    }

    #del input {
        width: 15px;
    }

    select {
        width: 50px; height: 50px; color: black; background-color: rgb(136, 136, 136);
    }

    tr {
        background-color: white;
    }

    td {
        padding: 5px;
    }
</style>