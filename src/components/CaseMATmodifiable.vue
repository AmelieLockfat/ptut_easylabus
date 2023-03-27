<script setup>
    import { ref } from 'vue';

    const props = defineProps({nom : String, contenu : String, indexm : Number})

    defineEmits(["delete"])

    let nomMat = ref(props.nom);
    let contMat = ref(props.contenu);

    function handlerInput() {
        console.log(nomMat.value);
    }
</script>

<template>
    <tr>
        <td><input type="text" v-model="nomMat" @input="handlerInput"/></td>
        <td><input type="text" v-model="contMat"/></td>
        <input type="button" id="del" value="X" @click="$emit('delete', props.indexm)"/>
    </tr>
</template>