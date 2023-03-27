<script setup>
    defineProps(["mat"]);

    const emit = defineEmits(["choixMAT"]);

    function emitterChoixMAT (codeMAT,intituleMAT){
        emit("choixMAT",codeMAT,intituleMAT);
    }
</script>

<template>
    <tr @click="emitterChoixMAT(mat.code,mat.nom)">
        <td>{{ mat.nom }}</td>
        <td>{{ mat.contenu }}</td>
    </tr>
</template>