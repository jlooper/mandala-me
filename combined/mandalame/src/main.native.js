import Vue from 'nativescript-vue';
import App from './App.vue';
import firebase from 'nativescript-plugin-firebase';
import store from './store';

firebase
	.init({
		persist: true,
		storageBucket: 'gs://mandala-me.appspot.com',
	})
	.then(
		instance => {
			console.log('firebase.init done');
		},
		error => {
			console.log(`firebase.init error: ${error}`);
		}
	);
Vue.prototype.$firebase = firebase;
import MultiDrawer from 'nativescript-vue-multi-drawer';
Vue.use(MultiDrawer);
Vue.registerElement('PaintPad', () => require('nativescript-paint').PaintPad);

Vue.config.silent = false;

new Vue({
	store,
	render: h => h('frame', [h(App)]),
}).$start();
