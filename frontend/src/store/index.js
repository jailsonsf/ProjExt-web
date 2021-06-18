import Vue from 'vue'
import Vuex from 'vuex'

import booksStore from './modules/booksStore'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  modules: {
    booksStore
  }
})
