import Vue from 'vue'
import Vuex from 'vuex'

import example from './example'

const modules = {
  example
}

Vue.use(Vuex)

export default function () {
  const store = new Vuex.Store({
    modules
  })

  return store
}
