<template>
  <v-app-bar app color="darkgrey" dark>
    <div class="d-flex align-center">
      <v-img
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        src="@/assets/img/logo.png"
        transition="scale-transition"
        width="150"
      />
    </div>

    <v-toolbar-items>
      <v-btn :to="{ name: 'HowItWorks' }" text>How it Works</v-btn>
      <v-btn :to="{ name: 'AboutUs' }" text>About Us</v-btn>
      <v-btn :to="{ name: 'ContactUs' }" text>Contact</v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn :to="{ name: 'SignUp' }" text>Sign in</v-btn>
      <v-btn :to="{ name: 'LogIn' }" text>Log in</v-btn>
    </v-toolbar-items>
    <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
  </v-app-bar>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'AppHeader',
  components: {},
})
export default class AppHeader extends Vue {}
</script>

<style lang="stylus" scoped>
.tab-link {
  color:white;
}
</style>
