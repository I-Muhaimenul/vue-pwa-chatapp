import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Auth from '../components/Auth.vue'
import Chat from '../components/Chat.vue'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'Hello',
    //   component: Hello
    // }
    { path: '/', component: Auth },
    { path: '/auth', component: Auth },
    { path: '/chat', component: Chat }
  ]
})
