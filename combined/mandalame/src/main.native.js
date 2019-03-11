import Vue from 'nativescript-vue';
import App from './App.vue'
import store from './store';

// Set the following to `true` to hide the logs created by nativescript-vue
Vue.config.silent = false;
// Set the following to `false` to not colorize the logs created by nativescript-vue
// disabled in template due to typing issue for Typescript projects....NEEDS TO BE FIXED
// Vue.config.debug = true;

new Vue({
  store,
  render: (h) => h('frame', [h(App)])
}).$start();
