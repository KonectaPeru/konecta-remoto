<template>
  <v-app class="about">
    <v-app-bar app color="white" id="nav">
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
      <router-link class="menu-margin" to="/Inicio">Inicio</router-link>
      <router-link class="menu-margin" to="/">Mis indicadores</router-link>
      <p class="userName menu-margin">{{currentUser.socialName}}</p>

      <!-- <v-btn href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank" text>
        <span class="mr-2">Inicio</span>
      </v-btn>

      <v-btn href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank" text>
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>-->
    </v-app-bar>

    <div class="container-desktop">
      <div class="mx-auto column-padding">
        <v-card class="mx-auto col-12 height-200 margin-2">
          <v-card-text>
            <h1>MIS INDICADORES</h1>
            <p>¡En construcción!</p>

            <v-btn color="teal" class="mr-4 white--text form-margin">VER INDICADORES</v-btn>
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
              <a href="https://www.workplace.com/">WORKPLACE</a>
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
            <div class="my-2 menu-link">
              <img src="../assets/logout.svg" class="menu-icons" alt />
              <a @click="logout()">CERRAR SESIÓN</a>
            </div>
          </v-card-text>
        </v-card>
      </div>

      <v-card class="mx-auto column-padding">
        <v-card-text>
          <h1 class="tittles">HOLA, {{currentUser.nombre}} {{currentUser.apellidoP}}</h1>
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
          <div
            class="chat-messages-style"
            v-for="noticia in noticias"
            v-bind:key="noticias[noticia]"
          >
            <p class="message-style">
              <strong>{{noticia.name}}-{{noticia.cargo}}:</strong>
              {{noticia.message}}
            </p>
            <p class="date-style">{{noticia.registerAt.date}} a las {{noticia.registerAt.hour}}</p>
          </div>
        </v-card-text>
      </v-card>
      <div class="mx-auto column-padding">
        <v-card class="mx-auto col-12 height-200 margin-2">
          <v-card-text>
            <h1>PRÓXIMOS EVENTOS</h1>

            <v-btn color="teal" class="mr-4 white--text form-margin">VER CALENDARIO</v-btn>
          </v-card-text>
        </v-card>
        <v-card class="mx-auto col-12 height-300">
          <v-card-text>
            <div class="chat-buttons">
              <h3>CHATS({{this.grupos.length}})</h3>
              <h3>{{this.currentChat.groupName}} ({{this.currentChat.members.length}})</h3>
            </div>
            <div ref="chatDisplay" class="center height-200 chat-style chatDisplay">
              <!-- for de mensajes
                <p><strong>{{message.user}} + ":"</strong> {{message.message}}</p>
                  <p>{{message.date}} + "a las" + {{message.hour}}</p>
              -->
              <div v-if="countMessagesOfGroup!=0">
                <div
                  class="chat-messages-style"
                  v-for="currentC in currentChat.messages"
                  v-bind:key="currentChat.messages[currentC]"
                >
                  <p class="message-style">
                    <strong>{{currentC.nameMessager}}:</strong>
                    {{currentC.message}}
                  </p>
                  <p
                    class="date-style"
                  >{{currentC.registerAt.date}} a las {{currentC.registerAt.hour}}</p>
                </div>
              </div>
              <p v-else>No hay mensajes que mostrar</p>
            </div>
            <v-form ref="form" class="send-row margin-send" v-model="valid">
              <v-text-field
                class="font-text"
                v-model="messageToSend"
                color="teal"
                :rules="[v => !!v || '']"
                required
                placeholder="Escribe aquí"
              ></v-text-field>
              <button :disabled="!valid" class="button-send" @click="sendMessage">
                <img src="../assets/send.svg" alt="enviar" class="width-40" />
              </button>

              <!-- <v-btn :disabled="!valid" color="teal" class="white--text" @click="sendMessage">send</v-btn> -->
            </v-form>
          </v-card-text>
        </v-card>
      </div>
    </div>
  </v-app>
