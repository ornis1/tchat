import db from '@/plugins/firebase'
import firebase from 'firebase/app'
import router from '@/router'

export default {
  namespaced: true,
  state: {
    messages: [],
    info: null,
    bottomDrawer: null,
    selectedMessage: null
  },
  mutations: {
    SET_MESSAGES(state, payload) {
      state.messages = payload
    },
    SET_INFO(state, payload) {
      state.info = payload
    },
    SET_BOTTOM_DRAWER(state, payload) {
      state.bottomDrawer = payload
    },
    SET_SELECTED_MESSAGE(state, payload) {
      state.selectedMessage = payload
    }
  },
  actions: {
    setSelectedMessage({ commit }, message) {
      commit('SET_SELECTED_MESSAGE', message)
      commit('SET_BOTTOM_DRAWER', true)
    },
    deleteMessage({ getters, commit }) {
      const { id } = getters.info
      const messageId = getters.selectedMessage.id
      db.collection('groups')
        .doc(id)
        .collection('messages')
        .doc(messageId)
        .delete()
        .then(() => {
          commit('SET_BOTTOM_DRAWER', false)
          commit('SET_SELECTED_MESSAGE', null)
        })
    },
    setBottomDrawer({ commit }, payload) {
      commit('SET_BOTTOM_DRAWER', payload)
    },
    loadInfo({ commit, dispatch }, id) {
      commit('SET_INFO', null)
      db.collection('groups')
        .doc(id)
        .onSnapshot(snapshot => {
          commit('SET_INFO', {
            id: snapshot.id,
            ...snapshot.data()
          })
        })
    },
    loadMessages({ commit, dispatch }, id) {
      commit('SET_MESSAGES', [])

      db.collection('groups')
        .doc(id)
        .get()
        .then(doc => {
          if (doc.exists) {
            db.collection('groups')
              .doc(id)
              .collection('messages')
              .orderBy('timestamp', 'asc')
              .onSnapshot(snapshot => {
                const messages = snapshot.docs.map(doc => ({
                  id: doc.id,
                  ...doc.data()
                }))
                commit('SET_MESSAGES', messages)
              })
          } else {
            router.push({ name: 'Home' })
          }
        })
    },
    sendMessage({ getters, rootGetters }, text) {
      const { id } = getters.info
      const user = rootGetters['user/user']
      const message = {
        text,
        type: 'text',
        sender: user.toObject(),
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      }
      db.collection('groups')
        .doc(id)
        .collection('messages')
        .add(message)
    },
    sendMediaMessage({ getters, rootGetters }, { url, caption }) {
      const { id } = getters.info
      const user = rootGetters['user/user']
      db.collection('groups')
        .doc(id)
        .collection('messages')
        .add({
          type: 'photo',
          url,
          caption,
          sender: user.toObject(),
          timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
    }
  },
  getters: {
    info: state => state.info,
    messages: state => state.messages,
    bottomDrawer: state => state.bottomDrawer,
    selectedMessage: state => state.selectedMessage
  }
}
