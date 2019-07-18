import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    product: {}
  },

  getters: {
    product: state => state.product
  },

  mutations: {
    setProduct(state, product) {
      state.product = product
    }
  },
  actions: {
    async getProduct(context) {
      const response = await fetch('https://demo0655245.mockable.io/v1/tracking?search=PM371835103BR')

      const json = await response.json()

      console.log(json)

      context.commit('setProduct', json)
    }
  }
})
