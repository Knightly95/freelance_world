<template>
  <v-container fluid class="text-center orange lighten-3">
    <h2>INGRESA EN TU CUENTA DE MUNDO FREELANCE</h2>
    <v-container class="rounded-lg grey darken-1">
      <v-container class="grey lighten-2">
        <v-text-field outlined label="User"></v-text-field>
        <v-text-field outlined label="Password"></v-text-field>
      </v-container>
    </v-container>
    <v-btn large dark class="mt-2">Send</v-btn>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
// import { Prop } from "vue-property-decorator";

@Component({
  name: 'LogIn',
  components: {},
})
export default class LogIn extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
