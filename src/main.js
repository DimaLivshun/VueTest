import Vue from 'vue'
import App from './App.vue'

import AppTableProduct from './components/TableProduct.vue';
import AppProduct from './components/Product.vue';

Vue.component('AppTableProduct', AppTableProduct);
Vue.component('AppProduct', AppProduct);

new Vue({
  el: '#app',
  render: h => h(App)
})