<template>   
         <div class="article-item">
              <img :src="item.image.src" :alt="item.image.alt" class="article-item__image">
              <h3>{{ item.name }}</h3>

             <div class="button">
                <buttonAdd @click="updateShoppingCart(item)">
                    Ajouter au panier
                </buttonAdd>
                 <p>{{ nbArticle }}</p>        
            </div>
         </div>
</template>


<script>

import ButtonAddArticles from './Button.vue'

export default {
    name: 'simpArticle',
    data() {
        return {
            nbArticle: 0
        }
    },
    props: {
        item: {
            type: Object,
            required: true
        },
        addItemToShoppinCart: {
            type: Object,
            required: true
        }
    },
    methods: {
        updateShoppingCart() {
            this.nbArticle++
            
		},
    },
    components: {
        'buttonAdd': ButtonAddArticles
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

</style>