<script setup>
    defineProps(["nom","prenom","NIVchoisi","UEchoisi","MATchoisi"]);
    
    const emit = defineEmits(["retour"]);

    function emitterRetour (retourA){
        emit("retour",retourA);
    }
</script>

<template>
    <p>{{ prenom }}</p>
    <p>{{ nom }}</p>
    <div>{{ NIVchoisi }}</div>
    <div>{{ UEchoisi }}</div>
    <div>{{ MATchoisi }}</div>
</template>

<style scoped>
</style>