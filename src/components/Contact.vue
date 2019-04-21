<template>
  <div id="contact">
      <Diamond msg="Contact"/>
      <v-form class="contact-form" ref="form" lazy-validation>
        <v-text-field
          v-model="name"
          v-on:input="validate"
          :counter="20"
          label="Name"
          required
        ></v-text-field>

        <v-text-field
          v-model="email"
          v-on:input="validate"
          label="E-mail"
          required
        ></v-text-field>

        <v-text-field
          v-model="message"
          v-on:input="validate"
          label="Message"
          :counter="250"
          required
        ></v-text-field>

        <v-checkbox
          v-model="checkbox"
          v-on:change="validate"
          label="Check to confirm submition"
          required
        ></v-checkbox>

        <v-btn
          class="btn"
          :disabled="!valid"
          color="#73ad58"
          @click="submit"
        >
          Submit
        </v-btn>

        <v-btn 
          class="btn"
          color="#e28b20"
          @click="reset"
        >
          Reset
        </v-btn>
  </v-form>

  </div>
</template>

<script>
import { pushMessage } from '../firebase'
import Diamond from './Diamond.vue'
export default {
    name: 'Contact',
    components: {
      Diamond
    },
    data: () => ({
      name: '',
      email: '',
      message: '',
      checkbox: false,
      valid: false
    }),
    methods: {
      submit() {
        //send email logic here
        pushMessage({Name: this.name, Email: this.email, Message: this.message});
        this.reset();
      },
      reset () {
        this.name = ''
        this.email = ''
        this.message = ''
        this.checkbox = false
        this.valid = false
      },
      validate () {
        if (this.name.length > 0 && this.email.length > 0 && this.message.length > 0 && this.checkbox)
          this.valid = true;
        else this.valid = false;
      }
    }
}
</script>


<style scoped>
.contact-form {
  max-width: 700px;
  padding: 20px;
  margin: 0 auto;
}

.btn {
  color: aliceblue;
}

</style>
