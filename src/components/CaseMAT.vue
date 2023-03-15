<script setup>
    defineProps(["intMat","contMat"]);

    const emit = defineEmits(["choixMAT"]);

    function emitterChoixMAT (intMat){
        emit("choixMAT",intMat);
    }
</script>

<template>
    <tr @click="emitterChoixMAT(intMat)">
        <td>{{ intMat }}</td>
        <td>{{ contMat }}</td>
    </tr>
</template>