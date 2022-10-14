import { createStore } from 'vuex'

export default createStore({
  state: {
    rides: [],
    zones: [
      {
        id: 'north',
        name: 'Norte'
      },
      {
        id: 'south',
        name: 'Sul'
      },
      {
        id: 'east',
        name: 'Leste'
      },
      {
        id: 'west',
        name: 'Oeste'
      }
    ]
  },
  getters: {
    getRides: (state) => {
      return state.rides
    },

    getZones: (state) => {
      return state.zones
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
