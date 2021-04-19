<template>
  <v-container fluid class="orange lighten-3">
    <v-container class="text-center">
      <v-layout>
        <v-flex>
          <v-layout>
            <v-flex>
              <v-img width="80" src="@/assets/img/email.png"></v-img>
            </v-flex>
            <v-flex>
              <p>E-MAIL</p>
              <p>mundofreelance@mail.com</p>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex>
          <v-layout>
            <v-flex>
              <p><span>TELÉFONO</span></p>
              <p><span>(212)123-456-789</span></p>
            </v-flex>
            <v-flex>
              <v-img class="float-right" width="80" src="@/assets/img/call.png"></v-img>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container class="">
      <v-layout>
        <v-flex pr-2><v-text-field outlined label="Name"></v-text-field></v-flex>
        <v-flex><v-text-field outlined label="Email"></v-text-field></v-flex>
        <v-flex pl-2><v-text-field outlined label="Asunto"></v-text-field></v-flex>
      </v-layout>
      <v-layout>
        <v-textarea
          outlined
          name="input-7-4"
          label="Outlined textarea"
          value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
        ></v-textarea>
      </v-layout>

      <v-layout class="text-center">
        <v-flex>
          <v-btn large dark>Send</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
// import { Prop } from "vue-property-decorator";

@Component({
  name: 'ContactUs',
  components: {},
})
export default class ContactUs extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
