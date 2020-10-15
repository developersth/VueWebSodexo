import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios";
import VueAxios from "vue-axios";
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
import VueSweetalert2 from "vue-sweetalert2";
import 'sweetalert2/dist/sweetalert2.min.css';
import VueSession from 'vue-session';
Vue.use(VueSession);
Vue.use(VueSweetalert2);
Vue.use(DatePicker);
Vue.use(VueAxios, axios);
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
