<script setup>
    defineProps(["nom","prenom","NIVchoisi","UEchoisi","MATchoisi"]);
    
    const emit = defineEmits(["retour"]);

    function emitterRetour (retourA){
        emit("retour",retourA);
    }
</script>

<template>
    <img id ="logoISIS" src="src\assets\LogoISIS-Blanc.png" alt="Isislogo"/>
    <img id ="logo" src="src\assets\GrosLogo.png" alt="easyLabusLogo"/>
    <p>{{ prenom }}</p>
    <p>{{ nom }}</p>
    <div id="banderole">
        <div @click="emitterRetour('NIV')">{{ NIVchoisi }}</div>
        <div @click="emitterRetour('UE')">{{ UEchoisi }}</div>
        <div @click="emitterRetour('MAT')">{{ MATchoisi }}</div>
    </div>
</template>

<style scoped>
    #logo{
        width : 15%; height:5%;
        position:absolute;
        top:250px;
        left: 10px;
        margin-right: 10px;
        filter: blur(1px);
    }
    
    #logoISIS{
        width : 12%; height:12%;
        position: relative;
        top: 70px;
        filter: blur(1px);
    }

    #banderole {
        position : relative;
        top : 30px;
        height: 30px; width: 600px;
        background-color: rgb(255, 129, 131);
        border-style: solid; border-radius: 10px; border-width: 2px; border-color: rgb(255, 129, 131);
    }
</style>