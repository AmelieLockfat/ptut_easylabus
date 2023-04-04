<script setup>
    import { ref } from 'vue';

    const props = defineProps({pers : Object, indexp : Number});

    let ident = ref(props.pers.identifiant);
    let prenom = ref(props.pers.prenom);
    let nom = ref(props.pers.nom);

    defineEmits(["deletePers"])
</script>

<template>
    <tr>
        <td rowspan="2"><input type="text" required="true" v-model="ident"/></td>
        <td rowspan="2"><input type="text" required="true" v-model="prenom"/></td>
        <td rowspan="2"><input type="text" required="true" v-model="nom"/></td>
        <td colspan="2">{{ pers.email }}</td>
        <input type="button" id="del" value="X" @click="$emit('deletePers', props.indexp)"/>
    </tr>
    <tr>
        <td colspan="2">{{ pers.numTel }}</td>
    </tr>
</template>

<style scoped>
</style>