import Vue from 'nativescript-vue';
import Home from './components/Home';
import firebase from 'nativescript-plugin-firebase';
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
import MultiDrawer from 'nativescript-vue-multi-drawer'
Vue.use(MultiDrawer)
Vue.registerElement('PaintPad', () => require('nativescript-paint').PaintPad);

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = TNS_ENV === 'production';

new Vue({
	render: h => h('frame', [h(Home)]),
}).$start();
