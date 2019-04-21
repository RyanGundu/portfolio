<template>
  <div id="app">
    <Header/>
    <Projects/>
    <Skills/>
    <About/>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Projects from './components/Projects.vue'
import Skills from './components/Skills.vue'
import About from './components/About.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    Header,
    Projects,
    Skills,
    About,
    Footer
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
}
#app, body, html {
  height: 100%;
}

</style>
