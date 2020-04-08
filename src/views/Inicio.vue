<template>
  <v-app class="about">
    <v-app-bar app color="white" >
      <div class="d-flex align-center">
        <!-- <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="../assets/k.svg"
          transition="scale-transition"
          width="40"
        /> -->

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="../assets/konecta.svg"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <router-link to="/Inicio">Inicio</router-link> |
      <router-link to="/">Mis indicadores</router-link>

      <!-- <v-btn href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank" text>
        <span class="mr-2">Inicio</span>
      </v-btn>

      <v-btn href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank" text>
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn> -->
    </v-app-bar>
 

    <v-row align="center">
      <v-col class="text-center" cols="12" sm="4">
        <div class="my-2">
          <v-btn small>Normal</v-btn>
        </div>
        <div class="my-2">
          <v-btn small color="primary">Primary</v-btn>
        </div>
        <div class="my-2">
          <v-btn small color="error">Error</v-btn>
        </div>
        <div class="my-2">
          <v-btn small disabled>Disabled</v-btn>
        </div>
      </v-col>
      <v-col class="text-center" cols="12" sm="4">
       <h1>Hola, @name! </h1>
        <div class="my-2">
          <v-btn>Normal</v-btn>
        </div>
        <div class="my-2">
          <v-btn color="primary">Primary</v-btn>
        </div>
        <div class="my-2">
          <v-btn color="error">Error</v-btn>
        </div>
        <div class="my-2">
          <v-btn disabled>Disabled</v-btn>
        </div>
      </v-col>
      <v-col class="text-center" cols="12" sm="4">
        <div class="my-2">
          <v-btn large>Normal</v-btn>
        </div>
        <div class="my-2">
          <v-btn large color="primary">Primary</v-btn>
        </div>
        <div class="my-2">
          <v-btn large color="error">Error</v-btn>
        </div>
        <div class="my-2">
          <v-btn large disabled>Disabled</v-btn>
        </div>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>

export default {
  name: 'Inicio',

  components: {
  
  },

  data: () => ({
    //
  }),
};
</script>

<style>


</style>
