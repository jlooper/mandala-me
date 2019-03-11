import Vue from 'vue';
import Vuex from 'vuex';
import firebase from 'firebase';

Vue.use(Vuex);

const state = {
	images: [],
	mandala: [],
};

const mutations = {
	setImages: (state, payload) => {
		state.images = payload;
	},
	setMandala: (state, payload) => {
		state.mandala = payload;
	},
};

const getters = {
	mandala: (state) => state.mandala
};

const actions = {
	fetchImages({ commit }) {
		firebase
			.database()
			.ref('Mandalas')
			.once('value', function(data) {
				const obj = data.val();
				const images = Object.keys(obj || {}).map(key => ({
					id: key,
					image: obj[key].image,
				}));
				commit('setImages', images);
			});
	},
	buildMandala({ commit }, images) {
		commit('setMandala', images);
	}
};

const storeConf = {
	state,
	getters,
	mutations,
	actions,
};

export default new Vuex.Store(storeConf);
