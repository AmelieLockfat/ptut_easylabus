<script setup>
    defineProps(["nom","prenom","NIVchoisi","UEchoisi","MATchoisi"]);
    
    const emit = defineEmits(["retour","editCompte"]);

    function emitterRetour (retourA){
        emit("retour",retourA);
    }
</script>

<template>
    <img id ="logoISIS" src="src\assets\LogoISIS-Blanc.png" alt="Isislogo"/>
    <img id ="logo" src="src\assets\GrosLogo.png" alt="easyLabusLogo"/>
    <div v-if="prenom!=null && nom!=null">
        <img id ="util" class="util" src="src\assets\Utilisateur.png" alt=""/>
        <img id ="param" class="util" src="src\assets\Paramètre.png" alt="" @click="$emit('editCompte')"/>
        <p id="prenom" v-if="prenom!='' || prenom!=null">{{ prenom }}</p>
        <p id="nom" v-if="prenom!='' || nom!=null">{{ nom }}</p>
    </div>
    <div v-else>
        <img class="util" src="src\assets\Utilisateur.png" alt=""/>
        <button id="connect" @click="emitterRetour('CONNECT')"  v-if="prenom==null && nom==null">SE CONNECTER</button>
    </div>
    <div id="banderole" v-if="NIVchoisi!=''">
        <ul>
            <li><button id="butNiv" @click="emitterRetour('NIV')">{{ NIVchoisi }} </button></li>
            <li v-if="UEchoisi!=''"><button @click="emitterRetour('UE')">{{ UEchoisi }} </button></li>
            <li v-if="MATchoisi!=''" aria-current="page"><button @click="emitterRetour('MAT')">{{ MATchoisi }} </button></li>
        </ul>
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
        /* filter: blur(1px); */
    }

    .util {
        position: absolute;
        right: 10px; top: 10px;
        height: 100px; width: 100px;
    }

    #util {
        z-index: 2;
    }

    #param {
        z-index: 1;
    }

    #util:hover {
        display: none;
    }
    #param:hover {
        z-index: 3;
    }

    p {
        color: white; font-size: 25px; text-align: right;
    }

    #prenom {
        position: absolute; top: 18px; right: 120px;
    }

    #nom {
        position: absolute; top: 68px; right: 120px;
    }

    #connect {
        position: absolute; top: 41px; right: 120px;
        color: white; font-size: 25px; text-align: right; font-family: 'Arial Black', 'Arial';
        background-color: rgba(0, 0, 0, 0); border-style: none;
    }

    #banderole {
        position : absolute;
        left: 250px; top: 17px;
        height: 80px; width: 720px;
        background-color: rgb(254, 161, 162);
        border-style: solid; border-radius: 3px; border-width: 2px;
         border-color: rgb(255, 129, 131);
         border: none;
         opacity: 0.65;
    }

    #banderole ul  {
        
        position: absolute;
        list-style: none;
         /* border-style: solid; border-color: black; */
        /* height: 60px; min-width: 100px; max-width: 500px; */
        padding-left:5px; padding-right: 5px; margin: 5px;
        text-transform: uppercase; font-size: 15px;

    }
    #banderole li+li:before{
        padding: 8px;
        color: black;
        content: "→";
        
    }
    #banderole button:hover{
        color: white;
 
    }
    button#butNiv {
        font-size: 20px;
    }
</style>