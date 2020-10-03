import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { auth } from '@/plugins/firebase'
Vue.config.productionTip = false
router.beforeEach((to, from, next) => {
  if (auth.currentUser !== null && to.path === '/auth') {
    next('/im')
    return
  }
  if (!auth.currentUser && to.path !== '/auth') {
    next('/auth')
    return
  }
  next()
})

// Wrap the vue instance in a Firebase onAuthStateChanged method
// This stops the execution of the navigation guard 'beforeEach'
// method until the Firebase initialization ends
auth.onAuthStateChanged(user => {
  store.commit('user/SET_USER', user)
  new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
  }).$mount('#app')
})
