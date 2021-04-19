<template>
  <v-container fluid pa-0>
    <v-stepper v-model="step" alt-labels class="grey lighten-1">
      <v-stepper-header>
        <v-stepper-step class="pa-3" key="1-step" :complete="step > 1" :step="1" editable>
        </v-stepper-step>
        <v-divider class="pa-3"></v-divider>
        <template v-for="n in steps">
          <v-stepper-step class="pa-3" :key="`${n}-step`" :complete="step > n" :step="n" editable>
          </v-stepper-step>
          <v-divider class="pa-3" v-if="n !== steps.length + 1" :key="n"></v-divider>
        </template>
      </v-stepper-header>
      <v-stepper-items>
        <v-stepper-content :key="`${1}-content`" step="1">
          <v-card class="mb-12" color="orange lighten-3 pa-3">
            <h2 style="text-align: center">I'm a</h2>
            <v-container>
              <v-layout class="text-center">
                <v-flex>
                  <v-btn
                    @click="setType('freelancer')"
                    class="orange lighten-1 ma-2"
                    style="width: 200px"
                  >
                    Freelancer
                  </v-btn>
                  <v-btn
                    @click="setType('client')"
                    class="orange lighten-1 ma-2"
                    style="width: 200px"
                  >
                    Client
                  </v-btn>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
          <v-layout class="text-center">
            <v-btn class="ma-2" color="orange lighten-2" @click="nextStep()"> Continue </v-btn>
            <v-btn class="ma-2" text> Cancel </v-btn>
          </v-layout>
        </v-stepper-content>
        <v-stepper-content class="text-center" v-for="n in steps" :key="`${n}-content`" :step="n">
          <v-card class="mb-2" color="orange lighten-3 ">
            <ClientForm v-if="type === 'client'" :key="`${n}-content`" :step="n"></ClientForm>
            <FreelancerForm
              v-if="type === 'freelancer'"
              :key="`${n}-content`"
              :step="n"
            ></FreelancerForm>
          </v-card>
          <v-layout class="text-center">
            <v-btn class="ma-2" color="orange lighten-2" v-if="step > 1" @click="backStep()">
              Back
            </v-btn>
            <v-btn class="ma-2" color="orange lighten-2" @click="nextStep()"> Continue </v-btn>
            <v-btn class="ma-2" text> Cancel </v-btn>
          </v-layout>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ClientForm from '@/partials/ClientForm.vue';
import FreelancerForm from '@/partials/FreelancerForm.vue';
// import { Prop } from "vue-property-decorator";

@Component({
  name: 'SignUp',
  components: {
    ClientForm,
    FreelancerForm,
  },
})
export default class SignUp extends Vue {
  public steps = [2, 3, 4, 5, 6, 7, 8, 9];
  public step = 1;
  public type = 'freelancer';

  public backStep(): void {
    this.step--;
  }
  public nextStep(): void {
    this.step++;
  }
  public setType(type: string): void {
    this.type = type;
    this.nextStep();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
