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
        <ul>
            <li><button id="butNiv" @click="emitterRetour('NIV')" v-if="NIVchoisi!=''">{{ NIVchoisi }}</button></li>
            <li><button @click="emitterRetour('UE')" v-if="UEchoisi!=''">{{ UEchoisi }}</button></li>
            <li aria-current="page"><button @click="emitterRetour('MAT')" v-if="MATchoisi!=''">{{ MATchoisi }}</button></li>
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
        filter: blur(1px);
    }

    #banderole {
        position : absolute;
        left: 250px; top: 17px;
        height: 80px; width: 720px;
        background-color: rgb(254, 161, 162);
        border-style: solid; border-radius: 3px; border-width: 2px;
         border-color: rgb(255, 129, 131);
         border: none;
    }

    #banderole ul  {
        
        position: absolute;

        text-align: center;
        list-style: none;
        flex-wrap: wrap;
        display: flex;
        /* border-style: solid; border-color: black;
        background-color: rgb(255, 129, 131); */
        height: 60px; min-width: 100px; max-width: 500px;
        padding-left:5px; padding-right: 5px; margin: 5px;
        text-transform: uppercase; font-size: 15px;

    }
    /* #banderole li::not(:last-child)::after{
        content: "/\00a0";
        padding: 8px;
        color: black;
    } */
    #banderole li+li:before{
        padding: 8px;
        color: black;
        content: "/\00a0";
        
    }
    #banderole li:hover{
        color: white;
 
    }

    button#butNiv {
        font-size: 20px;
    }
</style>