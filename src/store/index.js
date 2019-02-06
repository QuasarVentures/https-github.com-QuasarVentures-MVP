import Vue from 'vue'
import Vuex from 'vuex'

import user from './user'

const modules = {
  user
}

Vue.use(Vuex)

export default function () {
  const store = new Vuex.Store({
    modules
  })

  return store
}
