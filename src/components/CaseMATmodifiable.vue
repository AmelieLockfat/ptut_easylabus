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
        <td id="cod"><input id="incod" type="text" required="true" v-model="codeMat" @input="$emit('inputMat', codeMat, nomMat, contMat, props.indexm)"/></td>
        <td id="nom"><input id="innom" type="text" required="true" v-model="nomMat" @input="$emit('inputMat', codeMat, nomMat, contMat, props.indexm)"/></td>
        <td><textarea v-model="contMat" @input="$emit('inputMat', codeMat, nomMat, contMat, props.indexm)"/></td>
        <input type="button" id="del" value="X" @click="$emit('deleteMat', props.indexm)"/>
    </tr>
</template>

<style scoped>
    td {
        padding-left: 5px; padding-right: 5px;
    }

    #cod {
        width: 80px;
    }

    #incod {
        width: 70px;
    }

    #nom {
        width: 160px;
    }

    #innom {
        width: 150px;
    }

    textarea {
        resize: none; width: 440px; height: 50px;
    }
</style>