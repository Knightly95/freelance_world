<template>
  <v-carousel cycle show-arrows-on-hover>
    <v-carousel-item v-for="(slide, i) in slides" :key="i" :src="slide"></v-carousel-item>
  </v-carousel>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
// import { Prop } from "vue-property-decorator";

@Component({
  name: 'Carousel',
  components: {},
})
export default class Carousel extends Vue {
  slides = [
    '@/assets/img/ana.png',
    '@/assets/img/slide2.jpg',
    '@/assets/img/slide3.jpg',
    '@/assets/img/slide4.jpg',
    '@/assets/img/slide5.jpg',
  ];
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
