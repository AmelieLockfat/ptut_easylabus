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
        <form @submit.prevent="emitterSub(false)">
            <input id="ident" class="text" type="text" placeholder="Identifiant :*" v-model="ident" />
            <input id="mdp" class="text" type="password" placeholder="Mot de passe :*" v-model="mdp"/>
            <input class="sub" type="submit" value="Se connecter"/>
            <input class="sub" type="button" value="Accéder en tant qu'invité" @click="emitterSub(true)"/>
        </form>
        <div id="lign"></div>
    </div>
</template>

<style scoped>
    #logoISIS{
        height: 170px; width: 180px;
}
#logo{
        position:relative;
        height: 70px; width: 470px;
        margin-left: 185px;
        bottom:30px
        
}
#coeur{
    position:relative;
    height: 160px; width: 170px;
    margin-left: 45px;
    top:10px;

}
    div#form {
        background-color: rgb(3, 155, 229); height: 450px; width: 700px; border-radius: 10px;
        margin-left: auto;
        margin-right: auto ;
        text-align: center;
        position : relative;
        bottom:100px;
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
   
     #ident{
        background-color: rgba(255, 255, 255, 0); width: 600px; height: 50px;
        border-style: solid; border-color: white; border-radius: 7px; border-width: 1.5px;
        position:relative;
        top:70px;
        font-size:15px; 
        color: white;
        
    }
    #ident:hover{
        border-color: black;
    }

    #mdp{
        position : relative;
        top : 100px;
        background-color: rgba(255, 255, 255, 0); width: 600px; height: 50px;
        border-style: solid; border-color: white; border-radius: 7px; border-width: 1.5px;
        font-size:15px; 
        color: white;

    }
    #mdp:hover{
        border-color: black;
    }

    input.sub {
        text-transform: uppercase; border-radius: 5px; height: 40px; width: 250px;
        background-color: rgb(255, 129, 131); color: white; font-family: "Arial", "Sans serif";
        border-color : white;
      margin-left: 20px;
      position : relative;
        top : 150px;
    }

    input.sub:hover {
        background-color: rgb(255, 100, 103);
    }

    div#lign {
        position : relative;
        top : 140px;
        margin : 40px;
        height: 0px; width: 600px;
        border-style: solid; border-radius: 10px; border-width: 2px; border-color: rgb(255, 129, 131);
    }
</style>