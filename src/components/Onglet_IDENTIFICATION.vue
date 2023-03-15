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
    <img id="logoISIS" src="src\assets\LogoISIS-Blanc.png" alt="logo ISIS"/>
    <img id="logo" src="src\assets\GrosLogo.png" alt="logo appli"/>
    <img id="coeur" src="src\assets\CoeurISIS.png" alt="logo coeur"/>

    <div id="form">
        <p>
            <img src="src\assets\Bouclier.png" alt=""/>
              Entrez votre identifiant et votre mot de passe
        </p>
        <VForm 
        class="mt-14 "
        @submit.prevent="emitterSub(false)">
            <v-text-field 
            id="ident" clearable label="Identifiant :*" prepend-icon="mdi-vuetify" ></v-text-field>
            <v-text-field
            id="mdp" clearable label="Mot de passe :*" prepend-icon="mdi-vuetify" v-model="mdp" ></v-text-field>
            <!-- <input id="ident" class="text" type="text" placeholder="Identifiant :*" v-model="ident" /> -->
            <!-- <input id="mdp" class="text" type="password" placeholder="Mot de passe :*" v-model="mdp"/> -->
            <v-btn id="vuetify" type="submit" >Se connecter</v-btn> 
            <v-btn id="vuetify" type="submit">Accéder en tant qu'invité</v-btn> 

            <!-- <input class="sub" type="submit" value="Se connecter" @click="emitterSub(true)"/> -->
            <!-- <input class="sub" type="button" value="Accéder en tant qu'invité" @click="emitterSub(true)"/> -->
        </VForm>
        </div>
            
        <div id="lign"></div>
   
</template>

<style scoped>
    #logoISIS{
        height: 170px; width: 180px;
        position: absolute;
        left: 10px; top: 10px;
        /*filter: blur(1px);*/
    }

    #logo{
        position:absolute;
        height: 70px; width: 470px;
        margin-left: 185px;
        top: 20px; left: 220px;
        
    }
    #coeur{
    position:absolute;
    height: 160px; width: 170px;
    margin-left: 45px;
    top:6px; left: 865px;

    }
    div#form {
        background-color: rgb(3, 155, 229); height: 450px; width: 700px; border-radius: 10px;
        margin-left: auto;
        margin-right: auto ;
        text-align: center;
        position : absolute;
        top: 62px; left: 290px;
        margin-top:50px;
    }

    img {
    vertical-align:middle;
    height: 35px; width: 30px;
    }

    p {
        position : relative;
        top:65px;
        color: white; font-family: "Arial","Sans serif"; font-weight: bold; font-size: 20px;
    }
   
/* #ident{
    background-color: rgba(255, 255, 255, 0); width: 600px; height: 50px;
    border-style: solid; border-color: white; border-radius: 7px; border-width: 1.5px;
    position:relative;
    top:200px;
    font-size:15px; 
    color: white;
        
}
#ident:hover{
    border-color: black;
} */

/* #mdp{
    position : relative;
    top : 200px;
    background-color: rgba(255, 255, 255, 0); width: 600px; height: 50px;
    border-style: solid; border-color: white; border-radius: 7px; border-width: 1.5px;
    font-size:15px; 
    color: white;

}
#mdp:hover{
    border-color: black;
} */

    
#vuetify {
    text-transform: uppercase; border-radius: 5px; height: 40px; width: 250px;
    background-color: #ff8183; color: white; font-family: "Arial", "Sans serif";
    border-color : white;
    margin-left: 20px;
    position : relative;
    /* top : 150px; */
}

#vuetify:hover {
    background-color: rgb(254, 151, 153);
}
/* Pas besoin si vuetify
input.sub:active {
    background-color: rgb(255, 83, 86);
    outline: none; /* Pour enlever la bordure bleu 
} */


div#lign {
    position : relative;
    left:50px;
    margin-left:255px;
    /* margin-right:none; */
    bottom: 180px;
    height: 0px; width: 600px;
    border-style: solid; border-radius: 10px; border-width: 2px; border-color: rgb(255, 129, 131);
}
</style>