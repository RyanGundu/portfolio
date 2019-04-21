<template>
  <div class="card">
  <v-layout>
    <v-flex>
      <v-card>
        <v-img
          class="white--text"
          height="200px"
          :src="project.img"
        >
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline">{{project.title}}</span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-img>
        <v-card-title>
          <div>
            <span class="grey--text">{{project.tools}}</span><br>
            <span>{{project.message}}</span>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn v-if="project.url.length > 0" :href="project.url" target="_blank" flat color="orange">SRORCE_CODE</v-btn>
          <v-btn v-if="project.link.length > 0" :href="project.link" target="_blank" flat color="orange">LINK</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
  </div>
</template>

<script>
export default {
    name: 'project-card',
    props: {
        project: Object
    }
}
</script>

<style scoped>
.card {
  padding: 10px;
  margin:  10px;
}
.headline {
  background-color: #282828;
  padding: 5px;
}
</style>

