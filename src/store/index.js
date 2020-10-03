import Vue from 'vue'
import Vuex from 'vuex'
import sidebar from '@/store/sidebar'
import modals from '@/store/modals'
import user from '@/store/user'
import chat from '@/store/chat'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    sidebar,
    modals,
    user,
    chat
  }
})
