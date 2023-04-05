<script setup>
    defineProps(["pers"]);
</script>

<template>
    <tr>
        <td rowspan="2">{{ pers.prenom }}</td>
        <td rowspan="2">{{ pers.nom }}</td>
        <td colspan="2">{{ pers.email }}</td>
    </tr>
    <tr>
        <td colspan="2">{{ pers.numTel }}</td>
    </tr>
</template>

<style scoped>
    tr {
        background-color: white;
    }

    td {
        padding: 5px;
    }
</style>