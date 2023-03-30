<script setup>
    defineProps(["inter"]);
</script>

<template>
    <tr>
        <td>{{ inter.prenom }}</td>
        <td>{{ inter.nom }}</td>
    </tr>
</template>