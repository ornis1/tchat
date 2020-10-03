import db from '@/plugins/firebase'

export default {
  namespaced: true,
  state: {
    group: false,
    palette: false,
    imageUpload: false
  },
  mutations: {
    TOGGLE_GROUP(state) {
      state.group = !state.group
    },
    TOGGLE_PALETTE(state) {
      state.palette = !state.palette
    },
    TOGGLE_IMAGE_UPLOAD(state) {
      state.imageUpload = !state.imageUpload
    }
  },
  actions: {
    toggleGroup({ commit }) {
      commit('TOGGLE_GROUP')
    },
    togglePalette({ commit }) {
      commit('TOGGLE_PALETTE')
    },
    toggleImageUpload({ commit }) {
      commit('TOGGLE_IMAGE_UPLOAD')
    },
    createGroup({ dispatch }, { title, color }) {
      db.collection('groups').add({ title, color })
      dispatch('toggleGroup')
    }
  },
  getters: {
    group: ({ group }) => group,
    palette: ({ palette }) => palette,
    imageUpload: ({ imageUpload }) => imageUpload
  }
}
