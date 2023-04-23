import {createStore} from 'vuex'
import home from './home/index.js'
import {SAVEWINDOWINFO} from '/const/index.js'


let store = createStore(
	{	
		state:{},
		actions:{
			async getWindowInfo({commit},params){
				let result  = await uni.getWindowInfo()
				if(result){
					commit(SAVEWINDOWINFO,result)
					console.log('action reault',result)
				}
			},
		},
		mutations:{
			SAVEWINDOWINFO(state,data){
				state.windowInfo = data
			}
		},	
		modules:{home}
	}
)

export default store;