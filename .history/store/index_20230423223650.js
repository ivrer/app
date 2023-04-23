import {createStore} from 'vuex'
import home from './home/index.js'
import {SAVEWINDOWINFO} from '/const/index.js'
import { SAVESYSTEMINFO } from '../const/index.js'


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
			async getSystemInfo({commit},params){
				 uni.getSystemInfo({sucees:(res) => {
					commit(SAVESYSTEMINFO,res)
				}})
			}
			

		},
		mutations:{
			SAVEWINDOWINFO(state,data){
				state.windowInfo = data
				state.systemInfo = data
			},
			SAVESYSTEMINFO(){
				
			}
		},	
		modules:{home}
	}
)

export default store;