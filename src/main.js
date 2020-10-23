import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios";
import VueAxios from "vue-axios";
import VueSweetalert2 from "vue-sweetalert2";
import 'sweetalert2/dist/sweetalert2.min.css';
import VueSession from 'vue-session';
import i18n from './i18n';
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
/* import 'bootstrap/dist/css/bootstrap.css' */
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(require('vue-moment'));
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(VueSession);
Vue.use(VueSweetalert2);
Vue.use(DatePicker);
Vue.use(VueAxios, axios);
Vue.config.productionTip = false
Vue.config.productionTip = false

// use beforeEach route guard to set the language
router.beforeEach((to, from, next) => {

  // use the language from the routing param or default language
  let language = to.params.lang;
  if (!language) {
    language = 'en'
  }

  // set the current language for i18n.
  i18n.locale = language
  next()
})

new Vue({
  router,
  i18n,
  store,
  render: h => h(App)
}).$mount('#app')
