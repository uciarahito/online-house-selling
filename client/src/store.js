import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

export const store = new Vuex.Store({
  state: {
    houses: [],
    marker: {
      lat: -6.2372963,
      lng: 106.7904324
    }
  },
  getters: {
    houses(state) {
      return state.houses
    },
    marker(state) {
      return state.marker
    }
  },
  mutations: {
    displayAllHouse(state, data) {
      state.houses = data
    },
    setMarker(state, coordinateObj) {
      state.marker.lng = coordinateObj.lng;
      state.marker.lat = coordinateObj.lat;
    },
    addHouse(state, data) {
      state.houses.push(data)
    },
    editHouse(state, data) {
      const index = state.houses.findIndex((p) => p.id === data._id);
      if (index !== -1) {
        state.houses.splice(index, 1, data)
      }
    },
    deleteHouse(state, data) {
      console.log('==========');
      console.log(data);
      const index = state.houses.findIndex((p) => p.id === data._id);
      if (index !== -1) {
        state.houses.splice(index, 1)
        state.houses.filter(p => p.id !== data._id)
      }
    }
  },
  actions: {
    houses({
      commit
    }) {
      Vue.axios.get('http://localhost:3000/api/houses')
        .then(response => {
          console.log(response);
          commit('displayAllHouse', response.data)
        })
    },
    createNewHouse({
      commit
    }, data) {
      Vue.axios.post('http://localhost:3000/api/houses', {
          title: data.title,
          description: data.description,
          owner: data.owner,
          phone: data.phone,
          size: data.size,
          price: data.price,
          image: data.image,
          location: data.location,
          latlong: data.latlong,
          city: data.city,
          state: data.state
        })
        .then(response => {
          console.log(response);
          commit('addHouse', response.data)
        })
    },
    updateHouse({
      commit
    }, data) {
      console.log('---------');
      console.log(data);
      Vue.axios.put(`http://localhost:3000/api/house/${data._id}`, {
          title: data.title,
          description: data.description,
          owner: data.owner,
          phone: data.phone,
          size: data.size,
          price: data.price,
          image: data.image,
          location: data.location,
          latlong: data.latlong,
          city: data.city,
          state: data.state
        })
        .then(response => {
          console.log(response);
          commit('editHouse', response.data)
        })
    },
    deleteHouse({
      commit
    }, data) {
      // console.log(data);
      // console.log('######');
      Vue.axios.delete(`http://localhost:3000/api/house/${data}`)
        .then(response => {
          console.log('++++');
          console.log(response.data);
          commit('deleteHouse', response.data)
        })
    }
  }
})