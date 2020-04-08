<template>
  <v-container>
    <v-row align="center">
      <v-card class="mx-auto" max-width="344">
        <v-card-text>
          <h1>Bienvenid@ a Konecta digital</h1>
          <v-form ref="form" class="justify-center">
            <v-text-field
              color="teal"
              v-model="name"
              :rules="nameRules"
              label="Correo"
              required
              @input="message=''"
              v-on:input="messageStatus()"
            ></v-text-field>

            <v-text-field
              color="teal"
              type="password"
              v-model="password"
              :rules="passwordRules"
              label="Contraseña"
              required
              @input="message=''"
              v-on:input="messageStatus()"
            ></v-text-field>

            <v-btn color="teal" class="mr-4 white--text" x-large @click="validate">INGRESAR</v-btn>

            <p v-if="messageState" class="feedback-message color-message">{{this.message}}</p>
            <p v-else class="message-blank color-message">{{this.message}}.</p>
          </v-form>
          <div class="my-2">
            <router-link to="/Inicio">Inicio</router-link>
          </div>
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({
    messageState: false,
    message: "",
    valid: true,
    name: "",
    nameRules: [
      v => !!v || "Se requiere ingresar correo",
      v => /.+@.+\..+/.test(v) || "Por favor, ingrese un correo válido"
      //   v => (v && v.length <= 10) || "Name must be less than 10 characters"
    ],
    password: "",
    passwordRules: [v => !!v || "Requiere ingresar contraseña"]
  }),

  methods: {
    validate() {
      
      if (
        this.password == "1234" &&
        this.name == "admin@admin.com" &&
        this.$refs.form.validate()
      ) {
        // this.loginState = false;
        // this.$emit("validate", this.loginState);
        console.log("logueado");
      } else {
        this.messageState = true;
        this.message = "Contraseña o correo incorrecta";
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
        messageStatus(){
      this.messageState = false;
    }
  }
};
</script>
<style>
.color-message {
  color: #ff5252 !important;
  font-size: 12px;
  margin-top: 0.5em;
}

.message-blank {
  visibility: hidden;
}
</style>
