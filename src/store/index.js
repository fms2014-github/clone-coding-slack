import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 모듈 호출
export default new Vuex.Store({
  modules: {
    Interaction,
  }
})
