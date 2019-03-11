import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import router from './router';
import store from './store';
import firebase from 'firebase/app';
// Setup Firebase
var config = {
	apiKey: 'AIzaSyBn2Z28kjxf-G0N-91LWVJuykRN3zk3teo',
	projectId: 'mandala-me',
	databaseURL: 'https://mandala-me.firebaseio.com',
	storageBucket: 'mandala-me.appspot.com',
};
firebase.initializeApp(config);
Vue.config.productionTip = false;
Vue.use(firebase);

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app');
