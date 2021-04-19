<template>
  <v-container fluid class="text-center orange lighten-3">
    <h2 v-if="step === 2" style="text-align: center">Personal Info</h2>
    <h2 v-if="step === 3" style="text-align: center">Project Info</h2>
    <v-container v-if="step === 2">
      <v-card class="orange lighten-4 pa-5">
        <v-text-field outlined label="Email"></v-text-field>
        <v-text-field outlined label="Name"></v-text-field>
        <v-text-field outlined label="Company"></v-text-field>
        <v-text-field outlined label="Phone number"></v-text-field>
      </v-card>
    </v-container>
    <v-container v-if="step === 3">
      <v-card class="orange lighten-4 pa-5">
        <v-text-field outlined label="Type of Project"></v-text-field>
        <v-text-field outlined label="Service to Hire"></v-text-field>
        <v-text-field outlined label="Quality"></v-text-field>
        <v-textarea outlined class="input-ingreso" label="Description"></v-textarea>
      </v-card>
    </v-container>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
  name: 'ClientForm',
  components: {},
})
export default class ClientForm extends Vue {
  @Prop() public step!: boolean;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
