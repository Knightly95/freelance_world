<template>
  <v-app>
    <AppHeader></AppHeader>
    <v-main class="main-wrapper">
      <router-view />
      <v-footer dark padless class="d-block">
        <v-card flat tile class="white--text text-center">
          <v-card-text>
            <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
              <v-icon size="24px">
                {{ icon }}
              </v-icon>
            </v-btn>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-text class="white--text text-center">
            {{ new Date().getFullYear() }} —
            <span> &#9400; Copyright 2017 MundoFreelance. All Rights Reserved</span>
          </v-card-text>
        </v-card>
      </v-footer>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AppHeader from '@/common/components/AppHeader.vue';

@Component({
  name: 'App',
  components: {
    AppHeader,
  },
})
export default class App extends Vue {
  public icons = ['mdi-facebook', 'mdi-twitter', 'mdi-linkedin', 'mdi-instagram'];
}
</script>

<style lang="stylus" scoped>
.center {
  margin: 5px auto;
}
</style>
