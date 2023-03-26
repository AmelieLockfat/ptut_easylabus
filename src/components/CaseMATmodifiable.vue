<script setup>
    defineProps(["mat","indexm"]);

    defineEmits(["delete"])
</script>

<template>
    <tr>
        <td><input type="text" v-bind:value="mat.inti"/></td>
        <td><input type="text" v-bind:value="mat.cont"/></td>
    </tr>
    <input type="button" id="del" value="X" @click="$emit('delete', indexm)"/>
</template>