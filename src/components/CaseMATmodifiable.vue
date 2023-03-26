<script setup>
    defineProps(["mat","indexm"]);

    defineEmits(["delete"])
</script>

<template>
    <tr>
        <td><input type="text" :value="mat.inti"/></td>
        <td><input type="text" :value="mat.cont"/></td>
        <input type="button" id="del" value="X" @click="$emit('delete', indexm)"/>
    </tr>
</template>