<script setup>
    import { ref } from 'vue';

    const props = defineProps({mat : Object, indexm : Number})

    defineEmits(["deleteMat","inputMat"])

    let codeMat = ref(props.mat.code);
    let nomMat = ref(props.mat.nom);
    let contMat = ref(props.mat.contenu);
</script>

<template>
    <tr>
        <td><input type="text" v-model="codeMat" @input="$emit('inputMat', codeMat, nomMat, contMat, props.indexm)"/></td>
        <td><input type="text" v-model="nomMat" @input="$emit('inputMat', codeMat, nomMat, contMat, props.indexm)"/></td>
        <td><input type="text" v-model="contMat" @input="$emit('inputMat', codeMat, nomMat, contMat, props.indexm)"/></td>
        <input type="button" id="del" value="X" @click="$emit('deleteMat', props.indexm)"/>
    </tr>
</template>