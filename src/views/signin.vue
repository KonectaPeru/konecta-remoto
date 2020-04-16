<template>
  <v-app class="signin">
    <login></login>
  </v-app>
</template>

<script>
// @ is an alias to /src
import login from "@/components/login.vue";

export default {
  name: "signin",
  components: {
    login
  }
};
</script>
