<script setup>
  import EDITCOMPTEperso from "./EDITCOMPTEperso.vue"
  import EDITCOMPTEautre from "./EDITCOMPTEautre.vue"

  defineProps(["Utilisateur","editPerso"])
</script>

<template>
    <img id ="logoISIS" src="src\assets\LogoISIS-Blanc.png" alt="Isislogo"/>
    <img id ="logo" src="src\assets\GrosLogo.png" alt="easyLabusLogo"/>
    <EDITCOMPTEperso :Utilisateur="Utilisateur" v-if="editPerso"/>
    <EDITCOMPTEautre v-else/>

    


</template>

<style scoped>
    #logo{
        width : 180px; height: 27px;
        position:absolute;
        top:200px; left: 10px;
        margin-right: 10px;
        /*filter: blur(1px);*/
    }
    
    #logoISIS{
        height: 170px; width: 180px;
        position: absolute;
        left: 10px; top: 10px;
        /* filter: blur(1px); */
    }
   
</style>