import {SAVEWINDOWINFO} from '/const/index.js'

const state = {}


const getters = {}

const actions = {
	async getWindowInfo({commit},params){
		let result  = await uni.getWindowInfo()
		if(result){
			commit(SAVEWINDOWINFO,result)
			console.log('action reault',result)
		}
	}
}

const mutations = {
	SAVEWINDOWINFO(state,data){
		state.windowInfo = data
	}
}

export default {state,getters,actions,mutations}