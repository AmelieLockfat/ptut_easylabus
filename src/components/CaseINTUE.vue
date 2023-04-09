<script setup>
    defineProps(["inter"]);
</script>

<template>
    <tr>
        <td>{{ inter.prenom }}</td>
        <td>{{ inter.nom }}</td>
    </tr>
</template>

<style scoped>
    th , td {
        padding-left: 5px; padding-right: 5px;
    }
</style>