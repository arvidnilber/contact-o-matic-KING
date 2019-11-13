import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuetify from 'vuetify';
import vuetify from './plugins/vuetify';
import '@/assets/style.css'
import 'vuetify/dist/vuetify.min.css';
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import "vue-material/dist/theme/default.css";
Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
Vue.use(Vuetify)
Vue.use(VueMaterial)


axios.interceptors.request.use(
  config => {
      const token = localStorage.getItem("access_token");
      if (token) {
          config.headers['Authorization'] = 'Bearer ' + token;
      }
      // config.headers['Content-Type'] = 'application/json';
      return config;
  },
  error => {
      Promise.reject(error)
  });


const bus = new Vue()
Vue.prototype.$bus = bus

new Vue({
    router,
    vuetify,
    render: h => h(App)
}).$mount('#app')