</template>

<script>
import { news } from "../db";
import moment from "moment";
import firebase from "firebase";
require("firebase/auth");

export default {
  name: "Inicio",

  components: {},
  data: () => ({
    valid: true,
    messageToSend: "",
    currentUser: {},
    grupos: [],
    noticias: [],
    noticiasDesc: [],
    keyGrupos: [],
    userId: "",
    currentChat: {
      groupName: "",
      members: [],
      messages: []
    },
    keyCurrentChat: "",
    countMessagesOfGroup: 0
    //
  }),


  mounted() {

    // const todosRef = news    // setup adding childs and save the callback to remove it later
    // todosRef.on(
    //   'child_added',
    //   (snapshot) => {
    //     this.noticias=
    //       snapshot.val()

    //   },
    //   // we are omitting this function for simplicity reasons
     
    // )

    // console.log(this.noticias)



    // var messageDisplay = this.$refs.chatDisplay;
    // messageDisplay.scrollTop = messageDisplay.scrollHeight;
    let vm = this;

    vm.userId = firebase.auth().currentUser.uid;
    const userRef = firebase.database().ref("users/" + vm.userId);
    userRef
      .once("value", snapshot => {
        let data = snapshot.val();
        vm.currentUser = data;
      })
      .then(async function() {
        await vm.getCurrentUserGroups();
        vm.scrollToEnd();
        // firebase
        //   .database()
        //   .ref(
        //     "areas/" +
        //       vm.currentUser.area +
        //       "/cuentas/" +
        //       vm.currentUser.cuenta +
        //       "/campanias/" +
        //       vm.currentUser.campaña +
        //       "/groups/" +
        //       vm.userId
        //   )
        //   .once("value", snapshot => {
        //     let data = snapshot.val();
        //     vm.grupos.push(data);
        //     vm.currentChat = data;
        //   });
      })
      .catch(function(error) {
        console.log(error);
      });

    // vm.getCurrentChat()
    //return vm.currentUser

  },
  firebase: {
    noticias: news
  },

  methods: {
    reverseNews(){
     let news =  this.noticias.reverse();
     console.log(news)
     return news
    },
    scrollToEnd() {
      var content = this.$refs.chatDisplay;
      content.scrollTop = content.scrollHeight;
      console.log("hola");
    },
    gruposLength() {
      let length = 0;
      console.log(this.grupos);
      return length;
    },
    getCurrentUserGroups() {
      let _this = this;
      let groups = firebase
        .database()
        .ref(
          "areas/" +
            this.currentUser.area +
            "/cuentas/" +
            this.currentUser.cuenta +
            "/campanias/" +
            this.currentUser.campaña +
            "/groups/"
        );

      groups.on("value", function(snapshot) {
        snapshot.forEach(function(data) {
          _this.isMember(data.key, data.val());
        });
      });

      console.log(_this.grupos);
    },
    isMember(key, data) {
      let _this = this;
      let member = [];
      data.members.forEach(function(element) {
        if (element == _this.userId) {
          _this.keyGrupos.push(key);
          _this.grupos.push(data);
          member.push(data);
          _this.getCurrentChat(key, data);
        }
      });
      console.log(member);
    },
    getCurrentChat(key, data) {
      let _this = this;
      if (data.groupName == "Equipo") {
        _this.keyCurrentChat = key;
        _this.currentChat = data;
        _this.countMessages(data);
      }
    },
    sendMessage() {
      this.grupos = [];
      let date = new Date();
      let dateString = moment().format("L");
      let hour = date.getHours() + ":" + date.getMinutes() + "";
      const registerAt = {
        date: dateString,
        hour: hour
      };

      let message = {
        registerAt: registerAt,
        message: this.messageToSend,
        nameMessager: this.currentUser.socialName
      };

      let chat = this.getChat(); //return firebase ref or id
      const messageKey = chat.push().key;
      chat.child(messageKey).set(message);
      this.messageToSend = "";
      console.log(registerAt);
    },
    getChat() {
      let chat = firebase
        .database()
        .ref(
          "areas/" +
            this.currentUser.area +
            "/cuentas/" +
            this.currentUser.cuenta +
            "/campanias/" +
            this.currentUser.campaña +
            "/groups/" +
            this.keyCurrentChat +
            "/messages/"
        );
      return chat;
    },
    countMessages(data) {
      let _this = this;
      let counter = 0;
      for (let message in data.messages) {
        console.log(message);
        counter++;
      }
      _this.countMessagesOfGroup = counter;
      console.log(counter);
    },
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace("signin");
        });
    }
  }
};
</script>

