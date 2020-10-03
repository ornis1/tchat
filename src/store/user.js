import db, { auth, provider } from '@/plugins/firebase'
import router from '@/router'

class GoogleUser {
  constructor({ displayName, email, photoURL, uid }) {
    this.name = displayName
    this.email = email
    this.photo = photoURL
    this.id = uid
  }

  // Возвращает объект с данными пользователя
  // Нужно для некоторых функций firebase
  // т.к. передача экземпляра класса в качестве параметра
  // вызывает ошибку
  toObject() {
    return { ...this }
  }
}
export default {
  namespaced: true,
  state: {
    user: null
  },
  mutations: {
    SET_USER(state, payload) {
      state.user = payload === null ? payload : new GoogleUser(payload)
    }
  },
  actions: {
    logger(context, user) {
      db.collection('users').add(new GoogleUser(user).toObject())
    },
    signIn({ commit, dispatch }) {
      auth
        .signInWithPopup(provider)
        .then(response => {
          commit('SET_USER', response.user)
          dispatch('logger', response.user)
          router.push({ name: 'Home' })
        })
        .catch(error => {
          throw new Error(error)
        })
    },
    signOut({ commit }) {
      auth
        .signOut()
        .then(() => {
          commit('SET_USER', null)
          router.push({ name: 'Auth' })
        })
        .catch(error => {
          throw new Error(error)
        })
    },
    onAuthStateChanged({ commit }) {
      auth.onAuthStateChanged(user => {
        commit('SET_USER', user)
      })
    }
  },
  getters: {
    user: state => state.user
  }
}
