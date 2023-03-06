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
    <div id="form">
        <p>
            <img src="src\assets\Bouclier.png" alt=""/>
              Entrez votre identifiant et votre mot de passe.
        </p>
        <form @submit.prevent="emitterSub(false)">
            <input id="ident" class="text" type="text" placeholder="Identifiant:*" v-model="ident"/>
            <input id="mdp" class="text" type="password" placeholder="Mot de passe:*" v-model="mdp"/>
            <input class="sub" type="submit" value="Se connecter"/>
            <input class="sub" type="button" value="Accéder en tant qu'invité" @click="emitterSub(true)"/>
        </form>
        <div id="lign"></div>
    </div>
</template>

<style scoped>
    div#form {
        background-color: rgb(3, 155, 229); height: 450px; width: 700px; border-radius: 10px;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
    }

    img {
        height: 25px; width: 21px;
    }

    p {
        color: white; font-family: "Arial","Sans serif"; font-weight: bold; font-size: 20px;
    }

    input.text {
        background-color: rgba(255, 255, 255, 0); width: 600px; height: 50px;
        color: white;
        border-style: solid; border-color: white; border-radius: 10px; border-width: 4px;
    }

    input.sub {
        text-transform: uppercase; border-radius: 5px; height: 40px; width: 250px;
        background-color: rgb(255, 129, 131); color: white; font-family: "Arial", "Sans serif";
        border-color : white;
      margin-left: 20px;
    }

    input.sub:hover {
        background-color: rgb(255, 100, 103);
    }

    div#lign {
        height: 0px; width: 600px;
        border-style: solid; border-radius: 10px; border-width: 2px; border-color: rgb(255, 129, 131);
    }
</style>