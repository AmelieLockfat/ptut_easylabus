<script setup>
    import { ref } from 'vue';

    const emit = defineEmits(["sub"]);
    const ident = ref("");
    const mdp = ref("");
    const mdpVisible=ref(false);

    function emitterSub (){
        const fetchOptions = { method: "GET" };
        fetch("https://backendeasylabus.azurewebsites.net/api/personneinternes/connect?identifiant="+ident.value+"&motdepasse="+mdp.value, fetchOptions)
            .then((response) => {
                return response.json();
            })
            .then((dataJSON) => {
                if (dataJSON){
                    emit("sub",false,ident.value,mdp.value);
                }
                else {
                    alert ("IDENTIFIANT ou MOT DE PASSE incorrecte")
                }
            })
            .catch((error) => console.log(error));
    }
</script>

<template>
    <img id="logoISIS" src="\src\assets\LogoISIS-Blanc.png" alt="logo ISIS"/>
    <img id="logo" src="\src\assets\GrosLogo.png" alt="logo appli"/>
    <img id="coeur" src="\src\assets\CoeurISIS.png" alt="logo coeur"/>

    <div id="form">
        <p>
            <img src="src\assets\Bouclier.png" alt=""/>
              Entrez votre identifiant et votre mot de passe
        </p>

        <br>
        
        <VForm class="ma-10">
        
        <v-text-field 
            v-model="ident"
            :rules="[v => !!v || 'Vous devez entrer votre identifiant.']"
            class="login" clearable label="Identifiant :*" variant="outlined" >
        </v-text-field>
            
            
        <v-text-field
            v-model="mdp"
            :append-inner-icon="mdpVisible ? 'mdi-eye-off' : 'mdi-eye'"
            :type="mdpVisible ? 'text' : 'password'"
            @click:append-inner="mdpVisible = !mdpVisible"
            :rules="[v => !!v || 'Vous devez entrer votre mot de passe.']"
            class="login" label="Mot de passe :*" variant="outlined">
        </v-text-field>
        <br>

            <!-- <input id="ident" class="text" type="text" placeholder="Identifiant :*" v-model="ident" /> -->
            <!-- <input id="mdp" class="text" type="password" placeholder="Mot de passe :*" v-model="mdp"/> -->
        
        </VForm>
    <VForm
    class="my-10">
        
            <v-btn id="vuetify" type="button" @click="emitterSub">Se connecter</v-btn> 
            <v-btn id="vuetify" type="button" @click="$emit('sub',true,null,null)">Accéder en tant qu'invité</v-btn> 
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
        top:55px;
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
.login:active{
    color:#ff8183;
}
    
#vuetify {
    text-transform: uppercase; border-radius: 5px; height: 40px; width: 250px;
    background-color: #ff8183; color: white; font-family: "Arial", "Sans serif";
    border-color : white;
    margin-left: 20px;
    position : relative;
     bottom : 40px; 
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
    position : absolute;
    left:90px;
    margin-left:255px;
    /* margin-right:none; */
    bottom:140px;
    height: 0px; width: 600px;
    border-style: solid; border-radius: 10px; border-width: 2px; border-color: rgb(255, 129, 131);
}

</style>