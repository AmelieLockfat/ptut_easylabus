<script setup>
  const emit = defineEmits(["submit"]);

  function handlerSubmit (){
    emit("submit");
  }
</script>

<template>
<v-card
      class="mx-auto mt-9"
      style="max-width: 500px;"
    >
    <v-toolbar
      color="rgb(3, 155, 229)"
      cards
      dark
      flat
    >
      <!-- <v-btn icon>
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn> -->
      <v-card-title 
        id="ajouterCompte"
        class=" text-h6 font-weight-regular "
      >
        Création d'un compte
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-person-fill-add" viewBox="0 0 16 16">
  <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Zm-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
  <path d="M2 13c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Z"/>
</svg>

      </v-card-title>

      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-toolbar>
    <v-form
      ref="form"
      v-model="form"
      class="pa-4 pt-6"
    >
      <v-text-field
          v-model="ident"
          variant="filled"
          color="rgb(3, 155, 229)"
          label="Identifiant"
      ></v-text-field>
      <v-text-field
        v-model="mdp"
        variant="filled"
        color="rgb(3, 155, 229)"
        label="Mot de passe"
        :append-inner-icon="mdpVisible ? 'mdi-eye-off' : 'mdi-eye'"
        :type="mdpVisible ? 'text' : 'password'"
        @click:append-inner="mdpVisible = !mdpVisible"
      ></v-text-field>
      <v-text-field
        v-model="prenom"
        variant="filled"
        color="rgb(3, 155, 229)"
        label="Prénom"
        type="text"
      ></v-text-field>
      <v-text-field
        v-model="nom"
        variant="filled"
        color="rgb(3, 155, 229)"
        label="Nom"
        type="text"
      ></v-text-field>
      <v-text-field
        v-model="numTel"
        variant="filled"
        color="rgb(3, 155, 229)"
        label="Téléphone"
      ></v-text-field>
      <v-text-field
        v-model="email"
        variant="filled"
        color="rgb(3, 155, 229)"
        label="Email"
        type="email"
      ></v-text-field>
        <v-btn
        id="boutonCreer"
        color="rgb(3, 155, 229)"
        @click="handlerSubmit"
      >
        Créer le compte
        <v-icon
          end
          icon="mdi-checkbox-marked-circle"
        ></v-icon>
      </v-btn>
    </v-form>
    </v-card>
</template>

<style scoped>
#ajouterCompte{
        justify-content: center;
        margin-left: 110px;
    }
    #boutonCreer{
        /* justify-content: center; */
        margin-left: 130px;
    }
</style>