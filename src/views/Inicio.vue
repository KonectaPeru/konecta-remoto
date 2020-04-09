<template>
  <v-app class="about">
    <v-app-bar app color="white">
      <div class="d-flex align-center">
        <v-img
          alt="Konecta Logo"
          class="shrink mr-2"
          contain
          src="../assets/k.svg"
          transition="scale-transition"
          width="40"
        />

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

      <router-link to="/Inicio">Inicio</router-link>|
      <router-link to="/">Mis indicadores</router-link>
      <v-btn color="teal" class="mr-4 white--text">@name</v-btn>

      <!-- <v-btn href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank" text>
        <span class="mr-2">Inicio</span>
      </v-btn>

      <v-btn href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank" text>
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>-->
    </v-app-bar>

    <div class="container-desktop">
      <div class="mx-auto col-3 column-padding">
        <v-card class="mx-auto col-12 height-200 margin-2">
          <v-card-text>
            <h1>MIS INDICADORES</h1>
            <p>¡En construcción!</p>

            <v-btn color="teal" class="mr-4 white--text form-margin ">VER INDICADORES</v-btn>
          </v-card-text>
        </v-card>
        <v-card class="mx-auto col-12 height-300">
          <v-card-text>
            <h1>MENU</h1>

            <div class="my-2 menu-link">
              <img src="../assets/link.png" alt />
              <a href="https://konecta.smartboleta.com/">SMART BOLETA</a>
            </div>
            <div class="my-2 menu-link">
              <img src="../assets/link.png" alt />
              <router-link to="/Inicio">TALENT K</router-link>
            </div>
            <div class="my-2 menu-link">
              <img src="../assets/link.png" alt />
              <a href="https://vivekonecta.pe">WORKPLACE</a>
            </div>
            <div class="my-2 menu-link">
              <img src="../assets/link.png" alt />
              <a href="https://vivekonecta.pe">VIVEKONECTA - TRAINING</a>
            </div>
            <div class="my-2 menu-link">
              <img src="../assets/link.png" alt />
              <a href="https://vivekonecta.pe">FEEDBACK</a>
            </div>
            <div class="my-2 menu-link">
              <img src="../assets/link.png" alt />
              <a href="https://vivekonecta.pe">MIS SOLICITUDES</a>
            </div>
            <div class="my-2 menu-link">
              <img src="../assets/link.png" alt />
              <a href="https://vivekonecta.pe">GESTIONAR MI HORARIO</a>
            </div>
            <div class="my-2 menu-link">
              <img src="../assets/link.png" alt />
              <a href="https://vivekonecta.pe">SOPORTE TÉCNICO</a>
            </div>
          </v-card-text>
        </v-card>
      </div>

      <v-card class="mx-auto col-3">
        <v-card-text>
          <h1>HOLA, @NAME!</h1>
          <h2>¿Cómo te sientes hoy?</h2>
          <div class="feelings-container">
            <img class="img-style" src="../assets/cry.png" alt />

            <img class="img-style" src="../assets/angry.png" alt />
            <img class="img-style" src="../assets/pokerface.png" alt />
            <img class="img-style" src="../assets/smile.png" alt />
            <img class="img-style" src="../assets/happy.png" alt />
          </div>

          <v-btn color="teal" class="mr-4 white--text form-margin" x-large>CONECTARSE</v-btn>


          <h1>NOTICIAS DEL DÍA</h1>
        </v-card-text>
      </v-card>
      <div class="mx-auto col-3 column-padding">
        <v-card class="mx-auto col-12 height-200 margin-2">
          <v-card-text>
            <h1>PRÓXIMOS EVENTOS</h1>

            <v-btn color="teal" class="mr-4 white--text form-margin">VER CALENDARIO</v-btn>
          </v-card-text>
        </v-card>
        <v-card class="mx-auto col-12 height-300">
          <v-card-text>
            <h1>Chat</h1>

          </v-card-text>
        </v-card>
      </div>
    </div>
  </v-app>
</template>

<script>
export default {
  name: "Inicio",

  components: {},

  data: () => ({
    //
  })
};
</script>

<style>
.container-desktop {
  display: flex;
  align-content: center;
  justify-content: space-around;
  flex-direction: row;
  padding-top: 96px;
}

.feelings-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 1em;
}

.form-margin{
  margin-bottom: 2em;
  margin-top: 2em;
}

.menu-link{
  display: flex;
  align-content: flex-start;
}

.img-style {
  width: 45px;
}

.container-img-style {
  border-bottom-width: 2px;
  border-bottom-color: red;
}

.height-300 {
  height: 300px;
}

.height-200 {
  height: 250px;
}

.margin-2 {
  margin-bottom: 32px;
}

.v-application--wrap {
  background-color: #fafafa !important;
}

.column-padding {
  padding: 0 !important;
}
</style>
