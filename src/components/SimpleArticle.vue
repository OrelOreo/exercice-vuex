<template>   
         <div class="article-item">
              <img :src="item.image.src" :alt="item.image.alt" class="article-item__image">
              <h3>{{ item.name }}</h3>

                <button @click="addItemToShoppingCart">
                    Ajouter au panier
                </button>          
         </div>
</template>

<script>


export default {
    name: 'simpArticle',
    props: {
        item: {
            type: Object,
            required: true
        },
        addItem: {
            type: Object,
            required: true
        }
    },
    methods: {
        addItemToShoppingCart() {
            
        }
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
        margin-bottom: 10px;
    }
</style>