<style lang="scss">
.width-40 {
  width: 25px;
  filter: invert(41%) sepia(97%) saturate(414%) hue-rotate(125deg)
    brightness(93%) contrast(102%);
}

.width-40:hover {
  filter: invert(78%) sepia(9%) saturate(2497%) hue-rotate(98deg)
    brightness(79%) contrast(91%);
}

.button-send {
}

.menu-icons {
  width: 15px;
}

.menu-margin {
  margin-left: 10px !important;
}

.userName {
  color: #42b983;
  font-weight: 550;
  margin-bottom: 0 !important;
}

.tittles {
  margin-top: 12px;
}
.v-input__control {
  max-width: 95% !important;
}
.container-desktop {
  display: flex;
  align-content: center;
  justify-content: space-around;
  flex-direction: row;
  padding-top: 96px;
}
.font-text {
  font-size: 12px !important;
}
.feelings-container,
.send-row {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 0.5em;
  width: 100%;
}

.v-text-field {
  padding-top: 0 !important;
  margin-top: 0 !important;
}

.chat-buttons {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.chat-style {
  border-width: 1px;
  border-color: #e0e0e0;
  border-style: solid;
  border-radius: 5px;
  margin-top: 1em;
  width: 100%;
  overflow: auto;
}

.chat-messages-style {
  text-align: left;
}

.message-style {
  margin-bottom: 0px !important;
  font-size: 12px !important;
}

.date-style {
  font-size: 8px !important;
  margin-top: -5px !important;
  margin-bottom: 8px !important;
}

.messages-style-right {
  text-align: right;
}

.messages-style-left {
  text-align: left;
}

.v-card__text {
  padding: 0 !important;
}

.chat-buttons h3:hover {
  color: #42b983;
  cursor: pointer;
}

.form-margin {
  margin-bottom: 2em;
  margin-top: 2em;
}

.menu-link {
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

.height-250 {
  height: 250px;
}

.height-200 {
  height: 200px;
}

.margin-2 {
  margin-bottom: 32px;
}

.v-application--wrap {
  background-color: #fafafa !important;
}

.column-padding {
  padding: 0 !important;
  width: 30%;
}

#nav {
  padding: 0;
  a {
    font-weight: bold;
    color: #2c3e50;
    // router-link-exact-active (?)
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

a {
  font-weight: bold !important;
  color: #2c3e50 !important;
  // router-link-exact-active (?)
}
a:active {
  color: #42b983 !important;
}
a:hover {
  color: #42b983 !important;
}

/* width */
.chat-style::-webkit-scrollbar {
  width: 10px !important;
}

/* Track */
.chat-style::-webkit-scrollbar-track {
  box-shadow: 20px 20px 50px 10px rgba(#009688, 0.2) inset;
  border-radius: 5px !important;
}

/* Handle */
.chat-style::-webkit-scrollbar-thumb {
  background: rgba(#009688, 0.5) !important;
  border-radius: 10px !important;
}

/* Handle on hover */
.chat-style::-webkit-scrollbar-thumb:hover {
  background: #42b983 !important;
}

//media queries
@media (max-width: 767px) {
  .container-desktop {
    flex-direction: column;
  }

  .column-padding {
    width: 90%;
  }
}
</style>
