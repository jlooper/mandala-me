import Vue from 'vue'
import App from './App.vue'
import * as firebase from 'firebase'
Vue.use(firebase)
// Setup Firebase
var config = {
  apiKey: "AIzaSyBn2Z28kjxf-G0N-91LWVJuykRN3zk3teo",
  projectId: "mandala-me",
  storageBucket: "mandala-me.appspot.com",
};
firebase.initializeApp(config);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
