<template>
  <v-container>
    <v-row align="center">
      <v-card class="mx-auto" max-width="344">
        <v-card-text>
          <h1>Bienvenid@ a Konecta digital</h1>
          <v-form ref="form" class="justify-center">
            <v-text-field
              class="form-margin"
              color="teal"
              v-model="email"
              :rules="emailRules"
              label="Correo"
              required
              @input="message=''"
              v-on:input="messageStatus()"
            ></v-text-field>

            <v-text-field
              class="form-margin"
              color="teal"
              type="password"
              v-model="password"
              :rules="passwordRules"
              label="Contraseña"
              required
              @input="message=''"
              v-on:input="messageStatus()"
            ></v-text-field>

            <v-btn
              color="teal"
              class="mr-4 white--text form-margin"
              x-large
              @click="validate"
            >INGRESAR</v-btn>

            <p v-if="messageState" class="feedback-message color-message">{{this.message}}</p>
            <p v-else class="message-blank color-message">{{this.message}}.</p>
          </v-form>

        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import { db } from "../db";
import firebase from "firebase";
require("firebase/auth");

export default {
  name: "login",
  firebase: {
    users: db.ref("users")
  },

  data: () => ({
    users: [],
    messageState: false,
    message: "",
    valid: true,
    email: "",
    emailRules: [
      v => !!v || "Se requiere ingresar correo",
      v => /.+@.+\..+/.test(v) || "Por favor, ingrese un correo válido"
      //   v => (v && v.length <= 10) || "Name must be less than 10 characters"
    ],
    password: "",
    passwordRules: [v => !!v || "Requiere ingresar contraseña"]
  }),

  methods: {
    validate() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(user => {
          this.$router.replace("/inicio");
          console.log(user.user.uid);
          this.$emit("idUser", user.user.uid);
        })
        .catch(err => {
          console.log(err.message);
          this.messageState = true;
          this.message = "Contraseña o correo incorrecta";
               
        });
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    messageStatus() {
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

.form-margin {
  margin-top: 2em !important;
}
</style>
