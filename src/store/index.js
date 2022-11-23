import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    nbArticles: 0,
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
        }
      }
    ]
  },

  getters: {
    formattedNbArticle(state) {
      return `${state.nbArticles} article(s) ajoutés au panier`
    }
  },

  mutations: {
    INCREMENT_ARTICLE(state) {
      state.nbArticles++
    },
    DECREMENT_ARTICLE(state) {
      state.nbArticles--
    }
  },

  actions: {
    incrementArticle(context) {
      context.commit('INCREMENT_ARTICLE')
    },
    decrementArticle(context) {
      if (context.state.nbArticles <= 0){
        this.state.nbArticles = 0
      } 
      else {
        context.commit('DECREMENT_ARTICLE')
      }
    }
  },

  modules: {
  }
})
