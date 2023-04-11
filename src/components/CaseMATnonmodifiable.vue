<script setup>
    defineProps(["mat"]);

    const emit = defineEmits(["choixMAT"]);

    function emitterChoixMAT (codeMAT,intituleMAT){
        emit("choixMAT",codeMAT,intituleMAT);
    }
</script>

<template>
    <tr @click="emitterChoixMAT(mat.code,mat.nom)">
        <td id="nomMat">{{ mat.nom }}</td>
        <td id="contMat">{{ mat.contenu }}</td>
    </tr>
</template>

<style scoped>
    tr:hover {
        background-color: rgb(230, 230, 230);
    }

    td {
        padding-left: 5px; padding-right: 5px;
    }

    #nomMat {
        width: 160px;
    }

    #contMat {
        min-height: 50px;
    }
</style>