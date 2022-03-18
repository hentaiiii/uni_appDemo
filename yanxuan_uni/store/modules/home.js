import request from "../../utils/request.js"
const state = {
	test: '测试数据',
	indexData: {}
}

const mutations = {
	changeIndexDataMutation(state, data) {
		state.indexData = data
	}
}

const actions = {
	async getIndexDataAction({commit}) {
		const res = await request('/getIndexData')
		commit('changeIndexDataMutation', res)
	}
}

const getters = {}

export default {
	state,
	mutations,
	actions,
	getters
}