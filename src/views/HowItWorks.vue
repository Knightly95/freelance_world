<template>
  <div>
    <v-container class="orange lighten-3" fluid>
      <v-layout class="text-center">
        <v-flex>
          <v-card ma-0 width="200px" @click="changeStep(1)">
            <v-img src="@/assets/como/big1.png"> </v-img>
            <v-card-subtitle> Descripcion del Proyecto </v-card-subtitle>
          </v-card>
        </v-flex>
        <v-flex class="alignS-center"
          ><v-btn fab dark small>
            <v-icon dark> mdi-arrow-right </v-icon>
          </v-btn></v-flex
        >
        <v-flex>
          <v-card ma-0 width="200px" @click="changeStep(2)">
            <v-img src="@/assets/como/big2.png"> </v-img>
            <v-card-subtitle> Validacion del Proyecto </v-card-subtitle>
          </v-card>
        </v-flex>
        <v-flex class="alignS-center"
          ><v-btn fab dark small>
            <v-icon dark> mdi-arrow-right </v-icon>
          </v-btn></v-flex
        >
        <v-flex>
          <v-card ma-0 width="200px" @click="changeStep(3)">
            <v-img src="@/assets/como/big3.png"> </v-img>
            <v-card-subtitle>Asignacion del Diseñador </v-card-subtitle>
          </v-card>
        </v-flex>
        <v-flex class="alignS-center"
          ><v-btn fab dark small>
            <v-icon dark> mdi-arrow-right </v-icon>
          </v-btn></v-flex
        >
        <v-flex>
          <v-card ma-0 width="200px" @click="changeStep(4)">
            <v-img src="@/assets/como/big4.png"> </v-img>
            <v-card-subtitle> Desarrollo del Proyecto </v-card-subtitle>
          </v-card>
        </v-flex>
        <v-flex class="alignS-center"
          ><v-btn fab dark small>
            <v-icon dark> mdi-arrow-right </v-icon>
          </v-btn></v-flex
        >
        <v-flex>
          <v-card ma-0 width="200px" @click="changeStep(5)">
            <v-img src="@/assets/como/big5.png"> </v-img>
            <v-card-subtitle>Pagos</v-card-subtitle>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container v-if="currentStep !== 0" fluid class="grey">
      <v-container v-if="currentStep === 1">
        <v-card color="orange lighten-2">
          <v-layout>
            <v-flex>
              <v-img width="300" src="@/assets/como/big1.png"> </v-img>
            </v-flex>
            <v-flex>
              <v-card-title class="pb-0">
                <b>Descripción del proyecto lo más detallada posible.</b>
              </v-card-title>
              <v-card-text class="body-1">
                <p>
                  Facilita todos los detalles que puedas sobre tu proyecto. Cuando mejor expliques
                  lo que necesitas, mas rapido lo validaremos y recibiras una propuesta firme. Por
                  favor, indica el presupuesto aproximado del que dispones. Su hay alguna referencia
                  actual similar a tu proyecto, comunicalo.
                </p>
              </v-card-text>
            </v-flex>
          </v-layout>
        </v-card>
      </v-container>
      <v-container v-if="currentStep === 2">
        <v-card color="orange lighten-2">
          <v-layout>
            <v-flex>
              <v-img width="300" src="@/assets/como/big2.png"> </v-img>
            </v-flex>
            <v-flex>
              <v-card-title class="pb-0">
                <b>Validación de tu proyecto</b>
              </v-card-title>
              <v-card-text class="body-1">
                <p>
                  Después de que solicites tu proyecto, pasaras por el proceso de validacion
                  personalizado por nuestro equipo de trabajo. Con esto nos aseguramos de que
                  obtengas realmente una propuesta a medida de tu proyecto.
                </p>
                <p>
                  Este proceso es de duración variable, y dependera de la informacion que nos hagas
                  llegar y de tu disponibilidad para responder nuestras dudas.
                </p>
              </v-card-text>
            </v-flex>
          </v-layout>
        </v-card>
      </v-container>
      <v-container v-if="currentStep === 3">
        <v-card color="orange lighten-2">
          <v-layout>
            <v-flex>
              <v-img width="300" src="@/assets/como/big3.png"> </v-img>
            </v-flex>
            <v-flex>
              <v-card-title class="pb-0">
                <b>Asignación del personal capacitado</b>
              </v-card-title>
              <v-card-text class="body-1">
                <p>
                  Una vez validado tu proyecto, lo asignaremos a un profesional certificado y
                  conjuntamente te proporcionaremos una propuesta oficial.
                </p>
                <p>
                  La propuesta oficial contendrá una descripcion detallada del proyecto asi como de
                  las tecnologias a aplicar para su realizacion, una explicación general de parte
                  del personal encargado del proyecto, asi como de los pagos, tiempos de entrega y
                  demas puntos esenciales para el desarrollo del proyecto.
                </p>
              </v-card-text>
            </v-flex>
          </v-layout>
        </v-card>
      </v-container>
      <v-container v-if="currentStep === 4">
        <v-card color="orange lighten-2">
          <v-layout>
            <v-flex>
              <v-img width="300" src="@/assets/como/big4.png"> </v-img>
            </v-flex>
            <v-flex>
              <v-card-title class="pb-0">
                <b>Desarrollo del proyecto</b>
              </v-card-title>
              <v-card-text class="body-1">
                <p>Te Asignamos en tu panel interno al profesional seleccionado</p>
                <p>
                  para que puedas interactuar con él desde el primer dia, resolver dudas, aceptar la
                  propuesta y seguir el avance del proyecto de forma regular.
                </p>
              </v-card-text>
            </v-flex>
          </v-layout>
        </v-card>
      </v-container>
      <v-container v-if="currentStep === 5">
        <v-card color="orange lighten-2">
          <v-layout>
            <v-flex>
              <v-img width="300" src="@/assets/como/big5.png"> </v-img>
            </v-flex>
            <v-flex>
              <v-card-title class="pb-0">
                <b>Pagos</b>
              </v-card-title>
              <v-card-text class="body-1">
                <p>
                  Contamos con diferentes formas de pago para que se ajusten a tus posibilidades.
                </p>
                <p>Elige una de las diferentes plataformas de pago que te ofrecemos</p>
                <p>
                  Moneda small-image
                  <v-icon></v-icon>
                  <img src="@/assets/como/paypal.png" alt="" class="small-image" />
                  <img src="@/assets/como/payoneer.png" alt="" class="small-image" />
                  <img src="@/assets/como/ingbank.png" alt="" class="small-image" />
                </p>
                <p>
                  Bancos Online
                  <img src="@/assets/como/activo.png" alt="" class="small-image-2" />
                  <img src="@/assets/como/openbank.png" alt="" class="small-image" />
                </p>
                <p>
                  Pagos Online con tus TDC a nivel mundial
                  <img src="@/assets/como/visa.png" alt="" class="small-image" />
                  <img src="@/assets/como/mastercard.png" alt="" class="small-image" />
                  <img src="@/assets/como/american.png" alt="" class="small-image-2" />
                </p>
                <p>
                  Paga en la moneda que prefieras, de la forma que quieras y por la plataforma de tu
                  confianza.
                </p>
              </v-card-text>
            </v-flex>
          </v-layout>
        </v-card>
      </v-container>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
// import { Prop } from "vue-property-decorator";

@Component({
  name: 'HowItWorks',
  components: {},
})
export default class HowItWorks extends Vue {
  public currentStep = 1;

  public changeStep(newStep: number): void {
    this.currentStep = this.currentStep !== newStep ? newStep : 0;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.alignS-center {
  align-self: center;
}
</style>
