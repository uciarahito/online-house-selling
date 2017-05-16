import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

export const store = new Vuex.Store({
  state: {
    houses: []
  },
  getters: {
    houses(state) {
      return state.houses
    },
    getHouseById(state, house_id) {
      console.log('house id (store file) :' + house_id);
      const index = state.houses.findIndex((p) => p.id === house_id);
      return state.houses[index]
    }
  },
  mutations: {
    displayAllHouse(state, data) {
      state.houses = data
    },
    addHouse(state, data) {
      state.houses.push(data)
    },
    editHouse(state, data) {
      const index = state.houses.findIndex((p) => p.id === data.id);
      if (index !== -1) {
        state.houses.splice(index, 1, data)
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
      Vue.axios.put(`http://localhost:3000/api/house/${data.id}`, {
          title: data.title,
          description: data.description,
          owner: data.owner,
          phone: data.phone,
          size: data.size,
          price: data.price,
          image: data.image,
          location: data.location,
          city: data.city,
          state: data.state
        })
        .then(response => {
          console.log(response);
          commit('editHouse', response.data)
        })
    }
  }
})