<template>
  <v-app class="home">
    <HelloWorld></HelloWorld>
  </v-app>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  }
};
</script>
