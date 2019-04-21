<template>
  <v-footer
    dark
    height="auto"
  >
    <v-card
      flat
      tile
      class="email-txt indigo lighten-1 white--text text-xs-center"
    >
      <v-card-text class="white--text pt-0">
        <Contact/>
        Feel free to email me at ryangundu@hotmail.com
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text>
        <v-btn href="https://github.com/RyanGundu" target="_blank" class="mx-3 white--text" icon>
          <v-icon size="24px">fa fa-github</v-icon>
        </v-btn>
        <v-btn href="https://www.linkedin.com/in/ryan-gundu/" target="_blank" class="mx-3 white--text" icon>
          <v-icon size="24px">fa fa-linkedin</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text">
        &copy;2019 — <strong>Ryan Gundu</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
  import Contact from './Contact.vue'
  
  export default {
    name: 'Footer',
    components: {
        Contact
    },
    data: () => ({
      icons: [
        'fa fa-github',
        'fa fa-linkedin'
      ]
    })
  }
</script>

<style scoped>
.email-txt {
    min-width: 100%;
}
</style>
