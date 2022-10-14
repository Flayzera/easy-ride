import { createStore } from 'vuex'

export default createStore({
  state: {
    rides: []
  },
  getters: {
    getRides: (state) => {
      return state.rides
    }
  },
  mutations: {
    registerRide: (state, n) => {
      state.rides.push(n)
    }
  },
  actions: {
  },
  modules: {
  }
})
