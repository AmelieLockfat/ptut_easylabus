<script setup>
    defineProps(["pers"]);
</script>

<template>
    <tr>
        <td rowspan="2" class="noms">{{ pers.prenom }}</td>
        <td rowspan="2" class="noms">{{ pers.nom }}</td>
        <td>{{ pers.email }}</td>
    </tr>
    <tr>
        <td>{{ pers.numTel }}</td>
    </tr>
</template>

<style scoped>
    .noms {
        width: 190px;
    }

    tr {
        background-color: white;
    }

    td {
        padding: 5px;
    }
</style>