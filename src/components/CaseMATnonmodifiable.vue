<script setup>
    defineProps(["codMat","intMat","contMat"]);

    const emit = defineEmits(["choixMAT"]);

    function emitterChoixMAT (codeMAT,intituleMAT){
        emit("choixMAT",codeMAT,intituleMAT);
    }
</script>

<template>
    <tr @click="emitterChoixMAT(codMat,intMat)">
        <td>{{ intMat }}</td>
        <td>{{ contMat }}</td>
    </tr>
</template>