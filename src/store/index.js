import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    panier: [],
    simpleArticle: [
      {
        name: 'Vin blanc Montagny',
        image: {
          src: require ('@/assets/article.avif'),
          alt: 'verre de vin blanc montagny',
        },
        quantity: 3
      },
      {
        name: 'Photo Fashion',
        image: {
          src: require ('@/assets/photo-fashion.avif'),
          alt: 'photo fashion'
        },
        quantity: 4
      },
      {
        name: 'Photo Fash',
        image: {
          src: require ('@/assets/photo-fash.avif'),
          alt: 'photo fash'
        },
        quantity: 2
      }
    ]
  },

  getters: {
    
  },

  mutations: {
    ADD_ITEMS_TO_PANIER(state, name){
      state.panier.push(name)

    },
    
  },

  actions: {  
    
  },

  modules: {
  }
})
