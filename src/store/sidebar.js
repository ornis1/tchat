import { chat } from '@/api.shema.js'

export default {
  namespaced: true,
  state: {
    chats: [
      chat,
      {
        ...chat,
        id: 2
      }
    ],
    input: ''
  },
  mutations: {
    SET_INPUT(state, payload) {
      state.input = payload
    }
  },
  actions: {
    setInput({ commit }, payload) {
      commit('SET_INPUT', payload)
    }
  },
  getters: {
    chats: state => state.chats,
    input: state => state.input
  }
}
