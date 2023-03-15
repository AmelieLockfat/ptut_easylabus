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
        <div id="divNiv" @click="emitterRetour('NIV')"><p>{{ NIVchoisi }}</p></div>
        <div @click="emitterRetour('UE')"><p>{{ UEchoisi }}</p></div>
        <div @click="emitterRetour('MAT')"><p>{{ MATchoisi }}</p></div>
    </div>
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
        /*filter: blur(1px);*/
    }

    #banderole {
        position : absolute;
        left: 250px; top: 17px;
        height: 70px; width: 720px;
        border-style: solid; border-radius: 10px; border-width: 2px; border-color: rgb(255, 129, 131);
    }

    #banderole div {
        display: inline-block;
        border-style: solid; border-color: black;
        background-color: rgb(3, 155, 229);;
        height: 60px; min-width: 60px; max-width: 315px;
        padding-left:5px; padding-right: 5px; margin: 5px; text-align: center;
        text-transform: uppercase; font-size: 15px;
    }

    #divNiv p{
        position: relative; top: 11px; font-size: 20px;
    }
</style>