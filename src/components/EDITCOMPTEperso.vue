<script setup>
  import { ref } from 'vue';

  const props = defineProps({ Utilisateur : Object })

  let ident = ref(props.Utilisateur.identifiant);
  let mdp = ref(props.Utilisateur.motDePasse);
  let prenom = ref(props.Utilisateur.prenom);
  let nom = ref(props.Utilisateur.nom);
  let email = ref(props.Utilisateur.email);
  let numTel = ref(props.Utilisateur.numTel);
  let coordonneesDispo = ref(!props.Utilisateur.coordPrivee);
  let mdpVisible = ref(false);
</script>

<template>
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
        class=" text-h6 font-weight-regular "
      >
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
          v-model="ident"
          variant="filled"
          color="#ff8183"
          label="Identifiant"
      ></v-text-field>
      <v-text-field
        v-model="mdp"
        variant="filled"
        color="#ff8183"
        label="Mot de passe"
        :append-inner-icon="mdpVisible ? 'mdi-eye-off' : 'mdi-eye'"
        :type="mdpVisible ? 'text' : 'password'"
        @click:append-inner="mdpVisible = !mdpVisible"
      ></v-text-field>
      <v-text-field
        v-model="prenom"
        variant="filled"
        color="#ff8183"
        label="Prénom"
        type="text"
      ></v-text-field>
      <v-text-field
        v-model="nom"
        variant="filled"
        color="#ff8183"
        label="Nom"
        type="text"
      ></v-text-field>
      <v-text-field
        v-model="numTel"
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
    #titre{
        justify-content: center;
        margin-left: 125px;
    }
    #valider{
        justify-content: center;
        margin-left: 175px;
    }
</style>