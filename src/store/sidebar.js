import db from '@/plugins/firebase'

export default {
  namespaced: true,
  state: {
    groups: [],
    input: '',
    drawer: true
  },
  mutations: {
    SET_INPUT(state, payload) {
      state.input = payload
    },
    SET_GROUPS(state, payload) {
      state.groups = payload
    },
    SET_DRAWER(state, payload) {
      state.drawer = payload
    }
  },
  actions: {
    setInput({ commit }, payload) {
      commit('SET_INPUT', payload)
    },
    async setGroups({ commit }) {
      db.collection('groups').onSnapshot(snapshot => {
        const groups = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
        commit('SET_GROUPS', groups)
      })
    }
  },
  getters: {
    groups: (state, getters) => {
      const search = getters.input
      if (!search) return state.groups
      return state.groups.filter(group =>
        group.title
          .toLowerCase()
          .trim()
          .includes(search.toLowerCase().trim())
      )
    },
    input: state => state.input,
    drawer: state => state.drawer
  }
}
