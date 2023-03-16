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
        <button id="butNiv" @click="emitterRetour('NIV')" v-if="NIVchoisi!=''">{{ NIVchoisi }}</button>
        <button @click="emitterRetour('UE')" v-if="UEchoisi!=''">{{ UEchoisi }}</button>
        <button @click="emitterRetour('MAT')" v-if="MATchoisi!=''">{{ MATchoisi }}</button>
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

    #banderole button {
        display: inline-block;
        border-style: solid; border-color: black;
        background-color: rgb(3, 155, 229);;
        height: 70px; min-width: 70px; max-width: 315px;
        padding-left:5px; padding-right: 5px; margin: 5px;
        text-transform: uppercase; font-size: 15px;
    }

    button#butNiv {
        font-size: 20px;
    }
</style>