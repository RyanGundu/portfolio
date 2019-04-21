import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import './firebase'
import VueFire from 'vuefire'

Vue.use(VueFire)
Vue.use(Vuetify)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
