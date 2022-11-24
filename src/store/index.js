import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    simpleArticle: [
      {
        name: 'Vin blanc Montagny',
        image: {
          src: require ('@/assets/article.avif'),
          alt: 'verre de vin blanc montagny'
        }
      },
      {
        name: 'Photo Fashion',
        image: {
          src: require ('@/assets/photo-fashion.avif'),
          alt: 'photo fashion'
        }
      },
      {
        name: 'Photo Fash',
        image: {
          src: require ('@/assets/photo-fash.avif'),
          alt: 'photo fash'
        },
      }
    ]
  },

  getters: {
  },

  mutations: {
  },

  actions: {
  },

  modules: {
  }
})
