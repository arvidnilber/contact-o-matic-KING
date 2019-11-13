import Vue from 'vue'
import Router from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import ContactView from '@/views/ContactView.vue'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'The home page',
      component: HomeView
    },    
    {
      path: '/login',
      name: 'Login',
      component: LoginView
    },
    {
      path: '/contact/:id',
      name: 'Contact',
      component: ContactView
    }
  ]
})
