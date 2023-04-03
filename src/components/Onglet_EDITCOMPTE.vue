<script setup>
  import { ref } from 'vue';
  let id = ref("")
  let password = ref("")
  let email = ref("")
  let tel = ref("")
  let coordonneesDispo = ref(true)
</script>

<template>
    <img id ="logoISIS" src="src\assets\LogoISIS-Blanc.png" alt="Isislogo"/>
    <img id ="logo" src="src\assets\GrosLogo.png" alt="easyLabusLogo"/>
    <v-card
    class="mx-auto mt-9"
    style="max-width: 500px;"
  >
    <v-toolbar
      color="#ff8183"
      cards
      dark
      flat
    >
      <!-- <v-btn icon>
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn> -->
      <v-card-title 
      id="titre"
      class=" text-h6 font-weight-regular ">
        Réglages du compte
        <v-icon
      icon="mdi-account"
      ></v-icon>
      </v-card-title>

      <v-spacer></v-spacer>
      <!-- <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn> -->
    </v-toolbar>
    <v-form
      ref="form"
      v-model="form"
      class="pa-4 pt-6"
    >
    <v-text-field
        v-model="id"
        variant="filled"
        color="#ff8183"
        label="Identifiant"
        
      ></v-text-field>
      <v-text-field
        v-model="password"
        variant="filled"
        color="#ff8183"
        label="Mot de passe"
        style="min-height: 96px"
        type="password"
      ></v-text-field>
      <v-text-field
        v-model="phone"
        variant="filled"
        color="#ff8183"
        label="Téléphone"
      ></v-text-field>
      <v-text-field
        v-model="email"
        variant="filled"
        color="#ff8183"
        label="Email"
        type="email"
      ></v-text-field>
      <v-switch
        v-model="coordonneesDispo"
        label="Coordonnées disponibles sur les fiches"
        color="#ff8183"
        value=
        hide-details
        ></v-switch>
      <v-btn
        id="valider"
        color="#ff8183"
      >
        Valider
        <v-icon
          end
          icon="mdi-checkbox-marked-circle"
        ></v-icon> 
      </v-btn>
    </v-form>
    </v-card>

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

    #titre{
        justify-content: center;
        margin-left: 125px;
    }
    #valider{
        justify-content: center;
        margin-left: 175px;
    }
</style>