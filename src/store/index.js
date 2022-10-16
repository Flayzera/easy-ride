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
    ],
    info: {},

    fullName: ''
  },
  getters: {
    getRides: (state) => {
      return state.rides
    },

    getZones: (state) => {
      return state.zones
    },
    getPlacaAndVehicle: (state) => {
      return state.info
    },
    getFullName: (state) => {
      return state.fullName
    }
  },
  mutations: {
    registerRide: (state, n) => {
      state.rides.push(n)
      console.log(state.rides)
    },
    setPlacaAndVehicle: (state, n) => {
      state.info = n
      console.log(state.info)
    },
    setFullName: (state, n) => {
      state.fullName = n
    },
    finishRide: (state, ride) => {
      state.rides = state.rides.filter((item) => { return item.id !== ride.id })
    }
  },
  actions: {
  },
  modules: {
  }
})
