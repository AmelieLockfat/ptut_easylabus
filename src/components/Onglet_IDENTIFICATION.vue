<script setup>
    import { ref } from 'vue';

    const emit = defineEmits(["sub"]);
    const ident = ref("");
    const mdp = ref("");

    function emitterSub (invite){
        if (invite) {
            emit("sub",invite,null,null)
        }
        else {
            emit("sub",invite,ident.value,mdp.value)
        }
    }
</script>

<template>
    <div>
        <form @submit.prevent="emitterSub(false)">
            <input type="text" placeholder="identifiant:*" v-model="ident"/>
            <input type="text" placeholder="mot de passe:*" v-model="mdp"/>
            <input type="submit" value="Se connecter"/>
            <input type="button" value="Accéder en tant qu'invité" @click="emitterSub(true)"/>
        </form>
    </div>
</template>

<style scoped>
</style>