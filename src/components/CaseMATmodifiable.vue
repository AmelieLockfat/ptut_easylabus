<script setup>
    defineProps(["mat","indexm"]);

    defineEmits(["delete"])
</script>

<template>
    <tr>
        <td><input type="text" :value="mat.nom"/></td>
        <td><input type="text" :value="mat.contenu"/></td>
        <input type="button" id="del" value="X" @click="$emit('delete', indexm)"/>
    </tr>
</template>