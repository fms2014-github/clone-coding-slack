import Vue from 'vue'
import Vuex from 'vuex'
import Interaction from './modules/Interaction'

Vue.use(Vuex)

// 모듈 호출
export default new Vuex.Store({
  modules: {
    Interaction,
  }
})
