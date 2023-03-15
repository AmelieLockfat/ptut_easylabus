<script setup>
    const emit = defineEmits(["finEdit"]);
</script>

<template>
    <input type="button" value="terminer" @click="$emit('finEdit')"/>
</template>