// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import router from './router'
import Vuefire from 'vuefire'
import firebase from './firebase/index'

Vue.config.productionTip = false

//vuefire is for communcate with firbase
Vue.use(Vuefire)
Vue.use(VueRouter)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$router.push('/chat')
      } else {
        this.$router.push('/auth')
      }
    })
  },
  template: '<App/>',
  components: { App }
})
