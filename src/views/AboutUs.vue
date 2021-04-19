<template>
  <v-container fluid class="orange lighten-3">
    <v-container>
      <v-layout>
        <v-flex sm6 pa-3>
          <v-card color="orange lighte">
            <v-layout>
              <v-flex sm6>
                <v-img
                  class="white--text align-end"
                  height="200px"
                  src="@/assets/aboutus/control.png"
                >
                </v-img>
              </v-flex>
              <v-flex sm6>
                <v-card-subtitle class="pb-0"><b>Mayor Control de Proyectos</b> </v-card-subtitle>
                <v-card-text class="text--primary">
                  <p>
                    Agilizamos la gestion de proyectos. Te asignamos al profesional aptop para tu
                    proyecto y una vez validada la tarea, podras hacerle seguimiento facilmente a
                    travez de nuestro panel.
                  </p>
                </v-card-text>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
        <v-flex sm6 pa-3>
          <v-card color="orange lighte">
            <v-layout>
              <v-flex sm6>
                <v-img
                  class="white--text align-end"
                  height="200px"
                  src="@/assets/aboutus/reduccion.png"
                >
                </v-img>
              </v-flex>
              <v-flex sm6>
                <v-card-subtitle class="pb-0"><b>Mayor Control de Proyectos</b> </v-card-subtitle>
                <v-card-text class="text--primary">
                  <b>Reduccion de Riesgos</b>
                  <p>
                    Trabajando con nuestra red de profesionales certificados y nuestro panel de
                    control, garantizamos que tu proyecto se realizara en tiempo, calidad y coste
                  </p>
                </v-card-text>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex sm8>
          <v-container>
            <v-layout pb-3>
              <v-card color="orange lighte">
                <v-card-subtitle class="pb-0">
                  <b>Confidencialidad</b>
                </v-card-subtitle>
                <v-card-text class="text--primary">
                  <p>
                    La informacion de tu proyecto se compartira solamente con el profesional
                    seleccionado. No aparecera publicamente en nuestra pagina
                  </p>
                </v-card-text>
              </v-card>
            </v-layout>
            <v-layout pt-3>
              <v-flex sm6 pr-3>
                <v-card color="orange lighte">
                  <v-card-subtitle class="pb-0">
                    <b>100% profesionales certificados</b>
                  </v-card-subtitle>
                  <v-card-text class="text--primary">
                    <p>
                      Validamos las habilidades experiencia y conocimientos de cada uno de los
                      profesionales. Cada caso en particular lo analizamos con sumo cuidado e
                      importancia.
                    </p>
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex sm6 pl-3>
                <v-card color="orange lighte">
                  <v-card-subtitle class="pb-0">
                    <b>Estimadora de Precios</b>
                  </v-card-subtitle>
                  <v-card-text class="text--primary">
                    <p>
                      Estimamos un presupuesto basandonos en los estandares internacionales, siempre
                      pensando en el bienestar del cliente y del diseñador, asi garantizamos el
                      mejor precio/calidad del mercado
                    </p>
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
        <v-flex sm4>
          <v-container>
            <v-card color="orange lighte">
              <v-img
                class="white--text align-end"
                height="135"
                src="@/assets/aboutus/optimizacion.png"
              >
              </v-img>
              <v-card-subtitle class="pb-0"><b>Optimizacion de costes</b> </v-card-subtitle>
              <v-card-text class="text--primary">
                <p>
                  Contamos con una red de profesionales aptos para todo tipo de proyecto. Trabajamos
                  con diseñadores de todo el mundo y gracias a eso encontraremos una solucion
                  adaptada a tu presupuesto.
                </p>
              </v-card-text>
            </v-card>
          </v-container>
        </v-flex>
      </v-layout>
    </v-container>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
// import { Prop } from "vue-property-decorator";

@Component({
  name: 'AboutUs',
  components: {},
})
export default class AboutUs extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
