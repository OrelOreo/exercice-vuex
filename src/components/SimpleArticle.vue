<template>   
         <div class="article-item">
              <img :src="image.src" :alt="image.alt" class="article-item__image">
              <h3>{{ name }}</h3>
              <p for="add-item-quantity">Quantité: {{ quantity }}</p>
              <bouton @click="pushArticle">
                Ajouter au panier
              </bouton>
         </div>
</template>


<script>
import { mapState } from 'vuex'
import Vue from 'vue'
import BaseButton from './Bouton.vue'

export default {
    name: 'simpArticle',
    
    props: {
        image: {
            type: Object,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        quantity: {
            type: Number,
            required: true
        }
    },

    methods: {
            pushArticle() {
                let myNumber = this.quantity
        
                if (myNumber > 0){
                    myNumber--
                    this.$store.commit('ADD_ITEMS_TO_PANIER', this.name)
                }

                let index = this.simpleArticle.findIndex(a => a.name == this.name)
                Vue.set(this.simpleArticle[index],'quantity', myNumber)
            }
    },
    computed: {
       ...mapState({
            simpleArticle: 'simpleArticle'
       })
    },
    components: {
        'bouton': BaseButton
    }
    
}
</script>

<style lang="scss" scoped>

    .article-item {
        border: 1px solid black;
    }

    .article-item img {
        width: 200px;
        height: 200px;
        margin-top: 10px;
        object-fit: cover;
    }

    button {
        margin-bottom: 15px;
        padding: 10px;
        border-radius: 5px;
        border: none;
        cursor: pointer;
        background-color: rgb(67, 186, 133);
        color: #f1f1f1;
        font-weight: bold;
    }
    button:hover {
        background-color: rgba(67, 186, 133, 0.8);
    }
</style>