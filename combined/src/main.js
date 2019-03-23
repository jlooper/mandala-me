import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import Vuetify from 'vuetify';
import 'vuetify/src/stylus/app.styl';

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
//Vue.use(firebase);
Vue.prototype.$firebase = firebase;
Vue.use(Vuetify, {
	iconfont: 'md',
	theme: {
		primary: '#000',
		secondary: '#7702A7',
		links: '#FFF',
	},
});

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app');
