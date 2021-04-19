<template>
  <v-container fluid class="text-center orange lighten-3">
    <v-container v-if="step === 2">
      <v-card class="orange lighten-4 pa-5">
        <h2>General Info</h2>

        <v-text-field outlined label="Name"></v-text-field>
        <v-text-field outlined label="Last Name"></v-text-field>
        <v-text-field outlined label="Country"></v-text-field>
        <v-text-field outlined label="City"></v-text-field>
        <v-text-field outlined label="Email"></v-text-field>

        <label for="profesional">Professional Category*</label>
        <v-radio-group v-model="professionalType" row>
          <v-radio label="Freelance" value="1"></v-radio>
          <v-radio label="Limited Society" value="2"></v-radio>
          <v-radio label="Anonyme Society" value="3"></v-radio>
          <v-radio label="To register" value="4"></v-radio>
        </v-radio-group>
        <v-text-field outlined label="Other"></v-text-field>
      </v-card>
    </v-container>
    <v-container v-if="step === 3">
      <v-card class="orange lighten-4 pa-5">
        <h2>General Info</h2>

        <v-text-field outlined label="Freelancer Since"></v-text-field>
        <v-text-field outlined label="ID"></v-text-field>
        <div>
          <label for="abierto">¿Open to Job Offers?*</label>
          <v-radio-group v-model="openToJobOffer" row>
            <v-radio label="Yes" value="1"></v-radio>
            <v-radio label="No" value="0"></v-radio>
          </v-radio-group>
        </div>
        <v-text-field outlined label="Web"></v-text-field>
        <v-text-field outlined label="Phone Number"></v-text-field>
      </v-card>
    </v-container>
    <v-container v-if="step === 4">
      <v-card class="orange lighten-4 pa-5">
        <h4>Skill Knowledge</h4>
        <p>Please select your level of experience working with the following technologies</p>
        <v-layout>
          <v-flex mr-2>
            <v-select outlined label="Photoshop"></v-select>
            <v-select outlined label="Ilustrator"></v-select>
            <v-select outlined label="InDesign"></v-select>
            <v-select outlined label="Lightroom"></v-select>
            <v-select outlined label=""></v-select>
            <v-select outlined label="AfterEfects"></v-select>
            <v-select outlined label="Animator"></v-select>
            <v-select outlined label="Character Animation"></v-select>
          </v-flex>
          <v-flex>
            <v-select outlined label="Flash"></v-select>
            <v-select outlined label="Mobile"></v-select>
            <v-select outlined label="Dreamweaver"></v-select>
            <v-select outlined label="Muse"></v-select>
            <v-select outlined label="Fuse"></v-select>
            <v-select outlined label="Prelude"></v-select>
            <v-select outlined label="SpeedGrade"></v-select>
            <v-select outlined label="Audition"></v-select>
          </v-flex>
        </v-layout>
      </v-card>
    </v-container>
    <v-container v-if="step === 5">
      <v-card class="orange lighten-4 pa-5">
        <h4>Job Experience</h4>
        <p>Select the level of experience working in the following project types</p>
        <v-layout>
          <v-flex mr-2>
            <v-select outlined label="Logo / Isotype Design"></v-select>
            <v-select outlined label="Brand Creation"></v-select>
            <v-select outlined label="Publicitario Design"></v-select>
            <v-select outlined label="Editorial"></v-select>
            <v-select outlined label="Gigantography"></v-select>
            <v-select outlined label="Press"></v-select>
            <v-select outlined label="Packaging"></v-select>
            <v-select outlined label="Web Design"></v-select>
          </v-flex>
          <v-flex>
            <v-select outlined label="App Design"></v-select>
            <v-select outlined label="Animation"></v-select>
            <v-select outlined label="Media"></v-select>
            <v-select outlined label="Photography"></v-select>
            <v-select outlined label="Drawing"></v-select>
            <v-select outlined label="Marketing"></v-select>
            <v-select outlined label="Comunity Manager"></v-select>
            <v-text-field outlined label="Other"></v-text-field>
          </v-flex>
        </v-layout>
      </v-card>
    </v-container>
    <v-container v-if="step === 6">
      <v-card class="orange lighten-4 pa-5">
        <h2>Other Info</h2>
        <div>
          <h3>Spoken Languages*</h3>
          <v-checkbox label="German" color="red" value="red" hide-details></v-checkbox>
          <v-checkbox label="Spanish" color="red" value="red" hide-details></v-checkbox>
          <v-checkbox label="English" color="red" value="red" hide-details></v-checkbox>
          <v-checkbox label="French" color="red" value="red" hide-details></v-checkbox>
          <v-checkbox label="Italian" color="red" value="red" hide-details></v-checkbox>
          <v-checkbox label="Portuguese" color="red" value="red" hide-details></v-checkbox>
          <v-text-field outlined label="Other"></v-text-field>
        </div>
        <div>
          <h2>¿Do you have any personal references?</h2>
          <small>
            Please provide with the info required down if you have work in any of the previous areas
          </small>
          <v-textarea outlined></v-textarea>
        </div>
      </v-card>
    </v-container>
    <v-container v-if="step === 7">
      <v-card class="orange lighten-4 pa-5">
        <h2>Project Sample 1 (Required)</h2>
        <div>
          <label for="descripcion">Project Description*</label>
          <v-textarea outlined></v-textarea>
        </div>
        <v-text-field outlined label="Client Email"></v-text-field>
        <v-text-field outlined label="Client Phone Number"></v-text-field>
        <v-text-field outlined label="File"></v-text-field>
      </v-card>
    </v-container>
    <v-container v-if="step === 8">
      <v-card class="orange lighten-4 pa-5">
        <h2>Project Sample 2 (Required)</h2>
        <div>
          <label for="descripcion">Project Description*</label>
          <v-textarea outlined></v-textarea>
        </div>
        <v-text-field outlined label="Client Email"></v-text-field>
        <v-text-field outlined label="Client Phone Number"></v-text-field>
        <v-text-field outlined label="File"></v-text-field>
      </v-card>
    </v-container>
    <v-container v-if="step === 9">
      <v-card class="orange lighten-4 pa-5">
        <h2>Project Sample 3</h2>
        <div>
          <label for="descripcion">Project Description*</label>
          <v-textarea outlined></v-textarea>
        </div>
        <v-text-field outlined label="Client Email"></v-text-field>
        <v-text-field outlined label="Client Phone Number"></v-text-field>
        <v-text-field outlined label="File"></v-text-field>
      </v-card>
    </v-container>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
  name: 'FreelancerForm',
  components: {},
})
export default class FreelancerForm extends Vue {
  @Prop() public step!: boolean;
  public professionalType = 1;
  public openToJobOffer = 1;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
