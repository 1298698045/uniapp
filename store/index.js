import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
	state:{
		cont:1
	},
	mutations:{
		add(state){
			state.cont++;
		}
	},
	actions:{
		activeAdd({commit}){
			setTimeout(()=>{
				commit('add');
			},1000)
		}
	},
	getters:{
		contGetter(state){
			return state.cont > 0 ? state.cont : 0; 
		}
	}
})
export default store;